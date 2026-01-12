
import React from 'react';
import { WordAnalyzerDemo } from '../components/WordAnalyzerDemo';
import { AutoSlider } from '../components/AutoSlider';
import { ImageCarousel } from '../components/ImageCarousel';
import { 
  IconNews, 
  IconBrain, 
  IconSwords, 
  IconChart, 
  IconGift, 
  IconMessage 
} from '../components/AnimatedIcons';

interface HomeProps {
  handleApply: () => void;
  spotsTaken: number;
  maxSpots: number;
  progressPercent: number;
  spotsLeft: number;
}

export const Home: React.FC<HomeProps> = ({ 
  handleApply, 
  spotsTaken, 
  maxSpots, 
  progressPercent, 
  spotsLeft 
}) => {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-24 sm:pt-32 pb-16 sm:pb-20 px-4 bg-gradient-to-b from-indigo-50/50 via-white to-white dark:from-indigo-950/10 dark:via-slate-950 dark:to-slate-950 text-center relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-indigo-100/30 dark:bg-indigo-900/10 rounded-full blur-[120px] -z-10 animate-pulse"></div>
        
        <div className="max-w-7xl mx-auto relative">
          <span className="inline-flex items-center space-x-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 px-4 sm:px-6 py-1.5 sm:py-2 rounded-full text-[10px] sm:text-sm font-bold mb-4 md:mb-6 border border-green-200 dark:border-green-800 transition-all hover:scale-105">
            <span>नमस्कार! 🌙</span>
            <span className="text-green-900 dark:text-white ml-1 font-bold uppercase tracking-widest">Pre-registration LIVE</span>
          </span>
          
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-black text-indigo-950 dark:text-white leading-tight mb-6 md:mb-8 tracking-tighter">
            Master Editorial <br className="hidden md:block" />
            <span className="text-indigo-600 dark:text-indigo-400 underline decoration-indigo-200 dark:decoration-indigo-800 underline-offset-4 md:underline-offset-8">Vocabulary</span> with AI
          </h1>
          
          <p className="max-w-3xl mx-auto text-sm sm:text-lg md:text-2xl text-gray-600 dark:text-gray-400 mb-8 sm:mb-10 md:mb-12 leading-relaxed font-medium px-2 md:px-4">
            Personalized learning for UPSC, SSC & Banking aspirants. <br className="hidden md:block" /> 
            Context-based words from <b>The Hindu</b> daily editorials.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 px-4 sm:px-0">
            <button 
              onClick={handleApply}
              className="w-full sm:w-auto bg-indigo-600 dark:bg-indigo-500 text-white px-7 sm:px-10 py-3.5 sm:py-5 rounded-xl md:rounded-2xl font-black text-base sm:text-xl transition-all shadow-xl hover:bg-indigo-700 active:scale-95"
            >
              Join Pre-registration
            </button>
            <a 
              href="#demo"
              className="w-full sm:w-auto bg-white dark:bg-slate-900 text-indigo-600 dark:text-indigo-400 border-2 border-indigo-100 dark:border-slate-800 px-7 sm:px-10 py-3.5 sm:py-5 rounded-xl md:rounded-2xl font-black text-base sm:text-xl hover:border-indigo-600 dark:hover:border-indigo-400 transition-all"
            >
              Try AI Analyzer
            </a>
          </div>
        </div>
      </section>

      <AutoSlider />

      <section id="features" className="py-16 sm:py-24 px-4 bg-white dark:bg-slate-950 transition-colors">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-20">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-indigo-950 dark:text-white mb-4 md:mb-6 leading-tight">Built for Serious Aspirants</h2>
            <p className="text-base sm:text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto font-medium">Be among the first 500 users to get early access and exclusive launch benefits.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <FeatureCard icon={<IconNews />} title="Editorial Context" desc="Words scanned directly from daily editorials. Learn how high-level words are used in real news." />
            <FeatureCard icon={<IconBrain />} title="SRS Flashcards" desc="Spaced Repetition System logic ensures you never forget a word you've learned." />
            <FeatureCard icon={<IconSwords />} title="Multiplayer Duels" desc="Battle fellow aspirants real-time to test your speed and precision under pressure." />
            <FeatureCard icon={<IconChart />} title="Progress Tracking" desc="Detailed analytics of your vocabulary strength and exam readiness." />
            <FeatureCard icon={<IconGift />} title="Early Bird Benefits" desc="Get exclusive early access and priority features as an inaugural pre-registration user." />
            <FeatureCard icon={<IconMessage />} title="Direct Support" desc="Priority telegram support and direct influence on upcoming features." />
          </div>
        </div>
      </section>

      <section id="demo" className="py-16 sm:py-24 px-4 bg-indigo-50/50 dark:bg-slate-900/40 transition-colors scroll-mt-20">
        <WordAnalyzerDemo />
      </section>

      <section className="py-16 sm:py-24 px-4 bg-white dark:bg-slate-950 transition-colors">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-4xl font-black text-indigo-950 dark:text-white">Application Preview</h2>
          <p className="text-gray-500 dark:text-gray-400 mt-2 md:mt-4 text-sm md:text-base">Take a look at the clean, study-focused interface.</p>
        </div>
        <ImageCarousel />
      </section>

      {/* CTA Section refined per screenshot feedback */}
      <section className="py-20 sm:py-32 px-4 bg-indigo-600 dark:bg-indigo-700 text-white text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
        <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-black mb-4 md:mb-6 leading-tight px-2 tracking-tight">
            Ready to transform your preparation?
          </h2>
          <p className="text-base sm:text-xl md:text-xl text-indigo-100 mb-12 max-w-2xl font-medium px-4">
            Limited spots remaining for the inaugural pre-registration phase.
          </p>
          
          <div className="w-full max-w-lg mb-10">
            <div className="flex justify-between items-end mb-2 px-1">
               <span className="text-[11px] font-black text-white uppercase tracking-wider bg-indigo-500/30 px-3 py-1 rounded-lg">
                 PHASE 1: {spotsLeft} SPOTS LEFT
               </span>
               <span className="text-[11px] font-black text-indigo-200 tracking-tighter">
                 {spotsTaken}/{maxSpots}
               </span>
            </div>
            
            <div className="w-full bg-indigo-800/50 dark:bg-slate-900/40 rounded-full h-4 border border-white/10 overflow-hidden backdrop-blur-sm relative">
              <div 
                className="h-full bg-green-400 transition-all duration-1000 ease-out shadow-[0_0_20px_rgba(74,222,128,0.5)]"
                style={{ width: `${progressPercent}%` }}
              ></div>
            </div>
          </div>

          <button 
            onClick={handleApply}
            className="group bg-white text-black px-10 sm:px-14 py-4 sm:py-6 rounded-2xl md:rounded-2xl font-black text-xl sm:text-2xl md:text-2xl shadow-[0_20px_40px_-12px_rgba(0,0,0,0.4)] hover:scale-105 active:scale-95 transition-all border-b-4 border-gray-200 mb-12"
          >
            Claim Your Spot
          </button>
          
          <div className="px-10 sm:px-12 py-3 md:py-4 border-2 border-indigo-500 bg-indigo-400/20 inline-block rounded-2xl">
            <p className="font-black text-black text-sm sm:text-lg tracking-wide uppercase">
              {spotsLeft} SLOTS REMAINING - PRE-REGISTRATION LIVE
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

const FeatureCard: React.FC<{icon: React.ReactNode, title: string, desc: string}> = ({icon, title, desc}) => (
  <div className="bg-white dark:bg-slate-900 p-6 md:p-10 rounded-2xl md:rounded-3xl border border-gray-100 dark:border-slate-800 hover:shadow-2xl dark:hover:shadow-indigo-900/10 hover:border-indigo-100 dark:hover:border-slate-700 transition-all group text-left">
    <div className="w-12 h-12 md:w-16 md:h-16 bg-indigo-50 dark:bg-indigo-900/20 rounded-xl md:rounded-2xl flex items-center justify-center p-2.5 md:p-3 mb-5 md:mb-8 group-hover:scale-110 transition-transform duration-500">
      {icon}
    </div>
    <h3 className="text-lg md:text-2xl font-black text-indigo-950 dark:text-white mb-2 md:mb-4">{title}</h3>
    <p className="text-sm md:text-lg text-gray-500 dark:text-gray-400 font-medium leading-relaxed">{desc}</p>
  </div>
);
