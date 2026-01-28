"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, X } from "lucide-react";

import { Reveal } from "@/components/modals/ui/Reveal";
const FORMSPREE_ENDPOINT = "https://formspree.io/f/xpqqzoab";
const BROCHURE_URL = "/AVINEA%20by%20Vyom-Sigma%20(6).pdf";

export function FinalCTA({ onBookVisit, onRequestDetails }) {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        whatsapp: "",
        email: "",
        interests: []
    });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitError, setSubmitError] = useState(null);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleInterestChange = (interest) => {
        setFormData(prev => ({
            ...prev,
            interests: prev.interests.includes(interest)
                ? prev.interests.filter(i => i !== interest)
                : [...prev.interests, interest]
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitError(null);

        try {
            const emailData = {
                ...formData,
                interests: formData.interests.join(", ") || "Not specified",
                formType: "enquiry"
            };

            const response = await fetch(FORMSPREE_ENDPOINT, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify(emailData)
            });
            if (response.ok) {
                setIsSubmitted(true);
                setFormData({ name: "", phone: "", whatsapp: "", email: "", interests: [] });

                // Trigger brochure download after successful form submission
                try {
                    const link = document.createElement("a");
                    link.href = BROCHURE_URL;
                    link.download = "";
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                } catch (downloadError) {
                    console.error("Brochure download error:", downloadError);
                }

                setTimeout(() => {
                    setIsSubmitted(false);
                }, 3000);
            } else {
                const result = await response.json().catch(() => ({}));
                setSubmitError(result?.error || "Failed to send email. Please try again.");
            }
        } catch (error) {
            console.error("Form submission error:", error);
            setSubmitError("An error occurred. Please try again or contact us directly.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (

        <section className="relative py-20 px-6 overflow-hidden flex items-center min-h-[80vh]">
            {/* Background Image with Black Gradient */}
            <div className="absolute inset-0">
                <div 
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: 'url(/img.webp)',
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
                                className="hidden sm:block group relative px-8 py-4 rounded-full font-bold uppercase tracking-widest overflow-hidden transition-all duration-500 hover:scale-105 text-[10px] w-full sm:w-auto bg-gradient-to-r from-[#997B29] via-[#FFF5B2] to-[#997B29] bg-[length:200%_auto] animate-flow text-black"
                            >
                                Enquire Now
                            </button>

                            <button
                                type="button"
                                onClick={onRequestDetails}
                                className="group relative px-6 sm:px-8 py-4 sm:py-4 rounded-full font-bold uppercase tracking-widest overflow-hidden transition-all duration-500 hover:scale-105 text-xs sm:text-[10px] w-full sm:w-auto sm:bg-transparent sm:border sm:border-white/10 sm:text-white/70 mr-8 sm:mr-0 bg-gradient-to-r from-[#997B29] via-[#FFF5B2] to-[#997B29] bg-[length:200%_auto] animate-flow text-black download-btn-gold text-center"
                            >
                                <span className="relative z-10 flex items-center justify-center gap-2">
                                    Download Brochure
                                </span>
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
                                <form
                                    onSubmit={handleSubmit}
                                    className="space-y-5"
                                    action={FORMSPREE_ENDPOINT}
                                    method="POST"
                                >
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
                                            type="tel" 
                                            name="whatsapp"
                                            value={formData.whatsapp}
                                            onChange={handleChange}
                                            placeholder="WhatsApp Number" 
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
                                       <div className="p-3 md:p-4 bg-white/5 border border-white/10 rounded-lg">
                                                <p className="text-xs font-bold uppercase tracking-widest text-[#997B29] mb-2 md:mb-3">Interests</p>
                                                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                                                    {["2 BHK", "3 BHK", "4 BHK", "5 BHK", "6 BHK"].map(item => (
                                                        <label key={item} className="flex items-center gap-2 cursor-pointer group">
                                                            <div className="relative w-4 h-4 rounded-none border border-white/20 flex items-center justify-center group-hover:border-[#997B29] transition-colors flex-shrink-0 checkbox-bg">
                                                                <input
                                                                    type="checkbox"
                                                                    checked={formData.interests.includes(item)}
                                                                    onChange={() => handleInterestChange(item)}
                                                                    className="absolute inset-0 w-full h-full cursor-pointer appearance-none z-20"
                                                                />
                                                                <div className={`w-full h-full bg-[#997B29] transition-opacity pointer-events-none checkbox-bg-fill ${formData.interests.includes(item) ? 'opacity-100' : 'opacity-0'}`} />
                                                                <svg className={`absolute w-2.5 h-2.5 text-white transition-opacity pointer-events-none checkbox-check ${formData.interests.includes(item) ? 'opacity-100' : 'opacity-0'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                    <path strokeWidth="3" strokeLinecap="round" d="M5 12l5 5L20 7"/>
                                                                </svg>
                                                            </div>
                                                            <span className="text-xs sm:text-sm text-white/70 truncate">{item}</span>
                                                        </label>
                                                    ))}
                                                </div>
                                            </div>
                                    </div>

                                    {submitError && (
                                        <div className="text-red-400 text-sm mt-2">{submitError}</div>
                                    )}

                                    <button 
                                        type="submit" 
                                        disabled={isSubmitting}
                                        className="w-full py-4 bg-gradient-to-r from-[#997B29] via-[#FFF5B2] to-[#997B29] bg-[length:200%_auto] animate-flow text-black font-bold uppercase tracking-widest transition-all duration-500 hover:scale-[1.02] text-[10px] rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        {isSubmitting ? "Sending..." : "Submit Enquiry"}
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

