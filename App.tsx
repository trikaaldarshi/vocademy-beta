
import React, { useState, useEffect } from 'react';
import { Home } from './pages/Home';
import { Methodology } from './pages/Methodology';
import { Privacy } from './pages/Privacy';
import { Terms } from './pages/Terms';
import { Contact } from './pages/Contact';
import { About } from './pages/About';
import { Team } from './pages/Team';

const FORM_URL = "https://forms.gle/7RjQUp1NXCGDm6LH8";
type ViewState = 'home' | 'methodology' | 'privacy' | 'terms' | 'contact' | 'about' | 'team';

const GlowingDot = () => (
  <span className="relative flex h-2 w-2">
    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
  </span>
);

const App: React.FC = () => {
  const maxSpots = 50;
  const [view, setView] = useState<ViewState>('home');
  
  const [spotsTaken] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('vocademy_spots_taken');
      return saved ? parseInt(saved, 10) : 29;
    }
    return 29;
  });

  // Force light mode by default on load as per request
  const [darkMode, setDarkMode] = useState(false);

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
      
      {/* Navigation - Floating Inset Style */}
      <div className="fixed top-4 w-full px-4 z-50">
        <nav className="max-w-6xl mx-auto bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl border border-white/20 dark:border-slate-800 rounded-3xl shadow-[0_8px_32px_0_rgba(31,38,135,0.15)] transition-all duration-300">
          <div className="px-4 sm:px-8 h-16 flex items-center justify-between">
            <button 
              onClick={() => navigateTo('home')}
              className="flex items-center space-x-2 group active:scale-95 transition-transform"
            >
              <div className="w-9 h-9 sm:w-10 sm:h-10 bg-indigo-600 rounded-xl flex items-center justify-center shadow-lg group-hover:rotate-6 transition-transform">
                <span className="text-white font-black text-lg sm:text-xl">V</span>
              </div>
              <div className="flex items-center">
                <span className="text-lg sm:text-xl font-extrabold text-indigo-900 dark:text-white tracking-tight">Vocademy</span>
                <div className="ml-2 flex items-center space-x-1.5 px-2 py-0.5 bg-emerald-100 dark:bg-emerald-900/40 text-emerald-600 dark:text-emerald-400 text-[9px] sm:text-[10px] font-black rounded-md border border-emerald-200 dark:border-emerald-800">
                  <GlowingDot />
                  <span>BETA</span>
                </div>
              </div>
            </button>
            
            <div className="hidden lg:flex items-center space-x-6 mx-4">
              <button onClick={() => navigateTo('about')} className="text-sm font-bold text-gray-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">About</button>
              <button onClick={() => navigateTo('team')} className="text-sm font-bold text-gray-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Team</button>
              <button onClick={() => navigateTo('methodology')} className="text-sm font-bold text-gray-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Methodology</button>
              <button onClick={() => navigateTo('contact')} className="text-sm font-bold text-gray-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Contact</button>
            </div>

            <div className="flex items-center space-x-1 sm:space-x-4">
              <button 
                onClick={toggleDarkMode}
                className="p-2 w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center hover:bg-indigo-50 dark:hover:bg-indigo-900/30 text-gray-500 dark:text-gray-400 transition-all"
              >
                {darkMode ? <i className="fas fa-sun text-lg text-yellow-500"></i> : <i className="fas fa-moon text-lg"></i>}
              </button>
              <button 
                onClick={handleApply}
                className="bg-indigo-600 dark:bg-indigo-500 text-white px-4 sm:px-6 py-2 sm:py-2.5 rounded-2xl font-bold text-xs sm:text-sm hover:bg-indigo-700 dark:hover:bg-indigo-400 transition-all shadow-[0_4px_20px_-5px_rgba(79,70,229,0.4)] active:scale-95"
              >
                Get Access
              </button>
            </div>
          </div>
        </nav>
      </div>

      {/* Main Content Router */}
      <main className="pt-8">
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
        {view === 'contact' && <Contact navigateTo={navigateTo} />}
        {view === 'about' && <About navigateTo={navigateTo} />}
        {view === 'team' && <Team navigateTo={navigateTo} />}
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
                <a href="https://telegram.dog/VocademyApp" target="_blank" rel="noreferrer" className="w-12 h-12 bg-gray-100 dark:bg-slate-900 rounded-full flex items-center justify-center text-gray-500 hover:text-indigo-600 hover:bg-indigo-50 transition-all hover:scale-110 hover:-translate-y-1 hover:rotate-6 shadow-sm hover:shadow-md">
                  <i className="fab fa-telegram-plane text-xl"></i>
                </a>
                <a href="https://X.com/VocademyApp" target="_blank" rel="noreferrer" className="w-12 h-12 bg-gray-100 dark:bg-slate-900 rounded-full flex items-center justify-center text-gray-500 hover:text-indigo-600 hover:bg-indigo-50 transition-all hover:scale-110 hover:-translate-y-1 hover:rotate-6 shadow-sm hover:shadow-md">
                  <i className="fab fa-twitter text-xl"></i>
                </a>
                <a href="https://instagram.com/VocademyApp" target="_blank" rel="noreferrer" className="w-12 h-12 bg-gray-100 dark:bg-slate-900 rounded-full flex items-center justify-center text-gray-500 hover:text-indigo-600 hover:bg-indigo-50 transition-all hover:scale-110 hover:-translate-y-1 hover:rotate-6 shadow-sm hover:shadow-md">
                  <i className="fab fa-instagram text-xl"></i>
                </a>
                <a href="https://www.reddit.com/r/Vocademyapp" target="_blank" rel="noreferrer" className="w-12 h-12 bg-gray-100 dark:bg-slate-900 rounded-full flex items-center justify-center text-gray-500 hover:text-indigo-600 hover:bg-indigo-50 transition-all hover:scale-110 hover:-translate-y-1 hover:rotate-6 shadow-sm hover:shadow-md">
                  <i className="fab fa-reddit-alien text-xl"></i>
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-indigo-950 dark:text-white font-black uppercase tracking-widest text-sm mb-6">Explore</h4>
              <ul className="space-y-4">
                <li><button onClick={() => navigateTo('about')} className="text-gray-500 dark:text-gray-400 hover:text-indigo-600 transition-colors font-bold text-left">About Us</button></li>
                <li><button onClick={() => navigateTo('team')} className="text-gray-500 dark:text-gray-400 hover:text-indigo-600 transition-colors font-bold text-left">Meet the Team</button></li>
                <li><button onClick={() => navigateTo('methodology')} className="text-gray-500 dark:text-gray-400 hover:text-indigo-600 transition-colors font-bold text-left">Methodology</button></li>
                <li><a href="https://telegram.dog/VocademyApp" className="text-gray-500 dark:text-gray-400 hover:text-indigo-600 transition-colors font-bold block">Community Hub</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-indigo-950 dark:text-white font-black uppercase tracking-widest text-sm mb-6">Legal</h4>
              <ul className="space-y-4">
                <li><button onClick={() => navigateTo('privacy')} className="text-gray-500 dark:text-gray-400 hover:text-indigo-600 transition-colors font-bold text-left">Privacy Policy</button></li>
                <li><button onClick={() => navigateTo('terms')} className="text-gray-500 dark:text-gray-400 hover:text-indigo-600 transition-colors font-bold text-left">Terms of Service</button></li>
                <li><button onClick={() => navigateTo('contact')} className="text-gray-500 dark:text-gray-400 hover:text-indigo-600 transition-colors font-bold text-left">Contact Us</button></li>
              </ul>
            </div>
          </div>

          <div className="pt-12 border-t border-gray-100 dark:border-slate-900 flex flex-col md:flex-row justify-between items-center font-bold text-sm">
            <div className="mb-4 md:mb-0 text-blue-900 dark:text-blue-400">© 2025 Vocademy App. Crafted with ❤️ for Aspirants.</div>
            <div className="flex space-x-6 text-gray-400 dark:text-gray-600">
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
