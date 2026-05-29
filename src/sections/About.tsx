import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Award, Users, TrendingUp } from 'lucide-react';
import { useTheme } from '../theme/ThemeProvider';
import SectionWrapper from '../components/SectionWrapper';
import SectionHeading from '../components/SectionHeading';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useCounter } from '../hooks/useCounter';

const statItems = [
  { icon: Award, value: 4, suffix: '+', label: 'Years Experience', sub: 'In enterprise IT & security' },
  { icon: Users, value: 50, suffix: '+', label: 'Clients Served', sub: 'Across 8 industries' },
  { icon: TrendingUp, value: 95, suffix: '%', label: 'Client Retention', sub: 'Long-term partnerships' },
];

const highlights = [
  'Enterprise-grade firewall & network security',
  'Certified OEM partnerships with global leaders',
  'Tailored solutions for every industry segment',
  'Rapid deployment with minimal downtime',
  'Ongoing support and infrastructure monitoring',
  'Scalable architectures for future growth',
];

const StatCounter: React.FC<{ icon: React.ElementType; value: number; suffix: string; label: string; sub: string; delay: number; trigger: boolean }> = ({
  icon: Icon, value, suffix, label, sub, delay, trigger,
}) => {
  const { theme } = useTheme();
  const count = useCounter(value, 2000, trigger);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={trigger ? { opacity: 1, y: 0 } : {}}
      transition={{ delay, duration: 0.6 }}
      className="flex flex-col items-center text-center p-6 rounded-2xl"
      style={{
        background: theme.colors.bgCard,
        border: `1px solid ${theme.colors.border}`,
        backdropFilter: 'blur(12px)',
      }}
    >
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
        style={{ background: `${theme.colors.primary}20` }}
      >
        <Icon size={22} style={{ color: theme.colors.primary }} />
      </div>
      <div className="text-4xl font-extrabold mb-1" style={{ color: theme.colors.textPrimary }}>
        {count}{suffix}
      </div>
      <div className="font-semibold text-sm mb-1" style={{ color: theme.colors.primary }}>
        {label}
      </div>
      <div className="text-xs" style={{ color: theme.colors.textMuted }}>{sub}</div>
    </motion.div>
  );
};

const About: React.FC = () => {
  const { theme } = useTheme();
  const { ref, isInView } = useScrollReveal(0.2);

  return (
    <SectionWrapper id="about" alternate>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left: Text content */}
        <div>
          <SectionHeading
            label="About Us"
            title="Trusted Cybersecurity Partner Since 2022"
            subtitle="For over 4 years, DN Secure InfraTech has been a trusted provider of reliable IT and cybersecurity solutions to organizations across India."
            center={false}
          />

          <p className="text-base leading-relaxed mb-8" style={{ color: theme.colors.textSecondary }}>
            We focus on delivering secure, scalable, and future-ready infrastructure solutions tailored for modern businesses. Our team of certified engineers brings deep expertise in network security, firewall deployment, and enterprise IT infrastructure.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {highlights.map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="flex items-start gap-3"
              >
                <CheckCircle size={16} className="mt-0.5 flex-shrink-0" style={{ color: theme.colors.primary }} />
                <span className="text-sm" style={{ color: theme.colors.textSecondary }}>{item}</span>
              </motion.div>
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="mt-10 px-7 py-3 rounded-xl text-white font-semibold text-sm"
            style={{ background: theme.colors.gradientButton, boxShadow: `0 6px 20px ${theme.colors.accentGlow}` }}
          >
            Partner With Us
          </motion.button>
        </div>

        {/* Right: Stats */}
        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4">
          {statItems.map((s, i) => (
            <StatCounter key={s.label} {...s} delay={0.1 + i * 0.15} trigger={isInView} />
          ))}

          {/* Visual feature card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="p-6 rounded-2xl relative overflow-hidden"
            style={{
              background: `linear-gradient(135deg, ${theme.colors.primary}20, ${theme.colors.accent}10)`,
              border: `1px solid ${theme.colors.borderGlow}`,
            }}
          >
            <div
              className="absolute -top-8 -right-8 w-32 h-32 rounded-full blur-2xl opacity-30"
              style={{ background: theme.colors.accent }}
            />
            <div className="relative z-10">
              <div className="text-sm font-semibold mb-2" style={{ color: theme.colors.accent }}>
                India-Wide Coverage
              </div>
              <div className="text-2xl font-bold mb-1" style={{ color: theme.colors.textPrimary }}>
                8 Industries
              </div>
              <div className="text-xs" style={{ color: theme.colors.textSecondary }}>
                Banking · Healthcare · Manufacturing · Education · IT · Logistics · Retail · Startups
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default About;
