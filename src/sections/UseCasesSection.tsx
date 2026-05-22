import { Bell, FolderKanban, RefreshCw, CalendarCheck, Eye } from 'lucide-react';

/* ------------------------------------------------------------------ */
/*  Use Cases Section — Asymmetric Bento Grid                         */
/* ------------------------------------------------------------------ */
export default function UseCasesSection() {
  return (
    <section
      id="usecases"
      className="relative w-full py-[14vh] bg-ivory z-40"
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
          className="font-serif text-display-sm text-violet text-center max-w-[70vw]"
          style={{ fontWeight: 400 }}
        >
          Où le manuel ralentit vos équipes
        </h2>

        {/* Subline */}
        <p className="text-center text-muted-gray text-[clamp(14px,1.15vw,16px)] leading-relaxed mt-4 max-w-[48vw]">
          Chaque minute passée à relancer, rechercher ou recopier est une minute soustraite à l&apos;analyse et à la décision.
        </p>

        {/* BENTO GRID — Asymmetric layout */}
        <div className="mt-12 w-full max-w-[1100px] grid grid-cols-12 gap-4 auto-rows-[minmax(240px,auto)]">

          {/* ROW 1 — Two large cards */}
          {/* Card 1: Relances — large left, dark bg */}
          <div className="card-premium col-span-12 md:col-span-7 bg-violet rounded-[18px] p-6 flex flex-col justify-between min-h-[300px] relative overflow-hidden">
            {/* Top: Visual */}
            <div className="relative flex-1 flex items-center justify-center">
              {/* Relance mockup */}
              <div className="w-full max-w-[340px] bg-ivory/10 backdrop-blur-sm rounded-[14px] border border-ivory/15 p-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-full bg-gold/30 flex items-center justify-center">
                    <Bell className="w-4 h-4 text-gold" strokeWidth={1.5} />
                  </div>
                  <span className="text-ivory/70 text-xs">Relances actives</span>
                  <span className="ml-auto text-gold text-xs font-medium">3 en attente</span>
                </div>
                <div className="space-y-2">
                  {[
                    { name: 'Client Alpha — Pièces fiscales', days: 'J+3', color: 'bg-gold/30 text-gold' },
                    { name: 'Client Bêta — KYC', days: 'J+5', color: 'bg-ivory/15 text-ivory/60' },
                    { name: 'Client Gamma — Signatures', days: 'J+1', color: 'bg-gold/30 text-gold' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center justify-between py-2 border-b border-ivory/10 last:border-0">
                      <span className="text-sm text-ivory/85">{item.name}</span>
                      <span className={`text-[10px] px-2 py-0.5 rounded-full ${item.color}`}>{item.days}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* Bottom: Text */}
            <div className="mt-4">
              <h3 className="font-serif text-xl text-ivory font-medium">Relances & suivi de pièces</h3>
              <p className="text-sm text-ivory/55 mt-1.5 leading-relaxed">
                Relances programmées, pièces tracées, aucun dossier oublié dans les méandres des boîtes mail.
              </p>
            </div>
          </div>

          {/* Card 2: Reporting — smaller right, light bg */}
          <div className="card-premium col-span-12 md:col-span-5 bg-cream/70 rounded-[18px] p-6 flex flex-col justify-between min-h-[300px]">
            {/* Top: Visual — mini graph */}
            <div className="flex-1 flex items-center justify-center">
              <div className="w-full max-w-[260px]">
                <div className="flex items-end justify-between h-[120px] gap-1.5">
                  {[35, 50, 40, 65, 45, 70, 55, 80, 60, 75, 55, 85].map((h, i) => (
                    <div key={i} className="flex-1 rounded-t-sm" style={{ height: `${h}%`, background: i >= 9 ? '#B89B5E' : 'rgba(43,30,61,0.12)' }} />
                  ))}
                </div>
                <div className="flex justify-between mt-2">
                  {['J', 'F', 'M', 'A', 'M', 'J'].map((m, i) => (
                    <span key={i} className="text-[10px] text-muted-gray">{m}</span>
                  ))}
                </div>
              </div>
            </div>
            {/* Bottom: Text */}
            <div className="mt-4">
              <h3 className="font-serif text-xl text-violet font-medium">Reporting client</h3>
              <p className="text-sm text-muted-gray mt-1.5 leading-relaxed">
                Un reporting fiable généré à la volée, sans reconstruction manuelle à chaque échéance.
              </p>
            </div>
          </div>

          {/* ROW 2 — Three cards of varying sizes */}
          {/* Card 3: Pipeline — medium left */}
          <div className="card-premium col-span-12 md:col-span-4 bg-cream/70 rounded-[18px] p-6 flex flex-col justify-between min-h-[280px]">
            {/* Top: Visual — pipeline steps */}
            <div className="flex-1 flex items-center justify-center">
              <div className="w-full max-w-[220px]">
                <div className="flex items-center gap-1">
                  {['Cadrage', 'DD', 'Sign.', 'Closing'].map((step, i) => (
                    <div key={i} className="flex items-center gap-1">
                      <div className={`px-2 py-1.5 rounded-md text-[10px] font-medium text-center whitespace-nowrap ${
                        i < 2 ? 'bg-violet text-ivory' : 'bg-cream border border-lavender/30 text-muted-gray'
                      }`}>
                        {step}
                      </div>
                      {i < 3 && <div className="w-2 h-[1px] bg-gold/40" />}
                    </div>
                  ))}
                </div>
                <div className="mt-4 bg-cream rounded-lg p-3 border border-gold/8">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] text-muted-gray uppercase tracking-wider">Pipeline</span>
                    <span className="text-[10px] text-gold">4 actifs</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex-1 h-1.5 bg-ivory rounded-full overflow-hidden">
                      <div className="h-full bg-violet rounded-full" style={{ width: '60%' }} />
                    </div>
                    <span className="text-[10px] text-violet font-medium">60%</span>
                  </div>
                </div>
              </div>
            </div>
            {/* Bottom: Text */}
            <div className="mt-4">
              <div className="flex items-center gap-2 mb-2">
                <FolderKanban className="w-4 h-4 text-gold" strokeWidth={1.5} />
                <h3 className="font-serif text-lg text-violet font-medium">Suivi de dossiers</h3>
              </div>
              <p className="text-xs text-muted-gray leading-relaxed">
                Un pipeline clair avec étapes, responsables et échéances visibles.
              </p>
            </div>
          </div>

          {/* Card 4: CRM Sync — medium center, darker bg */}
          <div className="card-premium col-span-12 md:col-span-4 bg-violet/90 rounded-[18px] p-6 flex flex-col justify-between min-h-[280px] relative overflow-hidden">
            {/* Subtle pattern */}
            <div className="absolute inset-0 opacity-[0.04]" style={{
              backgroundImage: `radial-gradient(circle at 20% 50%, #B89B5E 1px, transparent 1px)`,
              backgroundSize: '20px 20px'
            }} />
            {/* Top: Visual — sync flow */}
            <div className="relative flex-1 flex items-center justify-center z-10">
              <div className="w-full max-w-[220px]">
                <div className="flex items-center justify-center gap-2">
                  <div className="bg-ivory/15 rounded-lg px-3 py-2 border border-ivory/10 text-center">
                    <p className="text-[10px] text-ivory/60 uppercase tracking-wider">CRM</p>
                    <p className="text-xs text-ivory font-medium mt-0.5">Salesforce</p>
                  </div>
                  <RefreshCw className="w-3.5 h-3.5 text-gold flex-shrink-0" strokeWidth={1.5} />
                  <div className="bg-ivory/15 rounded-lg px-3 py-2 border border-ivory/10 text-center">
                    <p className="text-[10px] text-ivory/60 uppercase tracking-wider">Fichiers</p>
                    <p className="text-xs text-ivory font-medium mt-0.5">Drive</p>
                  </div>
                </div>
                <div className="mt-3 bg-ivory/10 rounded-lg p-2.5 border border-ivory/10 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-[10px] text-ivory/70">Dernière sync : il y a 2 min</span>
                </div>
              </div>
            </div>
            {/* Bottom: Text */}
            <div className="relative mt-4 z-10">
              <div className="flex items-center gap-2 mb-2">
                <RefreshCw className="w-4 h-4 text-gold" strokeWidth={1.5} />
                <h3 className="font-serif text-lg text-ivory font-medium">Synchronisation</h3>
              </div>
              <p className="text-xs text-ivory/55 leading-relaxed">
                Vos outils parlent entre eux : plus de double saisie, plus de données désynchronisées.
              </p>
            </div>
          </div>

          {/* Card 5: RDV — medium right */}
          <div className="card-premium col-span-12 md:col-span-4 bg-cream/70 rounded-[18px] p-6 flex flex-col justify-between min-h-[280px]">
            {/* Top: Visual — checklist */}
            <div className="flex-1 flex items-center justify-center">
              <div className="w-full max-w-[220px]">
                <div className="bg-cream/60 rounded-[12px] p-4 border border-gold/8">
                  <div className="flex items-center gap-2 mb-3">
                    <CalendarCheck className="w-4 h-4 text-violet" strokeWidth={1.5} />
                    <span className="text-xs text-violet font-medium">Réunion cadrage — 10h00</span>
                  </div>
                  <div className="space-y-2">
                    {[
                      { label: 'Compte-rendu structuré', done: true },
                      { label: 'Actions assignées', done: true },
                      { label: 'Relances programmées', done: false },
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <div className={`w-4 h-4 rounded-full border flex items-center justify-center flex-shrink-0 ${
                          item.done ? 'bg-violet border-violet' : 'border-lavender/40'
                        }`}>
                          {item.done && <div className="w-1.5 h-1.5 bg-ivory rounded-full" />}
                        </div>
                        <span className={`text-[11px] ${item.done ? 'text-ink' : 'text-muted-gray'}`}>{item.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            {/* Bottom: Text */}
            <div className="mt-4">
              <div className="flex items-center gap-2 mb-2">
                <CalendarCheck className="w-4 h-4 text-gold" strokeWidth={1.5} />
                <h3 className="font-serif text-lg text-violet font-medium">RDV & comptes-rendus</h3>
              </div>
              <p className="text-xs text-muted-gray leading-relaxed">
                Documents préparés, compte-rendus structurés, actions créées automatiquement.
              </p>
            </div>
          </div>

          {/* ROW 3 — Large featured card */}
          {/* Card 6: Visibilité client — full width, split layout */}
          <div className="card-premium col-span-12 bg-cream/70 rounded-[18px] p-6 flex flex-col md:flex-row items-center gap-6 min-h-[240px]">
            {/* Left: Visual — client portal mockup */}
            <div className="flex-1 flex items-center justify-center w-full">
              <div className="w-full max-w-[420px] bg-ivory rounded-[12px] border border-gold/10 shadow-card-sm p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <Eye className="w-4 h-4 text-gold" strokeWidth={1.5} />
                    <span className="text-xs text-violet font-medium">Portail client</span>
                  </div>
                  <span className="text-[10px] text-gold bg-gold/15 px-2 py-0.5 rounded-full">En direct</span>
                </div>
                <div className="space-y-2.5">
                  {[
                    { name: 'Mission Alpha', progress: 68, color: 'bg-violet' },
                    { name: 'Mission Bêta', progress: 42, color: 'bg-gold' },
                    { name: 'Mission Gamma', progress: 91, color: 'bg-violet' },
                  ].map((m, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <span className="text-[11px] text-ink w-28 flex-shrink-0">{m.name}</span>
                      <div className="flex-1 h-2 bg-cream rounded-full overflow-hidden">
                        <div className={`h-full ${m.color} rounded-full`} style={{ width: `${m.progress}%` }} />
                      </div>
                      <span className="text-[10px] text-muted-gray w-8 text-right">{m.progress}%</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* Right: Text */}
            <div className="md:w-[280px] flex-shrink-0">
              <h3 className="font-serif text-xl text-violet font-medium">Visibilité client & partage</h3>
              <p className="text-sm text-muted-gray mt-2 leading-relaxed">
                Vos clients voient l&apos;avancement en temps réel sans relancer vos équipes. Transparence sans friction.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
