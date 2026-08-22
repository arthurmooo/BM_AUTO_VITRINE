import { useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import Navigation from '../sections/Navigation';
import FooterSection from '../sections/FooterSection';
import { getLocale } from '../lib/locale';
import './TeamPage.css';

const DIAGNOSTIC_URL = 'https://calendly.com/romuald-bocquet-bm-automation-france/30min?month=2026-08';

type Profile = {
  name: string;
  role: string;
  description: string;
  image: string;
  kind?: 'human' | 'agent' | 'critic';
};

const founders: Profile[] = [
  {
    name: 'Arthur',
    role: 'Technique, produit & architecture',
    description: "Conçoit les systèmes, choisit l’architecture et porte les engagements techniques.",
    image: '/assets/team/arthur.jpg',
    kind: 'human',
  },
  {
    name: 'Romuald',
    role: 'Commercial & relation client',
    description: 'Identifie les frictions métier, conduit les échanges et porte les engagements commerciaux.',
    image: '/assets/team/romuald.jpg',
    kind: 'human',
  },
];

const specialists: Profile[] = [
  {
    name: 'Basile',
    role: 'Builder',
    description: 'Conçoit, intègre et teste les systèmes autorisés.',
    image: '/assets/team/basile.jpg',
  },
  {
    name: 'Gaspard',
    role: 'Growth',
    description: 'Recherche, vérifie et qualifie les opportunités pertinentes.',
    image: '/assets/team/gaspard.jpg',
  },
  {
    name: 'Ariane',
    role: 'Authority',
    description: 'Prépare les contenus et opportunités SEO/GEO.',
    image: '/assets/team/ariane.jpg',
  },
];

const coordinator: Profile = {
  name: 'Auguste',
  role: 'Chief of Staff',
  description: 'Coordonne les priorités, distribue le travail et remonte les blocages.',
  image: '/assets/team/auguste.jpg',
};

const clemence: Profile = {
  name: 'Clémence',
  role: 'Critic',
  description: 'Contrôle les livrables et challenge les preuves avant validation.',
  image: '/assets/team/clemence.jpg',
  kind: 'critic',
};

function ProfileCard({ profile, featured = false }: { profile: Profile; featured?: boolean }) {
  const badge = profile.kind === 'human'
    ? 'Humain'
    : profile.kind === 'critic'
      ? 'Agent · Lecture seule'
      : 'Agent';

  return (
    <article className={`team-card${featured ? ' team-card--featured' : ''}`}>
      <div className="team-card__portrait">
        <img src={profile.image} alt={`Portrait de ${profile.name}`} loading="eager" />
      </div>
      <div className="team-card__content">
        <span className={`team-badge team-badge--${profile.kind || 'agent'}`}>{badge}</span>
        <h3>{profile.name}</h3>
        <p className="team-card__role">{profile.role}</p>
        <span className="team-card__rule" aria-hidden="true" />
        <p className="team-card__description">{profile.description}</p>
      </div>
    </article>
  );
}

function Connector({ label }: { label?: string }) {
  return (
    <div className="team-connector" aria-hidden="true">
      <span className="team-connector__line" />
      {label && <span className="team-connector__label">{label}</span>}
      <span className="team-connector__arrow">↓</span>
    </div>
  );
}

export default function TeamPage() {
  useEffect(() => {
    const isEnglish = getLocale() === 'en';
    document.title = isEnglish
      ? 'Our augmented team | BM Automation'
      : 'Notre équipe augmentée | BM Automation';
    document.querySelector('meta[name="description"]')?.setAttribute(
      'content',
      isEnglish
        ? 'Meet the two people and five specialized agents behind BM Automation.'
        : 'Découvrez les deux humains et les cinq agents spécialisés qui composent l’équipe augmentée de BM Automation.',
    );
  }, []);

  return (
    <div className="team-page">
      <div className="grain-overlay" />
      <Navigation />

      <main>
        <section className="team-hero">
          <div className="team-shell team-hero__grid">
            <p className="team-eyebrow">L’ÉQUIPE AUGMENTÉE DE BM AUTOMATION</p>
            <h1>
              <span className="team-hero__headline-reveal">
                <span className="team-hero__headline-part team-hero__headline-part--first">
                  <s>Petite équipe.</s>
                </span>{' '}
                <span className="team-hero__headline-part team-hero__headline-part--second">
                  <span>Grande exécution.</span>
                </span>
              </span>
            </h1>
            <div className="team-hero__bottom">
              <p className="team-hero__intro">
                Deux humains dirigent BM Automation. Cinq agents spécialisés démultiplient l’exécution.
              </p>
            </div>
          </div>
        </section>

        <section className="team-section team-section--founders">
          <div className="team-shell">
            <div className="team-grid team-grid--founders">
              {founders.map((founder) => <ProfileCard key={founder.name} profile={founder} featured />)}
            </div>
          </div>
        </section>

        <section className="team-section team-section--coordinator">
          <div className="team-shell">
            <header className="team-section__header team-section__header--single-line">
              <p className="team-eyebrow">COORDINATION</p>
              <h2>Le cap devient un travail <span>coordonné.</span></h2>
            </header>
            <ProfileCard profile={coordinator} />
            <Connector />
          </div>
        </section>

        <section className="team-section team-section--specialists">
          <div className="team-shell">
            <header className="team-section__header team-section__header--centered">
              <p className="team-eyebrow">SPÉCIALISTES</p>
              <h2>Trois rôles.<br />Trois périmètres <span>clairs.</span></h2>
            </header>
            <div className="team-branch" aria-hidden="true"><span /><span /><span /></div>
            <div className="team-grid team-grid--specialists">
              {specialists.map((specialist) => <ProfileCard key={specialist.name} profile={specialist} />)}
            </div>
            <Connector />
          </div>
        </section>

        <section className="team-section team-section--critic">
          <div className="team-shell">
            <header className="team-section__header team-section__header--single-line">
              <p className="team-eyebrow">CONTRÔLE INDÉPENDANT</p>
              <h2>Chaque résultat passe par un regard <span>indépendant.</span></h2>
            </header>
            <ProfileCard profile={clemence} />
          </div>
        </section>

        <section className="team-closing">
          <div className="team-shell team-closing__inner">
            <p className="team-eyebrow">À VOTRE TOUR</p>
            <h2>Votre équipe aussi peut faire plus, sans s’alourdir.</h2>
            <p className="team-closing__subtitle">Montrez-nous le process qui la ralentit.</p>
            <a href={DIAGNOSTIC_URL} target="_blank" rel="noreferrer" className="team-closing__cta">
              Identifier le premier levier <ArrowRight size={17} strokeWidth={1.5} />
            </a>
          </div>
        </section>
      </main>

      <FooterSection variant="dark" />
    </div>
  );
}
