import React from 'react';
import { useTheme } from '../theme/ThemeProvider';

interface SectionHeadingProps {
  label: string;
  title: string;
  subtitle?: string;
  center?: boolean;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ label, title, subtitle, center = true }) => {
  const { theme } = useTheme();

  return (
    <div className={`mb-14 ${center ? 'text-center' : ''}`}>
      {/* section label removed as requested */}
      <h2
        className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight mb-4"
        style={{ color: theme.colors.textPrimary }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-base lg:text-lg leading-relaxed ${center ? 'max-w-2xl mx-auto' : 'max-w-2xl'}`}
          style={{ color: theme.colors.textSecondary }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
