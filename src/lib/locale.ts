declare global {
  interface Window {
    __BM_LOCALE__?: 'fr' | 'en';
  }
}

export function getLocale(): 'fr' | 'en' {
  if (typeof window === 'undefined') return 'fr';
  const requestedLocale = new URLSearchParams(window.location.search).get('lang');
  if (requestedLocale === 'fr' || requestedLocale === 'en') return requestedLocale;
  return window.__BM_LOCALE__ || 'fr';
}

export function localizedAsset(frenchPath: string, englishPath: string): string {
  return getLocale() === 'en' ? englishPath : frenchPath;
}

export function localizedHref(path: string): string {
  if (typeof window === 'undefined') return path;
  const requestedLocale = new URLSearchParams(window.location.search).get('lang');
  if (requestedLocale !== 'fr' && requestedLocale !== 'en') return path;

  const url = new URL(path, window.location.origin);
  url.searchParams.set('lang', requestedLocale);
  return `${url.pathname}${url.search}${url.hash}`;
}
