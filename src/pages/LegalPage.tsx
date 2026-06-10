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
      "Cette page regroupe les informations relatives à l'éditeur du site BM Automation. Certaines mentions administratives doivent être complétées avec les informations définitives de la structure avant publication.",
    sections: [
      {
        title: 'Éditeur du site',
        body: [
          'BM Automation',
          'Structure portée par Arthur Mo et Romuald Bocquet.',
          'Forme juridique, capital social, SIREN/SIRET, RCS et adresse du siège : à compléter avant publication.',
          'Directeur de la publication : à compléter avant publication.',
        ],
      },
      {
        title: 'Contact',
        body: [
          'Adresse de contact provisoire : contact@bmautomation.fr.',
          "Pour toute demande relative au site, à son contenu ou à l'exercice de vos droits, vous pouvez utiliser cette adresse de contact.",
        ],
      },
      {
        title: 'Hébergement',
        body: [
          "Hébergeur du site : à compléter selon le prestataire de déploiement retenu.",
          "Les informations d'hébergement devront préciser la dénomination sociale, l'adresse et les coordonnées de l'hébergeur.",
        ],
      },
      {
        title: 'Propriété intellectuelle',
        body: [
          "L'ensemble des contenus présents sur ce site, incluant les textes, visuels, interfaces, éléments graphiques, logos et compositions, est protégé par le droit de la propriété intellectuelle.",
          'Toute reproduction, représentation, modification ou diffusion sans autorisation préalable est interdite.',
        ],
      },
      {
        title: 'Responsabilité',
        body: [
          "BM Automation s'efforce de fournir des informations claires et à jour. Les contenus du site ont une vocation de présentation et ne constituent pas une offre contractuelle ferme.",
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
          "Le site vitrine BM Automation ne comporte pas, à ce stade, de formulaire de collecte interne.",
          "Lorsque vous contactez BM Automation par email ou via un lien de planification externe, les données que vous transmettez volontairement peuvent inclure votre nom, votre adresse email, votre entreprise, votre fonction, votre message et les informations utiles à l'échange.",
        ],
      },
      {
        title: 'Finalités',
        body: [
          'Les données sont utilisées pour répondre aux demandes de contact, préparer un échange de cadrage, qualifier un besoin opérationnel et assurer le suivi de la relation professionnelle.',
          'Ces traitements reposent sur votre demande de contact, sur l’intérêt légitime de BM Automation à gérer ses échanges professionnels, ou sur les mesures précontractuelles prises à votre demande.',
        ],
      },
      {
        title: 'Services tiers',
        body: [
          "Le bouton de planification renvoie vers Calendly, service tiers disposant de ses propres conditions d'utilisation et de sa propre politique de confidentialité.",
          'Le footer contient également un lien vers LinkedIn. La consultation de ces services est régie par leurs propres règles.',
        ],
      },
      {
        title: 'Cookies et mesure d’audience',
        body: [
          "À ce stade, aucun outil de mesure d'audience ou traceur publicitaire n'est configuré dans le code du site.",
          "Si des cookies ou outils statistiques sont ajoutés ultérieurement, cette politique devra être mise à jour et les visiteurs devront être informés conformément aux règles applicables.",
        ],
      },
      {
        title: 'Durée de conservation',
        body: [
          'Les données liées aux demandes de contact sont conservées pendant la durée nécessaire au traitement de la demande et au suivi de la relation professionnelle.',
          'Les durées pourront être adaptées selon les obligations légales, contractuelles ou comptables applicables.',
        ],
      },
      {
        title: 'Vos droits',
        body: [
          "Conformément au RGPD et à la loi Informatique et Libertés, vous pouvez demander l'accès, la rectification, l'effacement, la limitation ou l'opposition au traitement de vos données personnelles.",
          'Vous pouvez exercer ces droits en écrivant à contact@bmautomation.fr. Vous pouvez également saisir la CNIL si vous estimez que vos droits ne sont pas respectés.',
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
          "Le site BM Automation présente une activité de conception de systèmes d'automatisation sur mesure pour des organisations confrontées à des tâches manuelles dispersées entre fichiers, emails, CRM, documents et outils métier.",
          "Le site n'est pas une plateforme SaaS en libre-service et ne propose pas d'achat en ligne.",
        ],
      },
      {
        title: 'Accès au site',
        body: [
          "Le site est accessible librement. BM Automation peut faire évoluer, suspendre ou interrompre tout ou partie du site pour maintenance, amélioration ou contrainte technique.",
          "L'utilisateur s'engage à ne pas perturber le fonctionnement du site ni à tenter d'accéder à des systèmes ou données non autorisés.",
        ],
      },
      {
        title: 'Prise de contact et diagnostic',
        body: [
          "La planification d'un diagnostic ou l'envoi d'un email ne crée pas automatiquement de relation contractuelle.",
          "Toute mission éventuelle fera l'objet d'un cadrage spécifique, d'une proposition dédiée et de conditions contractuelles adaptées au contexte du client.",
        ],
      },
      {
        title: 'Informations publiées',
        body: [
          "Les contenus du site sont fournis à titre d'information générale. Ils peuvent évoluer sans préavis.",
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
          'En cas de litige, les parties chercheront d’abord une solution amiable avant toute procédure.',
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
                Dernière mise à jour : 24 mai 2026
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
