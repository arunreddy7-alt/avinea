"use client";

import { ReactLenis } from '@studio-freight/react-lenis';

export function SmoothScrollProvider({ children }) {
    return (
        <ReactLenis root options={{ lerp: 0.2, duration: 1.0, smoothWheel: true, touchMultiplier: 2 }}>
            {children}
        </ReactLenis>
    );
}

