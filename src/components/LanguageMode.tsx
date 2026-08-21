import { useLayoutEffect } from 'react';
import { getLocale } from '../lib/locale';

const translations: Record<string, string> = {
  'Accueil': 'Home',
  'BM Automation — Accueil': 'BM Automation — Home',
  'Cas concret': 'Case study',
  'Méthode': 'Method',
  'Équipe': 'Team',
  'L’ÉQUIPE AUGMENTÉE DE BM AUTOMATION': 'BM AUTOMATION’S AUGMENTED TEAM',
  'Petite équipe.': 'Small team.',
  'Grande exécution.': 'Big execution.',
  'Deux humains dirigent BM Automation. Cinq agents spécialisés démultiplient l’exécution.': 'Two people lead BM Automation. Five specialized agents multiply execution.',
  'Composition de l’équipe': 'Team composition',
  'humains responsables': 'accountable people',
  'agents spécialisés': 'specialized agents',
  'LA RESPONSABILITÉ RESTE HUMAINE': 'ACCOUNTABILITY REMAINS HUMAN',
  'Deux expertises.': 'Two areas of expertise.',
  'Une même': 'The same',
  'responsabilité.': 'accountability.',
  'Arthur et Romuald définissent le cap et restent responsables de chaque décision sensible.': 'Arthur and Romuald set the direction and remain accountable for every sensitive decision.',
  'Humain': 'Human',
  'Technique, produit & architecture': 'Technology, product & architecture',
  "Conçoit les systèmes, choisit l’architecture et porte les engagements techniques.": 'Designs the systems, chooses the architecture and owns technical commitments.',
  'Commercial & relation client': 'Business development & client relationships',
  'Identifie les frictions métier, conduit les échanges et porte les engagements commerciaux.': 'Identifies operational friction, leads client discussions and owns commercial commitments.',
  'Ils donnent le cap à Hermès': 'They set the direction for Hermès',
  'COORDINATION': 'COORDINATION',
  'Le cap devient': 'Direction becomes',
  'un travail': 'coordinated',
  'coordonné.': 'work.',
  'Agent': 'Agent',
  'Coordonne les priorités, distribue le travail et remonte les blocages.': 'Coordinates priorities, distributes work and escalates blockers.',
  'SPÉCIALISTES': 'SPECIALISTS',
  'Trois rôles.': 'Three roles.',
  'Trois périmètres': 'Three clear',
  'clairs.': 'scopes.',
  'Conçoit, intègre et teste les systèmes autorisés.': 'Designs, integrates and tests authorized systems.',
  'Recherche, vérifie et qualifie les opportunités pertinentes.': 'Researches, verifies and qualifies relevant opportunities.',
  'Prépare les contenus et opportunités SEO/GEO.': 'Prepares SEO/GEO content and opportunities.',
  'CONTRÔLE INDÉPENDANT': 'INDEPENDENT REVIEW',
  'Chaque résultat passe par un regard': 'Every result is reviewed with an',
  'indépendant.': 'independent eye.',
  'Agent · Lecture seule': 'Agent · Read only',
  'Contrôle les livrables et challenge les preuves avant validation.': 'Reviews deliverables and challenges the evidence before approval.',
  'UNE ÉQUIPE, UN SEUL CAP': 'ONE TEAM, ONE DIRECTION',
  'Plus de capacité d’exécution.': 'More execution capacity.',
  'La responsabilité reste humaine.': 'Accountability remains human.',
  'Parler d’un process réel': 'Discuss a real workflow',
  'Portrait de Arthur': 'Portrait of Arthur',
  'Portrait de Romuald': 'Portrait of Romuald',
  'Portrait de Hermès': 'Portrait of Hermès',
  'Portrait de Basile': 'Portrait of Basile',
  'Portrait de Gaspard': 'Portrait of Gaspard',
  'Portrait de Ariane': 'Portrait of Ariane',
  'Portrait de Clémence': 'Portrait of Clémence',
  'Planifier un diagnostic': 'Book a diagnostic call',
  'Vos équipes sont payées pour décider. Pas pour recopier.': 'Your teams are paid to decide. Not to copy and paste.',
  'BM Automation transforme vos fichiers, emails, CRM et reportings dispersés en systèmes clairs, fiables et actionnables.': 'BM Automation turns scattered files, emails, CRM data and reporting into clear, reliable and actionable systems.',
  'Identifier un gain de temps': 'Identify a time-saving opportunity',
  'Voir la méthode': 'See our method',
  'Interface BM Automation montrant une mission client avec collecte, traitement, pilotage et transmission.': 'BM Automation interface showing a client engagement across collection, processing, oversight and delivery.',
  'RÉFÉRENCES': 'SELECTED CLIENTS',
  'Ils nous ont confié leurs process.': 'They trusted us with their workflows.',
  'Entreprises accompagnées par BM Automation': 'Organizations supported by BM Automation',
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
  'Temps perdu par an': 'Time lost per year',
  'heures': 'hours',
  'jours ouvrés perdus': 'working days lost',
  'Coût invisible. Impact bien réel.': 'Invisible cost. Very real impact.',
  'Capacité immobilisée': 'Capacity tied up',
  'Une ressource à temps plein mobilisée... sans création de valeur.': 'A full-time resource tied up... without creating value.',
  'On garde ce qui fonctionne déjà. On supprime ce qui circule encore à la main.': 'Keep what already works. Remove what still moves by hand.',
  'Là où le manuel ralentit vos dossiers.': 'Where manual work slows your engagements down.',
  'Relances, pièces, reporting, suivi client : nous ciblons les zones où l’information circule encore trop souvent à la main.': 'Follow-ups, documents, reporting and client updates: we target the areas where information still moves by hand.',
  'Relances & suivi de pièces': 'Follow-ups & document collection',
  'Relances &': 'Follow-ups &',
  'Relances': 'Follow-ups',
  'suivi de pièces': 'document collection',
  'Relances planifiées, pièces suivies, dossiers visibles. Moins d’oublis dans les boîtes mail.': 'Scheduled follow-ups, tracked documents and visible engagements. Fewer items lost in inboxes.',
  'Un reporting fiable, généré à partir des données à jour. Sans reconstruction manuelle.': 'Reliable reporting generated from up-to-date data. No manual reconstruction.',
  'Une vue claire des étapes, responsables, échéances et points de blocage.': 'A clear view of stages, owners, deadlines and blockers.',
  'Vos outils parlent mieux entre eux. Moins de double saisie, moins de données décalées.': 'Your tools work better together. Less duplicate entry and fewer data discrepancies.',
  'RDV & comptes-rendus': 'Meetings & minutes',
  'RDV &': 'Meetings &',
  'comptes-rendus': 'minutes',
  'Comptes-rendus structurés, actions créées, informations rattachées au bon dossier.': 'Structured minutes, actions created and information attached to the right engagement.',
  'Visibilité client & partage': 'Client visibility & collaboration',
  'Un espace dédié pour suivre l’avancement, consulter les éléments partagés et donner un retour.': 'A dedicated space to track progress, review shared items and provide feedback.',
  'Swipez pour découvrir les autres cas d’usage': 'Swipe to explore the other use cases',
  "Swipez pour découvrir les autres cas d'usage": 'Swipe to explore the other use cases',
  'Un cas concret dans le conseil': 'A real-world case in',
  'Pour un acteur international du conseil M&A, nous avons conçu une webapp interne + client pour centraliser missions, cibles, relances, documents et reporting.': 'For an international M&A advisory firm, we built an internal and client-facing web app to centralize engagements, targets, follow-ups, documents and reporting.',
  'Pipeline multi-missions': 'Multi-engagement pipeline',
  'CADRAGE': 'SCOPING',
  'SIGNATURES': 'SIGNING',
  'Mission Bêta': 'Project Beta',
  'Espace interne': 'Internal workspace',
  'Une vue consolidée pour piloter missions, cibles, relances et reporting.': 'A consolidated view to manage engagements, targets, follow-ups and reporting.',
  'MISSIONS': 'ENGAGEMENTS',
  'CIBLES': 'TARGETS',
  'Cibles': 'Targets',
  '60 CHAMPS': '60 FIELDS',
  'Données cibles alignées avec le CRM, sans double saisie inutile.': 'Target data aligned with the CRM, without unnecessary duplicate entry.',
  'SYNC AUTO': 'AUTO SYNC',
  'Statuts, interactions et documents restent cohérents entre les outils.': 'Statuses, interactions and documents stay consistent across tools.',
  'Le client suit l’avancement, consulte les cibles et donne son feedback.': 'Clients track progress, review targets and provide feedback.',
  'Retours clients structurés, rattachés automatiquement au bon dossier.': 'Structured client feedback, automatically attached to the right engagement.',
  'Audit trail : chaque action est tracée.': 'Audit trail: every action is recorded.',
  'Document': 'Document',
  'Statut': 'Status',
  'Commentaire': 'Comment',
  'Accès par rôles, données isolées, hébergement EU.': 'Role-based access, isolated data and EU hosting.',
  'Accès par rôles, données isolées par client, traçabilité et hébergement UE.': 'Role-based access, client-isolated data, traceability and EU hosting.',
  'Données isolées par client': 'Data isolated by client',
  'Accès par rôle': 'Role-based access',
  'Traçabilité': 'Traceability',
  'Hébergement EU': 'EU hosting',
  'Pipeline & Tableau de bord': 'Pipeline & dashboard',
  'Étapes suivies, statuts visibles, relances centralisées pour les équipes M&A.': 'Tracked stages, visible statuses and centralized follow-ups for M&A teams.',
  'Une méthode de cadrage,': 'A scoping method,',
  'pas une démo': 'not a generic',
  'générique.': 'demo.',
  'Nous partons de vos fichiers, outils, contraintes et usages réels.': 'We start from your files, tools, constraints and real-world usage.',
  'Puis nous construisons seulement ce qui enlève une friction concrète.': 'Then we build only what removes a concrete source of friction.',
  'LE PROCESS RÉEL': 'THE REAL PROCESS',
  'LES FRICTIONS MANUELLES': 'MANUAL FRICTIONS',
  'LE SYSTÈME UTILE': 'THE USEFUL SYSTEM',
  'Déployer': 'Deploy',
  'MESURER, AJUSTER': 'MEASURE, ADJUST',
  'Nous ne vendons pas un outil.': 'We do not sell a software product.',
  'Nous construisons avec vous un système de travail durable, mesurable et adapté à votre contexte.': 'We build a durable, measurable operating system tailored to your context.',
  'Sur-mesure': 'Custom-built',
  'Transparence': 'Transparency',
  'Résultats concrets': 'Tangible results',
  'PARLER DE VOS PROCESS': 'DISCUSS YOUR WORKFLOWS',
  "Vos process méritent mieux qu'un fichier de plus.": 'Your workflows deserve better than another spreadsheet.',
  'En 30 minutes, on identifie vos flux manuels, les personnes concernées et une première zone de gain concret.': 'In 30 minutes, we identify your manual flows, the people involved and a first concrete opportunity for improvement.',
  'Cartographie des outils et process': 'Map of tools and workflows',
  'Frictions manuelles identifiées': 'Identified manual frictions',
  'Construction du système automatisé': 'Building the automated system',
  'Déploiement et mesure des résultats': 'Deployment and results measurement',
  'Cartes de relance programmée et pièces attendues': 'Scheduled follow-ups and expected documents',
  'Rapport mensuel généré automatiquement': 'Automatically generated monthly report',
  'Liste de missions et statuts de dossiers': 'Engagement list and statuses',
  'Synchronisation entre CRM, fichiers et email': 'Synchronization across CRM, files and email',
  'Rendez-vous, compte-rendu généré et actions créées': 'Meeting, generated minutes and created actions',
  'Mission Alpha avec prochaine échéance et activité récente': 'Project Alpha with its next deadline and recent activity',
  'Fiche cible Alpha Partners avec secteur, chiffre d’affaires et statut': 'Alpha Partners target profile with sector, revenue and status',
  'Fiche cible Alpha Partners avec secteur, chiffre’affaires et statut': 'Alpha Partners target profile with sector, revenue and status',
  'Fiche cible Alpha Partners avec secteur, chiffre d\'affaires, pays et statut.': 'Alpha Partners target profile with sector, revenue, country and status.',
  'Synchronisation entre reporting et CRM existant': 'Synchronization between reporting and the existing CRM',
  'Synchronisation entre reporting prêt et CRM existant.': 'Synchronization between ready-to-use reporting and the existing CRM.',
  'Portail client avec progression de la Mission Alpha': 'Client portal showing Project Alpha progress',
  'Portail client Acme Corp avec progression de la Mission Alpha.': 'Acme Corp client portal showing Project Alpha progress.',
  'Feedback client intégré au dossier': 'Client feedback integrated into the engagement',
  'Bulle de feedback indiquant retour reçu et intégré au dossier.': 'Feedback notification showing a response received and added to the engagement.',
  'Bouclier de sécurité et conformité': 'Security and compliance shield',
  'Bouclier doré représentant la sécurité et la conformité.': 'Gold shield representing security and compliance.',
  'Swipez pour explorer le cas M&A': 'Swipe to explore the M&A case study',

  'Informations légales': 'Legal information',
  "Cette page présente les informations relatives à l'édition, à l'hébergement et à l'utilisation du site BM Automation.": 'This page provides information about the publisher, hosting and use of the BM Automation website.',
  'Éditeur du site': 'Website publisher',
  'Le site est édité par BM Automation, studio français spécialisé dans la conception de systèmes d’automatisation sur mesure pour les équipes finance, M&A, conseil et opérations.': 'The website is published by BM Automation, a French studio specializing in custom automation systems for finance, M&A, advisory and operations teams.',
  'BM Automation est représentée par Arthur Mo et Romuald Bocquet.': 'BM Automation is represented by Arthur Mo and Romuald Bocquet.',
  'Siège éditorial : Paris, France.': 'Editorial office: Paris, France.',
  'Immatriculation : en cours auprès du Registre du commerce et des sociétés de Paris.': 'Registration: pending with the Paris Trade and Companies Register.',
  'Directeur de la publication : Arthur Mo.': 'Publication director: Arthur Mo.',
  "Cette adresse peut être utilisée pour toute demande relative au site, à son contenu, à une prise de contact commerciale ou à l'exercice de droits liés aux données personnelles.": 'This address may be used for any request concerning the website, its content, commercial enquiries or the exercise of personal data rights.',
  'Hébergement': 'Hosting',
  'Le site est hébergé par Cloudflare, Inc.': 'The website is hosted by Cloudflare, Inc.',
  'Cloudflare, Inc., 101 Townsend St, San Francisco, CA 94107, États-Unis.': 'Cloudflare, Inc., 101 Townsend St, San Francisco, CA 94107, United States.',
  "Le site est déployé via Cloudflare Pages, service d'hébergement statique et de distribution de contenu.": 'The website is deployed through Cloudflare Pages, a static hosting and content delivery service.',
  'Propriété intellectuelle': 'Intellectual property',
  "L'ensemble des contenus présents sur ce site, incluant les textes, visuels, interfaces, éléments graphiques, logos, compositions et exemples de parcours, est protégé par le droit de la propriété intellectuelle.": 'All content on this website, including text, visuals, interfaces, graphic elements, logos, compositions and workflow examples, is protected by intellectual property law.',
  'Toute reproduction, représentation, adaptation, modification ou diffusion, totale ou partielle, sans autorisation préalable de BM Automation, est interdite.': 'Any full or partial reproduction, representation, adaptation, modification or distribution without prior authorization from BM Automation is prohibited.',
  "Les cas d'usage, écrans et illustrations présentés sur le site ont une vocation de démonstration éditoriale. Ils ne donnent accès à aucune donnée client réelle.": 'The use cases, screens and illustrations presented on the website are for editorial demonstration purposes. They do not provide access to any real client data.',
  'Responsabilité': 'Liability',
  "BM Automation s'efforce de fournir des informations claires, fiables et à jour. Les contenus du site ont une vocation de présentation et ne constituent pas une offre contractuelle ferme.": 'BM Automation strives to provide clear, reliable and up-to-date information. The website content is for presentation purposes and does not constitute a binding contractual offer.',
  "Les informations relatives aux méthodes, cas d'usage, gains de temps ou exemples de systèmes sont présentées à titre indicatif. Tout engagement opérationnel fait l'objet d'un cadrage spécifique.": 'Information about methods, use cases, time savings or system examples is provided for guidance only. Any operational commitment is subject to specific scoping.',
  "Des liens externes peuvent renvoyer vers des services tiers, notamment Calendly ou LinkedIn. BM Automation n'est pas responsable du contenu, du fonctionnement ou des politiques de confidentialité de ces services.": 'External links may lead to third-party services, including Calendly or LinkedIn. BM Automation is not responsible for their content, operation or privacy policies.',

  'Protection des données': 'Data protection',
  'Politique de confidentialité': 'Privacy policy',
  'Cette politique explique comment BM Automation traite les données personnelles liées à la consultation du site et aux prises de contact.': 'This policy explains how BM Automation processes personal data related to website visits and enquiries.',
  'Données collectées': 'Data collected',
  "Le site vitrine BM Automation ne comporte pas de formulaire de collecte interne. Les échanges se font principalement par email ou via un lien de planification externe.": 'The BM Automation website does not include an internal data collection form. Communications mainly take place by email or through an external scheduling link.',
  "Lorsque vous contactez BM Automation, les données transmises volontairement peuvent inclure votre nom, votre adresse email, votre entreprise, votre fonction, votre message, vos disponibilités et les informations utiles à la compréhension de votre besoin.": 'When you contact BM Automation, the information you voluntarily provide may include your name, email address, company, role, message, availability and details needed to understand your requirements.',
  "BM Automation ne demande pas de transmettre de données confidentielles, financières, personnelles sensibles ou couvertes par un accord de confidentialité avant la mise en place d'un cadre contractuel adapté.": 'BM Automation does not ask you to share confidential, financial or sensitive personal data, or information covered by a confidentiality agreement, before an appropriate contractual framework is in place.',
  'Finalités': 'Purposes',
  'Les données sont utilisées pour répondre aux demandes de contact, préparer un échange de cadrage, qualifier un besoin opérationnel, organiser un rendez-vous et assurer le suivi de la relation professionnelle.': 'The data is used to respond to enquiries, prepare a scoping discussion, qualify an operational need, organize a meeting and manage the professional relationship.',
  "Ces traitements reposent sur votre demande de contact, sur l'intérêt légitime de BM Automation à gérer ses échanges professionnels, ou sur les mesures précontractuelles prises à votre demande.": 'This processing is based on your enquiry, BM Automation’s legitimate interest in managing professional communications, or pre-contractual steps taken at your request.',
  "BM Automation n'utilise pas ces données pour de la publicité comportementale et ne revend pas les données transmises.": 'BM Automation does not use this data for behavioral advertising and does not sell the information provided.',
  'Services tiers': 'Third-party services',
  "Le bouton de planification renvoie vers Calendly, service tiers disposant de ses propres conditions d'utilisation et de sa propre politique de confidentialité.": 'The scheduling button links to Calendly, a third-party service with its own terms of use and privacy policy.',
  'Le footer contient également un lien vers LinkedIn. La consultation de ces services est régie par leurs propres règles.': 'The footer also includes a link to LinkedIn. Use of these services is governed by their own terms.',
  "Le site utilise PostHog pour mesurer l'audience, comprendre les parcours de navigation, détecter les points de friction et améliorer la lisibilité des pages. Les événements suivis portent notamment sur les pages consultées, les clics sur les appels à l'action, la profondeur de scroll, les sections vues et le temps passé sur certaines zones.": 'The website uses PostHog to measure traffic, understand navigation paths, identify friction and improve page clarity. Tracked events include pages viewed, calls-to-action clicked, scroll depth, sections viewed and time spent in certain areas.',
  "Le site utilise des polices servies par Google Fonts. Lors du chargement du site, le navigateur peut établir une connexion avec les serveurs de Google afin d'afficher correctement les typographies.": 'The website uses fonts served by Google Fonts. When the website loads, the browser may connect to Google servers to display the fonts correctly.',
  "L'hébergement et la distribution du site reposent sur Cloudflare Pages. Cloudflare peut traiter certaines données techniques nécessaires à la sécurité, à la disponibilité et à la performance du site.": 'The website is hosted and distributed through Cloudflare Pages. Cloudflare may process technical data required for the website’s security, availability and performance.',
  'Cookies et mesure d’audience': 'Cookies and audience measurement',
  "PostHog peut déposer des identifiants techniques destinés à distinguer une visite d'une autre, mesurer l'utilisation du site et produire des statistiques de consultation.": 'PostHog may store technical identifiers to distinguish one visit from another, measure website usage and produce traffic statistics.',
  "BM Automation n'utilise pas ces données pour de la publicité comportementale, ne les revend pas et ne cherche pas à reconstituer une identité personnelle à partir de la navigation.": 'BM Automation does not use this data for behavioral advertising, does not sell it and does not attempt to reconstruct a personal identity from browsing activity.',
  "Des enregistrements de session peuvent être utilisés afin de comprendre les zones de blocage ou d'incompréhension. Les champs de saisie et contenus sensibles sont exclus ou masqués lorsque cela est applicable.": 'Session recordings may be used to understand areas of friction or confusion. Input fields and sensitive content are excluded or masked where applicable.',
  'Durée de conservation': 'Retention period',
  'Les données liées aux demandes de contact sont conservées pendant la durée nécessaire au traitement de la demande, au suivi de la relation professionnelle et à la gestion des échanges précontractuels.': 'Data related to enquiries is retained for the time required to process the request, manage the professional relationship and handle pre-contractual communications.',
  "Lorsqu'une mission est engagée, certaines informations peuvent être conservées pendant la durée nécessaire à l'exécution de la relation contractuelle, puis archivées selon les obligations légales, comptables ou probatoires applicables.": 'When an engagement begins, certain information may be retained for the duration required to perform the contractual relationship and then archived in accordance with applicable legal, accounting or evidentiary obligations.',
  "En l'absence de suite donnée à un échange, les informations de contact peuvent être supprimées ou archivées dans un délai raisonnable.": 'If an enquiry does not lead to further discussions, contact information may be deleted or archived within a reasonable period.',
  'Vos droits': 'Your rights',
  "Conformément au RGPD et à la loi Informatique et Libertés, vous pouvez demander l'accès, la rectification, l'effacement, la limitation, la portabilité ou l'opposition au traitement de vos données personnelles.": 'In accordance with the GDPR and French data protection law, you may request access, rectification, erasure, restriction, portability or object to the processing of your personal data.',
  'Vous pouvez exercer ces droits en écrivant à contact@bm-automation-france.com.': 'You may exercise these rights by writing to contact@bm-automation-france.com.',
  "BM Automation répond aux demandes dans les meilleurs délais et, en tout état de cause, dans les conditions prévues par la réglementation applicable. Vous pouvez également saisir la CNIL si vous estimez que vos droits ne sont pas respectés.": 'BM Automation responds to requests as soon as possible and in accordance with applicable regulations. You may also lodge a complaint with the CNIL if you believe your rights have not been respected.',

  'Conditions d’utilisation': 'Terms of use',
  'Conditions': 'Terms and conditions',
  'Les présentes conditions encadrent la consultation du site BM Automation et les échanges initiés depuis celui-ci.': 'These terms govern use of the BM Automation website and communications initiated through it.',
  'Objet du site': 'Purpose of the website',
  "Le site BM Automation présente une activité de conception de systèmes d'automatisation sur mesure pour des organisations confrontées à des tâches manuelles dispersées entre fichiers, emails, CRM, documents, reporting et outils métier.": 'The BM Automation website presents a custom automation systems business for organizations dealing with manual work scattered across files, email, CRM, documents, reporting and business tools.',
  "Le site n'est pas une plateforme SaaS en libre-service, ne propose pas d'achat en ligne et ne donne pas accès à un service logiciel standardisé.": 'The website is not a self-service SaaS platform, does not offer online purchasing and does not provide access to a standardized software service.',
  "Les contenus décrivent une approche, des exemples d'usage et une manière de cadrer des systèmes opérationnels adaptés au contexte de chaque client.": 'The content describes an approach, examples of use and a method for scoping operational systems tailored to each client’s context.',
  'Accès au site': 'Website access',
  "Le site est accessible librement, sous réserve des contraintes techniques liées à Internet, à l'hébergement ou à la maintenance.": 'The website is freely accessible, subject to technical constraints related to the Internet, hosting or maintenance.',
  'BM Automation peut faire évoluer, suspendre ou interrompre tout ou partie du site pour maintenance, amélioration, sécurité ou contrainte technique.': 'BM Automation may change, suspend or discontinue all or part of the website for maintenance, improvement, security or technical reasons.',
  "L'utilisateur s'engage à ne pas perturber le fonctionnement du site, à ne pas tenter d'accéder à des systèmes ou données non autorisés, et à ne pas utiliser le site d'une manière susceptible de porter atteinte à BM Automation ou à des tiers.": 'Users agree not to disrupt the website, attempt to access unauthorized systems or data, or use the website in a way that could harm BM Automation or third parties.',
  'Prise de contact et diagnostic': 'Enquiries and diagnostic call',
  "La planification d'un diagnostic ou l'envoi d'un email ne crée pas automatiquement de relation contractuelle.": 'Scheduling a diagnostic call or sending an email does not automatically create a contractual relationship.',
  "Le diagnostic initial vise à comprendre les flux existants, les points de friction, les personnes concernées et les gains potentiels. Il ne constitue pas un audit complet ni une garantie de résultat.": 'The initial diagnostic aims to understand existing flows, friction points, people involved and potential gains. It is not a comprehensive audit or a guarantee of results.',
  "Toute mission éventuelle fait l'objet d'un cadrage spécifique, d'une proposition dédiée et de conditions contractuelles adaptées au contexte du client.": 'Any potential engagement is subject to specific scoping, a dedicated proposal and contractual terms tailored to the client’s context.',
  'Informations publiées': 'Published information',
  "Les contenus du site sont fournis à titre d'information générale. Ils peuvent évoluer sans préavis.": 'The website content is provided for general information and may change without notice.',
  "Les exemples, estimations, captures d'interface et cas d'usage présentés sur le site ont une vocation illustrative. Ils ne préjugent pas du périmètre, du délai, du coût ou du résultat d'une mission réelle.": 'Examples, estimates, interface screenshots and use cases are illustrative. They do not determine the scope, timeline, cost or outcome of a real engagement.',
  "BM Automation s'efforce de maintenir des informations exactes, mais ne garantit pas l'absence totale d'erreurs, d'omissions ou d'indisponibilités.": 'BM Automation strives to maintain accurate information but does not guarantee the complete absence of errors, omissions or unavailability.',
  'Liens externes': 'External links',
  'Le site peut contenir des liens vers des plateformes tierces, notamment Calendly et LinkedIn.': 'The website may contain links to third-party platforms, including Calendly and LinkedIn.',
  "Ces services disposent de leurs propres conditions. BM Automation n'est pas responsable de leur disponibilité, de leur contenu ou de leurs traitements de données.": 'These services have their own terms. BM Automation is not responsible for their availability, content or data processing.',
  'Droit applicable': 'Governing law',
  'Les présentes conditions sont régies par le droit français.': 'These terms are governed by French law.',
  "En cas de difficulté liée à l'utilisation du site, les parties chercheront d'abord une solution amiable avant toute procédure.": 'If a dispute arises from use of the website, the parties will first seek an amicable solution before taking legal action.',
  "Tout litige relatif à une mission commerciale distincte sera régi par les documents contractuels applicables à cette mission.": 'Any dispute relating to a separate commercial engagement will be governed by the contractual documents applicable to that engagement.',
};

const splitHeadlines: Record<string, string[]> = {
  'Vos équipes sont payées pour décider. Pas pour recopier.':
    ['Your', 'teams', 'are', 'paid', 'to', 'decide.', 'Not', 'to', 'copy and paste.'],
  'Le manuel ne se voit pas dans vos outils. Il se voit dans vos marges.':
    ['Manual', 'work', 'is', 'invisible', 'in', 'your', 'tools.', 'It', 'shows', 'up', 'in', 'your', 'margins.'],
  'Vos outils restent. La circulation manuelle disparaît.':
    ['Keep', 'your', 'tools.', 'Remove', 'the', 'manual', 'handoffs.'],
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
    if (words && children.length) {
      children.forEach((child, index) => {
        child.textContent = index === children.length - 1
          ? words.slice(index).join(' ')
          : words[index] || '';
      });
    }

    for (const attribute of ['aria-label', 'alt', 'title']) {
      const value = element.getAttribute(attribute);
      if (value && translations[value]) element.setAttribute(attribute, translations[value]);
    }
  });
}

export default function LanguageMode() {
  useLayoutEffect(() => {
    const locale = getLocale();
    document.documentElement.lang = locale;
    if (locale === 'fr') return;

    translate(document);
    document.title = 'BM Automation | Custom automation solutions for M&A and finance teams';
    document.querySelector('meta[name="description"]')?.setAttribute(
      'content',
      'BM Automation designs custom automation solutions for M&A and finance teams across CRM, email, documents, follow-ups and reporting.',
    );

    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        if (mutation.type === 'characterData') replaceText(mutation.target as Text);
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === Node.TEXT_NODE) replaceText(node as Text);
          else if (node.nodeType === Node.ELEMENT_NODE) translate(node as Element);
        });
      }
    });
    observer.observe(document.body, { childList: true, characterData: true, subtree: true });
    return () => observer.disconnect();
  }, []);

  return null;
}
