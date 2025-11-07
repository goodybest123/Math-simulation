
import React from 'react';
import DecorativeElements from './components/DecorativeElements';
import Hero from './components/Hero';
import SimulationsSection from './components/SimulationsSection';
import FeaturesSection from './components/FeaturesSection';
import CtaSection from './components/CtaSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="font-sans bg-gradient-to-br from-[#0a1628] to-[#1a2847] text-white min-h-screen overflow-x-hidden relative">
      <DecorativeElements />
      
      <main className="max-w-screen-xl mx-auto px-5 sm:px-10 py-16 sm:py-24 relative z-10">
        <Hero />
        <SimulationsSection />
        <FeaturesSection />
        <CtaSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default App;
