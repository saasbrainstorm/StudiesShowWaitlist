import React from 'react';
import { ResearchCardData } from '../types';

interface ResearchCardProps {
  data: ResearchCardData;
  className?: string;
  style?: React.CSSProperties;
}

export const ResearchCard: React.FC<ResearchCardProps> = ({ data, className = '', style }) => {
  return (
    <div 
      className={`rounded-3xl overflow-hidden shadow-2xl w-[280px] sm:w-[300px] aspect-square flex flex-col relative text-white transition-transform hover:z-50 hover:scale-105 duration-300 ${className}`}
      style={{
        background: 'linear-gradient(135deg, #4c6ef5 0%, #3b5bdb 100%)',
        ...style
      }}
    >
      {/* Glassy reflection effect */}
      <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-white/10 to-transparent pointer-events-none" />

      <div className="p-6 flex flex-col h-full justify-center relative z-10">
        <p className="text-blue-100 text-sm font-medium mb-3 tracking-wide opacity-90">
          Research says...
        </p>
        
        <h3 className="text-2xl font-bold leading-tight mb-4 tracking-tight">
          {data.headline}
        </h3>

        <div className="w-12 h-0.5 bg-blue-300/50 mb-4 rounded-full" />

        <p className="text-blue-50 text-sm leading-relaxed font-light opacity-90">
          {data.summary}
        </p>
      </div>
    </div>
  );
};