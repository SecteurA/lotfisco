import { motion } from 'framer-motion';
import { ProcessStepProps } from '../../types';

const ProcessStep = ({ title, description, stepNumber }: ProcessStepProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: stepNumber * 0.1 }}
      className="flex items-start space-x-6 bg-white/10 backdrop-blur-sm p-6 rounded-xl 
        border border-white/20 hover:bg-white/15 transition-all duration-300"
    >
      <div className="flex-shrink-0 w-12 h-12 bg-white/20 rounded-full flex items-center 
        justify-center text-2xl font-bold">
        {stepNumber}
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-100">{description}</p>
      </div>
    </motion.div>
  );
};

export default ProcessStep;