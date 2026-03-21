"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { getAllTrackingParams } from "@/lib/trackingUtils";
import { submitInquiryForm } from "@/lib/submitInquiryForm";

const selectClass = "w-full px-0 py-2 sm:py-3 bg-transparent border-b border-white/10 focus:border-accent focus:outline-none text-sm sm:text-lg text-white transition-colors appearance-none cursor-pointer";

export function EnquiryModal({ isOpen, onClose, mode = "enquiry", onSubmit }) {
    const isVisit = mode === "visit";
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        configuration: "",
        budget: "",
        timeline: "",
        siteVisit: "",
    });
    const [trackingData, setTrackingData] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitError, setSubmitError] = useState(null);

    // Load tracking params when modal opens
    useEffect(() => {
        if (isOpen) {
            const params = getAllTrackingParams();
            setTrackingData(params);
        }
    }, [isOpen]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitError(null);

        try {
            await submitInquiryForm({
                ...formData,
                ...trackingData,
                formType: isVisit ? "visit" : "enquiry",
            });

            if (onSubmit) {
                onSubmit();
            }
            setFormData({
                name: "",
                phone: "",
                email: "",
                configuration: "",
                budget: "",
                timeline: "",
                siteVisit: "",
            });
        } catch (error) {
            console.error("Form submission error:", error);
            setSubmitError(error.message || "An error occurred. Please try again.");
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
                                >
                                    {/* Hidden fields for Google Ads tracking */}
                                    {Object.entries(trackingData).map(([key, value]) => (
                                        <input
                                            key={key}
                                            type="hidden"
                                            name={key}
                                            value={value}
                                        />
                                    ))}

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
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="Email Address"
                                            required
                                            className="w-full px-0 py-2 sm:py-3 bg-transparent border-b border-white/10 focus:border-accent focus:outline-none placeholder:text-white/30 text-sm sm:text-lg text-white transition-colors"
                                        />
                                    </div>

                                    <div className="space-y-3 sm:space-y-4">
                                        <div>
                                            <label className="text-[10px] font-bold uppercase tracking-widest text-[#997B29] mb-1 block">Configuration</label>
                                            <select
                                                name="configuration"
                                                value={formData.configuration}
                                                onChange={handleChange}
                                                className={selectClass}
                                            >
                                                <option value="" className="bg-[#1a1a1a]">Select configuration</option>
                                                <option value="2 BHK" className="bg-[#1a1a1a]">2 BHK</option>
                                                <option value="3 BHK" className="bg-[#1a1a1a]">3 BHK</option>
                                                <option value="4 BHK" className="bg-[#1a1a1a]">4 BHK</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label className="text-[10px] font-bold uppercase tracking-widest text-[#997B29] mb-1 block">Budget</label>
                                            <select
                                                name="budget"
                                                value={formData.budget}
                                                onChange={handleChange}
                                                className={selectClass}
                                            >
                                                <option value="" className="bg-[#1a1a1a]">Select budget</option>
                                                <option value="Rs. 1.2 Cr - Rs. 1.5 Cr" className="bg-[#1a1a1a]">Rs. 1.2 Cr - Rs. 1.5 Cr</option>
                                                <option value="Rs. 1.5 Cr - Rs. 2 Cr" className="bg-[#1a1a1a]">Rs. 1.5 Cr - Rs. 2 Cr</option>
                                                <option value="Rs. 2 Cr+" className="bg-[#1a1a1a]">Rs. 2 Cr+</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label className="text-[10px] font-bold uppercase tracking-widest text-[#997B29] mb-1 block">Timeline</label>
                                            <select
                                                name="timeline"
                                                value={formData.timeline}
                                                onChange={handleChange}
                                                className={selectClass}
                                            >
                                                <option value="" className="bg-[#1a1a1a]">When are you planning to buy?</option>
                                                <option value="Immediately (0-3 months)" className="bg-[#1a1a1a]">Immediately (0-3 months)</option>
                                                <option value="3-6 months" className="bg-[#1a1a1a]">3-6 months</option>
                                                <option value="6-12 months" className="bg-[#1a1a1a]">6-12 months</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label className="text-[10px] font-bold uppercase tracking-widest text-[#997B29] mb-1 block">Site Visit</label>
                                            <select
                                                name="siteVisit"
                                                value={formData.siteVisit}
                                                onChange={handleChange}
                                                className={selectClass}
                                            >
                                                <option value="" className="bg-[#1a1a1a]">Would you like to schedule a visit?</option>
                                                <option value="Yes. this weekend" className="bg-[#1a1a1a]">Yes, this weekend</option>
                                                <option value="Yes, next week" className="bg-[#1a1a1a]">Yes, next week</option>
                                                <option value="Need more details first" className="bg-[#1a1a1a]">Need more details first</option>
                                            </select>
                                        </div>
                                    </div>

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
