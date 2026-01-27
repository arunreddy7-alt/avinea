"use client";

import { motion } from "framer-motion";

export function RevealText({
    text,
    className,
    delay = 0,
    tag = "div",
    stagger = 0.03,
    priority = false
}) {
    const Tag = tag;

    // "Container" logic
    // Optimized: Only ONE observer for the whole block of text.
    const container = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: { staggerChildren: stagger, delayChildren: delay }
        })
    };

    // "Child" logic (each character)
    const child = {
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: [0.33, 1, 0.68, 1] // cubic-bezier for "swift out" feel
            }
        },
        hidden: {
            opacity: 0,
            y: 20,
            transition: {
                duration: 0.6,
                ease: [0.33, 1, 0.68, 1]
            }
        }
    };

    return (
        <motion.div
            style={{ display: "inline-block", position: "relative" }}
            variants={container}
            initial="hidden"
            whileInView={!priority ? "visible" : undefined}
            animate={priority ? "visible" : undefined}
            viewport={!priority ? { once: true, margin: "-10%" } : undefined}
            className={className}
        >
            {text.split("").map((char, index) => (
                <motion.span
                    key={index}
                    variants={child}
                    style={{
                        display: "inline-block",
                        // CRITICAL FIX FOR CLIPPING:
                        // 1. Add significant padding to all sides to expand the layer box.
                        // 2. Use negative margins to pull it back so layout spacing is preserved.
                        paddingRight: "0.2em",
                        marginRight: "-0.2em",
                        paddingLeft: "0.05em",
                        marginLeft: "-0.05em",
                        paddingTop: "0.1em",
                        marginBottom: "-0.1em",
                        position: "relative",
                        zIndex: 1,
                        verticalAlign: "bottom", // Ensures alignment doesn't jump

                        // PERFORMANCE OPTIMIZATIONS (The "Butter Smooth" Fix):
                        willChange: "transform, opacity", // Tell browser to prep layers
                        transform: "translateZ(0)", // Force hardware acceleration
                        backfaceVisibility: "hidden", // Fixes anti-aliasing jitter
                        WebkitFontSmoothing: "antialiased" // Cleaner text rendering during motion
                    }}
                >
                    {char === " " ? "\u00A0" : char}
                </motion.span>
            ))}
        </motion.div>
    );
}
