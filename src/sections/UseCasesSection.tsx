/* ------------------------------------------------------------------ */
/*  Use Cases Section — six-card bento                                */
/* ------------------------------------------------------------------ */
export default function UseCasesSection() {
  return (
    <section
      id="usecases"
      className="relative w-full scroll-mt-24 bg-ivory py-[12vh] z-40"
    >
      <div className="relative z-10 flex flex-col items-center px-[5vw]">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-8 h-[1px] bg-gold/40" />
          <span className="micro-label text-gold tracking-[0.18em]">CAS D&apos;USAGE</span>
          <div className="w-8 h-[1px] bg-gold/40" />
        </div>

        <h2
          className="font-serif text-display-sm text-violet text-center max-w-[70vw]"
          style={{ fontWeight: 400 }}
        >
          Où le manuel ralentit vos équipes
        </h2>

        <p className="text-center text-muted-gray text-[clamp(14px,1.15vw,16px)] leading-relaxed mt-4 max-w-[48vw]">
          Chaque minute passée à relancer, rechercher ou recopier est une minute soustraite à l&apos;analyse et à la décision.
        </p>

        <div className="mt-12 grid w-full max-w-[1580px] grid-cols-12 gap-4">
          <article className="bento-card relative col-span-12 min-h-[405px] overflow-hidden rounded-[20px] bg-violet p-10 lg:col-span-6 2xl:min-h-[430px]">
            <div className="relative z-20 max-w-[200px]">
              <h3 className="font-serif text-[clamp(30px,3vw,48px)] leading-[1.08] text-ivory">
                Relances &<br />suivi de pièces
              </h3>
              <p
                className="mt-5 max-w-[185px] text-[clamp(15px,1.1vw,18px)] leading-relaxed"
                style={{ color: 'rgba(245, 242, 235, 0.84)' }}
              >
                Relances programmées, pièces tracées, aucun dossier oublié dans les méandres des boîtes mail.
              </p>
            </div>
            <img
              src="/assets/bento/relances-pieces.png"
              alt="Cartes de relance programmée et pièces attendues"
              className="bento-image bento-image-relances absolute z-10 drop-shadow-[0_24px_55px_rgba(0,0,0,0.24)]"
              loading="eager"
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
                Un reporting fiable généré à la volée, sans reconstruction manuelle à chaque échéance.
              </p>
            </div>
            <img
              src="/assets/bento/reporting-client.png"
              alt="Rapport mensuel généré automatiquement"
              className="bento-image bento-image-reporting absolute z-10 drop-shadow-[0_26px_48px_rgba(43,30,61,0.14)]"
              loading="eager"
            />
          </article>

          <article className="bento-card relative col-span-12 min-h-[360px] max-lg:min-h-[390px] overflow-hidden rounded-[18px] border border-gold/14 bg-cream/55 p-8 lg:col-span-5 xl:min-h-[480px]">
            <div className="relative z-20 max-w-[360px]">
              <h3 className="font-serif text-[clamp(27px,2.15vw,36px)] leading-tight text-ink">Suivi de dossiers</h3>
              <p className="mt-3 max-w-[270px] text-[clamp(13px,0.95vw,16px)] leading-relaxed text-muted-gray">
                Un pipeline clair avec étapes, responsables et échéances visibles.
              </p>
            </div>
            <img
              src="/assets/bento/suivi-dossiers.png"
              alt="Liste de missions et statuts de dossiers"
              className="bento-image bento-image-suivi absolute z-10 drop-shadow-[0_18px_38px_rgba(43,30,61,0.11)]"
              loading="eager"
            />
          </article>

          <article className="bento-card relative col-span-12 min-h-[340px] max-lg:min-h-[360px] overflow-hidden rounded-[18px] bg-violet p-8 lg:col-span-3 xl:min-h-[480px]">
            <div className="relative z-20 max-w-[185px]">
              <h3 className="font-serif text-[clamp(27px,2.05vw,35px)] leading-tight text-ivory">Synchronisation</h3>
              <p
                className="mt-3 max-w-[170px] text-[clamp(13px,0.9vw,15px)] leading-relaxed"
                style={{ color: 'rgba(245, 242, 235, 0.82)' }}
              >
                Vos outils parlent entre eux : plus de double saisie, plus de données désynchronisées.
              </p>
            </div>
            <div className="bento-visual bento-visual-sync absolute left-1/2 z-10 -translate-x-1/2">
              <img
                src="/assets/bento/synchronisation.png"
                alt="Synchronisation entre CRM, fichiers et email"
                className="w-full drop-shadow-[0_24px_42px_rgba(0,0,0,0.22)]"
                loading="eager"
              />
            </div>
          </article>

          <article className="bento-card relative col-span-12 min-h-[340px] overflow-hidden rounded-[18px] border border-gold/14 bg-cream/55 p-8 lg:col-span-4 xl:min-h-[480px]">
            <div className="relative z-20 max-w-[245px]">
              <h3 className="font-serif text-[clamp(27px,2.05vw,35px)] leading-[1.05] text-ink">
                RDV &<br />comptes-rendus
              </h3>
              <p className="mt-4 max-w-[235px] text-[clamp(13px,0.92vw,15px)] leading-relaxed text-muted-gray">
                Documents préparés, compte-rendus structurés, actions créées automatiquement.
              </p>
            </div>
            <div className="bento-visual bento-visual-rdv absolute left-1/2 z-10 -translate-x-1/2">
              <img
                src="/assets/bento/rdv-comptes-rendus.png"
                alt="Rendez-vous, compte-rendu généré et actions créées"
                className="w-full drop-shadow-[0_20px_40px_rgba(43,30,61,0.1)]"
                loading="eager"
              />
            </div>
          </article>

          <article className="bento-card relative col-span-12 min-h-[340px] max-lg:min-h-[400px] overflow-hidden rounded-[18px] border border-gold/14 bg-cream/55 p-8 2xl:p-10">
            <div className="relative z-20 max-w-[285px] 2xl:max-w-[320px]">
              <h3 className="font-serif text-[clamp(30px,2.45vw,40px)] leading-tight text-ink">
                Visibilité client & partage
              </h3>
              <p className="mt-5 text-[clamp(14px,1vw,17px)] leading-relaxed text-muted-gray">
                Vos clients voient l&apos;avancement en temps réel sans relancer vos équipes. Transparence sans friction.
              </p>
            </div>
            <img
              src="/assets/bento/visibilite-client.png"
              alt="Mission Alpha avec prochaine échéance et activité récente"
              className="bento-image bento-image-visibilite absolute z-10"
              loading="eager"
            />
          </article>
        </div>
      </div>
    </section>
  );
}
