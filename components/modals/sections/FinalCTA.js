"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, X } from "lucide-react";

import { Reveal } from "@/components/modals/ui/Reveal";

export function FinalCTA({ onBookVisit, onRequestDetails }) {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        message: ""
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate form submission
        setIsSubmitted(true);
        setTimeout(() => {
            setIsSubmitted(false);
            setFormData({ name: "", phone: "", email: "", message: "" });
        }, 3000);
    };

    return (

        <section className="relative py-20 px-6 overflow-hidden flex items-center min-h-[80vh]">
            {/* Background Image with Black Gradient */}
            <div className="absolute inset-0">
                <div 
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: 'url(/img.jpg)',
                    }}
                />
                {/* Black Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/80" />
                {/* Additional dark overlay for better text readability */}
                <div className="absolute inset-0 bg-[#050505]/50" />
            </div>
            {/* Noise Texture */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay pointer-events-none" />

            <div className="max-w-6xl mx-auto w-full relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Left Side - Content */}
                    <div className="text-left space-y-8">
                        <Reveal>
                            <div className="space-y-8">
                                <span className="inline-block px-4 py-1.5 rounded-full border border-accent/20 bg-accent/5 backdrop-blur-md text-[10px] font-bold uppercase tracking-[0.3em] text-accent">
                                    Final Phase
                                </span>

                                <h2 className="text-4xl md:text-5xl lg:text-6xl font-sans font-light text-white leading-tight tracking-tight mix-blend-color-dodge">
                                    Your Perfect Home <br />
                                    <span className="text-white/40 font-thin">Awaits You.</span>
                                </h2>

                                <p className="body-lg text-white/60 max-w-xl leading-loose font-light text-base">
                                    Don't just dream about a better life. Live it.
                                    Schedule your viewing today and take the first step.
                                </p>
                            </div>
                        </Reveal>

                        <Reveal delay={0.2} className="flex flex-col sm:flex-row gap-4">
                            <button
                                onClick={onBookVisit}
                                className="group relative px-8 py-4 bg-gradient-to-r from-[#997B29] via-[#FFF5B2] to-[#997B29] bg-[length:200%_auto] animate-flow text-black rounded-full font-bold uppercase tracking-widest overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-[0_0_30px_-5px_rgba(212,175,55,0.6)] text-[10px] w-full sm:w-auto"
                            >
                                <span className="relative z-10 flex items-center justify-center gap-2">
                                    Enquire Now <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                                </span>
                            </button>

                            <button
                                onClick={onBookVisit}
                                className="px-8 py-4 bg-transparent border border-white/10 text-white/70 hover:bg-white/5 hover:border-white/30 hover:text-white rounded-full font-bold uppercase tracking-widest transition-all duration-300 backdrop-blur-sm text-[10px] w-full sm:w-auto"
                            >
                                Download Brochure
                            </button>
                        </Reveal>
                    </div>

                    {/* Right Side - Enquiry Form */}
                    <Reveal delay={0.3}>
                        <div className="bg-black/50 backdrop-blur-xl border border-white/10 rounded-2xl p-6 md:p-8">
                            {isSubmitted ? (
                                <div className="text-center py-12">
                                    <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <svg className="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-serif text-white mb-2">Thank You!</h3>
                                    <p className="text-white/60">Our team will contact you shortly.</p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-5">
                                    <div className="text-center mb-6">
                                        <h3 className="text-xl font-serif text-white">Enquire Now</h3>
                                        <p className="text-white/50 text-sm mt-1">Fill in your details and we'll call you back</p>
                                    </div>

                                    <div className="space-y-4">
                                        <input 
                                            type="text" 
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="Full Name" 
                                            required
                                            className="w-full px-4 py-3 bg-white/5 border border-white/10 focus:border-accent focus:outline-none placeholder:text-white/30 text-white transition-colors rounded-lg"
                                        />
                                        <input 
                                            type="tel" 
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            placeholder="Phone Number" 
                                            required
                                            className="w-full px-4 py-3 bg-white/5 border border-white/10 focus:border-accent focus:outline-none placeholder:text-white/30 text-white transition-colors rounded-lg"
                                        />
                                        <input 
                                            type="email" 
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="Email Address" 
                                            required
                                            className="w-full px-4 py-3 bg-white/5 border border-white/10 focus:border-accent focus:outline-none placeholder:text-white/30 text-white transition-colors rounded-lg"
                                        />
                                        <textarea 
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            placeholder="Tell us about your requirements..." 
                                            rows={3}
                                            className="w-full px-4 py-3 bg-white/5 border border-white/10 focus:border-accent focus:outline-none placeholder:text-white/30 text-white transition-colors rounded-lg resize-none"
                                        />
                                    </div>

                                    <button 
                                        type="submit" 
                                        className="w-full py-4 bg-gradient-to-r from-[#997B29] via-[#FFF5B2] to-[#997B29] bg-[length:200%_auto] animate-flow text-black font-bold uppercase tracking-widest transition-all duration-500 hover:scale-[1.02] text-[10px] rounded-lg"
                                    >
                                        Submit Enquiry
                                    </button>
                                </form>
                            )}
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    );
}

