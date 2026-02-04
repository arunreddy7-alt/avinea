import { Header } from "@/components/modals/sections/Header";
import { Hero } from "@/components/modals/sections/Hero";
import { Overview } from "@/components/modals/sections/Overview";
import { Amenities } from "@/components/modals/sections/Amenities";
import { Clubhouse } from "@/components/modals/sections/Clubhouse";
import { Specifications } from "@/components/modals/sections/Specifications";
import { FloorPlans } from "@/components/modals/sections/FloorPlans";
import { Gallery } from "@/components/modals/sections/Gallery";
import { VideoHighlight } from "@/components/modals/sections/VideoHighlight";
import { Location } from "@/components/modals/sections/Location";
import { ClientVoices } from "@/components/modals/sections/ClientVoices";
import { FinalCTA } from "@/components/modals/sections/FinalCTA";
import { Footer } from "@/components/modals/sections/Footer";
import { FAQ } from "@/components/modals/sections/FAQ";
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
        <Amenities />
        <Specifications />
        <VideoHighlight />
        <Location />
        
        <Clubhouse />

        <FloorPlans />
        <ClientVoices />
        <FinalCTA />
        <Gallery />
        
        <FAQ />
        <Footer />
      </main>

      <EnquiryController />
      <StickyCTA />
    </div>
  );
}
