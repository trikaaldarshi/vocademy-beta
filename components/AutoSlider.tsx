
import React from 'react';
import { 
  IconRocket, 
  IconBrain, 
  IconSwords, 
  IconChart, 
  IconNews, 
  IconSearch 
} from './AnimatedIcons';

const SLIDE_ITEMS = [
  { icon: <IconNews />, text: '500+ Editorial Words Analyzed Daily' },
  { icon: <IconBrain />, text: 'Scientific Spaced Repetition System' },
  { icon: <IconSwords />, text: 'Live Multiplayer Vocabulary Battles' },
  { icon: <IconChart />, text: 'UPSC/SSC Level Performance Tracking' },
  { icon: <IconSearch />, text: 'The Hindu & Indian Express Integration' },
  { icon: <IconRocket />, text: '100% Focused on Serious Aspirants' },
];

export const AutoSlider: React.FC = () => {
  return (
    <div className="relative w-full overflow-hidden bg-white dark:bg-slate-950 py-14 border-y border-gray-50 dark:border-slate-900 transition-colors">
      {/* Overlay Gradients */}
      <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-white dark:from-slate-950 via-white/80 dark:via-slate-950/80 to-transparent z-10"></div>
      <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-white dark:from-slate-950 via-white/80 dark:via-slate-950/80 to-transparent z-10"></div>
      
      <div className="flex animate-marquee whitespace-nowrap">
        {[...SLIDE_ITEMS, ...SLIDE_ITEMS].map((item, idx) => (
          <div 
            key={idx} 
            className="flex items-center space-x-6 mx-12 bg-gray-50/50 dark:bg-slate-900/30 px-8 py-5 rounded-[2rem] border border-gray-100 dark:border-slate-800 hover:bg-white dark:hover:bg-slate-900 hover:shadow-xl dark:hover:shadow-indigo-950/20 hover:border-indigo-100 dark:hover:border-indigo-900 transition-all duration-500 group cursor-default"
          >
            <div className="w-8 h-8 group-hover:scale-125 transition-transform duration-500">
              {item.icon}
            </div>
            <span className="text-indigo-950 dark:text-gray-200 font-black text-xl tracking-tighter opacity-80 group-hover:opacity-100">{item.text}</span>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: inline-flex;
          animation: marquee 40s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};
