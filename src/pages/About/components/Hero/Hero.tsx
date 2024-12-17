import { motion } from 'framer-motion';
import { heroContent } from '../../data/content';

const Hero = () => {
  return (
    <section className="relative">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-8 -right-8 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="relative">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold mb-8"
        >
          {heroContent.title}
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl text-gray-100 leading-relaxed max-w-3xl"
        >
          Agréé par{' '}
          <a 
            href="https://www.itaa.be/fr/accueil/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white hover:text-gray-200 underline transition-colors duration-300"
          >
            ITAA, Institute for Tax Advisors and Accountants
          </a>
          , LOTFISCO FIDUCIAIRE est Expert-comptable Certifié et Conseiller Fiscal et répond aux plus hauts standards de qualité.
        </motion.p>
      </div>
    </section>
  );
};

export default Hero;