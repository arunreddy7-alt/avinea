"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export function EnquiryModal({ isOpen, onClose, mode = "enquiry", onSubmit }) {
    const isVisit = mode === "visit";

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit();
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-[#0c0a08]/95 backdrop-blur-md z-[60]"
                        onClick={onClose}
                    />
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="fixed inset-0 flex items-center justify-center z-[61] p-4 pointer-events-none"
                    >
                        <div className="bg-[#1a1a1a] pointer-events-auto w-full max-w-lg overflow-hidden flex flex-col shadow-2xl border border-white/10">
                            {/* Modal Header */}
                            <div className="p-8 border-b border-white/5 flex justify-between items-center bg-black/20">
                                <div>
                                    <p className="text-xs font-bold uppercase tracking-widest text-accent mb-2">
                                        {isVisit ? "Private Tour" : "Project Enquiry"}
                                    </p>
                                    <h3 className="font-serif text-2xl text-white">
                                        {isVisit ? "Schedule Your Visit" : "Get In Touch"}
                                    </h3>
                                </div>
                                <button
                                    onClick={onClose}
                                    className="p-2 hover:bg-white/10 rounded-full transition-colors"
                                >
                                    <X className="w-6 h-6 text-white/40" />
                                </button>
                            </div>

                            {/* Modal Body */}
                            <div className="p-8 max-h-[70vh] overflow-y-auto">
                                <form className="space-y-5" onSubmit={handleSubmit}>

                                    <div className="space-y-4">
                                        <input type="text" placeholder="Full Name" required className="w-full px-0 py-3 bg-transparent border-b border-white/10 focus:border-accent focus:outline-none placeholder:text-white/30 text-lg text-white transition-colors" />
                                        <input type="tel" placeholder="Phone Number" required className="w-full px-0 py-3 bg-transparent border-b border-white/10 focus:border-accent focus:outline-none placeholder:text-white/30 text-lg text-white transition-colors" />
                                        <input type="email" placeholder="Email Address" required className="w-full px-0 py-3 bg-transparent border-b border-white/10 focus:border-accent focus:outline-none placeholder:text-white/30 text-lg text-white transition-colors" />
                                    </div>

                                    {isVisit ? (
                                        <div className="space-y-6 pt-4">
                                            <div className="grid grid-cols-2 gap-4">
                                                <div>
                                                    <label className="text-xs font-bold uppercase tracking-widest text-white/40 mb-2 block">Date</label>
                                                    <input type="date" required className="w-full px-4 py-3 bg-white/5 border border-white/10 text-white rounded-none focus:outline-none focus:border-accent text-sm" />
                                                </div>
                                                <div>
                                                    <label className="text-xs font-bold uppercase tracking-widest text-white/40 mb-2 block">Time</label>
                                                    <select className="w-full px-4 py-3 bg-white/5 border border-white/10 text-white rounded-none focus:outline-none focus:border-accent text-sm">
                                                        <option className="text-black">10:00 AM</option>
                                                        <option className="text-black">11:00 AM</option>
                                                        <option className="text-black">01:00 PM</option>
                                                        <option className="text-black">03:00 PM</option>
                                                        <option className="text-black">05:00 PM</option>
                                                    </select>
                                                </div>
                                            </div>

                                            <div className="p-4 bg-white/5 border border-white/10">
                                                <p className="text-xs font-bold uppercase tracking-widest text-accent mb-3">Interests</p>
                                                <div className="grid grid-cols-2 gap-2">
                                                    {["2 BHK", "3 BHK", "4 BHK", "5 BHK", "6 BHK"].map(item => (
                                                        <label key={item} className="flex items-center gap-2 cursor-pointer group">
                                                            <div className="w-4 h-4 rounded-none border border-white/20 flex items-center justify-center group-hover:border-accent transition-colors">
                                                                <input type="checkbox" className="opacity-0 w-full h-full cursor-pointer peer" />
                                                                <div className="w-2 h-2 bg-accent opacity-0 peer-checked:opacity-100 transition-opacity" />
                                                            </div>
                                                            <span className="text-sm text-white/70">{item}</span>
                                                        </label>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    ) : (
                                        <textarea rows={3} placeholder="Tell us about your requirements..." className="w-full px-4 py-3 bg-white/5 border border-white/10 text-white rounded-none focus:border-accent placeholder:text-white/30 resize-none" />
                                    )}

                                    <button type="submit" className="w-full py-5 bg-accent hover:bg-white text-black font-bold uppercase tracking-[0.2em] transition-all duration-500 mt-4 group">
                                        {isVisit ? "Confirm Appointment" : "Send Enquiry"}
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