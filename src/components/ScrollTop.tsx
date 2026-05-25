import React, { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';
import { useTheme } from '../theme/ThemeProvider';

const ScrollTop: React.FC = () => {
  const { theme } = useTheme();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 420);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed z-50 right-6 bottom-20 p-3 rounded-lg text-white"
      style={{ background: theme.colors.primary, boxShadow: `0 8px 30px ${theme.colors.accentGlow}` }}
      aria-label="Scroll to top"
    >
      <ArrowUp />
    </button>
  );
};

export default ScrollTop;
