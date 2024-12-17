import { motion } from 'framer-motion';
import { CommitmentPoint } from '../../types';

interface CommitmentCardProps extends CommitmentPoint {
  index: number;
}

const CommitmentCard = ({ text, index }: CommitmentCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="bg-gray-50 p-6 rounded-xl border border-gray-100"
    >
      <div className="flex items-center space-x-3 mb-2">
        <div className="w-8 h-8 bg-[#912c30] rounded-full flex items-center justify-center text-white font-bold">
          {index + 1}
        </div>
        <h3 className="text-lg font-semibold text-gray-900">Point clé</h3>
      </div>
      <p className="text-gray-600">{text}</p>
    </motion.div>
  );
};

export default CommitmentCard;