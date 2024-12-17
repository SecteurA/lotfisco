import { commitmentPoints, sectionContent } from '../../data/content';
import CommitmentCard from './CommitmentCard';
import { motion } from 'framer-motion';

const Commitment = () => {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-white rounded-2xl shadow-xl p-8 mb-20"
    >
      <h2 className="text-3xl font-bold text-gray-900 mb-4">
        {sectionContent.commitment.title}
      </h2>
      <p className="text-lg text-gray-600 mb-8">
        {sectionContent.commitment.description}
      </p>
      <div className="grid md:grid-cols-3 gap-8 mb-12">
        {commitmentPoints.map((point, index) => (
          <CommitmentCard key={index} {...point} index={index} />
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