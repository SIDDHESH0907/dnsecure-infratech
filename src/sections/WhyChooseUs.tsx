import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Handshake, Zap, Cpu, TrendingUp, Headphones as HeadphonesIcon } from 'lucide-react';
import { useTheme } from '../theme/ThemeProvider';
import SectionWrapper from '../components/SectionWrapper';
import SectionHeading from '../components/SectionHeading';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useCounter } from '../hooks/useCounter';

const features = [
  {
    icon: ShieldCheck,
    title: 'Enterprise-grade Security',
    description: 'Multi-layered security architecture built to protect critical infrastructure against advanced persistent threats.',
  },
  {
    icon: Handshake,
    title: 'Trusted OEM Partnerships',
    description: 'Authorized partner for Fortinet, Cisco, Palo Alto, Check Point and D-Link — delivering certified solutions.',
  },
  {
    icon: Zap,
    title: 'Fast Deployment',
    description: 'Rapid, zero-downtime deployment methodology ensuring your business remains operational throughout.',
  },
  {
    icon: Cpu,
    title: 'Infrastructure Expertise',
    description: 'Deep technical expertise in network design, server infrastructure, and security architecture.',
  },
  {
    icon: TrendingUp,
    title: 'Scalable Solutions',
    description: 'Future-ready architectures that scale effortlessly as your business grows and evolves.',
  },
  {
    icon: HeadphonesIcon,
    title: 'Reliable Support',
    description: 'Dedicated technical support team ensuring maximum uptime and rapid incident response.',
  },
];

const counters = [
  { value: 4, suffix: '+', label: 'Years Experience' },
  { value: 50, suffix: '+', label: 'Clients Served' },
  { value: 8, suffix: '', label: 'Industries' },
  { value: 95, suffix: '%', label: 'Retention Rate' },
];

const FeatureCard: React.FC<{ icon: React.ElementType; title: string; description: string; index: number }> = ({
  icon: Icon, title, description, index,
}) => {
  const { theme } = useTheme();

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ delay: (index % 3) * 0.12, duration: 0.6 }}
      whileHover={{ scale: 1.02 }}
      className="group flex gap-5 p-5 rounded-xl"
      style={{
        background: theme.colors.bgCard,
        border: `1px solid ${theme.colors.border}`,
        backdropFilter: 'blur(12px)',
        transition: 'all 0.3s ease',
      }}
    >
      <div
        className="flex-shrink-0 w-11 h-11 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110"
        style={{
          background: `linear-gradient(135deg, ${theme.colors.primary}25, ${theme.colors.accent}15)`,
        }}
      >
        <Icon size={20} style={{ color: theme.colors.primary }} strokeWidth={1.8} />
      </div>
      <div>
        <h3 className="text-sm font-bold mb-1.5" style={{ color: theme.colors.textPrimary }}>
          {title}
        </h3>
        <p className="text-xs leading-relaxed" style={{ color: theme.colors.textSecondary }}>
          {description}
        </p>
      </div>
    </motion.div>
  );
};

const CounterBlock: React.FC<{ value: number; suffix: string; label: string; trigger: boolean; delay: number }> = ({
  value, suffix, label, trigger, delay,
}) => {
  const { theme } = useTheme();
  const count = useCounter(value, 2000, trigger);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={trigger ? { opacity: 1, scale: 1 } : {}}
      transition={{ delay, duration: 0.5 }}
      className="text-center"
    >
        <div
          className="text-4xl lg:text-5xl font-extrabold mb-1"
          style={{
            background: `linear-gradient(135deg, var(--color-gradientTextStart), var(--color-gradientTextEnd))`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
      >
        {count}{suffix}
      </div>
      <div className="text-xs font-medium tracking-wider uppercase" style={{ color: theme.colors.textMuted }}>
        {label}
      </div>
    </motion.div>
  );
};

const WhyChooseUs: React.FC = () => {
  const { theme } = useTheme();
  const { ref, isInView } = useScrollReveal(0.2);

  return (
    <SectionWrapper id="why-us">
      <SectionHeading
        label="Why Choose Us"
        title="The DNA Secure InfraTech Advantage"
        subtitle="We combine technical excellence with business acumen to deliver cybersecurity and infrastructure solutions that make a real difference."
      />

      {/* Counters bar */}
      <div
        ref={ref}
        className="grid grid-cols-2 lg:grid-cols-4 gap-6 p-8 rounded-2xl mb-14"
        style={{
          background: `linear-gradient(135deg, ${theme.colors.primary}10, ${theme.colors.accent}08)`,
          border: `1px solid ${theme.colors.borderGlow}`,
        }}
      >
        {counters.map((c, i) => (
          <CounterBlock key={c.label} {...c} trigger={isInView} delay={i * 0.1} />
        ))}
      </div>

      {/* Feature grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {features.map((f, i) => (
          <FeatureCard key={f.title} {...f} index={i} />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default WhyChooseUs;
