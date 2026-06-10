import { ArrowRight, Shield } from 'lucide-react';

/* ------------------------------------------------------------------ */
/*  Method Section — Pixel-perfect Reference Match                     */
/* ------------------------------------------------------------------ */
export default function MethodSection() {
  const steps = [
    {
      number: '1',
      title: 'Cartographier',
      subtitle: 'LE PROCESS RÉEL',
      description:
        "Nous analysons vos flux : fichiers,\nemails, CRM, validations, exceptions\net points de décision.",
      image: '/assets/methode-cartographie-normalized.png',
      alt: 'Cartographie des outils et process',
    },
    {
      number: '2',
      title: 'Identifier',
      subtitle: 'LES FRICTIONS MANUELLES',
      description:
        "Nous isolons les relances, doubles saisies,\nrecherches et reconstructions qui\nconsomment du temps qualifié.",
      image: '/assets/methode-frictions-normalized.png',
      alt: 'Frictions manuelles identifiées',
    },
    {
      number: '3',
      title: 'Construire',
      subtitle: 'LE SYSTÈME UTILE',
      description:
        "Chaque automatisation répond à un besoin précis, relié à vos outils.",
      image: '/assets/methode-systeme-normalized.png',
      alt: 'Construction du système automatisé',
    },
    {
      number: '4',
      title: 'Déployer',
      subtitle: 'MESURER, AJUSTER',
      description:
        "Nous mettons en production,\nmesurons le gain, puis ajustons\nsur vos usages réels.",
      image: '/assets/methode-deploiement-normalized.png',
      alt: 'Déploiement et mesure des résultats',
    },
  ];

  return (
    <section id="method" className="relative w-full py-[14vh] bg-ivory z-60">
      <div className="relative z-10 flex flex-col items-center px-[6vw]">
        {/* Micro label */}
        <div className="flex items-center gap-4 mb-5">
          <div className="w-8 h-[1px] bg-gold/30" />
          <span className="micro-label text-gold tracking-[0.18em]">NOTRE MÉTHODE</span>
          <div className="w-8 h-[1px] bg-gold/30" />
        </div>

        {/* Headline */}
        <h2
          className="font-serif text-display-sm text-violet text-center max-w-[95vw] sm:max-w-[70vw] leading-tight"
          style={{ fontWeight: 400 }}
        >
          Une méthode de cadrage,
          <br />
          <span className="text-gold">pas une démo</span> générique.
        </h2>

        {/* Subheadline */}
        <p className="text-center text-muted-gray text-sm leading-relaxed mt-4 max-w-[90vw] sm:max-w-[520px]">
          Nous partons de vos fichiers, outils, contraintes et usages réels.
          <br className="hidden sm:block" />
          Puis nous construisons seulement ce qui enlève une friction concrète.
        </p>

        {/* ===== Steps Grid ===== */}
        <div className="mt-10 w-full max-w-[1080px] relative">
          {/* Connector line */}
          <div className="hidden md:block absolute top-[22px] left-[calc(12.5%+22px)] right-[calc(12.5%+22px)] border-t border-dashed border-gold/55" />
          {[25, 50, 75].map((left) => (
            <div
              key={left}
              className="hidden md:flex absolute top-[11px] z-20 h-6 w-6 -translate-x-1/2 items-center justify-center rounded-full bg-ivory text-gold shadow-[0_0_0_6px_rgba(245,242,235,0.9)]"
              style={{ left: `${left}%` }}
              aria-hidden="true"
            >
              <ArrowRight className="h-4 w-4" strokeWidth={1.8} />
            </div>
          ))}

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 xl:gap-7">
            {steps.map((step) => (
              <div key={step.number} className="method-step-card flex flex-col items-center text-center px-2 sm:px-0">
                {/* ===== TOP: Number + Text ===== */}

                {/* Number circle */}
                <div className="w-11 h-11 rounded-full border border-gold/45 flex items-center justify-center bg-ivory relative z-10 mb-4 shadow-[0_0_0_5px_rgba(245,242,235,0.95)]">
                  <span className="font-serif text-xl text-gold font-light">{step.number}</span>
                </div>

                {/* Title */}
                <h3 className="font-serif text-[22px] text-violet font-normal leading-tight">
                  {step.title}
                </h3>

                {/* Subtitle — uppercase, muted gray */}
                <p className="text-[11px] text-muted-gray/80 tracking-[0.12em] uppercase mt-0.5 mb-2">
                  {step.subtitle}
                </p>

                {/* Description */}
                <p className="text-[13px] text-muted-gray leading-relaxed whitespace-pre-line min-h-[60px] sm:min-h-[86px]">
                  {step.description}
                </p>

                {/* ===== BOTTOM: Illustration Card ===== */}
                <div className="mt-4 w-full flex items-start justify-center">
                  <div className="rounded-[16px] w-full flex h-[clamp(160px,15.5vw,210px)] sm:h-[clamp(184px,15.5vw,210px)] items-start justify-center overflow-visible">
                    <img
                      src={step.image}
                      alt={step.alt}
                      className="h-[clamp(155px,15.3vw,208px)] sm:h-[clamp(182px,15.3vw,208px)] w-auto max-w-[90%] object-contain"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ===== Bottom Banner ===== */}
        <div className="method-proof-banner mt-12 w-full max-w-[1080px] bg-violet rounded-[14px] p-5 flex flex-col md:flex-row items-center gap-4">
          <div className="flex items-center gap-3 flex-1">
            <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
              <Shield className="w-5 h-5 text-gold" strokeWidth={1.5} />
            </div>
            <div>
              <p className="text-sm text-ivory font-medium">
                Nous ne vendons pas un outil.
              </p>
              <p className="text-xs text-ivory/55 mt-0.5">
                Nous construisons avec vous un système de travail durable, mesurable et adapté à votre contexte.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 sm:gap-4 flex-shrink-0 flex-wrap justify-center">
            {['Sur-mesure', 'Transparence', 'Résultats concrets'].map((badge, i) => (
              <div key={i} className="flex items-center gap-2">
                {i > 0 && <div className="w-1 h-1 rounded-full bg-gold/40 hidden sm:block" />}
                <span className="text-[11px] text-ivory/60">{badge}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
