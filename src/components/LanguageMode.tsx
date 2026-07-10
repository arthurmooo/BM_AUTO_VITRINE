import { useLayoutEffect } from 'react';

declare global {
  interface Window {
    __BM_LOCALE__?: 'fr' | 'en';
  }
}

const translations: Record<string, string> = {
  'Accueil': 'Home',
  'Cas concret': 'Case study',
  'Méthode': 'Method',
  'Planifier un diagnostic': 'Book a diagnostic call',
  'automatisation sur-mesure': 'custom-built automation',
  'Vos équipes sont payées pour décider. Pas pour recopier.': 'Your teams are paid to decide. Not to copy and paste.',
  'BM Automation transforme vos fichiers, emails, CRM et reportings dispersés en systèmes clairs, fiables et actionnables.': 'BM Automation turns scattered files, emails, CRM data and reporting into clear, reliable and actionable systems.',
  'Identifier un gain de temps': 'Identify a time-saving opportunity',
  'Voir la méthode': 'See our method',
  'Interface BM Automation montrant une mission client avec collecte, traitement, pilotage et transmission.': 'BM Automation interface showing a client engagement across collection, processing, oversight and delivery.',
  'COÛT CACHÉ DU MANUEL': 'THE HIDDEN COST OF MANUAL WORK',
  'Le manuel ne se voit pas dans vos outils. Il se voit dans vos marges.': 'Manual work is invisible in your tools. It shows up in your margins.',
  'Quelques minutes perdues chaque jour par des profils qualifiés deviennent vite des semaines de capacité consommée.': 'A few minutes lost every day by skilled people quickly become weeks of wasted capacity.',
  'VOS HYPOTHÈSES': 'YOUR ASSUMPTIONS',
  'Personnes concernées': 'People involved',
  'Minutes perdues / jour': 'Minutes lost / day',
  'Coût horaire chargé': 'Fully loaded hourly cost',
  'Diminuer': 'Decrease',
  'Augmenter': 'Increase',
  'IMPACT ESTIMÉ': 'ESTIMATED IMPACT',
  'heures perdues / an': 'hours lost / year',
  'jours de travail': 'working days',
  'ETP mobilisé': 'FTE capacity used',
  'Coût annuel estimé': 'Estimated annual cost',
  'Estimation indicative basée sur 230 jours ouvrés et 1 607 h par ETP.': 'Indicative estimate based on 230 working days and 1,607 hours per FTE.',
  'TRANSFORMATION': 'TRANSFORMATION',
  'Vos outils restent. La circulation manuelle disparaît.': 'Keep your tools. Remove the manual handoffs.',
  'BM relie vos outils existants, prépare les actions et laisse vos équipes décider.': 'BM connects your existing tools, prepares the actions and leaves every decision to your teams.',
  'VERS': 'TO',
  'AVANT': 'BEFORE',
  'APRÈS': 'AFTER',
  'Avant : chaos opérationnel': 'Before: operational chaos',
  'Après : pilotage opérationnel consolidé': 'After: consolidated operational oversight',
  "CAS D'USAGE": 'USE CASES',
  'CAS D’USAGE': 'USE CASES',
  'L’automatisation utile commence là où le travail manuel ralentit vos équipes.': 'Useful automation starts where manual work slows your teams down.',
  'Des systèmes sur mesure, reliés à vos outils et à vos règles métier.': 'Custom-built systems connected to your tools and business rules.',
  'Relances & collecte': 'Follow-ups & collection',
  'Reporting client': 'Client reporting',
  'Suivi de dossiers': 'Engagement tracking',
  'Synchronisation': 'Synchronization',
  'Préparation de rendez-vous': 'Meeting preparation',
  'Visibilité client': 'Client visibility',
  'CAS CONCRET': 'CASE STUDY',
  'Un cas concret dans le conseil M&A.': 'A real-world case in M&A advisory.',
  'Pilotage multi-missions': 'Multi-engagement oversight',
  '15 workflows MVP, 20 au total.': '15 MVP workflows, 20 in total.',
  'Espace interne': 'Internal workspace',
  'Tableau de bord M&A': 'M&A dashboard',
  'Missions actives': 'Active engagements',
  'Cibles suivies': 'Targets tracked',
  'Fiche cible structurée': 'Structured target profile',
  'Reporting & CRM synchronisés': 'Synchronized reporting & CRM',
  'Espace client': 'Client workspace',
  'Portail client dédié': 'Dedicated client portal',
  'Feedback client': 'Client feedback',
  'Historique complet': 'Complete history',
  'Sécurité & conformité': 'Security & compliance',
  'NOTRE MÉTHODE': 'OUR METHOD',
  'On part de votre process, pas une démo générique.': 'We start with your process, not a generic demo.',
  'Un système utile se construit à partir du terrain, puis se mesure dans les usages réels.': 'A useful system is built from real operations, then measured through actual use.',
  'Cartographier': 'Map',
  'Identifier': 'Identify',
  'Construire': 'Build',
  'Déployer & mesurer': 'Deploy & measure',
  'Nous analysons vos flux : fichiers,\nemails, CRM, validations, exceptions\net points de décision.': 'We map your flows: files,\nemails, CRM, approvals, exceptions\nand decision points.',
  'Nous isolons les relances, doubles saisies,\nrecherches et reconstructions qui\nconsomment du temps qualifié.': 'We isolate the follow-ups, duplicate entry,\nsearch and reconstruction that\nconsume skilled time.',
  'Chaque automatisation répond à un besoin précis, relié à vos outils.': 'Every automation addresses a precise need and connects to your tools.',
  'Nous mettons en production,\nmesurons le gain, puis ajustons\nsur vos usages réels.': 'We deploy, measure the gain,\nthen adjust based on\nactual use.',
  'On ne remplace pas vos outils. On supprime le travail inutile entre eux.': 'We do not replace your tools. We remove the unnecessary work between them.',
  'Votre process mérite mieux que du copier-coller.': 'Your process deserves better than copy and paste.',
  'Parlons du premier levier concret à traiter dans vos opérations.': 'Let’s discuss the first concrete opportunity in your operations.',
  'Systèmes sur-mesure': 'Custom-built systems',
  '© 2025 BM Automation. Tous droits réservés.': '© 2025 BM Automation. All rights reserved.',
  'Mentions légales': 'Legal notice',
  'Confidentialité': 'Privacy',
  'Retour au site': 'Back to the website',
  'Dernière mise à jour : 10 juin 2026': 'Last updated: June 10, 2026',
};

const splitHeadlines: Record<string, string[]> = {
  'Vos équipes sont payées pour décider. Pas pour recopier.':
    ['Your', 'teams', 'are', 'paid', 'to', 'decide.', 'Not', 'to', 'copy and paste.'],
  'Le manuel ne se voit pas dans vos outils. Il se voit dans vos marges.':
    ['Manual', 'work', 'is', 'invisible', 'in', 'your', 'tools.', 'It', 'shows', 'up', 'in', 'your', 'margins.'],
};

function replaceText(node: Text) {
  const value = node.nodeValue || '';
  const trimmed = value.trim();
  const translated = translations[trimmed];
  if (!translated) return;
  node.nodeValue = value.replace(trimmed, translated);
}

function translate(root: ParentNode) {
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  let node = walker.nextNode();
  while (node) {
    replaceText(node as Text);
    node = walker.nextNode();
  }

  root.querySelectorAll<HTMLElement>('[aria-label], [alt], [title]').forEach((element) => {
    const originalLabel = element.getAttribute('aria-label');
    const children = Array.from(element.children).filter((child) => child.tagName === 'SPAN');
    const words = originalLabel ? splitHeadlines[originalLabel] : undefined;
    if (words && children.length === words.length) {
      children.forEach((child, index) => { child.textContent = words[index]; });
    }

    for (const attribute of ['aria-label', 'alt', 'title']) {
      const value = element.getAttribute(attribute);
      if (value && translations[value]) element.setAttribute(attribute, translations[value]);
    }
  });
}

export default function LanguageMode() {
  useLayoutEffect(() => {
    const locale = window.__BM_LOCALE__ || (navigator.language.toLowerCase().startsWith('fr') ? 'fr' : 'en');
    document.documentElement.lang = locale;
    if (locale === 'fr') return;

    translate(document);
    document.title = 'BM Automation — Custom-built automation systems';
    document.querySelector('meta[name="description"]')?.setAttribute(
      'content',
      'Custom-built automation systems for M&A and finance teams. Less manual work between your existing tools.',
    );

    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === Node.TEXT_NODE) replaceText(node as Text);
          else if (node.nodeType === Node.ELEMENT_NODE) translate(node as Element);
        });
      }
    });
    observer.observe(document.body, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, []);

  return null;
}
