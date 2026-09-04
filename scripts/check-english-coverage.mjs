import assert from 'node:assert/strict';
import fs from 'node:fs';
import ts from 'typescript';

const source = fs.readFileSync(new URL('../src/components/LanguageMode.tsx', import.meta.url), 'utf8');
const localeSource = fs.readFileSync(new URL('../src/lib/locale.ts', import.meta.url), 'utf8');
const file = ts.createSourceFile('LanguageMode.tsx', source, ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX);
const translations = new Map();

function visit(node) {
  if (ts.isVariableDeclaration(node) && node.name.getText(file) === 'translations' && node.initializer) {
    for (const property of node.initializer.properties) {
      if (!ts.isPropertyAssignment(property)) continue;
      translations.set(property.name.text, property.initializer.text);
    }
  }
  ts.forEachChild(node, visit);
}

visit(file);

const required = [
  'Temps perdu par an',
  'Le manuel ne se voit pas dans vos outils. Il se voit dans vos marges.',
  'On garde ce qui fonctionne déjà. On supprime ce qui circule encore à la main.',
  'Là où le manuel ralentit vos dossiers.',
  'Relances planifiées, pièces suivies, dossiers visibles. Moins d’oublis dans les boîtes mail.',
  'Pour un acteur international du conseil M&A, nous avons conçu une webapp interne + client pour centraliser missions, cibles, relances, documents et reporting.',
  'Une vue consolidée pour piloter missions, cibles, relances et reporting.',
  'Nous partons de vos fichiers, outils, contraintes et usages réels.',
  'Nous ne vendons pas un outil.',
  "Vos process méritent mieux qu'un fichier de plus.",
  'Informations légales',
  'Protection des données',
  'Conditions d’utilisation',
];

const englishAssets = [
  'hero-mission-alpha-industries-en.png',
  'chaos-avant-en.png',
  'chaos-apres-en.png',
  'bento/relances-pieces-en.png',
  'bento/reporting-client-en.png',
  'bento/suivi-dossiers-en.png',
  'bento/synchronisation-en.png',
  'bento/rdv-comptes-rendus-en.png',
  'bento/visibilite-client-en.png',
  'case-study/fiche-cible-crop-en.png',
  'case-study/reporting-crm-crop-en.png',
  'case-study/portail-client-crop-en.png',
  'case-study/feedback-client-crop-en.png',
  'methode-frictions-normalized-en.png',
];

for (const key of required) {
  assert.ok(translations.get(key), `Missing English translation for: ${key}`);
}

for (const asset of englishAssets) {
  assert.ok(
    fs.existsSync(new URL(`../public/assets/${asset}`, import.meta.url)),
    `Missing English visual: ${asset}`,
  );
}

assert.doesNotMatch(source, /children\.length === words\.length/, 'Animated headlines must support translations with a different word count.');
assert.match(source, /characterData: true/, 'Client-side route changes must translate reused text nodes.');
assert.match(localeSource, /requestedLocale === 'fr' \|\| requestedLocale === 'en'/, 'The local language URL override must remain available.');
assert.match(localeSource, /url\.searchParams\.set\('lang', requestedLocale\)/, 'Internal navigation must preserve the explicit language.');
assert.doesNotMatch(localeSource, /navigator\.language/, 'The canonical URL must not change language based on the browser locale.');

console.log(`English coverage check passed (${required.length} critical strings, ${englishAssets.length} localized visuals).`);
