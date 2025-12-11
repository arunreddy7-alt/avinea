"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import {
  Baby,
  Building,
  ChevronLeft,
  ChevronRight,
  Church,
  DoorOpen,
  Dumbbell,
  GraduationCap,
  Heart,
  Home as HomeIcon,
  MapPin,
  Music,
  Plane,
  Route,
  ShoppingBag,
  Sparkles,
  Stethoscope,
  Train,
  Trees,
  Trophy,
  Waves,
} from "lucide-react";

const navLinks = [
  { href: "#overview", label: "Overview" },
  { href: "#connectivity", label: "Connectivity" },
  { href: "#amenities", label: "Amenities" },
  { href: "#gallery", label: "Gallery" },
  { href: "#pricing", label: "Price Plan" },
  { href: "#location", label: "Location" },
];

const galleryImages = [
  "/gallery1.png",
  "/gallery2.png",
  "/gallery3.png",
  "/gallery4.png",
  "/gallery5.png",
  "/gallery6.png",
];

const experienceHighlights = [
  {
    title: "Curated Arrival",
    copy: "Grand double-height lobby with concierge-styled welcome and artful lighting.",
  },
  {
    title: "Wellness Wing",
    copy: "Hydrotherapy lounge, meditation decks, and aroma-garden walkways.",
  },
  {
    title: "Skyline Evenings",
    copy: "Rooftop cabanas, alfresco dining pods, and cinematic sunset views.",
  },
];

export default function Home() {
  const [galleryIndex, setGalleryIndex] = useState(0);
  const [imagesPerView, setImagesPerView] = useState(3);

  useEffect(() => {
    const updateImagesPerView = () => {
      if (window.innerWidth < 640) {
        setImagesPerView(1);
      } else if (window.innerWidth < 1024) {
        setImagesPerView(2);
      } else {
        setImagesPerView(3);
      }
    };

    updateImagesPerView();
    window.addEventListener("resize", updateImagesPerView);
    return () => window.removeEventListener("resize", updateImagesPerView);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setGalleryIndex((prev) => (prev + 1) % galleryImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setGalleryIndex((prev) =>
      prev === 0 ? galleryImages.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setGalleryIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const handleSmoothScroll = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleBrochureClick = () =>
    window.alert("Brochure download link will be shared shortly.");

  const handleCostSheetClick = () =>
    window.alert("A representative will share the detailed cost sheet.");

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#19130f] via-[#120f0c] to-[#0c0a08] text-[#f2e9dd]">
      <div className="pointer-events-none fixed inset-0 opacity-55 mix-blend-screen bg-[radial-gradient(circle_at_top,_rgba(210,179,108,0.16),_transparent_38%),radial-gradient(circle_at_30%_20%,_rgba(255,255,255,0.12),_transparent_32%),radial-gradient(circle_at_80%_15%,_rgba(184,138,45,0.16),_transparent_38%)] animate-[gradientShift_18s_ease-in-out_infinite]" />

      <header className="sticky top-0 z-30 backdrop-blur-xl bg-[#0c0a08]/70 border-b border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.35)]">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
        <Image
              src="/avinea1.png"
              alt="AVINEA"
              width={140}
              height={48}
              className="h-12 w-auto object-contain"
          priority
        />
          </div>

          <nav className="hidden items-center gap-6 text-sm font-medium text-[#e7dece]/80 lg:flex">
            {navLinks.map((link) => (
              <button
                key={link.href}
                className="transition hover:text-white"
                onClick={() => handleSmoothScroll(link.href.slice(1))}
              >
                {link.label}
              </button>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
           
            <button
              onClick={handleBrochureClick}
              className="rounded-full bg-gradient-to-r from-[#f7e4b0] via-[#d2b36c] to-[#b88a2d] px-5 py-2 text-sm font-semibold text-[#0c0a08] shadow-lg shadow-[#d2b36c]/30 transition hover:brightness-110 "
            >
              Download Brochure
            </button>
          </div>
        </div>
      </header>

      <main className="relative overflow-hidden">
        <section className="relative h-[80vh] min-h-[640px] pt-24 md:pt-32 lg:pt-36 scroll-mt-32">
          <Image
            src="/avinea.png"
            alt="Hero Image"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0c0a08] via-[#0c0a08]/75 to-[#19130f]" />
          <div className="absolute inset-0">
            <div className="absolute left-10 top-24 h-44 w-44 rounded-full bg-[#d2b36c]/25 blur-3xl animate-[gradientShift_12s_ease-in-out_infinite]" />
            <div className="absolute right-12 bottom-16 h-56 w-56 rounded-full bg-[#b88a2d]/20 blur-3xl animate-[gradientShift_14s_ease-in-out_infinite]" />
          </div>
          <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center pt-12 md:pt-16 lg:pt-20">
            <p className="mb-4 text-xs uppercase tracking-[0.4em] text-[#7a5a17]">
              Falcone Street, Pune
            </p>
            <h1 className="max-w-4xl text-4xl font-semibold leading-tight text-[#f7f1e6] sm:text-5xl lg:text-6xl">
              A private sanctuary crafted for{" "}
              <span className="text-[#d2b36c]">modern connoisseurs</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-[#e2d8c8]">
              Spacious 2, 3 & 4 BHK residences with curated amenities,
              handcrafted luxuries, and serene green pockets—minutes away from
              Pune&apos;s finest business and lifestyle hubs.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={() => handleSmoothScroll("overview")}
                className="rounded-full bg-gradient-to-r from-[#f7e4b0] via-[#d2b36c] to-[#b88a2d] px-6 py-3 text-sm font-semibold text-[#0c0a08] shadow-lg shadow-[#d2b36c]/25 transition hover:brightness-110"
              >
                Explore Now
              </button>
              <button
                onClick={handleCostSheetClick}
                className="rounded-full border border-[#d2b36c]/80 px-6 py-3 text-sm font-semibold text-[#f2e9dd] transition hover:border-[#f7e4b0] hover:bg-[#d2b36c]/20"
              >
                Request Cost Sheet
              </button>
            </div>
            <div className="mt-8 grid w-full max-w-5xl grid-cols-1 gap-4 px-4 sm:grid-cols-3">
              {[
                { label: "Residences", value: "2 / 3 / 4 BHK" },
                { label: "Amenities", value: "55+ Curated" },
                { label: "Green Lung", value: "Central Courtyards" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="lux-gradient-border lux-blur rounded-2xl bg-[#18120f] px-5 py-4 text-left shadow-[0_20px_60px_rgba(0,0,0,0.25)]"
                >
                  <p className="text-xs uppercase tracking-[0.3em] text-[#d2b36c]">
                    {item.label}
                  </p>
                  <p className="mt-1 text-xl font-semibold text-[#f7f1e6]">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="overview"
          className="relative z-10 bg-gradient-to-b from-[#0f0c0a] via-[#14100d] to-[#0f0c0a] px-6 py-16"
        >
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="relative overflow-hidden rounded-3xl border border-[#2a2118] bg-[#18120f] p-10 shadow-[0_25px_70px_rgba(0,0,0,0.3)]">
              <div className="pointer-events-none absolute -left-20 -top-16 h-72 w-72 rounded-full bg-[#d2b36c]/18 blur-3xl" />
              <div className="pointer-events-none absolute -right-24 bottom-[-60px] h-80 w-80 rounded-full bg-[#b88a2d]/14 blur-3xl" />
              <p className="text-xs uppercase tracking-[0.4em] text-[#7a5a17]">
                Signature Living
              </p>
              <h2 className="mt-2 text-3xl font-semibold text-[#f7f1e6] lg:text-4xl">
                AVINEA by Vyom Sigma
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-[#e2d8c8]">
                An exquisite residential statement in the heart of Pune, Avinea
                pairs expansive 2, 3, and 4 BHK residences with hospitality-grade
                detailing, serene greens, and intuitive amenities.
              </p>
              <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {[
                  {
                    title: "Residences",
                    detail: "2 / 3 / 4 BHK",
                  },
                  {
                    title: "Wellness",
                    detail: "3 Pools • 1 KM Trail",
                  },
                  {
                    title: "Leisure",
                    detail: "55+ curated amenities",
                  },
                  {
                    title: "Craft",
                    detail: "Premium fitouts & finishes",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-[#2a2118] bg-[#1c1612] p-4 shadow-[0_12px_30px_rgba(0,0,0,0.25)]"
                  >
                    <p className="text-xs uppercase tracking-[0.35em] text-[#d2b36c]">
                      {item.title}
                    </p>
                    <p className="mt-2 text-lg font-semibold text-[#f7f1e6]">
                      {item.detail}
                    </p>
                  </div>
                ))}
              </div>
              <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-[#2a2118] bg-[#18120f] p-4">
                  <p className="text-sm font-semibold text-[#f7f1e6]">
                    Concierge-inspired arrival
                  </p>
                  <p className="text-sm text-[#e2d8c8]">
                    Double-height lobby, artful lighting, seamless privacy.
                  </p>
                </div>
                <div className="rounded-2xl border border-[#2a2118] bg-[#18120f] p-4">
                  <p className="text-sm font-semibold text-[#f7f1e6]">
                    Elevated daily ease
                  </p>
                  <p className="text-sm text-[#e2d8c8]">
                    Smart security, curated courtyards, and efficient layouts.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="overflow-hidden rounded-3xl border border-[#2a2118] bg-[#18120f] shadow-[0_25px_70px_rgba(0,0,0,0.25)]">
                <Image
                  src="/avinea.png"
                  alt="Avinea Overview"
                  width={800}
                  height={600}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 flex items-center justify-between px-5 py-4 bg-gradient-to-t from-[#0c0a08]/85 via-[#0c0a08]/40 to-transparent">
                  <div>
                    <p className="text-xs uppercase tracking-[0.35em] text-[#d2b36c]">
                      Pune, Falcon Street
                    </p>
                    <p className="text-lg font-semibold text-[#f7f1e6]">
                      A calm address near the city’s finest
                    </p>
                  </div>
                  <button
                    onClick={() => handleSmoothScroll("pricing")}
                    className="rounded-full bg-gradient-to-r from-[#f7e4b0] via-[#d2b36c] to-[#b88a2d] px-4 py-2 text-sm font-semibold text-[#0c0a08] shadow-md transition hover:brightness-110"
                  >
                    Explore Residences
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative bg-gradient-to-b from-[#0f0c0a] via-[#14100d] to-[#0f0c0a] px-6 py-16">
          <div className="pointer-events-none absolute inset-0 opacity-40">
            <div className="absolute -left-10 top-10 h-64 w-64 rounded-full bg-[#d2b36c]/22 blur-3xl animate-[floatSoft_10s_ease-in-out_infinite]" />
            <div className="absolute -right-16 bottom-6 h-72 w-72 rounded-full bg-[#b88a2d]/20 blur-3xl animate-[floatSoft_12s_ease-in-out_infinite]" />
          </div>
          <div className="mx-auto max-w-6xl rounded-3xl border border-[#2a2118] bg-[#18120f] p-10 lux-blur shadow-[0_25px_70px_rgba(0,0,0,0.28)]">
            <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
              <div className="max-w-2xl">
                <p className="text-xs uppercase tracking-[0.4em] text-[#d2b36c]">
                  Signature Experiences
                </p>
                <h3 className="mt-3 text-3xl font-semibold text-[#f7f1e6] lg:text-4xl">
                  Crafted layers of hospitality-grade indulgence
                </h3>
                <p className="mt-4 text-lg text-[#e2d8c8]">
                  From arrival to unwinding, every touchpoint is choreographed to
                  feel bespoke—delivering the calm, privacy, and refinement of a
                  members-only retreat.
                </p>
              </div>
              <div className="grid w-full max-w-xl grid-cols-1 gap-4 sm:grid-cols-3">
                {experienceHighlights.map((item) => (
                  <div
                    key={item.title}
                    className="lux-gradient-border rounded-2xl bg-[#1c1612] px-5 py-6 text-[#f7f1e6] lux-blur shadow-[0_15px_40px_rgba(0,0,0,0.22)]"
                  >
                    <div className="lux-shimmer mb-4 h-1.5 rounded-full opacity-70" />
                    <p className="text-lg font-semibold">{item.title}</p>
                    <p className="mt-2 text-sm text-[#e2d8c8] leading-relaxed">
                      {item.copy}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          id="connectivity"
          className="bg-gradient-to-b from-[#0f0c0a] via-[#120f0c] to-[#0f0c0a] px-6 py-16 text-[#f2e9dd]"
        >
          <div className="mx-auto max-w-6xl">
            <div className="text-center">
              <p className="text-xs uppercase tracking-[0.4em] text-[#d2b36c]">
                Seamless Access
              </p>
              <h2 className="mt-2 text-3xl font-semibold text-[#f7f1e6] lg:text-4xl">
                Connectivity Highlights
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-[#e2d8c8]">
                Avinea enjoys an excellent address with effortless proximity to
                Pune&apos;s key business districts, lifestyle avenues, and
                transit hubs.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
              <div className="flex items-start gap-4 rounded-2xl border border-[#2a2118] bg-[#18120f] p-6 shadow-[0_15px_40px_rgba(0,0,0,0.22)]">
                <Train className="mt-1 h-10 w-10 text-[#d2b36c]" />
                <p className="text-lg leading-relaxed text-[#e2d8c8]">
                  Close to metro stations, bus stops, and arterial roads for
                  effortless daily commutes.
                </p>
              </div>
              <div className="flex items-start gap-4 rounded-2xl border border-[#2a2118] bg-[#18120f] p-6 shadow-[0_15px_40px_rgba(0,0,0,0.22)]">
                <Building className="mt-1 h-10 w-10 text-[#d2b36c]" />
                <p className="text-lg leading-relaxed text-[#e2d8c8]">
                  Immediate reach to corporate offices and tech parks—perfect
                  for professionals.
                </p>
              </div>
              <div className="flex items-start gap-4 rounded-2xl border border-[#2a2118] bg-[#18120f] p-6 shadow-[0_15px_40px_rgba(0,0,0,0.22)]">
                <MapPin className="mt-1 h-10 w-10 text-[#d2b36c]" />
                <p className="text-lg leading-relaxed text-[#e2d8c8]">
                  Next to Amanora Township with elite schools, malls, and
                  healthcare within minutes.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          id="amenities"
          className="bg-gradient-to-b from-[#0f0c0a] via-[#14100d] to-[#0f0c0a] px-6 py-16 text-[#f2e9dd]"
        >
          <div className="mx-auto max-w-6xl text-center">
            <p className="text-xs uppercase tracking-[0.4em] text-[#d2b36c]">
              Elevated Leisure
            </p>
            <h2 className="mt-2 text-3xl font-semibold text-[#f7f1e6] lg:text-4xl">
              Amenities
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-[#e2d8c8]">
              55+ thoughtfully curated lifestyle amenities designed to enrich
              every moment.
            </p>
          </div>

          <div className="mx-auto mt-10 grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-[#2a2118] bg-[#18120f] p-6 text-[#f7f1e6] shadow-[0_15px_40px_rgba(0,0,0,0.22)]">
              <div className="flex items-center mb-4">
                <Waves className="mr-3 h-6 w-6 text-[#d2b36c]" />
                <p className="text-lg">3 Swimming Pools</p>
              </div>
              <div className="flex items-center mb-4">
                <HomeIcon className="mr-3 h-6 w-6 text-[#d2b36c]" />
                <p className="text-lg">3 Clubhouses</p>
              </div>
              <div className="flex items-center mb-4">
                <Dumbbell className="mr-3 h-6 w-6 text-[#d2b36c]" />
                <p className="text-lg">12000 SQFT - Fitness Centre</p>
              </div>
              <div className="flex items-center">
                <Route className="mr-3 h-6 w-6 text-[#d2b36c]" />
                <p className="text-lg">1 KM - Jogging Trail</p>
              </div>
            </div>

            <div className="rounded-2xl border border-[#2a2118] bg-[#18120f] p-6 text-[#f7f1e6] shadow-[0_15px_40px_rgba(0,0,0,0.22)]">
              <div className="flex items-center mb-4">
                <Trophy className="mr-3 h-6 w-6 text-[#d2b36c]" />
                <p className="text-lg">Unmatched Sports Facilities</p>
              </div>
              <div className="flex items-center mb-4">
                <Baby className="mr-3 h-6 w-6 text-[#d2b36c]" />
                <p className="text-lg">Extensive Kid&apos;s Centric Amenities</p>
              </div>
              <div className="flex items-center mb-4">
                <Church className="mr-3 h-6 w-6 text-[#d2b36c]" />
                <p className="text-lg">Krushna Temple</p>
              </div>
              <div className="flex items-center">
                <Heart className="mr-3 h-6 w-6 text-[#d2b36c]" />
                <p className="text-lg">Pet Park</p>
              </div>
            </div>

            <div className="rounded-2xl border border-[#2a2118] bg-[#18120f] p-6 text-[#f7f1e6] shadow-[0_15px_40px_rgba(0,0,0,0.22)]">
              <div className="flex items-center mb-4">
                <DoorOpen className="mr-3 h-6 w-6 text-[#d2b36c]" />
                <p className="text-lg">3 Entrance Gates</p>
              </div>
              <div className="flex items-center mb-4">
                <Music className="mr-3 h-6 w-6 text-[#d2b36c]" />
                <p className="text-lg">Exclusive Music & Dance Training</p>
              </div>
              <div className="flex items-center">
                <Sparkles className="mr-3 h-6 w-6 text-[#d2b36c]" />
                <p className="text-lg">
                  Movie Theatre, Spa, Cafeteria & Guest Suites
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          id="layout"
          className="bg-gradient-to-b from-[#0f0c0a] via-[#120f0c] to-[#0f0c0a] px-6 py-16 text-[#f2e9dd]"
        >
          <div className="mx-auto max-w-6xl text-center">
            <p className="text-xs uppercase tracking-[0.4em] text-[#d2b36c]">
              Architecture
            </p>
            <h2 className="mt-2 text-3xl font-semibold text-[#f7f1e6] lg:text-4xl">
              Master Layout
            </h2>
          </div>
          <div className="mx-auto mt-8 max-w-6xl">
            <div className="overflow-hidden rounded-3xl border border-[#2a2118] bg-[#18120f] shadow-[0_25px_70px_rgba(0,0,0,0.25)]">
              <Image
                src="/layout.jpg"
                alt="Master Layout"
                width={1200}
                height={800}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </section>

        <section
          id="gallery"
          className="bg-gradient-to-b from-[#0f0c0a] via-[#14100d] to-[#0f0c0a] px-6 py-16 text-[#f2e9dd]"
        >
          <div className="mx-auto max-w-6xl text-center">
            <p className="text-xs uppercase tracking-[0.4em] text-[#d2b36c]">
              Visual Stories
            </p>
            <h2 className="mt-2 text-3xl font-semibold text-[#f7f1e6] lg:text-4xl">
              Gallery
            </h2>
          </div>

          <div className="relative mx-auto mt-12 max-w-6xl px-4">
            <div className="pointer-events-none absolute -left-16 top-0 h-56 w-56 rounded-full bg-[#d2b36c]/20 blur-3xl animate-[gradientShift_18s_ease-in-out_infinite]" />
            <div className="pointer-events-none absolute -right-20 bottom-[-60px] h-72 w-72 rounded-full bg-[#b88a2d]/18 blur-3xl animate-[gradientShift_20s_ease-in-out_infinite]" />

            <div className="grid grid-cols-12 gap-4">
              {galleryImages.map((image, idx) => {
                const layouts = [
                  "col-span-12 md:col-span-7 h-96",
                  "col-span-12 md:col-span-5 h-96",
                  "col-span-12 md:col-span-4 h-72",
                  "col-span-12 md:col-span-4 h-72",
                  "col-span-12 md:col-span-4 h-72",
                  "col-span-12 h-72",
                ];
                const layout = layouts[idx % layouts.length];
                const active = idx === galleryIndex;
                return (
                  <button
                    key={idx}
                    onClick={() => setGalleryIndex(idx)}
                    className={`group relative overflow-hidden rounded-3xl border transition duration-300 ${layout} ${
                      active
                        ? "border-[#d2b36c] shadow-[0_18px_50px_rgba(0,0,0,0.18)]"
                        : "border-[#2a2118] shadow-[0_12px_30px_rgba(0,0,0,0.14)] hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(0,0,0,0.2)]"
                    }`}
          >
            <Image
                      src={image}
                      alt={`Gallery ${idx + 1}`}
                      width={900}
                      height={600}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.05]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-black/0 to-black/10" />
                    <div className="absolute bottom-3 left-4 flex items-center gap-2 rounded-full bg-[#0c0a08]/70 px-3 py-1 text-xs font-semibold text-[#f7f1e6] shadow">
                      <span className="h-2 w-2 rounded-full bg-[#d2b36c]" />
                      Frame {idx + 1}
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="mt-8 flex items-center justify-center gap-4">
              <button
                onClick={prevSlide}
                className="rounded-full border border-[#2a2118] bg-[#18120f] px-4 py-2 text-sm font-semibold text-[#f7f1e6] shadow-sm transition hover:border-[#d2b36c] hover:shadow-md"
              >
                Previous
              </button>
              <button
                onClick={nextSlide}
                className="rounded-full bg-gradient-to-r from-[#f7e4b0] via-[#d2b36c] to-[#b88a2d] px-5 py-2 text-sm font-semibold text-[#0c0a08] shadow-md transition hover:brightness-110"
              >
                Next Frame
              </button>
            </div>
          </div>
        </section>

        <section
          id="pricing"
          className="bg-gradient-to-b from-[#0f0c0a] via-[#120f0c] to-[#0f0c0a] px-6 py-16 text-[#f2e9dd]"
        >
          <div className="mx-auto max-w-6xl text-center">
            <p className="text-xs uppercase tracking-[0.4em] text-[#d2b36c]">
              Investment
            </p>
            <h2 className="mt-2 text-3xl font-semibold text-[#f7f1e6] lg:text-4xl">
              Price Plan
            </h2>
          </div>

          <div className="mx-auto mt-10 grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-3">
            {["2 BHK", "3 BHK", "4 BHK"].map((config, idx) => (
              <div
                key={config}
                className="flex h-full flex-col justify-between rounded-3xl border border-[#2a2118] bg-[#18120f] px-6 py-6 shadow-[0_20px_50px_rgba(0,0,0,0.22)]"
              >
                <div className="flex items-center justify-between">
                  <p className="text-xl font-semibold text-[#f7f1e6]">
                    {config}
                  </p>
                  <span className="rounded-full bg-[#3a2c1f] px-3 py-1 text-xs font-semibold text-[#d2b36c]">
                    Signature Wing
                  </span>
                </div>
                <div className="mt-4 space-y-3 text-sm text-[#e2d8c8]">
                  <p>Built-up: On Request</p>
                  <p>Possession: TBA</p>
                  <p>View: Courtyard / City</p>
                </div>
                <div className="mt-5 flex flex-col gap-3">
                  <button
                    onClick={handleCostSheetClick}
                    className="rounded-full bg-gradient-to-r from-[#f7e4b0] via-[#d2b36c] to-[#b88a2d] px-4 py-3 text-sm font-semibold text-[#0c0a08] shadow-md transition hover:brightness-110"
                  >
                    Request Cost Sheet
                  </button>
                  <button
                    onClick={handleBrochureClick}
                    className="rounded-full border border-[#2a2118] px-4 py-3 text-sm font-semibold text-[#f7f1e6] transition hover:border-[#d2b36c] hover:bg-[#1c1612]"
                  >
                    Download Brochure
                  </button>
                </div>
                <div className="mt-4 flex items-center gap-2 text-xs text-[#d2b36c]">
                  <span className="h-2 w-2 rounded-full bg-[#d2b36c]" />
                  Limited inventory • Priority visits available
                </div>
              </div>
            ))}
          </div>
        </section>

        <section
          id="location"
          className="bg-gradient-to-b from-[#0f0c0a] via-[#14100d] to-[#0f0c0a] px-6 py-16 text-[#f2e9dd]"
        >
          <div className="mx-auto flex max-w-6xl flex-col gap-10 lg:flex-row">
            <div className="flex-1">
              <p className="text-xs uppercase tracking-[0.4em] text-[#d2b36c]">
                Neighborhood
              </p>
              <h2 className="mt-2 text-3xl font-semibold text-[#f7f1e6] lg:text-4xl">
                Location Highlights
              </h2>
              <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
                {[
                  {
                    icon: <GraduationCap className="h-6 w-6 text-[#d2b36c]" />,
                    label: "Wisdom World School - ",
                    value: "1 Min",
                  },
                  {
                    icon: <GraduationCap className="h-6 w-6 text-[#d2b36c]" />,
                    label: "Amanora School - ",
                    value: "4 Min",
                  },
                  {
                    icon: <MapPin className="h-6 w-6 text-[#d2b36c]" />,
                    label: "Falcon Street - ",
                    value: "0 Min",
                  },
                  {
                    icon: <ShoppingBag className="h-6 w-6 text-[#d2b36c]" />,
                    label: "Seasons Mall - ",
                    value: "5 Min",
                  },
                  {
                    icon: <Building className="h-6 w-6 text-[#d2b36c]" />,
                    label: "Magarpatta IT Park - ",
                    value: "5 Min",
                  },
                  {
                    icon: <Trees className="h-6 w-6 text-[#d2b36c]" />,
                    label: "Koregaon Park - ",
                    value: "16 Min",
                  },
                  {
                    icon: <Building className="h-6 w-6 text-[#d2b36c]" />,
                    label: "Hinjewadi IT Park - ",
                    value: "15 Min",
                  },
                  {
                    icon: <Train className="h-6 w-6 text-[#d2b36c]" />,
                    label: "Hadapsar Railway Station - ",
                    value: "7 Min",
                  },
                  {
                    icon: <Plane className="h-6 w-6 text-[#d2b36c]" />,
                    label: "Pune International Airport - ",
                    value: "35 Min",
                  },
                  {
                    icon: <Stethoscope className="h-6 w-6 text-[#d2b36c]" />,
                    label: "Umang Hospital - ",
                    value: "1 Min",
                  },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    {item.icon}
                    <p className="text-lg leading-relaxed text-[#e2d8c8]">
                      {item.label}
                      <span className="font-bold text-[#f7f1e6]">
                        {item.value}
                      </span>
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex-1">
              <div className="overflow-hidden rounded-3xl border border-[#2a2118] bg-[#18120f] shadow-[0_25px_70px_rgba(0,0,0,0.25)]">
                <Image
                  src="/gallery7.png"
                  alt="Location Map"
                  width={800}
                  height={600}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section
          id="developer"
          className="bg-gradient-to-b from-[#0f0c0a] via-[#120f0c] to-[#0f0c0a] px-6 py-16 text-[#f2e9dd]"
        >
          <div className="mx-auto max-w-5xl text-center">
            <p className="text-xs uppercase tracking-[0.4em] text-[#d2b36c]">
              Legacy
            </p>
            <h2 className="mt-2 text-3xl font-semibold text-[#f7f1e6] lg:text-4xl">
              About the Developer
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-[#e2d8c8]">
              Vyom Sigma Developers is a trusted name in Pune&apos;s real estate
              landscape, celebrated for quality, innovation, and customer
              delight. With a portfolio of distinguished projects, they merge
              luxury, functionality, and sustainability to create homes that
              feel timeless.
            </p>
          </div>
        </section>

        <section className="bg-[#0c0a08] px-6 py-12 text-[#f2e9dd]">
          <div className="mx-auto flex max-w-6xl flex-col gap-4 rounded-3xl border border-[#2a2118] bg-[#18120f] p-8 shadow-[0_20px_50px_rgba(0,0,0,0.3)] md:flex-row md:items-center md:justify-between">
            <div className="space-y-2 max-w-2xl">
              <p className="text-xs uppercase tracking-[0.35em] text-[#d2b36c]">
                Schedule your private tour
              </p>
              <p className="text-2xl font-semibold text-[#f7f1e6]">
                Experience the AVINEA show residence and lifestyle walkthrough.
              </p>
              <p className="text-sm text-[#cbbfae]">
                Personalized visits, concierge assistance, and curated amenity
                previews tailored to your preferences.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => handleSmoothScroll("pricing")}
                className="rounded-full bg-gradient-to-r from-[#f7e4b0] via-[#d2b36c] to-[#b88a2d] px-5 py-3 text-sm font-semibold text-[#0c0a08] shadow-lg shadow-[#d2b36c]/30 transition hover:brightness-110"
              >
                Book a Visit
              </button>
              <button
                onClick={handleBrochureClick}
                className="rounded-full border border-[#2a2118] bg-[#0c0a08] px-5 py-3 text-sm font-semibold text-[#f2e9dd] transition hover:border-[#d2b36c] hover:bg-[#18120f]"
              >
                Download Brochure
              </button>
            </div>
          </div>
        </section>

        <footer className="bg-[#0c0a08] border-t border-[#2a2118] text-[#f2e9dd]">
          <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 pb-10 pt-10">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Image
                    src="/avinea1.png"
                    alt="AVINEA"
                    width={160}
                    height={52}
                    className="h-12 w-auto object-contain"
                  />
                </div>
                <p className="text-sm text-[#cbbfae] leading-relaxed">
                  AVINEA by Vyom Sigma — curated residences, elevated leisure, and
                  hospitality-inspired touches in Falcon Street, Pune.
                </p>
                <p className="text-xs text-[#9f8f7b]">
                  © {new Date().getFullYear()} Vyom Sigma. All rights reserved.
                </p>
              </div>

              <div className="space-y-3">
                <p className="text-xs uppercase tracking-[0.3em] text-[#d2b36c]">
                  Explore
                </p>
                <div className="flex flex-col gap-2 text-sm text-[#e2d8c8]">
                  {[
                    { label: "Overview", href: "#overview" },
                    { label: "Amenities", href: "#amenities" },
                    { label: "Gallery", href: "#gallery" },
                    { label: "Price Plan", href: "#pricing" },
                  ].map((item) => (
                    <button
                      key={item.href}
                      onClick={() => handleSmoothScroll(item.href.slice(1))}
                      className="text-left transition hover:text-[#f7e4b0]"
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <p className="text-xs uppercase tracking-[0.3em] text-[#d2b36c]">
                  Visit
                </p>
                <div className="flex flex-col gap-2 text-sm text-[#e2d8c8]">
                  <span>Falcon Street, Pune</span>
                  <span>Near Amanora Township</span>
                  <button
                    onClick={() => handleSmoothScroll("location")}
                    className="text-left text-[#f7e4b0] underline underline-offset-4 transition hover:text-[#d2b36c]"
                  >
                    View Map
                  </button>
                </div>
              </div>

              <div className="space-y-3">
                <p className="text-xs uppercase tracking-[0.3em] text-[#d2b36c]">
                  Connect
                </p>
                <div className="flex flex-col gap-2 text-sm text-[#e2d8c8]">
                  <button
                    onClick={handleCostSheetClick}
                    className="text-left transition hover:text-[#f7e4b0]"
                  >
                    Request Cost Sheet
                  </button>
                  <button
                    onClick={handleBrochureClick}
                    className="text-left transition hover:text-[#f7e4b0]"
                  >
                    Download Brochure
                  </button>
                  <span className="text-xs text-[#9f8f7b]">
                    Timings: 10 AM – 7 PM
                  </span>
                </div>
              </div>
            </div>
        </div>
        </footer>
      </main>
    </div>
  );
}
