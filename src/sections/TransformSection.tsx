import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { AlertTriangle, Check } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function TransformSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const sublineRef = useRef<HTMLParagraphElement>(null);
  const beforeRef = useRef<HTMLDivElement>(null);
  const afterRef = useRef<HTMLDivElement>(null);
  const connectorRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: '+=130%',
          pin: true,
          scrub: 0.6,
        },
      });

      /* ---- Phase 1 (0-30%): ENTRANCE ---- */
      const words = headlineRef.current?.querySelectorAll('.word');
      if (words) {
        scrollTl.fromTo(
          words,
          { y: 24, opacity: 0 },
          { y: 0, opacity: 1, ease: 'power2.out', stagger: 0.025 },
          0.05
        );
      }

      scrollTl.fromTo(
        sublineRef.current,
        { y: 14, opacity: 0 },
        { y: 0, opacity: 1, ease: 'power2.out' },
        0.12
      );

      // Before slides in from left
      scrollTl.fromTo(
        beforeRef.current,
        { x: '-10vw', opacity: 0 },
        { x: 0, opacity: 1, ease: 'power2.out' },
        0.14
      );

      // After slides in from right
      scrollTl.fromTo(
        afterRef.current,
        { x: '10vw', opacity: 0 },
        { x: 0, opacity: 1, ease: 'power2.out' },
        0.14
      );

      // Connector
      scrollTl.fromTo(
        connectorRef.current,
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, ease: 'back.out(1.7)' },
        0.22
      );

      // Bottom bars
      scrollTl.fromTo(
        bottomRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, ease: 'power2.out' },
        0.26
      );

      /* ---- Phase 2 (30-70%): SETTLE ---- */

      /* ---- Phase 3 (70-100%): EXIT ---- */
      if (words) {
        scrollTl.fromTo(
          words,
          { y: 0, opacity: 1 },
          { y: '-14vh', opacity: 0, ease: 'power2.in', stagger: 0.01 },
          0.70
        );
      }

      scrollTl.fromTo(
        sublineRef.current,
        { y: 0, opacity: 1 },
        { y: '-8vh', opacity: 0, ease: 'power2.in' },
        0.72
      );

      scrollTl.fromTo(
        [beforeRef.current, afterRef.current],
        { y: 0, opacity: 1 },
        { y: '-10vh', opacity: 0, ease: 'power2.in' },
        0.76
      );

      scrollTl.fromTo(
        connectorRef.current,
        { scale: 1, opacity: 1 },
        { scale: 0, opacity: 0, ease: 'power2.in' },
        0.74
      );

      scrollTl.fromTo(
        bottomRef.current,
        { y: 0, opacity: 1 },
        { y: '10vh', opacity: 0, ease: 'power2.in' },
        0.80
      );

    }, section);

    return () => ctx.revert();
  }, []);

  const headlineWords = [
    { text: 'Vos', gold: false },
    { text: 'outils', gold: false },
    { text: 'restent.', gold: false },
    { text: 'Le', gold: true },
    { text: 'manuel', gold: true },
    { text: 'disparaît.', gold: true },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative w-screen h-screen overflow-hidden bg-ivory z-30"
    >
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-[4vw]">
        {/* Headline */}
        <h2
          ref={headlineRef}
          className="font-serif text-display-sm text-center max-w-[80vw]"
          style={{ fontWeight: 400 }}
        >
          {headlineWords.map((w, i) => (
            <span
              key={i}
              className={`word inline-block mr-[0.25em] ${w.gold ? 'text-gold' : 'text-violet'}`}
            >
              {w.text}
            </span>
          ))}
        </h2>

        {/* Subline */}
        <p
          ref={sublineRef}
          className="text-center text-muted-gray text-[clamp(15px,1.2vw,18px)] mt-3 mb-6"
        >
          De la dispersion à une opération maîtrisée.
        </p>

        {/* Visual comparison */}
        <div className="flex items-center justify-center gap-0 max-w-[1100px] w-full relative">
          {/* Before image */}
          <div ref={beforeRef} className="flex-1 relative rounded-l-[12px] border border-r-0 border-gold/20 bg-cream/70 overflow-hidden shadow-card-sm">
            {/* Avant badge */}
            <div className="absolute top-3 left-3 z-10 bg-cream border border-gold/30 rounded-md px-3 py-1">
              <span className="text-gold text-xs font-serif">Avant</span>
            </div>
            <img
              src="/assets/asset_avant.png"
              alt="Avant : chaos opérationnel — emails, fichiers dispersés, versions multiples"
              className="w-full h-auto block"
              loading="lazy"
            />
          </div>

          {/* Connector arrow */}
          <div
            ref={connectorRef}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
          >
            <div className="w-10 h-10 rounded-full bg-gold/90 flex items-center justify-center shadow-lg">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>

          {/* After image */}
          <div ref={afterRef} className="flex-1 relative rounded-r-[12px] border border-l-0 border-gold/20 bg-cream/70 overflow-hidden shadow-card-sm">
            {/* Après badge */}
            <div className="absolute top-3 right-3 z-10 bg-violet rounded-md px-3 py-1">
              <span className="text-gold text-xs font-serif">Après</span>
            </div>
            <img
              src="/assets/asset_apres.png"
              alt="Après : cockpit opérationnel — pilotage centralisé, visibilité client, flux de travail"
              className="w-full h-auto block"
              loading="lazy"
            />
          </div>
        </div>

        {/* Bottom info bars */}
        <div ref={bottomRef} className="flex items-stretch justify-center gap-4 mt-4 max-w-[1100px] w-full">
          {/* Before issues */}
          <div className="flex-1 flex items-start gap-3 bg-cream/70 border border-gold/15 rounded-lg px-5 py-3">
            <AlertTriangle className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" strokeWidth={1.5} />
            <p className="text-xs text-muted-gray leading-relaxed">
              Versions multiples • Informations manquantes<br />
              Manque de visibilité • Temps perdu
            </p>
          </div>

          {/* After benefits */}
          <div className="flex-1 flex items-start gap-3 bg-violet rounded-lg px-5 py-3">
            <Check className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" strokeWidth={1.5} />
            <p className="text-xs text-ivory/80 leading-relaxed">
              Information centralisée • Visibilité en temps réel<br />
              Actions claires • Pilotage simplifié
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
