
import React from 'react';

const HeroMascot: React.FC = () => (
    <svg viewBox="0 0 300 400" className="w-full">
        <ellipse cx="150" cy="280" rx="80" ry="100" fill="white"/>
        <ellipse cx="150" cy="150" rx="90" ry="110" fill="white"/>
        <circle cx="120" cy="140" r="18" fill="#5e4a8f"/>
        <circle cx="180" cy="140" r="18" fill="#5e4a8f"/>
        <ellipse cx="150" cy="180" rx="40" ry="25" fill="#ffb6c1"/>
        <path d="M 130 185 Q 150 200 170 185" fill="none" stroke="#333" strokeWidth="3"/>
        <polygon points="150,50 130,80 170,80" fill="#ff9800"/>
        <path d="M 150 50 Q 145 30 140 20" fill="none" stroke="#ff9800" strokeWidth="6" strokeLinecap="round"/>
        <ellipse cx="70" cy="120" rx="15" ry="30" fill="#ff6347" transform="rotate(-20 70 120)"/>
        <ellipse cx="230" cy="120" rx="15" ry="30" fill="#ff6347" transform="rotate(20 230 120)"/>
        <path d="M 100 80 Q 80 50 90 30" fill="none" stroke="#ff6347" strokeWidth="8"/>
        <path d="M 200 80 Q 220 50 210 30" fill="none" stroke="#ff6347" strokeWidth="8"/>
    </svg>
);

const Hero: React.FC = () => {
  return (
    <section className="flex flex-col md:flex-row justify-between items-center mb-20 md:mb-32 gap-12 md:gap-16">
      <div className="flex-1 max-w-2xl text-center md:text-left">
        <h1 className="text-5xl lg:text-7xl font-bold mb-6 lg:mb-8 leading-tight">
          G-LogicLens Simulations
        </h1>
        <p className="text-xl lg:text-2xl leading-relaxed text-slate-300 mb-10">
          Interactive math simulations designed for K-12 learners to build confidence and deep understanding.
        </p>
        <button className="bg-gradient-to-br from-cyan-400 to-blue-600 text-white py-4 px-12 text-xl font-semibold rounded-xl cursor-pointer transition-all duration-300 transform shadow-lg shadow-blue-500/30 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/40">
          Start Learning
        </button>
      </div>
      <div className="w-[300px] relative">
        <HeroMascot />
      </div>
    </section>
  );
};

export default Hero;
