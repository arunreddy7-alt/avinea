"use client";

import Image from "next/image";
import { Shield, Trophy, Users, Star, Play } from "lucide-react";
import { motion } from "framer-motion";

import { Section } from "@/components/modals/ui/Section";
import { Reveal } from "@/components/modals/ui/Reveal";
import { Badge } from "@/components/modals/ui/Badge";

export function Overview({ onWatchFilm }) {
    return (
        <Section id="overview" className="relative overflow-hidden">
            {/* Background Geometry - Fluid Ribbons (strictly horizontal flow) */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <svg className="absolute w-full h-full" viewBox="0 0 1440 900" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">

                    {/* 1. Top Horizon - Gentle Wave */}
                    <motion.path
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 1 }}
                        transition={{ duration: 2, ease: "easeOut" }}
                        d="M-50 100 Q 360 50 720 100 T 1490 100"
                        stroke="#d4af37"
                        strokeOpacity="0.06"
                        strokeWidth="50"
                        strokeLinecap="round"
                    />

                    {/* 2. Upper Mid - Parallel Wave */}
                    <motion.path
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 1 }}
                        transition={{ duration: 2.2, ease: "easeOut", delay: 0.2 }}
                        d="M-50 300 Q 360 250 720 300 T 1490 300"
                        stroke="#d4af37"
                        strokeOpacity="0.12"
                        strokeWidth="80"
                        strokeLinecap="round"
                    />

                    {/* 3. Center - Main Flow */}
                    <motion.path
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 1 }}
                        transition={{ duration: 2.4, ease: "easeOut", delay: 0.4 }}
                        d="M-50 500 Q 360 450 720 500 T 1490 500"
                        stroke="#d4af37"
                        strokeOpacity="0.08"
                        strokeWidth="70"
                        strokeLinecap="round"
                    />

                    {/* 4. Lower Mid - Wide Arc */}
                    <motion.path
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 3, delay: 0.6 }}
                        d="M-50 700 Q 360 650 720 700 T 1490 700"
                        stroke="#d4af37"
                        strokeOpacity="0.05"
                        strokeWidth="100"
                    />

                    {/* 5. Bottom Edge - Soft Foundation */}
                    <motion.path
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 1 }}
                        transition={{ duration: 1.5, ease: "easeOut", delay: 0.8 }}
                        d="M-50 850 Q 360 820 720 850 T 1490 850"
                        stroke="#d4af37"
                        strokeOpacity="0.03"
                        strokeWidth="120"
                        strokeLinecap="round"
                    />
                </svg>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center relative z-10">
                <div className="relative pl-0 lg:pl-6 pt-0 lg:pt-6">
                    <Reveal>
                        <div className="relative aspect-square lg:aspect-[4/3] rounded-xl lg:rounded-[2rem] overflow-hidden shadow-xl lg:shadow-2xl border-4 lg:border-8 border-white">
                            <Image
                                src="/avinea-hadapsar-pune/ga3.webp"
                                alt="Overview"
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                            <div className="absolute bottom-4 lg:bottom-6 left-4 lg:left-8 text-white">
                                <p className="text-lg lg:text-2xl font-serif tracking-wide">Designed for Life.</p>
                            </div>
                        </div>
                    </Reveal>
                    {/* Floating Card - Hidden on mobile, shown on md+ */}
                    <Reveal
                        delay={0.2}
                        className="absolute -bottom-4 -right-4 bg-white p-4 lg:p-6 rounded-xl shadow-[0_20px_40px_-5px_rgba(0,0,0,0.1)] max-w-[200px] lg:max-w-xs hidden md:block border border-black/5"
                    >
                        <div className="flex items-center gap-3 lg:gap-4 mb-2">
                            <div className="w-8 lg:w-10 h-8 lg:h-10 rounded-full bg-accent text-white flex items-center justify-center shadow-lg">
                                <Shield className="w-4 lg:w-5 h-4 lg:h-5" />
                            </div>
                            <div>
                                <p className="text-xs lg:sm font-bold text-black font-serif">RERA Approved</p>
                                <p className="text-[10px] lg:text-[10px] text-black/50 tracking-wider">P52100079047</p>
                            </div>
                        </div>
                        <p className="text-xs text-black/60 leading-relaxed max-w-[200px]">
                            Fully compliant. Peace of mind guaranteed.
                        </p>
                    </Reveal>
                </div>

                <div className="space-y-6 lg:space-y-10 px-2 lg:px-0">
                    <Reveal>
                        <Badge>The Vision</Badge>
                        <h2 className="heading-section mt-4 text-3xl sm:text-4xl lg:text-5xl">
                            <div className="block">
                                {"Where Future".split("").map((char, i) => (
                                    <motion.span
                                        key={`l1-${i}`}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: i * 0.03, duration: 0.6, ease: "easeOut" }}
                                        viewport={{ once: true }}
                                        className="inline-block"
                                    >
                                        {char === " " ? "\u00A0" : char}
                                    </motion.span>
                                ))}
                            </div>
                            <div className="block mt-1 lg:mt-2">
                                {"Meets".split("").map((char, i) => (
                                    <motion.span
                                        key={`l2-${i}`}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.3 + i * 0.03, duration: 0.6, ease: "easeOut" }}
                                        viewport={{ once: true }}
                                        className="inline-block"
                                    >
                                        {char === " " ? "\u00A0" : char}
                                    </motion.span>
                                ))}
                                &nbsp;
                                <span className="text-accent italic font-serif">
                                    {"Serenity.".split("").map((char, i) => (
                                        <motion.span
                                            key={`l3-${i}`}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.5 + i * 0.03, duration: 0.6, ease: "easeOut" }}
                                            viewport={{ once: true }}
                                            className="inline-block"
                                        >
                                            {char === " " ? "\u00A0" : char}
                                        </motion.span>
                                    ))}
                                </span>
                            </div>
                        </h2>
                        <p className="body-main text-text-body mt-4 lg:mt-6 border-l-2 border-accent/20 pl-4 lg:pl-6 text-sm sm:text-base">
                            Avinea is more than a residence; it's a meticulously crafted
                            ecosystem. Spanning 10.5 acres of prime landscape, we offer a
                            sanctuary that balances the pulse of the city with the calm of
                            nature.
                        </p>
                    </Reveal>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 pt-2 lg:pt-4">
                        {[
                            { label: "Vastu Compliant", icon: <Star className="w-4 h-4 sm:w-5 sm:h-5" /> },
                            { label: "Smart Homes", icon: <Trophy className="w-4 h-4 sm:w-5 sm:h-5" /> },
                            { label: "Community First", icon: <Users className="w-4 h-4 sm:w-5 sm:h-5" /> },
                            { label: "24/7 Security", icon: <Shield className="w-4 h-4 sm:w-5 sm:h-5" /> },
                        ].map((feature, i) => (
                            <Reveal key={i} delay={0.2 + i * 0.1}>
                                <div className="flex items-center gap-2 p-2 sm:p-3 lg:p-4 rounded-lg bg-white border border-black/5 hover:border-accent hover:shadow-lg transition-all group cursor-default">
                                    <div className="text-accent-dark group-hover:text-accent transition-colors shrink-0">
                                        {feature.icon}
                                    </div>
                                    <span className="font-bold text-black text-xs sm:text-xs uppercase tracking-wider">
                                        {feature.label}
                                    </span>
                                </div>
                            </Reveal>
                        ))}
                    </div>

                    <Reveal delay={0.6}>
                        <div className="flex justify-center">
                            <button 
                                onClick={onWatchFilm}
                                className="px-8 sm:px-10 py-3 sm:py-4 bg-transparent border border-black/20 text-black hover:bg-black hover:text-white font-bold uppercase tracking-[0.2em] transition-all duration-500 text-xs min-w-[180px] sm:min-w-[200px] flex items-center justify-center gap-2 sm:gap-3"
                            >
                                <Play className="w-3 h-3 fill-current" />
                                <span>View Project Video</span>
                            </button>
                        </div>
                    </Reveal>
                </div>
            </div>
        </Section>
    );
}
