import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section id="about-us" className="mb-20 md:mb-32">
      <div className="grid md:grid-cols-5 gap-12 items-center">
        <div className="md:col-span-3 text-center md:text-left">
          <h2 className="text-4xl font-bold text-cyan-400 mb-6">About G-LogicLens</h2>
          <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
            <p>
              At G-LogicLens, we believe that every child learns best when curiosity meets creativity. Founded by Goodness Okpara, an educator and AI-driven learning innovator. G-LogicLens was born from a mission to make complex math concepts simple, relatable and fun.
            </p>
            <p>
              Our approach combines interactive simulations, AI-powered tools, and personalized feedback to help students not just memorize, but truly understand the math they are solving. We focus on mastery through engagement, ensuring that each learner progresses at their own pace, builds confidence, and enjoys every learning moment.
            </p>
            <p>
              From mathematical thinking to real-world problem-solving, we bridge the gap between education and innovation; nurturing the next generation of logical thinkers, creators, and dreamers.
            </p>
          </div>
        </div>
        <div className="md:col-span-2 flex justify-center">
          <div className="relative w-64 h-64">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full blur-2xl opacity-40"></div>
            <svg viewBox="0 0 200 200" className="relative w-full h-full">
              <defs>
                <linearGradient id="lensGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#22d3ee', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#3b82f6', stopOpacity: 1 }} />
                </linearGradient>
              </defs>
              {/* Magnifying Glass */}
              <circle cx="90" cy="90" r="60" fill="none" stroke="url(#lensGradient)" strokeWidth="12" />
              <line x1="135" y1="135" x2="175" y2="175" stroke="url(#lensGradient)" strokeWidth="20" strokeLinecap="round" />

              {/* Logic/Brain lines */}
              <path d="M 60 90 C 60 70, 80 60, 90 60" fill="none" stroke="white" strokeWidth="3" strokeOpacity="0.7" />
              <path d="M 90 60 C 100 60, 120 70, 120 90" fill="none" stroke="white" strokeWidth="3" strokeOpacity="0.7" />
              <path d="M 120 90 C 120 110, 100 120, 90 120" fill="none" stroke="white" strokeWidth="3" strokeOpacity="0.7" />
              <path d="M 90 120 C 80 120, 60 110, 60 90" fill="none" stroke="white" strokeWidth="3" strokeOpacity="0.7" />
              <circle cx="90" cy="90" r="10" fill="white" fillOpacity="0.8" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
