import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

/* ------------------------------------------------------------------ */
/*  Hero Section                                                       */
/* ------------------------------------------------------------------ */
export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);
  const ruleRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subheadRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      /* ---- Auto-play entrance animation (on page load) ---- */
      const loadTl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      // Micro label + gold rule
      loadTl.fromTo(
        labelRef.current,
        { opacity: 0, y: -12 },
        { opacity: 1, y: 0, duration: 0.7 },
        0.1
      );
      loadTl.fromTo(
        ruleRef.current,
        { opacity: 0, scaleX: 0 },
        { opacity: 1, scaleX: 1, duration: 0.8, transformOrigin: 'center' },
        0.2
      );

      // Headline — word-by-word reveal
      const words = headlineRef.current?.querySelectorAll('.word');
      if (words) {
        loadTl.fromTo(
          words,
          { opacity: 0, y: 18 },
          { opacity: 1, y: 0, duration: 0.6, stagger: 0.04 },
          0.35
        );
      }

      // Subheadline
      loadTl.fromTo(
        subheadRef.current,
        { opacity: 0, y: 14 },
        { opacity: 1, y: 0, duration: 0.6 },
        0.8
      );

      // CTAs
      loadTl.fromTo(
        ctaRef.current,
        { opacity: 0, y: 12 },
        { opacity: 1, y: 0, duration: 0.6 },
        1.0
      );

      // Card rises up
      loadTl.fromTo(
        cardRef.current,
        { opacity: 0, y: 60, scale: 0.98 },
        { opacity: 1, y: 0, scale: 1, duration: 0.8 },
        1.1
      );

    }, section);

    return () => ctx.revert();
  }, []);

  /* Split headline into words for animation */
  const headlineWords = [
    { text: 'Vos', gold: false },
    { text: 'équipes', gold: false },
    { text: 'sont', gold: false },
    { text: 'payées', gold: false },
    { text: 'pour', gold: false },
    { text: 'décider.', gold: false },
    { text: 'Pas', gold: true },
    { text: 'pour', gold: true },
    { text: 'recopier.', gold: true },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-[100dvh] overflow-hidden bg-ivory z-10 flex flex-col items-center"
    >
      {/* Content container */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center pt-[12vh] pb-[5vh] px-[6vw]">
        {/* Micro label — gold */}
        <div ref={labelRef} className="mt-0" style={{ opacity: 0 }}>
          <span className="micro-label text-gold tracking-[0.18em]">
            automatisation sur-mesure
          </span>
        </div>

        {/* Gold rule under label */}
        <div
          ref={ruleRef}
          className="w-[200px] h-[1px] mt-3"
          style={{
            background: 'linear-gradient(90deg, transparent, rgba(184, 155, 94, 0.6), transparent)',
            opacity: 0,
          }}
        />

        {/* Main headline */}
        <h1
          ref={headlineRef}
          aria-label="Vos équipes sont payées pour décider. Pas pour recopier."
          className="font-serif text-display text-violet text-center mt-[5vh] px-[8vw] max-w-[90vw]"
          style={{ fontWeight: 400 }}
        >
          {headlineWords.map((word, i) => (
            <span
              key={i}
              aria-hidden="true"
              className={`word inline-block mr-[0.3em] ${word.gold ? 'text-gold' : ''}`}
            >
              {word.text}
            </span>
          ))}
        </h1>

        {/* Subheadline */}
        <p
          ref={subheadRef}
          className="text-center text-muted-gray text-[clamp(14px,1.15vw,17px)] leading-relaxed mt-5 max-w-[56vw] px-6"
          style={{ opacity: 0 }}
        >
          BM Automation transforme vos fichiers, emails, CRM et reportings dispersés en systèmes clairs, fiables et actionnables.
        </p>

        {/* CTA Row */}
        <div
          ref={ctaRef}
          className="flex items-center gap-4 mt-7 flex-wrap justify-center"
          style={{ opacity: 0 }}
        >
          <a
            href="/#cost"
            className="btn-premium group flex items-center gap-2 bg-violet text-ivory px-6 py-3 rounded-lg text-sm font-medium hover:bg-violet/90"
          >
            Identifier un gain de temps
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={1.5} />
          </a>
          <a
            href="/#method"
            className="nav-link-premium text-ink text-sm font-medium px-4 py-3 transition-colors duration-300 hover:text-violet"
          >
            Voir la méthode
          </a>
        </div>

        {/* Spacer */}
        <div className="h-[28px] md:h-[36px]" />

        {/* Central product illustration */}
        <div
          ref={cardRef}
          className="w-[min(2772px,121vw)]"
          style={{ opacity: 0, marginBottom: 'calc(4vh - 20px)' }}
        >
          <img
            src="/assets/hero-mission-alpha-industries.png"
            alt="Interface BM Automation montrant une mission client avec collecte, traitement, pilotage et transmission."
            className="mx-auto block w-full h-auto max-h-[109vh] object-contain"
            loading="eager"
            decoding="async"
          />
        </div>
      </div>
    </section>
  );
}
