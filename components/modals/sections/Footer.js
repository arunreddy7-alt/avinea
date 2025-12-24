"use client";

import Image from "next/image";
import { navLinks } from "@/app/data";

export function Footer({ onScrollTo, onOpenEnquiry }) {
    return (
        <footer className="bg-[#F2F0E9] text-[#1a1a1a] py-24 px-6 relative border-t border-black/5">
            <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-12 gap-12 mb-20">
                    <div className="md:col-span-5 space-y-8">
                        <div className="relative w-[180px] h-[60px]">
                            <Image
                                src="/avinea-logo.png"
                                alt="Avinea"
                                fill
                                className="object-contain object-left"
                            />
                        </div>
                        <p className="text-lg font-light leading-relaxed text-black/80 max-w-sm">
                            A private sanctuary crafted for modern connoisseurs. Experience the pinnacle of urban living in Pune's most coveted address.
                        </p>
                        <div className="pt-8">
                            <p className="text-xs font-bold uppercase tracking-[0.15em] text-accent-dark mb-3">Location</p>
                            <p className="text-2xl font-serif text-black/90">Falcon Street, Near IT Park, Pune</p>
                        </div>
                    </div>

                    <div className="md:col-span-2 md:col-start-7">
                        <h4 className="text-xs font-bold uppercase tracking-[0.15em] text-black/40 mb-8 border-b border-black/5 pb-4">Explore</h4>
                        <ul className="space-y-4">
                            {navLinks.map(l => (
                                <li key={l.href}>
                                    <button onClick={() => onScrollTo(l.href.slice(1))} className="hover:text-accent-dark transition-colors text-base font-normal text-black/70 hover:text-black">
                                        {l.label}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="md:col-span-3">
                        <h4 className="text-xs font-bold uppercase tracking-[0.15em] text-black/40 mb-8 border-b border-black/5 pb-4">Connect</h4>
                        <ul className="space-y-4 text-base font-normal text-black/70">
                            <li><a href="tel:+910000000000" className="hover:text-accent-dark transition-colors block py-1 border-b border-black/5 hover:border-accent/30">+91 000 000 0000</a></li>
                            <li><a href="mailto:sales@avinea.com" className="hover:text-accent-dark transition-colors block py-1 border-b border-black/5 hover:border-accent/30">sales@avinea.com</a></li>
                        </ul>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-black/10 text-xs tracking-[0.15em] uppercase text-black/40 font-medium">
                    <p>© {new Date().getFullYear()} Vyom Sigma. All rights reserved.</p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <a href="#" className="hover:text-black transition-colors">Privacy Policy</a>
                        <span className="text-accent-dark">RERA Registered</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}