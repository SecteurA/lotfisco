import { motion } from 'framer-motion';
import { TestimonialProps } from './types';
import { FaQuoteLeft } from 'react-icons/fa';

interface ExtendedTestimonialProps extends TestimonialProps {
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

const TestimonialCard = ({ name, position, company, content, index }: ExtendedTestimonialProps) => {
  return (
    <motion.div
      variants={cardVariants}
      className="bg-gray-50 p-8 rounded-xl shadow-sm relative group hover:shadow-lg 
        transition-shadow duration-300"
    >
      {/* Quote Icon with Animation */}
      <motion.div 
        className="absolute -top-4 left-8 bg-[#912c30] text-white p-3 rounded-full"
        whileHover={{ rotate: 15 }}
        transition={{ duration: 0.3 }}
      >
        <FaQuoteLeft size={20} />
      </motion.div>

      {/* Content with Fade In */}
      <motion.div 
        className="mb-8 pt-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 * index }}
      >
        <p className="text-gray-600 italic">"{content}"</p>
      </motion.div>

      {/* Author Info with Slide Up */}
      <motion.div 
        className="flex items-center space-x-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 * index }}
      >
        <div>
          <h4 className="font-semibold text-gray-900">{name}</h4>
          <p className="text-sm text-gray-600">
            {position} {company && `chez ${company}`}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default TestimonialCard;