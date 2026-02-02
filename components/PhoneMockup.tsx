import React from 'react';

export const PhoneMockup: React.FC = () => {
    return (
        <div className="relative mx-auto border-gray-900 border-[10px] rounded-[2.5rem] h-[500px] w-[280px] sm:h-[600px] sm:w-[300px] bg-black shadow-xl overflow-hidden z-20">
            <div className="h-[32px] w-[3px] bg-gray-800 absolute -left-[10px] top-[72px] rounded-l-lg"></div>
            <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[10px] top-[124px] rounded-l-lg"></div>
            <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[10px] top-[178px] rounded-l-lg"></div>
            <div className="h-[64px] w-[3px] bg-gray-800 absolute -right-[10px] top-[142px] rounded-r-lg"></div>
            <div className="rounded-[2rem] overflow-hidden w-full h-full bg-slate-900 relative">
                <img
                    src="/phone-screen.png"
                    alt="App Screen"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                {/* Dynamic Island / Notch */}
                <div className="absolute top-0 w-full flex justify-center z-30 pt-2">
                    <div className="h-[24px] w-[90px] bg-black rounded-full"></div>
                </div>
            </div>
        </div>
    );
};
