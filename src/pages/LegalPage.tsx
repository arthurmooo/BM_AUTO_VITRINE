import { Link } from 'react-router';
import Navigation from '../sections/Navigation';
import FooterSection from '../sections/FooterSection';

type LegalPageType = 'mentions-legales' | 'confidentialite' | 'conditions';

type LegalSection = {
  title: string;
  body: string[];
};

const pages: Record<
  LegalPageType,
  {
    eyebrow: string;
    title: string;
    intro: string;
    sections: LegalSection[];
  }
> = {
  'mentions-legales': {
    eyebrow: 'Informations légales',
    title: 'Mentions légales',
    intro:
      "Cette page présente les informations relatives à l'édition, à l'hébergement et à l'utilisation du site BM Automation.",
    sections: [
      {
        title: 'Éditeur du site',
        body: [
          'Le site est édité par BM Automation, studio français spécialisé dans la conception de systèmes d’automatisation sur mesure pour les équipes finance, M&A, conseil et opérations.',
          'BM Automation est représentée par Arthur Mo et Romuald Bocquet.',
          'Siège éditorial : Paris, France.',
          "Immatriculation : en cours auprès du Registre du commerce et des sociétés de Paris.",
          'Directeur de la publication : Arthur Mo.',
        ],
      },
      {
        title: 'Contact',
        body: [
          'Contact : contact@bm-automation-france.com.',
          "Cette adresse peut être utilisée pour toute demande relative au site, à son contenu, à une prise de contact commerciale ou à l'exercice de droits liés aux données personnelles.",
        ],
      },
      {
        title: 'Hébergement',
        body: [
          'Le site est hébergé par Cloudflare, Inc.',
          'Cloudflare, Inc., 101 Townsend St, San Francisco, CA 94107, États-Unis.',
          "Le site est déployé via Cloudflare Pages, service d'hébergement statique et de distribution de contenu.",
        ],
      },
      {
        title: 'Propriété intellectuelle',
        body: [
          "L'ensemble des contenus présents sur ce site, incluant les textes, visuels, interfaces, éléments graphiques, logos, compositions et exemples de parcours, est protégé par le droit de la propriété intellectuelle.",
          "Toute reproduction, représentation, adaptation, modification ou diffusion, totale ou partielle, sans autorisation préalable de BM Automation, est interdite.",
          "Les cas d'usage, écrans et illustrations présentés sur le site ont une vocation de démonstration éditoriale. Ils ne donnent accès à aucune donnée client réelle.",
        ],
      },
      {
        title: 'Responsabilité',
        body: [
          "BM Automation s'efforce de fournir des informations claires, fiables et à jour. Les contenus du site ont une vocation de présentation et ne constituent pas une offre contractuelle ferme.",
          "Les informations relatives aux méthodes, cas d'usage, gains de temps ou exemples de systèmes sont présentées à titre indicatif. Tout engagement opérationnel fait l'objet d'un cadrage spécifique.",
          "Des liens externes peuvent renvoyer vers des services tiers, notamment Calendly ou LinkedIn. BM Automation n'est pas responsable du contenu, du fonctionnement ou des politiques de confidentialité de ces services.",
        ],
      },
    ],
  },
  confidentialite: {
    eyebrow: 'Protection des données',
    title: 'Politique de confidentialité',
    intro:
      'Cette politique explique comment BM Automation traite les données personnelles liées à la consultation du site et aux prises de contact.',
    sections: [
      {
        title: 'Données collectées',
        body: [
          "Le site vitrine BM Automation ne comporte pas de formulaire de collecte interne. Les échanges se font principalement par email ou via un lien de planification externe.",
          "Lorsque vous contactez BM Automation, les données transmises volontairement peuvent inclure votre nom, votre adresse email, votre entreprise, votre fonction, votre message, vos disponibilités et les informations utiles à la compréhension de votre besoin.",
          "BM Automation ne demande pas de transmettre de données confidentielles, financières, personnelles sensibles ou couvertes par un accord de confidentialité avant la mise en place d'un cadre contractuel adapté.",
        ],
      },
      {
        title: 'Finalités',
        body: [
          'Les données sont utilisées pour répondre aux demandes de contact, préparer un échange de cadrage, qualifier un besoin opérationnel, organiser un rendez-vous et assurer le suivi de la relation professionnelle.',
          "Ces traitements reposent sur votre demande de contact, sur l'intérêt légitime de BM Automation à gérer ses échanges professionnels, ou sur les mesures précontractuelles prises à votre demande.",
          "BM Automation n'utilise pas ces données pour de la publicité comportementale et ne revend pas les données transmises.",
        ],
      },
      {
        title: 'Services tiers',
        body: [
          "Le bouton de planification renvoie vers Calendly, service tiers disposant de ses propres conditions d'utilisation et de sa propre politique de confidentialité.",
          'Le footer contient également un lien vers LinkedIn. La consultation de ces services est régie par leurs propres règles.',
          "Le site utilise PostHog pour mesurer l'audience, comprendre les parcours de navigation, détecter les points de friction et améliorer la lisibilité des pages. Les événements suivis portent notamment sur les pages consultées, les clics sur les appels à l'action, la profondeur de scroll, les sections vues et le temps passé sur certaines zones.",
          "Le site utilise des polices servies par Google Fonts. Lors du chargement du site, le navigateur peut établir une connexion avec les serveurs de Google afin d'afficher correctement les typographies.",
          "L'hébergement et la distribution du site reposent sur Cloudflare Pages. Cloudflare peut traiter certaines données techniques nécessaires à la sécurité, à la disponibilité et à la performance du site.",
        ],
      },
      {
        title: 'Cookies et mesure d’audience',
        body: [
          "PostHog peut déposer des identifiants techniques destinés à distinguer une visite d'une autre, mesurer l'utilisation du site et produire des statistiques de consultation.",
          "BM Automation n'utilise pas ces données pour de la publicité comportementale, ne les revend pas et ne cherche pas à reconstituer une identité personnelle à partir de la navigation.",
          "Des enregistrements de session peuvent être utilisés afin de comprendre les zones de blocage ou d'incompréhension. Les champs de saisie et contenus sensibles sont exclus ou masqués lorsque cela est applicable.",
        ],
      },
      {
        title: 'Durée de conservation',
        body: [
          'Les données liées aux demandes de contact sont conservées pendant la durée nécessaire au traitement de la demande, au suivi de la relation professionnelle et à la gestion des échanges précontractuels.',
          "Lorsqu'une mission est engagée, certaines informations peuvent être conservées pendant la durée nécessaire à l'exécution de la relation contractuelle, puis archivées selon les obligations légales, comptables ou probatoires applicables.",
          "En l'absence de suite donnée à un échange, les informations de contact peuvent être supprimées ou archivées dans un délai raisonnable.",
        ],
      },
      {
        title: 'Vos droits',
        body: [
          "Conformément au RGPD et à la loi Informatique et Libertés, vous pouvez demander l'accès, la rectification, l'effacement, la limitation, la portabilité ou l'opposition au traitement de vos données personnelles.",
          'Vous pouvez exercer ces droits en écrivant à contact@bm-automation-france.com.',
          "BM Automation répond aux demandes dans les meilleurs délais et, en tout état de cause, dans les conditions prévues par la réglementation applicable. Vous pouvez également saisir la CNIL si vous estimez que vos droits ne sont pas respectés.",
        ],
      },
    ],
  },
  conditions: {
    eyebrow: 'Conditions d’utilisation',
    title: 'Conditions',
    intro:
      'Les présentes conditions encadrent la consultation du site BM Automation et les échanges initiés depuis celui-ci.',
    sections: [
      {
        title: 'Objet du site',
        body: [
          "Le site BM Automation présente une activité de conception de systèmes d'automatisation sur mesure pour des organisations confrontées à des tâches manuelles dispersées entre fichiers, emails, CRM, documents, reporting et outils métier.",
          "Le site n'est pas une plateforme SaaS en libre-service, ne propose pas d'achat en ligne et ne donne pas accès à un service logiciel standardisé.",
          "Les contenus décrivent une approche, des exemples d'usage et une manière de cadrer des systèmes opérationnels adaptés au contexte de chaque client.",
        ],
      },
      {
        title: 'Accès au site',
        body: [
          "Le site est accessible librement, sous réserve des contraintes techniques liées à Internet, à l'hébergement ou à la maintenance.",
          "BM Automation peut faire évoluer, suspendre ou interrompre tout ou partie du site pour maintenance, amélioration, sécurité ou contrainte technique.",
          "L'utilisateur s'engage à ne pas perturber le fonctionnement du site, à ne pas tenter d'accéder à des systèmes ou données non autorisés, et à ne pas utiliser le site d'une manière susceptible de porter atteinte à BM Automation ou à des tiers.",
        ],
      },
      {
        title: 'Prise de contact et diagnostic',
        body: [
          "La planification d'un diagnostic ou l'envoi d'un email ne crée pas automatiquement de relation contractuelle.",
          "Le diagnostic initial vise à comprendre les flux existants, les points de friction, les personnes concernées et les gains potentiels. Il ne constitue pas un audit complet ni une garantie de résultat.",
          "Toute mission éventuelle fait l'objet d'un cadrage spécifique, d'une proposition dédiée et de conditions contractuelles adaptées au contexte du client.",
        ],
      },
      {
        title: 'Informations publiées',
        body: [
          "Les contenus du site sont fournis à titre d'information générale. Ils peuvent évoluer sans préavis.",
          "Les exemples, estimations, captures d'interface et cas d'usage présentés sur le site ont une vocation illustrative. Ils ne préjugent pas du périmètre, du délai, du coût ou du résultat d'une mission réelle.",
          "BM Automation s'efforce de maintenir des informations exactes, mais ne garantit pas l'absence totale d'erreurs, d'omissions ou d'indisponibilités.",
        ],
      },
      {
        title: 'Liens externes',
        body: [
          'Le site peut contenir des liens vers des plateformes tierces, notamment Calendly et LinkedIn.',
          "Ces services disposent de leurs propres conditions. BM Automation n'est pas responsable de leur disponibilité, de leur contenu ou de leurs traitements de données.",
        ],
      },
      {
        title: 'Droit applicable',
        body: [
          'Les présentes conditions sont régies par le droit français.',
          "En cas de difficulté liée à l'utilisation du site, les parties chercheront d'abord une solution amiable avant toute procédure.",
          "Tout litige relatif à une mission commerciale distincte sera régi par les documents contractuels applicables à cette mission.",
        ],
      },
    ],
  },
};

const legalNav: Array<{ label: string; path: string; type: LegalPageType }> = [
  { label: 'Mentions légales', path: '/mentions-legales', type: 'mentions-legales' },
  { label: 'Confidentialité', path: '/confidentialite', type: 'confidentialite' },
  { label: 'Conditions', path: '/conditions', type: 'conditions' },
];

export default function LegalPage({ type }: { type: LegalPageType }) {
  const page = pages[type];

  return (
    <div className="relative min-h-screen bg-ivory">
      <div className="grain-overlay" />
      <Navigation />

      <main className="relative z-10 px-[6vw] pb-20 pt-32">
        <div className="mx-auto grid max-w-[1120px] gap-10 lg:grid-cols-[260px_1fr] lg:gap-16">
          <aside className="lg:sticky lg:top-28 lg:h-fit">
            <Link
              to="/"
              className="micro-label text-gold transition-colors duration-300 hover:text-violet"
            >
              Retour au site
            </Link>

            <nav className="mt-8 flex flex-col gap-3">
              {legalNav.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`rounded-lg border px-4 py-3 text-sm transition-colors duration-300 ${
                    item.type === type
                      ? 'border-gold/35 bg-cream/70 text-violet'
                      : 'border-gold/10 text-muted-gray hover:border-gold/25 hover:text-violet'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </aside>

          <article>
            <div className="mb-10">
              <div className="mb-5 flex items-center gap-4">
                <div className="h-px w-8 bg-gold/40" />
                <span className="micro-label text-gold tracking-[0.18em]">{page.eyebrow}</span>
              </div>

              <h1 className="max-w-[820px] font-serif text-[clamp(44px,6vw,82px)] leading-[0.95] text-violet">
                {page.title}
              </h1>
              <p className="mt-6 max-w-[720px] text-base leading-8 text-muted-gray">
                {page.intro}
              </p>
              <p className="mt-4 text-xs uppercase tracking-[0.14em] text-gold/75">
                Dernière mise à jour : 10 juin 2026
              </p>
            </div>

            <div className="space-y-5">
              {page.sections.map((section) => (
                <section
                  key={section.title}
                  className="rounded-[18px] border border-gold/14 bg-cream/45 p-6 sm:p-8"
                >
                  <h2 className="font-serif text-[clamp(24px,2.4vw,34px)] leading-tight text-violet">
                    {section.title}
                  </h2>
                  <div className="mt-4 space-y-3">
                    {section.body.map((paragraph) => (
                      <p key={paragraph} className="text-sm leading-7 text-muted-gray">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </article>
        </div>
      </main>

      <FooterSection />
    </div>
  );
}
