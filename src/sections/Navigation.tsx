import { useState, useEffect } from 'react';
import { ArrowRight, Menu, X } from 'lucide-react';

const DIAGNOSTIC_URL = 'https://calendly.com/romuald-bocquet328/prise-de-contact?month=2026-05';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Accueil', href: '/#hero' },
    { label: 'Cas concret', href: '/#case-study' },
    { label: 'Méthode', href: '/#method' },
    { label: 'Contact', href: '/#contact' },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
          scrolled
            ? 'bg-ivory/90 backdrop-blur-md border-b border-gold/10 shadow-card-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="flex items-center justify-between px-[6vw] py-4">
          {/* Wordmark */}
          <a href="/#hero" className="flex items-baseline gap-2 group">
            <span className="font-serif text-2xl text-violet font-medium tracking-tight">
              BM
            </span>
            <span className="micro-label text-muted-gray tracking-[0.16em] group-hover:text-violet transition-colors">
              AUTOMATION
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="nav-link-premium text-sm text-ink/80 hover:text-violet transition-colors duration-300 relative"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gold/60 transition-all group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* CTA + Mobile toggle */}
          <div className="flex items-center gap-4">
            <a
              href={DIAGNOSTIC_URL}
              target="_blank"
              rel="noreferrer"
              className="btn-premium hidden sm:flex items-center gap-2 bg-violet text-ivory px-4 py-2.5 rounded-lg text-sm font-medium hover:bg-violet/90"
            >
              Planifier un diagnostic
              <ArrowRight className="w-3.5 h-3.5" strokeWidth={1.5} />
            </a>

            {/* Mobile menu button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden w-10 h-10 flex items-center justify-center text-violet"
              aria-label="Menu"
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-[99] bg-ivory/98 backdrop-blur-lg md:hidden">
          <div className="flex flex-col items-center justify-center h-full gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="font-serif text-2xl text-violet hover:text-gold transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href={DIAGNOSTIC_URL}
              target="_blank"
              rel="noreferrer"
              onClick={() => setMenuOpen(false)}
              className="mt-4 flex items-center gap-2 bg-violet text-ivory px-6 py-3 rounded-lg text-sm font-medium"
            >
              Planifier un diagnostic
              <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
            </a>
          </div>
        </div>
      )}
    </>
  );
}
