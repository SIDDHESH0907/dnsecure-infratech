import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown, Shield, Activity, Users } from 'lucide-react';
import { useTheme } from '../theme/ThemeProvider';
import ParticleBackground from './ParticleBackground';
import { useCounter } from '../hooks/useCounter';

const stats = [
  { icon: Shield, label: 'Years Experience', value: 2, suffix: '+' },
  { icon: Users, label: 'Clients Served', value: 50, suffix: '+' },
  { icon: Activity, label: 'Retention Rate', value: 95, suffix: '%' },
];

const StatCard: React.FC<{ icon: React.ElementType; label: string; value: number; suffix: string; delay: number }> = ({
  icon: Icon, label, value, suffix, delay,
}) => {
  const { theme } = useTheme();
  const count = useCounter(value, 2000, true);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.6 }}
      className="flex flex-col items-center gap-2 px-6 py-5 rounded-2xl"
      style={{
        background: 'rgba(255,255,255,0.04)',
        border: `1px solid ${theme.colors.border}`,
        backdropFilter: 'blur(12px)',
      }}
    >
      <div
        className="w-10 h-10 rounded-xl flex items-center justify-center"
        style={{ background: `${theme.colors.primary}20` }}
      >
        <Icon size={20} style={{ color: theme.colors.primary }} />
      </div>
      <div className="text-3xl font-bold" style={{ color: theme.colors.textPrimary }}>
        {count}{suffix}
      </div>
      <div className="text-xs font-medium tracking-wide uppercase" style={{ color: theme.colors.textMuted }}>
        {label}
      </div>
    </motion.div>
  );
};

const Hero: React.FC = () => {
  const { theme } = useTheme();
  const sectionRef = useRef<HTMLElement>(null);

  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToSolutions = () => {
    document.querySelector('#solutions')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ background: theme.colors.gradientHero }}
    >
      <ParticleBackground />

      {/* Radial glow behind content */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse 80% 60% at 50% 40%, ${theme.colors.accentGlow}, transparent 70%)`,
          zIndex: 2,
        }}
      />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-10"
        style={{
          backgroundImage: `linear-gradient(${theme.colors.primary}20 1px, transparent 1px), linear-gradient(90deg, ${theme.colors.primary}20 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
          zIndex: 2,
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 pb-16">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8"
          style={{
            background: `${theme.colors.primary}15`,
            border: `1px solid ${theme.colors.border}`,
          }}
        >
          <span
            className="w-2 h-2 rounded-full animate-pulse"
            style={{ background: theme.colors.accent }}
          />
          <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: theme.colors.primary }}>
            Enterprise Cybersecurity Solutions
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.8 }}
          className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight mb-6"
          style={{ color: theme.colors.textPrimary }}
        >
          Secure Your{' '}
          <span
            className="relative inline-block"
            style={{
              background: `linear-gradient(135deg, var(--color-gradientTextStart), var(--color-gradientTextEnd))`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              // Add subtle text-shadow on light themes to preserve contrast
              textShadow: theme.name && theme.name.includes('light') ? '0 1px 0 rgba(255,255,255,0.7), 0 2px 8px rgba(0,0,0,0.06)' : 'none',
            }}
          >
            Digital Infrastructure
          </span>{' '}
          with Confidence
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="text-base sm:text-lg lg:text-xl leading-relaxed max-w-3xl mx-auto mb-10"
          style={{ color: theme.colors.textSecondary }}
        >
          Advanced Cybersecurity, Firewall, Network Infrastructure &amp; Enterprise IT Solutions for Modern Businesses.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <button
            onClick={scrollToContact}
            className="group flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-white transition-all duration-300 hover:scale-105"
            style={{
              background: theme.colors.gradientButton,
              boxShadow: `0 8px 30px ${theme.colors.accentGlow}`,
            }}
          >
            Contact Us
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-200" />
          </button>
          <button
            onClick={scrollToSolutions}
            className="group flex items-center gap-2 px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
            style={{
              color: theme.colors.textPrimary,
              background: 'rgba(255,255,255,0.06)',
              border: `1px solid ${theme.colors.border}`,
              backdropFilter: 'blur(12px)',
            }}
          >
            Explore Solutions
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-200" />
          </button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto"
        >
          {stats.map((s, i) => (
            <StatCard key={s.label} {...s} delay={0.7 + i * 0.1} />
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1"
        style={{ color: theme.colors.textMuted }}
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown size={20} />
        </motion.div>
      </motion.button>
    </section>
  );
};

export default Hero;
