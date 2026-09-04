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

class ContentInjector {
  constructor(content) {
    this.content = content;
  }

  element(element) {
    element.setInnerContent(this.content);
  }
}

class AttributeInjector {
  constructor(attribute, value) {
    this.attribute = attribute;
    this.value = value;
  }

  element(element) {
    element.setAttribute(this.attribute, this.value);
  }
}

const ORIGIN = 'https://bm-automation-france.com';

const SEO_BY_PATH = {
  '/': {
    indexable: true,
    fr: {
      title: "BM Automation | Solutions d'automatisation sur mesure pour équipes M&A et finance",
      description: "BM Automation conçoit des solutions d'automatisation sur mesure pour les équipes M&A et finance, entre CRM, emails, documents, relances et reporting.",
    },
    en: {
      title: 'BM Automation | Custom automation solutions for M&A and finance teams',
      description: 'BM Automation designs custom automation solutions for M&A and finance teams across CRM, email, documents, follow-ups and reporting.',
    },
  },
  '/equipe': {
    indexable: true,
    fr: {
      title: 'Notre équipe augmentée | BM Automation',
      description: "Découvrez les deux humains et les cinq agents spécialisés qui composent l'équipe augmentée de BM Automation.",
    },
    en: {
      title: 'Our augmented team | BM Automation',
      description: 'Meet the two people and five specialized agents behind BM Automation.',
    },
  },
  '/mentions-legales': {
    indexable: false,
    fr: {
      title: 'Mentions légales | BM Automation',
      description: "Informations relatives à l'édition, à l'hébergement et à l'utilisation du site BM Automation.",
    },
    en: {
      title: 'Legal notice | BM Automation',
      description: 'Legal information about the publication, hosting and use of the BM Automation website.',
    },
  },
  '/confidentialite': {
    indexable: false,
    fr: {
      title: 'Politique de confidentialité | BM Automation',
      description: 'Politique de traitement des données personnelles liées au site et aux prises de contact BM Automation.',
    },
    en: {
      title: 'Privacy policy | BM Automation',
      description: 'How BM Automation handles personal data related to website visits and contact requests.',
    },
  },
  '/conditions': {
    indexable: false,
    fr: {
      title: "Conditions d'utilisation | BM Automation",
      description: "Conditions encadrant la consultation du site BM Automation et les échanges initiés depuis celui-ci.",
    },
    en: {
      title: 'Terms of use | BM Automation',
      description: 'Terms governing use of the BM Automation website and enquiries initiated from it.',
    },
  },
};

function normalizedPath(pathname) {
  return pathname === '/' ? '/' : pathname.replace(/\/+$/, '');
}

export function canonicalRedirect(requestUrl) {
  const url = new URL(requestUrl);
  if (url.hostname !== 'www.bm-automation-france.com') return null;
  url.hostname = 'bm-automation-france.com';
  url.protocol = 'https:';
  return url.toString();
}

export function seoForUrl(requestUrl) {
  const url = new URL(requestUrl);
  const path = normalizedPath(url.pathname);
  const page = SEO_BY_PATH[path];
  const requestedLocale = url.searchParams.get('lang');
  const locale = requestedLocale === 'en' ? 'en' : 'fr';
  const metadata = (page || SEO_BY_PATH['/'])[locale];
  const canonicalPath = page ? path : '/';

  return {
    ...metadata,
    locale,
    canonical: `${ORIGIN}${canonicalPath}`,
    robots: page?.indexable && requestedLocale === null ? 'index,follow' : 'noindex,follow',
  };
}

export async function onRequest(context) {
  const redirect = canonicalRedirect(context.request.url);
  if (redirect) return Response.redirect(redirect, 301);

  const response = await context.next();
  if (!response.headers.get('Content-Type')?.includes('text/html')) return response;

  const seo = seoForUrl(context.request.url);
  const headers = new Headers(response.headers);
  headers.set('Content-Language', seo.locale);
  const htmlResponse = new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers,
  });

  return new HTMLRewriter()
    .on('html', new LocaleInjector(seo.locale))
    .on('head', new LocaleScriptInjector(seo.locale))
    .on('title', new ContentInjector(seo.title))
    .on('meta[name="description"]', new AttributeInjector('content', seo.description))
    .on('meta[name="robots"]', new AttributeInjector('content', seo.robots))
    .on('link[rel="canonical"]', new AttributeInjector('href', seo.canonical))
    .on('meta[property="og:locale"]', new AttributeInjector('content', seo.locale === 'fr' ? 'fr_FR' : 'en_GB'))
    .on('meta[property="og:title"]', new AttributeInjector('content', seo.title))
    .on('meta[property="og:description"]', new AttributeInjector('content', seo.description))
    .on('meta[property="og:url"]', new AttributeInjector('content', seo.canonical))
    .transform(htmlResponse);
}
