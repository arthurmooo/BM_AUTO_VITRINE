import { captureAnalyticsEvent, initPostHog } from './lib/posthog';

// Même projet et même événement que la vitrine. Un clic Calendly n'est pas une réservation.
const isProduction = ['bm-automation-france.com', 'www.bm-automation-france.com'].includes(window.location.hostname);
if (isProduction) {
  initPostHog();
  captureAnalyticsEvent('$pageview', { path: '/company-brain', bm_segment: 'common', title: document.title });
  document.addEventListener('click', (event) => {
    const target = event.target instanceof Element ? event.target.closest<HTMLAnchorElement>('a[data-analytics-cta]') : null;
    if (!target) return;
    captureAnalyticsEvent('bm_cta_click', {
      path: '/company-brain',
      cta_id: target.dataset.analyticsCta,
      bm_segment: target.dataset.analyticsSegment,
      label: target.textContent?.trim(),
      href: target.href,
      destination: new URL(target.href).hostname === 'calendly.com' ? 'calendly' : 'anchor',
      section_id: target.closest('section, article')?.id,
      element_type: 'a',
    });
  });
}
