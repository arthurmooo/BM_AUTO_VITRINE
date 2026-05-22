import { ArrowRight } from 'lucide-react';

/* ------------------------------------------------------------------ */
/*  Before / After Section                                            */
/* ------------------------------------------------------------------ */
export default function BeforeAfterSection() {
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
      id="transformation"
      className="relative w-full py-[12vh] bg-ivory z-30"
    >
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center px-[6vw]">
        {/* Micro label */}
        <div className="flex items-center gap-4 mb-4">
          <div className="w-8 h-[1px] bg-gold/40" />
          <span className="micro-label text-gold tracking-[0.18em]">TRANSFORMATION</span>
          <div className="w-8 h-[1px] bg-gold/40" />
        </div>

        {/* Headline */}
        <h2
          className="font-serif text-display-sm text-violet text-center max-w-[70vw] mb-2"
          style={{ fontWeight: 400 }}
        >
          {headlineWords.map((word, i) => (
            <span
              key={i}
              className={`inline-block mr-[0.3em] ${word.gold ? 'text-gold' : ''}`}
            >
              {word.text}
            </span>
          ))}
        </h2>

        {/* Cards row */}
        <div className="mt-10 w-full max-w-[1200px] relative flex flex-col lg:flex-row items-center">
          {/* AVANT — scale 1.32, large right padding for spacing */}
          <div
            className="flex-1 relative flex items-center justify-center pr-16 lg:pr-24 overflow-visible"
            style={{ minHeight: '380px' }}
          >
            <img
              src="/assets/chaos-avant.png"
              alt="Avant : chaos opérationnel"
              className="w-full h-auto object-contain"
              style={{ transform: 'scale(1.32)' }}
              loading="lazy"
            />
          </div>

          {/* Stylized connector — centered between the two images */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 flex flex-col items-center pointer-events-none">
            {/* Vertical line above */}
            <div className="w-[1px] h-8 bg-gradient-to-b from-transparent to-gold/60" />
            {/* Gold circle with arrow */}
            <div className="w-11 h-11 rounded-full bg-gold flex items-center justify-center shadow-[0_0_20px_rgba(184,155,94,0.35)] border border-ivory/30">
              <ArrowRight className="w-5 h-5 text-ivory" strokeWidth={2} />
            </div>
            {/* Vertical line below */}
            <div className="w-[1px] h-8 bg-gradient-to-b from-gold/60 to-transparent" />
            {/* Label */}
            <span className="micro-label text-violet/50 text-[9px] mt-2 tracking-[0.2em]">VERS</span>
          </div>

          {/* APRÈS — scale 1.265, large left padding for spacing */}
          <div
            className="flex-1 relative flex items-center justify-center pl-16 lg:pl-24 overflow-visible"
            style={{ minHeight: '380px' }}
          >
            <img
              src="/assets/chaos-apres.png"
              alt="Après : pilotage opérationnel consolidé"
              className="w-full h-auto object-contain"
              style={{ transform: 'scale(1.265)' }}
              loading="lazy"
            />
          </div>
        </div>


      </div>
    </section>
  );
}
