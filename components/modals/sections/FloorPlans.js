"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Lock, Maximize2, ChevronLeft, ChevronRight, X } from "lucide-react";

import { Section } from "@/components/modals/ui/Section";
import { Reveal } from "@/components/modals/ui/Reveal";
import { Badge } from "@/components/modals/ui/Badge";
import { floorPlans } from "@/app/data";
import Image from "next/image";

export function FloorPlans({ onOpenEnquiry, setPendingDownload }) {
    // Group floor plans by BHK type
    const groupedFloorPlans = useMemo(() => {
        const groups = {};
        floorPlans.forEach(plan => {
            if (!groups[plan.title]) {
                groups[plan.title] = [];
            }
            groups[plan.title].push(plan);
        });
        return groups;
    }, [floorPlans]);

    const [selectedBHK, setSelectedBHK] = useState(null);
    const [selectedIndex, setSelectedIndex] = useState(0);

    const handleUnlock = () => {
        setPendingDownload('costsheet');
        onOpenEnquiry(true);
    };

    const openBHK = (bhkTitle) => {
        setSelectedBHK(bhkTitle);
        setSelectedIndex(0);
    };

    const closeModal = () => {
        setSelectedBHK(null);
        setSelectedIndex(0);
    };

    const currentPlans = selectedBHK ? groupedFloorPlans[selectedBHK] : [];
    const currentPlan = currentPlans[selectedIndex];

    const goToNext = (e) => {
        e?.stopPropagation();
        if (currentPlans.length > 1) {
            setSelectedIndex((prev) => (prev + 1) % currentPlans.length);
        }
    };

    const goToPrev = (e) => {
        e?.stopPropagation();
        if (currentPlans.length > 1) {
            setSelectedIndex((prev) => (prev - 1 + currentPlans.length) % currentPlans.length);
        }
    };

    return (
        <Section id="floor-plans" className="bg-[#121212] py-24" dark>
            <div className="max-w-6xl mx-auto px-6">
                <Reveal className="text-center mb-16">
                    <Badge dark>Architecture</Badge>
                    <h2 className="heading-section mt-4 text-white">Floor Plans</h2>
                    <p className="body-sm text-white/50 mt-4 max-w-xl mx-auto">
                        Thoughtfully designed layouts that maximize space and light.
                    </p>
                </Reveal>

                <Reveal>
                    <div className="bg-white/[0.03] border border-white/10 rounded-3xl overflow-hidden backdrop-blur-sm">
                        {/* Table Header - Hidden on small screens, shown on md+ */}
                        <div className="hidden md:grid grid-cols-12 gap-6 p-6 border-b border-white/10 text-xs font-bold uppercase tracking-widest text-white/40">
                            <div className="col-span-5">Configuration</div>
                            <div className="col-span-3">Carpet Area</div>
                            <div className="col-span-4 text-right">Price</div>
                        </div>

                        <div className="divide-y divide-white/5">
                            {Object.entries(groupedFloorPlans).map(([title, plans]) => (
                                <div
                                    key={title}
                                    onClick={() => openBHK(title)}
                                    className="group relative transition-colors hover:bg-white/[0.02] cursor-pointer"
                                >
                                    <div className="grid md:grid-cols-12 gap-8 p-6 md:p-8 items-center">

                                        {/* Configuration */}
                                        <div className="col-span-5 flex items-center gap-6">
                                            <div className="relative w-20 h-20 shrink-0 bg-white/5 rounded-lg overflow-hidden border border-white/10 group-hover:border-accent/40 transition-colors">
                                                <Image
                                                    src={plans[0].image}
                                                    alt={title}
                                                    fill
                                                    className="object-contain p-2 group-hover:scale-110 transition-transform duration-500"
                                                />
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-serif text-white group-hover:text-accent transition-colors flex items-center gap-3">
                                                    {title}
                                                    {plans.length > 1 && (
                                                        <span className="text-[10px] bg-accent/20 text-accent px-2 py-0.5 rounded-full">
                                                            {plans.length} options
                                                        </span>
                                                    )}
                                                    <Maximize2 className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-white/50" />
                                                </h3>
                                                <div className="flex flex-wrap gap-2 mt-2">
                                                    {plans[0].features.slice(0, 2).map((feat, idx) => (
                                                        <span key={idx} className="text-[10px] uppercase font-bold text-white/40 border border-white/10 px-2 py-0.5 rounded-full">
                                                            {feat}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>

                                        {/* Area */}
                                        <div className="col-span-3">
                                            <div className="md:hidden text-[10px] uppercase font-bold text-white/40 mb-1">Carpet Area</div>
                                            <p className="text-white/80 font-mono text-sm">{plans[0].size}</p>
                                        </div>

                                        {/* Price / Action */}
                                        <div className="col-span-4 flex flex-col md:items-end justify-center gap-3">
                                            <div className="relative group/price" onClick={(e) => {
                                                e.stopPropagation();
                                                handleUnlock();
                                            }}>
                                                <div className="flex items-center gap-3 blur-sm select-none opacity-50 group-hover/price:opacity-20 transition-opacity">
                                                    <span className="text-xl font-serif text-white">₹ 1.45 Cr</span>
                                                    <span className="text-xs text-white/50">Onwards</span>
                                                </div>
                                                <div className="absolute inset-0 flex items-center justify-end">
                                                    <button
                                                        className="flex items-center gap-2 px-4 py-2 bg-accent/10 hover:bg-accent text-accent hover:text-white border border-accent/20 rounded-full transition-all duration-300 transform scale-90 group-hover/price:scale-100"
                                                    >
                                                        <Lock className="w-3 h-3" />
                                                        <span className="text-[10px] font-bold uppercase tracking-widest">Unlock Price</span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </Reveal>

                <div className="mt-8 text-center">
                    <div className="mt-6 max-w-2xl mx-auto">
                        <div 
                            onClick={() => {
                                setPendingDownload('masterlayout');
                                onOpenEnquiry(true);
                            }}
                            className="relative overflow-hidden rounded-xl border border-white/10 cursor-pointer group"
                        >
                            <Image
                                src="/masterlayout.jpg"
                                alt="Master Layout"
                                width={800}
                                height={600}
                                className="w-full h-auto blur-md opacity-60 transition-all duration-500"
                            />
                            <div className="absolute inset-0 bg-black/20 backdrop-blur-[1px]" />

                            <div className="absolute inset-0 flex items-center justify-center">
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setPendingDownload('brochure');
                                        onOpenEnquiry(true);
                                    }}
                                    className="bg-accent/10 hover:bg-accent px-4 py-2 rounded-full border border-accent/20 transition-all duration-300 transform scale-90 group-hover:scale-100 inline-flex items-center gap-2 text-accent hover:text-white text-xs font-bold uppercase tracking-widest"
                                >
                                    <ArrowRight className="w-3 h-3" /> Download Master Plan
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Floor Plan Modal with Sliding */}
            <AnimatePresence>
                {selectedBHK && currentPlan && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={closeModal}
                            className="fixed inset-0 bg-black/90 backdrop-blur-md z-[70] cursor-pointer"
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            className="fixed inset-0 flex items-center justify-center z-[71] p-4 pointer-events-none"
                        >
                            <div className="bg-[#1a1a1a] w-full max-w-4xl max-h-[90vh] overflow-hidden rounded-3xl shadow-2xl border border-white/10 pointer-events-auto relative flex flex-col md:flex-row">

                                <button
                                    onClick={closeModal}
                                    className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-white text-white hover:text-black rounded-full transition-all duration-300"
                                >
                                    <X className="w-5 h-5" />
                                </button>

                                {/* Image Container with Navigation Arrows */}
                                <div className="relative w-full md:w-2/3 h-[40vh] md:h-[80vh] bg-white/5 p-8 flex items-center justify-center">
                                    {/* Navigation Arrows */}
                                    {currentPlans.length > 1 && (
                                        <>
                                            <button
                                                onClick={goToPrev}
                                                className="absolute left-4 z-10 p-2 bg-black/50 hover:bg-accent text-white hover:text-black rounded-full transition-all duration-300"
                                            >
                                                <ChevronLeft className="w-5 h-5" />
                                            </button>
                                            <button
                                                onClick={goToNext}
                                                className="absolute right-4 z-10 p-2 bg-black/50 hover:bg-accent text-white hover:text-black rounded-full transition-all duration-300"
                                            >
                                                <ChevronRight className="w-5 h-5" />
                                            </button>
                                            {/* Slide Indicators */}
                                            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                                                {currentPlans.map((_, idx) => (
                                                    <div
                                                        key={idx}
                                                        className={`w-2 h-2 rounded-full transition-all ${
                                                            idx === selectedIndex 
                                                                ? 'bg-accent w-6' 
                                                                : 'bg-white/30 hover:bg-white/50'
                                                            }`}
                                                    />
                                                ))}
                                            </div>
                                        </>
                                    )}

                                    <AnimatePresence mode="wait">
                                        <motion.div
                                            key={`${selectedBHK}-${selectedIndex}`}
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -20 }}
                                            transition={{ duration: 0.2 }}
                                            className="relative w-full h-full"
                                        >
                                            <Image
                                                src={currentPlan.image}
                                                alt={`${selectedBHK} - Option ${selectedIndex + 1}`}
                                                fill
                                                className="object-contain"
                                            />
                                        </motion.div>
                                    </AnimatePresence>

                                    {/* Option Label */}
                                    {currentPlans.length > 1 && (
                                        <div className="absolute top-4 left-4 z-10 bg-accent/20 backdrop-blur-md px-3 py-1 rounded-full">
                                            <span className="text-xs font-bold text-accent uppercase tracking-widest">
                                                Option {selectedIndex + 1} of {currentPlans.length}
                                            </span>
                                        </div>
                                    )}
                                </div>

                                {/* Details Container */}
                                <div className="w-full md:w-1/3 bg-[#121212] p-8 flex flex-col justify-center border-l border-white/5">
                                    <div className="space-y-6">
                                        <div>
                                            <p className="text-xs font-bold uppercase tracking-widest text-accent mb-2">Floor Plan</p>
                                            <h3 className="text-3xl font-serif text-white">{currentPlan.title}</h3>
                                        </div>

                                        <div className="py-6 border-y border-white/10 space-y-4">
                                            <div>
                                                <p className="text-xs uppercase font-bold text-white/40 mb-1">Carpet Area</p>
                                                <p className="text-white font-mono text-lg">{currentPlan.size}</p>
                                            </div>
                                            <div>
                                                <p className="text-xs uppercase font-bold text-white/40 mb-2">Key Features</p>
                                                <div className="flex flex-wrap gap-2">
                                                    {currentPlan.features.map((feat, i) => (
                                                        <span key={i} className="text-[10px] uppercase font-bold text-white/60 border border-white/10 px-2 py-1 rounded-full">
                                                            {feat}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="bg-white/5 p-6 rounded-xl border border-white/5 text-center space-y-4">
                                            <div>
                                                <p className="text-sm text-white/40 mb-1">Starting Price</p>
                                                <div className="blur-sm select-none opacity-50">
                                                    <span className="text-2xl font-serif text-white">₹ 1.45 Cr</span>
                                                </div>
                                            </div>
                                            <button
                                                onClick={() => {
                                                    handleUnlock();
                                                    closeModal();
                                                }}
                                                className="w-full py-3 bg-accent hover:bg-white text-black font-bold uppercase tracking-[0.2em] transition-all duration-300 flex items-center justify-center gap-2 group"
                                            >
                                                <Lock className="w-4 h-4" /> Unlock Price
                                            </button>
                                            <p className="text-[10px] text-white/30 leading-snug">
                                                Click to receive the official cost sheet immediately.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </Section>
    );
}
