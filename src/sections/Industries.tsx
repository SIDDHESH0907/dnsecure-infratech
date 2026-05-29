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

      <div className="py-4 -mx-4 sm:-mx-6 lg:-mx-8">
        <div className="w-full overflow-hidden">
          <div
            className="scrolling flex items-center"
            style={{ animationDuration: '30s' }}
            aria-hidden={false}
            role="list"
          >
            {[...industries, ...industries].map((ind, idx) => (
              <div
                key={`${ind}-${idx}`}
                className="min-w-[220px] p-4 rounded-2xl glass text-center"
                style={{ border: `1px solid ${theme.colors.border}` }}
                role="listitem"
              >
                <div className="text-lg font-bold" style={{ color: theme.colors.textPrimary }}>{ind}</div>
              </div>
            ))}
          </div>
        </div>

        <style>{`
          .scrolling { gap: 1.5rem; align-items: center; display: flex; white-space: nowrap; }
          .scrolling { animation-name: scroll-left; animation-timing-function: linear; animation-iteration-count: infinite; }
          @keyframes scroll-left { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
          /* Reduce motion for users who prefer reduced motion */
          @media (prefers-reduced-motion: reduce) { .scrolling { animation: none; } }
        `}</style>
      </div>
    </SectionWrapper>
  );
};

export default Industries;
