import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ServiceProps } from './types';

interface ExtendedServiceProps extends ServiceProps {
  index: number;
}

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const ServiceCard = ({ title, description, imageSrc, path, index }: ExtendedServiceProps) => {
  return (
    <motion.div
      variants={cardVariants}
      className="bg-white rounded-lg shadow-md overflow-hidden group"
    >
      <div className="h-48 overflow-hidden">
        <motion.img 
          src={imageSrc} 
          alt={title}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.6 }}
        />
      </div>
      <motion.div 
        className="p-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 * index }}
      >
        <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <Link
          to={path}
          className="inline-flex items-center text-[#912c30] font-medium hover:text-[#7a2528] 
            transition-colors duration-300"
        >
          En savoir plus
          <motion.svg
            className="w-5 h-5 ml-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            whileHover={{ x: 5 }}
            transition={{ duration: 0.3 }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </motion.svg>
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default ServiceCard;