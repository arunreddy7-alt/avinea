"use client";

import Image from "next/image";
import { navLinks } from "@/app/data";

export function Footer({ onScrollTo, onOpenEnquiry }) {
    return (
        <footer className="bg-[#F2F0E9] text-[#1a1a1a] py-16 px-4 sm:px-6 relative border-t border-black/5">
            <div className="max-w-7xl mx-auto">
                <div className="grid sm:grid-cols-2 lg:grid-cols-12 gap-8 mb-12 lg:mb-20">
                    <div className="sm:col-span-2 lg:col-span-5 space-y-6 lg:space-y-8">
                        <div className="relative w-[140px] h-[50px] sm:w-[180px] sm:h-[60px]">
                            <Image
                                src="/avinea-hadapsar-pune/logo1.png"
                                alt="Avinea"
                                fill
                                className="object-contain object-left"
                            />
                        </div>
                        <p className="text-sm sm:text-lg font-light leading-relaxed text-black/80 max-w-sm">
                            A private sanctuary crafted for modern connoisseurs. Experience the pinnacle of urban living in Pune's most coveted address.
                        </p>
                        {/* Mobile-only: Connect section after description, before Address */}
                        <div className="block sm:hidden">
                            <h4 className="text-[10px] font-bold uppercase tracking-[0.15em] text-black/40 mb-4 border-b border-black/5 pb-3">Connect</h4>
                            <ul className="space-y-3 text-sm font-normal text-black/70">
                                <li><a href="tel:+919121772320" className="hover:text-accent-dark transition-colors block py-1 border-b border-black/5 hover:border-accent/30">+91 9121772320</a></li>
                                <li><a href="mailto:crm@spacesphere.in" className="hover:text-accent-dark transition-colors block py-1 border-b border-black/5 hover:border-accent/30">crm@spacesphere.in</a></li>
                            </ul>
                        </div>
                        <div className="pt-4 lg:pt-8">
                            <p className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.15em] text-accent-dark mb-3">Address</p>
                            <div className="w-full h-[200px] sm:h-[280px] lg:h-[320px] rounded-xl overflow-hidden border border-black/10 shadow-sm">
                                <iframe
                                    title="Avinea Location"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4000.184061634295!2d73.93900887542819!3d18.509672482581706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c30050ade865%3A0xea1bbb321a9810ff!2sVyom%20Sigma%20Avinea!5e1!3m2!1sen!2sin!4v1768035808980!5m2!1sen!2sin"
                                    className="w-full h-full border-0"
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    allowFullScreen
                                />
                            </div>
                        </div>
                    </div>

                    <div className="sm:col-span-1 lg:col-span-2 lg:col-start-7">
                        <h4 className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.15em] text-black/40 mb-4 lg:mb-8 border-b border-black/5 pb-3 lg:pb-4">Explore</h4>
                        <ul className="space-y-3 lg:space-y-4">
                            {navLinks.map(l => (
                                <li key={l.href}>
                                    <button onClick={() => onScrollTo(l.href.slice(1))} className="hover:text-accent-dark transition-colors text-sm sm:text-base font-normal text-black/70 hover:text-black">
                                        {l.label}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="hidden sm:block sm:col-span-1 lg:col-span-3">
                        <h4 className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.15em] text-black/40 mb-4 lg:mb-8 border-b border-black/5 pb-3 lg:pb-4">Connect</h4>
                        <ul className="space-y-3 lg:space-y-4 text-sm sm:text-base font-normal text-black/70">
                            <li><a href="tel:+919121772320" className="hover:text-accent-dark transition-colors block py-1 border-b border-black/5 hover:border-accent/30">+91 9121772320</a></li>
                            <li><a href="mailto:crm@spacesphere.in" className="hover:text-accent-dark transition-colors block py-1 border-b border-black/5 hover:border-accent/30">crm@spacesphere.in</a></li>
                        </ul>
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row justify-between items-center pt-6 lg:pt-8 border-t border-black/10 text-[10px] sm:text-xs tracking-[0.15em] uppercase text-black/40 font-medium gap-3 sm:gap-0">
                    <p>© {new Date().getFullYear()} Vyom Sigma. All rights reserved.</p>
                    <div className="flex gap-4 sm:gap-6">
                        <a href="#" className="hover:text-black transition-colors">Privacy Policy</a>
                        <span className="text-accent-dark">RERA Registered</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}

