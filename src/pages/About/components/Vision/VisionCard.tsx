import { motion } from 'framer-motion';
import { VisionPoint } from '../../types';

interface VisionCardProps extends VisionPoint {
  index: number;
}

const VisionCard = ({ title, description, index }: VisionCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20
        hover:bg-white/15 transition-all duration-300"
    >
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-100">{description}</p>
    </motion.div>
  );
};

export default VisionCard;