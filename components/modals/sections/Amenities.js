"use client";

import { Section } from "@/components/modals/ui/Section";
import { Reveal } from "@/components/modals/ui/Reveal";
import { Badge } from "@/components/modals/ui/Badge";
import { Waves, Dumbbell, Baby, House, Utensils, Sprout, Flag } from "lucide-react";
import { motion } from "framer-motion";

import Image from "next/image";

export function Amenities() {
    const amenitiesList = [
        { title: "3 Swimming Pools", icon: <Waves className="w-5 h-5 sm:w-6 sm:h-6" />, desc: "Olympic sized temperature controlled pool.", image: "/Swimming1.webp" },
        { title: "13000 sq.ft. Fitness Centre", icon: <Dumbbell className="w-5 h-5 sm:w-6 sm:h-6" />, desc: "State of the art fitness center with view.", image: "/Fitness Centre.webp" },
        { title: "Kids Arena", icon: <Baby className="w-5 h-5 sm:w-6 sm:h-6" />, desc: "Safe and engaging play areas.", image: "/Kids Arena.webp" },
        { title: "3 Clubhouses", icon: <House className="w-5 h-5 sm:w-6 sm:h-6" />, desc: "Landscaped meditation zones.", image: "/Clubhouses.webp" },
        { title: "Gourmet Dining Experiences", icon: <Utensils className="w-5 h-5 sm:w-6 sm:h-6" />, desc: "Open air cultural space.", image: "/hall2.webp" },
        { title: "Mini Golf Course", icon: <Flag className="w-5 h-5 sm:w-6 sm:h-6" />, desc: "Spiritual corner for peace.", image: "/Mini Golf.webp" },
    ];

    const textVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: { delay: i * 0.05, duration: 0.8, ease: "easeOut" }
        })
    };

    return (
        <Section id="amenities" className="bg-[#0a0a0a] relative overflow-hidden py-16 lg:py-24" dark>
            {/* Background - Subtle Gold Ribbons (optimized) */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="absolute inset-0 pointer-events-none overflow-hidden mix-blend-screen"
            >
                <svg className="absolute w-full h-full" viewBox="0 0 1440 900" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                    {/* Static paths for better performance */}
                    <path
                        d="M-50 200 Q 360 150 720 200 T 1490 200"
                        stroke="#d4af37"
                        strokeOpacity="0.04"
                        strokeWidth="40"
                        strokeLinecap="round"
                    />
                    <path
                        d="M-50 500 Q 360 450 720 500 T 1490 500"
                        stroke="#d4af37"
                        strokeOpacity="0.03"
                        strokeWidth="60"
                        strokeLinecap="round"
                    />
                    <path
                        d="M-50 800 Q 360 750 720 800 T 1490 800"
                        stroke="#d4af37"
                        strokeOpacity="0.02"
                        strokeWidth="80"
                    />
                </svg>
            </motion.div>

            {/* Background decorative elements */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
                <Reveal className="text-center mb-10 lg:mb-20">
                    <Badge dark>Lifestyle</Badge>
                    <div className="heading-section mt-4 lg:mt-6 text-white text-3xl sm:text-4xl lg:text-5xl text-center">
                        {"World Class".split("").map((char, i) => (
                            <motion.span
                                key={i}
                                custom={i}
                                initial="hidden"
                                whileInView="visible"
                                variants={textVariants}
                                viewport={{ once: true }}
                                className="inline-block"
                            >
                                {char === " " ? "\u00A0" : char}
                            </motion.span>
                        ))}
                        &nbsp; <span className="text-accent italic font-serif">Amenities</span>
                    </div>
                    <p className="body-lg text-white/60 mt-4 lg:mt-6 max-w-2xl mx-auto font-light leading-relaxed text-sm sm:text-base">
                        60+ curated experiences designed to elevate your everyday living.
                        A collection of spaces that inspire and rejuvenate.
                    </p>
                </Reveal>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
                    {amenitiesList.map((item, i) => (
                        <Reveal key={i} delay={i * 0.1}>
                            <div className="group relative p-3 sm:p-4 lg:p-6 h-56 sm:h-64 lg:h-64 rounded-lg sm:rounded-xl overflow-hidden border border-white/[0.1] hover:border-accent/40 transition-colors duration-700 flex flex-col justify-end">
                                {/* Background Image */}
                                <div className="absolute inset-0 transition-transform duration-1000 group-hover:scale-105">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700"
                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                                </div>

                                <div className="relative z-10 block">
                                    <div className="flex items-center justify-between mb-2 sm:mb-4">
                                        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-accent/10 backdrop-blur-md flex items-center justify-center text-accent border border-accent/20 group-hover:bg-accent group-hover:text-black transition-colors duration-500">
                                            {item.icon}
                                        </div>
                                        <span className="text-[8px] sm:text-[9px] font-bold uppercase tracking-widest text-white/30 group-hover:text-accent transition-colors">
                                            0{i + 1}
                                        </span>
                                    </div>

                                    <h3 className="text-base sm:text-xl font-serif text-white mb-1 sm:mb-2 group-hover:text-accent transition-colors">
                                        {item.title}
                                    </h3>
                                    <p className="text-[10px] sm:text-xs text-white/60 leading-relaxed font-sans border-l border-white/20 pl-2 sm:pl-3 group-hover:border-accent/40 transition-colors opacity-80">
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </Section>
    );
}

