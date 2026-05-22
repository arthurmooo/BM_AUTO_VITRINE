/* ------------------------------------------------------------------ */
/*  Editorial Separator — Architectural chapter break                  */
/*  No gradient, no blur. Net, sobre, maîtrisé.                        */
/*                                                                     */
/*  Variants :                                                         */
/*  - enter-violet : fond ivory, prépare l'entrée en violet           */
/*  - exit-violet  : fond violet, prépare la sortie vers ivory        */
/* ------------------------------------------------------------------ */

interface SectionTransitionProps {
  variant: 'enter-violet' | 'exit-violet';
  label?: string;
}

export default function SectionTransition({ variant, label }: SectionTransitionProps) {
  const isEnterViolet = variant === 'enter-violet';

  /* ---- Fond ivory : préparation entrée violet ---- */
  if (isEnterViolet) {
    return (
      <div className="w-full" style={{ backgroundColor: '#F5F2EB' }}>
        {/* Respiration luxueuse mais maîtrisée */}
        <div className="h-10 md:h-12" />

        {/* Séparateur : fine ligne or sourd centrée */}
        <div className="flex items-center justify-center">
          <div
            className="h-[1px] w-12 md:w-16"
            style={{ backgroundColor: 'rgba(184, 155, 94, 0.22)' }}
          />
        </div>

        {/* Micro-label optionnel, contextualisé, jamais redondant */}
        {label && (
          <div className="flex items-center justify-center mt-3">
            <span
              className="text-[9px] font-medium tracking-[0.25em] uppercase"
              style={{ color: 'rgba(43, 30, 61, 0.22)' }}
            >
              {label}
            </span>
          </div>
        )}

        {/* Petit espace avant la rupture nette */}
        <div className="h-5 md:h-6" />
      </div>
    );
  }

  /* ---- Fond violet : sortie vers ivory ---- */
  return (
    <div className="w-full" style={{ backgroundColor: '#2B1E3D' }}>
      {/* Respiration courte dans le violet */}
      <div className="h-6 md:h-8" />

      {/* Fine ligne or sourd en bas du violet */}
      <div className="flex items-center justify-center">
        <div
          className="h-[1px] w-10 md:w-14"
          style={{ backgroundColor: 'rgba(184, 155, 94, 0.18)' }}
        />
      </div>

      {/* Micro-label optionnel */}
      {label && (
        <div className="flex items-center justify-center mt-2.5">
          <span
            className="text-[9px] font-medium tracking-[0.25em] uppercase"
            style={{ color: 'rgba(245, 242, 235, 0.18)' }}
          >
            {label}
          </span>
        </div>
      )}

      {/* Espace minimal avant la rupture */}
      <div className="h-4 md:h-5" />
    </div>
  );
}
