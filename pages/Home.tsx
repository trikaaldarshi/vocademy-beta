
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
          <span className="inline-flex items-center space-x-2 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 px-4 sm:px-6 py-1.5 sm:py-2 rounded-full text-[10px] sm:text-sm font-bold mb-4 md:mb-6 border border-indigo-200 dark:border-indigo-800 transition-all hover:scale-105">
            <span>नमस्कार! 🌙</span>
            <span className="relative flex h-1.5 w-1.5 sm:h-2 sm:w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 sm:h-2 sm:w-2 bg-emerald-500"></span>
            </span>
            <span className="text-indigo-900 dark:text-white ml-1 font-bold">beta is Live</span>
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
              className="w-full sm:w-auto bg-indigo-600 dark:bg-indigo-500 text-white px-7 sm:px-10 py-3.5 sm:py-5 rounded-xl md:rounded-2xl font-black text-base sm:text-xl hover:bg-indigo-700 dark:hover:bg-indigo-600 transition-all shadow-xl hover:-translate-y-1"
            >
              Get Beta Access Now
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
            <p className="text-base sm:text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto font-medium">Why join our testing phase? Exclusive benefits for the first {maxSpots} users.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <FeatureCard icon={<IconNews />} title="Editorial Context" desc="Words scanned directly from daily editorials. Learn how high-level words are used in real news." />
            <FeatureCard icon={<IconBrain />} title="SRS Flashcards" desc="Spaced Repetition System logic ensures you never forget a word you've learned." />
            <FeatureCard icon={<IconSwords />} title="Multiplayer Duels" desc="Battle fellow aspirants real-time to test your speed and precision under pressure." />
            <FeatureCard icon={<IconChart />} title="Progress Tracking" desc="Detailed analytics of your vocabulary strength and exam readiness." />
            <FeatureCard icon={<IconGift />} title="Lifetime Beta Status" desc="Get free premium access for 6 months after the official launch as a reward." />
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

      {/* CTA Section */}
      <section className="py-20 sm:py-32 px-4 bg-indigo-600 dark:bg-indigo-700 text-white text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
        <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center">
          <h2 className="text-2xl sm:text-4xl md:text-6xl font-black mb-4 md:mb-6 leading-tight px-2">Ready to transform your preparation?</h2>
          <p className="text-base sm:text-xl md:text-2xl text-indigo-100 mb-8 max-w-2xl font-medium px-4">We are selecting only {maxSpots} testers for the private beta.</p>
          
          <div className="w-full max-w-md mb-2 flex justify-between items-end px-1">
             <span className="text-[9px] sm:text-[10px] font-black text-emerald-300 tracking-[0.2em] uppercase">Spot Taken</span>
             <span className="text-[9px] sm:text-[10px] font-black text-indigo-200 tracking-tighter">{spotsTaken}/{maxSpots}</span>
          </div>
          
          <div className="w-full max-w-md bg-indigo-800/50 dark:bg-slate-900/40 rounded-full h-3 md:h-4 mb-8 md:mb-10 border border-white/10 overflow-hidden backdrop-blur-sm relative">
            <div 
              className="h-full bg-emerald-400 transition-all duration-1000 ease-out shadow-[0_0_20px_rgba(52,211,153,0.5)]"
              style={{ width: `${progressPercent}%` }}
            ></div>
          </div>

          <button 
            onClick={handleApply}
            className="group bg-white text-indigo-600 px-8 sm:px-12 py-3.5 sm:py-5 rounded-2xl md:rounded-[2rem] font-black text-lg sm:text-2xl md:text-3xl shadow-2xl hover:scale-105 transition-all active:scale-95 flex items-center space-x-2 md:space-x-3"
          >
            <span>Apply for Waitlist</span>
            <i className="fas fa-arrow-right text-base sm:text-xl transition-transform group-hover:translate-x-1"></i>
          </button>
          
          <div className="mt-6 md:mt-8 px-4 md:px-5 py-1.5 md:py-2 border-2 border-yellow-400/50 inline-block rounded-lg">
            <p className="font-bold text-indigo-100 text-base sm:text-xl tracking-wide uppercase">
              {spotsLeft} {spotsLeft === 1 ? 'slot' : 'slots'} remaining today
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
