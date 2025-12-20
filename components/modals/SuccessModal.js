"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check } from "lucide-react";

export function SuccessModal({ isOpen, onClose, message = "We will get back to you shortly." }) {

    useEffect(() => {
        if (isOpen) {
            const timer = setTimeout(() => {
                onClose();
            }, 4000); // Auto close after 4 seconds
            return () => clearTimeout(timer);
        }
    }, [isOpen, onClose]);

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 flex items-center justify-center z-[100] px-6">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-black/80 backdrop-blur-md"
                        onClick={onClose}
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="bg-[#0c0a08] relative rounded-2xl shadow-2xl p-8 max-w-md w-full border border-white/10 text-center overflow-hidden"
                    >
                        {/* Glow Effect */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 bg-accent/20 blur-[60px] rounded-full" />

                        <div className="relative z-10 flex flex-col items-center">
                            <div className="w-16 h-16 rounded-full bg-accent text-black flex shrink-0 items-center justify-center shadow-[0_0_30px_-5px_rgba(212,175,55,0.4)] mb-6">
                                <Check className="w-8 h-8" strokeWidth={3} />
                            </div>

                            <h4 className="text-2xl font-serif text-white mb-3">Thank You</h4>
                            <p className="text-white/60 leading-relaxed font-light mb-6">
                                {message}
                            </p>

                            <button
                                onClick={onClose}
                                className="text-accent text-xs font-bold uppercase tracking-widest hover:text-white transition-colors"
                            >
                                Close
                            </button>
                        </div>

                        {/* Progress bar for auto discharge */}
                        <motion.div
                            initial={{ width: "100%" }}
                            animate={{ width: "0%" }}
                            transition={{ duration: 4, ease: "linear" }}
                            className="absolute bottom-0 left-0 h-1 bg-accent"
                        />
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}