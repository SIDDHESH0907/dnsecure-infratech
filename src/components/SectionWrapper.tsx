import React from 'react';
import { motion } from 'framer-motion';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useTheme } from '../theme/ThemeProvider';

interface SectionWrapperProps {
  id: string;
  children: React.ReactNode;
  className?: string;
  alternate?: boolean;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({ id, children, className = '', alternate = false }) => {
  const { theme } = useTheme();
  const { ref, isInView } = useScrollReveal();

  return (
    <section
      id={id}
      style={{
        background: alternate ? theme.colors.bgMid : theme.colors.bgDark,
      }}
    >
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-12 ${className}`}
      >
        {children}
      </motion.div>
    </section>
  );
};

export default SectionWrapper;
