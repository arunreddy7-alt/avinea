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
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/90 backdrop-blur-md z-[70]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal Wrapper */}
          <motion.div
            className="fixed inset-0 z-[80] flex items-center justify-center px-4"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
          >
            {/* Close Button */}
<button
  onClick={onClose}
  className="fixed top-6 right-6 z-[80] p-3 md:p-4
             rounded-full bg-white/10 hover:bg-accent
             text-white hover:text-black
             backdrop-blur-md shadow-xl
             transition-all duration-300"
>
  <X className="w-5 h-5 md:w-6 md:h-6" />
</button>


            {/* Modal Card */}
            <div
              className="relative w-full max-w-5xl max-h-[90vh] 
                         bg-[#1a1a1a] rounded-3xl 
                         shadow-2xl border border-white/10 
                         flex flex-col md:flex-row 
                         overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Image */}
              <div className="relative w-full md:w-2/3 h-[45vh] md:h-[80vh] bg-white/5 p-6">
                <Image
                  src={plan.image}
                  alt={plan.title}
                  fill
                  className="object-contain"
                  priority
                />
              </div>

              {/* Details */}
              <div className="w-full md:w-1/3 bg-[#121212] p-8 border-l border-white/10 flex flex-col justify-center">
                <div className="space-y-6">
                  <div>
                    <p className="text-xs uppercase tracking-widest text-accent font-bold mb-2">
                      Floor Plan
                    </p>
                    <h3 className="text-3xl font-serif text-white">
                      {plan.title}
                    </h3>
                  </div>

                  <div className="py-6 border-y border-white/10 space-y-4">
                    <div>
                      <p className="text-xs uppercase font-bold text-white/40 mb-1">
                        Carpet Area
                      </p>
                      <p className="text-white font-mono text-lg">
                        {plan.size}
                      </p>
                    </div>

                    <div>
                      <p className="text-xs uppercase font-bold text-white/40 mb-2">
                        Key Features
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {plan.features.map((f, i) => (
                          <span
                            key={i}
                            className="text-[10px] uppercase font-bold text-white/60 
                                       border border-white/10 px-3 py-1 rounded-full"
                          >
                            {f}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/5 p-6 rounded-xl border border-white/10 text-center space-y-4">
                    <p className="text-sm text-white/40">Starting Price</p>

                    <div className="blur-sm opacity-60">
                      <span className="text-2xl font-serif text-white">
                        ₹ 1.45 Cr
                      </span>
                    </div>

                    <button
                      onClick={() => {
                        onUnlock();
                        onClose();
                      }}
                      className="w-full py-3 bg-accent hover:bg-white text-black 
                                 font-bold uppercase tracking-[0.2em] 
                                 transition flex items-center justify-center gap-2"
                    >
                      <Lock className="w-4 h-4" />
                      Unlock Price
                    </button>
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
