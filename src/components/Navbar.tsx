import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Menu, X, ChevronRight } from 'lucide-react';
import { useTheme } from '../theme/ThemeProvider';
import ThemeSwitcher from './ThemeSwitcher';

const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Partners', href: '#partners' },
  { label: 'Solutions', href: '#solutions' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Industries', href: '#industries' },
  { label: 'Contact', href: '#contact' },
];

const Navbar: React.FC = () => {
  const { theme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrolledBg = scrolled
    ? theme.name === 'white'
      ? `rgba(255,255,255,0.92)`
      : `rgba(5, 13, 26, 0.95)`
    : 'transparent';

  const scrolledBackdrop = scrolled ? 'blur(20px)' : 'none';

  return (
    <>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          background: scrolledBg,
          backdropFilter: scrolledBackdrop,
          borderBottom: scrolled ? `1px solid ${theme.colors.border}` : 'none',
          boxShadow: scrolled
            ? theme.name === 'white'
              ? `0 4px 20px rgba(0,0,0,0.06)`
              : `0 4px 30px rgba(0,0,0,0.4)`
            : 'none',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <button
              onClick={() => handleNavClick('#hero')}
              className="flex items-center gap-3 group"
            >
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center relative overflow-hidden"
                style={{
                  background: theme.colors.gradientButton,
                  boxShadow: `0 0 20px ${theme.colors.accentGlow}`,
                }}
              >
                <img
                  src="/main-logo.png"
                  alt="DNA Secure InfraTech logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col leading-tight">
                <span
                  className="font-bold text-base tracking-wide"
                  style={{ color: theme.colors.textPrimary }}
                >
                  DNA SECURE
                </span>
                {/* <span
                  className="font-bold text-base tracking-wide"
                  style={{ color: theme.colors.textPrimary }}
                >
                  InfraTech
                </span> */}
                <span
                  className="text-xs font-bold tracking-widest uppercase"
                  style={{ color: theme.colors.primary }}
                >
                  InfraTech
                </span>
              </div>
            </button>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="relative px-4 py-2 text-sm font-medium transition-all duration-200 rounded-lg group"
                  style={{ color: theme.colors.textSecondary }}
                >
                  <span className="relative z-10 group-hover:text-white transition-colors duration-200">
                    {link.label}
                  </span>
                  <span
                    className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                    style={{ background: theme.colors.bgGlass, border: `1px solid ${theme.colors.border}` }}
                  />
                </button>
              ))}
              {/* Get Started button removed per request */}
              <div className="ml-3">
                <ThemeSwitcher />
              </div>
            </div>

            {/* Mobile Toggle */}
            <button
              className="lg:hidden p-2 rounded-lg"
              style={{ color: theme.colors.textPrimary, background: theme.colors.bgGlass }}
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
            {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed inset-0 z-40 lg:hidden"
            style={{
              background: theme.name === 'white' ? 'rgba(255,255,255,0.98)' : `rgba(5, 13, 26, 0.98)`,
              backdropFilter: theme.name === 'white' ? 'none' : 'blur(20px)',
            }}
          >
            <div className="flex flex-col h-full pt-24 pb-8 px-6">
              <div className="flex flex-col gap-2">
                {navLinks.map((link, i) => (
                  <motion.button
                    key={link.href}
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.07 }}
                    onClick={() => handleNavClick(link.href)}
                    className="flex items-center justify-between px-4 py-4 rounded-xl text-left"
                    style={{
                      color: theme.colors.textPrimary,
                      border: `1px solid ${theme.colors.border}`,
                      background: theme.colors.bgCard,
                    }}
                  >
                    <span className="text-lg font-medium">{link.label}</span>
                    <ChevronRight size={18} style={{ color: theme.colors.primary }} />
                  </motion.button>
                ))}
              </div>
              <div className="mt-auto">
                {/* mobile Get Started removed per request */}
                <div className="mt-3">
                  <ThemeSwitcher />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
