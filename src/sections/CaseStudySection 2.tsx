import { Building2, Users, MessageSquare, History, ShieldCheck } from 'lucide-react';

/* ------------------------------------------------------------------ */
/*  Case Study — M&A Bento (exact layout reference)                    */
/* ------------------------------------------------------------------ */
export default function CaseStudySection() {
  return (
    <section
      id="casestudy"
      className="relative w-full py-[14vh] z-50"
      style={{ backgroundColor: '#2B1E3D' }}
    >
      {/* Ombre subtile au sommet — transition éditoriale */}
      <div
        className="absolute top-0 left-0 right-0 h-[4px] pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.07) 0%, rgba(0,0,0,0.02) 60%, transparent 100%)',
        }}
      />

      {/* Subtle texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          mixBlendMode: 'screen',
        }}
      />

      <div className="relative z-10 flex flex-col items-center px-[4vw]">
        {/* Micro label */}
        <div className="flex items-center gap-4 mb-4">
          <div className="w-8 h-[1px] bg-gold/40" />
          <span className="micro-label text-gold tracking-[0.18em]">CAS CONCRET</span>
          <div className="w-8 h-[1px] bg-gold/40" />
        </div>

        <h2
          className="font-serif text-display-sm text-ivory text-center max-w-[74vw]"
          style={{ fontWeight: 400 }}
        >
          Un cas concret dans le conseil <span className="text-gold">M&amp;A</span>.
        </h2>

        <p className="text-center text-ivory/55 text-[clamp(14px,1.15vw,16px)] leading-relaxed mt-4 max-w-[56vw]">
          Pour un cabinet M&amp;A international, nous avons conçu une webapp interne + client pour centraliser les missions, les cibles, les relances, les documents et le reporting.
        </p>

        {/* ===== BENTO GRID ===== */}
        <div className="mt-10 w-full max-w-[1060px] grid grid-cols-12 gap-3">

          {/* === ROW 1 === */}

          {/* Card 1: Pipeline multi-missions — 8 cols */}
          <div className="card-premium col-span-12 md:col-span-8 bg-ivory/[0.05] rounded-[16px] border border-gold/15 p-5 flex flex-col min-h-[280px]">
            {/* Header */}
            <h3 className="font-serif text-lg text-ivory font-medium">Pipeline multi-missions</h3>
            <p className="text-[11px] text-ivory/40 mt-0.5">15 workflows MVP — 20 au total</p>

            {/* Step circles */}
            <div className="flex items-center justify-between mt-4 px-4">
              {[
                { label: 'CADRAGE', count: 3 },
                { label: 'DD', count: 5 },
                { label: 'SIGNATURES', count: 4 },
                { label: 'CLOSING', count: 3 },
              ].map((step, i) => (
                <div key={i} className="flex flex-col items-center relative flex-1">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium border-2 mb-1 ${
                    i < 2
                      ? 'bg-transparent text-ivory border-ivory/30'
                      : 'bg-transparent text-ivory/40 border-ivory/15'
                  }`}>
                    {step.count}
                  </div>
                  <span className="text-[9px] text-ivory/45 tracking-wider">{step.label}</span>
                  {i < 3 && (
                    <div className="absolute top-5 left-[calc(50%+20px)] right-[calc(50%-20px)] h-[1px] bg-ivory/10" />
                  )}
                </div>
              ))}
            </div>

            {/* Mission bars */}
            <div className="mt-5 space-y-3 flex-1">
              {[
                { name: 'Mission Alpha', progress: 65, color: 'bg-gold/70' },
                { name: 'Mission Bêta', progress: 30, color: 'bg-lavender/30' },
                { name: 'Mission Gamma', progress: 85, color: 'bg-gold/70' },
              ].map((m, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span className="text-[11px] text-ivory/60 w-28 flex-shrink-0">{m.name}</span>
                  <div className="flex-1 h-[3px] bg-ivory/10 rounded-full overflow-hidden">
                    <div className={`h-full rounded-full ${m.color}`} style={{ width: `${m.progress}%` }} />
                  </div>
                  <span className="text-[11px] text-ivory/50 w-7 text-right">{m.progress}%</span>
                </div>
              ))}
            </div>
          </div>

          {/* Card 2: Tableau de bord M&A — 4 cols */}
          <div className="card-premium col-span-12 md:col-span-4 bg-ivory/[0.05] rounded-[16px] border border-gold/15 p-5 flex flex-col min-h-[280px]">
            {/* Micro label */}
            <div className="flex items-center gap-2 mb-3">
              <Building2 className="w-3 h-3 text-ivory/40" strokeWidth={1.5} />
              <span className="text-[9px] text-ivory/40 uppercase tracking-wider">ESPACE INTERNE</span>
            </div>
            <h3 className="font-serif text-lg text-ivory font-medium">Tableau de bord M&amp;A</h3>
            <p className="text-[11px] text-ivory/45 leading-relaxed mt-1.5">
              Missions, cibles, relances et reporting centralisés pour les équipes.
            </p>
            {/* Bar chart visual */}
            <div className="flex items-end justify-end gap-[3px] h-10 mt-3 mb-4 opacity-40">
              {[20, 35, 25, 50, 40, 55, 45, 65, 50, 60].map((h, i) => (
                <div key={i} className="w-1.5 rounded-t-sm bg-ivory/30" style={{ height: `${h}%` }} />
              ))}
            </div>
            {/* Stats */}
            <div className="mt-auto flex items-center gap-4">
              <div>
                <span className="font-serif text-4xl text-gold font-light">24</span>
                <span className="block text-[9px] text-ivory/40 uppercase tracking-wider mt-1">MISSIONS</span>
              </div>
              <div className="w-[1px] h-12 bg-gold/20" />
              <div>
                <span className="font-serif text-4xl text-gold font-light">18</span>
                <span className="block text-[9px] text-ivory/40 uppercase tracking-wider mt-1">CIBLES</span>
              </div>
            </div>
          </div>

          {/* === ROW 2 === */}

          {/* Card 3: Fiche cible structurée — 4 cols */}
          <div className="card-premium col-span-12 md:col-span-4 bg-ivory/[0.05] rounded-[16px] border border-gold/15 p-5 flex flex-col min-h-[260px]">
            <span className="text-[10px] text-gold tracking-wider mb-1">60 CHAMPS</span>
            <h3 className="font-serif text-lg text-ivory font-medium">Fiche cible structurée</h3>
            <p className="text-[11px] text-ivory/45 leading-relaxed mt-1.5">
              Informations clés, documents, statuts et historique par cible.
            </p>
            {/* Asset */}
            <div className="mt-3 flex-1 flex items-center justify-center">
              <img
                src="/assets/fiche-cible.png"
                alt="Fiche cible Alpha Partners"
                className="max-w-[85%] max-h-[140px] object-contain rounded-lg"
                loading="lazy"
              />
            </div>
          </div>

          {/* Card 4: Reporting & CRM — 4 cols */}
          <div className="card-premium col-span-12 md:col-span-4 bg-ivory/[0.05] rounded-[16px] border border-gold/15 p-5 flex flex-col min-h-[260px]">
            <span className="text-[10px] text-gold tracking-wider mb-1">SYNC AUTO</span>
            <h3 className="font-serif text-lg text-ivory font-medium">Reporting &amp; CRM</h3>
            <p className="text-[11px] text-ivory/45 leading-relaxed mt-1.5">
              Reporting auto et sync bidirectionnelle avec le CRM existant.
            </p>
            {/* Asset */}
            <div className="mt-3 flex-1 flex items-center justify-center">
              <img
                src="/assets/sync-crm.png"
                alt="Synchronisation CRM"
                className="max-w-[85%] max-h-[120px] object-contain"
                loading="lazy"
              />
            </div>
          </div>

          {/* Card 5: Portail client dédié — 4 cols */}
          <div className="card-premium col-span-12 md:col-span-4 bg-ivory/[0.05] rounded-[16px] border border-gold/15 p-5 flex flex-col min-h-[260px]">
            <div className="flex items-center gap-2 mb-1">
              <Users className="w-3 h-3 text-ivory/40" strokeWidth={1.5} />
              <span className="text-[9px] text-ivory/40 uppercase tracking-wider">ESPACE CLIENT</span>
            </div>
            <h3 className="font-serif text-lg text-ivory font-medium">Portail client dédié</h3>
            <p className="text-[11px] text-ivory/45 leading-relaxed mt-1.5">
              Chaque client consulte l'avancement de sa mission en temps réel.
            </p>
            {/* Asset */}
            <div className="mt-3 flex-1 flex items-center justify-center">
              <img
                src="/assets/portail-client.png"
                alt="Portail client Acme Corp"
                className="max-w-[85%] max-h-[140px] object-contain rounded-lg"
                loading="lazy"
              />
            </div>
          </div>

          {/* === ROW 3 === */}

          {/* Card 6: Feedback client — 4 cols */}
          <div className="card-premium col-span-12 md:col-span-4 bg-ivory/[0.04] rounded-[16px] border border-gold/10 p-5 flex flex-col min-h-[180px]">
            <div className="flex items-center gap-2.5 mb-2">
              <MessageSquare className="w-4 h-4 text-gold" strokeWidth={1.5} />
              <h3 className="font-serif text-sm text-ivory font-medium">Feedback client</h3>
            </div>
            <p className="text-[11px] text-ivory/45 leading-relaxed">
              Collecte structurée des retours intégrée au dossier.
            </p>
            {/* Asset */}
            <div className="mt-auto pt-3 flex items-center justify-center">
              <img
                src="/assets/feedback-bubble.png"
                alt="Retour reçu intégré"
                className="max-w-[70%] max-h-[70px] object-contain"
                loading="lazy"
              />
            </div>
          </div>

          {/* Card 7: Historique complet — 4 cols */}
          <div className="card-premium col-span-12 md:col-span-4 bg-ivory/[0.04] rounded-[16px] border border-gold/10 p-5 flex flex-col min-h-[180px]">
            <div className="flex items-center gap-2.5 mb-2">
              <History className="w-4 h-4 text-gold" strokeWidth={1.5} />
              <h3 className="font-serif text-sm text-ivory font-medium">Historique complet</h3>
            </div>
            <p className="text-[11px] text-ivory/45 leading-relaxed mb-3">
              Audit trail : chaque action est tracée.
            </p>
            {/* Timeline */}
            <div className="mt-auto flex items-center justify-center gap-0">
              {[
                { size: 'w-3 h-3', color: 'bg-gold', label: 'Document' },
                { size: 'w-2 h-2', color: 'bg-ivory/30', label: 'Statut' },
                { size: 'w-2 h-2', color: 'bg-ivory/20', label: 'Commentaire' },
              ].map((dot, i) => (
                <div key={i} className="flex items-center">
                  <div className="flex flex-col items-center">
                    <div className={`${dot.size} rounded-full ${dot.color}`} />
                    <span className="text-[8px] text-ivory/30 mt-1.5">{dot.label}</span>
                  </div>
                  {i < 2 && <div className="w-10 h-[1px] bg-ivory/10 mb-4" />}
                </div>
              ))}
            </div>
          </div>

          {/* Card 8: Sécurité & conformité — 4 cols */}
          <div className="card-premium col-span-12 md:col-span-4 bg-ivory/[0.04] rounded-[16px] border border-gold/10 p-5 flex flex-col min-h-[180px]">
            <div className="flex items-center gap-2.5 mb-2">
              <ShieldCheck className="w-4 h-4 text-gold" strokeWidth={1.5} />
              <h3 className="font-serif text-sm text-ivory font-medium">Sécurité &amp; conformité</h3>
            </div>
            <p className="text-[11px] text-ivory/45 leading-relaxed">
              Accès par rôles, données isolées, hébergement EU.
            </p>
            {/* Asset */}
            <div className="mt-auto pt-2 flex items-center justify-center">
              <img
                src="/assets/security-shield.png"
                alt="Sécurité et conformité"
                className="max-w-[50%] max-h-[70px] object-contain"
                loading="lazy"
              />
            </div>
          </div>

        </div>

        {/* Bottom micro line */}
        <div className="mt-10 flex items-center gap-3">
          <div className="w-6 h-[1px] bg-gold/30" />
          <span className="micro-label text-ivory/35 text-[10px] tracking-[0.16em]">
            CONFIDENTIEL — SUR-MESURE — PRODUCTION-READY
          </span>
          <div className="w-6 h-[1px] bg-gold/30" />
        </div>
      </div>
    </section>
  );
}
