import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Network, Wifi, Server, Lock, Cloud, BarChart3 } from 'lucide-react';
import { useTheme } from '../theme/ThemeProvider';
import SectionWrapper from '../components/SectionWrapper';
import SectionHeading from '../components/SectionHeading';

const solutions = [
  {
    icon: ShieldCheck,
    title: 'Firewall Solutions',
    description: 'Next-generation firewall deployment, configuration, and management for comprehensive perimeter defense.',
  },
  {
    icon: Network,
    title: 'Network Switches',
    description: 'Managed and unmanaged switch infrastructure for high-performance enterprise LAN environments.',
  },
  {
    icon: Wifi,
    title: 'Wireless Access Points',
    description: 'Enterprise-grade Wi-Fi solutions with seamless coverage, roaming, and centralized management.',
  },
  {
    icon: Server,
    title: 'Enterprise Servers',
    description: 'High-availability server deployments, virtualization, and data center infrastructure optimization.',
  },
  {
    icon: Lock,
    title: 'Network Security',
    description: 'Comprehensive network security assessments, IPS/IDS deployment, and threat intelligence integration.',
  },
  {
    icon: Cloud,
    title: 'Cloud Security',
    description: 'Secure cloud migration, CASB implementation, and hybrid cloud security architecture design.',
  },
  {
    icon: ShieldCheck,
    title: 'VPN Solutions',
    description: 'Site-to-site and remote access VPN deployment for secure encrypted communications.',
  },
  {
    icon: BarChart3,
    title: 'Infrastructure Monitoring',
    description: '24/7 network monitoring, SIEM integration, and proactive threat detection and response.',
  },
];

const SolutionCard: React.FC<{ icon: React.ElementType; title: string; description: string; index: number }> = ({
  icon: Icon, title, description, index,
}) => {
  const { theme } = useTheme();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ delay: (index % 4) * 0.1, duration: 0.6 }}
      whileHover={{ y: -5 }}
      className="group relative p-6 rounded-2xl overflow-hidden cursor-default"
      style={{
        background: theme.colors.bgCard,
        backdropFilter: 'blur(12px)',
        transition: 'all 0.3s ease',
      }}
    >
      {/* Gradient border via pseudo-element simulation */}
      <div
        className="absolute inset-0 rounded-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `linear-gradient(135deg, ${theme.colors.primary}30, transparent, ${theme.colors.accent}20)`,
          padding: '1px',
          WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'xor',
          maskComposite: 'exclude',
        }}
      />
      <div
        className="absolute inset-0 rounded-2xl"
        style={{ border: `1px solid ${theme.colors.border}` }}
      />

      {/* Glow on hover */}
      <div
        className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: `linear-gradient(90deg, transparent, ${theme.colors.primary}, ${theme.colors.accent}, transparent)` }}
      />

      <div className="relative z-10">
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110"
          style={{
            background: `linear-gradient(135deg, ${theme.colors.primary}25, ${theme.colors.accent}15)`,
            boxShadow: `0 0 0 0 ${theme.colors.accentGlow}`,
          }}
        >
          <Icon
            size={22}
            style={{ color: theme.colors.primary }}
            strokeWidth={1.8}
          />
        </div>

        <h3 className="text-base font-bold mb-2" style={{ color: theme.colors.textPrimary }}>
          {title}
        </h3>
        <p className="text-sm leading-relaxed" style={{ color: theme.colors.textSecondary }}>
          {description}
        </p>
      </div>
    </motion.div>
  );
};

const Solutions: React.FC = () => {
  return (
    <SectionWrapper id="solutions" alternate>
      <SectionHeading
        label="Our Solutions"
        title="Comprehensive Security & Infrastructure Services"
        subtitle="From perimeter defense to cloud security, we deliver end-to-end IT and cybersecurity solutions for your business."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {solutions.map((s, i) => (
          <SolutionCard key={s.title} {...s} index={i} />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Solutions;
