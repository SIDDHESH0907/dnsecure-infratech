import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Shield } from 'lucide-react';
import { useTheme } from '../theme/ThemeProvider';
import SectionWrapper from '../components/SectionWrapper';
import SectionHeading from '../components/SectionHeading';

const partners = [
  {
    name: 'Fortinet',
    tagline: 'Next-Gen Firewall & Security Fabric',
    description: 'Industry-leading network security platform delivering unified threat management, SD-WAN, and advanced firewall solutions for enterprises.',
    color: '#e50914',
    bgColor: 'rgba(229,9,20,0.08)',
  },
  {
    name: 'Check Point',
    tagline: 'Cyber Security Leader',
    description: 'Comprehensive cyber security solutions across networks, cloud, and mobile with innovative Infinity security architecture.',
    color: '#e31837',
    bgColor: 'rgba(227,24,55,0.08)',
  },
  {
    name: 'Palo Alto',
    tagline: 'Zero Trust Network Security',
    description: 'Next-generation security platform with AI-powered threat prevention and zero trust architecture for modern enterprises.',
    color: '#fa582d',
    bgColor: 'rgba(250,88,45,0.08)',
  },
  {
    name: 'Cisco',
    tagline: 'Networking & Security Solutions',
    description: 'World\'s leading networking technology company delivering secure, reliable, and intelligent network infrastructure solutions.',
    color: '#1ba0d7',
    bgColor: 'rgba(27,160,215,0.08)',
  },
  {
    name: 'D-Link',
    tagline: 'Network Connectivity Solutions',
    description: 'Comprehensive portfolio of networking products including switches, routers, and wireless access points for businesses of all sizes.',
    color: '#0072bc',
    bgColor: 'rgba(0,114,188,0.08)',
  },
];

const PartnerCard: React.FC<{ partner: typeof partners[0]; index: number }> = ({ partner, index }) => {
  const { theme } = useTheme();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      whileHover={{ y: -6, scale: 1.02 }}
      className="group relative flex flex-col p-6 rounded-2xl cursor-pointer overflow-hidden"
      style={{
        background: theme.colors.bgCard,
        border: `1px solid ${theme.colors.border}`,
        backdropFilter: 'blur(12px)',
        transition: 'all 0.3s ease',
      }}
    >
      {/* Hover glow overlay */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `linear-gradient(135deg, ${partner.color}10, transparent)`,
          boxShadow: `inset 0 0 0 1px ${partner.color}40`,
        }}
      />

      {/* Logo placeholder */}
      <div
        className="relative z-10 w-16 h-16 rounded-xl flex items-center justify-center mb-5"
        style={{ background: partner.bgColor, border: `1px solid ${partner.color}30` }}
      >
        <Shield size={28} style={{ color: partner.color }} strokeWidth={1.5} />
      </div>

      <div className="relative z-10 flex-1">
        <div className="flex items-start justify-between mb-2">
          <div>
            <h3 className="text-lg font-bold" style={{ color: theme.colors.textPrimary }}>
              {partner.name}
            </h3>
            <span className="text-xs font-medium" style={{ color: partner.color }}>
              {partner.tagline}
            </span>
          </div>
        </div>
        <p className="text-sm leading-relaxed mt-3" style={{ color: theme.colors.textSecondary }}>
          {partner.description}
        </p>
      </div>

      <div className="relative z-10 mt-5 pt-4" style={{ borderTop: `1px solid ${theme.colors.border}` }}>
        <button
          className="flex items-center gap-1.5 text-xs font-semibold transition-all duration-200 group-hover:gap-2.5"
          style={{ color: partner.color }}
        >
          Learn More <ExternalLink size={12} />
        </button>
      </div>
    </motion.div>
  );
};

const Partners: React.FC = () => {
  return (
    <SectionWrapper id="partners">
      <SectionHeading
        label="OEM Partners"
        title="Powered by World-Class Technology"
        subtitle="We partner with the industry's most trusted cybersecurity and networking brands to deliver best-in-class solutions."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
        {partners.map((partner, i) => (
          <PartnerCard key={partner.name} partner={partner} index={i} />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Partners;
