import React from 'react';

export const Logo: React.FC = () => {
  return (
    <div className="flex items-center gap-2 select-none">
      <div className="relative group cursor-pointer">
        <div className="bg-[#2a2a9e] text-white font-black text-xl italic tracking-tighter px-3 py-1 -skew-x-6 transform transition-transform hover:scale-105 border-2 border-transparent">
          STUDIES SHOW
        </div>
      </div>
    </div>
  );
};