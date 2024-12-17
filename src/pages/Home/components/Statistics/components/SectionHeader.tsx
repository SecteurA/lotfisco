import { SectionHeaderProps } from '../types';

export const SectionHeader = ({ title, description }: SectionHeaderProps) => {
  return (
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold text-white mb-6">
        {title}
      </h2>
      <div className="w-24 h-1 bg-white/80 mx-auto mb-6"></div>
      <p className="text-lg text-gray-100 max-w-2xl mx-auto">
        {description}
      </p>
    </div>
  );
};