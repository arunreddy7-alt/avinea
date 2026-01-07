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
                                src="/logo1.png"
                                alt="Avinea"
                                fill
                                className="object-contain object-left"
                            />
                        </div>
                        <p className="text-lg font-light leading-relaxed text-black/80 max-w-sm">
                            A private sanctuary crafted for modern connoisseurs. Experience the pinnacle of urban living in Pune's most coveted address.
                        </p>
                        <div className="pt-8">
                            <p className="text-xs font-bold uppercase tracking-[0.15em] text-accent-dark mb-3">Address</p>
                       <div className="w-full h-[320px] rounded-xl overflow-hidden border border-black/10 shadow-sm">
    <iframe
        title="Avinea Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4000.2842870029667!2d73.93910847542801!3d18.505383982585244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c2036c153b03%3A0xf9ecf7df3e351657!2sDP%20Rd%2C%20Hadapsar%2C%20Pune%2C%20Maharashtra%20411028!5e1!3m2!1sen!2sin!4v1767798426730!5m2!1sen!2sin"
        className="w-full h-full border-0"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
    />
</div>

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
                            <li><a href="tel:+919121772320" className="hover:text-accent-dark transition-colors block py-1 border-b border-black/5 hover:border-accent/30">+91 9121772320</a></li>
                            <li><a href="mailto:crm@spacesphere.in" className="hover:text-accent-dark transition-colors block py-1 border-b border-black/5 hover:border-accent/30">crm@spacesphere.in</a></li>
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