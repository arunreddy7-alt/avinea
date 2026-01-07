"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Play, Sparkles, Home as HomeIcon, MapPin, ArrowRight } from "lucide-react";

import { Reveal } from "@/components/modals/ui/Reveal";

export function Hero({ onOpenEnquiry }) {
    return (
        <section className="relative h-screen w-full overflow-hidden">
            {/* Background Video */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/hero.jpg"
                    alt="Hero"
                    fill
                    className="object-cover"
                    priority
                />
                {/* Adjusted Gradient for better text readability */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/30" />
            </div>

            {/* Main Content Container - Flex Column for safe layout */}

            <div className="relative z-10 w-full h-full flex flex-col justify-end px-4 sm:px-6 pb-0">
                <div className="max-w-7xl w-full mx-auto flex flex-col items-start h-full justify-center lg:justify-end lg:pb-32 pt-35 md:pt-0">
                    <Reveal>
                        <div className="flex items-center gap-4 mb-6 sm:mb-8">
                            <div className="hidden md:inline w-12 h-[1px] bg-accent"></div>
                            <span className="hidden md:inline text-xs font-bold uppercase tracking-[0.2em] text-accent">Phase 2 Launching</span>
                        </div>
                    </Reveal>

                    <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-[6rem] font-serif leading-[1] text-white tracking-tight mb-6 sm:mb-8">
                        <div className="block">
                            {"Live Above".split("").map((char, i) => (
                                <motion.span
                                    key={`h1-${i}`}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 + i * 0.04, duration: 0.8, ease: "easeOut" }}
                                    className="inline-block"
                                >
                                    {char === " " ? "\u00A0" : char}
                                </motion.span>
                            ))}
                        </div>
                        <span className="italic font-light opacity-90 block">
                            {"The Ordinary.".split("").map((char, i) => (
                                <motion.span
                                    key={`h2-${i}`}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.6 + i * 0.04, duration: 0.8, ease: "easeOut" }}
                                    className="inline-block"
                                >
                                    {char === " " ? "\u00A0" : char}
                                </motion.span>
                            ))}
                        </span>
                    </h1>

                    <Reveal delay={0.8}>
                        <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-lg font-light leading-relaxed">
                            Avinea defines the new standard of luxury in Pune.
                            Where biophilic design meets urban sophistication.
                        </p>
                    </Reveal>

                    <Reveal delay={0.2} className="flex flex-col sm:flex-row gap-4 sm:gap-6 pt-8 sm:pt-10">
                        <button
                            onClick={onOpenEnquiry}
                            className="px-8 sm:px-10 py-3 sm:py-4 bg-white text-black hover:bg-accent hover:text-white font-bold uppercase tracking-[0.2em] transition-all duration-500 text-xs min-w-[180px] sm:min-w-[200px]"
                        >
                            Schedule Visit
                        </button>
                        <button 
                            onClick={() => window.open('https://youtu.be/MbQAPR1iFS4?si=Xp1EC3fkorthF-Va', '_blank')}
                            className="px-8 sm:px-10 py-3 sm:py-4 bg-transparent border border-white/30 text-white hover:bg-white hover:text-black font-bold uppercase tracking-[0.2em] transition-all duration-500 text-xs min-w-[180px] sm:min-w-[200px] flex items-center justify-center gap-2 sm:gap-3">
                            <Play className="w-3 h-3 fill-current" />
                            <span>Watch Film</span>
                        </button>
                    </Reveal>
                </div>

                {/* Minimal Elegant Stats Strip */}
                <div className="w-full border-t border-white/10 bg-black/20 backdrop-blur-sm">
                    <div className="max-w-7xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
                        >
                            <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
                                {[
                                    { label: "Acres", val: "10.5", sub: "Expansive Greenery" },
                                    { label: "Units", val: "1100+", sub: "Luxury Residences" },
                                    { label: "Location", val: "Hadapsar", sub: "Upscale" },
                                    { label: "Possession", val: "2028", sub: "onwards" },
                                ].map((stat, i) => (
                                    <div key={i} className="py-3 sm:py-4 md:py-6 px-3 sm:px-4 md:px-8 flex flex-col justify-center group hover:bg-white/5 transition-colors cursor-default">
                                        <div className="flex items-baseline gap-1.5 sm:gap-2 mb-1">
                                            <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif text-white">{stat.val}</span>
                                            <span className="text-[8px] sm:text-[9px] md:text-[10px] uppercase tracking-widest text-accent font-bold">{stat.label}</span>
                                        </div>
                                        <p className="text-[9px] sm:text-[10px] md:text-xs text-white/40 group-hover:text-white/60 transition-colors uppercase tracking-wider">{stat.sub}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
