
import React from 'react';

const CtaSection: React.FC = () => {
  return (
    <section className="mt-24 sm:mt-32 text-center p-10 sm:p-16 bg-gradient-to-br from-cyan-500/10 to-blue-600/10 rounded-3xl border border-cyan-400/20">
      <h2 className="text-4xl lg:text-5xl font-bold text-white mb-5">
        Ready to Transform Math Learning?
      </h2>
      <p className="text-lg sm:text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
        Join educators and students already using G-LogicLens to make math engaging and accessible for everyone.
      </p>
      <button className="bg-gradient-to-br from-cyan-400 to-blue-600 text-white py-4 px-12 text-xl font-semibold rounded-xl cursor-pointer transition-all duration-300 transform shadow-lg shadow-blue-500/30 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/40">
        Get Started Free
      </button>
    </section>
  );
};

export default CtaSection;
