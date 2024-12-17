import { motion } from 'framer-motion';
import { ProcessStepProps } from '../../types';
import ProcessStep from './ProcessStep';
import { SectionTitle } from '../../../../components/shared';

const Process = ({ steps }: { steps: ProcessStepProps[] }) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-gradient-to-r from-[#912c30] to-[#4a1618] text-white rounded-2xl p-8"
    >
      <SectionTitle 
        title="Notre processus"
        subtitle="Une approche structurée pour votre succès"
        light
      />

      <div className="grid gap-8">
        {steps.map((step, index) => (
          <ProcessStep key={index} {...step} stepNumber={index + 1} />
        ))}
      </div>
    </motion.section>
  );
};

export default Process;