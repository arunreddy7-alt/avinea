"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Lock } from "lucide-react";
import Image from "next/image";

export function FloorPlanModal({ plan, isOpen, onClose, onUnlock }) {
    if (!plan) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
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
                                onClick={onClose}
                                className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-white text-white hover:text-black rounded-full transition-all duration-300"
                            >
                                <X className="w-5 h-5" />
                            </button>

                            {/* Image Container */}
                            <div className="relative w-full md:w-2/3 h-[40vh] md:h-[80vh] bg-white/5 p-8 flex items-center justify-center">
                                <Image
                                    src={plan.image}
                                    alt={plan.title}
                                    fill
                                    className="object-contain"
                                />
                            </div>

                            {/* Details Container */}
                            <div className="w-full md:w-1/3 bg-[#121212] p-8 flex flex-col justify-center border-l border-white/5">
                                <div className="space-y-6">
                                    <div>
                                        <p className="text-xs font-bold uppercase tracking-widest text-accent mb-2">Floor Plan</p>
                                        <h3 className="text-3xl font-serif text-white">{plan.title}</h3>
                                    </div>

                                    <div className="py-6 border-y border-white/10 space-y-4">
                                        <div>
                                            <p className="text-xs uppercase font-bold text-white/40 mb-1">Carpet Area</p>
                                            <p className="text-white font-mono text-lg">{plan.size}</p>
                                        </div>
                                        <div>
                                            <p className="text-xs uppercase font-bold text-white/40 mb-2">Key Features</p>
                                            <div className="flex flex-wrap gap-2">
                                                {plan.features.map((feat, i) => (
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
                                                onUnlock();
                                                onClose();
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
    );
}
