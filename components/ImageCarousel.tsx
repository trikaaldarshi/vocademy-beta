import React, { useState, useEffect, useRef } from 'react';

const APP_SCREENS = [
  {
    title: "Daily Editorial Word",
    desc: "Master high-yield words like 'Diligent' with deep context, Hindi meanings, and exam-focused usage examples.",
    img: "https://raw.githubusercontent.com/trikaaldarshi/Assets/refs/heads/main/1_20251223_234831_0000.png",
    accent: "bg-indigo-600",
    icon: "fa-calendar-day"
  },
  {
    title: "Tests & Challenges",
    desc: "A full suite of assessments: Daily Drills, Weekly Wrap-ups, and Monthly Mastery tests to track your progress.",
    img: "https://raw.githubusercontent.com/trikaaldarshi/Assets/refs/heads/main/2_20251223_234831_0001.png",
    accent: "bg-emerald-600",
    icon: "fa-list-check"
  },
  {
    title: "Syno-Anto Sprint",
    desc: "Fast-paced practice for synonyms and antonyms. Choose between 'Self Test' or 'Multiplayer Duel'.",
    img: "https://raw.githubusercontent.com/trikaaldarshi/Assets/refs/heads/main/3_20251223_234831_0002.png",
    accent: "bg-orange-600",
    icon: "fa-bolt"
  },
  {
    title: "Mastery Achievements",
    desc: "Earn prestigious badges like 'Lexis Monarch' and 'Vocabulary Beast' as you climb to Level 100.",
    img: "https://raw.githubusercontent.com/trikaaldarshi/Assets/refs/heads/main/4_20251223_234831_0003.png",
    accent: "bg-purple-600",
    icon: "fa-trophy"
  },
  {
    title: "Victory & XP Rewards",
    desc: "Battle real-time with fellow aspirants and gain XP for every outstanding performance.",
    img: "https://raw.githubusercontent.com/trikaaldarshi/Assets/refs/heads/main/4_20251221_202429_0003.png",
    accent: "bg-blue-600",
    icon: "fa-medal"
  }
];

const ROTATION_TIME = 5000;

export const ImageCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStart = useRef<number | null>(null);
  const touchEnd = useRef<number | null>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % APP_SCREENS.length);
    }, ROTATION_TIME);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const handleTouchStart = (e: React.TouchEvent) => { touchStart.current = e.targetTouches[0].clientX; };
  const handleTouchMove = (e: React.TouchEvent) => { touchEnd.current = e.targetTouches[0].clientX; };
  const handleTouchEnd = () => {
    if (!touchStart.current || !touchEnd.current) return;
    const distance = touchStart.current - touchEnd.current;
    if (Math.abs(distance) > 50) {
      if (distance > 0) setCurrentIndex((prev) => (prev + 1) % APP_SCREENS.length);
      else setCurrentIndex((prev) => (prev - 1 + APP_SCREENS.length) % APP_SCREENS.length);
    }
    touchStart.current = null;
    touchEnd.current = null;
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6">
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        {/* Phone Mockup Section */}
        <div 
          className="relative mx-auto w-full max-w-[280px] sm:max-w-[340px] aspect-[9/19] bg-slate-800 rounded-[2.5rem] sm:rounded-[3.5rem] border-[8px] sm:border-[12px] border-slate-800 shadow-2xl overflow-hidden ring-1 ring-white/10 select-none"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Notch */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 sm:w-40 h-6 sm:h-7 bg-slate-800 rounded-b-2xl sm:rounded-b-3xl z-40"></div>
          
          <div className="h-full w-full relative bg-gray-100 dark:bg-slate-950 overflow-hidden">
            {APP_SCREENS.map((screen, idx) => {
              const isActive = idx === currentIndex;
              // Performance Optimization: Only render the current, next, and previous images
              const isAdjacent = Math.abs(idx - currentIndex) <= 1 || 
                                (currentIndex === 0 && idx === APP_SCREENS.length - 1) || 
                                (currentIndex === APP_SCREENS.length - 1 && idx === 0);

              if (!isAdjacent) return null;

              return (
                <div
                  key={idx}
                  className={`absolute inset-0 transition-all duration-[8000ms] ease-out ${
                    isActive ? 'opacity-100 scale-100 z-30' : 'opacity-0 scale-110 z-10'
                  }`}
                  style={{ transitionProperty: 'opacity, transform', transitionDuration: '1000ms' }}
                >
                  <img 
                    src={screen.img} 
                    className="w-full h-full object-cover" 
                    alt={screen.title}
                    width="340"
                    height="680"
                    loading={idx === 0 ? "eager" : "lazy"}
                    {...(idx === 0 ? { fetchpriority: "high" } : {})}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  
                  <div className={`absolute bottom-8 left-6 right-6 transition-all duration-700 delay-200 ${isActive ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                    <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20 shadow-xl">
                       <p className="text-white text-lg font-black mb-1">{screen.title}</p>
                       <p className="text-white/80 text-[10px] sm:text-xs font-medium leading-relaxed line-clamp-2">{screen.desc}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Feature List Section */}
        <div className="space-y-4 sm:space-y-6">
          {APP_SCREENS.map((screen, idx) => {
            const isActive = idx === currentIndex;
            return (
              <button 
                key={idx} 
                className={`w-full text-left relative transition-all duration-500 p-5 sm:p-8 rounded-[2rem] sm:rounded-[3rem] border-2 group ${
                  isActive 
                    ? 'bg-white dark:bg-slate-900 border-indigo-200 dark:border-indigo-500/30 shadow-lg lg:translate-x-4' 
                    : 'bg-transparent border-transparent opacity-40 hover:opacity-70'
                }`}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Select ${screen.title} feature`}
              >
                <div className="flex items-center space-x-5 sm:space-x-8">
                  <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-2xl sm:rounded-3xl flex-shrink-0 flex items-center justify-center text-white ${screen.accent} ${isActive ? 'scale-110 shadow-lg' : 'grayscale opacity-50'}`}>
                    <i className={`fas ${screen.icon} text-base sm:text-2xl`}></i>
                  </div>
                  <div className="overflow-hidden">
                    <h3 className={`text-lg sm:text-2xl font-black transition-colors ${isActive ? 'text-indigo-950 dark:text-white' : 'text-gray-400'}`}>
                      {screen.title}
                    </h3>
                    <p className={`font-medium text-xs sm:text-base mt-1 line-clamp-1 sm:line-clamp-none transition-colors ${isActive ? 'text-gray-600 dark:text-gray-400' : 'text-gray-300'}`}>
                      {screen.desc}
                    </p>
                  </div>
                </div>
                {isActive && (
                  <div className="absolute bottom-0 left-8 right-8 h-1 bg-gray-100 dark:bg-slate-800 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-indigo-600 dark:bg-indigo-500"
                      style={{ animation: `progress-line ${ROTATION_TIME}ms linear forwards` }}
                    />
                  </div>
                )}
              </button>
            );
          })}
        </div>
      </div>

      <style>{`
        @keyframes progress-line { from { width: 0%; } to { width: 100%; } }
      `}</style>
    </div>
  );
};