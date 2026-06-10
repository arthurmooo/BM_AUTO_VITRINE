import { useRef, useState, useCallback } from 'react';
import { Building2, ClipboardList, RefreshCw, Users, MessageSquare, History, ShieldCheck, Route, ArrowLeftRight } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

/* ------------------------------------------------------------------ */
/*  Case Study Section — Desktop Bento Grid + Mobile Carousel         */
/* ------------------------------------------------------------------ */

const cardBase =
  'case-study-card relative overflow-hidden rounded-[22px] border border-white/[0.08] bg-[#251936] shadow-[0_18px_48px_rgba(17,10,28,0.18)]';
const cardGlow = '';
const assetClass = 'relative z-10 object-contain drop-shadow-[0_22px_46px_rgba(0,0,0,0.28)]';

const pipelineSteps = [
  { label: 'CADRAGE', count: 3, active: false },
  { label: 'DD', count: 5, active: true },
  { label: 'SIGNATURES', count: 4, active: false },
  { label: 'CLOSING', count: 3, active: false },
];

const missions = [
  { name: 'Mission Alpha', progress: 65, tone: 'gold' },
  { name: 'Mission Bêta', progress: 30, tone: 'lavender' },
  { name: 'Mission Gamma', progress: 85, tone: 'gold' },
];

const trustChips = ['Données isolées par client', 'Accès par rôle', 'Traçabilité', 'Hébergement EU'];

type MobileSlide =
  | {
      title: string;
      description: string;
      icon: LucideIcon;
      visual: 'pipeline';
    }
  | {
      title: string;
      description: string;
      icon: LucideIcon;
      image: string;
      alt: string;
    };

const mobileSlides: MobileSlide[] = [
  {
    title: 'Pipeline \u0026 Tableau de bord',
    description:
      'Étapes suivies, statuts visibles, relances centralisées pour les équipes M\u0026A.',
    visual: 'pipeline',
    icon: Route,
  },
  {
    title: 'Fiche cible structurée',
    description: 'Données cibles alignées avec le CRM, sans double saisie inutile.',
    image: '/assets/case-study/fiche-cible-crop.png',
    alt: 'Fiche cible Alpha Partners avec secteur, chiffre\u2019affaires et statut',
    icon: ClipboardList,
  },
  {
    title: 'Reporting \u0026 CRM',
    description: 'Statuts, interactions et documents restent cohérents entre les outils.',
    image: '/assets/case-study/reporting-crm-crop.png',
    alt: 'Synchronisation entre reporting et CRM existant',
    icon: RefreshCw,
  },
  {
    title: 'Portail client dédié',
    description: 'Le client suit l’avancement, consulte les cibles et donne son feedback.',
    image: '/assets/case-study/portail-client-crop.png',
    alt: 'Portail client avec progression de la Mission Alpha',
    icon: Users,
  },
  {
    title: 'Feedback client',
    description: 'Retours clients structurés, rattachés automatiquement au bon dossier.',
    image: '/assets/case-study/feedback-client-crop.png',
    alt: 'Feedback client intégré au dossier',
    icon: MessageSquare,
  },

  {
    title: 'Sécurité \u0026 conformité',
    description: 'Accès par rôles, données isolées par client, traçabilité et hébergement UE.',
    image: '/assets/case-study/security-shield-crop.png',
    alt: 'Bouclier de sécurité et conformité',
    icon: ShieldCheck,
  },
];

export default function CaseStudySection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const scrollLeft = el.scrollLeft;
    const slideWidth = el.scrollWidth / mobileSlides.length;
    const newIndex = Math.round(scrollLeft / slideWidth);
    setActiveIndex(Math.min(Math.max(newIndex, 0), mobileSlides.length - 1));
  }, []);

  const scrollToIndex = (index: number) => {
    const el = scrollRef.current;
    if (!el) return;
    const slideWidth = el.scrollWidth / mobileSlides.length;
    el.scrollTo({ left: slideWidth * index, behavior: 'smooth' });
  };

  return (
    <section
      id="case-study"
      className="relative z-50 w-full overflow-hidden py-20 sm:py-24 lg:py-28"
      style={{ backgroundColor: '#2B1E3D' }}
    >
      <div className="relative z-10 mx-auto flex w-full max-w-[1620px] flex-col px-5 sm:px-8 lg:px-10">
        {/* Header */}
        <div className="mx-auto mb-12 max-w-[860px] text-center sm:mb-14">
          <div className="mb-4 flex items-center justify-center gap-4">
            <div className="h-px w-10 bg-gold/45" />
            <span className="micro-label text-gold">CAS CONCRET</span>
            <div className="h-px w-10 bg-gold/45" />
          </div>

          <h2 className="font-serif text-[clamp(38px,5vw,76px)] leading-[0.95] text-ivory">
            Un cas concret dans le conseil <span className="text-gold">M&amp;A</span>.
          </h2>

          <p className="mx-auto mt-5 max-w-[760px] text-[15px] leading-7 text-ivory/[0.58] sm:text-base">
            Pour un acteur international du conseil M&amp;A, nous avons conçu une webapp interne + client pour centraliser missions, cibles, relances, documents et reporting.
          </p>
        </div>

        {/* ===== DESKTOP GRID (>= lg) ===== */}
        <div className="hidden lg:grid grid-cols-1 gap-4 lg:grid-cols-12 lg:gap-5">
          <article className={`${cardBase} ${cardGlow} p-9 lg:col-span-7 xl:col-span-7`}>
            <div className="relative z-10">
              <h3 className="font-serif text-[clamp(24px,2.2vw,34px)] leading-tight text-ivory">
                Pipeline multi-missions
              </h3>
              <p className="mt-2 text-sm text-ivory/70 sm:text-base">15 workflows MVP, 20 au total.</p>
            </div>

            <div className="relative z-10 mt-9 grid grid-cols-4">
              <div className="absolute left-[12.5%] right-[12.5%] top-7 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
              {pipelineSteps.map((step) => (
                <div key={step.label} className="relative flex flex-col items-center">
                  <div
                    className={`grid h-14 w-14 place-items-center rounded-full border text-2xl ${
                      step.active
                        ? 'border-gold text-ivory shadow-[0_0_24px_rgba(214,168,66,0.18)]'
                        : 'border-[#8e6fa8]/45 text-ivory/[0.86]'
                    } bg-[#171128]`}
                  >
                    {step.count}
                  </div>
                  <span className="mt-4 text-[12px] font-medium tracking-[0.08em] text-ivory/[0.72]">
                    {step.label}
                  </span>
                </div>
              ))}
            </div>

            <div className="relative z-10 mt-8 space-y-3.5">
              {missions.map((mission) => (
                <div
                  key={mission.name}
                  className="grid grid-cols-[1fr_48px] items-center gap-x-5 gap-y-3 rounded-xl border border-white/[0.045] bg-white/[0.025] px-6 py-4 sm:grid-cols-[140px_1fr_48px] sm:gap-y-0"
                >
                  <span className="font-serif text-lg text-ivory">{mission.name}</span>
                  <div className="order-last col-span-2 h-2 overflow-hidden rounded-full bg-[#2c2342] sm:order-none sm:col-span-1">
                    <div
                      className={`h-full rounded-full ${
                        mission.tone === 'gold'
                          ? 'bg-gradient-to-r from-[#d4a53f] to-[#ffd078]'
                          : 'bg-gradient-to-r from-[#9d73bd] to-[#d7b9f5]'
                      }`}
                      style={{ width: `${mission.progress}%` }}
                    />
                  </div>
                  <span className="text-right text-lg text-ivory">{mission.progress}%</span>
                </div>
              ))}
            </div>
          </article>

          <article className={`${cardBase} ${cardGlow} p-9 lg:col-span-5 xl:col-span-5`}>
            <div className="relative z-10 flex items-center gap-3 text-ivory/[0.58]">
              <Building2 className="h-4 w-4 text-[#b995cf]" strokeWidth={1.6} />
              <span className="text-xs font-semibold uppercase tracking-[0.16em]">Espace interne</span>
            </div>
            <div className="relative z-10 mt-9 grid gap-6 sm:grid-cols-[minmax(0,1fr)_160px] sm:items-end">
              <div>
                <h3 className="font-serif text-[clamp(25px,2vw,34px)] leading-tight text-ivory">
                  Tableau de bord M&amp;A
                </h3>
                <p className="mt-4 text-[15px] leading-7 text-ivory/[0.68]">
                  Une vue consolidée pour piloter missions, cibles, relances et reporting.
                </p>
              </div>
              <div className="hidden h-32 items-end justify-end gap-2 opacity-40 sm:flex" aria-hidden="true">
                {[28, 42, 52, 66, 78, 57, 84, 101, 122, 144].map((height, index) => (
                  <div
                    key={index}
                    className="w-3 rounded-t-sm bg-gradient-to-t from-[#342748] to-[#7d5e9c]"
                    style={{ height }}
                  />
                ))}
              </div>
            </div>
            <div className="relative z-10 mt-12 grid grid-cols-2 gap-5">
              {[
                { value: '24', label: 'Missions' },
                { value: '18', label: 'Cibles' },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-[18px] bg-white/[0.025] px-7 py-9 text-center"
                >
                  <div className="font-serif text-[clamp(54px,5.2vw,78px)] leading-none text-gold">
                    {stat.value}
                  </div>
                  <div className="mt-5 text-sm font-medium uppercase tracking-[0.08em] text-ivory/[0.86]">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </article>

          <article className={`${cardBase} ${cardGlow} p-7 lg:col-span-4`}>
            <div className="relative z-10 grid h-full gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
              <div>
                <span className="rounded-full bg-[#21152d]/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.08em] text-gold">
                  60 champs
                </span>
                <h3 className="mt-7 font-serif text-[clamp(22px,1.9vw,31px)] leading-tight text-ivory">
                  Fiche cible structurée
                </h3>
                <p className="mt-4 text-[15px] leading-7 text-ivory/[0.66]">
                  Données cibles alignées avec le CRM, sans double saisie inutile.
                </p>
              </div>
              <img
                src="/assets/case-study/fiche-cible-crop.png"
                alt="Fiche cible Alpha Partners avec secteur, chiffre d'affaires, pays et statut."
                className={`${assetClass} mx-auto max-h-[245px] w-full max-w-[315px]`}
                loading="lazy"
              />
            </div>
          </article>

          <article className={`${cardBase} ${cardGlow} p-7 lg:col-span-4`}>
            <div className="relative z-10 grid h-full gap-5 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
              <div>
                <span className="rounded-full bg-[#21152d]/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.08em] text-gold">
                  Sync auto
                </span>
                <h3 className="mt-7 font-serif text-[clamp(22px,1.9vw,31px)] leading-tight text-ivory">
                  Reporting &amp; CRM
                </h3>
                <p className="mt-4 text-[15px] leading-7 text-ivory/[0.66]">
                  Statuts, interactions et documents restent cohérents entre les outils.
                </p>
              </div>
              <img
                src="/assets/case-study/reporting-crm-crop.png"
                alt="Synchronisation entre reporting prêt et CRM existant."
                className={`${assetClass} mx-auto max-h-[250px] w-full max-w-[235px]`}
                loading="lazy"
              />
            </div>
          </article>

          <article className={`${cardBase} ${cardGlow} p-7 lg:col-span-4`}>
            <div className="relative z-10 grid h-full gap-5 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div>
                <div className="flex items-center gap-2 rounded-full bg-[#21152d]/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.08em] text-gold">
                  <Users className="h-3.5 w-3.5" strokeWidth={1.6} />
                  Espace client
                </div>
                <h3 className="mt-7 font-serif text-[clamp(22px,1.9vw,31px)] leading-tight text-ivory">
                  Portail client dédié
                </h3>
                <p className="mt-4 text-[15px] leading-7 text-ivory/[0.66]">
                  Le client suit l’avancement, consulte les cibles et donne son feedback.
                </p>
              </div>
              <img
                src="/assets/case-study/portail-client-crop.png"
                alt="Portail client Acme Corp avec progression de la Mission Alpha."
                className={`${assetClass} mx-auto max-h-[245px] w-full max-w-[335px]`}
                loading="lazy"
              />
            </div>
          </article>

          <article className={`${cardBase} ${cardGlow} p-7 lg:col-span-4`}>
            <div className="relative z-10 grid h-full gap-5 lg:grid-cols-[0.78fr_1.22fr] lg:items-center">
              <div>
                <div className="mb-5 grid h-12 w-12 place-items-center rounded-full border border-gold/25 bg-gold/5 text-gold">
                  <MessageSquare className="h-5 w-5" strokeWidth={1.6} />
                </div>
                <h3 className="font-serif text-[clamp(20px,1.7vw,29px)] leading-tight text-ivory">
                  Feedback client
                </h3>
                <p className="mt-4 text-[15px] leading-7 text-ivory/[0.66]">
                  Retours clients structurés, rattachés automatiquement au bon dossier.
                </p>
              </div>
              <img
                src="/assets/case-study/feedback-client-crop.png"
                alt="Bulle de feedback indiquant retour reçu et intégré au dossier."
                className={`${assetClass} mx-auto max-h-[180px] w-full max-w-[310px]`}
                loading="lazy"
              />
            </div>
          </article>

          <article className={`${cardBase} ${cardGlow} p-7 lg:col-span-4`}>
            <div className="relative z-10 grid h-full gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
              <div>
                <div className="mb-5 grid h-12 w-12 place-items-center rounded-full border border-gold/25 bg-gold/5 text-gold">
                  <History className="h-5 w-5" strokeWidth={1.6} />
                </div>
                <h3 className="font-serif text-[clamp(20px,1.7vw,29px)] leading-tight text-ivory">
                  Historique complet
                </h3>
                <p className="mt-4 text-[15px] leading-7 text-ivory/[0.66]">
                  Audit trail : chaque action est tracée.
                </p>
              </div>
              <div className="relative mx-auto w-full max-w-[280px]">
                <div className="absolute left-7 right-7 top-[7.5px] h-px bg-gradient-to-r from-transparent via-[#8e6fa8]/70 to-transparent" />
                <div className="relative flex justify-between">
                  {[
                    { label: 'Document', color: 'bg-gold' },
                    { label: 'Statut', color: 'bg-[#b992d7]' },
                    { label: 'Commentaire', color: 'bg-[#9f83c2]' },
                  ].map((item) => (
                    <div key={item.label} className="flex flex-col items-center">
                      <span className={`h-4 w-4 rounded-full ${item.color} shadow-[0_0_18px_rgba(214,168,66,0.16)]`} />
                      <span className="mt-4 text-xs text-ivory/[0.62]">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </article>

          <article className={`${cardBase} ${cardGlow} p-7 lg:col-span-4`}>
            <div className="relative z-10 grid h-full gap-5 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
              <div>
                <div className="mb-5 grid h-12 w-12 place-items-center rounded-full border border-gold/25 bg-gold/5 text-gold">
                  <ShieldCheck className="h-5 w-5" strokeWidth={1.6} />
                </div>
                <h3 className="font-serif text-[clamp(20px,1.7vw,29px)] leading-tight text-ivory">
                  Sécurité &amp; conformité
                </h3>
                <p className="mt-4 text-[15px] leading-7 text-ivory/[0.66]">
                  Accès par rôles, données isolées, hébergement EU.
                </p>
              </div>
              <img
                src="/assets/case-study/security-shield-crop.png"
                alt="Bouclier doré représentant la sécurité et la conformité."
                className={`${assetClass} mx-auto max-h-[178px] w-full max-w-[210px]`}
                loading="lazy"
              />
            </div>
          </article>

          {/* Trust chips */}
          <div className="lg:col-span-12 mx-auto mt-4 grid w-full max-w-[1120px] grid-cols-2 gap-3 rounded-[18px] border border-gold/45 bg-gold/[0.08] p-3 shadow-[0_18px_48px_rgba(10,5,18,0.16)] sm:grid-cols-4">
            {trustChips.map((chip) => (
              <div
                key={chip}
                className="rounded-[12px] border border-gold/35 bg-[#3a294d] px-3 py-3 text-center text-[11px] font-semibold uppercase tracking-[0.1em] text-ivory shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]"
              >
                {chip}
              </div>
            ))}
          </div>
        </div>

        {/* ===== MOBILE CAROUSEL (< lg) ===== */}
        <div className="lg:hidden w-full">
          {/* Carousel track */}
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex overflow-x-auto snap-x snap-mandatory gap-4 scrollbar-hide pb-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {mobileSlides.map((slide, i) => {
              const Icon = slide.icon;
              return (
                <div
                  key={i}
                  className="snap-center flex-shrink-0 w-[88%] first:ml-[6%] last:mr-[6%]"
                >
                  <div className="rounded-[22px] border border-white/[0.08] bg-[#251936] p-6 h-full flex flex-col shadow-[0_18px_48px_rgba(17,10,28,0.18)]">
                    {/* Icon circle */}
                    <div className="w-11 h-11 rounded-full border border-gold/30 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-gold" strokeWidth={1.5} />
                    </div>

                    {/* Title */}
                    <h3 className="font-serif text-[26px] leading-tight text-ivory mt-4">
                      {slide.title}
                    </h3>

                    {/* Gold accent line */}
                    <div className="w-8 h-[2px] bg-gold/60 rounded-full mt-3" />

                    {/* Description */}
                    <p className="text-[14px] leading-relaxed text-ivory/65 mt-3">
                      {slide.description}
                    </p>

                    {/* Asset image */}
                    <div className="mt-5 flex-1 flex items-end justify-center min-h-[140px]">
                      {'image' in slide ? (
                        <img
                          src={slide.image}
                          alt={slide.alt}
                          className="max-h-[150px] w-auto object-contain drop-shadow-[0_16px_36px_rgba(0,0,0,0.3)]"
                          loading="eager"
                        />
                      ) : (
                        <div className="w-full rounded-[18px] border border-white/[0.07] bg-[#171128]/74 px-4 py-4 shadow-[0_16px_36px_rgba(0,0,0,0.24)]">
                          <div className="relative grid grid-cols-4">
                            <div className="absolute left-[12.5%] right-[12.5%] top-5 h-px bg-gradient-to-r from-transparent via-gold/45 to-transparent" />
                            {pipelineSteps.map((step) => (
                              <div key={step.label} className="relative flex flex-col items-center">
                                <div
                                  className={`grid h-10 w-10 place-items-center rounded-full border text-base ${
                                    step.active
                                      ? 'border-gold text-ivory shadow-[0_0_20px_rgba(214,168,66,0.2)]'
                                      : 'border-[#8e6fa8]/45 text-ivory/[0.82]'
                                  } bg-[#171128]`}
                                >
                                  {step.count}
                                </div>
                                <span className="mt-2 text-[8px] font-medium tracking-[0.06em] text-ivory/[0.62]">
                                  {step.label}
                                </span>
                              </div>
                            ))}
                          </div>

                          <div className="mt-4 space-y-2">
                            {missions.map((mission) => (
                              <div key={mission.name} className="grid grid-cols-[76px_1fr_28px] items-center gap-2 rounded-lg bg-white/[0.035] px-3 py-2">
                                <span className="truncate font-serif text-[12px] text-ivory">{mission.name}</span>
                                <div className="h-1.5 overflow-hidden rounded-full bg-[#2c2342]">
                                  <div
                                    className={`h-full rounded-full ${
                                      mission.tone === 'gold'
                                        ? 'bg-gradient-to-r from-[#d4a53f] to-[#ffd078]'
                                        : 'bg-gradient-to-r from-[#9d73bd] to-[#d7b9f5]'
                                    }`}
                                    style={{ width: `${mission.progress}%` }}
                                  />
                                </div>
                                <span className="text-right text-[11px] text-ivory/76">{mission.progress}%</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Dots */}
          <div className="flex items-center justify-center gap-2 mt-5">
            {mobileSlides.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollToIndex(i)}
                className={`rounded-full transition-all duration-300 ${
                  i === activeIndex
                    ? 'w-2 h-2 bg-gold'
                    : 'w-1.5 h-1.5 bg-ivory/20'
                }`}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>

          {/* Swipe indicator */}
          <div className="flex flex-col items-center mt-5">
            <ArrowLeftRight className="w-5 h-5 text-ivory/30" strokeWidth={1.5} />
            <p className="text-[13px] text-ivory/45 mt-1.5">
              Swipez pour explorer le cas M&amp;A
            </p>
          </div>
        </div>


      </div>
    </section>
  );
}
