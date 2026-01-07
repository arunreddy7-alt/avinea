"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

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
                <span className="text-lg font-medium text-white group-hover:text-accent transition-colors pr-4">
                    {faq.question}
                </span>
                <ChevronDown 
                    className={`w-5 h-5 text-accent transition-transform duration-300 flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`} 
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
                        <p className="pb-5 text-white/70 leading-relaxed whitespace-pre-line">
                            {faq.answer}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}

export function FAQ() {
    const [openIndex, setOpenIndex] = useState(0);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? -1 : index);
    };

    return (
        <Section className="bg-[#0c0a08]" dark>
            <div className="max-w-4xl mx-auto">
                <Reveal className="text-center mb-12">
                    <h2 className="heading-section text-white">Frequently Asked Questions</h2>
                    <p className="text-white/60 mt-4">Find answers to common questions about Avinea</p>
                </Reveal>

                <Reveal delay={0.1}>
                    <div className="bg-white/5 rounded-2xl p-6 md:p-8">
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
            </div>
        </Section>
    );
}

