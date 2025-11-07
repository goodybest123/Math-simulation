
import React from 'react';

interface Feature {
    icon: string;
    title: string;
    description: string;
}

const featuresData: Feature[] = [
    {
        icon: "🎮",
        title: "Interactive Learning",
        description: "Hands-on simulations that make abstract concepts tangible and fun to explore"
    },
    {
        icon: "📈",
        title: "Progress Tracking",
        description: "Monitor student growth with detailed analytics and personalized feedback"
    },
    {
        icon: "🎯",
        title: "Adaptive Difficulty",
        description: "Automatically adjusts to each student's level for optimal learning"
    },
    {
        icon: "👥",
        title: "Classroom Ready",
        description: "Perfect for individual practice, small groups, or whole class instruction"
    },
    {
        icon: "✨",
        title: "Standards Aligned",
        description: "Aligned with Common Core and state standards for K-12 mathematics"
    },
    {
        icon: "💡",
        title: "Instant Feedback",
        description: "Real-time guidance helps students learn from mistakes and build confidence"
    }
];

const FeatureItem: React.FC<{ feature: Feature }> = ({ feature }) => (
    <div className="p-4 text-center">
        <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-2xl flex items-center justify-center text-4xl mx-auto mb-5 shadow-lg shadow-blue-500/30">
            {feature.icon}
        </div>
        <h3 className="text-2xl font-bold mb-4 text-white">{feature.title}</h3>
        <p className="text-base text-slate-300 leading-relaxed">{feature.description}</p>
    </div>
);

const FeaturesSection: React.FC = () => {
  return (
    <section className="mt-20 sm:mt-32 text-center">
      <h2 className="text-4xl font-bold text-white mb-5">Why Choose G-LogicLens?</h2>
      <p className="max-w-3xl mx-auto mb-12 text-lg text-slate-300">
        Our simulations are designed with educators and students in mind, combining proven pedagogical methods with engaging technology.
      </p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10 mt-12">
        {featuresData.map((feature, index) => (
          <FeatureItem key={index} feature={feature} />
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
