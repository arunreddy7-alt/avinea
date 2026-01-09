"use client";

import Image from "next/image";

import { Section } from "@/components/modals/ui/Section";
import { Reveal } from "@/components/modals/ui/Reveal";
import { Badge } from "@/components/modals/ui/Badge";
import { clubhouseImages } from "@/app/data";

export function Clubhouse() {
    return (
        <Section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <Reveal className="mb-8 sm:mb-12">
                    <Badge>Recreation</Badge>
                    <h2 className="heading-section mt-4 text-3xl sm:text-4xl lg:text-5xl">The Club Grandeur</h2>
                </Reveal>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4">
                    {clubhouseImages.map((img, i) => (
                        <Reveal key={i} delay={i * 0.05}>
                            <div className="relative group overflow-hidden rounded-lg sm:rounded-2xl aspect-[4/3] bg-gray-100">
                                {img.src ? (
                                    <Image
                                        src={img.src}
                                        alt={img.label}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                ) : (
                                    <div className="flex flex-col items-center justify-center h-full text-center p-2">
                                        <span className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#d4af37]">{img.label.split(' ')[0]}</span>
                                        <span className="text-sm sm:text-lg md:text-xl text-gray-600 font-medium">{img.label.split(' ').slice(1).join(' ')}</span>
                                        {img.sublabel && (
                                            <span className="text-lg sm:text-xl md:text-2xl font-serif text-gray-900 mt-1">
                                                {img.sublabel}
                                            </span>
                                        )}
                                    </div>
                                )}
                                {img.src && (
                                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3 sm:p-4">
                                        <span className="text-white font-serif text-xs sm:text-sm">
                                            {img.label}
                                        </span>
                                    </div>
                                )}
                            </div>
                        </Reveal>
                    ))}
                </div>

            
            </div>
        </Section>
    );
}