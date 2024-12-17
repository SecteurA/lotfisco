import { motion } from 'framer-motion';
import { BenefitProps } from '../../types';
import { SectionTitle } from '../../../../components/shared';

const Benefits = ({ benefits }: { benefits: BenefitProps[] }) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-white rounded-2xl shadow-xl p-8"
    >
      <SectionTitle 
        title="Les avantages de nos services"
        subtitle="Une expertise reconnue au service de votre réussite"
      />

      <div className="grid md:grid-cols-2 gap-8">
        {benefits.map((benefit, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="flex items-start space-x-4"
          >
            <div className="flex-shrink-0 w-12 h-12 bg-[#912c30] rounded-full flex items-center justify-center text-white">
              {benefit.icon}
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Benefits;