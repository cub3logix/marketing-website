import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { PainPointsSection } from "./components/PainPointsSection";
import { SolutionOverview } from "./components/SolutionOverview";
import { FeaturesSection } from "./components/FeaturesSection";
import { DemoPreview } from "./components/DemoPreview";
import { PricingSection } from "./components/PricingSection";
import { FinalCTA } from "./components/FinalCTA";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <PainPointsSection />
        <SolutionOverview />
        <FeaturesSection />
        <DemoPreview />
        <PricingSection />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}