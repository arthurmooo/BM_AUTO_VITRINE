import posthog from 'posthog-js';

const POSTHOG_PROJECT_TOKEN =
  import.meta.env.VITE_POSTHOG_PROJECT_TOKEN || 'phc_qzQUriXUmDq9ndqzCdPWYprNd98Z555FTsR2pDkghSbg';
const POSTHOG_HOST = import.meta.env.VITE_POSTHOG_HOST || 'https://us.i.posthog.com';
const INTERNAL_VISITOR_PARAM = 'bm_internal';
const INTERNAL_VISITOR_STORAGE_KEY = 'bm_internal_visitor';
const BM_OUTREACH_PARAM = 'bm_oid';
const BM_OUTREACH_STORAGE_KEY = 'bm_outreach_click_id';
const BM_OUTREACH_COOKIE = 'bm_oid';
const BM_OUTREACH_ID_RE = /^otc_[A-Za-z0-9_-]{8,80}$/;

declare global {
  interface Window {
    __BM_POSTHOG_READY__?: boolean;
  }
}

type AnalyticsProperties = Record<string, string | number | boolean | null | undefined>;

let initialized = false;
const pendingEvents: Array<{ eventName: string; properties: AnalyticsProperties }> = [];

function normalizeInternalVisitor(value: string | null) {
  const normalized = value?.trim().toLowerCase();
  if (!normalized) return null;
  if (['clear', 'off', 'reset', 'false', '0'].includes(normalized)) return 'clear';
  if (!/^[a-z0-9_-]{2,32}$/.test(normalized)) return null;
  return normalized;
}

function readInternalVisitor() {
  try {
    return normalizeInternalVisitor(window.localStorage.getItem(INTERNAL_VISITOR_STORAGE_KEY));
  } catch {
    return null;
  }
}

function writeInternalVisitor(value: string | null) {
  try {
    if (value) {
      window.localStorage.setItem(INTERNAL_VISITOR_STORAGE_KEY, value);
      return;
    }
    window.localStorage.removeItem(INTERNAL_VISITOR_STORAGE_KEY);
  } catch {
    // Ignore storage failures; analytics should never break the page.
  }
}

function normalizeOutreachClickId(value: string | null) {
  const normalized = value?.trim();
  if (!normalized || !BM_OUTREACH_ID_RE.test(normalized)) return null;
  return normalized;
}

function readCookie(name: string) {
  const escapedName = name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const match = document.cookie.match(new RegExp(`(?:^|; )${escapedName}=([^;]*)`));
  return match ? decodeURIComponent(match[1]) : null;
}

function writeOutreachClickId(value: string | null) {
  try {
    if (value) {
      window.localStorage.setItem(BM_OUTREACH_STORAGE_KEY, value);
      return;
    }
    window.localStorage.removeItem(BM_OUTREACH_STORAGE_KEY);
  } catch {
    // Ignore storage failures; analytics should never break the page.
  }
}

function readOutreachClickId() {
  try {
    const stored = normalizeOutreachClickId(window.localStorage.getItem(BM_OUTREACH_STORAGE_KEY));
    if (stored) return stored;
  } catch {
    // Ignore storage failures.
  }

  return normalizeOutreachClickId(readCookie(BM_OUTREACH_COOKIE));
}

function applyOutreachAttributionParam() {
  const url = new URL(window.location.href);
  const marker = normalizeOutreachClickId(url.searchParams.get(BM_OUTREACH_PARAM));
  if (!marker) return;

  writeOutreachClickId(marker);

  url.searchParams.delete(BM_OUTREACH_PARAM);
  const nextUrl = `${url.pathname}${url.search}${url.hash}`;
  window.history.replaceState(window.history.state, '', nextUrl);
}

function applyInternalVisitorParam() {
  const url = new URL(window.location.href);
  const marker = normalizeInternalVisitor(url.searchParams.get(INTERNAL_VISITOR_PARAM));
  if (!marker) return;

  writeInternalVisitor(marker === 'clear' ? null : marker);

  url.searchParams.delete(INTERNAL_VISITOR_PARAM);
  const nextUrl = `${url.pathname}${url.search}${url.hash}`;
  window.history.replaceState(window.history.state, '', nextUrl);
}

function internalVisitorProperties(): AnalyticsProperties {
  const internalVisitor = readInternalVisitor();
  if (!internalVisitor || internalVisitor === 'clear') {
    return {
      bm_is_internal: false,
      bm_internal_user: null,
    };
  }

  return {
    bm_is_internal: true,
    bm_internal_user: internalVisitor,
  };
}

function outreachAttributionProperties(): AnalyticsProperties {
  const bmOid = readOutreachClickId();
  if (!bmOid) {
    return {
      bm_outreach_click_id: null,
      bm_traffic_source: null,
    };
  }

  return {
    bm_outreach_click_id: bmOid,
    bm_traffic_source: 'email_outreach',
  };
}

function registerInternalVisitorProperties() {
  posthog.register({
    ...internalVisitorProperties(),
    ...outreachAttributionProperties(),
  });
}

function sendEvent(eventName: string, properties: AnalyticsProperties) {
  posthog.capture(
    eventName,
    {
      site: 'bm-automation-vitrine',
      ...internalVisitorProperties(),
      ...outreachAttributionProperties(),
      ...properties,
    },
    { transport: 'sendBeacon', send_instantly: true },
  );
}

function flushPendingEvents() {
  pendingEvents.splice(0).forEach(({ eventName, properties }) => {
    sendEvent(eventName, properties);
  });
}

export function initPostHog() {
  if (typeof window === 'undefined' || !POSTHOG_PROJECT_TOKEN || initialized) {
    return;
  }

  applyInternalVisitorParam();
  applyOutreachAttributionParam();
  writeOutreachClickId(readOutreachClickId());
  initialized = true;

  posthog.init(POSTHOG_PROJECT_TOKEN, {
    api_host: POSTHOG_HOST,
    defaults: '2026-01-30',
    capture_pageview: false,
    capture_pageleave: true,
    autocapture: true,
    person_profiles: 'identified_only',
    request_batching: false,
    loaded: () => {
      registerInternalVisitorProperties();
      window.__BM_POSTHOG_READY__ = true;
      flushPendingEvents();
    },
  });
}

export function captureAnalyticsEvent(eventName: string, properties: AnalyticsProperties = {}) {
  if (typeof window === 'undefined') {
    return;
  }

  if (!window.__BM_POSTHOG_READY__) {
    pendingEvents.push({ eventName, properties });
    return;
  }

  sendEvent(eventName, properties);
}
