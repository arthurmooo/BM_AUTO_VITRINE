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

// La nouvelle page doit être lisible dans le HTML livré, sans rendu JavaScript.
const { readFile } = await import('node:fs/promises');
const html = await readFile(new URL('../dist/company-brain.html', import.meta.url), 'utf8');
assert.equal((html.match(/<h1[ >]/g) || []).length, 1);
for (const id of ['ma', 'tpe-pme', 'confiance', 'premier-usage']) assert.ok(html.includes(`id="${id}"`));
assert.ok(html.includes('Deux exemples de premiers usages à construire sur mesure.'));
assert.equal((html.match(/Comment mesurer la réussite/g) || []).length, 2);
assert.ok(!html.includes('—'), 'Règle Copywriting active : aucun tiret cadratin');
assert.ok(html.includes('calendly.com/romuald-bocquet-bm-automation-france/30min'));
assert.ok(html.includes('data-analytics-segment="ma"'));
assert.ok(html.includes('data-analytics-segment="tpe-pme"'));
assert.equal(seoForUrl('https://bm-automation-france.com/company-brain').robots, 'index,follow');
assert.equal(seoForUrl('https://bm-automation-france.com/company-brain/').canonical, 'https://bm-automation-france.com/company-brain');
assert.equal(seoForUrl('https://bm-automation-france.com/company-brain?lang=en').locale, 'fr');
assert.equal(seoForUrl('https://bm-automation-france.com/company-brain?lang=en').robots, 'noindex,follow');
assert.ok((await readFile(new URL('../dist/sitemap.xml', import.meta.url), 'utf8')).includes('/company-brain</loc>'));
console.log('Company Brain : HTML complet, canonical, segments et CTA OK');
