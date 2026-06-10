import { Building2, History, MessageSquare, ShieldCheck, Users } from 'lucide-react';

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

export default function CaseStudySection() {
  return (
    <section
      id="case-study"
      className="relative z-50 w-full overflow-hidden py-20 sm:py-24 lg:py-28"
      style={{ backgroundColor: '#2B1E3D' }}
    >
      <div className="relative z-10 mx-auto flex w-full max-w-[1620px] flex-col px-5 sm:px-8 lg:px-10">
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
            Pour un cabinet M&amp;A international, nous avons conçu une webapp interne + client pour centraliser les missions, les cibles, les relances, les documents et le reporting.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-12 lg:gap-5">
          <article className={`${cardBase} ${cardGlow} min-h-[390px] p-7 sm:p-9 lg:col-span-7 xl:col-span-7`}>
            <div className="relative z-10">
              <h3 className="font-serif text-[clamp(24px,2.2vw,34px)] leading-tight text-ivory">
                Pipeline multi-missions
              </h3>
              <p className="mt-2 text-sm text-ivory/70 sm:text-base">15 workflows MVP — 20 au total</p>
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
                  <span className="mt-4 text-[9px] font-medium tracking-[0.02em] text-ivory/[0.72] sm:text-[12px] sm:tracking-[0.08em]">
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

          <article className={`${cardBase} ${cardGlow} min-h-[390px] p-7 sm:p-9 lg:col-span-5 xl:col-span-5`}>
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
                  Missions, cibles, relances et reporting centralisés pour les équipes.
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

          <article className={`${cardBase} ${cardGlow} min-h-[300px] p-7 lg:col-span-4`}>
            <div className="relative z-10 grid h-full gap-6 sm:grid-cols-[0.9fr_1.1fr] sm:items-center lg:grid-cols-[0.85fr_1.15fr]">
              <div>
                <span className="rounded-full bg-[#21152d]/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.08em] text-gold">
                  60 champs
                </span>
                <h3 className="mt-7 font-serif text-[clamp(24px,1.9vw,31px)] leading-tight text-ivory">
                  Fiche cible structurée
                </h3>
                <p className="mt-4 text-[15px] leading-7 text-ivory/[0.66]">
                  Informations clés, documents, statuts et historique par cible.
                </p>
              </div>
              <img
                src="/assets/case-study/fiche-cible-crop.png"
                alt="Fiche cible Alpha Partners avec secteur, chiffre d'affaires, pays et statut."
                className={`${assetClass} mx-auto max-h-[245px] w-full max-w-[315px] sm:max-h-[270px]`}
                loading="lazy"
              />
            </div>
          </article>

          <article className={`${cardBase} ${cardGlow} min-h-[300px] p-7 lg:col-span-4`}>
            <div className="relative z-10 grid h-full gap-5 sm:grid-cols-[0.95fr_1.05fr] sm:items-center">
              <div>
                <span className="rounded-full bg-[#21152d]/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.08em] text-gold">
                  Sync auto
                </span>
                <h3 className="mt-7 font-serif text-[clamp(24px,1.9vw,31px)] leading-tight text-ivory">
                  Reporting &amp; CRM
                </h3>
                <p className="mt-4 text-[15px] leading-7 text-ivory/[0.66]">
                  Reporting auto et sync bidirectionnelle avec le CRM existant.
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

          <article className={`${cardBase} ${cardGlow} min-h-[300px] p-7 lg:col-span-4`}>
            <div className="relative z-10 grid h-full gap-5 sm:grid-cols-[0.9fr_1.1fr] sm:items-center">
              <div>
                <div className="flex items-center gap-2 rounded-full bg-[#21152d]/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.08em] text-gold">
                  <Users className="h-3.5 w-3.5" strokeWidth={1.6} />
                  Espace client
                </div>
                <h3 className="mt-7 font-serif text-[clamp(24px,1.9vw,31px)] leading-tight text-ivory">
                  Portail client dédié
                </h3>
                <p className="mt-4 text-[15px] leading-7 text-ivory/[0.66]">
                  Chaque client consulte l'avancement de sa mission en temps réel.
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

          <article className={`${cardBase} ${cardGlow} min-h-[235px] p-7 lg:col-span-4`}>
            <div className="relative z-10 grid h-full gap-5 sm:grid-cols-[0.78fr_1.22fr] sm:items-center">
              <div>
                <div className="mb-5 grid h-12 w-12 place-items-center rounded-full border border-gold/25 bg-gold/5 text-gold">
                  <MessageSquare className="h-5 w-5" strokeWidth={1.6} />
                </div>
                <h3 className="font-serif text-[clamp(23px,1.7vw,29px)] leading-tight text-ivory">
                  Feedback client
                </h3>
                <p className="mt-4 text-[15px] leading-7 text-ivory/[0.66]">
                  Collecte structurée des retours intégrée au dossier.
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

          <article className={`${cardBase} ${cardGlow} min-h-[235px] p-7 lg:col-span-4`}>
            <div className="relative z-10 grid h-full gap-6 sm:grid-cols-[0.85fr_1.15fr] sm:items-center">
              <div>
                <div className="mb-5 grid h-12 w-12 place-items-center rounded-full border border-gold/25 bg-gold/5 text-gold">
                  <History className="h-5 w-5" strokeWidth={1.6} />
                </div>
                <h3 className="font-serif text-[clamp(23px,1.7vw,29px)] leading-tight text-ivory">
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

          <article className={`${cardBase} ${cardGlow} min-h-[235px] p-7 lg:col-span-4`}>
            <div className="relative z-10 grid h-full gap-5 sm:grid-cols-[0.95fr_1.05fr] sm:items-center">
              <div>
                <div className="mb-5 grid h-12 w-12 place-items-center rounded-full border border-gold/25 bg-gold/5 text-gold">
                  <ShieldCheck className="h-5 w-5" strokeWidth={1.6} />
                </div>
                <h3 className="font-serif text-[clamp(23px,1.7vw,29px)] leading-tight text-ivory">
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
        </div>

        <div className="mx-auto mt-8 grid w-full max-w-[1120px] grid-cols-2 gap-3 rounded-[18px] border border-gold/45 bg-gold/[0.08] p-3 shadow-[0_18px_48px_rgba(10,5,18,0.16)] sm:grid-cols-4">
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
    </section>
  );
}
