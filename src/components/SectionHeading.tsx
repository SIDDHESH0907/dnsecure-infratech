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
      <div
        className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-4 text-xs font-semibold tracking-widest uppercase ${center ? '' : ''}`}
        style={{
          background: `${theme.colors.primary}15`,
          border: `1px solid ${theme.colors.border}`,
          color: theme.colors.primary,
        }}
      >
        <span className="w-1.5 h-1.5 rounded-full" style={{ background: theme.colors.accent }} />
        {label}
      </div>
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
