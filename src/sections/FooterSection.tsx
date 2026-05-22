import { ArrowRight } from 'lucide-react';

/* ------------------------------------------------------------------ */
/*  Footer — Classic, Elegant, Sleek                                   */
/* ------------------------------------------------------------------ */
export default function FooterSection() {
  return (
    <footer
      id="footer"
      className="relative w-full z-90"
      style={{ backgroundColor: '#2B1E3D' }}
    >
      {/* Top gold hairline */}
      <div className="h-[1px] bg-gold/15" />

      <div className="relative z-10 flex flex-col items-center px-[6vw] py-14">
        <div className="w-full max-w-[900px]">

          {/* ===== TOP ROW: Logo + CTA ===== */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-10">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <span className="font-serif text-3xl text-ivory font-light tracking-tight">
                BM
              </span>
              <div className="w-[1px] h-6 bg-gold/30" />
              <div className="flex flex-col">
                <span className="text-[10px] text-ivory/60 tracking-[0.15em] uppercase">
                  Automation
                </span>
                <span className="text-[8px] text-gold/50 tracking-[0.12em] uppercase mt-0.5">
                  Systèmes sur-mesure
                </span>
              </div>
            </div>

            {/* CTA */}
            <a
              href="mailto:contact@bmautomation.fr"
              className="btn-premium group flex items-center gap-2 bg-gold/15 text-gold px-5 py-2.5 rounded-lg text-xs font-medium tracking-wider uppercase hover:bg-gold/25"
            >
              Planifier un diagnostic
              <ArrowRight className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={2} />
            </a>
          </div>

          {/* ===== DIVIDER ===== */}
          <div className="h-[1px] bg-gold/10 mb-6" />

          {/* ===== BOTTOM ROW: Legal + Tag ===== */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-[11px] text-ivory/25">
              © 2025 BM Automation. Tous droits réservés.
            </p>

            <div className="flex items-center gap-6">
              {['Mentions légales', 'Confidentialité', 'Conditions'].map((item, i) => (
                <span
                  key={i}
                  className="text-[11px] text-ivory/25 hover:text-ivory/50 transition-colors duration-300 cursor-pointer"
                >
                  {item}
                </span>
              ))}
            </div>

            <span className="text-[9px] text-ivory/20 tracking-wider uppercase">
              Paris — Confidentiel — Sur-mesure
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
