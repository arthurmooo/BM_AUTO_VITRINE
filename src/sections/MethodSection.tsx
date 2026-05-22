import { Shield } from 'lucide-react';

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
        "Nous analysons vos flux, fichiers,\nvos outils et vos règles métier.\nObjectif : comprendre votre réalité,\npas la théoriser.",
      image: '/assets/methode-cartographie.png',
      alt: 'Cartographie des outils et process',
    },
    {
      number: '2',
      title: 'Identifier',
      subtitle: 'LES FICTIONS MANUELLES',
      description:
        "Nous mettons en évidence les points\nde rupture, gaspillages et pertes de temps\nqui freinent la performance.",
      image: '/assets/methode-frictions.png',
      alt: 'Frictions manuelles identifiées',
    },
    {
      number: '3',
      title: 'Construire',
      subtitle: 'LE SYSTÈME UTILE',
      description:
        "Nous concevons un système clair, simple\net adapté à vos usages. Chaque automatisation\nrépond à un besoin concret.",
      image: '/assets/methode-systeme.png',
      alt: 'Construction du système automatisé',
    },
    {
      number: '4',
      title: 'Déployer',
      subtitle: 'MESURER, AMÉLIORER',
      description:
        "Nous déployons avec vous, mesurons\nl'impact et faisons évoluer le système\nen continu.",
      image: '/assets/methode-deploiement.png',
      alt: 'Déploiement et mesure des résultats',
    },
  ];

  return (
    <section id="method" className="relative w-full py-[14vh] bg-ivory z-60">
      <div className="relative z-10 flex flex-col items-center px-[6vw]">
        {/* Micro label */}
        <div className="flex items-center gap-3 mb-5">
          <span className="text-[10px] text-gold/60 tracking-wider">06</span>
          <div className="w-4 h-[1px] bg-gold/30" />
          <span className="micro-label text-gold tracking-[0.18em]">NOTRE MÉTHODE</span>
        </div>

        {/* Headline */}
        <h2
          className="font-serif text-display-sm text-violet text-center max-w-[70vw] leading-tight"
          style={{ fontWeight: 400 }}
        >
          Une méthode de cadrage,
          <br />
          <span className="text-gold">pas une démo</span> générique.
        </h2>

        {/* Subheadline */}
        <p className="text-center text-muted-gray text-sm leading-relaxed mt-4 max-w-[520px]">
          Nous partons de vos fichiers, outils, contraintes et de la réalité de votre process.
          <br />
          Pas de template. Juste un système utile, pensé pour votre contexte.
        </p>

        {/* ===== Steps Grid ===== */}
        <div className="mt-10 w-full max-w-[1000px] relative">
          {/* Dashed gold connector line — exact ref style */}
          <div className="hidden md:block absolute top-[22px] left-[calc(12.5%+22px)] right-[calc(12.5%+22px)] border-t border-dashed border-gold/20" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
            {steps.map((step) => (
              <div key={step.number} className="flex flex-col items-center text-center">
                {/* ===== TOP: Number + Text ===== */}

                {/* Number circle */}
                <div className="w-11 h-11 rounded-full border border-gold/25 flex items-center justify-center bg-ivory relative z-10 mb-4">
                  <span className="font-serif text-xl text-violet font-light">{step.number}</span>
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
                <p className="text-[13px] text-muted-gray leading-relaxed whitespace-pre-line">
                  {step.description}
                </p>

                {/* ===== BOTTOM: Illustration Card ===== */}
                <div className="mt-4 w-full flex items-end justify-center">
                  <div className="bg-cream/70 rounded-[16px] p-3 w-full flex items-center justify-center min-h-[140px]">
                    <img
                      src={step.image}
                      alt={step.alt}
                      className="w-[160px] h-auto object-contain"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ===== Bottom Banner ===== */}
        <div className="mt-12 w-full max-w-[1000px] bg-violet rounded-[14px] p-5 flex flex-col md:flex-row items-center gap-4">
          <div className="flex items-center gap-3 flex-1">
            <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
              <Shield className="w-5 h-5 text-gold" strokeWidth={1.5} />
            </div>
            <div>
              <p className="text-sm text-ivory font-medium">
                Nous ne vendons pas un outil.
              </p>
              <p className="text-xs text-ivory/55 mt-0.5">
                Nous construisons avec vous un système de travail durable, mesurable et
                évolutif.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4 flex-shrink-0">
            {['Sur-mesure', 'Transparence', 'Résultats concrets'].map((badge, i) => (
              <div key={i} className="flex items-center gap-2">
                {i > 0 && <div className="w-1 h-1 rounded-full bg-gold/40" />}
                <span className="text-[11px] text-ivory/60">{badge}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
