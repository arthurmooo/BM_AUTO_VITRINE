import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, CheckCircle2, Circle } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

/* ------------------------------------------------------------------ */
/*  Synthèse Card — operational UI mockup                             */
/* ------------------------------------------------------------------ */
function SyntheseCard() {
  return (
    <div
      className="w-full max-w-[720px] mx-auto bg-ivory/95 backdrop-blur-sm rounded-[10px] shadow-card border border-gold/20 overflow-hidden"
    >
      {/* Card Header */}
      <div className="px-6 pt-5 pb-3 flex items-center justify-between">
        <div>
          <h3 className="font-serif text-xl text-ink font-medium">Synthèse</h3>
          <p className="text-xs text-muted-gray mt-0.5">Vue consolidée — Avancement — Confirmations</p>
        </div>
        <div className="w-8 h-8 rounded-full bg-violet/10 flex items-center justify-center">
          <div className="w-2 h-2 rounded-full bg-gold" />
        </div>
      </div>

      {/* Gold accent line */}
      <div className="h-[2px] bg-gradient-to-r from-transparent via-gold/40 to-transparent mx-6" />

      {/* Card Body */}
      <div className="px-6 py-4">
        {/* Progress metric */}
        <div className="flex items-end justify-between mb-3">
          <div>
            <p className="micro-label text-muted-gray mb-1">Avancement global</p>
            <p className="font-serif text-4xl text-violet font-light">68<span className="text-2xl text-gold">%</span></p>
          </div>
          <div className="text-right">
            <p className="text-xs text-muted-gray">Phase en cours</p>
            <p className="text-sm text-ink font-medium">Confirmations</p>
          </div>
        </div>

        {/* Progress bar */}
        <div className="h-1.5 bg-cream rounded-full overflow-hidden mb-5">
          <div
            className="h-full rounded-full"
            style={{
              width: '68%',
              background: 'linear-gradient(90deg, #2B1E3D 0%, #2B1E3D 85%, #B89B5E 100%)',
            }}
          />
        </div>

        {/* Checklist */}
        <div className="space-y-2.5">
          {[
            { label: 'Collecte & intégration des données', done: true },
            { label: 'Rapprochements comptables', done: true },
            { label: 'Contrôles & validations', done: false },
            { label: 'Livrables & reporting', done: false },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-3">
              {item.done ? (
                <CheckCircle2 className="w-4 h-4 text-violet flex-shrink-0" strokeWidth={1.5} />
              ) : (
                <Circle className="w-4 h-4 text-lavender flex-shrink-0" strokeWidth={1.5} />
              )}
              <span className={`text-sm ${item.done ? 'text-ink' : 'text-muted-gray'}`}>
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Card Footer */}
      <div className="px-6 py-3 bg-cream/50 border-t border-gold/10 flex items-center justify-between">
        <div>
          <p className="micro-label text-muted-gray">Prochaine étape</p>
          <p className="text-sm text-ink font-medium">Revue des ajustements</p>
        </div>
        <ArrowRight className="w-4 h-4 text-gold" strokeWidth={1.5} />
      </div>
    </div>
  );
}

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
          className="font-serif text-display text-violet text-center mt-[5vh] px-[8vw] max-w-[90vw]"
          style={{ fontWeight: 400 }}
        >
          {headlineWords.map((word, i) => (
            <span
              key={i}
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
          <button className="btn-premium group flex items-center gap-2 bg-violet text-ivory px-6 py-3 rounded-lg text-sm font-medium hover:bg-violet/90">
            Identifier un gain de temps
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={1.5} />
          </button>
          <button className="nav-link-premium text-ink text-sm font-medium px-4 py-3 transition-colors duration-300 hover:text-violet">
            Voir la méthode
          </button>
        </div>

        {/* Spacer */}
        <div className="flex-1 min-h-[40px]" />

        {/* Floating UI Card — Synthèse */}
        <div
          ref={cardRef}
          className="w-[min(720px,78vw)]"
          style={{ opacity: 0, marginBottom: 'calc(5vh - 20px)' }}
        >
          <SyntheseCard />
        </div>
      </div>
    </section>
  );
}
