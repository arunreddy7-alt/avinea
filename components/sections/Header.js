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

    const handleSmoothScroll = (id) => {
        setMobileMenuOpen(false);
        const element = document.getElementById(id);
        if (element) {
            window.scrollTo({
                top: element.offsetTop - 80,
                behavior: "smooth",
            });
        }
    };

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${isScrolled
                ? "bg-white/90 backdrop-blur-md py-4 shadow-sm border-b border-black/5"
                : "bg-transparent py-8 border-transparent"
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                <div className="flex items-center gap-2 relative z-50">
                    <Image
                        src="/avinea-logo.png"
                        alt="Avinea"
                        width={140}
                        height={50}
                        className="object-contain"
                    />
                </div>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-10">
                    {navLinks.map((link) => (
                        <button
                            key={link.href}
                            onClick={() => handleSmoothScroll(link.href.slice(1))}
                            className={`text-xs font-bold uppercase tracking-[0.15em] transition-all duration-300 relative group ${isScrolled
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
                        className={`px-8 py-3 rounded-none border text-xs font-bold uppercase tracking-[0.2em] transition-all duration-500 ${isScrolled
                            ? "border-black text-black hover:bg-black hover:text-white"
                            : "border-white/30 text-white hover:bg-white hover:text-black hover:border-white"
                            }`}
                    >
                        Enquire
                    </button>
                </nav>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden relative z-50 p-2"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? (
                        <X className={isScrolled ? "text-black" : "text-white"} />
                    ) : (
                        <Menu className={isScrolled ? "text-black" : "text-white"} />
                    )}
                </button>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {mobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="absolute top-0 left-0 right-0 bg-white p-6 pt-24 pb-12 shadow-xl md:hidden border-b border-black/5 flex flex-col gap-6"
                        >
                            {navLinks.map((link) => (
                                <button
                                    key={link.href}
                                    onClick={() => handleSmoothScroll(link.href.slice(1))}
                                    className="text-lg font-serif text-black/80 text-left border-b border-black/5 pb-2"
                                >
                                    {link.label}
                                </button>
                            ))}
                            <button
                                onClick={onOpenEnquiry}
                                className="w-full py-4 bg-accent text-white font-bold uppercase tracking-widest rounded-lg"
                            >
                                Enquire Now
                            </button>
                            <div className="flex items-center gap-3 text-sm text-black/60 pt-4">
                                <Phone className="w-4 h-4" />
                                <span>+91 000 000 0000</span>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </header>
    );
}
