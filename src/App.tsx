import React from 'react';
import Navbar from './components/Navbar';
import ParticleBackground from './components/ParticleBackground';
import Hero from './components/Hero';
import About from './sections/About';
import Partners from './sections/Partners';
import Solutions from './sections/Solutions';
import WhyChooseUs from './sections/WhyChooseUs';
import Testimonials from './sections/Testimonials';
import Industries from './sections/Industries';
import Contact from './sections/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import ScrollTop from './components/ScrollTop';

function App() {
  return (
    <div className="min-h-screen text-white" style={{ background: 'var(--color-bgDark)' }}>
      <Navbar />

      {/* HERO */}
      <Hero />

      {/* Placeholder sections to be implemented next */}
      <About />
      <Partners />
      <Solutions />
      <WhyChooseUs />
      <Industries />
      <Testimonials />
      <Contact />

      <Footer />

      <WhatsAppButton />
      <ScrollTop />
    </div>
  );
}

export default App;
