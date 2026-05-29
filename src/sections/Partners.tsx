import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';
import SectionHeading from '../components/SectionHeading';

// Use the built files from `public/partners/` (served from `/partners/*` in Vite)
const partners = [
  { name: 'Fortinet', logo: '/partners/img11.16067ada.svg' },
  { name: 'Check Point', logo: '/partners/img12.e11fa515.svg' },
  { name: 'Palo Alto', logo: '/partners/img17.ed8a645c.svg' },
  { name: 'Cisco', logo: '/partners/img24.f11dabfd.svg' },
  { name: 'D-Link', logo: '/partners/img25.5a0fc09d.svg' },
  { name: 'Partner 6', logo: '/partners/img26.c0d189a7.svg' },
  { name: 'Partner 7', logo: '/partners/img27.76a9da12.svg' },
  { name: 'Partner 8', logo: '/partners/img28.182c9467.svg' },
  { name: 'Partner 9', logo: '/partners/img4.e5f667ee.svg' },
  { name: 'Partner 10', logo: '/partners/img5.9e35808f.svg' },
  { name: 'Partner 11', logo: '/partners/img6.b5e27e08.svg' },
];

const PartnerCard: React.FC<{ partner: typeof partners[0]; index: number }> = ({ partner, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className="relative flex flex-col p-2 rounded-2xl overflow-hidden bg-transparent"
      style={{ transition: 'all 0.3s ease' }}
    >
      {/* Logo only — no hover highlight */}
      <div className="relative z-10 w-full flex items-center justify-center py-8">
        <img src={partner.logo} alt={`${partner.name} logo`} className="max-w-full max-h-16 object-contain" />
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
