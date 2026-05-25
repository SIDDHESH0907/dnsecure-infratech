import React from 'react';
import { useTheme } from '../theme/ThemeProvider';
import { Github, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  const { theme } = useTheme();

  return (
    <footer className="py-10" style={{ background: theme.colors.bgMid }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <div className="font-bold text-lg" style={{ color: theme.colors.textPrimary }}>DN Secure InfraTech</div>
          <div className="text-sm mt-2" style={{ color: theme.colors.textSecondary }}>Enterprise cybersecurity & infrastructure solutions</div>
        </div>

        <div className="flex flex-col sm:flex-row gap-6">
          <div>
            <div className="font-semibold" style={{ color: theme.colors.textPrimary }}>Solutions</div>
            <div className="text-sm mt-2" style={{ color: theme.colors.textSecondary }}>Firewall · Cloud Security · VPN · Monitoring</div>
          </div>
          <div>
            <div className="font-semibold" style={{ color: theme.colors.textPrimary }}>Partners</div>
            <div className="text-sm mt-2" style={{ color: theme.colors.textSecondary }}>Fortinet · Palo Alto · Cisco · Check Point · D-Link</div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <a href="#" aria-label="GitHub" style={{ color: theme.colors.textPrimary }}><Github /></a>
          <a href="#" aria-label="LinkedIn" style={{ color: theme.colors.textPrimary }}><Linkedin /></a>
        </div>
      </div>

      <div className="mt-8 border-t" style={{ borderColor: theme.colors.border }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-sm text-center" style={{ color: theme.colors.textMuted }}>
          © {new Date().getFullYear()} DN Secure InfraTech — All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
