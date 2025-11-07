
import React from 'react';

const PlantIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} viewBox="0 0 100 120">
        <ellipse cx="50" cy="100" rx="20" ry="12" fill="#2d5f3f"/>
        <path d="M 50 100 Q 40 70 30 50 Q 25 40 30 30" fill="none" stroke="#4caf50" strokeWidth="4"/>
        <path d="M 50 100 Q 60 75 70 55 Q 75 45 70 35" fill="none" stroke="#4caf50" strokeWidth="4"/>
        <ellipse cx="30" cy="35" rx="15" ry="25" fill="#66bb6a"/>
        <ellipse cx="70" cy="40" rx="15" ry="25" fill="#66bb6a"/>
    </svg>
);


const DecorativeElements: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      <div className="absolute top-[80px] right-[15%] text-6xl font-bold text-[#ff4081] opacity-60">●</div>
      <div className="absolute top-[120px] right-[8%] text-8xl font-bold text-[#00d4ff] opacity-60">+</div>
      <div className="absolute top-[180px] right-[20%] text-[100px] font-bold text-[#00d4ff] opacity-60">8</div>
      <div className="absolute top-[280px] right-[12%] text-7xl font-bold text-[#00d4ff] opacity-60">÷</div>
      <div className="absolute top-[380px] right-[18%] text-[90px] font-bold text-[#00d4ff] opacity-60">÷</div>
      <div className="absolute top-[480px] right-[10%] text-[110px] font-bold text-[#00d4ff] opacity-60">4</div>
      <div className="absolute top-[100px] left-[5%] w-[60px] h-[60px] bg-[#9c27b0] rounded-full"></div>
      <div className="absolute top-[300px] left-[3%] w-[50px] h-[50px] bg-[#00897b] rounded-full"></div>
      <div className="absolute top-[80px] left-[8%] w-[15px] h-[15px] bg-[#ffd54f] rounded-full"></div>
      <div className="absolute top-[600px] right-[25%] w-[12px] h-[12px] bg-[#ff5252] rounded-full"></div>
      
      <PlantIcon className="absolute bottom-[50px] left-[2%] w-[100px] h-[120px]" />
      <PlantIcon className="absolute bottom-[80px] right-[2%] w-[100px] h-[120px]" />

      <div className="hidden lg:block">
        <svg className="absolute bottom-5 left-10 w-[140px]" viewBox="0 0 200 250">
            <ellipse cx="100" cy="200" rx="70" ry="40" fill="#ff9800"/>
            <circle cx="100" cy="120" r="65" fill="#ffa726"/>
            <circle cx="75" cy="105" r="15" fill="#333"/>
            <circle cx="125" cy="105" r="15" fill="#333"/>
            <ellipse cx="100" cy="140" rx="30" ry="20" fill="#ff6347"/>
            <path d="M 85 145 Q 100 160 115 145" fill="none" stroke="#333" strokeWidth="3"/>
            <path d="M 50 90 L 35 70 Q 30 60 35 50" fill="none" stroke="#ffa726" strokeWidth="12" strokeLinecap="round"/>
            <path d="M 150 90 L 165 70 Q 170 60 165 50" fill="none" stroke="#ffa726" strokeWidth="12" strokeLinecap="round"/>
            <circle cx="45" cy="55" r="8" fill="#ffa726"/>
            <circle cx="155" cy="55" r="8" fill="#ffa726"/>
        </svg>

        <svg className="absolute bottom-5 right-10 w-[120px]" viewBox="0 0 200 250">
            <ellipse cx="100" cy="210" rx="60" ry="35" fill="#8d6e63"/>
            <circle cx="100" cy="140" r="55" fill="#795548"/>
            <circle cx="75" cy="130" r="12" fill="#333"/>
            <circle cx="125" cy="130" r="12" fill="#333"/>
            <ellipse cx="100" cy="160" rx="25" ry="18" fill="#ffccbc"/>
            <path d="M 85 165 Q 100 175 115 165" fill="none" stroke="#333" strokeWidth="3"/>
            <circle cx="140" cy="140" r="35" fill="#6d4c41"/>
            <circle cx="145" cy="125" r="30" fill="#6d4c41"/>
            <path d="M 160 140 Q 180 120 175 100 Q 170 85 160 80" fill="none" stroke="#6d4c41" strokeWidth="18" strokeLinecap="round"/>
            <rect x="85" y="190" width="30" height="50" fill="#2196f3" rx="5"/>
        </svg>
      </div>
    </div>
  );
};

export default DecorativeElements;
