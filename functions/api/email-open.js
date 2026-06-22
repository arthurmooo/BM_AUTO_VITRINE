const AIRTABLE_BASE_ID = "appWnHsc1YfR54yYf";
const OUTREACH_TABLE_ID = "tblGiyl2ZWkd56kkd";
const EMAIL_OPENS_TABLE_ID = "tblBvhq8UPLXTqRI1";
const OPEN_GRACE_PERIOD_SECONDS = 5 * 60;

const TRANSPARENT_GIF_BYTES = Uint8Array.from(
  atob("R0lGODlhAQABAIABAP///wAAACH5BAEAAAEALAAAAAABAAEAAAICTAEAOw=="),
  (char) => char.charCodeAt(0),
);

function clientIp(request) {
  return (
    request.headers.get("cf-connecting-ip") ||
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    ""
  );
}

async function shortHash(value, salt) {
  const payload = new TextEncoder().encode(`${salt}:${value}`);
  const digest = await crypto.subtle.digest("SHA-256", payload);
  return Array.from(new Uint8Array(digest))
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("")
    .slice(0, 16);
}

function escapeFormulaString(value) {
  return String(value).replace(/'/g, "\\'");
}

async function airtableRequest(token, method, tableId, path = "", body) {
  const response = await fetch(
    `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${tableId}${path}`,
    {
      method,
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: body ? JSON.stringify(body) : undefined,
    },
  );

  if (!response.ok) {
    throw new Error(`Airtable ${method} ${tableId}${path} failed: ${response.status}`);
  }

  return response.status === 204 ? {} : response.json();
}

async function resolveOutreach(token, outreachRecordId, outreachId) {
  if (outreachRecordId) {
    try {
      return await airtableRequest(token, "GET", OUTREACH_TABLE_ID, `/${outreachRecordId}`);
    } catch (error) {
      console.warn("BM email open Outreach record lookup failed", error.message);
    }
  }

  if (!outreachId) return null;

  const params = new URLSearchParams({
    maxRecords: "1",
    filterByFormula: `{outreach_id}='${escapeFormulaString(outreachId)}'`,
  });
  const result = await airtableRequest(token, "GET", OUTREACH_TABLE_ID, `?${params}`);
  return result.records?.[0] || null;
}

function parseSentAtEpoch(value) {
  if (!value) return null;
  const parsed = Number(value);
  if (!Number.isFinite(parsed) || parsed <= 0) return null;
  return parsed;
}

function classifyOpenEvent(openedAtMs, sentAtEpoch) {
  if (!sentAtEpoch) {
    return {
      eventType: "open",
      shouldCount: true,
      notes:
        "Ouverture détectée via pixel invisible. Signal faible : images/proxys/cache peuvent fausser l'interprétation.",
    };
  }

  const secondsAfterSend = Math.floor(openedAtMs / 1000) - sentAtEpoch;
  if (secondsAfterSend >= 0 && secondsAfterSend < OPEN_GRACE_PERIOD_SECONDS) {
    return {
      eventType: "ignored_auto_prefetch",
      shouldCount: false,
      secondsAfterSend,
      notes:
        `Hit pixel ignoré pour le compteur d'ouverture: ${secondsAfterSend}s après l'envoi, ` +
        `sous la fenêtre anti-préchargement de ${OPEN_GRACE_PERIOD_SECONDS}s. ` +
        "Probable proxy, scan sécurité ou préchargement d'image.",
    };
  }

  return {
    eventType: "open",
    shouldCount: true,
    secondsAfterSend,
    notes:
      "Ouverture détectée via pixel invisible après la fenêtre anti-préchargement. " +
      "Signal faible : images/proxys/cache peuvent encore fausser l'interprétation.",
  };
}

async function createOpenEvent(token, event, outreachRecord) {
  const outreachFields = outreachRecord?.fields || {};
  const fields = {
    event_id: `OPEN-${event.trackingId || "unknown"}-${Date.now()}`,
    timestamp: event.openedAt,
    tracking_id: event.trackingId || "",
    outreach_id: event.outreachId || outreachFields.outreach_id || "",
    recipient_hash: event.recipientHash || "",
    event_type: event.eventType,
    user_agent: event.userAgent || "",
    ip_hash: event.ipHash || "",
    source: "email_pixel",
    notes: event.notes,
  };

  if (outreachRecord?.id) fields.outreach_record = [outreachRecord.id];
  if (Array.isArray(outreachFields.prospect_id)) fields.prospect = outreachFields.prospect_id;
  if (Array.isArray(outreachFields.contact_id)) fields.contact = outreachFields.contact_id;

  return airtableRequest(token, "POST", EMAIL_OPENS_TABLE_ID, "", {
    fields,
    typecast: true,
  });
}

async function updateOutreachOpenSummary(token, event, outreachRecord, openEventRecord) {
  if (!outreachRecord?.id) return;

  const fields = outreachRecord.fields || {};
  await airtableRequest(token, "PATCH", OUTREACH_TABLE_ID, `/${outreachRecord.id}`, {
    fields: {
      open_tracking_id: fields.open_tracking_id || event.trackingId || "",
      open_count: Number(fields.open_count || 0) + 1,
      first_opened_at: fields.first_opened_at || event.openedAt,
      last_opened_at: event.openedAt,
      last_open_event: [openEventRecord.id],
      tracking_status: "opened",
    },
    typecast: true,
  });
}

async function logOpenToAirtable(request, env) {
  const url = new URL(request.url);
  const trackingId = url.searchParams.get("t") || "";
  if (!trackingId) return;

  const token = env.BM_AIRTABLE_TOKEN || env.AIRTABLE_TOKEN;
  if (!token) {
    console.log("BM email open", { trackingId });
    return;
  }

  const openedAtMs = Date.now();
  const classification = classifyOpenEvent(
    openedAtMs,
    parseSentAtEpoch(url.searchParams.get("s")),
  );

  const event = {
    trackingId,
    outreachId: url.searchParams.get("o") || "",
    outreachRecordId: url.searchParams.get("r") || "",
    recipientHash: url.searchParams.get("rh") || "",
    userAgent: request.headers.get("user-agent") || "",
    ipHash: await shortHash(clientIp(request), env.BM_EMAIL_TRACKING_SALT || "bm-email-open"),
    openedAt: new Date(openedAtMs).toISOString(),
    eventType: classification.eventType,
    shouldCount: classification.shouldCount,
    secondsAfterSend: classification.secondsAfterSend,
    notes: classification.notes,
  };

  const outreachRecord = await resolveOutreach(
    token,
    event.outreachRecordId,
    event.outreachId,
  );
  const openEventRecord = await createOpenEvent(token, event, outreachRecord);
  if (event.shouldCount) {
    await updateOutreachOpenSummary(token, event, outreachRecord, openEventRecord);
  }
}

export async function onRequestGet({ request, env }) {
  try {
    await logOpenToAirtable(request, env);
  } catch (error) {
    console.warn("BM email open tracking failed", error.message);
  }

  return new Response(TRANSPARENT_GIF_BYTES, {
    headers: {
      "Content-Type": "image/gif",
      "Content-Length": String(TRANSPARENT_GIF_BYTES.length),
      "Cache-Control": "no-store, no-cache, must-revalidate, max-age=0",
      Pragma: "no-cache",
      Expires: "0",
    },
  });
}
