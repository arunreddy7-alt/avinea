"use client";

import Image from "next/image";

import { Section } from "@/components/modals/ui/Section";
import { Reveal } from "@/components/modals/ui/Reveal";
import { Badge } from "@/components/modals/ui/Badge";
import { clubhouseImages } from "@/app/data";

export function Clubhouse() {
    return (
        <Section>
            <div className="max-w-7xl mx-auto">
                <Reveal className="mb-12">
                    <Badge>Recreation</Badge>
                    <h2 className="heading-section mt-4">The Club Grandeur</h2>
                </Reveal>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {clubhouseImages.map((img, i) => (
                        <Reveal key={i} delay={i * 0.05}>
                            <div className="relative group overflow-hidden rounded-2xl aspect-[4/3]">
                                <Image
                                    src={img.src}
                                    alt={img.label}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                                    <span className="text-white font-serif text-sm">
                                        {img.label}
                                    </span>
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </Section>
    );
}