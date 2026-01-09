"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

import { Section } from "@/components/modals/ui/Section";
import { Reveal } from "@/components/modals/ui/Reveal";
import { specs } from "@/app/data";

export function Specifications() {
    // Default to first category
    const [activeTab, setActiveTab] = useState(Object.keys(specs)[0]);
    const [isMobileOpen, setIsMobileOpen] = useState(null);

    // Images map to key
    const images = {
        living: "/living&bedroom.jpg",
        bath: "/bathroom.jpg",
        kitchen: "/kitchen1.png",
        structure: "/doors.jpg",
        safety: "/switch1.jpg",
        comfort: "/comformt&sustainability.jpg",
        logistics: "/security1.jpg"
    };

    // Get spec keys as array for iteration
    const specKeys = Object.keys(specs);

    const toggleMobileAccordion = (key) => {
        setIsMobileOpen(isMobileOpen === key ? null : key);
    };

    return (
        <Section className="bg-[#f9f8f6] py-16 lg:py-24 relative overflow-hidden" id="specifications">
            {/* Background Atmosphere */}
            <div className="absolute inset-0 pointer-events-none opacity-40">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#d4af37]/5 rounded-full blur-[100px]" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#d4af37]/5 rounded-full blur-[100px]" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
                <div className="grid lg:grid-cols-12 gap-8 lg:gap-20 items-start">

                    {/* Left Column: Navigation & Header */}
                    <div className="lg:col-span-4 space-y-8">
                        <Reveal>
                            <div className="space-y-4">
                                <h2 className="heading-section text-3xl sm:text-4xl lg:text-5xl text-black mb-4">
                                    <div className="block">
                                        {"Curated".split("").map((char, i) => (
                                            <motion.span
                                                key={`spec1-${i}`}
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
                                    <div className="block mt-1">
                                        <span className="font-serif italic text-accent">
                                            {"Perfection.".split("").map((char, i) => (
                                                <motion.span
                                                    key={`spec2-${i}`}
                                                    initial={{ opacity: 0, y: 20 }}
                                                    whileInView={{ opacity: 1, y: 0 }}
                                                    transition={{ delay: 0.3 + i * 0.04, duration: 0.6, ease: "easeOut" }}
                                                    viewport={{ once: true }}
                                                    className="inline-block"
                                                >
                                                    {char === " " ? "\u00A0" : char}
                                                </motion.span>
                                            ))}
                                        </span>
                                    </div>
                                </h2>
                                <p className="body-sm text-black/60 font-light text-sm">
                                    Every inch designed for the discerning. Select a category to explore the standard of luxury.
                                </p>
                            </div>
                        </Reveal>

                        {/* Mobile Accordion List - visible only on mobile */}
                        <div className="lg:hidden space-y-3">
                            {specKeys.map((key) => {
                                const category = specs[key];
                                const isOpen = isMobileOpen === key;
                                return (
                                    <div key={key} className="bg-white rounded-xl border border-black/5 overflow-hidden">
                                        <button
                                            onClick={() => toggleMobileAccordion(key)}
                                            className="w-full flex items-center justify-between p-4"
                                        >
                                            <span className="text-sm uppercase tracking-widest font-bold text-black">
                                                {category.title}
                                            </span>
                                            <ChevronDown className={`w-5 h-5 text-black/40 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                                        </button>
                                        <AnimatePresence>
                                            {isOpen && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: "auto", opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    transition={{ duration: 0.3 }}
                                                    className="overflow-hidden"
                                                >
                                                    <div className="p-4 pt-0 space-y-4">
                                                        {/* Image */}
                                                        <div className="relative aspect-video rounded-lg overflow-hidden bg-black/5">
                                                            <Image
                                                                src={images[key] || "/gallery1.png"}
                                                                alt={category.title}
                                                                fill
                                                                className="object-cover"
                                                            />
                                                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                                                        </div>
                                                        {/* Points */}
                                                        <ul className="space-y-3">
                                                            {category.points.map((point, i) => (
                                                                <motion.li
                                                                    key={point}
                                                                    initial={{ opacity: 0, y: 10 }}
                                                                    animate={{ opacity: 1, y: 0 }}
                                                                    transition={{ delay: 0.1 * i }}
                                                                    className="flex gap-3 items-start"
                                                                >
                                                                    <span className="text-accent font-serif text-sm italic opacity-40 mt-0.5 shrink-0">0{i + 1}</span>
                                                                    <p className="text-black/70 leading-relaxed font-light text-sm">
                                                                        {point}
                                                                    </p>
                                                                </motion.li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                );
                            })}
                        </div>

                        {/* Desktop Tab Navigation - hidden on mobile, visible on lg+ */}
                        <Reveal delay={0.2} className="hidden lg:block">
                            <div className="flex flex-col gap-2 relative">
                                {/* Vertical line track */}
                                <div className="absolute left-[7px] top-4 bottom-4 w-px bg-black/5" />

                                {Object.entries(specs).map(([key, category]) => (
                                    <button
                                        key={key}
                                        onClick={() => setActiveTab(key)}
                                        className={`flex items-center gap-6 group py-3 px-2 rounded-xl transition-all duration-300 text-left relative z-10 ${activeTab === key ? "bg-white shadow-lg" : "hover:bg-white/50"
                                            }`}
                                    >
                                        <div className={`w-4 h-4 rounded-full border-2 transition-all duration-300 shrink-0 ${activeTab === key ? "border-accent bg-accent scale-110" : "border-black/10 bg-[#f9f8f6] group-hover:border-accent/50"
                                            }`} />
                                        <div className="flex-1">
                                            <span className={`block text-sm uppercase tracking-widest font-bold transition-colors duration-300 ${activeTab === key ? "text-accent" : "text-black/60 group-hover:text-black"
                                                }`}>
                                                {category.title}
                                            </span>
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </Reveal>
                    </div>

                    {/* Right Column: Interaction Card - hidden on mobile, visible on lg+ */}
                    <div className="lg:col-span-8 min-h-[400px] lg:min-h-[500px] relative mt-8 lg:mt-0 hidden lg:block">
                        <div className="lg:sticky lg:top-24">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeTab}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.4, ease: "easeOut" }}
                                    className="bg-white rounded-xl sm:rounded-[2rem] p-3 sm:p-4 shadow-xl sm:shadow-2xl border border-white/40 ring-1 ring-black/5"
                                >
                                    <div className="grid md:grid-cols-2 gap-6 sm:gap-8 h-full">
                                        {/* Dynamic Image */}
                                        <div className="relative aspect-[4/5] md:aspect-auto md:h-[350px] lg:h-[450px] rounded-lg sm:rounded-[1.5rem] overflow-hidden bg-black/5">
                                            <Image
                                                src={images[activeTab] || "/gallery1.png"}
                                                alt={specs[activeTab].title}
                                                fill
                                                className="object-cover"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                                            <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 text-white">
                                                {(() => {
                                                    const Icon = specs[activeTab].icon;
                                                    return <Icon className="w-6 h-6 sm:w-8 sm:h-8 mb-2 sm:mb-3 opacity-90" />;
                                                })()}
                                            </div>
                                        </div>

                                        {/* Dynamic Content */}
                                        <div className="py-4 sm:py-6 pr-4 sm:pr-6 flex flex-col justify-center space-y-4 sm:space-y-6">
                                            <div>
                                                <h3 className="text-xl sm:text-2xl lg:text-3xl font-serif text-black mb-2">
                                                    {specs[activeTab].title}
                                                </h3>
                                                <div className="w-10 sm:w-12 h-0.5 bg-accent" />
                                            </div>

                                            <ul className="space-y-4 sm:space-y-5">
                                                {specs[activeTab].points.map((point, i) => (
                                                    <motion.li
                                                        key={point}
                                                        initial={{ opacity: 0, y: 10 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        transition={{ delay: 0.1 * i }}
                                                        className="flex gap-3 sm:gap-4 items-start"
                                                    >
                                                        <span className="text-accent font-serif text-sm sm:text-lg italic opacity-40 mt-0.5 shrink-0">0{i + 1}</span>
                                                        <p className="text-black/70 leading-relaxed font-light text-sm">
                                                            {point}
                                                        </p>
                                                    </motion.li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
}

