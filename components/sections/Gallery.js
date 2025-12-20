"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Badge } from "@/components/ui/Badge";
import { galleryImages } from "@/app/data";

export function Gallery() {
    const [galleryIndex, setGalleryIndex] = useState(0);

    return (
        <Section id="gallery" className="bg-white">
            <div className="max-w-7xl mx-auto">
                <Reveal className="mb-12 flex justify-between items-end">
                    <div>
                        <Badge>Visual Stories</Badge>
                        <h2 className="heading-section mt-4">Gallery</h2>
                    </div>
                    <div className="hidden md:flex gap-2">
                        <button
                            onClick={() => setGalleryIndex(prev => (prev - 1 + galleryImages.length) % galleryImages.length)}
                            className="p-3 rounded-full border border-black/10 hover:bg-black hover:text-white transition-colors"
                        >
                            <ArrowRight className="w-5 h-5 rotate-180" />
                        </button>
                        <button
                            onClick={() => setGalleryIndex(prev => (prev + 1) % galleryImages.length)}
                            className="p-3 rounded-full border border-black/10 hover:bg-black hover:text-white transition-colors"
                        >
                            <ArrowRight className="w-5 h-5" />
                        </button>
                    </div>
                </Reveal>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 h-[600px] md:h-[500px]">
                    {/* Main Featured Image */}
                    <motion.div
                        key={galleryIndex}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="md:col-span-8 relative rounded-3xl overflow-hidden h-full shadow-lg"
                    >
                        <Image src={galleryImages[galleryIndex]} alt="Gallery Main" fill className="object-cover" />
                    </motion.div>

                    {/* Thumbnails */}
                    <div className="md:col-span-4 grid grid-rows-3 gap-4 h-full">
                        {[1, 2, 3].map((offset) => {
                            const idx = (galleryIndex + offset) % galleryImages.length;
                            return (
                                <button
                                    key={idx}
                                    onClick={() => setGalleryIndex(idx)}
                                    className="relative rounded-2xl overflow-hidden w-full h-full opacity-60 hover:opacity-100 transition-opacity"
                                >
                                    <Image src={galleryImages[idx]} alt="Thumbnail" fill className="object-cover" />
                                </button>
                            );
                        })}
                    </div>
                </div>
            </div>
        </Section>
    );
}
