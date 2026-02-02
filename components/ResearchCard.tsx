import React from 'react';
import { ResearchCardData } from '../types';

interface ResearchCardProps {
  data: ResearchCardData;
  className?: string;
  style?: React.CSSProperties;
}

export const ResearchCard: React.FC<ResearchCardProps> = ({ data, className = '', style }) => {
  return (
<<<<<<< HEAD
    <div
      className={`rounded-3xl overflow-hidden shadow-2xl w-full h-full relative group cursor-pointer ${className}`}
      style={{
        ...style
      }}
    >
      {/* Image or Gradient Background */}
      <div className="absolute inset-0 w-full h-full transition-transform duration-500 group-hover:scale-110">
        {data.imageUrl ? (
          <img src={data.imageUrl} alt={data.headline} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-blue-500 to-indigo-600" />
        )}
      </div>


=======
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
>>>>>>> ac3db022d28e3c06288752d25db03abac0852268
    </div>
  );
};