import React from 'react';
import { useTheme } from '../theme/ThemeProvider';

const Footer: React.FC = () => {
  const { theme } = useTheme();

  return (
    <footer className="py-10" style={{ background: theme.colors.bgMid }}>
      {/* Footer main content removed per request */}

      <div className="mt-8 border-t" style={{ borderColor: theme.colors.border }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-sm text-center" style={{ color: theme.colors.textMuted }}>
          © {new Date().getFullYear()} DN Secure InfraTech — All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
