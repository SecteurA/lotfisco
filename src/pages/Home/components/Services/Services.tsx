import { motion } from 'framer-motion';
import ServiceCard from './ServiceCard';
import { services } from './data';
import { SectionTitle } from '../../../../components/shared';

const Services = () => {
  return (
    <section className="relative py-16 bg-gray-50 z-0">
      <div className="max-w-7xl mx-auto px-4">
        <SectionTitle 
          title="Nos Services Professionnels"
          subtitle="Des solutions complètes et personnalisées pour répondre à tous vos besoins en matière de comptabilité, fiscalité et gestion d'entreprise."
        />

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <ServiceCard key={service.id} {...service} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;