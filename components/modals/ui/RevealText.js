"use client";

import { motion } from "framer-motion";

export function RevealText({
    text,
    className,
    delay = 0,
    tag = "div",
    stagger = 0.05,
    priority = false
}) {
    const Tag = tag;

    // Container with stagger animation
    const container = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: stagger, delayChildren: delay }
        }
    };

    // Word-level animation (much lighter than character-level)
    const wordVariant = {
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.4,
                ease: [0.33, 1, 0.68, 1]
            }
        },
        hidden: {
            opacity: 0,
            y: 15,
            transition: {
                duration: 0.4,
                ease: [0.33, 1, 0.68, 1]
            }
        }
    };

    // Split by words instead of characters for better performance
    const words = text.split(" ");

    return (
        <motion.div
            style={{ display: "inline-block" }}
            variants={container}
            initial="hidden"
            whileInView={!priority ? "visible" : undefined}
            animate={priority ? "visible" : undefined}
            viewport={!priority ? { once: true, margin: "-10%" } : undefined}
            className={className}
        >
            {words.map((word, index) => (
                <motion.span
                    key={index}
                    variants={wordVariant}
                    style={{
                        display: "inline-block",
                        marginRight: "0.25em"
                    }}
                >
                    {word}
                </motion.span>
            ))}
        </motion.div>
    );
}
