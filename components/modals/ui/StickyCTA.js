"use client";

import { motion } from "framer-motion";
import { Calendar } from "lucide-react";

export function StickyCTA({ onOpen }) {
    return (
        <>
            {/* Desktop sticky CTA - right side, vertical */}
            <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50 hidden md:block">
                <motion.button
                    initial={{ x: 100 }}
                    animate={{ x: 0 }}
                    transition={{ delay: 2, duration: 0.8 }}
                    onClick={onOpen}
                    className="group flex flex-col items-center bg-accent py-6 px-3 rounded-l-xl shadow-[0_4px_30px_-5px_rgba(212,175,55,0.6)] hover:bg-white transition-all duration-500"
                >
                    <Calendar className="w-5 h-5 text-black mb-4 group-hover:text-black transition-colors rotate-0" />
                        <span className="writing-mode-vertical text-[10px] font-bold uppercase tracking-[0.3em] text-black group-hover:text-black">
                            Enquire Now
                        </span>
                </motion.button>

                <style jsx>{`
                    .writing-mode-vertical {
                        writing-mode: vertical-rl;
                        text-orientation: mixed;
                        transform: rotate(180deg);
                    }
                `}</style>
            </div>

            {/* Mobile floating CTA - right bottom */}
            <motion.button
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 3, duration: 0.5 }}
                onClick={onOpen}
                className="fixed right-4 bottom-4 z-50 md:hidden flex items-center gap-2 bg-accent text-black px-6 py-3 rounded-full font-bold uppercase tracking-widest text-[10px] shadow-[0_4px_20px_-5px_rgba(212,175,55,0.6)] hover:bg-white transition-all duration-300"
            >
                Enquire Now
            </motion.button>
        </>
    );
}
