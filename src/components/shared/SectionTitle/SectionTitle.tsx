import { motion } from 'framer-motion';
import { SectionTitleProps } from './types';
import { variants } from './animations';
import { getStyles } from './styles';

export const SectionTitle = ({ title, subtitle, light = false, centered = true }: SectionTitleProps) => {
  const styles = getStyles(light, centered);

  return (
    <motion.div 
      variants={variants.container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={styles.container}
    >
      <h2 className={styles.title}>
        {title}
      </h2>
      <div className="relative">
        <div className={styles.underline}></div>
        <div className={styles.glow}></div>
      </div>
      {subtitle && (
        <p className={styles.subtitle}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};