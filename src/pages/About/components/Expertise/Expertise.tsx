import { motion } from 'framer-motion';
import { expertiseItems, sectionContent } from '../../data/content';
import { ExpertiseItem } from '../../types';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariant = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

const Expertise = () => {
  return (
    <motion.section 
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="bg-white rounded-2xl shadow-xl p-8"
    >
      <h2 className="text-3xl font-bold text-gray-900 mb-4">
        {sectionContent.expertise.title}
      </h2>
      <p className="text-lg text-gray-600 mb-8">
        Agréé par{' '}
        <a 
          href="https://www.itaa.be/fr/accueil/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-[#912c30] hover:text-[#7a2528] transition-colors duration-300"
        >
          ITAA, Institute for Tax Advisors and Accountants
        </a>
        , LOTFISCO FIDUCIAIRE est Expert-comptable Certifié et Conseiller Fiscal et répond aux plus hauts standards de qualité dans les domaines suivants :
      </p>
      <motion.div 
        variants={container}
        className="grid md:grid-cols-2 gap-8"
      >
        {expertiseItems.map((item: ExpertiseItem, index: number) => (
          <motion.div
            key={index}
            variants={itemVariant}
            className="group bg-gray-50 p-6 rounded-xl hover:bg-gradient-to-r from-[#912c30] to-[#4a1618] 
              transition-all duration-300 hover:-translate-y-1"
          >
            <h3 className="text-xl font-semibold text-[#912c30] mb-3 group-hover:text-white">
              {item.title}
            </h3>
            <p className="text-gray-600 group-hover:text-gray-100">
              {item.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Expertise;