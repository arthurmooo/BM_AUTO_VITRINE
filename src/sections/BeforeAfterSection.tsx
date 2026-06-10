import { ArrowRight, ArrowDown } from 'lucide-react';

/* ------------------------------------------------------------------ */
/*  Before / After Section                                            */
/* ------------------------------------------------------------------ */
export default function BeforeAfterSection() {
  const headlineWords = [
    { text: 'Vos', gold: false },
    { text: 'outils', gold: false },
    { text: 'restent.', gold: false },
    { text: 'La', gold: true },
    { text: 'circulation', gold: true },
    { text: 'manuelle', gold: true },
    { text: 'disparaît.', gold: true },
  ];

  return (
    <section
      id="transformation"
      className="relative w-full bg-ivory z-30 overflow-hidden py-[10vh]"
    >
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center px-[5vw]">
        {/* Micro label */}
        <div className="flex items-center gap-4 mb-4">
          <div className="w-8 h-[1px] bg-gold/40" />
          <span className="micro-label text-gold tracking-[0.18em]">TRANSFORMATION</span>
          <div className="w-8 h-[1px] bg-gold/40" />
        </div>

        {/* Headline */}
        <h2
          aria-label="Vos outils restent. La circulation manuelle disparaît."
          className="font-serif text-display-sm text-violet text-center max-w-[95vw] sm:max-w-[78vw] mb-0"
          style={{ fontWeight: 400 }}
        >
          {headlineWords.map((word, i) => (
            <span
              key={i}
              aria-hidden="true"
              className={`inline-block mr-[0.3em] ${word.gold ? 'text-gold' : ''}`}
            >
              {word.text}
            </span>
          ))}
        </h2>

        <p className="mt-4 max-w-[620px] text-center text-[clamp(14px,1.1vw,16px)] leading-relaxed text-muted-gray">
          On garde ce qui fonctionne déjà. On supprime ce qui circule encore à la main.
        </p>

        {/* Cards row */}
        <div className="mt-8 w-full max-w-[1620px] relative grid grid-cols-1 lg:mt-[5vh] lg:grid-cols-[1.12fr_104px_1.2fr] items-center gap-y-8 lg:gap-y-10 lg:gap-x-1">
          {/* AVANT */}
          <div
            className="transformation-panel relative flex min-h-[180px] items-center justify-center overflow-visible sm:min-h-[270px] lg:min-h-[430px]"
          >
            <img
              src="/assets/chaos-avant.webp"
              alt="Avant : chaos opérationnel"
              className="h-auto w-[min(820px,96vw)] object-contain lg:w-[142%]"
              loading="lazy"
            />
          </div>

          {/* Desktop connector — vertical */}
          <div className="relative z-50 hidden h-[310px] flex-col items-center justify-center pointer-events-none lg:flex">
            <div className="w-[1px] flex-1 bg-gradient-to-b from-transparent via-gold/45 to-gold/55" />
            <div className="w-14 h-14 rounded-full bg-gold flex items-center justify-center shadow-[0_16px_34px_rgba(184,155,94,0.28)] border border-ivory/50">
              <ArrowRight className="w-5 h-5 text-ivory" strokeWidth={2} />
            </div>
            <div className="w-[1px] flex-1 bg-gradient-to-b from-gold/55 via-gold/35 to-transparent" />
            <span className="micro-label text-violet/50 text-[10px] mt-3 tracking-[0.22em]">VERS</span>
          </div>

          {/* Mobile connector — vertical with labels */}
          <div className="flex lg:hidden flex-col items-center justify-center gap-2 py-2">
            <span className="micro-label text-violet/40 text-[10px] tracking-[0.18em]">AVANT</span>
            <div className="flex flex-col items-center">
              <div className="w-[1px] h-6 bg-gradient-to-b from-transparent to-gold/50" />
              <div className="w-8 h-8 rounded-full bg-gold flex items-center justify-center shadow-[0_8px_20px_rgba(184,155,94,0.25)]">
                <ArrowDown className="w-3.5 h-3.5 text-ivory" strokeWidth={2} />
              </div>
              <div className="w-[1px] h-6 bg-gradient-to-t from-transparent to-gold/50" />
            </div>
            <span className="micro-label text-gold/70 text-[10px] tracking-[0.18em]">APRÈS</span>
          </div>

          {/* APRÈS */}
          <div
            className="transformation-panel relative flex min-h-[180px] items-center justify-center overflow-visible sm:min-h-[270px] lg:min-h-[410px]"
          >
            <img
              src="/assets/chaos-apres.webp"
              alt="Après : pilotage opérationnel consolidé"
              className="h-auto w-[min(860px,96vw)] object-contain lg:w-[112%]"
              loading="lazy"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
