import React, { useState } from 'react';
import SectionWrapper from '../components/SectionWrapper';
import SectionHeading from '../components/SectionHeading';
import { useTheme } from '../theme/ThemeProvider';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  const { theme } = useTheme();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const valid = name.trim() && email.includes('@') && message.trim().length >= 10;

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!valid) return;
    setSending(true);
    setTimeout(() => {
      setSending(false);
      setSent(true);
      setName('');
      setEmail('');
      setMessage('');
    }, 1200);
  };

  return (
    <SectionWrapper id="contact" alternate>
      <SectionHeading label="Contact" title="Get In Touch" subtitle="Reach out for project consultations, quotes, and support." />

      <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="p-6 rounded-2xl glass" style={{ border: `1px solid ${theme.colors.border}` }}>
          <h3 className="font-semibold mb-3" style={{ color: theme.colors.textPrimary }}>Contact Details</h3>
          <p style={{ color: theme.colors.textSecondary }}>Office Address: 123 Secure Lane, Bangalore, India</p>
          <p className="mt-2" style={{ color: theme.colors.textSecondary }}>Phone: +91 99999 99999</p>
          <p style={{ color: theme.colors.textSecondary }}>Email: contact@dnsecureinfratech.com</p>

          <div className="mt-6">
            <div className="w-full h-40 bg-gray-800 rounded-md flex items-center justify-center" style={{ background: theme.colors.bgLight, color: theme.colors.textMuted }}>
              Google Maps Placeholder
            </div>
          </div>
        </div>

        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-6 rounded-2xl glass"
          style={{ border: `1px solid ${theme.colors.border}` }}
        >
          {sent ? (
            <div className="text-center py-8">
              <div className="text-lg font-bold mb-2" style={{ color: theme.colors.textPrimary }}>Message Sent</div>
              <div style={{ color: theme.colors.textSecondary }}>We'll contact you shortly.</div>
            </div>
          ) : (
            <>
              <div className="mb-3">
                <label className="text-xs font-medium" style={{ color: theme.colors.textMuted }}>Name</label>
                <input value={name} onChange={(e) => setName(e.target.value)} className="w-full mt-1 px-3 py-2 rounded-md bg-transparent border" style={{ borderColor: theme.colors.border, color: theme.colors.textPrimary }} />
              </div>
              <div className="mb-3">
                <label className="text-xs font-medium" style={{ color: theme.colors.textMuted }}>Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} className="w-full mt-1 px-3 py-2 rounded-md bg-transparent border" style={{ borderColor: theme.colors.border, color: theme.colors.textPrimary }} />
              </div>
              <div className="mb-4">
                <label className="text-xs font-medium" style={{ color: theme.colors.textMuted }}>Message</label>
                <textarea value={message} onChange={(e) => setMessage(e.target.value)} rows={5} className="w-full mt-1 px-3 py-2 rounded-md bg-transparent border" style={{ borderColor: theme.colors.border, color: theme.colors.textPrimary }} />
              </div>

              <div className="flex items-center gap-3">
                <button type="submit" disabled={!valid || sending} className="px-5 py-3 rounded-md text-white font-semibold" style={{ background: theme.colors.gradientButton, boxShadow: `0 8px 30px ${theme.colors.accentGlow}` }}>
                  {sending ? 'Sending...' : 'Send Message'}
                </button>
                <div style={{ color: theme.colors.textSecondary }}>Or contact us via WhatsApp</div>
              </div>
            </>
          )}
        </motion.form>
      </div>
    </SectionWrapper>
  );
};

export default Contact;
