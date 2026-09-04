import assert from 'node:assert/strict';
import { canonicalRedirect, seoForUrl } from '../functions/_middleware.js';

assert.equal(
  canonicalRedirect('https://www.bm-automation-france.com/equipe?lang=en'),
  'https://bm-automation-france.com/equipe?lang=en',
);
assert.equal(canonicalRedirect('https://bm-automation-france.com/'), null);

assert.deepEqual(
  seoForUrl('https://bm-automation-france.com/'),
  {
    title: "BM Automation | Solutions d'automatisation sur mesure pour équipes M&A et finance",
    description: "BM Automation conçoit des solutions d'automatisation sur mesure pour les équipes M&A et finance, entre CRM, emails, documents, relances et reporting.",
    locale: 'fr',
    canonical: 'https://bm-automation-france.com/',
    robots: 'index,follow',
  },
);

assert.deepEqual(
  seoForUrl('https://bm-automation-france.com/equipe'),
  {
    title: 'Notre équipe augmentée | BM Automation',
    description: "Découvrez les deux humains et les cinq agents spécialisés qui composent l'équipe augmentée de BM Automation.",
    locale: 'fr',
    canonical: 'https://bm-automation-france.com/equipe',
    robots: 'index,follow',
  },
);

assert.equal(seoForUrl('https://bm-automation-france.com/?lang=en').locale, 'en');
assert.equal(seoForUrl('https://bm-automation-france.com/?lang=en').robots, 'noindex,follow');
assert.equal(seoForUrl('https://bm-automation-france.com/mentions-legales').robots, 'noindex,follow');
assert.equal(
  seoForUrl('https://bm-automation-france.com/mentions-legales').canonical,
  'https://bm-automation-france.com/mentions-legales',
);
assert.equal(seoForUrl('https://bm-automation-france.com/route-inconnue').robots, 'noindex,follow');
assert.equal(seoForUrl('https://bm-automation-france.com/route-inconnue').canonical, 'https://bm-automation-france.com/');

console.log('SEO foundations: OK');
