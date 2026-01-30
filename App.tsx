import React, { useState, useEffect } from 'react';
import { Home } from './pages/Home';
import { Methodology } from './pages/Methodology';
import { Privacy } from './pages/Privacy';
import { Terms } from './pages/Terms';
import { Contact } from './pages/Contact';
import { About } from './pages/About';
import { Team } from './pages/Team';
import { SitemapPage } from './pages/SitemapPage';

type ViewState = 'home' | 'methodology' | 'privacy' | 'terms' | 'contact' | 'about' | 'team' | 'sitemap';

const GlowingDot = () => (
  <span className="relative flex h-1.5 w-1.5 sm:h-2 sm:w-2">
    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
    <span className="relative inline-flex rounded-full h-1.5 w-1.5 sm:h-2 sm:w-2 bg-green-500"></span>
  </span>
);

const MegaMenu: React.FC<{ isOpen: boolean; navigateTo: (view: ViewState) => void; close: () => void }> = ({ isOpen, navigateTo, close }) => {
  if (!isOpen) return null;
  return (
    <div 
      className="absolute top-[calc(100%+8px)] right-0 w-[85vw] sm:w-[600px] bg-white dark:bg-slate-900 border border-indigo-100 dark:border-slate-800 rounded-[2rem] sm:rounded-[2.5rem] shadow-2xl p-5 sm:p-8 grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-8 animate-fade-in z-[60]"
      onMouseLeave={close}
    >
      <div className="space-y-4 sm:space-y-6">
        <p className="text-[9px] sm:text-[10px] font-black uppercase tracking-[0.2em] text-indigo-700 dark:text-indigo-400 mb-1 sm:mb-2">Learning Platform</p>
        <button onClick={() => { navigateTo('home'); close(); }} className="flex items-start space-x-3 sm:space-x-4 group w-full text-left" aria-label="Go to Home">
          <div className="w-9 h-9 sm:w-10 sm:h-10 bg-indigo-50 dark:bg-indigo-900/30 rounded-xl flex items-center justify-center text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-all shadow-sm">
            <i className="fas fa-house text-sm sm:text-base"></i>
          </div>
          <div>
            <p className="font-black text-indigo-950 dark:text-white text-xs sm:text-sm">Main Dashboard</p>
            <p className="text-[10px] sm:text-xs text-gray-500 font-medium leading-tight">Your daily learning central.</p>
          </div>
        </button>
        <button onClick={() => { navigateTo('methodology'); close(); }} className="flex items-start space-x-3 sm:space-x-4 group w-full text-left" aria-label="Go to Methodology">
          <div className="w-9 h-9 sm:w-10 sm:h-10 bg-emerald-50 dark:bg-emerald-900/30 rounded-xl flex items-center justify-center text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-all shadow-sm">
            <i className="fas fa-brain text-sm sm:text-base"></i>
          </div>
          <div>
            <p className="font-black text-indigo-950 dark:text-white text-xs sm:text-sm">Study Methodology</p>
            <p className="text-[10px] sm:text-xs text-gray-500 font-medium leading-tight">Science of memory & AI.</p>
          </div>
        </button>
      </div>
      <div className="space-y-4 sm:space-y-6">
        <p className="text-[9px] sm:text-[10px] font-black uppercase tracking-[0.2em] text-indigo-700 dark:text-indigo-400 mb-1 sm:mb-2">Our Company</p>
        <button onClick={() => { navigateTo('about'); close(); }} className="flex items-start space-x-3 sm:space-x-4 group w-full text-left" aria-label="Go to About Us">
          <div className="w-9 h-9 sm:w-10 sm:h-10 bg-rose-50 dark:bg-rose-900/30 rounded-xl flex items-center justify-center text-rose-600 group-hover:bg-rose-600 group-hover:text-white transition-all shadow-sm">
            <i className="fas fa-info-circle text-sm sm:text-base"></i>
          </div>
          <div>
            <p className="font-black text-indigo-950 dark:text-white text-xs sm:text-sm">About Vocademy</p>
            <p className="text-[10px] sm:text-xs text-gray-500 font-medium leading-tight">Our mission for aspirants.</p>
          </div>
        </button>
        <button onClick={() => { navigateTo('team'); close(); }} className="flex items-start space-x-3 sm:space-x-4 group w-full text-left" aria-label="Go to Our Team">
          <div className="w-9 h-9 sm:w-10 sm:h-10 bg-amber-50 dark:bg-amber-900/30 rounded-xl flex items-center justify-center text-amber-600 group-hover:bg-amber-600 group-hover:text-white transition-all shadow-sm">
            <i className="fas fa-users text-sm sm:text-base"></i>
          </div>
          <div>
            <p className="font-black text-indigo-950 dark:text-white text-xs sm:text-sm">The Founders</p>
            <p className="text-[10px] sm:text-xs text-gray-500 font-medium leading-tight">The minds building it.</p>
          </div>
        </button>
      </div>
      <div className="col-span-1 sm:col-span-2 pt-4 sm:pt-6 border-t border-gray-100 dark:border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-3">
        <div className="flex space-x-4">
           <button onClick={() => { navigateTo('privacy'); close(); }} className="text-[9px] sm:text-[10px] font-black uppercase text-gray-600 dark:text-gray-400 hover:text-indigo-600 transition-colors">Privacy</button>
           <button onClick={() => { navigateTo('terms'); close(); }} className="text-[9px] sm:text-[10px] font-black uppercase text-gray-600 dark:text-gray-400 hover:text-indigo-600 transition-colors">Terms</button>
           <button onClick={() => { navigateTo('sitemap'); close(); }} className="text-[9px] sm:text-[10px] font-black uppercase text-gray-600 dark:text-gray-400 hover:text-indigo-600 transition-colors">Sitemap</button>
        </div>
        <button onClick={() => { navigateTo('contact'); close(); }} className="text-[9px] sm:text-[10px] font-black uppercase text-indigo-600 hover:underline">Support Portal →</button>
      </div>
    </div>
  );
};

const DownloadModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  const [showIosComingSoon, setShowIosComingSoon] = useState(false);
  useEffect(() => { if (!isOpen) setShowIosComingSoon(false); }, [isOpen]);
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-indigo-950/20 dark:bg-black/40 backdrop-blur-md animate-fade-in" onClick={onClose}></div>
      <div className="relative w-full max-w-md bg-white dark:bg-slate-900 border border-indigo-100 dark:border-white/10 rounded-[2.5rem] p-8 md:p-10 shadow-2xl animate-modal-pop text-center">
        {showIosComingSoon ? (
          <div className="animate-fade-in">
            <div className="w-20 h-20 bg-indigo-50 dark:bg-indigo-900/20 rounded-2xl flex items-center justify-center mx-auto mb-6 text-indigo-600 shadow-sm border border-indigo-100 dark:border-indigo-800/30">
              <i className="fab fa-apple text-4xl"></i>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-indigo-950 dark:text-white mb-4 tracking-tight">iOS Coming Soon</h3>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 font-medium leading-relaxed mb-8 px-2">
              We are currently focusing on the Android experience. iOS version is under development!
            </p>
            <button 
              onClick={() => setShowIosComingSoon(false)}
              className="w-full bg-indigo-600 text-white py-4 rounded-2xl font-black text-lg shadow-xl active:scale-95"
            >
              Understood
            </button>
          </div>
        ) : (
          <>
            <div className="w-20 h-20 bg-indigo-600 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl">
              <span className="text-white font-black text-4xl">V</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-indigo-950 dark:text-white mb-4 tracking-tight">Download App</h3>
            <div className="space-y-4">
              <a href="https://play.google.com/store/apps/details?id=com.lakshya.vocademy" target="_blank" rel="noreferrer" className="block w-full bg-indigo-600 text-white py-4 rounded-2xl font-black text-lg shadow-xl active:scale-95 flex items-center justify-center space-x-3">
                <i className="fab fa-google-play"></i>
                <span>Play Store</span>
              </a>
              <button 
                onClick={() => setShowIosComingSoon(true)}
                className="block w-full bg-gray-50 dark:bg-slate-800 text-gray-600 dark:text-gray-300 py-4 rounded-2xl font-black text-lg border-2 border-gray-100 dark:border-slate-700 flex items-center justify-center space-x-3 active:scale-95"
                aria-label="View iOS release status"
              >
                <i className="fab fa-apple"></i>
                <span>App Store</span>
              </button>
              <button onClick={onClose} className="block w-full py-4 text-gray-400 font-bold hover:opacity-70 transition-opacity">Back to Site</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

const App: React.FC = () => {
  const [view, setView] = useState<ViewState>('home');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);

  const getViewFromPath = (path: string): ViewState => {
    const normalizedPath = path.toLowerCase().replace(/\/$/, '') || '/';
    if (normalizedPath === '/' || normalizedPath === '/home') return 'home';
    if (normalizedPath === '/about-us') return 'about';
    if (normalizedPath === '/team') return 'team';
    if (normalizedPath === '/privacy-and-policy') return 'privacy';
    if (normalizedPath === '/terms-and-conditions') return 'terms';
    if (normalizedPath === '/contact-us') return 'contact';
    if (normalizedPath === '/methodology') return 'methodology';
    if (normalizedPath === '/sitemap') return 'sitemap';
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
      case 'sitemap': return '/Sitemap';
      default: return '/';
    }
  };

  useEffect(() => {
    const initialView = getViewFromPath(window.location.pathname);
    setView(initialView);
    const handlePopState = () => setView(getViewFromPath(window.location.pathname));
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  useEffect(() => { window.scrollTo(0, 0); }, [view]);

  useEffect(() => {
    if (darkMode) document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(!darkMode);
  const navigateTo = (newView: ViewState) => {
    const newPath = getPathFromView(newView);
    if (window.location.pathname !== newPath) window.history.pushState({}, '', newPath);
    setView(newView);
    setIsMegaMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <DownloadModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      <div className="fixed top-2 sm:top-4 w-full px-2 sm:px-4 z-50">
        <nav className="max-w-6xl mx-auto bg-white/70 dark:bg-slate-900/70 backdrop-blur-md border border-white/20 dark:border-slate-800 rounded-2xl sm:rounded-3xl shadow-lg h-14 sm:h-16">
          <div className="px-3 sm:px-8 h-full flex items-center justify-between relative">
            <button onClick={() => navigateTo('home')} className="flex items-center space-x-2 group active:scale-95" aria-label="Vocademy Home">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-indigo-600 rounded-lg flex items-center justify-center shadow-lg group-hover:rotate-6 transition-transform">
                <span className="text-white font-black text-base sm:text-xl">V</span>
              </div>
              <div className="flex items-center">
                <span className="text-base sm:text-xl font-extrabold text-indigo-950 dark:text-white tracking-tight">Vocademy</span>
                <div className="ml-2 flex items-center space-x-1.5 px-2 py-0.5 bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-400 text-[8px] sm:text-[10px] font-black rounded-md border border-green-200">
                  <GlowingDot />
                  <span className="hidden xs:inline">LIVE</span>
                </div>
              </div>
            </button>
            
            <div className="hidden lg:flex items-center space-x-8">
              <button onClick={() => navigateTo('home')} className={`text-sm font-bold ${view === 'home' ? 'text-indigo-600' : 'text-gray-600 dark:text-gray-400'}`}>Home</button>
              <button onClick={() => navigateTo('about')} className={`text-sm font-bold ${view === 'about' ? 'text-indigo-600' : 'text-gray-600 dark:text-gray-400'}`}>About</button>
              <button onClick={() => navigateTo('methodology')} className={`text-sm font-bold ${view === 'methodology' ? 'text-indigo-600' : 'text-gray-600 dark:text-gray-400'}`}>Methodology</button>
              <button onClick={() => navigateTo('contact')} className={`text-sm font-bold ${view === 'contact' ? 'text-indigo-600' : 'text-gray-600 dark:text-gray-400'}`}>Contact</button>
            </div>

            <div className="flex items-center space-x-2 sm:space-x-4">
              <button onClick={toggleDarkMode} className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center hover:bg-gray-100 dark:hover:bg-slate-800 text-gray-600 dark:text-gray-400 transition-all" aria-label="Toggle Theme">
                {darkMode ? <i className="fas fa-sun text-yellow-500"></i> : <i className="fas fa-moon"></i>}
              </button>
              <div className="relative">
                <button 
                  onClick={() => setIsMegaMenuOpen(!isMegaMenuOpen)}
                  className="bg-indigo-600 text-white w-8 h-8 sm:w-11 sm:h-11 rounded-lg sm:rounded-2xl shadow-md active:scale-95 flex items-center justify-center"
                  aria-label="Toggle Menu"
                >
                  <i className={`fas fa-bars-staggered transition-transform ${isMegaMenuOpen ? 'rotate-90' : ''}`}></i>
                </button>
                <MegaMenu isOpen={isMegaMenuOpen} navigateTo={navigateTo} close={() => setIsMegaMenuOpen(false)} />
              </div>
            </div>
          </div>
        </nav>
      </div>

      <main className="pt-4 sm:pt-8" id="main-content">
        {view === 'home' && <Home navigateTo={navigateTo} handleDownload={() => setIsModalOpen(true)} />}
        {view === 'methodology' && <Methodology navigateTo={navigateTo} />}
        {view === 'privacy' && <Privacy />}
        {view === 'terms' && <Terms />}
        {view === 'contact' && <Contact navigateTo={navigateTo} />}
        {view === 'about' && <About navigateTo={navigateTo} />}
        {view === 'team' && <Team navigateTo={navigateTo} />}
        {view === 'sitemap' && <SitemapPage navigateTo={navigateTo} />}
      </main>

      <footer className="bg-white dark:bg-slate-950 pt-16 pb-12 px-4 border-t border-gray-100 dark:border-slate-900 transition-colors">
        <div className="max-w-7xl mx-auto text-center md:text-left">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center justify-center md:justify-start space-x-2 mb-6">
                <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center font-black text-white">V</div>
                <span className="text-2xl font-black text-indigo-950 dark:text-white">Vocademy</span>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-lg max-w-sm mx-auto md:mx-0 font-medium mb-8">The most advanced AI-powered vocabulary platform for competitive aspirants.</p>
              <div className="flex justify-center md:justify-start space-x-4">
                <a href="https://telegram.dog/VocademyApp" target="_blank" rel="noopener" className="w-12 h-12 bg-gray-100 dark:bg-slate-900 rounded-full flex items-center justify-center text-gray-600 hover:text-indigo-600 transition-all" aria-label="Telegram"><i className="fab fa-telegram-plane text-xl"></i></a>
                <a href="https://X.com/VocademyApp" target="_blank" rel="noopener" className="w-12 h-12 bg-gray-100 dark:bg-slate-900 rounded-full flex items-center justify-center text-gray-600 hover:text-indigo-600 transition-all" aria-label="Twitter"><i className="fab fa-twitter text-xl"></i></a>
              </div>
            </div>
            <div>
              <p className="text-indigo-950 dark:text-white font-black uppercase tracking-widest text-sm mb-6">Explore</p>
              <ul className="space-y-4 font-bold text-gray-600 dark:text-gray-400">
                <li><button onClick={() => navigateTo('about')} className="hover:text-indigo-600">About Us</button></li>
                <li><button onClick={() => navigateTo('team')} className="hover:text-indigo-600">Our Team</button></li>
                <li><button onClick={() => navigateTo('methodology')} className="hover:text-indigo-600">Methodology</button></li>
                <li><button onClick={() => navigateTo('sitemap')} className="hover:text-indigo-600">Sitemap</button></li>
              </ul>
            </div>
            <div>
              <p className="text-indigo-950 dark:text-white font-black uppercase tracking-widest text-sm mb-6">Legal</p>
              <ul className="space-y-4 font-bold text-gray-600 dark:text-gray-400">
                <li><button onClick={() => navigateTo('privacy')} className="hover:text-indigo-600">Privacy Policy</button></li>
                <li><button onClick={() => navigateTo('terms')} className="hover:text-indigo-600">Terms of Service</button></li>
              </ul>
            </div>
          </div>
          <div className="pt-12 border-t border-gray-100 dark:border-slate-900 text-center text-gray-500 font-bold text-xs">
            © 2025 Vocademy App. Crafted with ❤️ for Aspirants.
          </div>
        </div>
      </footer>

      {/* CLS FIX: Static width/height for the download pill to reserve layout space */}
      <button 
        onClick={() => setIsModalOpen(true)}
        className="fixed bottom-4 sm:bottom-10 right-4 sm:right-10 z-[60] flex items-center justify-center bg-indigo-700 dark:bg-indigo-600 text-white w-[140px] sm:w-[180px] h-[48px] sm:h-[60px] rounded-full font-black shadow-2xl hover:scale-105 active:scale-95 transition-all border border-white/20"
        aria-label="Download Vocademy App"
        style={{ contain: 'layout' }}
      >
        <i className="fas fa-download mr-3"></i>
        <span className="text-xs sm:text-lg tracking-tight uppercase">DOWNLOAD</span>
      </button>

      <style>{`
        @keyframes fade-in { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fade-in { animation: fade-in 0.6s ease-out forwards; }
        @keyframes modal-pop { 0% { transform: scale(0.9) translateY(20px); opacity: 0; } 100% { transform: scale(1) translateY(0); opacity: 1; } }
        .animate-modal-pop { animation: modal-pop 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards; }
      `}</style>
    </div>
  );
};

export default App;