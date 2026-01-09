"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

import { Section } from "@/components/modals/ui/Section";
import { Reveal } from "@/components/modals/ui/Reveal";

const faqs = [
    {
        question: "What is the location of Avinea in Pune?",
        answer: "Avinea is strategically located in Hadapsar, Pune - PIN code 411028, a prime residential and commercial hub. It offers seamless connectivity to Magarpatta City (5 Mins), Kalyani Nagar (20 Mins), and Pune airport (35 Mins), making it ideal for professionals and families."
    },
    {
        question: "Who is the developer of Avinea, Hadapsar?",
        answer: "Avinea is developed by Vyom Sigma Developers, bringing a refined approach to modern living in Pune. The developer is known for quality construction, on-schedule delivery, and lifestyle-driven design."
    },
    {
        question: "What types of apartments are available at Avinea?",
        answer: "Avinea offers thoughtfully designed 2 to 6 BHKs in multiple variants, with sizes ranging from 946 sq. ft. to 2470 sq. ft. These layouts maximize space, natural light, and ventilation for modern urban living."
    },
    {
        question: "What amenities can residents enjoy at Avinea?",
        answer: "Residents at Avinea have access to premium amenities including:\n\n• Landscaped garden and children's play area\n• 3 Clubhouses - Citadel, Castle, and Manor\n• 13000 sq. ft. Fitness center\n• 3 Swimming Pools\n• 24×7 security and power backup\n• Co-working spaces & sports zones\n\nThese facilities are designed to support a balanced lifestyle for all age groups."
    },
    {
        question: "Why should I invest in Avinea, Hadapsar?",
        answer: "Avinea is an attractive investment because it is in Hadapsar - one of Pune's fastest-growing real estate corridors with strong demand from professionals working in IT, finance, and commercial sectors. The project's location, quality construction, and connectivity contribute to strong long-term appreciation potential and rental demand."
    }
];

function FAQItem({ faq, isOpen, onToggle, index }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            className="border-b border-white/10"
        >
            <button
                onClick={onToggle}
                className="w-full py-5 flex items-center justify-between text-left group"
            >
                <span className="text-lg font-medium text-[#f5f0e8] group-hover:text-white transition-colors pr-4">
                    {faq.question}
                </span>
                <ChevronDown 
                    className={`w-5 h-5 text-white/60 transition-transform duration-300 flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`} 
                />
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <p className="pb-5 text-[#f5f0e8]/70 leading-relaxed whitespace-pre-line">
                            {faq.answer}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}

export function FAQ({ onBookVisit }) {
    const [openIndex, setOpenIndex] = useState(0);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? -1 : index);
    };

    return (
        <Section className="bg-[#1a1612] relative" dark>
            {/* Background Image with Black Gradient Overlay */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/faq-bg.jpg"
                    alt="FAQ Background"
                    fill
                    className="object-cover"
                />
                {/* Black gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-black/90" />
            </div>

            <div className="max-w-4xl mx-auto relative z-10">
                <Reveal className="text-center mb-12">
                    <h2 className="heading-section text-[#f5f0e8]">Frequently Asked Questions</h2>
                    <p className="text-[#f5f0e8]/60 mt-4">Find answers to common questions about Avinea</p>
                </Reveal>

                <Reveal delay={0.1}>
                    <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/10">
                        {faqs.map((faq, index) => (
                            <FAQItem
                                key={index}
                                faq={faq}
                                index={index}
                                isOpen={openIndex === index}
                                onToggle={() => toggleFAQ(index)}
                            />
                        ))}
                    </div>
                </Reveal>

                <Reveal delay={0.2}>
                    <div className="text-center mt-8">
                        <button
                            onClick={onBookVisit}
                            className="group relative inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[#997B29] via-[#FFF5B2] to-[#997B29] bg-[length:200%_auto] animate-flow text-black rounded-full font-bold uppercase tracking-widest overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-[0_0_30px_-5px_rgba(212,175,55,0.6)] text-[10px]"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                Schedule a Visit
                            </span>
                        </button>
                    </div>
                </Reveal>
            </div>
        </Section>
    );
}

