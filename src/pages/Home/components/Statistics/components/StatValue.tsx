import { useCountUp } from '../hooks/useCountUp';
import { StatValueProps } from '../types';

export const StatValue = ({ value, prefix = '', suffix = '' }: StatValueProps) => {
  const count = useCountUp(value);
  
  return (
    <div className="text-5xl font-bold text-white mb-4">
      {prefix}{count}{suffix}
    </div>
  );
};