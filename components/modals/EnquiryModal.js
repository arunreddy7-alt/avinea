"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
const FORMSPREE_ENDPOINT = "https://formspree.io/f/xpqqzoab";

export function EnquiryModal({ isOpen, onClose, mode = "enquiry", onSubmit }) {
    const isVisit = mode === "visit";
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        whatsapp: "",
        email: "",
        message: "",
        interests: []
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitError, setSubmitError] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
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
            };

            const response = await fetch(FORMSPREE_ENDPOINT, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify({
                    ...emailData,
                    formType: isVisit ? "visit" : "enquiry"
                })
            });
            const result = await response.json().catch(() => ({}));

            if (response.ok) {
                // Call the original onSubmit handler
                if (onSubmit) {
                    onSubmit();
                }
                // Reset form
                setFormData({
                    name: "",
                    phone: "",
                    whatsapp: "",
                    email: "",
                    message: "",
                    interests: []
                });
            } else {
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
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-[#0c0a08]/95 backdrop-blur-md z-[101]"
                        onClick={onClose}
                    />
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="fixed inset-0 z-[102] pointer-events-none p-4 md:p-8 overflow-hidden flex items-start md:items-center justify-center pt-27 md:pt-0"
                    >
                        <div className="bg-[#1a1a1a] pointer-events-auto w-full max-w-[300px] sm:max-w-md overflow-hidden flex flex-col shadow-2xl border border-white/10 max-h-[calc(100vh-5rem)] md:max-h-[85vh] rounded-xl md:rounded-2xl">
                            {/* Modal Header */}
                            <div className="p-4 sm:p-4 md:p-8 border-b border-white/5 flex justify-between items-center bg-black/20">
                                <div>
                                    <p className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-accent mb-1 sm:mb-2">
                                        {isVisit ? "" : "Project Enquiry"}
                                    </p>
                                    <h3 className="font-serif text-lg sm:text-2xl text-white">
                                        {isVisit ? "Enquire Now" : "Enquire Form"}
                                    </h3>
                                </div>
                                <button
                                    onClick={onClose}
                                    className="p-1.5 sm:p-2 hover:bg-white/10 rounded-full transition-colors"
                                >
                                    <X className="w-5 h-5 sm:w-6 sm:h-6 text-white/40" />
                                </button>
                            </div>

                            {/* Modal Body */}
                            <div className="p-4 sm:p-4 md:p-8 max-h-[calc(100vh-12rem)] md:max-h-[70vh] overflow-y-auto">
                                <form
                                    className="space-y-3 sm:space-y-5"
                                    onSubmit={handleSubmit}
                                    action={FORMSPREE_ENDPOINT}
                                    method="POST"
                                >

                                    <div className="space-y-6 sm:space-y-3">
                                        <input 
                                            type="text" 
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="Full Name" 
                                            required 
                                            className="w-full px-0 py-2 sm:py-3 bg-transparent border-b border-white/10 focus:border-accent focus:outline-none placeholder:text-white/30 text-sm sm:text-lg text-white transition-colors" 
                                        />
                                        <input 
                                            type="tel" 
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            placeholder="Phone Number" 
                                            required 
                                            className="w-full px-0 py-2 sm:py-3 bg-transparent border-b border-white/10 focus:border-accent focus:outline-none placeholder:text-white/30 text-sm sm:text-lg text-white transition-colors" 
                                        />
                                        <input 
                                            type="tel" 
                                            name="whatsapp"
                                            value={formData.whatsapp}
                                            onChange={handleChange}
                                            placeholder="WhatsApp Number" 
                                            className="w-full px-0 py-2 sm:py-3 bg-transparent border-b border-white/10 focus:border-accent focus:outline-none placeholder:text-white/30 text-sm sm:text-lg text-white transition-colors" 
                                        />
                                        <input 
                                            type="email" 
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="Email Address" 
                                            required 
                                            className="w-full px-0 py-2 sm:py-3 bg-transparent border-b border-white/10 focus:border-accent focus:outline-none placeholder:text-white/30 text-sm sm:text-lg text-white transition-colors" 
                                        />
                                    </div>

                                    {isVisit ? (
                                       <div className="p-3 sm:p-3 md:p-4 bg-white/5 border border-white/10 rounded-lg">
                                       <p className="text-[10px] font-bold uppercase tracking-widest text-[#997B29] mb-2">Interests</p>
<div className="grid grid-cols-3 gap-2">
                                           {["2 BHK", "3 BHK", "4 BHK", "5 BHK", "6 BHK"].map(item => (
                                               <label key={item} className="flex items-center gap-1.5 cursor-pointer group">
                                                   <div className="relative w-5 h-5 sm:w-4 sm:h-4 rounded-none border border-white/20 flex items-center justify-center group-hover:border-[#997B29] transition-colors flex-shrink-0 checkbox-bg">
                                                       <input
                                                           type="checkbox"
                                                           checked={formData.interests.includes(item)}
                                                           onChange={() => handleInterestChange(item)}
                                                           className="absolute inset-0 w-full h-full cursor-pointer appearance-none z-20"
                                                       />
                                                       <div className={`w-full h-full bg-[#997B29] transition-opacity pointer-events-none checkbox-bg-fill ${formData.interests.includes(item) ? 'opacity-100' : 'opacity-0'}`} />
                                                       <svg className={`absolute w-3 h-3 sm:w-3 sm:h-3 text-white transition-opacity pointer-events-none checkbox-check ${formData.interests.includes(item) ? 'opacity-100' : 'opacity-0'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                           <path strokeWidth="3" strokeLinecap="round" d="M5 12l5 5L20 7"/>
                                                       </svg>
                                                   </div>
                                                   <span className="text-xs sm:text-sm text-white/70 truncate">{item}</span>
                                               </label>
                                           ))}
                                       </div>
                                   </div>
                           
                                    

                                           
                                    ) : (
                                        <textarea 
                                            rows={2} 
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            placeholder="Tell us about your requirements..." 
                                            className="w-full px-3 py-2 sm:px-4 sm:py-3 bg-white/5 border border-white/10 text-white text-sm sm:text-base rounded-lg focus:border-accent placeholder:text-white/30 resize-none" 
                                        />
                                    )}

                                    {submitError && (
                                        <div className="text-red-400 text-sm mt-2">{submitError}</div>
                                    )}

                                    <button 
                                        type="submit" 
                                        disabled={isSubmitting}
                                        className="w-full py-4 sm:py-5 bg-accent hover:bg-white text-black font-bold uppercase tracking-[0.2em] transition-all duration-500 mt-3 sm:mt-4 group disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        {isSubmitting ? "Sending..." : (isVisit ? "Submit" : "Send Enquiry")}
                                    </button>
                                </form>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}