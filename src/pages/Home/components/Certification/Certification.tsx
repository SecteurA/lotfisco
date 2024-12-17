import { motion } from 'framer-motion';

const Certification = () => {
  return (
    <section className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-center gap-8 bg-gray-50 rounded-xl p-8 shadow-md"
        >
          {/* ITAA Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-shrink-0"
          >
            <img 
              src="https://www.itaa.be/wp-content/uploads/ITAA_Logo_web-1.jpg" 
              alt="ITAA Logo" 
              className="h-20 w-auto"
            />
          </motion.div>

          {/* Certification Text */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center md:text-left"
          >
            <p className="text-lg text-gray-700 leading-relaxed">
              Agréé par{' '}
              <a 
                href="https://www.itaa.be/fr/accueil/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#912c30] hover:text-[#7a2528] transition-colors duration-300"
              >
                ITAA, Institute for Tax Advisors and Accountants
              </a>
              ,{' '}
              <span className="font-semibold">LOTFISCO FIDUCIAIRE</span> est Expert-comptable 
              Certifié et Conseiller Fiscal et répond aux plus hauts standards de qualité.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certification;