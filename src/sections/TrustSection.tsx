import { Lock, FileKey, Eye, Server, Puzzle, CheckCircle2, ChevronRight, User, Users, FolderOpen, Mail, MessageSquare, Wrench } from 'lucide-react';

/* ------------------------------------------------------------------ */
/*  Trust Section — Rich Bento with UI Fragments                       */
/* ------------------------------------------------------------------ */
export default function TrustSection() {
  return (
    <section
      id="security"
      className="relative w-full py-[14vh] bg-ivory z-70"
    >
      <div className="relative z-10 flex flex-col items-center px-[5vw]">
        {/* ===== HEADER ROW ===== */}
        <div className="w-full max-w-[1000px] flex flex-col md:flex-row items-start gap-8 mb-10">
          {/* Left: Title block */}
          <div className="flex-1">
            {/* Micro label */}
            <div className="flex items-center gap-3 mb-4">
              <span className="text-[10px] text-gold/60 tracking-wider">01</span>
              <span className="text-[9px] text-gold/50 uppercase tracking-[0.16em]">SÉCURITÉ &amp; CONFIANCE</span>
            </div>
            <h2
              className="font-serif text-[clamp(28px,3.5vw,42px)] text-violet leading-[1.15]"
              style={{ fontWeight: 400 }}
            >
              Conçu pour des environnements où la donnée ne peut pas circuler n&apos;importe comment.
            </h2>
          </div>

          {/* Right: Shield + description */}
          <div className="md:w-[320px] flex-shrink-0 flex gap-4">
            <div className="w-12 h-12 rounded-full border border-gold/30 flex items-center justify-center flex-shrink-0">
              <Lock className="w-5 h-5 text-gold" strokeWidth={1.5} />
            </div>
            <p className="text-sm text-muted-gray leading-relaxed">
              Nous combinons contrôle granulaire, traçabilité complète et hébergement maîtrisé pour protéger vos données à chaque étape.
            </p>
          </div>
        </div>

        {/* ===== BENTO GRID ===== */}
        <div className="w-full max-w-[1000px] grid grid-cols-12 gap-4">

          {/* Card 1: Accès par rôles — 4 cols */}
          <div className="card-premium col-span-12 md:col-span-4 bg-cream/50 rounded-[14px] p-5">
            <div className="flex items-center gap-2 mb-1">
              <Users className="w-4 h-4 text-gold" strokeWidth={1.5} />
              <h3 className="font-serif text-base text-violet font-medium">Accès par rôles</h3>
            </div>
            <p className="text-[11px] text-muted-gray mb-4">
              Des droits précis pour chaque rôle. Le bon accès, au bon moment.
            </p>
            <span className="text-[9px] text-gold uppercase tracking-wider">RÔLES &amp; ACCÈS</span>
            {/* Roles list */}
            <div className="mt-3 space-y-2">
              {[
                { role: 'Administrateur', access: 'Accès total', color: 'text-gold' },
                { role: 'Responsable d\'équipe', access: 'Accès direct', color: 'text-gold' },
                { role: 'Chef de projet', access: 'Projet uniquement', color: 'text-muted-gray' },
                { role: 'Consultant', access: 'Lecture seule', color: 'text-muted-gray' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2.5">
                  <User className="w-3.5 h-3.5 text-muted-gray flex-shrink-0" strokeWidth={1.5} />
                  <span className="text-xs text-ink flex-1">{item.role}</span>
                  <span className={`text-[10px] ${item.color}`}>{item.access}</span>
                </div>
              ))}
            </div>
            <div className="mt-3 flex items-center gap-1 text-gold">
              <span className="text-[10px]">Voir tous les rôles</span>
              <ChevronRight className="w-3 h-3" strokeWidth={2} />
            </div>
          </div>

          {/* Card 2: Données séparées — 4 cols */}
          <div className="card-premium col-span-12 md:col-span-4 bg-cream/50 rounded-[14px] p-5">
            <div className="flex items-center gap-2 mb-1">
              <FolderOpen className="w-4 h-4 text-gold" strokeWidth={1.5} />
              <h3 className="font-serif text-base text-violet font-medium">Données séparées par client / mission</h3>
            </div>
            <p className="text-[11px] text-muted-gray mb-4">
              Chaque espace est isolé. Vos données ne croisent jamais celles d&apos;un autre client.
            </p>
            {/* Client spaces */}
            <div className="flex gap-3">
              <div className="flex-1 bg-ivory rounded-lg p-3 border border-gold/10">
                <p className="text-[10px] text-gold font-medium mb-1">CLIENT ALPHA</p>
                <div className="flex items-center gap-1.5">
                  <FolderOpen className="w-3 h-3 text-muted-gray" strokeWidth={1.5} />
                  <span className="text-[10px] text-muted-gray">Environnement dédié</span>
                </div>
                <div className="flex items-center gap-1.5 mt-1">
                  <Lock className="w-3 h-3 text-muted-gray" strokeWidth={1.5} />
                  <span className="text-[10px] text-muted-gray">Données isolées</span>
                </div>
              </div>
              <div className="flex-1 bg-ivory rounded-lg p-3 border border-gold/10">
                <p className="text-[10px] text-gold font-medium mb-1">CLIENT BÊTA</p>
                <div className="flex items-center gap-1.5">
                  <FolderOpen className="w-3 h-3 text-muted-gray" strokeWidth={1.5} />
                  <span className="text-[10px] text-muted-gray">Environnement dédié</span>
                </div>
                <div className="flex items-center gap-1.5 mt-1">
                  <Lock className="w-3 h-3 text-muted-gray" strokeWidth={1.5} />
                  <span className="text-[10px] text-muted-gray">Données isolées</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3: Documents sécurisés — 4 cols */}
          <div className="card-premium col-span-12 md:col-span-4 bg-cream/50 rounded-[14px] p-5 flex flex-col">
            <div className="flex items-center gap-2 mb-1">
              <FileKey className="w-4 h-4 text-gold" strokeWidth={1.5} />
              <h3 className="font-serif text-base text-violet font-medium">Documents sécurisés</h3>
            </div>
            <p className="text-[11px] text-muted-gray mb-4">
              Stockage chiffré, partage maîtrisé, accès révocable à tout moment.
            </p>
            {/* Document stack visual */}
            <div className="flex-1 flex items-center justify-center">
              <div className="relative">
                {/* Back document */}
                <div className="w-20 h-24 bg-ivory rounded-lg border border-lavender/20 absolute -top-1 -left-1 rotate-[-3deg]" />
                {/* Middle document */}
                <div className="w-20 h-24 bg-ivory rounded-lg border border-lavender/20 absolute top-0 left-0 rotate-[2deg]" />
                {/* Front document */}
                <div className="w-20 h-24 bg-ivory rounded-lg border border-gold/20 relative flex items-center justify-center">
                  <div className="w-8 h-8 rounded-full bg-gold/15 flex items-center justify-center">
                    <Lock className="w-4 h-4 text-gold" strokeWidth={1.5} />
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-3 flex items-center gap-1.5">
              <Lock className="w-3 h-3 text-gold" strokeWidth={1.5} />
              <span className="text-[10px] text-gold">Accès protégé</span>
            </div>
          </div>

          {/* Card 4: Logs d'activité — 4 cols */}
          <div className="card-premium col-span-12 md:col-span-4 bg-cream/50 rounded-[14px] p-5">
            <div className="flex items-center gap-2 mb-1">
              <Eye className="w-4 h-4 text-gold" strokeWidth={1.5} />
              <h3 className="font-serif text-base text-violet font-medium">Logs d&apos;activité</h3>
            </div>
            <p className="text-[11px] text-muted-gray mb-3">
              Traçabilité complète des actions et événements sensibles.
            </p>
            {/* Mini table */}
            <div className="bg-ivory rounded-lg border border-gold/10 overflow-hidden">
              <div className="grid grid-cols-4 gap-1 px-3 py-2 border-b border-gold/10">
                {['DATE', 'UTILISATEUR', 'ACTION', 'RESSOURCE'].map((h, i) => (
                  <span key={i} className="text-[8px] text-muted-gray/60 uppercase tracking-wider">{h}</span>
                ))}
              </div>
              {[
                { date: '12/06', user: '👤', action: '🔍', resource: '📄' },
                { date: '11/06', user: '👤', action: '✎', resource: '📁' },
                { date: '10/06', user: '👤', action: '⬇', resource: '📄' },
                { date: '09/06', user: '👤', action: '👁', resource: '📁' },
              ].map((row, i) => (
                <div key={i} className="grid grid-cols-4 gap-1 px-3 py-1.5 border-b border-gold/5 last:border-0">
                  <span className="text-[9px] text-muted-gray">{row.date}</span>
                  <span className="text-[9px]">{row.user}</span>
                  <span className="text-[9px]">{row.action}</span>
                  <span className="text-[9px]">{row.resource}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Card 5: Hébergement EU / RGPD — 4 cols */}
          <div className="card-premium col-span-12 md:col-span-4 bg-cream/50 rounded-[14px] p-5">
            <div className="flex items-center gap-2 mb-1">
              <Server className="w-4 h-4 text-gold" strokeWidth={1.5} />
              <h3 className="font-serif text-base text-violet font-medium">Hébergement &amp; logique RGPD</h3>
            </div>
            <p className="text-[11px] text-muted-gray mb-3">
              Données hébergées en Europe. Respect des principes de minimisation et de confidentialité.
            </p>
            {/* Compliance table */}
            <div className="space-y-2">
              {[
                { label: 'Hébergement', value: 'Europe (FR)', check: true },
                { label: 'Chiffrement', value: 'AES-256', check: true },
                { label: 'Sauvegardes', value: 'Chiffrées', check: true },
                { label: 'Conformité', value: 'RGPD', check: true },
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between py-1 border-b border-gold/8 last:border-0">
                  <span className="text-[11px] text-ink">{item.label}</span>
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] text-muted-gray">{item.value}</span>
                    {item.check && <CheckCircle2 className="w-3.5 h-3.5 text-gold" strokeWidth={1.5} />}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Card 6: Intégration — 4 cols */}
          <div className="card-premium col-span-12 md:col-span-4 bg-cream/50 rounded-[14px] p-5">
            <div className="flex items-center gap-2 mb-1">
              <Puzzle className="w-4 h-4 text-gold" strokeWidth={1.5} />
              <h3 className="font-serif text-base text-violet font-medium">Intégration aux outils existants</h3>
            </div>
            <p className="text-[11px] text-muted-gray mb-4">
              Connecteur et API pour intégrer sans friction dans votre écosystème.
            </p>
            {/* Tools list */}
            <div className="space-y-2.5">
              {[
                { icon: <MessageSquare className="w-3.5 h-3.5" strokeWidth={1.5} />, name: 'CRM' },
                { icon: <FolderOpen className="w-3.5 h-3.5" strokeWidth={1.5} />, name: 'Stockage cloud' },
                { icon: <Mail className="w-3.5 h-3.5" strokeWidth={1.5} />, name: 'Messagerie' },
                { icon: <Wrench className="w-3.5 h-3.5" strokeWidth={1.5} />, name: 'Outils métiers' },
              ].map((tool, i) => (
                <div key={i} className="flex items-center gap-2.5">
                  <div className="w-6 h-6 rounded-md bg-violet/10 flex items-center justify-center text-violet">
                    {tool.icon}
                  </div>
                  <span className="text-xs text-ink">{tool.name}</span>
                  <CheckCircle2 className="w-3 h-3 text-gold ml-auto" strokeWidth={1.5} />
                </div>
              ))}
            </div>
            <div className="mt-4 flex items-center gap-1 text-gold">
              <span className="text-[10px]">Voir les intégrations</span>
              <ChevronRight className="w-3 h-3" strokeWidth={2} />
            </div>
            {/* CTA */}
            <button className="btn-premium mt-4 w-full flex items-center justify-center gap-2 bg-violet text-ivory px-4 py-2.5 rounded-lg text-sm font-medium hover:bg-violet/90">
              Discuter avec un expert
              <ChevronRight className="w-4 h-4" strokeWidth={2} />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
