"use client";

import { motion } from "framer-motion";

export function Reveal({ children, delay = 0, className, priority = false }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={!priority ? { opacity: 1, y: 0 } : undefined}
            animate={priority ? { opacity: 1, y: 0 } : undefined}
            viewport={!priority ? { once: true, amount: 0.1 } : undefined}
            transition={{
                duration: 0.8,
                delay,
                ease: [0.25, 0.25, 0, 1] // Custom cubic-bezier for smoother feel
            }}
            className={className}
            style={{
                willChange: "transform, opacity",
                transform: "translateZ(0)",
                backfaceVisibility: "hidden"
            }}
        >
            {children}
        </motion.div>
    );
}
