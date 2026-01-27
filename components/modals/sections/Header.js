"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X, Phone } from "lucide-react";
import { navLinks } from "@/app/data";
import { motion, AnimatePresence } from "framer-motion";

export function Header({ onOpenEnquiry }) {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [mobileMenuOpen]);

const handleSmoothScroll = (id) => {
        setMobileMenuOpen(false);
        const element = document.getElementById(id);
        if (element) {
            // Lenis handles smooth scroll natively with scrollIntoView
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-700 ${isScrolled
                ? "bg-white/90 backdrop-blur-md py-3 sm:py-4 shadow-sm border-b border-black/5"
                : "bg-transparent py-5 sm:py-8 border-transparent"
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center relative">
                <div className="flex items-center gap-2 relative z-[110]">
                    <Image
                        src="/logo.webp"
                        alt="Avinea"
                        width={100} height={40}
                        className="object-contain w-[100px] sm:w-[140px]"
                    />
                </div>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-6 lg:gap-10">
                    {navLinks.map((link) => (
                        <button
                            key={link.href}
                            onClick={() => handleSmoothScroll(link.href.slice(1))}
                            className={`text-[10px] lg:text-xs font-bold uppercase tracking-[0.15em] transition-all duration-300 relative group ${isScrolled
                                ? "text-black/60 hover:text-black"
                                : "text-white/70 hover:text-white"
                                }`}
                        >
                            <span className="relative z-10">{link.label}</span>
                            <span className={`absolute -bottom-2 left-0 w-0 h-px bg-accent transition-all duration-300 group-hover:w-full ${isScrolled ? "bg-black" : "bg-white"}`} />
                        </button>
                    ))}
                    <button
                        onClick={onOpenEnquiry}
                        className={`px-6 lg:px-8 py-2.5 lg:py-3 rounded-none border text-[10px] lg:text-xs font-bold uppercase tracking-[0.2em] transition-all duration-500 ${isScrolled
                            ? "border-black text-black hover:bg-black hover:text-white"
                            : "border-white/30 text-white hover:bg-white hover:text-black hover:border-white"
                            }`}
                    >
                        Enquire
                    </button>
                </nav>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden relative z-[110] p-2 ml-auto"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? (
                        <X className="text-black w-6 h-6" />
                    ) : (
                        <Menu className={`${isScrolled ? 'text-black' : 'text-white'} w-6 h-6`} />
                    )}
                </button>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {mobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="fixed top-0 left-0 right-0 bg-white p-4 pt-28 pb-8 shadow-xl md:hidden border-b border-black/5 flex flex-col gap-3 z-[100] max-h-screen overflow-y-auto"
                        >
                            {navLinks.map((link) => (
                                <button
                                    key={link.href}
                                    onClick={() => handleSmoothScroll(link.href.slice(1))}
                                    className="text-base font-serif text-black/80 text-left border-b border-black/5 pb-2"
                                >
                                    {link.label}
                                </button>
                            ))}
                            <button
                                onClick={onOpenEnquiry}
                                className="w-full py-3 bg-accent text-white font-bold uppercase tracking-widest rounded-lg text-xs mt-2"
                            >
                                Schedule Visit
                            </button>
                            <div className="flex items-center gap-3 text-sm text-black/60 pt-2">
                                <Phone className="w-4 h-4" />
                                <span>+91 9121772320</span>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </header>
    );
}

