// components/ElegantIllustration.tsx
import React from 'react';

/**
 * ElegantIllustration – a lightweight SVG illustration to replace the interactive robot.
 * It shows a stylized AI "brain" with a subtle gradient and a pulsing glow.
 * The component is responsive and uses Tailwind utilities for sizing and animation.
 */
export const ElegantIllustration: React.FC = () => {
    return (
        <div className="relative w-full h-full flex items-center justify-center">
            <svg
                viewBox="0 0 200 200"
                className="w-64 h-64 md:w-80 md:h-80 animate-pulse"
                xmlns="http://www.w3.org/2000/svg"
            >
                <defs>
                    <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#a855f7" />
                        <stop offset="100%" stopColor="#7c3aed" />
                    </linearGradient>
                </defs>
                <path
                    d="M100,20 C130,20 150,40 150,70 C150,100 130,120 100,120 C70,120 50,100 50,70 C50,40 70,20 100,20 Z"
                    fill="url(#grad)"
                    stroke="#ffffff55"
                    strokeWidth="2"
                />
                <circle cx="100" cy="70" r="30" fill="none" stroke="#ffffff88" strokeWidth="4" />
            </svg>
        </div>
    );
};
