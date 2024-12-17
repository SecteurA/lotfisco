import { motion } from 'framer-motion';
import { FeatureProps } from '../../types';

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

const FeatureCard = ({ title, description, icon }: FeatureProps) => {
  return (
    <motion.div
      variants={item}
      className="group bg-gray-50 p-6 rounded-xl hover:bg-gradient-to-r from-[#912c30] to-[#4a1618] 
        transition-all duration-300 hover:-translate-y-1"
    >
      <div className="text-[#912c30] group-hover:text-white mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-[#912c30] mb-3 group-hover:text-white">
        {title}
      </h3>
      <p className="text-gray-600 group-hover:text-gray-100">
        {description}
      </p>
    </motion.div>
  );
};

export default FeatureCard;