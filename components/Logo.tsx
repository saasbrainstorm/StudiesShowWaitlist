import React from 'react';

export const Logo: React.FC = () => {
  return (
    <div className="flex items-center gap-2 select-none cursor-pointer">
      <img
        src="/logo.png"
        alt="Studies Show"
        className="h-12 sm:h-14 md:h-16 w-auto object-contain hover:scale-105 transition-transform duration-300"
      />
    </div>
  );
};