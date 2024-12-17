import { commitmentPoints, sectionContent } from '../data/content';
import { CommitmentPoint } from '../types';
import { motion } from 'framer-motion';

const Commitment = () => {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-white rounded-2xl shadow-xl p-8"
    >
      <h2 className="text-3xl font-bold text-gray-900 mb-4">
        {sectionContent.commitment.title}
      </h2>
      <p className="text-lg text-gray-600 mb-8">
        {sectionContent.commitment.description}
      </p>
      <div className="grid md:grid-cols-3 gap-8 mb-12">
        {commitmentPoints.map((point: CommitmentPoint, index: number) => (
          <motion.div
            key={index}
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
            <p className="text-gray-600">{point.text}</p>
          </motion.div>
        ))}
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="bg-gradient-to-r from-[#912c30] to-[#4a1618] text-white p-8 rounded-xl text-center"
      >
        <p className="text-2xl font-bold mb-4">
          {sectionContent.commitment.footer.title}
        </p>
        <p className="text-xl">
          {sectionContent.commitment.footer.subtitle}
        </p>
      </motion.div>
    </motion.section>
  );
};

export default Commitment;