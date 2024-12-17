import { motion } from 'framer-motion';
import { FeatureProps } from '../../types';
import FeatureCard from './FeatureCard';
import { SectionTitle } from '../../../../components/shared';

const Features = ({ features }: { features: FeatureProps[] }) => {
  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="bg-white rounded-2xl shadow-xl p-8"
    >
      <SectionTitle 
        title="Caractéristiques principales"
        subtitle="Des solutions adaptées à vos besoins spécifiques"
      />

      <motion.div
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.2
            }
          }
        }}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Features;