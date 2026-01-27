"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { Section } from "@/components/modals/ui/Section";
import { Reveal } from "@/components/modals/ui/Reveal";
import { Badge } from "@/components/modals/ui/Badge";
import { locationHighlights } from "@/app/data";

export function Location() {
    return (
        <Section id="location" className="bg-[#0c0a08] relative overflow-hidden py-16 lg:py-20" dark>
            <div className="absolute inset-0 opacity-20 pointer-events-none">
                {/* <video
  autoPlay
  muted
  loop
  playsInline
  preload="auto"
  style={{
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block"
  }}
>
<source src="/highlights.mp4" type="video/mp4" />
</video> */}

                <div className="absolute inset-0 bg-[#0c0a08]/80" />
            </div>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-12 lg:mb-20">
                <div className="space-y-6 lg:space-y-8">
                    <Reveal>
                        <div className="inline-block px-3 py-1 mb-4 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
                            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent">The Address</span>
                        </div>
                    </Reveal>

                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white leading-tight">
                        <div className="block">
                            {"Connected".split("").map((char, i) => (
                                <motion.span
                                    key={`loc1-${i}`}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.04, duration: 0.6, ease: "easeOut" }}
                                    viewport={{ once: true }}
                                    className="inline-block"
                                >
                                    {char === " " ? "\u00A0" : char}
                                </motion.span>
                            ))}
                        </div>
                        <div className="block mt-1 lg:mt-2">
                            {"to Everything.".split("").map((char, i) => (
                                <motion.span
                                    key={`loc2-${i}`}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4 + i * 0.04, duration: 0.6, ease: "easeOut" }}
                                    viewport={{ once: true }}
                                    className="inline-block"
                                >
                                    {char === " " ? "\u00A0" : char}
                                </motion.span>
                            ))}
                        </div>
                    </h2>

                    <Reveal>
                        <p className="body-main text-white/60 mt-4 lg:mt-6 leading-relaxed font-light max-w-sm text-sm">
                            Curated proximity to shopping, business, education, and transit so you stay ahead
                            of the city's rhythm. Located in Falcon Street, near key malls and IT parks.
                        </p>
                    </Reveal>
                </div>

                <div className="relative h-[300px] lg:h-[400px] w-full rounded-xl lg:rounded-2xl overflow-hidden border border-white/10 shadow-xl">
                    <Image src="/location.webp" alt="Map" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
                    <div className="absolute bottom-4 left-4">
                        <p className="text-[9px] font-bold uppercase tracking-widest text-accent mb-1">Prime Location</p>
                        <p className="text-base lg:text-lg font-serif text-white">Falcon Street, Pune</p>
                    </div>
                </div>
            </div>

            {/* Highlights Grid */}
            <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
                <Reveal delay={0.2}>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 lg:gap-x-12 gap-y-2 lg:gap-4">
                        {locationHighlights.map((loc, i) => (
                            <div key={i} className="flex items-center justify-between text-sm md:text-sm py-3 lg:py-4 border-b border-white/5 group hover:border-accent/30 transition-colors">
                                <div className="flex items-center gap-3 lg:gap-4">
                                    <span className="text-accent/60 group-hover:text-accent transition-colors shrink-0">
                                        {loc.icon}
                                    </span>
                                    <span className="text-white/70 group-hover:text-white transition-colors font-light">{loc.name}</span>
                                </div>
                                <span className="text-accent font-bold tracking-wider text-xs uppercase shrink-0 ml-2">{loc.distance}</span>
                            </div>
                        ))}
                    </div>
                </Reveal>
            </div>
        </Section>
    );
}

