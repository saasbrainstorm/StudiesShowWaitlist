import React from 'react';

export const CurvyLine: React.FC<{ className?: string }> = ({ className }) => {
    return (
        <svg
            viewBox="0 0 1440 600"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-7xl h-auto overflow-visible pointer-events-none -z-10 ${className}`}
            preserveAspectRatio="none"
        >
            <path
                d="M-100 400 C 100 400, 200 550, 400 550 C 600 550, 700 200, 900 200 C 1100 200, 1200 100, 1500 0"
                stroke="#3131C5"
                strokeWidth="60"
                strokeLinecap="round"
                className="opacity-90"
            />
        </svg>
    );
};
