import { motion } from 'framer-motion';
import { ExpertiseItem } from '../../types';

interface ExpertiseCardProps extends ExpertiseItem {
  index: number;
}

const ExpertiseCard = ({ title, description, index }: ExpertiseCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group bg-gray-50 p-6 rounded-xl hover:bg-gradient-to-r from-[#912c30] to-[#4a1618] 
        transition-all duration-300 hover:-translate-y-1"
    >
      <h3 className="text-xl font-semibold text-[#912c30] mb-3 group-hover:text-white">
        {title}
      </h3>
      <p className="text-gray-600 group-hover:text-gray-100">
        {description}
      </p>
    </motion.div>
  );
};

export default ExpertiseCard;