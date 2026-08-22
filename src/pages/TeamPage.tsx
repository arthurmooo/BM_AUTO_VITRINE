import { useEffect, useLayoutEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navigation from '../sections/Navigation';
import FooterSection from '../sections/FooterSection';
import { getLocale } from '../lib/locale';
import './TeamPage.css';

const DIAGNOSTIC_URL = 'https://calendly.com/romuald-bocquet-bm-automation-france/30min?month=2026-08';

gsap.registerPlugin(ScrollTrigger);

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
  const pageRef = useRef<HTMLDivElement>(null);

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

  useLayoutEffect(() => {
    const page = pageRef.current;
    if (!page) return;

    const media = gsap.matchMedia();

    media.add(
      {
        motion: '(prefers-reduced-motion: no-preference)',
        desktop: '(min-width: 761px)',
      },
      (context) => {
        if (!context.conditions?.motion) return;

        const desktop = Boolean(context.conditions.desktop);
        const animation = gsap.context(() => {
          gsap.set('.team-hero h1 s', { '--strike-progress': 0 });
          gsap.set('.team-section--coordinator', { '--entry-line': 0, '--entry-node': 0 });
          gsap.set('.team-section--specialists', {
            '--branch-trunk': 0,
            '--branch-spread': 0,
            '--branch-drop': 0,
            '--branch-nodes': 0,
          });
          gsap.set('.team-section--critic .team-card', {
            '--outline-progress': 0,
          });
          gsap.set('.team-closing', { '--closing-line': 0, '--closing-node': 0 });

          const revealCard = (card: Element, fromX = 0, delay = 0) => {
            const portrait = card.querySelector('.team-card__portrait');
            const content = card.querySelector('.team-card__content');
            const timeline = gsap.timeline({
              delay,
              scrollTrigger: { trigger: card, start: 'top 86%', once: true },
            });

            timeline
              .fromTo(card, { autoAlpha: 0, x: fromX, y: desktop ? 0 : 24 }, {
                autoAlpha: 1,
                x: 0,
                y: 0,
                duration: 0.62,
                ease: 'power3.out',
              })
              .fromTo(portrait, { clipPath: 'inset(0 100% 0 0)' }, {
                clipPath: 'inset(0 0% 0 0)',
                duration: 0.68,
                ease: 'power3.out',
              }, '<0.06')
              .fromTo(content, { autoAlpha: 0, y: 10 }, {
                autoAlpha: 1,
                y: 0,
                duration: 0.52,
                ease: 'power2.out',
              }, '<0.16');
          };

          const heroTimeline = gsap.timeline({ defaults: { ease: 'power3.out' } });
          heroTimeline
            .fromTo('.team-hero__headline-part--first', { clipPath: 'inset(0 100% 0 0)', x: -12 }, {
              clipPath: 'inset(0 0% 0 0)', x: 0, duration: 0.5,
            })
            .to('.team-hero h1 s', { '--strike-progress': 1, duration: 0.4 }, '>-0.05')
            .fromTo('.team-hero__headline-part--second', { clipPath: 'inset(0 100% 0 0)', x: -10 }, {
              clipPath: 'inset(0 0% 0 0)', x: 0, duration: 0.5,
            }, '>-0.05')
            .fromTo('.team-hero__intro', { autoAlpha: 0, y: 10 }, {
              autoAlpha: 1, y: 0, duration: 0.42,
            }, '>0.04');

          const founderCards = gsap.utils.toArray<Element>('.team-grid--founders .team-card');
          founderCards.forEach((card, index) => revealCard(card, desktop ? (index === 0 ? -26 : 26) : 0, index * 0.08));

          const coordinatorSection = page.querySelector('.team-section--coordinator');
          if (coordinatorSection) {
            const coordinatorTimeline = gsap.timeline({
              scrollTrigger: { trigger: coordinatorSection, start: 'top 78%', once: true },
            });
            coordinatorTimeline
              .to(coordinatorSection, { '--entry-line': 1, duration: 0.62, ease: 'power2.inOut' })
              .to(coordinatorSection, { '--entry-node': 1, duration: 0.3 }, '>-0.12')
              .fromTo(coordinatorSection.querySelector('.team-section__header'), { autoAlpha: 0, y: 18 }, {
                autoAlpha: 1, y: 0, duration: 0.58, ease: 'power3.out',
              }, '<');
          }
          const coordinatorCard = page.querySelector('.team-section--coordinator .team-card');
          if (coordinatorCard) revealCard(coordinatorCard);

          const specialistSection = page.querySelector('.team-section--specialists');
          if (specialistSection) {
            const cards = gsap.utils.toArray<Element>('.team-grid--specialists .team-card');
            const portraits = cards.map((card) => card.querySelector('.team-card__portrait'));
            const contents = cards.map((card) => card.querySelector('.team-card__content'));
            const specialistTimeline = gsap.timeline({
              scrollTrigger: { trigger: specialistSection, start: 'top 80%', once: true },
            });

            specialistTimeline
              .fromTo(specialistSection.querySelector('.team-section__header'), { autoAlpha: 0, y: 18 }, {
                autoAlpha: 1, y: 0, duration: 0.58, ease: 'power3.out',
              });

            if (desktop) {
              specialistTimeline
                .to(specialistSection, { '--branch-trunk': 1, duration: 0.5, ease: 'power2.inOut' }, '<0.12')
                .to(specialistSection, { '--branch-spread': 1, duration: 0.62, ease: 'power2.inOut' })
                .to(specialistSection, { '--branch-drop': 1, '--branch-nodes': 1, duration: 0.48, ease: 'power2.inOut' });
            }

            specialistTimeline
              .fromTo(cards, { autoAlpha: 0, y: 24 }, {
                autoAlpha: 1, y: 0, duration: 0.62, stagger: 0.12, ease: 'power3.out',
              }, desktop ? '<0.08' : '>0.06')
              .fromTo(portraits, { clipPath: 'inset(0 100% 0 0)' }, {
                clipPath: 'inset(0 0% 0 0)', duration: 0.68, stagger: 0.12, ease: 'power3.out',
              }, '<0.04')
              .fromTo(contents, { autoAlpha: 0, y: 10 }, {
                autoAlpha: 1, y: 0, duration: 0.5, stagger: 0.12, ease: 'power2.out',
              }, '<0.16');
          }

          gsap.utils.toArray<Element>('.team-connector').forEach((connector) => {
            const timeline = gsap.timeline({
              scrollTrigger: { trigger: connector, start: 'top 88%', once: true },
            });
            timeline
              .fromTo(connector.querySelector('.team-connector__line'), { scaleY: 0 }, {
                scaleY: 1, duration: 0.62, ease: 'power2.inOut',
              })
              .fromTo(connector.querySelector('.team-connector__arrow'), { autoAlpha: 0, y: -6 }, {
                autoAlpha: 1, y: 0, duration: 0.35,
              }, '>-0.08');
          });

          const criticSection = page.querySelector('.team-section--critic');
          const criticCard = criticSection?.querySelector('.team-card');
          if (criticSection && criticCard) {
            const badge = criticCard.querySelector('.team-badge');
            const timeline = gsap.timeline({
              scrollTrigger: { trigger: criticSection, start: 'top 78%', once: true },
            });
            timeline
              .fromTo(criticSection.querySelector('.team-section__header'), { autoAlpha: 0, y: 18 }, {
                autoAlpha: 1, y: 0, duration: 0.58, ease: 'power3.out',
              })
              .fromTo(criticCard, { autoAlpha: 0, y: 24 }, {
                autoAlpha: 1, y: 0, duration: 0.62, ease: 'power3.out',
              }, '<0.14')
              .fromTo(criticCard.querySelector('.team-card__portrait'), { clipPath: 'inset(0 100% 0 0)' }, {
                clipPath: 'inset(0 0% 0 0)', duration: 0.68, ease: 'power3.out',
              }, '<0.06')
              .to(criticCard, { '--outline-progress': 1, duration: 0.68, ease: 'power2.inOut' })
              .fromTo(criticCard.querySelector('.team-card__content'), { autoAlpha: 0, y: 10 }, {
                autoAlpha: 1, y: 0, duration: 0.5, ease: 'power2.out',
              }, '<0.18')
              .fromTo(badge, { autoAlpha: 0, y: 8 }, {
                autoAlpha: 1, y: 0, duration: 0.42, ease: 'power2.out',
              }, '>0.02');
          }

          const closing = page.querySelector('.team-closing');
          if (closing) {
            const closingTimeline = gsap.timeline({
              scrollTrigger: { trigger: closing, start: 'top 88%', once: true },
            });
            closingTimeline
              .fromTo(closing, { autoAlpha: 0, y: 28, clipPath: 'inset(10% 0 0 0)' }, {
                autoAlpha: 1, y: 0, clipPath: 'inset(0% 0 0 0)', duration: 0.55, ease: 'power3.out',
              })
              .to(closing, { '--closing-line': 1, duration: 0.42, ease: 'power2.inOut' }, '<0.04')
              .to(closing, { '--closing-node': 1, duration: 0.2 }, '<0.24')
              .fromTo(closing.querySelector('.team-eyebrow'), { autoAlpha: 0, y: 12 }, {
                autoAlpha: 1, y: 0, duration: 0.38,
              }, '<')
              .fromTo(closing.querySelector('h2'), { autoAlpha: 0, y: 14 }, {
                autoAlpha: 1, y: 0, duration: 0.46,
              }, '<0.08')
              .fromTo(closing.querySelector('.team-closing__subtitle'), { autoAlpha: 0, y: 10 }, {
                autoAlpha: 1, y: 0, duration: 0.36,
              }, '<0.12')
              .fromTo(closing.querySelector('.team-closing__cta'), { autoAlpha: 0, y: 10 }, {
                autoAlpha: 1, y: 0, duration: 0.36,
              }, '<0.1');
          }
        }, page);

        return () => animation.revert();
      },
    );

    return () => media.revert();
  }, []);

  return (
    <div ref={pageRef} className="team-page">
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
