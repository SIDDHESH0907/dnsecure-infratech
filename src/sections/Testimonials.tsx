import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';
import SectionHeading from '../components/SectionHeading';
import { useTheme } from '../theme/ThemeProvider';

const testimonials = [
  { quote: 'Professional and reliable cybersecurity support.', name: 'Rohit Kumar', company: 'ABC Bank' },
  { quote: 'Excellent firewall deployment and support.', name: 'Priya Sharma', company: 'MediCare Pvt Ltd' },
  { quote: 'Highly recommended for enterprise network security.', name: 'Vikram Singh', company: 'LogiTech' },
];

const Testimonials: React.FC = () => {
  const { theme } = useTheme();

  return (
    <SectionWrapper id="testimonials" alternate>
      <SectionHeading label="Testimonials" title="Trusted By Our Clients" subtitle="What our customers say about DN Secure InfraTech" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12 }}
            className="p-6 rounded-2xl glass"
            style={{ border: `1px solid ${theme.colors.border}` }}
          >
            <div className="text-lg italic mb-4" style={{ color: theme.colors.textPrimary }}>
              “{t.quote}”
            </div>
            <div className="flex items-center gap-3 mt-3">
              <div className="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center text-sm font-semibold" style={{ background: theme.colors.bgLight }}>
                {t.name.split(' ').map((s) => s[0]).join('')}
              </div>
              <div>
                <div className="font-semibold" style={{ color: theme.colors.textPrimary }}>{t.name}</div>
                <div className="text-xs" style={{ color: theme.colors.textSecondary }}>{t.company}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Testimonials;
