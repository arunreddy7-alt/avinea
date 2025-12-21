"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Lock, Maximize2, Check } from "lucide-react";

import { Section } from "@/components/modals/ui/Section";
import { Reveal } from "@/components/modals/ui/Reveal";
import { Badge } from "@/components/modals/ui/Badge";
import { floorPlans } from "@/app/data";
import Image from "next/image";
import { FloorPlanModal } from "@/components/modals/FloorPlanModal";

export function FloorPlans({ onOpenEnquiry, setPendingDownload }) {
    const [selectedPlan, setSelectedPlan] = useState(null);

    // Helper to simulate "Unlock Price" action
    const handleUnlock = () => {
        setPendingDownload('costsheet');
        onOpenEnquiry(true);
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
                            {floorPlans.map((plan, i) => (
                                <div
                                    key={i}
                                    onClick={() => setSelectedPlan(plan)}
                                    className="group relative transition-colors hover:bg-white/[0.02] cursor-pointer"
                                >
                                    <div className="grid md:grid-cols-12 gap-8 p-6 md:p-8 items-center">

                                        {/* Configuration */}
                                        <div className="col-span-5 flex items-center gap-6">
                                            <div className="relative w-20 h-20 shrink-0 bg-white/5 rounded-lg overflow-hidden border border-white/10 group-hover:border-accent/40 transition-colors">
                                                <Image
                                                    src={plan.image}
                                                    alt={plan.title}
                                                    fill
                                                    className="object-contain p-2 group-hover:scale-110 transition-transform duration-500"
                                                />
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-serif text-white group-hover:text-accent transition-colors flex items-center gap-3">
                                                    {plan.title}
                                                    <Maximize2 className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-white/50" />
                                                </h3>
                                                <div className="flex flex-wrap gap-2 mt-2">
                                                    {plan.features.slice(0, 2).map((feat, idx) => (
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
                                            <p className="text-white/80 font-mono text-sm">{plan.size}</p>
                                        </div>

                                        {/* Price / Action */}
                                        <div className="col-span-4 flex flex-col md:items-end justify-center gap-3">
                                            <div className="relative group/price" onClick={(e) => {
                                                e.stopPropagation(); // Prevent modal opening if just clicking specific price action
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
                    <button
                        onClick={() => {
                            setPendingDownload('brochure');
                            onOpenEnquiry(true);
                        }}
                        className="inline-flex items-center gap-2 text-white/40 hover:text-accent transition-colors text-xs font-bold uppercase tracking-widest"
                    >
                    </button>
                    

                    {/* Blurred Master Layout Image */}
                    <div className="mt-6 max-w-2xl mx-auto">
                        <div 
                            onClick={() => {
                                setPendingDownload('masterlayout');
                                onOpenEnquiry(true);
                            }}
                            className="relative overflow-hidden rounded-xl border border-white/10 cursor-pointer group"
                        >

                            <Image
                                src="/masterlayout.png"
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

            <FloorPlanModal
                plan={selectedPlan}
                isOpen={!!selectedPlan}
                onClose={() => setSelectedPlan(null)}
                onUnlock={handleUnlock}
            />
        </Section>
    );
}