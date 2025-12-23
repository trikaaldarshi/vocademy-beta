
import React, { useState, useEffect } from 'react';

const APP_SCREENS = [
  {
    title: "Visual AI Learning",
    desc: "Experience vocabulary through AI-powered visual context that makes words stick forever.",
    img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=600&h=1200",
    accent: "bg-emerald-600",
    color: "emerald"
  },
  {
    title: "Editorial Scan",
    desc: "Every day we scan major editorials and pick out the words you need to know.",
    img: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=600&h=1200",
    accent: "bg-indigo-600",
    color: "indigo"
  },
  {
    title: "Battle Mode",
    desc: "Compete 1v1 with real aspirants to test your vocab recall speed.",
    img: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80&w=600&h=1200",
    accent: "bg-orange-600",
    color: "orange"
  },
  {
    title: "SRS Mastery",
    desc: "Our spaced repetition engine ensures long-term memory for competitive exams.",
    img: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=600&h=1200",
    accent: "bg-purple-600",
    color: "purple"
  }
];

const ROTATION_TIME = 4500;

export const ImageCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % APP_SCREENS.length);
    }, ROTATION_TIME);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Phone Mockup with Sophisticated Transitions */}
        <div className="relative mx-auto w-full max-w-[340px] h-[680px] bg-slate-900 dark:bg-slate-900 rounded-[3.5rem] border-[12px] border-slate-800 dark:border-slate-800 shadow-2xl overflow-hidden ring-1 ring-white/10 group/phone">
          {/* Notch */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-6 bg-slate-800 rounded-b-2xl z-30 shadow-sm"></div>
          
          <div className="h-full w-full relative bg-gray-50 dark:bg-slate-950 transition-colors">
            {APP_SCREENS.map((screen, idx) => (
              <div
                key={idx}
                className={`absolute inset-0 transition-all duration-1000 cubic-bezier(0.4, 0, 0.2, 1) ${
                  idx === currentIndex 
                    ? 'opacity-100 translate-y-0 scale-100 z-20' 
                    : idx < currentIndex 
                      ? 'opacity-0 -translate-y-full scale-105 z-10' 
                      : 'opacity-0 translate-y-full scale-95 z-10'
                }`}
              >
                <div className="h-full w-full flex flex-col p-4 pt-12">
                   <div className="bg-white dark:bg-slate-900 rounded-[2rem] p-4 h-full border border-gray-100 dark:border-slate-800 flex flex-col items-center text-center shadow-sm">
                      <div className="w-full h-full bg-gray-100 dark:bg-slate-800 rounded-2xl overflow-hidden shadow-inner border border-gray-100 dark:border-slate-800 relative group/img">
                        <img 
                          src={screen.img} 
                          className={`w-full h-full object-cover transition-transform duration-[6000ms] ${idx === currentIndex ? 'scale-110' : 'scale-100'}`} 
                          alt={screen.title} 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60"></div>
                        
                        {/* Overlay Card within phone */}
                        <div className="absolute bottom-4 left-4 right-4 text-left transform transition-all duration-700 delay-300 translate-y-0 opacity-100">
                          <div className="bg-white/90 dark:bg-slate-900/95 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/50 dark:border-slate-700">
                             <h5 className="text-indigo-950 dark:text-white text-sm font-black mb-1">{screen.title}</h5>
                             <p className="text-[10px] text-gray-500 dark:text-gray-400 font-medium leading-tight">{screen.desc}</p>
                          </div>
                        </div>
                      </div>
                   </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Feature List Side with Progress Bars */}
        <div className="space-y-4">
          {APP_SCREENS.map((screen, idx) => {
            const isActive = idx === currentIndex;
            return (
              <div 
                key={idx} 
                className={`relative transition-all duration-500 cursor-pointer p-6 rounded-[2.5rem] border-2 group overflow-hidden ${
                  isActive 
                    ? 'bg-white dark:bg-slate-900 border-indigo-100 dark:border-indigo-900/40 shadow-xl dark:shadow-indigo-950/20 translate-x-4' 
                    : 'bg-transparent border-transparent opacity-40 hover:opacity-70 hover:translate-x-2'
                }`}
                onClick={() => setCurrentIndex(idx)}
              >
                {/* Progress Bar Background */}
                {isActive && (
                  <div className="absolute bottom-0 left-0 h-1 bg-indigo-50 dark:bg-indigo-950 w-full overflow-hidden">
                    <div 
                      className="h-full bg-indigo-600 dark:bg-indigo-500 transition-none animate-progress-line"
                      style={{ animationDuration: `${ROTATION_TIME}ms` }}
                    />
                  </div>
                )}

                <div className="flex items-center space-x-6 relative z-10">
                  <div className={`w-14 h-14 rounded-2xl flex-shrink-0 flex items-center justify-center text-white font-black text-xl transition-all duration-500 ${screen.accent} ${isActive ? 'rotate-0 scale-110 shadow-lg' : 'rotate-6 group-hover:rotate-0'}`}>
                    {idx === 0 ? <i className="fas fa-eye"></i> : (idx === 1 ? <i className="fas fa-newspaper"></i> : (idx === 2 ? <i className="fas fa-sword"></i> : <i className="fas fa-brain"></i>))}
                  </div>
                  <div>
                    <h4 className={`text-xl font-black transition-colors duration-300 ${isActive ? 'text-indigo-950 dark:text-white' : 'text-gray-400 dark:text-gray-600'}`}>
                      {screen.title}
                    </h4>
                    <p className={`font-medium text-sm leading-relaxed transition-colors duration-300 ${isActive ? 'text-gray-600 dark:text-gray-400' : 'text-gray-300 dark:text-gray-700'}`}>
                      {screen.desc}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @keyframes progress-line {
          from { width: 0%; }
          to { width: 100%; }
        }
        
        .animate-progress-line {
          animation: progress-line linear forwards;
        }

        .group\\/phone:hover img {
           filter: saturate(1.1) brightness(1.05);
        }
      `}</style>
    </div>
  );
};
