
import React, { useState, useEffect } from 'react';
import { Home } from './pages/Home';
import { Methodology } from './pages/Methodology';
import { Privacy } from './pages/Privacy';
import { Terms } from './pages/Terms';

const FORM_URL = "https://forms.gle/7RjQUp1NXCGDm6LH8";
type ViewState = 'home' | 'methodology' | 'privacy' | 'terms';

const GlowingDot = () => (
  <span className="relative flex h-2 w-2">
    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
  </span>
);

const App: React.FC = () => {
  const maxSpots = 199;
  const [view, setView] = useState<ViewState>('home');
  
  const [spotsTaken] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('vocademy_spots_taken');
      return saved ? parseInt(saved, 10) : 198;
    }
    return 198;
  });

  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      if (saved) return saved === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [view]);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const spotsLeft = maxSpots - spotsTaken;
  const progressPercent = (spotsTaken / maxSpots) * 100;
  const toggleDarkMode = () => setDarkMode(!darkMode);

  const handleApply = () => {
    window.open(FORM_URL, '_blank');
  };

  const navigateTo = (newView: ViewState) => {
    setView(newView);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-gray-900 dark:text-gray-100 selection:bg-indigo-100 dark:selection:bg-indigo-900/40 transition-colors duration-300">
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 dark:bg-slate-950/80 backdrop-blur-md z-50 border-b border-gray-100 dark:border-slate-900 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <button 
            onClick={() => navigateTo('home')}
            className="flex items-center space-x-2 group active:scale-95 transition-transform"
          >
            <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center shadow-lg group-hover:rotate-6 transition-transform">
              <span className="text-white font-black text-xl">V</span>
            </div>
            <div className="flex items-center">
              <span className="text-xl font-extrabold text-indigo-900 dark:text-white tracking-tight">Vocademy</span>
              <div className="ml-2 flex items-center space-x-1 px-2 py-0.5 bg-emerald-100 dark:bg-emerald-900/40 text-emerald-600 dark:text-emerald-400 text-[10px] font-black rounded-md border border-emerald-200 dark:border-emerald-800">
                <GlowingDot />
                <span>BETA</span>
              </div>
            </div>
          </button>
          <div className="flex items-center space-x-4">
            <button 
              onClick={toggleDarkMode}
              className="p-2 w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-100 dark:hover:bg-slate-900 text-gray-500 dark:text-gray-400 transition-all"
            >
              {darkMode ? <i className="fas fa-sun text-xl text-yellow-500"></i> : <i className="fas fa-moon text-xl"></i>}
            </button>
            <button 
              onClick={handleApply}
              className="bg-indigo-600 text-white px-5 py-2 rounded-full font-bold text-sm hover:bg-indigo-700 transition-all shadow-md active:scale-95"
            >
              Get Beta
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content Router */}
      <main>
        {view === 'home' && (
          <Home 
            handleApply={handleApply} 
            spotsTaken={spotsTaken} 
            maxSpots={maxSpots} 
            progressPercent={progressPercent} 
            spotsLeft={spotsLeft} 
          />
        )}
        {view === 'methodology' && <Methodology navigateTo={navigateTo} />}
        {view === 'privacy' && <Privacy />}
        {view === 'terms' && <Terms />}
      </main>

      {/* Footer */}
      <footer className="bg-white dark:bg-slate-950 pt-24 pb-12 px-4 border-t border-gray-100 dark:border-slate-900 transition-colors">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center font-black text-white shadow-lg">V</div>
                <span className="text-2xl font-black text-indigo-950 dark:text-white tracking-tight">Vocademy</span>
              </div>
              <p className="text-gray-500 dark:text-gray-400 text-lg max-w-sm leading-relaxed mb-8 font-medium">
                The most advanced AI-powered vocabulary platform designed specifically for the Indian competitive exam ecosystem.
              </p>
              <div className="flex space-x-4">
                <a href="https://t.me/Anmolgupta_11" target="_blank" rel="noreferrer" className="w-12 h-12 bg-gray-100 dark:bg-slate-900 rounded-full flex items-center justify-center text-gray-500 hover:text-indigo-600 hover:bg-indigo-50 transition-all">
                  <i className="fab fa-telegram-plane text-xl"></i>
                </a>
                <a href="#" className="w-12 h-12 bg-gray-100 dark:bg-slate-900 rounded-full flex items-center justify-center text-gray-500 hover:text-indigo-600 hover:bg-indigo-50 transition-all">
                  <i className="fab fa-twitter text-xl"></i>
                </a>
                <a href="#" className="w-12 h-12 bg-gray-100 dark:bg-slate-900 rounded-full flex items-center justify-center text-gray-500 hover:text-indigo-600 hover:bg-indigo-50 transition-all">
                  <i className="fab fa-instagram text-xl"></i>
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-indigo-950 dark:text-white font-black uppercase tracking-widest text-sm mb-6">Resources</h4>
              <ul className="space-y-4">
                <li><button onClick={() => navigateTo('methodology')} className="text-gray-500 dark:text-gray-400 hover:text-indigo-600 transition-colors font-bold text-left">Methodology</button></li>
                <li><a href="#demo" onClick={(e) => { if(view !== 'home') { e.preventDefault(); navigateTo('home'); setTimeout(() => document.getElementById('demo')?.scrollIntoView({behavior:'smooth'}), 100); } }} className="text-gray-500 dark:text-gray-400 hover:text-indigo-600 transition-colors font-bold block">AI Analyzer Demo</a></li>
                <li><a href="https://t.me/Anmolgupta_11" className="text-gray-500 dark:text-gray-400 hover:text-indigo-600 transition-colors font-bold block">Community Hub</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-indigo-950 dark:text-white font-black uppercase tracking-widest text-sm mb-6">Legal</h4>
              <ul className="space-y-4">
                <li><button onClick={() => navigateTo('privacy')} className="text-gray-500 dark:text-gray-400 hover:text-indigo-600 transition-colors font-bold text-left">Privacy Policy</button></li>
                <li><button onClick={() => navigateTo('terms')} className="text-gray-500 dark:text-gray-400 hover:text-indigo-600 transition-colors font-bold text-left">Terms of Service</button></li>
                <li><a href="mailto:support@vocademy.app" className="text-gray-500 dark:text-gray-400 hover:text-indigo-600 transition-colors font-bold block">Contact Us</a></li>
              </ul>
            </div>
          </div>

          <div className="pt-12 border-t border-gray-100 dark:border-slate-900 flex flex-col md:flex-row justify-between items-center text-gray-400 dark:text-gray-600 font-bold text-sm">
            <div className="mb-4 md:mb-0">© 2024 Vocademy App. Crafted with ❤️ for Aspirants.</div>
            <div className="flex space-x-6">
              <span>Built on Gemini AI</span>
              <span className="hidden md:inline">•</span>
              <span>SSC • UPSC • Banking</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Action Button with Pulse Glow Animation */}
      <button 
        onClick={handleApply}
        className="fixed bottom-10 right-10 z-[60] bg-indigo-600 dark:bg-indigo-500 text-white px-8 py-4 rounded-full font-black shadow-[0_20px_50px_rgba(79,70,229,0.4)] hover:scale-110 active:scale-95 transition-all flex items-center space-x-3 group animate-pulse-glow"
      >
        <div className="w-8 h-8 bg-white dark:bg-white text-indigo-600 dark:text-indigo-600 rounded-full flex items-center justify-center font-black">
          {spotsLeft}
        </div>
        <span className="hidden sm:inline">APPLY FOR BETA</span>
        <span className="sm:hidden">APPLY</span>
      </button>

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }

        @keyframes pulse-glow {
          0% { box-shadow: 0 0 0 0 rgba(79, 70, 229, 0.4); transform: scale(1); }
          50% { box-shadow: 0 0 0 15px rgba(79, 70, 229, 0); transform: scale(1.05); }
          100% { box-shadow: 0 0 0 0 rgba(79, 70, 229, 0); transform: scale(1); }
        }
        .animate-pulse-glow {
          animation: pulse-glow 3s infinite cubic-bezier(0.4, 0, 0.6, 1);
        }
      `}</style>
    </div>
  );
};

export default App;
