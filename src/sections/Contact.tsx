import React, { useState } from 'react';
import SectionWrapper from '../components/SectionWrapper';
import SectionHeading from '../components/SectionHeading';
import { useTheme } from '../theme/ThemeProvider';
import { motion } from 'framer-motion';

type FormErrors = {
  name?: string;
  email?: string;
  service?: string;
  message?: string;
  phone?: string;
};

const Contact: React.FC = () => {
  const { theme } = useTheme();
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('');
  const [message, setMessage] = useState('');
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});

  const validateEmail = (value: string) => /\S+@\S+\.\S+/.test(value.trim());

  const validateField = (field: keyof FormErrors, value: string): string => {
    switch (field) {
      case 'name':
        return value.trim() ? '' : 'Please enter your full name.';
      case 'email':
        if (!value.trim()) return 'Please enter your email address.';
        if (!validateEmail(value)) return 'Please enter a valid email address.';
        return '';
      case 'service':
        return value.trim() ? '' : 'Please select a service.';
      case 'message':
        if (!value.trim()) return 'Please enter your message.';
        if (value.trim().length < 10) return 'Message should be at least 10 characters long.';
        return '';
      case 'phone':
        if (!value.trim()) return '';
        if (value.replace(/\D/g, '').length < 10) return 'Phone number should contain at least 10 digits.';
        return '';
      default:
        return '';
    }
  };

  const updateField = (field: keyof FormErrors, value: string, setter: (next: string) => void) => {
    setter(value);
    setErrors((prev) => ({
      ...prev,
      [field]: validateField(field, value),
    }));
  };

  const validateForm = () => {
    const nextErrors: FormErrors = {
      name: validateField('name', name),
      email: validateField('email', email),
      service: validateField('service', service),
      message: validateField('message', message),
      phone: validateField('phone', phone),
    };

    setErrors(nextErrors);
    return Object.values(nextErrors).every((value) => !value);
  };

  const valid = name.trim() && email.includes('@') && service.trim() && message.trim().length >= 10;

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    if (!valid) return;
    setSending(true);
    setTimeout(() => {
      setSending(false);
      setSent(true);
      setName('');
      setCompany('');
      setEmail('');
      setPhone('');
      setService('');
      setMessage('');
      setErrors({});
    }, 1200);
  };

  return (
    <SectionWrapper id="contact" alternate>
      <SectionHeading label="Contact" title="Send an Inquiry" subtitle="Tell us about your requirements and we’ll help you find the right solution." />

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="p-6 rounded-2xl glass" style={{ border: `1px solid ${theme.colors.border}` }}>
          <h3 className="font-semibold mb-4 text-xl" style={{ color: theme.colors.textPrimary }}>Contact Details</h3>

          <div className="space-y-4" style={{ color: theme.colors.textSecondary }}>
            <div>
              <div className="text-xs uppercase tracking-[0.2em] mb-1" style={{ color: theme.colors.textMuted }}>Email</div>
              <p>support@dnasecureinfratech.com</p>
            </div>
            <div>
              <div className="text-xs uppercase tracking-[0.2em] mb-1" style={{ color: theme.colors.textMuted }}>Phone</div>
              <p>+91 72081 55294</p>
            </div>
            <div>
              <div className="text-xs uppercase tracking-[0.2em] mb-1" style={{ color: theme.colors.textMuted }}>Office</div>
              <p>Plot no.21, Siddhivinayak Park CHS., Airoli, Navi Mumbai</p>
            </div>
            <div>
              <div className="text-xs uppercase tracking-[0.2em] mb-1" style={{ color: theme.colors.textMuted }}>Business Hours</div>
              <p>Mon – Sat: 9:00 AM – 7:00 PM</p>
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
              <div style={{ color: theme.colors.textSecondary }}>We’ll contact you shortly.</div>
            </div>
          ) : (
            <>
              <h3 className="text-2xl font-semibold mb-5" style={{ color: theme.colors.textPrimary }}>Send an Inquiry</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="mb-3">
                  <label className="text-xs font-medium" style={{ color: theme.colors.textMuted }}>Full Name <span className="text-red-500">*</span></label>
                  <input
                    value={name}
                    onChange={(e) => updateField('name', e.target.value, setName)}
                    onBlur={() => setErrors((prev) => ({ ...prev, name: validateField('name', name) }))}
                    placeholder="Your name"
                    aria-invalid={Boolean(errors.name)}
                    className="w-full mt-1 px-3 py-2 rounded-md border"
                    style={{ backgroundColor: theme.colors.bgMid, borderColor: errors.name ? theme.colors.error : theme.colors.border, color: theme.colors.textPrimary }}
                  />
                  {errors.name && <div className="mt-1 text-xs" style={{ color: theme.colors.error }}>{errors.name}</div>}
                </div>

                <div className="mb-3">
                  <label className="text-xs font-medium" style={{ color: theme.colors.textMuted }}>Company</label>
                  <input value={company} onChange={(e) => setCompany(e.target.value)} placeholder="Your company" className="w-full mt-1 px-3 py-2 rounded-md border" style={{ backgroundColor: theme.colors.bgMid, borderColor: theme.colors.border, color: theme.colors.textPrimary }} />
                </div>

                <div className="mb-3">
                  <label className="text-xs font-medium" style={{ color: theme.colors.textMuted }}>Email <span className="text-red-500">*</span></label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => updateField('email', e.target.value, setEmail)}
                    onBlur={() => setErrors((prev) => ({ ...prev, email: validateField('email', email) }))}
                    placeholder="you@company.com"
                    aria-invalid={Boolean(errors.email)}
                    className="w-full mt-1 px-3 py-2 rounded-md border"
                    style={{ backgroundColor: theme.colors.bgMid, borderColor: errors.email ? theme.colors.error : theme.colors.border, color: theme.colors.textPrimary }}
                  />
                  {errors.email && <div className="mt-1 text-xs" style={{ color: theme.colors.error }}>{errors.email}</div>}
                </div>

                <div className="mb-3">
                  <label className="text-xs font-medium" style={{ color: theme.colors.textMuted }}>Phone</label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => updateField('phone', e.target.value, setPhone)}
                    onBlur={() => setErrors((prev) => ({ ...prev, phone: validateField('phone', phone) }))}
                    placeholder="+91"
                    aria-invalid={Boolean(errors.phone)}
                    className="w-full mt-1 px-3 py-2 rounded-md border"
                    style={{ backgroundColor: theme.colors.bgMid, borderColor: errors.phone ? theme.colors.error : theme.colors.border, color: theme.colors.textPrimary }}
                  />
                  {errors.phone && <div className="mt-1 text-xs" style={{ color: theme.colors.error }}>{errors.phone}</div>}
                </div>

                <div className="mb-3 md:col-span-2">
                  <label className="text-xs font-medium" style={{ color: theme.colors.textMuted }}>Service Required <span className="text-red-500">*</span></label>
                  <select
                    value={service}
                    onChange={(e) => updateField('service', e.target.value, setService)}
                    onBlur={() => setErrors((prev) => ({ ...prev, service: validateField('service', service) }))}
                    aria-invalid={Boolean(errors.service)}
                    className="w-full mt-1 px-3 py-2 rounded-md border appearance-none"
                    style={{ backgroundColor: theme.colors.bgMid, borderColor: errors.service ? theme.colors.error : theme.colors.border, color: theme.colors.textPrimary }}
                  >
                    <option value="" style={{ backgroundColor: theme.colors.bgMid, color: theme.colors.textPrimary }}>Select a service</option>
                    <option value="Cybersecurity" style={{ backgroundColor: theme.colors.bgMid, color: theme.colors.textPrimary }}>Cybersecurity</option>
                    <option value="Firewall & Network Security" style={{ backgroundColor: theme.colors.bgMid, color: theme.colors.textPrimary }}>Firewall &amp; Network Security</option>
                    <option value="IT Infrastructure" style={{ backgroundColor: theme.colors.bgMid, color: theme.colors.textPrimary }}>IT Infrastructure</option>
                    <option value="Enterprise IT Solutions" style={{ backgroundColor: theme.colors.bgMid, color: theme.colors.textPrimary }}>Enterprise IT Solutions</option>
                    <option value="Cloud & Infrastructure" style={{ backgroundColor: theme.colors.bgMid, color: theme.colors.textPrimary }}>Cloud &amp; Infrastructure</option>
                    <option value="Other" style={{ backgroundColor: theme.colors.bgMid, color: theme.colors.textPrimary }}>Other</option>
                  </select>
                  {errors.service && <div className="mt-1 text-xs" style={{ color: theme.colors.error }}>{errors.service}</div>}
                </div>

                <div className="mb-4 md:col-span-2">
                  <label className="text-xs font-medium" style={{ color: theme.colors.textMuted }}>Message <span className="text-red-500">*</span></label>
                  <textarea
                    value={message}
                    onChange={(e) => updateField('message', e.target.value, setMessage)}
                    onBlur={() => setErrors((prev) => ({ ...prev, message: validateField('message', message) }))}
                    rows={5}
                    placeholder="Tell us about your requirements..."
                    aria-invalid={Boolean(errors.message)}
                    className="w-full mt-1 px-3 py-2 rounded-md border"
                    style={{ backgroundColor: theme.colors.bgMid, borderColor: errors.message ? theme.colors.error : theme.colors.border, color: theme.colors.textPrimary }}
                  />
                  {errors.message && <div className="mt-1 text-xs" style={{ color: theme.colors.error }}>{errors.message}</div>}
                </div>
              </div>

              <div className="flex items-center gap-3 mt-2">
                <button type="submit" disabled={!valid || sending} className="px-5 py-3 rounded-md text-white font-semibold disabled:opacity-60 disabled:cursor-not-allowed" style={{ background: theme.colors.gradientButton, boxShadow: `0 8px 30px ${theme.colors.accentGlow}` }}>
                  {sending ? 'Sending...' : 'Send Inquiry'}
                </button>
              </div>
            </>
          )}
        </motion.form>
      </div>
    </SectionWrapper>
  );
};

export default Contact;
