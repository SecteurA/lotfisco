import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const CallToAction = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-gradient-to-r from-[#912c30] to-[#4a1618] text-white rounded-2xl p-12 text-center"
    >
      <h2 className="text-3xl font-bold mb-6">
        Prêt à commencer ?
      </h2>
      <p className="text-xl mb-8 max-w-2xl mx-auto">
        Contactez-nous dès aujourd'hui pour discuter de vos besoins et découvrir comment nous pouvons vous aider.
      </p>
      <Link 
        to="/contact"
        className="inline-block bg-white text-[#912c30] px-8 py-4 rounded-lg font-semibold text-lg 
          hover:bg-gray-100 transition duration-300"
      >
        Demander un devis gratuit
      </Link>
    </motion.section>
  );
};

export default CallToAction;