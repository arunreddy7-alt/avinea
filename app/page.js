"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import {
  Baby,
  Building,
  Church,
  DoorOpen,
  Droplets,
  Dumbbell,
  GraduationCap,
  Heart,
  Home as HomeIcon,
  Utensils,
  Leaf,
  MapPin,
  Music,
  Plane,
  Route,
  Shield,
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
  { href: "#amenities", label: "Amenities" },
  { href: "#specifications", label: "Specifications" },
  
  { href: "#gallery", label: "Gallery" },
  { href: "#floor-plans", label: "Floor Plans" },
 
];

const galleryImages = [
  "/gallery1.png",
  "/gallery2.png",
  "/gallery3.png",
  "/gallery4.png",
  "/gallery5.png",
  "/gallery6.png",
];

const clubhouseImages = [
  { src: "/pool.jpg", label: "Swimming Pools" },
  { src: "/spa.jpg", label: "Spa & Salon" },
  { src: "/gym.jpg", label: "Gym" },
  { src: "/hall.jpg", label: "Banquet Hall" },
  { src: "/indoor.jpg", label: "Indoor Games" },
  { src: "/guest.jpg", label: "Guest Room" },
  { src: "/dog park.jpg", label: "Dog Park" },
  { src: "/working space.jpg", label: "Co-working Space" },
];

export default function Home() {

  const [galleryIndex, setGalleryIndex] = useState(0);
  const [imagesPerView, setImagesPerView] = useState(3);
  const [showEnquiry, setShowEnquiry] = useState(false);
  const [showBookVisit, setShowBookVisit] = useState(false);
  const [pendingDownload, setPendingDownload] = useState(null);

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

  const downloadFile = (path, filename) => {
    const link = document.createElement("a");
    link.href = path;
    link.download = filename;
    link.target = "_blank";
    link.rel = "noopener";
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  const handleBrochureClick = () => {
    setPendingDownload("brochure");
    setShowEnquiry(true);
  };

  const handleCostSheetClick = () => {
    setPendingDownload("costsheet");
    setShowEnquiry(true);
  };


  const handleEnquireOpen = () => {
    setPendingDownload(null);
    setShowEnquiry(true);
  };
  const handleEnquireClose = () => {
    setShowEnquiry(false);
    setPendingDownload(null);
  };

  const handleBookVisitOpen = () => {
    setShowBookVisit(true);
  };
  const handleBookVisitClose = () => {
    setShowBookVisit(false);
  };


  const handleEnquirySubmit = (e) => {
    e.preventDefault();
    if (pendingDownload === "brochure") {
      downloadFile(
        "/AVINEA%20by%20Vyom-Sigma%20(6).pdf",
        "AVINEA-Brochure.pdf"
      );
    }
    if (pendingDownload === "costsheet") {
      downloadFile(
        "/AVINEA%20-%20General%20Cost%20Sheet%20(2).pdf",
        "AVINEA-Cost-Sheet.pdf"
      );
    }
    setShowEnquiry(false);
    setPendingDownload(null);
  };

  const handleBookVisitSubmit = (e) => {
    e.preventDefault();
    // Here you can add logic to handle the booking visit form submission
    // For now, we'll just close the modal
    setShowBookVisit(false);
    alert("Thank you! We'll contact you shortly to confirm your visit.");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#19130f] via-[#120f0c] to-[#0c0a08] text-[#f2e9dd]">
      <div className="pointer-events-none fixed inset-0 opacity-55 mix-blend-screen bg-[radial-gradient(circle_at_top,_rgba(210,179,108,0.16),_transparent_38%),radial-gradient(circle_at_30%_20%,_rgba(255,255,255,0.12),_transparent_32%),radial-gradient(circle_at_80%_15%,_rgba(184,138,45,0.16),_transparent_38%)] animate-[gradientShift_18s_ease-in-out_infinite]" />

      <header className="sticky top-0 z-30 backdrop-blur-xl bg-[#0c0a08]/70 border-b border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.35)]">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
        <Image
          src="/avinea-logo.png"
              alt="AVINEA"
          width={160}
          height={52}
              className="h-12 w-auto object-contain"
          priority
        />
          </div>

          <nav className="hidden items-center gap-6 text-sm font-medium text-[#e7dece]/80 lg:flex">
            {navLinks.map((link) => (
              <button
                key={link.href}
                className="transition hover:text-white"
                onClick={() =>
                  link.href === "#enquire"
                    ? handleEnquireOpen()
                    : handleSmoothScroll(link.href.slice(1))
                }
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
          className="relative z-10 overflow-hidden bg-gradient-to-b from-[#0f0c0a] via-[#14100d] to-[#0f0c0a] px-6 py-18 md:py-20"
        >
          <div className="pointer-events-none absolute inset-0 opacity-45">
            <div className="absolute -left-24 top-6 h-72 w-72 rounded-full bg-[#d2b36c]/18 blur-3xl" />
            <div className="absolute right-[-60px] bottom-10 h-80 w-80 rounded-full bg-[#b88a2d]/16 blur-3xl" />
          </div>

          <div className="relative mx-auto flex max-w-6xl flex-col gap-10">
            <div className="flex flex-col gap-4 text-left">
              <p className="text-xs uppercase tracking-[0.4em] text-[#d2b36c]">
                Project Snapshot
              </p>
              <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
                <div>
                  <h2 className="text-3xl font-semibold text-[#f7f1e6] sm:text-4xl lg:text-5xl">
                AVINEA by Vyom Sigma
              </h2>
                  <p className="mt-3 max-w-3xl text-lg leading-relaxed text-[#e2d8c8]">
                    A private sanctuary in Falcon Street, Pune with expansive 2, 3
                    & 4 BHK residences, hospitality-grade finishes, and lush
                    courtyard living.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {["Limited Inventory", "Priority Visits", "RERA Registered"].map(
                    (tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-[#2a2118] bg-[#1c1612] px-3 py-1 text-xs font-semibold text-[#d2b36c] shadow-[0_10px_24px_rgba(0,0,0,0.2)]"
                      >
                        {tag}
                      </span>
                    )
                  )}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="space-y-6">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                  {[
                    { title: "Configuration", detail: "2 / 3 / 4 BHK" },
                    { title: "Lifestyle", detail: "40+ Amenities" },
                    { title: "Wellness", detail: "3 Pools • 1 KM Trail" },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="rounded-2xl border border-[#2a2118] bg-[#18120f] p-5 shadow-[0_18px_50px_rgba(0,0,0,0.22)]"
                    >
                      <p className="text-xs uppercase tracking-[0.35em] text-[#d2b36c]">
                        {item.title}
                      </p>
                      <p className="mt-2 text-xl font-semibold text-[#f7f1e6]">
                        {item.detail}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {[
                    {
                      title: "Arrival & Security",
                      copy: "Concierge-inspired double-height lobby, smart access, and discreet surveillance.",
                      icon: <Sparkles className="h-5 w-5 text-[#d2b36c]" />,
                    },
                    {
                      title: "Daily Ease",
                      copy: "Curated courtyards, efficient layouts, and hospitality-led maintenance.",
                      icon: <Heart className="h-5 w-5 text-[#d2b36c]" />,
                    },
                    {
                      title: "Connectivity",
                      copy: "Falcon Street address—near IT parks, elite schools, malls, and healthcare.",
                      icon: <MapPin className="h-5 w-5 text-[#d2b36c]" />,
                    },
                    {
                      title: "Community",
                      copy: "Zoned leisure decks, quiet pockets, and social lounges across the clubhouse.",
                      icon: <Building className="h-5 w-5 text-[#d2b36c]" />,
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                      className="flex gap-4 rounded-2xl border border-[#2a2118] bg-[#1c1612] p-5 shadow-[0_14px_40px_rgba(0,0,0,0.2)]"
                    >
                      <div className="mt-1 h-10 w-10 rounded-full bg-[#2a2118]/60 p-2.5">
                        {item.icon}
                  </div>
                      <div>
                  <p className="text-sm font-semibold text-[#f7f1e6]">
                          {item.title}
                  </p>
                        <p className="mt-2 text-sm leading-relaxed text-[#e2d8c8]">
                          {item.copy}
                  </p>
                </div>
                </div>
                  ))}
            </div>

                <div className="flex flex-wrap gap-3">
                  <button
                    onClick={() => handleSmoothScroll("floor-plans")}
                    className="rounded-full bg-gradient-to-r from-[#f7e4b0] via-[#d2b36c] to-[#b88a2d] px-6 py-3 text-sm font-semibold text-[#0c0a08] shadow-lg shadow-[#d2b36c]/30 transition hover:brightness-110"
                  >
                    View Floor Plans
                  </button>
                  <button
                    onClick={() => handleSmoothScroll("amenities")}
                    className="rounded-full border border-[#2a2118] px-6 py-3 text-sm font-semibold text-[#f7f1e6] transition hover:border-[#d2b36c] hover:bg-[#1c1612]"
                  >
                    Explore Amenities
                  </button>
                </div>
              </div>

              <div className="relative overflow-hidden rounded-3xl border border-[#2a2118] bg-[#18120f] shadow-[0_25px_70px_rgba(0,0,0,0.28)]">
                <Image
                  src="/overview.png"
                  alt="AVINEA Residences"
                  width={840}
                  height={640}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0c0a08]/85 via-[#0c0a08]/35 to-transparent p-6">
                  <p className="text-xs uppercase tracking-[0.35em] text-[#d2b36c]">
                    Falcon Street, Pune
                  </p>
                  <div className="mt-2 flex flex-wrap items-center gap-3 text-sm text-[#e2d8c8]">
                    <span className="rounded-full bg-[#2a2118] px-3 py-1 text-xs font-semibold text-[#f7f1e6]">
                      Signature Wing
                    </span>
                    <span>Central courtyards • City-facing views</span>
              </div>
                  <div className="mt-4 grid grid-cols-3 gap-3 text-sm text-[#f7f1e6] sm:text-base">
                    {[
                      { label: "Possession", value: "On Request" },
                      { label: "Towers", value: "Signature Cluster" },
                      { label: "Contact", value: "Priority Visits" },
                    ].map((item) => (
                      <div
                        key={item.label}
                        className="rounded-2xl border border-[#2a2118] bg-[#0f0b09]/70 px-3 py-3 text-center"
                      >
                        <p className="text-[11px] uppercase tracking-[0.25em] text-[#d2b36c]">
                          {item.label}
                        </p>
                        <p className="mt-1 text-sm font-semibold text-[#f7f1e6]">
                          {item.value}
                    </p>
                  </div>
                ))}
              </div>

                  <div className="mt-4 flex flex-wrap gap-3">
                    <button
                      onClick={handleBookVisitOpen}
                      className="rounded-full border border-[#d2b36c] bg-[#f7e4b0] px-5 py-2 text-sm font-semibold text-[#0c0a08] shadow transition hover:brightness-110"
                    >
                      Book a Visit
                    </button>
                    <button
                      onClick={() => handleBrochureClick()}
                      className="rounded-full border border-[#2a2118] px-5 py-2 text-sm font-semibold text-[#f7f1e6] transition hover:border-[#d2b36c] hover:bg-[#1c1612]"
                    >
                      Download Brochure
                    </button>
            </div>
              </div>
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
              Clubhouse amenities and lifestyle experiences designed to enrich
              every moment.
            </p>
          </div>

          <div className="mx-auto mt-10 grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-[#2a2118] bg-[#18120f] p-6 text-[#f7f1e6] shadow-[0_15px_40px_rgba(0,0,0,0.22)]">
              <div className="mb-4 flex items-center">
                <Waves className="mr-3 h-6 w-6 text-[#d2b36c]" />
                <p className="text-lg">3 Swimming Pools</p>
              </div>
              <div className="mb-4 flex items-center">
                <HomeIcon className="mr-3 h-6 w-6 text-[#d2b36c]" />
                <p className="text-lg">3 Clubhouses</p>
              </div>
              <div className="mb-4 flex items-center">
                <Dumbbell className="mr-3 h-6 w-6 text-[#d2b36c]" />
                <p className="text-lg">12000 SQFT - Fitness Centre</p>
              </div>
              <div className="flex items-center">
                <Route className="mr-3 h-6 w-6 text-[#d2b36c]" />
                <p className="text-lg">1 KM - Jogging Trail</p>
              </div>
            </div>

            <div className="rounded-2xl border border-[#2a2118] bg-[#18120f] p-6 text-[#f7f1e6] shadow-[0_15px_40px_rgba(0,0,0,0.22)]">
              <div className="mb-4 flex items-center">
                <Trophy className="mr-3 h-6 w-6 text-[#d2b36c]" />
                <p className="text-lg">Unmatched Sports Facilities</p>
              </div>
              <div className="mb-4 flex items-center">
                <Baby className="mr-3 h-6 w-6 text-[#d2b36c]" />
                <p className="text-lg">Extensive Kid&apos;s Centric Amenities</p>
              </div>
              <div className="mb-4 flex items-center">
                <Church className="mr-3 h-6 w-6 text-[#d2b36c]" />
                <p className="text-lg">Krushna Temple</p>
              </div>
              <div className="flex items-center">
                <Heart className="mr-3 h-6 w-6 text-[#d2b36c]" />
                <p className="text-lg">Pet Park</p>
              </div>
            </div>

            <div className="rounded-2xl border border-[#2a2118] bg-[#18120f] p-6 text-[#f7f1e6] shadow-[0_15px_40px_rgba(0,0,0,0.22)]">
              <div className="mb-4 flex items-center">
                <DoorOpen className="mr-3 h-6 w-6 text-[#d2b36c]" />
                <p className="text-lg">3 Entrance Gates</p>
              </div>
              <div className="mb-4 flex items-center">
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

          <div className="mx-auto mt-12 max-w-6xl text-left">
            <p className="text-sm uppercase tracking-[0.35em] text-[#d2b36c]">
              Clubhouse Amenities
            </p>
            <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4">
              {clubhouseImages.map((image, idx) => (
                <div
                  key={image.src}
                  className="group relative overflow-hidden rounded-2xl border border-[#2a2118] bg-[#18120f] shadow-[0_12px_30px_rgba(0,0,0,0.18)]"
                >
                  <Image
                    src={image.src}
                    alt={image.label}
                    width={400}
                    height={260}
                    className="h-40 w-full object-cover transition duration-300 group-hover:scale-[1.05]"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0c0a08]/80 via-transparent to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 p-3 text-sm font-semibold text-[#f7f1e6] opacity-0 transition duration-300 group-hover:opacity-100">
                    {image.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="specifications"
          className="relative overflow-hidden bg-gradient-to-b from-[#0f0c0a] via-[#120f0c] to-[#0f0c0a] px-6 py-16 text-[#f2e9dd]"
        >
          <div className="pointer-events-none absolute inset-0 opacity-35">
            <div className="absolute -left-10 top-12 h-60 w-60 rounded-full bg-[#d2b36c]/16 blur-3xl" />
            <div className="absolute right-[-30px] bottom-6 h-72 w-72 rounded-full bg-[#b88a2d]/16 blur-3xl" />
          </div>
          <div className="relative mx-auto max-w-6xl rounded-3xl border border-[#2a2118] bg-[#18120f] p-10 shadow-[0_25px_70px_rgba(0,0,0,0.28)]">
            <div className="flex flex-col gap-3 text-left sm:flex-row sm:items-end sm:justify-between">
              <div>
            <p className="text-xs uppercase tracking-[0.4em] text-[#d2b36c]">
                  Specifications
                </p>
                <h3 className="mt-2 text-3xl font-semibold text-[#f7f1e6] lg:text-4xl">
                  Materials & systems that feel premium every day
                </h3>
                <p className="mt-3 max-w-3xl text-lg text-[#e2d8c8]">
                  Curated finishes, safety layers, and climate comfort that keep
                  each residence quiet, efficient, and future-ready.
                </p>
          </div>
              <div className="flex flex-wrap gap-2">
                {["Premium Fitouts", "Smart Security", "Comfort-first"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-[#2a2118] bg-[#1c1612] px-3 py-1 text-xs font-semibold text-[#d2b36c]"
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {[
                  {
                    title: "Living & Bedrooms",
                    points: [
                      "Italian marble in living/dining; wooden laminate in bedrooms",
                      "UPVC/Aluminium large sliders for light & ventilation",
                      "Premium matte-finish internal doors & hardware",
                    ],
                    icon: <Sparkles className="h-6 w-6 text-[#d2b36c]" />,
                  },
                  {
                    title: "Bathrooms",
                    points: [
                      "Anti-skid vitrified tiles with designer dado",
                      "Premium sanitary ware & fittings with glass shower partition",
                      "Geyser & exhaust provisions; granite counters",
                    ],
                    icon: <Droplets className="h-6 w-6 text-[#d2b36c]" />,
                  },
                  {
                    title: "Kitchen",
                    points: [
                      "Granite platform with SS sink & premium CP fittings",
                      "Provision for water purifier, chimney & hob",
                      "Dedicated washing machine & dishwasher points",
                    ],
                    icon: <Utensils className="h-6 w-6 text-[#d2b36c]" />,
                  },
                  {
                    title: "Structure & Flooring",
                    points: [
                      "Earthquake-resistant RCC frame structure",
                      "600x600 vitrified tiles in circulation areas",
                      "Low-VOC paints for healthier indoors",
                    ],
                    icon: <Building className="h-6 w-6 text-[#d2b36c]" />,
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-[#2a2118] bg-[#1c1612] p-5 shadow-[0_15px_40px_rgba(0,0,0,0.22)]"
                  >
                    <div className="mb-3 flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#2a2118]/60">
                        {item.icon}
                      </div>
                      <p className="text-lg font-semibold text-[#f7f1e6]">
                        {item.title}
                      </p>
                    </div>
                    <ul className="space-y-2 text-sm leading-relaxed text-[#e2d8c8]">
                      {item.points.map((point) => (
                        <li key={point} className="flex items-start gap-2">
                          <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#d2b36c]" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="space-y-4">
                {[
                  {
                    title: "Safety & Security",
                    points: [
                      "Smart access control & video door phone",
                      "24x7 CCTV in common areas & fire detection systems",
                      "Sprinklers/hydrants as per norms; refuge areas planned",
                    ],
                    icon: <Shield className="h-6 w-6 text-[#d2b36c]" />,
                  },
                  {
                    title: "Comfort & Sustainability",
                    points: [
                      "VRV/VRF-ready AC provision; cross-ventilated plans",
                      "DG back-up for common areas & essential points",
                      "Rainwater harvesting, sewage treatment, and solar for common utilities",
                    ],
                    icon: <Leaf className="h-6 w-6 text-[#d2b36c]" />,
                  },
                  {
                    title: "Elevators & Parking",
                    points: [
                      "High-speed elevators with ARD and auto rescue",
                      "Ample podium/covered parking with EV charging readiness",
                      "Well-lit driveways with anti-skid paving",
                    ],
                    icon: <Route className="h-6 w-6 text-[#d2b36c]" />,
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-[#2a2118] bg-[#1c1612] p-6 shadow-[0_18px_45px_rgba(0,0,0,0.22)]"
                  >
                    <div className="mb-3 flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#2a2118]/60">
                        {item.icon}
                      </div>
                      <p className="text-lg font-semibold text-[#f7f1e6]">
                        {item.title}
                      </p>
                    </div>
                    <ul className="space-y-2 text-sm leading-relaxed text-[#e2d8c8]">
                      {item.points.map((point) => (
                        <li key={point} className="flex items-start gap-2">
                          <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#d2b36c]" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          id="location"
          className="relative overflow-hidden bg-gradient-to-b from-[#0f0c0a] via-[#14100d] to-[#0f0c0a] px-0 pb-20 text-[#f2e9dd]"
        >
          <div className="relative isolate">
            <video
              src="/highlights.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="h-[360px] w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0c0a08]/85 via-[#0c0a08]/55 to-transparent" />
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute -left-10 top-6 h-64 w-64 rounded-full bg-[#d2b36c]/18 blur-3xl" />
              <div className="absolute right-[-40px] bottom-6 h-72 w-72 rounded-full bg-[#b88a2d]/16 blur-3xl" />
            </div>
            <div className="absolute inset-0 flex items-center px-6 sm:px-10 lg:px-16 justify-center">
              <div className="max-w-5xl space-y-3 text-center">
                <p className="text-3xl font-semibold uppercase tracking-[0.4em] text-[#d2b36c]">
                  Location Highlights
                </p>
                <p className="text-lg leading-relaxed text-[#e2d8c8]">
                  Curated proximity to shopping, business, education, healthcare, and transit so you
                  stay ahead of the city’s rhythm.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-14 px-6">
            <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 lg:grid-cols-[1.05fr_0.95fr]">
              <div className="space-y-5 rounded-4xl border border-[#2a2118] bg-[#18120f]/85 p-6 shadow-[0_26px_72px_rgba(0,0,0,0.32)] backdrop-blur">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-[#d2b36c]/50 bg-[#2a2118]/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.3em] text-[#d2b36c]">
                    Nearby Highlights
                  </span>
                  <p className="text-sm text-[#cbbfae]">
                    Walkable malls, quick-access corridors, and key business and lifestyle hubs.
                  </p>
                </div>
                <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                  {[
                    { label: "Seasons Mall – 500 mtr", icon: <ShoppingBag className="h-5 w-5 text-[#d2b36c]" /> },
                    { label: "Amanor Mall – 500 mtr", icon: <ShoppingBag className="h-5 w-5 text-[#d2b36c]" /> },
                    { label: "Magarpattaa City – 700 mtr", icon: <Building className="h-5 w-5 text-[#d2b36c]" /> },
                    { label: "Solapur Highway – 300 mtr", icon: <Route className="h-5 w-5 text-[#d2b36c]" /> },
                    { label: "EON IT Park – 4 km", icon: <Building className="h-5 w-5 text-[#d2b36c]" /> },
                    { label: "WTC – 4 km", icon: <Building className="h-5 w-5 text-[#d2b36c]" /> },
                    { label: "Koregaon Park – 5 km", icon: <Trees className="h-5 w-5 text-[#d2b36c]" /> },
                    { label: "Pune International Airport – 8 km", icon: <Plane className="h-5 w-5 text-[#d2b36c]" /> },
                    { label: "Pune Camp – 8 km", icon: <Train className="h-5 w-5 text-[#d2b36c]" /> },
                    { label: "HDFC School – 500 mtr", icon: <GraduationCap className="h-5 w-5 text-[#d2b36c]" /> },
                    { label: "Nobel Hospital – 600 mtr", icon: <Stethoscope className="h-5 w-5 text-[#d2b36c]" /> },
                  ].map((point) => (
                    <div
                      key={point.label}
                      className="flex items-start gap-3 rounded-2xl border border-[#2a2118] bg-[#1c1612] p-4 shadow-[0_18px_48px_rgba(0,0,0,0.22)]"
                    >
                      <div className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-full bg-[#2a2118]/70">
                        {point.icon}
                      </div>
                      <p className="text-sm leading-relaxed text-[#e2d8c8]">{point.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <div className="overflow-hidden rounded-4xl border border-[#2a2118] bg-[#18120f] shadow-[0_26px_72px_rgba(0,0,0,0.3)]">
              <Image
                    src="/gallery7.png"
                    alt="Location Map"
                    width={800}
                    height={600}
                className="h-full w-full object-cover"
              />
                </div>
                <div className="grid grid-cols-2 gap-3 rounded-3xl border border-[#2a2118] bg-[#1c1612] p-4 shadow-[0_20px_50px_rgba(0,0,0,0.22)]">
                  {[
                    { label: "ORR Exit 5", value: "5 mins" },
                    { label: "Airport", value: "35 mins" },
                    { label: "Schools", value: "5–10 mins" },
                    { label: "IT Corridors", value: "15 mins" },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      className="space-y-1 rounded-2xl border border-[#2a2118] bg-[#0f0b09]/85 p-3 text-center"
                    >
                      <p className="text-[11px] uppercase tracking-[0.25em] text-[#d2b36c]">
                        {stat.label}
                      </p>
                      <p className="text-lg font-semibold text-[#f7f1e6]">{stat.value}</p>
                    </div>
                  ))}
                </div>
              </div>
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

            
          </div>
        </section>

        <section
          id="floor-plans"
          className="bg-gradient-to-b from-[#0f0c0a] via-[#120f0c] to-[#0f0c0a] px-6 py-16 text-[#f2e9dd]"
        >
          <div className="mx-auto max-w-6xl text-center">
            <p className="text-xs uppercase tracking-[0.4em] text-[#d2b36c]">
              Architecture
            </p>
            <h2 className="mt-2 text-3xl font-semibold text-[#f7f1e6] lg:text-4xl">
              Floor Plans
            </h2>
            <p className="mt-3 text-lg text-[#e2d8c8]">
              Spacious 2 & 3 BHK layouts with efficient flow, light-filled rooms, and generous
              storage.
            </p>
          </div>
          <div className="mx-auto mt-10 grid max-w-6xl grid-cols-1 gap-6 lg:grid-cols-3">
            {[
              { title: "2 BHK", image: "/2bhk.png", size: "Approx. 1000–1100 sq.ft" },
              { title: "3 BHK", image: "/3bhk.png", size: "Approx. 1350–1450 sq.ft" },
              { title: "3 BHK Premium", image: "/3bhk2.png", size: "Approx. 1500–1600 sq.ft" },
            ].map((plan) => (
              <div
                key={plan.title}
                className="group flex h-full flex-col overflow-hidden rounded-3xl border border-[#2a2118] bg-[#18120f] shadow-[0_25px_70px_rgba(0,0,0,0.25)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_30px_80px_rgba(0,0,0,0.3)]"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={plan.image}
                    alt={`${plan.title} Floor Plan`}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition duration-500 group-hover:scale-[1.04]"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0c0a08]/80 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 flex items-center gap-2 rounded-full bg-[#0c0a08]/80 px-3 py-1 text-xs font-semibold text-[#f7f1e6]">
                    <span className="h-2 w-2 rounded-full bg-[#d2b36c]" />
                    {plan.size}
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-3 px-5 py-4">
                <div className="flex items-center justify-between">
                    <p className="text-lg font-semibold text-[#f7f1e6]">{plan.title}</p>
                    <span className="rounded-full border border-[#2a2118] bg-[#2a2118]/60 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#d2b36c]">
                      Spacious
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed text-[#e2d8c8]">
                    Bright living-dining zones, private bedroom clusters, and storage-rich kitchens
                    for daily ease.
                  </p>
                  <div className="mt-auto flex flex-wrap gap-2 text-xs text-[#cbbfae]">
                    <span className="rounded-full border border-[#2a2118] bg-[#1c1612] px-2 py-1">
                      Cross ventilation
                    </span>
                    <span className="rounded-full border border-[#2a2118] bg-[#1c1612] px-2 py-1">
                      Balcony views
                    </span>
                    <span className="rounded-full border border-[#2a2118] bg-[#1c1612] px-2 py-1">
                      Optimized layouts
                  </span>
                </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section
          id="client-review"
          className="bg-gradient-to-b from-[#0f0c0a] via-[#14100d] to-[#0f0c0a] px-6 py-16 text-[#f2e9dd]"
        >
          <div className="mx-auto max-w-6xl text-center">
              <p className="text-xs uppercase tracking-[0.4em] text-[#d2b36c]">
              Client Voices
              </p>
              <h2 className="mt-2 text-3xl font-semibold text-[#f7f1e6] lg:text-4xl">
              What Residents Appreciate
              </h2>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
              {[
                { title: "Resident Story 1", url: "https://www.youtube.com/embed/s6HE8CdgkWE" },
                { title: "Resident Story 2", url: "https://www.youtube.com/embed/2x8dgzNFxDM" },
                { title: "Resident Story 3", url: "https://www.youtube.com/embed/qYyfx19PlWQ" },
              ].map((video) => (
                <div
                  key={video.url}
                  className="overflow-hidden rounded-2xl border border-[#2a2118] bg-[#18120f] shadow-[0_18px_50px_rgba(0,0,0,0.22)]"
                >
                  <div className="relative aspect-video w-full">
                    <iframe
                      src={`${video.url}?rel=0&modestbranding=1`}
                      title={video.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="absolute inset-0 h-full w-full"
                />
              </div>
                  
            </div>
              ))}
          </div>
          
        </section>

        <section
          id="about"
          className="bg-gradient-to-b from-[#0f0c0a] via-[#120f0c] to-[#0f0c0a] px-6 py-16 text-[#f2e9dd]"
        >
          <div className="mx-auto max-w-5xl text-center">
            <p className="text-xs uppercase tracking-[0.4em] text-[#d2b36c]">
              Legacy
            </p>
            <h2 className="mt-2 text-3xl font-semibold text-[#f7f1e6] lg:text-4xl">
              About Us
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

        <section
          id="enquire"
          className="bg-[#0c0a08] px-6 py-12 text-[#f2e9dd]"
        >
          <div className="mx-auto flex max-w-6xl flex-col gap-4 rounded-3xl border border-[#2a2118] bg-[#18120f] p-8 shadow-[0_20px_50px_rgba(0,0,0,0.3)] md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl space-y-2">
              <p className="text-xs uppercase tracking-[0.35em] text-[#d2b36c]">
                Enquire Now
              </p>
              <p className="text-2xl font-semibold text-[#f7f1e6]">
                Schedule a private tour or request the detailed brochure.
              </p>
              <p className="text-sm text-[#cbbfae]">
                Personalized visits, concierge assistance, and curated amenity
                previews tailored to your preferences.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <button
                onClick={handleBookVisitOpen}
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

        {showEnquiry && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4">
            <div className="w-full max-w-xl rounded-3xl border border-[#2a2118] bg-[#18120f] p-6 text-[#f2e9dd] shadow-[0_25px_80px_rgba(0,0,0,0.45)]">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.35em] text-[#d2b36c]">
                    Enquire Now
                  </p>
                  <p className="text-xl font-semibold text-[#f7f1e6]">
                    Schedule a visit or request details
                  </p>
                  <p className="text-sm text-[#cbbfae]">
                    Share your contact and we’ll get back with floor plans, pricing, and a guided walkthrough.
                  </p>
                </div>
                <button
                  onClick={handleEnquireClose}
                  className="rounded-full border border-[#2a2118] px-3 py-1 text-xs font-semibold text-[#f7f1e6] transition hover:border-[#d2b36c]"
                >
                  Close
                </button>
              </div>

              <form
                className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-2"
                onSubmit={handleEnquirySubmit}
              >
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full rounded-2xl border border-[#2a2118] bg-[#0f0b09] px-4 py-3 text-sm text-[#f7f1e6] focus:border-[#d2b36c] focus:outline-none"
                />
                <input
                  type="tel"
                  placeholder="Phone"
                  className="w-full rounded-2xl border border-[#2a2118] bg-[#0f0b09] px-4 py-3 text-sm text-[#f7f1e6] focus:border-[#d2b36c] focus:outline-none"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full rounded-2xl border border-[#2a2118] bg-[#0f0b09] px-4 py-3 text-sm text-[#f7f1e6] focus:border-[#d2b36c] focus:outline-none md:col-span-2"
                />
                <textarea
                  rows={3}
                  placeholder="Share your requirements"
                  className="w-full rounded-2xl border border-[#2a2118] bg-[#0f0b09] px-4 py-3 text-sm text-[#f7f1e6] focus:border-[#d2b36c] focus:outline-none md:col-span-2"
                />
                <div className="md:col-span-2 flex flex-wrap gap-3">
                  <button
                    type="submit"
                    className="rounded-full border border-[#2a2118] bg-gradient-to-r from-[#f7e4b0] via-[#d2b36c] to-[#b88a2d] px-5 py-3 text-sm font-semibold text-[#0c0a08] shadow-lg shadow-[#d2b36c]/30 transition hover:brightness-110"
                  >
                    {pendingDownload === "brochure"
                      ? "Submit & Download Brochure"
                      : pendingDownload === "costsheet"
                      ? "Submit & Download Cost Sheet"
                      : "Submit Enquiry"}
                  </button>
                  <button
                    type="button"
                    onClick={handleEnquireClose}
                    className="rounded-full border border-[#2a2118] px-5 py-3 text-sm font-semibold text-[#f7f1e6] transition hover:border-[#d2b36c] hover:bg-[#1c1612]"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>

        )}

        {showBookVisit && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4">
            <div className="w-full max-w-2xl rounded-3xl border border-[#2a2118] bg-[#18120f] p-6 text-[#f2e9dd] shadow-[0_25px_80px_rgba(0,0,0,0.45)] max-h-[90vh] overflow-y-auto">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.35em] text-[#d2b36c]">
                    Book Your Visit
                  </p>
                  <p className="text-xl font-semibold text-[#f7f1e6]">
                    Schedule a Private Tour
                  </p>
                  <p className="text-sm text-[#cbbfae]">
                    Choose your preferred time and let us create a personalized experience for you.
                  </p>
                </div>
                <button
                  onClick={handleBookVisitClose}
                  className="rounded-full border border-[#2a2118] px-3 py-1 text-xs font-semibold text-[#f7f1e6] transition hover:border-[#d2b36c]"
                >
                  Close
                </button>
              </div>

              <form
                className="mt-5 grid grid-cols-1 gap-4"
                onSubmit={handleBookVisitSubmit}
              >
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <input
                    type="text"
                    placeholder="Full Name"
                    required
                    className="w-full rounded-2xl border border-[#2a2118] bg-[#0f0b09] px-4 py-3 text-sm text-[#f7f1e6] focus:border-[#d2b36c] focus:outline-none"
                  />
                  <input
                    type="tel"
                    placeholder="Phone"
                    required
                    className="w-full rounded-2xl border border-[#2a2118] bg-[#0f0b09] px-4 py-3 text-sm text-[#f7f1e6] focus:border-[#d2b36c] focus:outline-none"
                  />
                </div>
                <input
                  type="email"
                  placeholder="Email"
                  required
                  className="w-full rounded-2xl border border-[#2a2118] bg-[#0f0b09] px-4 py-3 text-sm text-[#f7f1e6] focus:border-[#d2b36c] focus:outline-none"
                />
                
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div>
                    <label className="block text-xs font-semibold text-[#d2b36c] mb-2">Preferred Date</label>
                    <input
                      type="date"
                      required
                      className="w-full rounded-2xl border border-[#2a2118] bg-[#0f0b09] px-4 py-3 text-sm text-[#f7f1e6] focus:border-[#d2b36c] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#d2b36c] mb-2">Preferred Time</label>
                    <select
                      required
                      className="w-full rounded-2xl border border-[#2a2118] bg-[#0f0b09] px-4 py-3 text-sm text-[#f7f1e6] focus:border-[#d2b36c] focus:outline-none"
                    >
                      <option value="">Select Time</option>
                      <option value="10:00 AM">10:00 AM</option>
                      <option value="11:00 AM">11:00 AM</option>
                      <option value="12:00 PM">12:00 PM</option>
                      <option value="1:00 PM">1:00 PM</option>
                      <option value="2:00 PM">2:00 PM</option>
                      <option value="3:00 PM">3:00 PM</option>
                      <option value="4:00 PM">4:00 PM</option>
                      <option value="5:00 PM">5:00 PM</option>
                      <option value="6:00 PM">6:00 PM</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#d2b36c] mb-2">Number of Visitors</label>
                  <select
                    required
                    className="w-full rounded-2xl border border-[#2a2118] bg-[#0f0b09] px-4 py-3 text-sm text-[#f7f1e6] focus:border-[#d2b36c] focus:outline-none"
                  >
                    <option value="">Select Number</option>
                    <option value="1">1 Person</option>
                    <option value="2">2 People</option>
                    <option value="3">3 People</option>
                    <option value="4">4 People</option>
                    <option value="5+">5+ People</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#d2b36c] mb-2">Specific Interests</label>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      "Floor Plans",
                      "Amenities",
                      "Specifications",
                      "Location",
                      "Pricing",
                      "Possession"
                    ].map((interest) => (
                      <label key={interest} className="flex items-center gap-2 text-sm text-[#e2d8c8]">
                        <input
                          type="checkbox"
                          className="rounded border-[#2a2118] bg-[#0f0b09] text-[#d2b36c] focus:ring-[#d2b36c] focus:ring-offset-0"
                        />
                        {interest}
                      </label>
                    ))}
                  </div>
                </div>

                <textarea
                  rows={3}
                  placeholder="Additional Requirements or Questions"
                  className="w-full rounded-2xl border border-[#2a2118] bg-[#0f0b09] px-4 py-3 text-sm text-[#f7f1e6] focus:border-[#d2b36c] focus:outline-none"
                />

                <div className="flex flex-wrap gap-3 pt-2">
                  <button
                    type="submit"
                    className="rounded-full border border-[#2a2118] bg-gradient-to-r from-[#f7e4b0] via-[#d2b36c] to-[#b88a2d] px-6 py-3 text-sm font-semibold text-[#0c0a08] shadow-lg shadow-[#d2b36c]/30 transition hover:brightness-110"
                  >
                    Confirm Booking
                  </button>
                  <button
                    type="button"
                    onClick={handleBookVisitClose}
                    className="rounded-full border border-[#2a2118] px-6 py-3 text-sm font-semibold text-[#f7f1e6] transition hover:border-[#d2b36c] hover:bg-[#1c1612]"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        <footer className="bg-[#0c0a08] border-t border-[#2a2118] text-[#f2e9dd]">
          <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 pb-10 pt-10">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Image
                    src="/avinea-logo.png"
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
                    { label: "Specifications", href: "#specifications" },
                    { label: "Gallery", href: "#gallery" },
                    { label: "Floor Plans", href: "#floor-plans" },
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
