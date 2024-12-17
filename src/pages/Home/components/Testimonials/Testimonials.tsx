import { motion } from 'framer-motion';
import { testimonials } from './data';
import TestimonialCard from './TestimonialCard';
import { SectionTitle } from '../../../../components/shared';

const Testimonials = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <SectionTitle 
          title="Ce que nos clients disent"
          subtitle="Découvrez les témoignages de nos clients satisfaits qui nous font confiance 
            depuis des années pour leurs besoins en comptabilité et fiscalité."
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
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;