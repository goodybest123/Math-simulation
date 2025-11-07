import React from 'react';

interface Simulation {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const simulationsData: Simulation[] = [
    {
        title: "Place Value Builders",
        description: "Build numbers by dragging and dropping hundreds, tens, and ones blocks, making abstract math concepts tangible and fun.",
        icon: (
            <div className="flex items-end justify-center gap-2 text-2xl font-bold text-white">
                <div className="w-16 h-24 bg-red-500 rounded flex items-center justify-center">H</div>
                <div className="w-12 h-20 bg-blue-500 rounded flex items-center justify-center">T</div>
                <div className="w-8 h-16 bg-yellow-500 rounded flex items-center justify-center">O</div>
            </div>
        )
    },
    {
        title: "Number Decomposer",
        description: "An interactive tool to visually decompose a number into two random parts or explore it as a sum of smaller parts.",
        icon: (
            <div className="text-4xl font-bold flex items-center justify-center gap-3 text-white">
                <span>36</span>
                <span className="text-cyan-400">→</span>
                <div className="flex flex-col text-2xl">
                    <span>30 + 6</span>
                    <span>20 + 16</span>
                </div>
            </div>
        )
    },
    {
        title: "Balance the Numbers!",
        description: "Drag and drop numbers and fruits onto a balance scale to learn about equality and addition in this K-3 simulation.",
        icon: (
             <div className="text-5xl font-bold flex flex-col items-center justify-center gap-2">
                <span>⚖️</span>
                <span className="text-3xl text-white">7 + 2 = 9</span>
            </div>
        )
    },
    {
        title: "Quadratic Function Visualizer",
        description: "Visualize y = ax² + bx + c. Adjust coefficients with sliders to see the graph update in real-time and get AI-powered feedback.",
        icon: (
            <div className="relative w-32 h-32 flex items-center justify-center">
                 <div className="w-full h-0.5 bg-slate-500 absolute"></div>
                 <div className="h-full w-0.5 bg-slate-500 absolute"></div>
                 <svg viewBox="0 0 100 100" className="w-full h-full absolute">
                    <path d="M 10 90 Q 50 10 90 90" stroke="#00d4ff" fill="none" strokeWidth="4" />
                </svg>
            </div>
        )
    },
    {
        title: "Fraction World",
        description: "Build, compare, and perform operations on fractions through engaging, game-like levels with instant feedback.",
        icon: (
            <div className="relative w-full h-full flex items-center justify-center text-7xl">
                <span>🍕</span>
                <div className="absolute w-[80%] h-0.5 bg-slate-800 rotate-45"></div>
                <div className="absolute w-[80%] h-0.5 bg-slate-800 -rotate-45"></div>
                <div className="absolute w-0.5 h-[80%] bg-slate-800"></div>
            </div>
        )
    },
    {
        title: "Basket Builder: Multiplication",
        description: "Learn multiplication by visually building groups. Drag and drop fruits into baskets to solve problems and challenges.",
        icon: (
            <div className="relative w-full h-full flex items-center justify-center gap-4">
                <span className="text-5xl">🌳</span>
                <div className="flex flex-col">
                    <span className="text-3xl">🍎🍎</span>
                    <span className="text-3xl">🍎🍎</span>
                </div>
                <span className="text-4xl">🧺</span>
            </div>
        )
    },
     {
        title: "Long Division Simulator",
        description: "An interactive tool that animates the long-division algorithm, supporting decimal expansion and repeating decimals.",
        icon: (
            <div className="text-3xl font-mono text-white flex items-center justify-center">
                <span className="mr-2">4</span>
                <div className="border-l-2 border-t-2 border-white pl-2 pr-4 py-1">136</div>
            </div>
        )
    },
    {
        title: "Skip Jump Adventure!",
        description: "Learn skip counting and multiplication by making a frog jump along a number line in this fun and interactive game.",
        icon: (
            <div className="w-full h-full flex flex-col items-center justify-center gap-4">
                <span className="text-5xl">🐸</span>
                <div className="w-4/5 h-1 bg-slate-600 relative flex justify-between">
                    <div className="h-3 w-1 bg-white absolute left-0 -top-1"></div>
                    <div className="h-3 w-1 bg-white absolute left-1/3 -top-1"></div>
                    <div className="h-3 w-1 bg-white absolute left-2/3 -top-1"></div>
                    <div className="h-3 w-1 bg-white absolute right-0 -top-1"></div>
                </div>
            </div>
        )
    },
    {
        title: "Pattern Path",
        description: "Learn about arithmetic and geometric sequences through engaging activities like a hopping rabbit and growing plants.",
        icon: (
            <div className="text-4xl font-bold flex items-center gap-2">
                <div className="w-8 h-8 bg-red-500 rounded-full"></div>
                <div className="w-8 h-8 bg-blue-500 rounded"></div>
                <div className="w-8 h-8 bg-red-500 rounded-full"></div>
                <span className="text-slate-500">...</span>
            </div>
        )
    },
    {
        title: "Subtraction Submarine",
        description: "Dive deep and explore shipwrecks by solving subtraction challenges.",
        icon: (
            <div className="relative w-full h-full flex flex-col items-center justify-center gap-2 text-white">
                <span className="text-6xl">🚢</span>
                <div className="flex gap-2 text-cyan-400">
                    <span className="text-2xl">💧</span>
                    <span className="text-xl">💧</span>
                </div>
                <div className="text-3xl font-bold">100 - 42</div>
            </div>
        )
    },
    {
        title: "Ratio Recipe Lab",
        description: "Mix potions and create recipes by understanding and applying ratios.",
        icon: (
             <div className="text-5xl flex items-end justify-center gap-4">
                <span className="text-blue-400">🧪</span>
                <span className="text-purple-400">⚗️</span>
                <span className="text-green-400">🧫</span>
            </div>
        )
    },
    {
        title: "Decimal Dash",
        description: "Race against the clock by quickly and accurately solving decimal operations.",
        icon: (
            <div className="text-5xl font-bold flex flex-col items-center justify-center gap-2">
                <span>⏱️</span>
                <span className="text-3xl text-cyan-300">2.5 × 1.8</span>
            </div>
        )
    },
    {
        title: "Percentage Mall",
        description: "Go on a shopping spree and calculate discounts and sales tax.",
        icon: (
             <div className="text-5xl font-bold flex items-center justify-center gap-4">
                <span>🛒</span>
                <span className="text-red-400 p-2 bg-red-400/20 rounded-lg">-25%</span>
            </div>
        )
    },
    {
        title: "Geometry City Builder",
        description: "Construct a bustling city using various geometric shapes and angles.",
        icon: <div className="text-6xl flex items-end justify-center gap-1"><span>🏠</span><span>🏤</span><span>🏦</span></div>
    },
    {
        title: "Coordinate Treasure",
        description: "Plot points on the coordinate plane to uncover hidden treasure.",
        icon: (
            <div className="relative w-full h-full flex items-center justify-center">
                <div className="grid grid-cols-5 grid-rows-5 w-32 h-32 gap-px bg-slate-600 p-0.5 rounded">
                    {Array.from({length: 25}).map((_, i) => <div key={i} className="bg-slate-800 w-full h-full"></div>)}
                </div>
                <span className="absolute text-4xl">💎</span>
                <span className="absolute bottom-2 left-2 text-white text-xs bg-black/50 px-1 rounded">(3,-4)</span>
            </div>
        )
    },
];

const Card: React.FC<{ simulation: Simulation }> = ({ simulation }) => (
    <div className="bg-[#0f1e3c]/60 border border-white/10 rounded-2xl p-6 sm:p-8 transition-all duration-300 backdrop-blur-md hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-cyan-400/20">
        <div className="w-full h-44 bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl mb-6 flex items-center justify-center relative overflow-hidden">
            {simulation.icon}
        </div>
        <h3 className="text-2xl font-bold mb-3">{simulation.title}</h3>
        <p className="text-base leading-relaxed text-slate-300">{simulation.description}</p>
    </div>
);

const SimulationsSection: React.FC = () => {
  return (
    <section>
      <h2 className="text-4xl font-bold text-cyan-400 mb-4">Simulation Library</h2>
      <p className="text-lg leading-relaxed text-slate-300 mb-10">Explore, play and understand math like never before</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {simulationsData.map((sim, index) => (
          <Card key={index} simulation={sim} />
        ))}
      </div>
      <div className="text-center">
        <button className="bg-transparent text-cyan-400 border-2 border-cyan-400 py-3 px-10 text-lg font-semibold rounded-xl cursor-pointer transition-all duration-300 hover:bg-cyan-400 hover:text-white hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-400/30">
            View All Simulations →
        </button>
      </div>
    </section>
  );
};

export default SimulationsSection;
