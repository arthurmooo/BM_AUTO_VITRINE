import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router';
import { captureAnalyticsEvent, initPostHog } from '../lib/posthog';

const SCROLL_MILESTONES = [25, 50, 75, 90];
const SECTION_VISIBLE_THRESHOLD = 0.45;
const MIN_SECTION_ENGAGEMENT_MS = 3000;

function normalizeText(value: string | null | undefined) {
  return value?.replace(/\s+/g, ' ').trim().slice(0, 120) || '';
}

function getClosestSectionId(element: Element) {
  const section = element.closest('[data-analytics-section], main > div[id], main section[id], footer[id]');
  return section?.getAttribute('data-analytics-section') || section?.id || null;
}

function classifyDestination(href: string | null) {
  if (!href) return 'button';
  if (href.startsWith('mailto:')) return 'email';
  if (href.includes('calendly.com')) return 'calendly';
  if (href.includes('linkedin.com')) return 'linkedin';
  if (href.includes('#')) return 'anchor';
  if (href.startsWith(window.location.origin)) return 'internal';
  return 'external';
}

export default function AnalyticsTracker() {
  const location = useLocation();
  const viewedSections = useRef(new Set<string>());
  const activeSections = useRef(new Map<string, number>());
  const scrollMilestones = useRef(new Set<number>());

  useEffect(() => {
    initPostHog();
  }, []);

  useEffect(() => {
    captureAnalyticsEvent('$pageview', {
      path: location.pathname,
      search: location.search || null,
      hash: location.hash || null,
      url: window.location.href,
      title: document.title,
    });
  }, [location.pathname, location.search, location.hash]);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target instanceof Element ? event.target.closest('a, button, [role="button"]') : null;
      if (!target) return;

      const href = target instanceof HTMLAnchorElement ? target.href : target.getAttribute('href');
      const label =
        target.getAttribute('data-analytics-label') ||
        target.getAttribute('aria-label') ||
        normalizeText(target.textContent);

      if (!label) return;

      captureAnalyticsEvent('bm_cta_click', {
        label,
        href: href || null,
        destination: classifyDestination(href),
        section_id: getClosestSectionId(target),
        path: window.location.pathname,
        element_type: target.tagName.toLowerCase(),
      });
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollableHeight <= 0) return;

      const depth = Math.round((window.scrollY / scrollableHeight) * 100);

      SCROLL_MILESTONES.forEach((milestone) => {
        if (depth >= milestone && !scrollMilestones.current.has(milestone)) {
          scrollMilestones.current.add(milestone);
          captureAnalyticsEvent('bm_scroll_depth', {
            depth_percent: milestone,
            path: window.location.pathname,
          });
        }
      });
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const flushSectionEngagement = (sectionId: string, startedAt: number) => {
      const durationMs = performance.now() - startedAt;
      if (durationMs < MIN_SECTION_ENGAGEMENT_MS) return;

      captureAnalyticsEvent('bm_section_engaged', {
        section_id: sectionId,
        duration_seconds: Math.round(durationMs / 1000),
        path: window.location.pathname,
      });
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const sectionId = entry.target.getAttribute('data-analytics-section') || entry.target.id;
          if (!sectionId) return;

          if (entry.isIntersecting && entry.intersectionRatio >= SECTION_VISIBLE_THRESHOLD) {
            if (!viewedSections.current.has(sectionId)) {
              viewedSections.current.add(sectionId);
              captureAnalyticsEvent('bm_section_viewed', {
                section_id: sectionId,
                path: window.location.pathname,
              });
            }

            if (!activeSections.current.has(sectionId)) {
              activeSections.current.set(sectionId, performance.now());
            }

            return;
          }

          const startedAt = activeSections.current.get(sectionId);
          if (startedAt) {
            flushSectionEngagement(sectionId, startedAt);
            activeSections.current.delete(sectionId);
          }
        });
      },
      { threshold: [0, SECTION_VISIBLE_THRESHOLD, 0.75] },
    );

    const sections = document.querySelectorAll<HTMLElement>('main > div[id], main section[id], footer[id]');
    sections.forEach((section) => observer.observe(section));

    const flushAll = () => {
      activeSections.current.forEach((startedAt, sectionId) => {
        flushSectionEngagement(sectionId, startedAt);
      });
      activeSections.current.clear();
    };

    window.addEventListener('pagehide', flushAll);

    return () => {
      flushAll();
      observer.disconnect();
      window.removeEventListener('pagehide', flushAll);
    };
  }, [location.pathname]);

  return null;
}
