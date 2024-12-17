import { motion } from 'framer-motion';
import { HeroProps } from '../../types';
import DecorativeElements from '../shared/DecorativeElements';

const Hero = ({ title, description, image }: HeroProps) => {
  return (
    <section className="relative">
      <DecorativeElements />
      
      <div className="relative grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">{title}</h1>
          <p className="text-xl text-gray-100 leading-relaxed">{description}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          <img 
            src={image} 
            alt={title}
            className="rounded-lg shadow-2xl w-full"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;