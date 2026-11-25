import { HeroSection } from './components/HeroSection';
import { ProblemSection } from './components/ProblemSection';
import { IntroducingSection } from './components/IntroducingSection';
import { FrameworkSection } from './components/FrameworkSection';
import { WhatYouGetSection } from './components/WhatYouGetSection';
import { SessionInclusionsSection } from './components/SessionInclusionsSection';
import { CoachesSection } from './components/CoachesSection';
import { TicketSection } from './components/TicketSection';
import { FaqSection } from './components/FaqSection';
import { SupportSection } from './components/SupportSection';
import { MobileStickyCta } from './components/MobileStickyCta';
import { ApplicationToastPopup } from './components/ApplicationToastPopup';

export default function App() {
  return (
    <div className="min-h-screen overflow-x-clip bg-[#FEF2EB] text-[#252525]">
      <main className="pb-20 md:pb-0">
        <HeroSection />
        <ProblemSection />
        <IntroducingSection />
        <FrameworkSection />
        <WhatYouGetSection />
        <SessionInclusionsSection />
        <CoachesSection />
        <TicketSection />
        <FaqSection />
        <SupportSection />
      </main>
      <ApplicationToastPopup />
      <MobileStickyCta />
    </div>
  );
}
