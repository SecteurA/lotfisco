import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const HeroContent = () => {
  return (
    <div className="text-white">
      <motion.h1 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-4xl lg:text-5xl font-bold mb-6 pt-5"
      >
        Votre partenaire de confiance en comptabilité et fiscalité
      </motion.h1>
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        className="text-lg mb-6 text-gray-100"
      >
        Expertise comptable, fiscale et conseils personnalisés pour les indépendants, 
        PME et ASBL depuis 1995. Simplifiez votre gestion financière avec LOTFISCO.
      </motion.p>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
      >
        <Link to="/about">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-[#912c30] px-6 py-3 rounded-lg font-semibold 
              hover:bg-gray-100 transition duration-300"
          >
            En savoir plus
          </motion.button>
        </Link>
      </motion.div>
    </div>
  );
};

export default HeroContent;