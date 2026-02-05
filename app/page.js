import { Header } from "@/components/modals/sections/Header";
import { Hero } from "@/components/modals/sections/Hero";
import { Overview } from "@/components/modals/sections/Overview";
import { HomeLazySections } from "@/components/HomeLazySections";
import { ScrollProgress } from "@/components/modals/ui/ScrollProgress";

import { StickyCTA } from "@/components/modals/ui/StickyCTA";
import { EnquiryController } from "@/components/modals/EnquiryController";

export default function Home() {
return (
    <div className="bg-bg-light min-h-screen selection:bg-accent selection:text-white font-sans">
      <ScrollProgress />
      <Header />

      <main>
      <Hero />
        <Overview />
        <HomeLazySections />
      </main>

      <EnquiryController />
      <StickyCTA />
    </div>
  );
}
