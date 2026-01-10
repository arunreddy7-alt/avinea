"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import { Section } from "@/components/modals/ui/Section";
import { Reveal } from "@/components/modals/ui/Reveal";
import { Badge } from "@/components/modals/ui/Badge";
import { clubhouseImages } from "@/app/data";

// Extract clubhouses and pools groups
const clubhouseGroup = clubhouseImages.slice(1, 4);
const poolsGroup = clubhouseImages.slice(5, 8);

function Carousel3D({ items, autoSlide = true, slideInterval = 4000 }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const containerRef = useRef(null);
    const [direction, setDirection] = useState(0);

    useEffect(() => {
        if (!autoSlide) return;
        const interval = setInterval(() => {
            setDirection(1);
            setCurrentIndex((prev) => (prev + 1) % items.length);
        }, slideInterval);
        return () => clearInterval(interval);
    }, [autoSlide, slideInterval, items.length]);

    const goToSlide = (index) => {
        setDirection(index > currentIndex ? 1 : -1);
        setCurrentIndex(index);
    };

    const getPositionStyle = (index) => {
        const diff = (index - currentIndex + items.length) % items.length;
        const reverseDiff = (currentIndex - index + items.length) % items.length;
        
        if (diff === 0) {
            return { scale: 1.05, x: 0, zIndex: 10, opacity: 1, width: '60%' };
        }
        if (diff === 1) {
            return { scale: 0.65, x: 185, zIndex: 5, opacity: 0.6, width: '40%' };
        }
        if (reverseDiff === 1) {
            return { scale: 0.65, x: -185, zIndex: 5, opacity: 0.6, width: '40%' };
        }
        return { scale: 0.6, x: diff > 1 ? 110 : -110, zIndex: 0, opacity: 1, width: '40%' };
    };

    return (
        <div ref={containerRef} className="relative w-full aspect-[4/3] md:aspect-[16/10] flex items-center justify-center overflow-hidden rounded-xl md:rounded-2xl">
            {items.map((item, index) => {
                const style = getPositionStyle(index);
                return (
                    <motion.div
                        key={index}
                        className="absolute flex flex-col items-center cursor-pointer"
                        initial={false}
                        animate={{
                            scale: style.scale,
                            x: style.x,
                            opacity: style.opacity,
                            zIndex: style.zIndex,
                        }}
                        transition={{ 
                            type: "spring",
                            stiffness: 280,
                            damping: 25,
                            mass: 0.8
                        }}
                        onClick={() => goToSlide(index)}
                        style={{ width: style.width }}
                    >
                        <div className="relative w-full aspect-[4/3] md:aspect-[16/10] overflow-hidden rounded-xl md:rounded-xl shadow-lg">
                            <Image
                                src={item.src}
                                alt={item.label}
                                fill
                                className="object-cover"
                            />
                            {style.x === 0 && (
                                <>
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                                    <div className="absolute bottom-0 left-0 right-0 p-3">
                                        <span className="text-white font-serif text-sm">{item.label}</span>
                                    </div>
                                </>
                            )}
                        </div>
                    </motion.div>
                );
            })}

            {/* Dots indicator */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 z-20">
                {items.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                            index === currentIndex ? 'bg-white w-4' : 'bg-white/40'
                        }`}
                    />
                ))}
            </div>
        </div>
    );
}

export function Clubhouse() {
    return (
        <Section>
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <Reveal className="mb-8 sm:mb-12">
                    <Badge>Recreation</Badge>
                    <h2 className="heading-section mt-4 text-3xl sm:text-4xl lg:text-5xl">The Club Grandeur</h2>
                </Reveal>

                {/* Desktop View - Original Grid */}
                <div className="hidden lg:grid grid-cols-2 md:grid-cols-4 gap-4">
                    {clubhouseImages.map((img, i) => (
                        <Reveal key={i} delay={i * 0.05}>
                            <div className="relative group overflow-hidden rounded-2xl aspect-[4/3] bg-gray-100">
                                {img.src ? (
                                    <Image
                                        src={img.src}
                                        alt={img.label}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                ) : (
                                    <div className="flex flex-col items-center justify-center h-full text-center p-4">
                                        <span className="text-3xl font-serif text-[#d4af37]">{img.label.split(' ')[0]}</span>
                                        <span className="text-lg text-gray-600 font-medium">{img.label.split(' ').slice(1).join(' ')}</span>
                                        {img.sublabel && (
                                            <span className="text-xl font-serif text-gray-900 mt-1">
                                                {img.sublabel}
                                            </span>
                                        )}
                                    </div>
                                )}
                                {img.src && (
                                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                                        <span className="text-white font-serif">
                                            {img.label}
                                        </span>
                                    </div>
                                )}
                            </div>
                        </Reveal>
                    ))}
                </div>

                {/* Mobile View - Carousel with Subheadings */}
                <div className="lg:hidden space-y-12 -mx-10">
                    {/* Clubhouses Section */}
                    <div>
                        <h3 className="text-xl font-serif text-center -mb-2 text-gray-800">3 Clubhouses</h3>
                        <div className="rounded-2xl overflow-hidden">
                            <Carousel3D items={clubhouseGroup} autoSlide={true} slideInterval={4000} />
                        </div>
                    </div>

                    {/* Swimming Pools Section */}
                    <div>
                        <h3 className="text-xl font-serif text-center -mb-2 text-gray-800">3 Swimming Pools</h3>
                        <div className="rounded-2xl overflow-hidden">
                            <Carousel3D items={poolsGroup} autoSlide={true} slideInterval={4000} />
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
}

