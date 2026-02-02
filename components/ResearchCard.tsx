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


    </div>
  );
};