import { ArrowRight } from 'lucide-react';

const DIAGNOSTIC_URL = 'https://calendly.com/romuald-bocquet328/prise-de-contact?month=2026-05';

/* ------------------------------------------------------------------ */
/*  Final CTA — Dramatic Violet with Geometric Motifs                  */
/* ------------------------------------------------------------------ */
export default function CTASection() {
  return (
    <section
      id="contact"
      className="relative w-full py-[12vh] z-80 overflow-hidden"
      style={{ backgroundColor: '#2B1E3D' }}
    >
      {/* Ombre subtile au sommet — transition éditoriale */}
      <div
        className="absolute top-0 left-0 right-0 h-[4px] pointer-events-none z-10"
        style={{
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.07) 0%, rgba(0,0,0,0.02) 60%, transparent 100%)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-[6vw]">
        {/* Micro label */}
        <span className="micro-label text-gold/80 tracking-[0.2em] mb-6">
          PARLER DE VOS PROCESS
        </span>

        {/* Headline */}
        <h2
          className="font-serif text-[clamp(36px,5vw,64px)] text-ivory leading-[1.08] max-w-[800px]"
          style={{ fontWeight: 400 }}
        >
          Vous avez probablement déjà un process qui mérite mieux qu&apos;un fichier de plus.
        </h2>

        {/* Subline */}
        <p className="text-ivory/50 text-[clamp(15px,1.2vw,17px)] leading-relaxed mt-6 max-w-[540px]">
          On part de vos flux réels pour identifier un gain de temps concret et cadrer une première solution utile.
        </p>

        {/* CTA Button — ivory/beige */}
        <a
          href={DIAGNOSTIC_URL}
          target="_blank"
          rel="noreferrer"
          className="btn-premium group mt-10 inline-flex items-center gap-4 bg-cream text-violet px-10 py-4 rounded-xl text-sm font-medium tracking-wide uppercase hover:bg-ivory"
        >
          Planifier un diagnostic
          <ArrowRight className="w-4 h-4 text-gold transition-transform duration-300 group-hover:translate-x-1" strokeWidth={2} />
        </a>

        <div className="mt-14 h-px w-36 bg-gradient-to-r from-transparent via-gold/35 to-transparent" />
      </div>
    </section>
  );
}
