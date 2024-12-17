import { StatProps } from '../types';
import { StatValue } from './StatValue';

export const StatCard = ({ value, label, prefix = '', suffix = '' }: StatProps) => {
  return (
    <div className="relative group">
      <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20
        transform transition-all duration-300 group-hover:-translate-y-2 group-hover:bg-white/15">
        {/* Accent Line */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-white/80 
          to-white/40 rounded-t-xl transform origin-left transition-transform 
          duration-300 group-hover:scale-x-100"></div>
        
        <StatValue value={value} prefix={prefix} suffix={suffix} />
        <p className="text-gray-100 font-medium text-lg">{label}</p>
      </div>
    </div>
  );
};