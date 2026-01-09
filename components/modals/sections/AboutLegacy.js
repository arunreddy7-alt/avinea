"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { Section } from "@/components/modals/ui/Section";
import { Reveal } from "@/components/modals/ui/Reveal";

export function AboutLegacy({ onOpenEnquiry }) {
    const textVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: { delay: i * 0.03, duration: 0.6, ease: "easeOut" }
        })
    };

    return (
        <Section className="bg-[#0c0a08] py-32 relative overflow-hidden text-white" dark>
            {/* Background - Very Minimal Gold Drifts */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden mix-blend-screen">
                <svg className="absolute w-full h-full" viewBox="0 0 1440 900" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                    <motion.path
                        initial={{ pathLength: 0, opacity: 0 }}
                        whileInView={{ pathLength: 1, opacity: 1 }}
                        transition={{ duration: 3, ease: "easeOut" }}
                        d="M-50 150 Q 700 50 1490 150"
                        stroke="#d4af37"
                        strokeOpacity="0.03"
                        strokeWidth="30"
                        strokeLinecap="round"
                    />
                    <motion.path
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 2, delay: 0.4 }}
                        d="M-50 850 Q 700 750 1490 850"
                        stroke="#d4af37"
                        strokeOpacity="0.02"
                        strokeWidth="100"
                    />
                </svg>
            </div>

            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center relative z-10">
                <Reveal>
                    <div className="relative space-y-8">
                        <div className="w-20 h-1 bg-accent mb-8" />
                        <h2 className="heading-display">
                            <div className="inline-block">
                                {"A Promise of".split("").map((char, i) => (
                                    <motion.span
                                        key={i}
                                        custom={i}
                                        initial="hidden"
                                        whileInView="visible"
                                        variants={textVariants}
                                        viewport={{ once: true }}
                                        className="inline-block"
                                    >
                                        {char === " " ? "\u00A0" : char}
                                    </motion.span>
                                ))}
                            </div>
                            &nbsp;
                            <span className="text-accent italic font-light">Uncompromising Quality.</span>
                        </h2>
                        <p className="body-lg text-white/60 max-w-md leading-relaxed">
                        Built on a strong foundation of expertise, Vyom Sigma Developers stands for purposeful design, lasting quality, and homes crafted with intent. Rooted in deep industry understanding, we go beyond construction to create lifestyle-driven spaces for discerning homeowners.
                        </p>

                        <button 
                            onClick={onOpenEnquiry}
                            className="group flex items-center gap-4 pt-6 cursor-pointer"
                        >
                            {/* Arrow before - always visible */}
                            <svg 
                                className="w-8 h-8 text-accent transition-all duration-300" 
                                fill="none" 
                                stroke="currentColor" 
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 17L17 7M17 7H7M17 7v10" />
                            </svg>
                            <span className="text-2xl font-serif text-white group-hover:text-accent transition-colors duration-300 group-hover:underline decoration-accent underline-offset-4 underline">
                                Explore Avinea by Vyom Sigma
                            </span>
                            {/* Arrow after - appears on hover */}
                            
                        </button>
                    </div>
                </Reveal>

                {/* Creative Image Collage */}
                <div className="relative h-[600px] w-full hidden lg:block">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="absolute top-0 right-0 w-[60%] h-[70%] z-10"
                    >
                        <Image src="/gall5.jpg" alt="Legacy 1" fill className="object-cover rounded-none" />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="absolute bottom-0 left-10 w-[50%] h-[50%] z-20 shadow-2xl border-[8px] border-[#0c0a08]"
                    >
                        <Image src="/img4.jpg" alt="Legacy 2" fill className="object-cover" />
                    </motion.div>

                    <div className="absolute top-[20%] left-0 w-[30%] h-[30%] opacity-20 z-0 bg-accent mix-blend-color-dodge" />
                </div>
            </div>
        </Section>
    );
}