const AIRTABLE_BASE_ID = "appWnHsc1YfR54yYf";
const OUTREACH_TABLE_ID = "tblGiyl2ZWkd56kkd";
const EMAIL_EVENTS_TABLE_ID = "tblBvhq8UPLXTqRI1";
const CLICK_GRACE_PERIOD_SECONDS = 5 * 60;
const BM_OID_RE = /^otc_[A-Za-z0-9_-]{8,80}$/;

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

async function resolveOutreachByClickId(token, bmOid) {
  const params = new URLSearchParams({
    maxRecords: "1",
    filterByFormula: `{click_tracking_id}='${escapeFormulaString(bmOid)}'`,
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

function classifyClickEvent(clickedAtMs, sentAtEpoch) {
  if (!sentAtEpoch) {
    return {
      eventType: "email_click",
      shouldCount: true,
      notes:
        "Clic détecté via lien de redirection BM. Signal plus fort qu'un pixel, mais pas une preuve absolue d'intention.",
    };
  }

  const secondsAfterSend = Math.floor(clickedAtMs / 1000) - sentAtEpoch;
  if (secondsAfterSend >= 0 && secondsAfterSend < CLICK_GRACE_PERIOD_SECONDS) {
    return {
      eventType: "ignored_click_prefetch",
      shouldCount: false,
      secondsAfterSend,
      notes:
        `Clic ignoré pour le compteur: ${secondsAfterSend}s après l'envoi, ` +
        `sous la fenêtre anti-scan de ${CLICK_GRACE_PERIOD_SECONDS}s. ` +
        "Probable scan sécurité, proxy ou préchargement de lien.",
    };
  }

  return {
    eventType: "email_click",
    shouldCount: true,
    secondsAfterSend,
    notes:
      "Clic détecté via lien de redirection BM après la fenêtre anti-scan. " +
      "Signal fort, à interpréter avec prudence.",
  };
}

async function createClickEvent(token, event, outreachRecord) {
  const outreachFields = outreachRecord?.fields || {};
  const fields = {
    event_id: `CLICK-${event.bmOid || "unknown"}-${Date.now()}`,
    timestamp: event.clickedAt,
    tracking_id: event.bmOid || "",
    outreach_id: outreachFields.outreach_id || "",
    recipient_hash: "",
    event_type: event.eventType,
    user_agent: event.userAgent || "",
    ip_hash: event.ipHash || "",
    source: "email_click_redirect",
    notes: event.notes,
  };

  if (outreachRecord?.id) fields.outreach_record = [outreachRecord.id];
  if (Array.isArray(outreachFields.prospect_id)) fields.prospect = outreachFields.prospect_id;
  if (Array.isArray(outreachFields.contact_id)) fields.contact = outreachFields.contact_id;

  return airtableRequest(token, "POST", EMAIL_EVENTS_TABLE_ID, "", {
    fields,
    typecast: true,
  });
}

async function updateOutreachClickSummary(token, event, outreachRecord, clickEventRecord) {
  if (!outreachRecord?.id) return;

  const fields = outreachRecord.fields || {};
  await airtableRequest(token, "PATCH", OUTREACH_TABLE_ID, `/${outreachRecord.id}`, {
    fields: {
      click_tracking_id: fields.click_tracking_id || event.bmOid || "",
      click_count: Number(fields.click_count || 0) + 1,
      first_clicked_at: fields.first_clicked_at || event.clickedAt,
      last_clicked_at: event.clickedAt,
      last_click_event: [clickEventRecord.id],
      click_tracking_status: "clicked",
    },
    typecast: true,
  });
}

async function logClickToAirtable(request, env, bmOid) {
  const token = env.BM_AIRTABLE_TOKEN || env.AIRTABLE_TOKEN;
  if (!token) {
    console.log("BM email click", { bmOid });
    return;
  }

  const outreachRecord = await resolveOutreachByClickId(token, bmOid);
  const clickedAtMs = Date.now();
  const classification = classifyClickEvent(
    clickedAtMs,
    parseSentAtEpoch(outreachRecord?.fields?.sent_at_epoch),
  );

  const event = {
    bmOid,
    clickedAt: new Date(clickedAtMs).toISOString(),
    userAgent: request.headers.get("user-agent") || "",
    ipHash: await shortHash(clientIp(request), env.BM_EMAIL_TRACKING_SALT || "bm-email-click"),
    eventType: classification.eventType,
    shouldCount: classification.shouldCount,
    secondsAfterSend: classification.secondsAfterSend,
    notes: classification.notes,
  };

  const clickEventRecord = await createClickEvent(token, event, outreachRecord);
  if (event.shouldCount) {
    await updateOutreachClickSummary(token, event, outreachRecord, clickEventRecord);
    return;
  }

  if (outreachRecord?.id && outreachRecord.fields?.click_tracking_status !== "clicked") {
    await airtableRequest(token, "PATCH", OUTREACH_TABLE_ID, `/${outreachRecord.id}`, {
      fields: {
        click_tracking_status: "prefetch_only",
        last_click_event: [clickEventRecord.id],
      },
      typecast: true,
    });
  }
}

function redirectTarget(request) {
  const target = new URL("/", request.url);
  target.search = "";
  target.hash = "";
  return target.toString();
}

export async function onRequestGet({ request, env, params }) {
  const rawParam = Array.isArray(params.bm_oid) ? params.bm_oid[0] : params.bm_oid;
  const bmOid = String(rawParam || "").trim();

  if (BM_OID_RE.test(bmOid)) {
    try {
      await logClickToAirtable(request, env, bmOid);
    } catch (error) {
      console.warn("BM email click tracking failed", error.message);
    }
  }

  const headers = new Headers({
    Location: redirectTarget(request),
    "Cache-Control": "no-store, no-cache, must-revalidate, max-age=0",
  });

  if (BM_OID_RE.test(bmOid)) {
    headers.append(
      "Set-Cookie",
      `bm_oid=${encodeURIComponent(bmOid)}; Path=/; Max-Age=2592000; SameSite=Lax; Secure`,
    );
  }

  return new Response(null, {
    status: 302,
    headers,
  });
}
