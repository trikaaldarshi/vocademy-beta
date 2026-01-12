
import React, { useState, useEffect } from 'react';
import { Home } from './pages/Home';
import { Methodology } from './pages/Methodology';
import { Privacy } from './pages/Privacy';
import { Terms } from './pages/Terms';
import { Contact } from './pages/Contact';
import { About } from './pages/About';
import { Team } from './pages/Team';

type ViewState = 'home' | 'methodology' | 'privacy' | 'terms' | 'contact' | 'about' | 'team';

const GlowingDot = () => (
  <span className="relative flex h-2 w-2">
    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
  </span>
);

const RegistrationModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-indigo-950/20 dark:bg-black/40 backdrop-blur-xl animate-fade-in"
        onClick={onClose}
      ></div>
      
      <div className="relative w-full max-w-md bg-white dark:bg-slate-900 border border-indigo-100 dark:border-white/10 rounded-[2.5rem] p-8 md:p-10 shadow-2xl animate-modal-pop text-center">
        <div className="w-20 h-20 bg-indigo-100 dark:bg-indigo-900/30 rounded-3xl flex items-center justify-center mx-auto mb-6 text-indigo-600 dark:text-indigo-400 animate-float">
          <i className="fas fa-rocket text-3xl"></i>
        </div>
        
        <h3 className="text-2xl md:text-3xl font-black text-indigo-950 dark:text-white mb-4 tracking-tight leading-tight">
          Join the <br /> Pre-registration
        </h3>
        
        <p className="text-gray-600 dark:text-gray-400 font-medium leading-relaxed mb-8">
          Secure your spot in the first 500 users to get early access and exclusive benefits upon launch.
        </p>

        <div className="space-y-3">
          <a 
            href="https://forms.gle/vocademy-pre-reg" 
            target="_blank" 
            rel="noreferrer"
            className="block w-full bg-indigo-600 text-white py-4 rounded-2xl font-black text-lg shadow-xl hover:bg-indigo-700 transition-all active:scale-95"
          >
            Apply via Google Form
          </a>
          <button 
            onClick={onClose}
            className="block w-full py-4 text-gray-500 dark:text-gray-400 font-bold hover:opacity-70 transition-opacity"
          >
            Maybe Later
          </button>
        </div>
      </div>

      <style>{`
        @keyframes modal-pop {
          0% { transform: scale(0.9) translateY(20px); opacity: 0; }
          100% { transform: scale(1) translateY(0); opacity: 1; }
        }
        .animate-modal-pop {
          animation: modal-pop 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }
      `}</style>
    </div>
  );
};

const App: React.FC = () => {
  const maxSpots = 500;
  const spotsTaken = 427;
  const spotsLeft = maxSpots - spotsTaken;

  const [view, setView] = useState<ViewState>('home');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // Robust Case-Insensitive Routing Logic
  const getViewFromPath = (path: string): ViewState => {
    const normalizedPath = path.toLowerCase().replace(/\/$/, '') || '/';
    
    // Exact mapping for requested slugs (case-insensitive due to .toLowerCase())
    if (normalizedPath === '/' || normalizedPath === '/home') return 'home';
    if (normalizedPath === '/about-us') return 'about';
    if (normalizedPath === '/team') return 'team';
    if (normalizedPath === '/privacy-and-policy') return 'privacy';
    if (normalizedPath === '/terms-and-conditions') return 'terms';
    if (normalizedPath === '/contact-us') return 'contact';
    
    // Fallback for legacy variations
    if (normalizedPath === '/about') return 'about';
    if (normalizedPath === '/contact') return 'contact';
    if (normalizedPath === '/privacy-policy' || normalizedPath === '/privacy') return 'privacy';
    if (normalizedPath === '/terms-of-service' || normalizedPath === '/terms') return 'terms';
    if (normalizedPath === '/methodology') return 'methodology';
    
    return 'home';
  };

  const getPathFromView = (viewState: ViewState): string => {
    switch (viewState) {
      case 'home': return '/';
      case 'about': return '/About-Us';
      case 'team': return '/Team';
      case 'privacy': return '/Privacy-and-policy';
      case 'terms': return '/Terms-and-conditions';
      case 'contact': return '/Contact-us';
      case 'methodology': return '/Methodology';
      default: return '/';
    }
  };

  useEffect(() => {
    // Sync view on initial load (direct URL access)
    const initialView = getViewFromPath(window.location.pathname);
    setView(initialView);

    // Handle browser back/forward buttons
    const handlePopState = () => {
      setView(getViewFromPath(window.location.pathname));
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

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

  const progressPercent = (spotsTaken / maxSpots) * 100;
  const toggleDarkMode = () => setDarkMode(!darkMode);

  const handleApply = () => {
    setIsModalOpen(true);
  };

  const navigateTo = (newView: ViewState) => {
    const newPath = getPathFromView(newView);
    if (window.location.pathname !== newPath) {
      window.history.pushState({}, '', newPath);
    }
    setView(newView);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-gray-900 dark:text-gray-100 selection:bg-indigo-100 dark:selection:bg-indigo-900/40 transition-colors duration-300">
      
      <RegistrationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

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
                <span className="text-lg sm:text-xl font-extrabold text-indigo-950 dark:text-white tracking-tight">Vocademy</span>
                <div className="ml-2 flex items-center space-x-1.5 px-2 py-0.5 bg-green-100 dark:bg-green-900/40 text-green-600 dark:text-green-400 text-[9px] sm:text-[10px] font-black rounded-md border border-green-200 dark:border-green-800">
                  <GlowingDot />
                  <span>LIVE</span>
                </div>
              </div>
            </button>
            
            <div className="hidden lg:flex items-center space-x-6 mx-4">
              <button onClick={() => navigateTo('about')} className="text-sm font-bold text-gray-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">About Us</button>
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
                className="bg-indigo-600 dark:bg-indigo-500 text-white px-4 sm:px-6 py-2 sm:py-2.5 rounded-2xl font-bold text-xs sm:text-sm transition-all shadow-md active:scale-95"
              >
                Join Now
              </button>
            </div>
          </div>
        </nav>
      </div>

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

      <footer className="bg-white dark:bg-slate-950 pt-24 pb-12 px-4 border-t border-gray-100 dark:border-slate-900 transition-colors">
        <div className="max-w-7xl mx-auto text-center md:text-left">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center justify-center md:justify-start space-x-2 mb-6">
                <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center font-black text-white shadow-lg">V</div>
                <span className="text-2xl font-black text-indigo-950 dark:text-white tracking-tight">Vocademy</span>
              </div>
              <p className="text-gray-500 dark:text-gray-400 text-lg max-w-sm mx-auto md:mx-0 leading-relaxed mb-8 font-medium">
                The most advanced AI-powered vocabulary platform designed specifically for the Indian competitive exam ecosystem.
              </p>
              <div className="flex justify-center md:justify-start space-x-4">
                <a href="https://telegram.dog/VocademyApp" target="_blank" rel="noreferrer" className="w-12 h-12 bg-gray-100 dark:bg-slate-900 rounded-full flex items-center justify-center text-gray-500 hover:text-indigo-600 hover:bg-indigo-50 transition-all hover:scale-110 shadow-sm">
                  <i className="fab fa-telegram-plane text-xl"></i>
                </a>
                <a href="https://X.com/VocademyApp" target="_blank" rel="noreferrer" className="w-12 h-12 bg-gray-100 dark:bg-slate-900 rounded-full flex items-center justify-center text-gray-500 hover:text-indigo-600 hover:bg-indigo-50 transition-all hover:scale-110 shadow-sm">
                  <i className="fab fa-twitter text-xl"></i>
                </a>
                <a href="https://instagram.com/VocademyApp" target="_blank" rel="noreferrer" className="w-12 h-12 bg-gray-100 dark:bg-slate-900 rounded-full flex items-center justify-center text-gray-500 hover:text-indigo-600 hover:bg-indigo-50 transition-all hover:scale-110 shadow-sm">
                  <i className="fab fa-instagram text-xl"></i>
                </a>
                <a href="https://www.reddit.com/r/Vocademyapp" target="_blank" rel="noreferrer" className="w-12 h-12 bg-gray-100 dark:bg-slate-900 rounded-full flex items-center justify-center text-gray-500 hover:text-indigo-600 hover:bg-indigo-50 transition-all hover:scale-110 shadow-sm">
                  <i className="fab fa-reddit-alien text-xl"></i>
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-indigo-950 dark:text-white font-black uppercase tracking-widest text-sm mb-6">Explore</h4>
              <ul className="space-y-4">
                <li><button onClick={() => navigateTo('about')} className="text-gray-500 dark:text-gray-400 hover:text-indigo-600 transition-colors font-bold">About Us</button></li>
                <li><button onClick={() => navigateTo('team')} className="text-gray-500 dark:text-gray-400 hover:text-indigo-600 transition-colors font-bold">Team</button></li>
                <li><button onClick={() => navigateTo('methodology')} className="text-gray-500 dark:text-gray-400 hover:text-indigo-600 transition-colors font-bold">Methodology</button></li>
              </ul>
            </div>

            <div>
              <h4 className="text-indigo-950 dark:text-white font-black uppercase tracking-widest text-sm mb-6">Legal</h4>
              <ul className="space-y-4">
                <li><button onClick={() => navigateTo('privacy')} className="text-gray-500 dark:text-gray-400 hover:text-indigo-600 transition-colors font-bold">Privacy Policy</button></li>
                <li><button onClick={() => navigateTo('terms')} className="text-gray-500 dark:text-gray-400 hover:text-indigo-600 transition-colors font-bold">Terms of Service</button></li>
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

      <button 
        onClick={handleApply}
        className="fixed bottom-10 right-10 z-[60] bg-indigo-700 dark:bg-indigo-600 text-white px-6 py-4 rounded-[2rem] font-black shadow-2xl hover:scale-105 active:scale-95 transition-all flex items-center space-x-4 border border-white/10"
      >
        <div className="w-10 h-10 bg-white text-indigo-700 rounded-full flex items-center justify-center font-black text-xl">
          {spotsLeft}
        </div>
        <span className="text-xl tracking-tight">JOIN</span>
      </button>

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default App;
