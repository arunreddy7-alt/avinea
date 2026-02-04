"use client";

import { useEffect, useState } from "react";
import { initializeTracking } from "@/lib/trackingUtils";
import { EnquiryModal } from "@/components/modals/EnquiryModal";
import { SuccessModal } from "@/components/modals/SuccessModal";

const BROCHURE_URL = "/AVINEA by Vyom-Sigma (6).pdf";

export function EnquiryController() {
  const [showEnquiry, setShowEnquiry] = useState(false);
  const [showBookVisit, setShowBookVisit] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [pendingDownload, setPendingDownload] = useState(null);
  const [pendingVideoUrl, setPendingVideoUrl] = useState(null);
  const [hasAutoPopupShown, setHasAutoPopupShown] = useState(false);

  useEffect(() => {
    initializeTracking();
  }, []);

  useEffect(() => {
    const anyModalOpen = showEnquiry || showBookVisit || showSuccess;
    document.body.style.overflow = anyModalOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [showEnquiry, showBookVisit, showSuccess]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!hasAutoPopupShown) {
        setShowBookVisit(true);
        setHasAutoPopupShown(true);
      }
    }, 11000);

    return () => clearTimeout(timer);
  }, [hasAutoPopupShown]);

  useEffect(() => {
    const handler = (event) => {
      const target = event.target.closest("[data-enquiry-action]");
      if (!target) return;

      const action = target.dataset.enquiryAction;
      const download = target.dataset.enquiryDownload;
      const videoUrl = target.dataset.enquiryVideoUrl;

      if (download) {
        setPendingDownload(download);
      }
      if (videoUrl) {
        setPendingVideoUrl(videoUrl);
      }

      if (action === "visit") {
        setShowBookVisit(true);
      } else if (action === "enquiry") {
        setShowEnquiry(true);
      } else if (action === "video") {
        setShowBookVisit(true);
      }
    };

    document.addEventListener("click", handler, true);
    return () => document.removeEventListener("click", handler, true);
  }, []);

  const handleEnquirySubmit = () => {
    setShowSuccess(true);

    if (pendingDownload === "brochure") {
      const link = document.createElement("a");
      link.href = BROCHURE_URL;
      link.download = "Avinea_Brochure.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }

    if (pendingVideoUrl) {
      window.open(pendingVideoUrl, "_blank");
    }

    setShowEnquiry(false);
    setShowBookVisit(false);
    setPendingDownload(null);
    setPendingVideoUrl(null);
  };

  return (
    <>
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
    </>
  );
}
