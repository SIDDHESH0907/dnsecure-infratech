import React from 'react';
import { MessageCircle } from 'lucide-react';
import { useTheme } from '../theme/ThemeProvider';

const WhatsAppButton: React.FC = () => {
  const { theme } = useTheme();
  const phone = '919999999999'; // replace with real number
  const text = encodeURIComponent('Hello DN Secure InfraTech — I would like to inquire about your services.');
  const href = `https://wa.me/${phone}?text=${text}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="fixed z-50 right-6 bottom-6 p-3 rounded-full shadow-lg flex items-center justify-center"
      style={{
        background: theme.colors.gradientButton,
        boxShadow: `0 10px 30px ${theme.colors.accentGlow}`,
        color: theme.colors.textPrimary,
      }}
      aria-label="Contact on WhatsApp"
    >
      <MessageCircle size={20} />
    </a>
  );
};

export default WhatsAppButton;
