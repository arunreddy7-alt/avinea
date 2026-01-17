"use client";

import { motion } from "framer-motion";

export function Reveal({ children, delay = 0, className }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ 
                duration: 0.8, 
                delay, 
                ease: [0.25, 0.25, 0, 1] // Custom cubic-bezier for smoother feel
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
