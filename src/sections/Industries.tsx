import React from 'react';
import SectionWrapper from '../components/SectionWrapper';
import SectionHeading from '../components/SectionHeading';
import { useTheme } from '../theme/ThemeProvider';

const industries = ['Banking', 'Healthcare', 'Manufacturing', 'Education', 'IT Companies', 'Logistics', 'Retail', 'Startups'];

const Industries: React.FC = () => {
  const { theme } = useTheme();

  return (
    <SectionWrapper id="industries">
      <SectionHeading label="Industries" title="Industries We Serve" subtitle="Tailored cybersecurity and infrastructure solutions for a wide range of sectors." />

      <div className="overflow-x-auto py-4">
        <div className="flex gap-4 px-2">
          {industries.map((ind) => (
            <div key={ind} className="min-w-[160px] p-6 rounded-2xl glass flex-shrink-0 text-center" style={{ border: `1px solid ${theme.colors.border}` }}>
              <div className="text-lg font-bold mb-2" style={{ color: theme.colors.textPrimary }}>{ind}</div>
              <div className="text-xs" style={{ color: theme.colors.textSecondary }}>Custom solutions for {ind}</div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Industries;
