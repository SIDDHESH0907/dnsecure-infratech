import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';
import SectionHeading from '../components/SectionHeading';

// Use the built files from `public/partners/` (served from `/partners/*` in Vite)
const partners = [
  { name: 'Fortinet', logo: '/partners/img11.16067ada.svg' },
  { name: 'Check Point', logo: '/partners/CHKP_BIG.D.svg' },
  { name: 'Palo Alto', logo: '/partners/img17.ed8a645c.svg' },
  { name: 'Cisco', logo: '/partners/cisco-ar21.svg' },
  { name: 'F5 Networks', logo: '/partners/F5_Networks-Logo.wine.svg' },
  { name: 'AWS', logo: '/partners/aws-svgrepo-com.svg' },
  { name: 'Partner 5', logo: '/partners/img12.e11fa515.svg' },
  { name: 'Cisco Partner', logo: '/partners/img24.f11dabfd.svg' },
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
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className="relative flex min-h-32 flex-col rounded-2xl bg-transparent p-2"
    >
      {/* Logo only — no hover highlight */}
      <div className="relative z-10 w-full h-28 flex items-center justify-center">
        <img
          src={partner.logo}
          alt={`${partner.name} logo`}
          loading="eager"
          className="block h-20 w-48 object-contain"
        />
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

      <div className="grid auto-rows-min grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {partners.map((partner, i) => (
          <PartnerCard key={partner.name} partner={partner} index={i} />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Partners;
