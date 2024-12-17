import { motion } from 'framer-motion';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  light?: boolean;
  centered?: boolean;
}

export const SectionTitle = ({ title, subtitle, light = false, centered = true }: SectionTitleProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`${centered ? 'text-center' : ''} mb-12`}
    >
      <h2 className={`text-3xl lg:text-4xl font-bold mb-4 ${light ? 'text-white' : 'text-gray-900'}`}>
        {title}
      </h2>
      <div className="relative">
        <div className={`w-24 h-1 ${centered ? 'mx-auto' : ''} ${
          light ? 'bg-white/80' : 'bg-[#912c30]'
        } mb-6`}></div>
        <div 
          className={`absolute -top-4 -left-8 w-40 h-8 ${
            light ? 'bg-white/5' : 'bg-[#912c30]/5'
          } blur-xl rounded-full`}
        ></div>
      </div>
      {subtitle && (
        <p className={`text-lg ${
          light ? 'text-gray-100' : 'text-gray-600'
        } max-w-2xl ${centered ? 'mx-auto' : ''}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};