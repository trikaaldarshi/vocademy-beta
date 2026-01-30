
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
  navigateTo: (view: any) => void;
  handleDownload: () => void;
}

export const Home: React.FC<HomeProps> = ({ 
  navigateTo,
  handleDownload, 
}) => {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-20 sm:pt-32 pb-12 sm:pb-20 px-4 bg-gradient-to-b from-indigo-50/50 via-white to-white dark:from-indigo-950/10 dark:via-slate-950 dark:to-slate-950 text-center relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] sm:w-[1000px] h-[400px] sm:h-[600px] bg-indigo-100/30 dark:bg-indigo-900/10 rounded-full blur-[80px] sm:blur-[120px] -z-10 animate-pulse"></div>
        
        <div className="max-w-7xl mx-auto relative">
          <span className="inline-flex items-center space-x-1.5 sm:space-x-2 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 px-3.5 sm:px-6 py-1 sm:py-2 rounded-full text-[9px] sm:text-sm font-bold mb-4 md:mb-6 border border-indigo-200 dark:border-indigo-800 transition-all hover:scale-105">
            <span>नमस्कार! 🌙</span>
            <span className="text-indigo-900 dark:text-white ml-0.5 sm:ml-1 font-bold uppercase tracking-widest">VOCADEMY IS LIVE</span>
          </span>
          
          <h1 className="text-2xl sm:text-5xl md:text-7xl font-black text-indigo-950 dark:text-white leading-tight mb-4 md:mb-8 tracking-tighter">
            Master Editorial <br className="hidden md:block" />
            <span className="text-indigo-600 dark:text-indigo-400 underline decoration-indigo-200 dark:decoration-indigo-800 underline-offset-4 md:underline-offset-8">Vocabulary</span> with AI
          </h1>
          
          <p className="max-w-3xl mx-auto text-xs sm:text-lg md:text-2xl text-gray-600 dark:text-gray-400 mb-6 sm:mb-10 md:mb-12 leading-relaxed font-medium px-2 md:px-4">
            Personalized learning for UPSC, SSC & Banking aspirants. <br className="hidden md:block" /> 
            Context-based words from <b>The Hindu</b> daily editorials.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5 md:gap-4 px-2 sm:px-0">
            <button 
              onClick={() => navigateTo('about')}
              className="w-full sm:w-auto bg-indigo-600 dark:bg-indigo-500 text-white px-6 sm:px-10 py-3.5 sm:py-5 rounded-xl md:rounded-2xl font-black text-sm sm:text-lg md:text-xl transition-all shadow-xl hover:bg-indigo-700 active:scale-95 border-b-4 border-indigo-800 dark:border-indigo-900"
            >
              Learn More about Vocademy
            </button>
            <a 
              href="#demo"
              className="w-full sm:w-auto bg-white dark:bg-slate-900 text-indigo-600 dark:text-indigo-400 border-2 border-indigo-100 dark:border-slate-800 px-6 sm:px-10 py-3.5 sm:py-5 rounded-xl md:rounded-2xl font-black text-sm sm:text-lg md:text-xl hover:border-indigo-600 dark:hover:border-indigo-400 transition-all shadow-md active:scale-95"
            >
              Try AI Analyzer
            </a>
          </div>
        </div>
      </section>

      <AutoSlider />

      <section id="features" className="py-12 sm:py-24 px-4 bg-white dark:bg-slate-950 transition-colors">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-20">
            <h2 className="text-xl sm:text-4xl md:text-5xl font-black text-indigo-950 dark:text-white mb-2 sm:mb-6 leading-tight">Built for Serious Aspirants</h2>
            <p className="text-sm sm:text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto font-medium px-2">Join thousands of students using AI to supercharge your vocabulary retention.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
            <FeatureCard icon={<IconNews />} title="Editorial Context" desc="Words scanned directly from daily editorials. Learn how high-level words are used in real news." />
            <FeatureCard 
              icon={<IconBrain />} 
              title="SRS Flashcards" 
              desc="Spaced Repetition System logic ensures you never forget a word you've learned." 
            />
            <FeatureCard icon={<IconSwords />} title="Multiplayer Duels" desc="Battle fellow aspirants real-time to test your speed and precision under pressure." />
            <FeatureCard icon={<IconChart />} title="Progress Tracking" desc="Detailed analytics of your vocabulary strength and exam readiness." />
            <FeatureCard icon={<IconGift />} title="Daily Rewards" desc="Stay consistent and earn exclusive digital badges and rewards as you level up." />
            <FeatureCard icon={<IconMessage />} title="Direct Support" desc="Priority community support and direct influence on upcoming features through our portal." />
          </div>
        </div>
      </section>

      <section id="demo" className="py-12 sm:py-24 px-2 sm:px-4 bg-indigo-50/50 dark:bg-slate-900/40 transition-colors scroll-mt-20">
        <WordAnalyzerDemo />
      </section>

      <section className="py-12 sm:py-24 px-4 bg-white dark:bg-slate-950 transition-colors">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-xl sm:text-4xl font-black text-indigo-950 dark:text-white">Application Preview</h2>
          <p className="text-gray-500 dark:text-gray-400 mt-2 md:mt-4 text-xs sm:text-base">Take a look at the clean, study-focused interface.</p>
        </div>
        <ImageCarousel />
      </section>

      {/* Testimonials Section */}
      <section className="py-12 sm:py-32 px-4 bg-indigo-50 dark:bg-slate-900 transition-colors">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 sm:mb-24">
            <h2 className="text-xl sm:text-4xl md:text-5xl font-black text-indigo-950 dark:text-white mb-4 sm:mb-6 tracking-tight leading-tight uppercase px-4">What Our Learners Say</h2>
            <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto font-medium text-sm sm:text-lg italic px-6">"Vocademy turned my boring editorial reading into an interactive learning mission."</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-20">
            <TestimonialCard 
              name="Aryan K." 
              role="UPSC Aspirant" 
              content="The contextual usage from The Hindu is exactly what's needed for Mains. SRS flashcards actually work!"
            />
            <TestimonialCard 
              name="Priya S." 
              role="SSC CGL Candidate" 
              content="Multiplayer battles are addictive. It's the first time I'm enjoying learning vocabulary."
            />
            <TestimonialCard 
              name="Vishal R." 
              role="Banking Aspirant" 
              content="Directly helps in reading comprehension. The Hindi meanings are accurate and natural."
            />
          </div>

          <div className="bg-white dark:bg-slate-950 p-6 sm:p-12 rounded-[2rem] sm:rounded-[3rem] border-2 border-dashed border-indigo-200 dark:border-indigo-800 text-center shadow-2xl mx-2 sm:mx-0">
             <h3 className="text-xl sm:text-3xl font-black text-indigo-950 dark:text-white mb-3 sm:mb-4">Start Mastering Vocabulary</h3>
             <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 mb-6 sm:mb-8 font-medium">Download the app today and transform your competitive exam preparation.</p>
             <button 
              onClick={handleDownload}
              className="bg-indigo-600 text-white px-8 sm:px-12 py-3.5 sm:py-5 rounded-xl sm:rounded-2xl font-black text-base sm:text-xl hover:scale-105 active:scale-95 transition-all shadow-xl flex items-center space-x-2 sm:space-x-3 mx-auto"
             >
               <i className="fas fa-download"></i>
               <span>Download Vocademy</span>
             </button>
          </div>
        </div>
      </section>
    </>
  );
};

const FeatureCard: React.FC<{icon: React.ReactNode, title: string, desc: string}> = ({icon, title, desc}) => (
  <div className="bg-white dark:bg-slate-900 p-6 md:p-10 rounded-2xl md:rounded-3xl border border-gray-100 dark:border-slate-800 hover:shadow-2xl dark:hover:shadow-indigo-900/10 hover:border-indigo-100 dark:hover:border-slate-700 transition-all group text-left h-full flex flex-col relative">
    <div className="w-10 h-10 sm:w-16 sm:h-16 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg sm:rounded-2xl flex items-center justify-center p-2 sm:p-3 mb-4 sm:mb-8 group-hover:scale-110 transition-transform duration-500">
      <div className="w-full h-full p-1 sm:p-0">
        {icon}
      </div>
    </div>
    <h3 className="text-base sm:text-2xl font-black text-indigo-950 dark:text-white mb-1.5 sm:mb-4">{title}</h3>
    <p className="text-xs sm:text-lg text-gray-500 dark:text-gray-400 font-medium leading-relaxed mb-4">{desc}</p>
  </div>
);

const TestimonialCard: React.FC<{name: string, role: string, content: string}> = ({name, role, content}) => (
  <div className="bg-white dark:bg-slate-950 p-6 sm:p-8 rounded-2xl sm:rounded-[2.5rem] border border-gray-100 dark:border-slate-800 shadow-xl relative group hover:-translate-y-1 sm:hover:-translate-y-2 transition-transform duration-500">
    <div className="absolute -top-3 sm:-top-4 -left-3 sm:-left-4 w-9 h-9 sm:w-12 sm:h-12 bg-indigo-600 text-white rounded-lg sm:rounded-2xl flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform">
      <i className="fas fa-quote-left text-xs sm:text-xl"></i>
    </div>
    <p className="text-gray-600 dark:text-gray-400 font-medium leading-relaxed mb-6 sm:mb-8 italic text-sm sm:text-base">"{content}"</p>
    <div className="flex items-center space-x-3 sm:space-x-4">
      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center font-black text-indigo-600 text-sm sm:text-base">
        {name[0]}
      </div>
      <div>
        <h4 className="font-black text-indigo-950 dark:text-white text-xs sm:text-sm">{name}</h4>
        <p className="text-[8px] sm:text-[10px] font-black text-indigo-500 uppercase tracking-widest">{role}</p>
      </div>
    </div>
  </div>
);
