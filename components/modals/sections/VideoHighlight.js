"use client";

import { motion } from "framer-motion";

import { Reveal } from "@/components/modals/ui/Reveal";

export function VideoHighlight() {
    return (
        <section className="relative w-full h-[40vh] md:h-[50vh] min-h-[300px] overflow-hidden bg-black">
            <video
                src="/highlights.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Content Container - No background overlay requested */}
            <div className="relative z-10 w-full h-full flex flex-col items-center justify-center px-6">
                <Reveal>
                    <div className="text-center space-y-4">
                        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold uppercase tracking-[0.2em] text-[#d4af37] drop-shadow-lg">
                            Location Highlights
                        </h2>
                        <p className="text-white text-sm md:text-lg font-light max-w-3xl mx-auto leading-relaxed drop-shadow-md">
                            Curated proximity to shopping, business, education, healthcare, and transit so you stay ahead of the city’s rhythm.
                        </p>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}