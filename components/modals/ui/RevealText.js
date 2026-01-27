"use client";

import { motion } from "framer-motion";

export function RevealText({
    text,
    className,
    delay = 0,
    tag = "div",
    stagger = 0.03
}) {
    const Tag = tag;
    const words = text.split(" ");

    const container = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: { staggerChildren: stagger, delayChildren: delay }
        })
    };

    const child = {
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        },
        hidden: {
            opacity: 0,
            y: 20,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    return (
        <motion.div
            style={{ display: "inline-block" }}
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10%" }}
            className={className}
        >
            {text.split("").map((char, index) => (
                <motion.span
                    key={index}
                    variants={child}
                    style={{ display: "inline-block" }}
                >
                    {char === " " ? "\u00A0" : char}
                </motion.span>
            ))}
        </motion.div>
    );
}
