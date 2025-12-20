"use client";

import { useState } from "react";
import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { Overview } from "@/components/sections/Overview";
import { Amenities } from "@/components/sections/Amenities";
import { Clubhouse } from "@/components/sections/Clubhouse";
import { Specifications } from "@/components/sections/Specifications";
import { FloorPlans } from "@/components/sections/FloorPlans";
import { Gallery } from "@/components/sections/Gallery";
import { Location } from "@/components/sections/Location";
import { VideoHighlight } from "@/components/sections/VideoHighlight";
import { ClientVoices } from "@/components/sections/ClientVoices";
import { AboutLegacy } from "@/components/sections/AboutLegacy";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Footer } from "@/components/sections/Footer";
import { EnquiryModal } from "@/components/modals/EnquiryModal";
import { SuccessModal } from "@/components/modals/SuccessModal";
import { StickyCTA } from "@/components/ui/StickyCTA";

export default function Home() {
  const [showEnquiry, setShowEnquiry] = useState(false);
  const [showBookVisit, setShowBookVisit] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [pendingDownload, setPendingDownload] = useState(null);

  // Handle auto-download when enquiry is submitted
  const handleEnquirySubmit = () => {
    // Show success modal instead of alert
    setShowSuccess(true);

    if (pendingDownload === 'brochure') {
      const link = document.createElement('a');
      link.href = '/brochure.pdf';
      link.download = 'Avinea_Brochure.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
    // Logic for other downloads can be added here

    setShowEnquiry(false);
    setShowBookVisit(false);
    setPendingDownload(null);
  };

  const handleSmoothScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="bg-bg-light min-h-screen selection:bg-accent selection:text-white font-sans">
      <Header onOpenEnquiry={() => setShowEnquiry(true)} />

      <main>
        <Hero onOpenEnquiry={() => setShowBookVisit(true)} />
        <Overview />
        <Amenities />
        <Specifications />

        <Location />
        <VideoHighlight />
        <Clubhouse />

        <FloorPlans
          onOpenEnquiry={() => setShowEnquiry(true)}
          setPendingDownload={setPendingDownload}
        />
        <Gallery />
        <ClientVoices />
        <AboutLegacy />
        <FinalCTA
          onBookVisit={() => setShowBookVisit(true)}
          onRequestDetails={() => {
            setPendingDownload('costsheet');
            setShowEnquiry(true);
          }}
        />
        <Footer onScrollTo={handleSmoothScroll} />
      </main>

      <EnquiryModal
        isOpen={showEnquiry}
        onClose={() => setShowEnquiry(false)}
        mode="enquiry"
        onSubmit={handleEnquirySubmit}
      />

      <EnquiryModal
        isOpen={showBookVisit}
        onClose={() => setShowBookVisit(false)}
        mode="visit"
        onSubmit={handleEnquirySubmit}
      />

      <SuccessModal
        isOpen={showSuccess}
        onClose={() => setShowSuccess(false)}
      />

      <StickyCTA onOpen={() => setShowBookVisit(true)} />
    </div>
  );
}
