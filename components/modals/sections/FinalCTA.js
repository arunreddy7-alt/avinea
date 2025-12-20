"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { Reveal } from "@/components/modals/ui/Reveal";

export function FinalCTA({ onBookVisit, onRequestDetails }) {
    return (
        <section className="relative py-40 px-6 bg-[#050505] overflow-hidden flex items-center justify-center min-h-[70vh]">
            {/* Golden Gradient in Black */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent/20 via-[#050505] to-[#050505] opacity-60 pointer-events-none" />
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none" />

            <div className="max-w-5xl mx-auto text-center relative z-10 space-y-12">
                <Reveal>
                    <div className="space-y-8">
                        <span className="inline-block px-4 py-1.5 rounded-full border border-accent/20 bg-accent/5 backdrop-blur-md text-[10px] font-bold uppercase tracking-[0.3em] text-accent">
                            Final Phase
                        </span>

                        <h2 className="text-5xl md:text-7xl font-sans font-light text-white leading-tight tracking-tight mix-blend-color-dodge">
                            Your Perfect Home <br />
                            <span className="text-white/40 font-thin">Awaits You.</span>
                        </h2>

                        <p className="body-lg text-white/60 max-w-xl mx-auto leading-loose font-light text-base">
                            Don't just dream about a better life. Live it.
                            Schedule your viewing today and take the first step.
                        </p>
                    </div>
                </Reveal>

                <Reveal delay={0.2} className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                    <button
                        onClick={onBookVisit}
                        className="group relative px-8 py-4 bg-gradient-to-r from-[#997B29] via-[#FFF5B2] to-[#997B29] bg-[length:200%_auto] animate-flow text-black rounded-full font-bold uppercase tracking-widest overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-[0_0_30px_-5px_rgba(212,175,55,0.6)] text-[10px]"
                    >
                        <span className="relative z-10 flex items-center gap-2">
                            Schedule Site Visit <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                        </span>
                    </button>

                    <button
                        onClick={onRequestDetails}
                        className="px-8 py-4 bg-transparent border border-white/10 text-white/70 hover:bg-white/5 hover:border-white/30 hover:text-white rounded-full font-bold uppercase tracking-widest transition-all duration-300 backdrop-blur-sm text-[10px]"
                    >
                        Download Brochure
                    </button>
                </Reveal>
            </div>
        </section>
    );
}