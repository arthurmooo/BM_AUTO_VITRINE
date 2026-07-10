class LocaleInjector {
  constructor(locale) {
    this.locale = locale;
  }

  element(element) {
    element.setAttribute('lang', this.locale);
  }
}

class LocaleScriptInjector {
  constructor(locale) {
    this.locale = locale;
  }

  element(element) {
    element.prepend(`<script>window.__BM_LOCALE__=${JSON.stringify(this.locale)}</script>`, { html: true });
  }
}

export async function onRequest(context) {
  const response = await context.next();
  if (!response.headers.get('Content-Type')?.includes('text/html')) return response;

  const locale = context.request.cf?.country === 'FR' ? 'fr' : 'en';
  return new HTMLRewriter()
    .on('html', new LocaleInjector(locale))
    .on('head', new LocaleScriptInjector(locale))
    .transform(response);
}
