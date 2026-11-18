import { HeroSection } from './components/HeroSection';
import { ProblemSection } from './components/ProblemSection';
import { IntroducingSection } from './components/IntroducingSection';
import { FrameworkSection } from './components/FrameworkSection';
import { CoachesSection } from './components/CoachesSection';
import { TicketSection } from './components/TicketSection';
import { MobileStickyCta } from './components/MobileStickyCta';

export default function App() {
  return (
    <div className="min-h-screen bg-[#FEF2EB] text-[#252525]">
      <main className="pb-20 md:pb-0">
        <HeroSection />
        <ProblemSection />
        <IntroducingSection />
        <FrameworkSection />
        <CoachesSection />
        <TicketSection />
      </main>
      <MobileStickyCta />
    </div>
  );
}
