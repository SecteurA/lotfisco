import { StatProps } from './types';
import { useEffect, useState } from 'react';

const StatCard = ({ value, label, prefix = '', suffix = '' }: StatProps) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    const duration = 2000;
    const steps = 50;
    const stepValue = value / steps;
    const stepDuration = duration / steps;
    
    let current = 0;
    const timer = setInterval(() => {
      current += stepValue;
      if (current > value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, stepDuration);
    
    return () => clearInterval(timer);
  }, [value]);

  return (
    <div className="relative group">
      {/* Card */}
      <div className="bg-white p-8 rounded-xl shadow-sm ring-1 ring-gray-100 
        transform transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-xl">
        {/* Accent Line */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#912c30] 
          to-[#912c30]/70 rounded-t-xl transform origin-left transition-transform 
          duration-300 group-hover:scale-x-100"></div>
        
        {/* Content */}
        <div className="text-5xl font-bold bg-gradient-to-r from-[#912c30] to-[#912c30]/80 
          bg-clip-text text-transparent mb-4">
          {prefix}{count}{suffix}
        </div>
        <p className="text-gray-600 font-medium text-lg">{label}</p>
      </div>
    </div>
  );
};

export default StatCard;