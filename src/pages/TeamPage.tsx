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

const hermes: Profile = {
  name: 'Hermès',
  role: 'Chief of Staff',
  description: 'Coordonne les priorités, distribue le travail et remonte les blocages.',
  image: '/assets/team/hermes.jpg',
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
            <div>
              <p className="team-eyebrow">L’ÉQUIPE AUGMENTÉE DE BM AUTOMATION</p>
              <h1>
                Deux humains pour décider.<br />{' '}
                <span>Une équipe d’agents pour démultiplier l’exécution.</span>
              </h1>
              <p className="team-hero__intro">
                Arthur et Romuald donnent le cap, arbitrent et engagent BM Automation. Cinq agents spécialisés
                coordonnent, construisent, recherchent et contrôlent — chacun dans un périmètre clair.
              </p>
            </div>
            <div className="team-hero__figures" aria-label="Composition de l’équipe">
              <div><strong>2</strong><span>humains responsables</span></div>
              <div><strong>5</strong><span>agents spécialisés</span></div>
            </div>
          </div>
        </section>

        <section className="team-section team-section--founders">
          <div className="team-shell">
            <header className="team-section__header">
              <p className="team-eyebrow">LA RESPONSABILITÉ RESTE HUMAINE</p>
              <h2>Deux expertises.<br />Une même <span>responsabilité.</span></h2>
              <p>Arthur et Romuald définissent le cap et restent responsables de chaque décision sensible.</p>
            </header>
            <div className="team-grid team-grid--founders">
              {founders.map((founder) => <ProfileCard key={founder.name} profile={founder} featured />)}
            </div>
            <Connector label="Ils donnent le cap à Hermès" />
          </div>
        </section>

        <section className="team-section team-section--hermes">
          <div className="team-shell team-shell--narrow">
            <header className="team-section__header">
              <p className="team-eyebrow">COORDINATION</p>
              <h2>Le cap devient<br />un travail <span>coordonné.</span></h2>
            </header>
            <ProfileCard profile={hermes} />
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
          <div className="team-shell team-shell--narrow">
            <header className="team-section__header">
              <p className="team-eyebrow">CONTRÔLE INDÉPENDANT</p>
              <h2>Chaque résultat passe par un regard <span>indépendant.</span></h2>
            </header>
            <ProfileCard profile={clemence} />
          </div>
        </section>

        <section className="team-closing">
          <div className="team-shell team-closing__inner">
            <p className="team-eyebrow">UNE ÉQUIPE, UN SEUL CAP</p>
            <h2>Plus de capacité d’exécution.<br /><span>La responsabilité reste humaine.</span></h2>
            <a href={DIAGNOSTIC_URL} target="_blank" rel="noreferrer" className="team-closing__cta">
              Parler d’un process réel <ArrowRight size={17} strokeWidth={1.5} />
            </a>
          </div>
        </section>
      </main>

      <FooterSection />
    </div>
  );
}
