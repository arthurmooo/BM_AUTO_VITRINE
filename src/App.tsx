import Navigation from './sections/Navigation';
import HeroSection from './sections/HeroSection';
import CostSection from './sections/CostSection';
import BeforeAfterSection from './sections/BeforeAfterSection';
import UseCasesSection from './sections/UseCasesSection';
import CaseStudySection from './sections/CaseStudySection';
import MethodSection from './sections/MethodSection';
import TrustSection from './sections/TrustSection';
import CTASection from './sections/CTASection';
import FooterSection from './sections/FooterSection';
import SectionTransition from './sections/SectionTransition';

export default function App() {
  return (
    <div className="relative">
      {/* Grain overlay */}
      <div className="grain-overlay" />

      {/* Navigation */}
      <Navigation />

      {/* Main content */}
      <main className="relative">
        {/* Section 1: Hero */}
        <div id="hero">
          <HeroSection />
        </div>

        {/* Section 2: Cost */}
        <div id="cost">
          <CostSection />
        </div>

        {/* Section 3: Before/After Transformation */}
        <div id="transformation">
          <BeforeAfterSection />
        </div>

        {/* Section 4: Use Cases (Bento) */}
        <div id="usecases">
          <UseCasesSection />
        </div>

        {/* Transition 1: ivory → violet (Cas concret) */}
        {/* Pas de label — "Cas concret" est déjà dans la section violette */}
        <SectionTransition variant="enter-violet" />

        {/* Section 5: M&A Case Study */}
        <div id="casestudy">
          <CaseStudySection />
        </div>

        {/* Transition 2: violet → ivory (Méthode) */}
        {/* Sortie douce du violet, pas de label redondant */}
        <SectionTransition variant="exit-violet" />

        {/* Section 6: Method */}
        <div id="method">
          <MethodSection />
        </div>

        {/* Section 7: Trust / Security */}
        <div id="security">
          <TrustSection />
        </div>

        {/* Transition 3: ivory → violet (CTA final) */}
        {/* Entrée directe et impactante, pas de label redondant */}
        <SectionTransition variant="enter-violet" />

        {/* Section 8: Final CTA */}
        <div id="contact">
          <CTASection />
        </div>

        {/* Section 9: Footer */}
        <FooterSection />
      </main>
    </div>
  );
}
