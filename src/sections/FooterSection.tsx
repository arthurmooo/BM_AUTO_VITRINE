import { Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-router';

const LINKEDIN_URL = 'https://www.linkedin.com/company/bm-automation/posts/?feedView=all';
const CONTACT_EMAIL = 'contact@bm-automation-france.com';

/* ------------------------------------------------------------------ */
/*  Footer — Institutional Ivory Signature                             */
/* ------------------------------------------------------------------ */
export default function FooterSection() {
  return (
    <footer
      id="footer"
      className="relative w-full z-90"
      style={{ backgroundColor: '#F5F2EB' }}
    >
      {/* Top hairline: separates the dramatic CTA from the institutional footer */}
      <div className="h-[1px] bg-violet/10" />

      <div className="relative z-10 flex flex-col items-center px-[6vw] py-12 md:py-14">
        <div className="w-full max-w-[1040px]">

          {/* ===== TOP ROW: Logo + Contact Links ===== */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-10">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <span className="font-serif text-3xl text-violet font-light tracking-tight">
                BM
              </span>
              <div className="w-[1px] h-7 bg-gold/45" />
              <div className="flex flex-col">
                <span className="text-[10px] text-violet/65 tracking-[0.15em] uppercase">
                  Automation
                </span>
                <span className="text-[8px] text-gold tracking-[0.12em] uppercase mt-0.5">
                  Systèmes sur-mesure
                </span>
              </div>
            </div>

            {/* Contact links */}
            <div className="flex flex-col items-center gap-3 sm:flex-row md:items-end">
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="group inline-flex items-center gap-1.5 whitespace-nowrap text-[9.5px] font-medium uppercase tracking-[0.06em] text-violet/55 transition-colors duration-300 hover:text-violet sm:gap-2 sm:text-xs sm:tracking-[0.14em]"
              >
                <Mail className="h-3.5 w-3.5 text-gold/70 transition-transform duration-300 group-hover:-translate-y-0.5" strokeWidth={1.7} />
                {CONTACT_EMAIL}
              </a>
              <span className="hidden h-4 w-px bg-violet/12 sm:block" aria-hidden="true" />
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.14em] text-violet/55 transition-colors duration-300 hover:text-violet"
              >
                <Linkedin className="h-3.5 w-3.5 text-gold/70 transition-transform duration-300 group-hover:-translate-y-0.5" strokeWidth={1.7} />
                LinkedIn
              </a>
            </div>
          </div>

          {/* ===== DIVIDER ===== */}
          <div className="h-[1px] bg-violet/10 mb-6" />

          {/* ===== BOTTOM ROW: Legal + Tag ===== */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-[11px] text-violet/45">
              © 2025 BM Automation. Tous droits réservés.
            </p>

            <div className="flex items-center gap-6">
              {[
                { label: 'Mentions légales', path: '/mentions-legales' },
                { label: 'Confidentialité', path: '/confidentialite' },
                { label: 'Conditions', path: '/conditions' },
              ].map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="cursor-pointer text-[11px] text-violet/45 transition-colors duration-300 hover:text-violet"
                >
                  {item.label}
                </Link>
              ))}
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
}
