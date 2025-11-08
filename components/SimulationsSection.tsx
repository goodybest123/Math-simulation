import React from 'react';

interface Simulation {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const simulationsData: Simulation[] = [
    {
        title: "Quadratic Function Visualizer",
        description: "An interactive educational tool that visualizes quadratic functions (y = ax² + bx + c). Users can adjust coefficients with sliders, see the graph update in real-time, and get AI-powered feedback and quizzes to deepen their understanding.",
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
        title: "Number Splitter",
        description: "An interactive tool to visually split a number into two random parts.",
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
        title: "Number Decomposer",
        description: "An interactive educational game for kids to learn about place value by decomposing numbers into hundreds, tens, and ones using virtual blocks.",
        icon: (
            <div className="text-4xl font-bold flex items-center justify-center gap-3 text-white">
                <span>123</span>
                <span className="text-cyan-400">→</span>
                <div className="flex flex-col text-2xl">
                    <span>100</span>
                    <span>20</span>
                    <span>3</span>
                </div>
            </div>
        )
    },
    {
        title: "Interactive Subtraction Simulation",
        description: "An educational web application that helps visualize and understand subtraction concepts, from basic counting to multi-digit regrouping, through five interactive levels.",
        icon: (
            <div className="text-5xl font-bold flex flex-col items-center justify-center gap-2">
                <span className="text-white">15 - 7</span>
                <span className="text-cyan-400 text-4xl">= 8</span>
            </div>
        )
    },
    {
        title: "Fraction World: Build, Compare, and Mix!",
        description: "An interactive and visual web application for students to learn fractions. Users can build, compare, and perform operations on fractions through engaging, game-like levels with instant feedback and fun animations.",
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
        title: "Space Subtraction Mission",
        description: "An interactive educational tool to help users learn subtraction with borrowing, visualized through a space-themed mission of managing energy units.",
        icon: (
            <div className="relative w-full h-full flex flex-col items-center justify-center gap-2 text-white">
                <span className="text-6xl">🚀</span>
                <div className="text-3xl font-bold">100 - 42</div>
            </div>
        )
    },
    {
        title: "Ratio Recipe Lab",
        description: "An interactive game that teaches mathematical ratios through fun, AI-powered potion-making challenges. Students will follow recipes, scale batches, and uncover secret formulas across three engaging levels.",
        icon: (
             <div className="text-5xl flex items-end justify-center gap-4">
                <span className="text-blue-400">🧪</span>
                <span className="text-purple-400">⚗️</span>
                <span className="text-green-400">🧫</span>
            </div>
        )
    },
    {
        title: "Place Value Builders",
        description: "A fun, interactive construction game for young learners (Grades 1-3) to master place value. Students build numbers by dragging and dropping hundreds, tens, and ones blocks, making abstract math concepts tangible and fun.",
        icon: (
            <div className="flex items-end justify-center gap-2 text-2xl font-bold text-white">
                <div className="w-16 h-24 bg-red-500 rounded flex items-center justify-center">H</div>
                <div className="w-12 h-20 bg-blue-500 rounded flex items-center justify-center">T</div>
                <div className="w-8 h-16 bg-yellow-500 rounded flex items-center justify-center">O</div>
            </div>
        )
    },
    {
        title: "Balance the Numbers!",
        description: "An interactive math simulation for K–3 students with levels, audio feedback, and a voice assistant. Drag and drop numbers, fruits, and expression blocks onto a balance scale to learn about equality and addition. Features a teacher mode for activity tracking.",
        icon: (
             <div className="text-5xl font-bold flex flex-col items-center justify-center gap-2">
                <span>⚖️</span>
                <span className="text-3xl text-white">7 + 2 = 9</span>
            </div>
        )
    },
    {
        title: "Basket Builder: Multiplication Adventure",
        description: "A fun, interactive game for kids to learn multiplication by visually building groups. Drag and drop fruits into baskets to solve problems in either a free-play practice mode or a leveled challenge mode.",
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
        title: "Interactive Long Division Simulator",
        description: "An interactive web application that visually animates the long-division algorithm, supporting decimal expansion and detection of repeating decimals. It features a mascot narrator, step-by-step controls, and customizable problems to help students learn division.",
        icon: (
            <div className="text-3xl font-mono text-white flex items-center justify-center">
                <span className="mr-2">4</span>
                <div className="border-l-2 border-t-2 border-white pl-2 pr-4 py-1">136</div>
            </div>
        )
    },
    {
        title: "Skip Jump Adventure!",
        description: "A fun and interactive game for kids to learn skip counting and multiplication by making a frog jump along a number line.",
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
        title: "Pattern Path: The Journey of Sequences and Series",
        description: "An interactive simulation to help students visually learn about arithmetic and geometric sequences and series through engaging activities like a hopping rabbit, growing plants, and real-world challenges.",
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
        title: "Telling Time Adventure",
        description: "Learn to tell time by dragging the hands on an analog clock. Master hours, minutes, and concepts like 'quarter past' and 'half past' in a fun, interactive way for K-6 learners.",
        icon: (
            <div className="relative w-28 h-28 flex items-center justify-center">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                    <circle cx="50" cy="50" r="45" stroke="#fff" strokeWidth="4" fill="none" />
                    <line x1="50" y1="50" x2="50" y2="15" stroke="#00d4ff" strokeWidth="4" strokeLinecap="round" />
                    <line x1="50" y1="50" x2="75" y2="50" stroke="#fff" strokeWidth="3" strokeLinecap="round" />
                    <circle cx="50" cy="50" r="5" fill="#00d4ff" />
                </svg>
            </div>
        )
    },
    {
        title: "Trigonometry Unit Circle Explorer",
        description: "Explore the unit circle to understand angles, radians, and trig functions. Drag the point to see how sine, cosine, and tangent values change in real-time. Perfect for high school students.",
        icon: (
            <div className="relative w-28 h-28 flex items-center justify-center">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                    <line x1="0" y1="50" x2="100" y2="50" stroke="rgb(100 116 139)" strokeWidth="1" />
                    <line x1="50" y1="0" x2="50" y2="100" stroke="rgb(100 116 139)" strokeWidth="1" />
                    <circle cx="50" cy="50" r="40" stroke="#fff" strokeWidth="2" fill="none" />
                    <path d="M 50 50 L 84.64 30" stroke="#00d4ff" strokeWidth="2" />
                    <path d="M 65 50 A 15 15 0 0 1 61.46 37.5" stroke="#f472b6" strokeWidth="2" fill="none" />
                </svg>
            </div>
        )
    },
    {
        title: "Algebraic Equation Balancer",
        description: "Master solving for variables by keeping a virtual scale balanced. This interactive tool visualizes algebraic equations, helping students understand the core principles of equality and inverse operations.",
        icon: (
            <div className="text-5xl font-bold flex flex-col items-center justify-center gap-2">
                <span>⚖️</span>
                <span className="text-2xl text-white">2x + 5 = 15</span>
            </div>
        )
    },
    {
        title: "Pythagorean Theorem Illustrator",
        description: "Discover the magic of right triangles! Drag the corners and watch as squares on each side visually prove that a² + b² = c². A powerful way to understand this fundamental geometric theorem.",
        icon: (
            <div className="relative w-28 h-28 flex items-center justify-center">
                <svg width="100" height="100" viewBox="-15 -5 120 120" className="w-full h-full">
                    <polygon points="30,70 70,70 30,40" className="fill-cyan-900 stroke-cyan-400" strokeWidth="1" />
                    <rect x="0" y="40" width="30" height="30" className="fill-pink-500/80" />
                    <rect x="30" y="70" width="40" height="40" className="fill-green-500/80" />
                    <g transform="translate(30, 40) rotate(-36.87)">
                        <rect x="0" y="-50" width="50" height="50" className="fill-purple-500/80" />
                    </g>
                </svg>
            </div>
        )
    },
    {
        title: "Coordinate Plane Battleship",
        description: "Learn coordinate graphing in an exciting head-to-head game! Place your ships on the grid and call out (x, y) coordinates to sink your opponent's fleet. A fun way to master plotting points.",
        icon: (
            <div className="relative w-28 h-28 bg-slate-800 p-1 border border-slate-600">
                <div className="w-full h-full grid grid-cols-5 grid-rows-5 gap-px">
                    {Array.from({ length: 25 }).map((_, i) => (
                        <div key={i} className="bg-slate-700/50"></div>
                    ))}
                </div>
                <div className="absolute w-full h-0.5 bg-slate-500 top-1/2 left-0 -translate-y-1/2"></div>
                <div className="absolute h-full w-0.5 bg-slate-500 left-1/2 top-0 -translate-x-1/2"></div>
                <span className="absolute top-2 left-2 text-red-500 text-xl">💥</span>
                <span className="absolute bottom-1 right-2 text-blue-400 text-xl">💧</span>
                <span className="absolute top-[45%] left-[10%] text-2xl transform -translate-y-1/2">🚢</span>
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
    <section id="simulations">
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