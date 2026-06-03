import { HeroSection } from "./components/HeroSection";
import { ScoreboardSection } from "./components/ScoreboardSection";
import { DataVisualizationSection } from "./components/DataVisualizationSection";
import { MethodologySection } from "./components/MethodologySection";
import { AlbumComparisonSection } from "./components/AlbumComparisonSection";
import { QuoteSection } from "./components/QuoteSection";
import { VerdictSection } from "./components/VerdictSection";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-[#0A0E1A] text-white overflow-x-hidden dark antialiased">
      <main>
        <HeroSection />
        <ScoreboardSection />
        <DataVisualizationSection />
        <MethodologySection />
        <AlbumComparisonSection />
        <QuoteSection />
        <VerdictSection />
      </main>
      <Footer />
    </div>
  );
}
