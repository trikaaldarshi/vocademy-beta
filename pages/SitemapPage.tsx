
import React from 'react';

interface SitemapPageProps {
  navigateTo: (view: any) => void;
}

export const SitemapPage: React.FC<SitemapPageProps> = ({ navigateTo }) => {
  return (
    <div className="pt-24 sm:pt-32 pb-16 sm:pb-24 px-4 max-w-6xl mx-auto animate-fade-in">
      <div className="text-center mb-12 sm:mb-20">
        <h1 className="text-4xl sm:text-6xl font-black text-indigo-950 dark:text-white mb-6 tracking-tight">
          Web <span className="text-indigo-600">Sitemap</span>
        </h1>
        <p className="text-base sm:text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto font-medium">
          Navigate through our comprehensive learning ecosystem and platform resources.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
        {/* Core Sections */}
        <div className="space-y-6">
          <h2 className="text-xl font-black text-indigo-950 dark:text-white flex items-center space-x-3 mb-4 uppercase tracking-widest">
            <i className="fas fa-layer-group text-indigo-600"></i>
            <span>Core Platform</span>
          </h2>
          <nav>
            <ul className="space-y-3">
              <SitemapLink 
                onClick={() => navigateTo('home')} 
                title="Dashboard" 
                desc="Main landing page and AI word analyzer demo." 
                icon="fa-house"
              />
              <SitemapLink 
                onClick={() => navigateTo('methodology')} 
                title="Learning Methodology" 
                desc="Deep dive into our AI, SRS, and gamification logic." 
                icon="fa-brain"
              />
              <SitemapLink 
                onClick={() => navigateTo('contact')} 
                title="Support Portal" 
                desc="Direct channels for feedback and technical help." 
                icon="fa-headset"
              />
            </ul>
          </nav>
        </div>

        {/* Company Sections */}
        <div className="space-y-6">
          <h2 className="text-xl font-black text-indigo-950 dark:text-white flex items-center space-x-3 mb-4 uppercase tracking-widest">
            <i className="fas fa-building text-indigo-600"></i>
            <span>About Us</span>
          </h2>
          <nav>
            <ul className="space-y-3">
              <SitemapLink 
                onClick={() => navigateTo('about')} 
                title="Our Story" 
                desc="The mission and vision behind Vocademy." 
                icon="fa-book-open"
              />
              <SitemapLink 
                onClick={() => navigateTo('team')} 
                title="Founding Team" 
                desc="Meet the engineers and designers building it." 
                icon="fa-users"
              />
            </ul>
          </nav>
        </div>

        {/* Legal Sections */}
        <div className="space-y-6">
          <h2 className="text-xl font-black text-indigo-950 dark:text-white flex items-center space-x-3 mb-4 uppercase tracking-widest">
            <i className="fas fa-scale-balanced text-indigo-600"></i>
            <span>Legal Protocols</span>
          </h2>
          <nav>
            <ul className="space-y-3">
              <SitemapLink 
                onClick={() => navigateTo('privacy')} 
                title="Privacy Policy" 
                desc="How we protect and manage your learning data." 
                icon="fa-shield-halved"
              />
              <SitemapLink 
                onClick={() => navigateTo('terms')} 
                title="Terms of Service" 
                desc="Standard rules for using our digital platform." 
                icon="fa-file-signature"
              />
            </ul>
          </nav>
        </div>
      </div>

      {/* Chronology Section */}
      <section className="bg-indigo-50 dark:bg-slate-900 p-8 sm:p-16 rounded-[2.5rem] sm:rounded-[4rem] border border-indigo-100 dark:border-slate-800 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
        
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-black text-indigo-950 dark:text-white mb-6 uppercase tracking-tight">Aspirant's Chronology</h2>
          <p className="text-gray-500 dark:text-gray-400 font-medium">The logical path to vocabulary mastery on Vocademy.</p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Line */}
          <div className="absolute left-6 sm:left-1/2 top-0 bottom-0 w-1 bg-indigo-100 dark:bg-slate-800 -translate-x-1/2 hidden sm:block"></div>

          <div className="space-y-12 sm:space-y-24">
            <ChronologyStep 
              side="left" 
              number="01" 
              title="Discovery" 
              desc="Daily editorials are scanned from The Hindu and Indian Express by our AI engine." 
              icon="fa-magnifying-glass"
            />
            <ChronologyStep 
              side="right" 
              number="02" 
              title="Context Analysis" 
              desc="Words are extracted with deep editorial context, pronunciation, and Hindi meanings." 
              icon="fa-microchip"
            />
            <ChronologyStep 
              side="left" 
              number="03" 
              title="SRS Practice" 
              desc="Spaced Repetition Flashcards ensure words enter your permanent long-term memory." 
              icon="fa-repeat"
            />
            <ChronologyStep 
              side="right" 
              number="04" 
              title="Active Testing" 
              desc="Engage in live multiplayer duels to test your speed and accuracy under pressure." 
              icon="fa-bolt"
            />
            <ChronologyStep 
              side="left" 
              number="05" 
              title="Exam Mastery" 
              desc="Apply your mastered vocabulary in Reading Comprehension and Precis writing for Mains." 
              icon="fa-graduation-cap"
            />
          </div>
        </div>
      </section>

      <div className="mt-16 text-center">
        <button 
          onClick={() => navigateTo('home')}
          className="text-indigo-600 dark:text-indigo-400 font-black text-lg hover:underline underline-offset-8 transition-all flex items-center justify-center space-x-2 mx-auto"
        >
          <i className="fas fa-arrow-left text-sm"></i>
          <span>Return to Dashboard</span>
        </button>
      </div>
    </div>
  );
};

const SitemapLink = ({ title, desc, icon, onClick }: any) => (
  <li className="group">
    <button 
      onClick={onClick}
      className="w-full flex items-start space-x-4 p-4 rounded-2xl bg-white dark:bg-slate-950 border border-gray-100 dark:border-slate-800 hover:border-indigo-100 dark:hover:border-indigo-900 hover:shadow-lg transition-all text-left"
    >
      <div className="w-10 h-10 bg-indigo-50 dark:bg-indigo-900/30 rounded-xl flex items-center justify-center text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-all shadow-sm">
        <i className={`fas ${icon} text-sm`}></i>
      </div>
      <div>
        <h3 className="font-black text-indigo-950 dark:text-white text-sm group-hover:text-indigo-600 transition-colors">{title}</h3>
        <p className="text-[10px] sm:text-xs text-gray-500 font-medium leading-relaxed">{desc}</p>
      </div>
    </button>
  </li>
);

const ChronologyStep = ({ side, number, title, desc, icon }: any) => (
  <div className={`relative flex flex-col sm:flex-row items-center sm:justify-between ${side === 'right' ? 'sm:flex-row-reverse' : ''}`}>
    {/* Dot */}
    <div className="hidden sm:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 bg-white dark:bg-slate-950 border-4 border-indigo-600 rounded-full items-center justify-center z-10 shadow-xl font-black text-indigo-600">
      {number}
    </div>

    <div className={`w-full sm:w-[42%] group ${side === 'left' ? 'text-left sm:text-right' : 'text-left'}`}>
      <div className="inline-flex sm:hidden items-center space-x-2 bg-indigo-600 text-white px-3 py-1 rounded-full text-xs font-black mb-4">
        <span>STEP {number}</span>
      </div>
      <div className="p-6 sm:p-8 bg-white dark:bg-slate-950 rounded-3xl border border-indigo-50 dark:border-slate-800 shadow-xl group-hover:border-indigo-400 transition-all">
        <div className={`flex items-center space-x-4 mb-4 ${side === 'left' ? 'sm:flex-row-reverse sm:space-x-reverse' : ''}`}>
           <div className="w-12 h-12 bg-indigo-50 dark:bg-indigo-900/30 rounded-xl flex items-center justify-center text-indigo-600 group-hover:scale-110 transition-transform">
             <i className={`fas ${icon} text-xl`}></i>
           </div>
           <h3 className="text-xl sm:text-2xl font-black text-indigo-950 dark:text-white">{title}</h3>
        </div>
        <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 font-medium leading-relaxed">
          {desc}
        </p>
      </div>
    </div>
    
    <div className="hidden sm:block w-[42%]"></div>
  </div>
);
