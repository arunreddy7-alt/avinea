"use client";


import { Section } from "@/components/modals/ui/Section";
import { Reveal } from "@/components/modals/ui/Reveal";
import { Badge } from "@/components/modals/ui/Badge";
import { Waves, Dumbbell, Baby, House, Utensils, Sprout, Flag } from "lucide-react";
import { motion } from "framer-motion";

import Image from "next/image";

export function Amenities() {
    const amenitiesList = [
        { title: "3 Swimming Pools", icon: <Waves className="w-6 h-6" />, desc: "Olympic sized temperature controlled pool.", image: "/Swimming1.jpg" },
        { title: "13000 sq.ft. Fitness Centre", icon: <Dumbbell className="w-6 h-6" />, desc: "State of the art fitness center with view.", image: "/Fitness Centre.jpg" },
        { title: "Kids Arena", icon: <Baby className="w-6 h-6" />, desc: "Safe and engaging play areas.", image: "/Kids Arena.jpg" },
        { title: "3 Clubhouses", icon: <House className="w-6 h-6" />, desc: "Landscaped meditation zones.", image: "/Clubhouses.jpg" },
{ title: "Gourmet Dining Experiences", icon: <Utensils className="w-6 h-6" />, desc: "Open air cultural space.", image: "/hall.jpg" },
{ title: "Mini Golf Course", icon: <Flag className="w-6 h-6" />, desc: "Spiritual corner for peace.", image: "/Mini Golf.jpg" },
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
        <Section id="amenities" className="bg-[#0a0a0a] relative overflow-hidden" dark>
            {/* Background - Subtle Gold Ribbons */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden mix-blend-screen">
                <svg className="absolute w-full h-full" viewBox="0 0 1440 900" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                    <motion.path
                        initial={{ pathLength: 0, opacity: 0 }}
                        whileInView={{ pathLength: 1, opacity: 1 }}
                        transition={{ duration: 2.5, ease: "easeOut" }}
                        d="M-50 200 Q 360 150 720 200 T 1490 200"
                        stroke="#d4af37"
                        strokeOpacity="0.04"
                        strokeWidth="40"
                        strokeLinecap="round"
                    />
                    <motion.path
                        initial={{ pathLength: 0, opacity: 0 }}
                        whileInView={{ pathLength: 1, opacity: 1 }}
                        transition={{ duration: 3, ease: "easeOut", delay: 0.2 }}
                        d="M-50 500 Q 360 450 720 500 T 1490 500"
                        stroke="#d4af37"
                        strokeOpacity="0.03"
                        strokeWidth="60"
                        strokeLinecap="round"
                    />
                    <motion.path
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 2, delay: 0.5 }}
                        d="M-50 800 Q 360 750 720 800 T 1490 800"
                        stroke="#d4af37"
                        strokeOpacity="0.02"
                        strokeWidth="80"
                    />
                </svg>
            </div>

            {/* Background decorative elements - kept but reduced */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <Reveal className="text-center mb-20">
                    <Badge dark>Lifestyle</Badge>
                    <div className="heading-section mt-6 text-white text-5xl text-center">
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
                    <p className="body-lg text-white/60 mt-6 max-w-2xl mx-auto font-light leading-loose">
                        60+ curated experiences designed to elevate your everyday living.
                        A collection of spaces that inspire and rejuvenate.
                    </p>
                </Reveal>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {amenitiesList.map((item, i) => (
                        <Reveal key={i} delay={i * 0.1}>
                            <div className="group relative p-6 h-64 rounded-xl overflow-hidden border border-white/[0.1] hover:border-accent/40 transition-colors duration-700 flex flex-col justify-end">
                                {/* Background Image */}
                                <div className="absolute inset-0 transition-transform duration-1000 group-hover:scale-105">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                                </div>

                                <div className="relative z-10 block">
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="w-10 h-10 rounded-lg bg-accent/10 backdrop-blur-md flex items-center justify-center text-accent border border-accent/20 group-hover:bg-accent group-hover:text-black transition-colors duration-500">
                                            {item.icon}
                                        </div>
                                        <span className="text-[9px] font-bold uppercase tracking-widest text-white/30 group-hover:text-accent transition-colors">
                                            0{i + 1}
                                        </span>
                                    </div>

                                    <h3 className="text-xl font-serif text-white mb-2 group-hover:text-accent transition-colors">
                                        {item.title}
                                    </h3>
                                    <p className="text-xs text-white/60 leading-relaxed font-sans border-l border-white/20 pl-3 group-hover:border-accent/40 transition-colors opacity-80">
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