import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import vm from 'node:vm';
import ts from 'typescript';
const source = await readFile(new URL('../src/acquisition.ts', import.meta.url), 'utf8');
const compiled = ts.transpileModule(source.replace(/^import .*;\n/m, ''), { compilerOptions: { target: ts.ScriptTarget.ES2022, module: ts.ModuleKind.None } }).outputText;
const html = await readFile(new URL('../company-brain.html', import.meta.url), 'utf8');
function harness(hostname) {
  const events = []; const listeners = new Map(); let init = 0;
  class Element { constructor(link) { Object.assign(this, link); } closest(selector) { return selector === 'section, article' ? { id: 'premier-usage' } : this; } }
  vm.runInNewContext(compiled, { window: { location: { hostname } }, document: { title: 'Company Brain', addEventListener: (name, fn) => listeners.set(name, fn) }, Element, URL, initPostHog: () => { init++; }, captureAnalyticsEvent: (event, properties) => events.push({ event, ...properties }) });
  return { events, listeners, Element, init };
}
const preview = harness('127.0.0.1');
assert.equal(preview.init, 0); assert.equal(preview.events.length, 0);
const prod = harness('bm-automation-france.com');
assert.equal(prod.init, 1); assert.equal(prod.events[0].event, '$pageview');
const anchors = [...html.matchAll(/<a\b([^>]+)>.*?<\/a>/g)].filter(match => match[1].includes('data-analytics-cta="brain-') && match[1].includes('calendly.com'));
assert.equal(anchors.length, 2);
for (const [i, anchor] of anchors.entries()) {
  const attr = (name) => anchor[1].match(new RegExp(`${name}="([^"]+)"`))[1].replaceAll('&amp;', '&');
  const segment = ['ma', 'tpe-pme'][i];
  prod.listeners.get('click')({ target: new prod.Element({ href: attr('href'), dataset: { analyticsCta: attr('data-analytics-cta'), analyticsSegment: attr('data-analytics-segment') }, textContent: 'Cadrer un usage' }) });
  const event = prod.events.at(-1);
  assert.equal(event.event, 'bm_cta_click'); assert.equal(event.bm_segment, segment);
  assert.equal(event.destination, 'calendly'); assert.equal(new URL(event.href).searchParams.get('utm_content'), segment);
  assert.equal(event.path, '/company-brain'); assert.ok(!('booking' in event));
}
console.log('Instrumentation locale : aucun envoi preview ; deux clics CTA distincts vers Calendly, sans événement réservation.');
