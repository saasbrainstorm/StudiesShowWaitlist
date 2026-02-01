import React from 'react';

export const Background: React.FC = () => {
  return (
    <div className="absolute inset-0 -z-10 h-full w-full bg-white">
      {/* 
        Continuous dotted grid pattern.
        - Gray color with 10% transparency (rgba(0, 0, 0, 0.1)).
        - Responsive sizing using vmin.
        - Spans the entire page without fading (vignette removed).
      */}
      <div 
        className="absolute h-full w-full" 
        style={{
          backgroundImage: 'radial-gradient(rgba(0, 0, 0, 0.1) 2px, transparent 2px)',
          backgroundSize: '3.5vmin 3.5vmin', // Adjusts with screen size
          backgroundPosition: 'center'
        }}
      />
    </div>
  );
};