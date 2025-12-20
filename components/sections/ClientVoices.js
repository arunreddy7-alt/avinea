"use client";

import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Badge } from "@/components/ui/Badge";

export function ClientVoices() {
    return (
        <Section className="bg-bg-light">
            <div className="max-w-7xl mx-auto">
                <Reveal className="text-center mb-12">
                    <Badge>Client Voices</Badge>
                    <h2 className="heading-section mt-4">What Residents Say</h2>
                </Reveal>
                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        { title: "Resident Story 1", url: "https://www.youtube.com/embed/s6HE8CdgkWE" },
                        { title: "Resident Story 2", url: "https://www.youtube.com/embed/2x8dgzNFxDM" },
                        { title: "Resident Story 3", url: "https://www.youtube.com/embed/qYyfx19PlWQ" },
                    ].map((video, i) => (
                        <Reveal key={i} delay={i * 0.1}>
                            <div className="aspect-video w-full rounded-2xl overflow-hidden shadow-lg border border-black/5 bg-black">
                                <iframe
                                    src={`${video.url}?rel=0&modestbranding=1`}
                                    title={video.title}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    className="w-full h-full"
                                />
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </Section>
    );
}
