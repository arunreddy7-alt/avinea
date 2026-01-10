"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, X } from "lucide-react";
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
        answer: "Avinea is developed by Vyom Sigma Developers, bringing a refined approach to modern living in Pune. Rooted in a strong foundation of industry expertise and understanding, the developer is known for quality construction, on-schedule delivery, and lifestyle-driven design."
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

export function FAQ({ onBookVisit, onOpenEnquiry }) {
    const [openIndex, setOpenIndex] = useState(0);
    const [showScheduleForm, setShowScheduleForm] = useState(false);
    const [showBrochureForm, setShowBrochureForm] = useState(false);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? -1 : index);
    };

    const handleScheduleSubmit = (e) => {
        e.preventDefault();
        alert("Thank you! We will contact you shortly to confirm your visit.");
        setShowScheduleForm(false);
    };

    const handleBrochureSubmit = (e) => {
        e.preventDefault();
        alert("Thank you! Your brochure will be sent to your email.");
        setShowBrochureForm(false);
    };

    return (
        <Section className="bg-[#1a1612] relative" dark>
            {/* Background Image with Black Gradient Overlay */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/faq-bg2.jpg"
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
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
                        <button
                            onClick={() => setShowScheduleForm(true)}
                            className="group relative inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[#997B29] via-[#FFF5B2] to-[#997B29] bg-[length:200%_auto] animate-flow text-black rounded-full font-bold uppercase tracking-widest overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-[0_0_30px_-5px_rgba(212,175,55,0.6)] text-[10px]"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                Schedule a Visit
                            </span>
                        </button>
                        
                    </div>
                </Reveal>

                {/* Popup Modal */}
                <AnimatePresence>
                    {showScheduleForm && (
                        <>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="fixed inset-0 bg-black/80 backdrop-blur-md z-[100]"
                                onClick={() => setShowScheduleForm(false)}
                            />
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                                className="fixed inset-0 z-[101] pointer-events-none p-3 md:p-8 overflow-y-auto flex items-start justify-center pt-20 md:pt-32"
                            >
                                <div className="bg-[#1a1a1a] pointer-events-auto w-full max-w-sm md:max-w-md overflow-hidden shadow-2xl border border-white/10 rounded-xl mx-3 md:mx-0">
                                    {/* Modal Header */}
                                    <div className="p-4 md:p-6 border-b border-white/10 flex justify-between items-center bg-black/20">
                                        <div>
                                            <h3 className="font-serif text-lg md:text-xl text-white">Schedule Your Visit</h3>
                                            <p className="text-xs md:text-xs text-white/50 mt-1">Fill in your details</p>
                                        </div>
                                        <button
                                            onClick={() => setShowScheduleForm(false)}
                                            className="p-1.5 md:p-2 hover:bg-white/10 rounded-full transition-colors"
                                        >
                                            <X className="w-4 h-4 md:w-5 md:h-5 text-white/40" />
                                        </button>
                                    </div>

                                    {/* Modal Body */}
                                    <div className="p-4 md:p-6">
                                        <form onSubmit={handleScheduleSubmit} className="space-y-4">
                                            <input
                                                type="text"
                                                placeholder="Full Name"
                                                required
                                                className="w-full px-4 py-3 bg-white/5 border border-white/10 focus:border-[#997B29] focus:outline-none placeholder:text-white/30 text-white rounded-lg transition-colors text-sm"
                                            />
                                            <input
                                                type="tel"
                                                placeholder="Phone Number"
                                                required
                                                className="w-full px-4 py-3 bg-white/5 border border-white/10 focus:border-[#997B29] focus:outline-none placeholder:text-white/30 text-white rounded-lg transition-colors text-sm"
                                            />
                                            <input
                                                type="tel"
                                                placeholder="WhatsApp Number"
                                                className="w-full px-4 py-3 bg-white/5 border border-white/10 focus:border-[#997B29] focus:outline-none placeholder:text-white/30 text-white rounded-lg transition-colors text-sm"
                                            />
                                            <input
                                                type="email"
                                                placeholder="Email Address"
                                                required
                                                className="w-full px-4 py-3 bg-white/5 border border-white/10 focus:border-[#997B29] focus:outline-none placeholder:text-white/30 text-white rounded-lg transition-colors text-sm"
                                            />
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                                <div className="relative">
                                                    <input
                                                        type="time"
                                                        required
                                                        className="w-full px-3 py-3 bg-white/5 border border-white/10 focus:border-[#997B29] focus:outline-none text-white rounded-lg transition-colors text-sm [color-scheme:dark]"
                                                    />
                                                </div>
                                                <div className="relative">
                                                    <input
                                                        type="date"
                                                        required
                                                        className="w-full px-3 py-3 bg-white/5 border border-white/10 focus:border-[#997B29] focus:outline-none text-white rounded-lg transition-colors text-sm [color-scheme:dark]"
                                                    />
                                                </div>
                                            </div>
                                            <div className="p-4 bg-white/5 border border-white/10 rounded-lg">
                                                <p className="text-xs font-bold uppercase tracking-widest text-[#997B29] mb-3">Interests</p>
                                                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                                                    {["2 BHK", "3 BHK", "4 BHK", "5 BHK", "6 BHK"].map(item => (
                                                        <label key={item} className="flex items-center gap-2 cursor-pointer group">
                                                            <div className="relative w-4 h-4 rounded-none border border-white/20 flex items-center justify-center group-hover:border-[#997B29] transition-colors flex-shrink-0 checkbox-bg">
                                                                <input
                                                                    type="checkbox"
                                                                    className="absolute inset-0 w-full h-full cursor-pointer appearance-none z-20"
                                                                />
                                                                <div className="w-full h-full bg-[#997B29] opacity-0 transition-opacity pointer-events-none checkbox-bg-fill" />
                                                                <svg className="absolute w-3 h-3 text-white opacity-0 transition-opacity pointer-events-none checkbox-check" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                    <path strokeWidth="3" strokeLinecap="round" d="M5 12l5 5L20 7"/>
                                                                </svg>
                                                            </div>
                                                            <span className="text-sm text-white/70 truncate">{item}</span>
                                                        </label>
                                                    ))}
                                                </div>
                                            </div>
                                            <button
                                                type="submit"
                                                className="w-full py-3 md:py-4 bg-gradient-to-r from-[#997B29] via-[#FFF5B2] to-[#997B29] bg-[length:200%_auto] animate-flow text-black font-bold uppercase tracking-widest rounded-full transition-all duration-500 hover:scale-105 text-xs"
                                            >
                                                Submit
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </motion.div>
                        </>
                    )}
                </AnimatePresence>
            </div>
        </Section>
    );
}

