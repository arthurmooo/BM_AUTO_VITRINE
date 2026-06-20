import posthog from 'posthog-js';

const POSTHOG_PROJECT_TOKEN =
  import.meta.env.VITE_POSTHOG_PROJECT_TOKEN || 'phc_qzQUriXUmDq9ndqzCdPWYprNd98Z555FTsR2pDkghSbg';
const POSTHOG_HOST = import.meta.env.VITE_POSTHOG_HOST || 'https://us.i.posthog.com';

declare global {
  interface Window {
    __BM_POSTHOG_READY__?: boolean;
  }
}

type AnalyticsProperties = Record<string, string | number | boolean | null | undefined>;

let initialized = false;
const pendingEvents: Array<{ eventName: string; properties: AnalyticsProperties }> = [];

function sendEvent(eventName: string, properties: AnalyticsProperties) {
  posthog.capture(
    eventName,
    {
      site: 'bm-automation-vitrine',
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
