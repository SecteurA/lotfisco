import { visionPoints, sectionContent } from '../../data/content';
import VisionCard from './VisionCard';
import { motion } from 'framer-motion';

const Vision = () => {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-gradient-to-r from-[#912c30] to-[#4a1618] text-white rounded-2xl p-8"
    >
      <h2 className="text-3xl font-bold mb-4">
        {sectionContent.vision.title}
      </h2>
      <p className="text-lg text-gray-100 mb-8">
        {sectionContent.vision.description}
      </p>
      <div className="grid md:grid-cols-3 gap-8">
        {visionPoints.map((point, index) => (
          <VisionCard key={index} {...point} index={index} />
        ))}
      </div>
    </motion.section>
  );
};

export default Vision;