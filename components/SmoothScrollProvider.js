"use client";

import { ReactLenis } from '@studio-freight/react-lenis';

export function SmoothScrollProvider({ children }) {
    return (
        <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothWheel: true, touchMultiplier: 2 }}>
            {children}
        </ReactLenis>
    );
}

