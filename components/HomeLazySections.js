"use client";

import dynamic from "next/dynamic";

const Amenities = dynamic(
  () => import("@/components/modals/sections/Amenities").then((m) => m.Amenities),
  { ssr: false }
);
const Specifications = dynamic(
  () => import("@/components/modals/sections/Specifications").then((m) => m.Specifications),
  { ssr: false }
);
const VideoHighlight = dynamic(
  () => import("@/components/modals/sections/VideoHighlight").then((m) => m.VideoHighlight),
  { ssr: false }
);
const Location = dynamic(
  () => import("@/components/modals/sections/Location").then((m) => m.Location),
  { ssr: false }
);
const Clubhouse = dynamic(
  () => import("@/components/modals/sections/Clubhouse").then((m) => m.Clubhouse),
  { ssr: false }
);
const FloorPlans = dynamic(
  () => import("@/components/modals/sections/FloorPlans").then((m) => m.FloorPlans),
  { ssr: false }
);
const ClientVoices = dynamic(
  () => import("@/components/modals/sections/ClientVoices").then((m) => m.ClientVoices),
  { ssr: false }
);
const FinalCTA = dynamic(
  () => import("@/components/modals/sections/FinalCTA").then((m) => m.FinalCTA),
  { ssr: false }
);
const Gallery = dynamic(
  () => import("@/components/modals/sections/Gallery").then((m) => m.Gallery),
  { ssr: false }
);
const FAQ = dynamic(
  () => import("@/components/modals/sections/FAQ").then((m) => m.FAQ),
  { ssr: false }
);
const Footer = dynamic(
  () => import("@/components/modals/sections/Footer").then((m) => m.Footer),
  { ssr: false }
);

export function HomeLazySections() {
  return (
    <>
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
    </>
  );
}
