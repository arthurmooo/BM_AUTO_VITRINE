import { useRef, useState, useCallback } from 'react';
import { Mail, BarChart3, FolderOpen, RefreshCw, Calendar, Eye, ArrowLeftRight } from 'lucide-react';

/* ------------------------------------------------------------------ */
/*  Use Cases Section — Desktop Bento Grid + Mobile Carousel          */
/* ------------------------------------------------------------------ */

const useCases = [
  {
    title: 'Relances & suivi de pièces',
    description:
      'Relances planifiées, pièces suivies, dossiers visibles. Moins d’oublis dans les boîtes mail.',
    image: '/assets/bento/relances-pieces.webp',
    alt: 'Cartes de relance programmée et pièces attendues',
    bgViolet: true,
    icon: Mail,
  },
  {
    title: 'Reporting client',
    description:
      'Un reporting fiable, généré à partir des données à jour. Sans reconstruction manuelle.',
    image: '/assets/bento/reporting-client.webp',
    alt: 'Rapport mensuel généré automatiquement',
    bgViolet: false,
    icon: BarChart3,
  },
  {
    title: 'Suivi de dossiers',
    description:
      'Une vue claire des étapes, responsables, échéances et points de blocage.',
    image: '/assets/bento/suivi-dossiers.webp',
    alt: 'Liste de missions et statuts de dossiers',
    bgViolet: false,
    icon: FolderOpen,
  },
  {
    title: 'Synchronisation',
    description:
      'Vos outils parlent mieux entre eux. Moins de double saisie, moins de données décalées.',
    image: '/assets/bento/synchronisation.webp',
    alt: 'Synchronisation entre CRM, fichiers et email',
    bgViolet: true,
    icon: RefreshCw,
  },
  {
    title: 'RDV & comptes-rendus',
    description:
      'Comptes-rendus structurés, actions créées, informations rattachées au bon dossier.',
    image: '/assets/bento/rdv-comptes-rendus.webp',
    alt: 'Rendez-vous, compte-rendu généré et actions créées',
    bgViolet: false,
    icon: Calendar,
  },
  {
    title: 'Visibilité client & partage',
    description:
      'Un espace dédié pour suivre l’avancement, consulter les éléments partagés et donner un retour.',
    image: '/assets/bento/visibilite-client.webp',
    alt: 'Mission Alpha avec prochaine échéance et activité récente',
    bgViolet: false,
    icon: Eye,
  },
];

export default function UseCasesSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const scrollLeft = el.scrollLeft;
    const slideWidth = el.scrollWidth / useCases.length;
    const newIndex = Math.round(scrollLeft / slideWidth);
    setActiveIndex(Math.min(Math.max(newIndex, 0), useCases.length - 1));
  }, []);

  const scrollToIndex = (index: number) => {
    const el = scrollRef.current;
    if (!el) return;
    const slideWidth = el.scrollWidth / useCases.length;
    el.scrollTo({ left: slideWidth * index, behavior: 'smooth' });
  };

  return (
    <section
      id="usecases"
      className="relative w-full scroll-mt-24 bg-ivory py-[12vh] z-40"
    >
      <div className="relative z-10 flex flex-col items-center px-[5vw]">
        {/* Micro label */}
        <div className="flex items-center gap-4 mb-4">
          <div className="w-8 h-[1px] bg-gold/40" />
          <span className="micro-label text-gold tracking-[0.18em]">CAS D&apos;USAGE</span>
          <div className="w-8 h-[1px] bg-gold/40" />
        </div>

        {/* Headline */}
        <h2
          className="font-serif text-display-sm text-violet text-center max-w-[95vw] sm:max-w-[70vw]"
          style={{ fontWeight: 400 }}
        >
          Là où le manuel ralentit vos dossiers.
        </h2>

        <p className="text-center text-muted-gray text-[clamp(14px,1.15vw,16px)] leading-relaxed mt-4 max-w-[90vw] sm:max-w-[48vw]">
          Relances, pièces, reporting, suivi client : nous ciblons les zones où l’information circule encore trop souvent à la main.
        </p>

        {/* ===== DESKTOP BENTO GRID (>= lg) ===== */}
        <div className="mt-12 hidden lg:grid w-full max-w-[1580px] grid-cols-12 gap-4">
          <article className="bento-card relative col-span-12 min-h-[405px] overflow-hidden rounded-[20px] bg-violet p-10 lg:col-span-6 2xl:min-h-[430px]">
            <div className="relative z-20 max-w-[200px]">
              <h3 className="font-serif text-[clamp(30px,3vw,48px)] leading-[1.08] text-ivory">
                Relances &<br />suivi de pièces
              </h3>
              <p
                className="mt-5 max-w-[185px] text-[clamp(15px,1.1vw,18px)] leading-relaxed"
                style={{ color: 'rgba(245, 242, 235, 0.84)' }}
              >
                Relances planifiées, pièces suivies, dossiers visibles. Moins d’oublis dans les boîtes mail.
              </p>
            </div>
            <img
              src="/assets/bento/relances-pieces.webp"
              alt="Cartes de relance programmée et pièces attendues"
              className="bento-image bento-image-relances absolute z-10 drop-shadow-[0_24px_55px_rgba(0,0,0,0.24)]"
              loading="lazy"
            />
            <div className="absolute inset-0 opacity-[0.16]" style={{
              backgroundImage: 'radial-gradient(circle at 30% 70%, rgba(184,155,94,0.7) 0 1px, transparent 2px)',
              backgroundSize: '34px 34px',
            }} />
          </article>

          <article className="bento-card relative col-span-12 min-h-[405px] overflow-hidden rounded-[20px] border border-gold/18 bg-cream/55 p-8 lg:col-span-6 2xl:min-h-[430px] 2xl:p-10">
            <div className="relative z-20 max-w-[215px] pt-2 2xl:max-w-[250px] 2xl:pt-3">
              <h3 className="whitespace-nowrap font-serif text-[clamp(30px,2.55vw,42px)] leading-tight text-ink">Reporting client</h3>
              <p className="mt-5 text-[clamp(14px,1vw,17px)] leading-relaxed text-muted-gray">
                Un reporting fiable, généré à partir des données à jour. Sans reconstruction manuelle.
              </p>
            </div>
            <img
              src="/assets/bento/reporting-client.webp"
              alt="Rapport mensuel généré automatiquement"
              className="bento-image bento-image-reporting absolute z-10 drop-shadow-[0_26px_48px_rgba(43,30,61,0.14)]"
              loading="lazy"
            />
          </article>

          <article className="bento-card relative col-span-12 min-h-[360px] max-lg:min-h-[390px] overflow-hidden rounded-[18px] border border-gold/14 bg-cream/55 p-8 lg:col-span-5 xl:min-h-[480px]">
            <div className="relative z-20 max-w-[360px]">
              <h3 className="font-serif text-[clamp(27px,2.15vw,36px)] leading-tight text-ink">Suivi de dossiers</h3>
              <p className="mt-3 max-w-[270px] text-[clamp(13px,0.95vw,16px)] leading-relaxed text-muted-gray">
                Une vue claire des étapes, responsables, échéances et points de blocage.
              </p>
            </div>
            <img
              src="/assets/bento/suivi-dossiers.webp"
              alt="Liste de missions et statuts de dossiers"
              className="bento-image bento-image-suivi absolute z-10 drop-shadow-[0_18px_38px_rgba(43,30,61,0.11)]"
              loading="lazy"
            />
          </article>

          <article className="bento-card relative col-span-12 min-h-[340px] max-lg:min-h-[360px] overflow-hidden rounded-[18px] bg-violet p-8 lg:col-span-3 xl:min-h-[480px]">
            <div className="relative z-20 max-w-[185px]">
              <h3 className="font-serif text-[clamp(27px,2.05vw,35px)] leading-tight text-ivory">Synchronisation</h3>
              <p
                className="mt-3 max-w-[170px] text-[clamp(13px,0.9vw,15px)] leading-relaxed"
                style={{ color: 'rgba(245, 242, 235, 0.82)' }}
              >
                Vos outils parlent mieux entre eux. Moins de double saisie, moins de données décalées.
              </p>
            </div>
            <div className="bento-visual bento-visual-sync absolute left-1/2 z-10 -translate-x-1/2">
              <img
                src="/assets/bento/synchronisation.webp"
                alt="Synchronisation entre CRM, fichiers et email"
                className="w-full drop-shadow-[0_24px_42px_rgba(0,0,0,0.22)]"
                loading="lazy"
              />
            </div>
          </article>

          <article className="bento-card relative col-span-12 min-h-[340px] overflow-hidden rounded-[18px] border border-gold/14 bg-cream/55 p-8 lg:col-span-4 xl:min-h-[480px]">
            <div className="relative z-20 max-w-[245px]">
              <h3 className="font-serif text-[clamp(27px,2.05vw,35px)] leading-[1.05] text-ink">
                RDV &<br />comptes-rendus
              </h3>
              <p className="mt-4 max-w-[235px] text-[clamp(13px,0.92vw,15px)] leading-relaxed text-muted-gray">
                Comptes-rendus structurés, actions créées, informations rattachées au bon dossier.
              </p>
            </div>
            <div className="bento-visual bento-visual-rdv absolute left-1/2 z-10 -translate-x-1/2">
              <img
                src="/assets/bento/rdv-comptes-rendus.webp"
                alt="Rendez-vous, compte-rendu généré et actions créées"
                className="w-full drop-shadow-[0_20px_40px_rgba(43,30,61,0.1)]"
                loading="lazy"
              />
            </div>
          </article>

          <article className="bento-card relative col-span-12 min-h-[340px] max-lg:min-h-[400px] overflow-hidden rounded-[18px] border border-gold/14 bg-cream/55 p-8 2xl:p-10">
            <div className="relative z-20 max-w-[285px] 2xl:max-w-[320px]">
              <h3 className="font-serif text-[clamp(30px,2.45vw,40px)] leading-tight text-ink">
                Visibilité client & partage
              </h3>
              <p className="mt-5 text-[clamp(14px,1vw,17px)] leading-relaxed text-muted-gray">
                Un espace dédié pour suivre l’avancement, consulter les éléments partagés et donner un retour.
              </p>
            </div>
            <img
              src="/assets/bento/visibilite-client.webp"
              alt="Mission Alpha avec prochaine échéance et activité récente"
              className="bento-image bento-image-visibilite absolute z-10"
              loading="lazy"
            />
          </article>
        </div>

        {/* ===== MOBILE CAROUSEL (< lg) ===== */}
        <div className="lg:hidden w-full mt-10">
          {/* Carousel track */}
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex overflow-x-auto snap-x snap-mandatory gap-4 scrollbar-hide pb-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {useCases.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  className="snap-center flex-shrink-0 w-[85%] first:ml-[7.5%] last:mr-[7.5%]"
                >
                  <div
                    className={`rounded-[20px] p-6 h-full flex flex-col ${
                      item.bgViolet
                        ? 'bg-violet text-ivory'
                        : 'border border-gold/18 bg-cream/55 text-ink'
                    }`}
                  >
                    {/* Icon circle */}
                    <div
                      className={`w-11 h-11 rounded-full border flex items-center justify-center ${
                        item.bgViolet ? 'border-gold/40' : 'border-gold/30'
                      }`}
                    >
                      <Icon
                        className={`w-5 h-5 ${item.bgViolet ? 'text-gold' : 'text-gold'}`}
                        strokeWidth={1.5}
                      />
                    </div>

                    {/* Title */}
                    <h3 className="font-serif text-[26px] leading-tight mt-4">
                      {item.title.includes('&') ? (
                        <>
                          {item.title.split(' & ')[0]} &<br />{item.title.split(' & ')[1]}
                        </>
                      ) : (
                        item.title
                      )}
                    </h3>

                    {/* Gold accent line */}
                    <div className="w-8 h-[2px] bg-gold/60 rounded-full mt-3" />

                    {/* Description */}
                    <p
                      className={`text-[14px] leading-relaxed mt-3 ${
                        item.bgViolet ? 'text-ivory/75' : 'text-muted-gray'
                      }`}
                    >
                      {item.description}
                    </p>

                    {/* Asset image */}
                    <div className="mt-5 flex-1 flex items-end justify-center min-h-[120px]">
                      <img
                        src={item.image}
                        alt={item.alt}
                        className="max-h-[140px] w-auto object-contain drop-shadow-[0_12px_28px_rgba(0,0,0,0.18)]"
                          loading="lazy"
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Dots */}
          <div className="flex items-center justify-center gap-2 mt-5">
            {useCases.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollToIndex(i)}
                className={`rounded-full transition-all duration-300 ${
                  i === activeIndex
                    ? 'w-2 h-2 bg-violet'
                    : 'w-1.5 h-1.5 bg-violet/25'
                }`}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>

          {/* Swipe indicator */}
          <div className="flex flex-col items-center mt-5">
            <ArrowLeftRight className="w-5 h-5 text-gold/50" strokeWidth={1.5} />
            <p className="text-[13px] text-muted-gray/70 mt-1.5">
              Swipez pour découvrir les autres cas d&apos;usage
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
