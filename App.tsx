
import React, { useState, useEffect } from 'react';
import { WordAnalyzerDemo } from './components/WordAnalyzerDemo';
import { AutoSlider } from './components/AutoSlider';
import { ImageCarousel } from './components/ImageCarousel';
import { TesterApplication } from './types';

const GlowingDot = () => (
  <span className="relative flex h-2 w-2">
    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
  </span>
);

const App: React.FC = () => {
  const maxSpots = 199;
  // Set to 2 to match the latest requested screenshot exactly
  const [spotsLeft, setSpotsLeft] = useState(2);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      if (saved) return saved === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });
  
  const [formData, setFormData] = useState<TesterApplication>({
    name: '',
    email: '',
    exam: 'UPSC',
    whatsapp: '',
    reason: ''
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  // Slow countdown simulation
  useEffect(() => {
    const timer = setTimeout(() => {
      if (spotsLeft > 1) setSpotsLeft(prev => prev - 1);
    }, 60000);
    return () => clearTimeout(timer);
  }, [spotsLeft]);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setIsSubmitted(true);
      setIsModalOpen(false);
    } catch (error) {
      console.error("Submission failed", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const progressPercent = ((maxSpots - spotsLeft) / maxSpots) * 100;
  const isUrgent = spotsLeft <= 50;
  const spotsTaken = maxSpots - spotsLeft;

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-indigo-50 dark:bg-slate-950 flex items-center justify-center p-4 transition-colors duration-300">
        <div className="max-w-2xl w-full bg-white dark:bg-slate-900 rounded-[2.5rem] shadow-2xl overflow-hidden border border-indigo-100 dark:border-slate-800">
          <div className="bg-indigo-600 dark:bg-indigo-700 p-10 text-white text-center">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl">
              <i className="fas fa-check text-indigo-600 text-3xl"></i>
            </div>
            <h1 className="text-3xl font-black mb-2">आवेदन प्राप्त हुआ!</h1>
            <p className="text-indigo-100">Application Received for the Early Tester Phase.</p>
          </div>
          <div className="p-8 md:p-12 text-center">
            <p className="text-gray-600 dark:text-gray-300 text-lg mb-8 leading-relaxed">
              Thank you for applying to Vocademy. We are reviewing your details. 
              Our team will reach out to you on Telegram or WhatsApp shortly with the private beta link.
            </p>
            <button 
              onClick={() => setIsSubmitted(false)}
              className="w-full bg-indigo-600 dark:bg-indigo-500 text-white py-4 rounded-2xl font-black text-lg hover:bg-indigo-700 transition-all shadow-lg"
            >
              Back to Home
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-gray-900 dark:text-gray-100 selection:bg-indigo-100 dark:selection:bg-indigo-900/40 transition-colors duration-300">
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 dark:bg-slate-950/80 backdrop-blur-md z-50 border-b border-gray-100 dark:border-slate-900 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center shadow-lg">
              <span className="text-white font-black text-xl">V</span>
            </div>
            <div className="flex items-center">
              <span className="text-xl font-extrabold text-indigo-900 dark:text-white tracking-tight">Vocademy</span>
              <div className="ml-2 flex items-center space-x-1 px-2 py-0.5 bg-emerald-100 dark:bg-emerald-900/40 text-emerald-600 dark:text-emerald-400 text-[10px] font-black rounded-md border border-emerald-200 dark:border-emerald-800">
                <GlowingDot />
                <span>BETA</span>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button 
              onClick={toggleDarkMode}
              className="p-2 w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-100 dark:hover:bg-slate-900 text-gray-500 dark:text-gray-400 transition-all"
              aria-label="Toggle Dark Mode"
            >
              {darkMode ? <i className="fas fa-sun text-xl text-yellow-500"></i> : <i className="fas fa-moon text-xl"></i>}
            </button>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="bg-indigo-600 text-white px-5 py-2 rounded-full font-bold text-sm hover:bg-indigo-700 transition-all shadow-md active:scale-95"
            >
              Live Written
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-indigo-50/50 via-white to-white dark:from-indigo-950/10 dark:via-slate-950 dark:to-slate-950 text-center relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-indigo-100/30 dark:bg-indigo-900/10 rounded-full blur-[120px] -z-10 animate-pulse"></div>
        
        <div className="max-w-7xl mx-auto relative">
          <span className="inline-flex items-center space-x-2 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 px-6 py-2 rounded-full text-sm font-bold mb-6 border border-indigo-200 dark:border-indigo-800 transition-all hover:scale-105">
            <span>नमस्कार! 🌙</span>
            <GlowingDot />
            <span className="text-indigo-900 dark:text-white ml-1 font-bold">is Live</span>
          </span>
          
          <h1 className="text-5xl md:text-7xl font-black text-indigo-950 dark:text-white leading-tight mb-8">
            Master Editorial <br className="hidden md:block" />
            <span className="text-indigo-600 dark:text-indigo-400 underline decoration-indigo-200 dark:decoration-indigo-800 underline-offset-8">Vocabulary</span> with AI
          </h1>
          
          <p className="max-w-3xl mx-auto text-lg md:text-2xl text-gray-600 dark:text-gray-400 mb-12 leading-relaxed font-medium">
            Personalized learning for UPSC, SSC & Banking aspirants. <br className="hidden md:block" /> 
            Context-based words from <b>The Hindu</b> daily editorials.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button 
              onClick={() => setIsModalOpen(true)}
              className="w-full sm:w-auto bg-indigo-600 dark:bg-indigo-500 text-white px-10 py-5 rounded-2xl font-black text-xl hover:bg-indigo-700 dark:hover:bg-indigo-600 transition-all shadow-xl hover:-translate-y-1"
            >
              Get Beta Access Now
            </button>
            <a 
              href="#demo"
              className="w-full sm:w-auto bg-white dark:bg-slate-900 text-indigo-600 dark:text-indigo-400 border-2 border-indigo-100 dark:border-slate-800 px-10 py-5 rounded-2xl font-black text-xl hover:border-indigo-600 dark:hover:border-indigo-400 transition-all"
            >
              Try AI Analyzer
            </a>
          </div>
        </div>
      </section>

      <AutoSlider />

      <section id="features" className="py-24 px-4 bg-white dark:bg-slate-950 transition-colors">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-indigo-950 dark:text-white mb-6">Built for Serious Aspirants</h2>
            <p className="text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto font-medium">Why join our testing phase? Exclusive benefits for the first 50 users.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard icon="📰" title="Editorial Context" desc="Words scanned directly from daily editorials. Learn how high-level words are used in real news." />
            <FeatureCard icon="🧠" title="SRS Flashcards" desc="Spaced Repetition System logic ensures you never forget a word you've learned." />
            <FeatureCard icon="⚔️" title="Multiplayer Duels" desc="Battle fellow aspirants real-time to test your speed and precision under pressure." />
            <FeatureCard icon="📊" title="Progress Tracking" desc="Detailed analytics of your vocabulary strength and exam readiness." />
            <FeatureCard icon="🎁" title="Lifetime Beta Status" desc="Get free premium access for 6 months after the official launch as a reward." />
            <FeatureCard icon="💬" title="Direct Support" desc="Priority telegram support and direct influence on upcoming features." />
          </div>
        </div>
      </section>

      <section id="demo" className="py-24 px-4 bg-indigo-50/50 dark:bg-slate-900/40 transition-colors">
        <WordAnalyzerDemo />
      </section>

      <section className="py-24 px-4 bg-white dark:bg-slate-950 transition-colors">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-indigo-950 dark:text-white">Application Preview</h2>
          <p className="text-gray-500 dark:text-gray-400 mt-4">Take a look at the clean, study-focused interface.</p>
        </div>
        <ImageCarousel />
      </section>

      {/* CTA Section with Improved Progress Bar */}
      <section className="py-32 px-4 bg-indigo-600 dark:bg-indigo-700 text-white text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
        <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center">
          <h2 className="text-4xl md:text-6xl font-black mb-6 leading-tight">Ready to transform your preparation?</h2>
          <p className="text-xl md:text-2xl text-indigo-100 mb-8 max-w-2xl font-medium">We are selecting only {maxSpots} testers for the private beta.</p>
          
          <div className="w-full max-w-md mb-2 flex justify-between items-end px-1">
             <span className="text-xs font-black text-emerald-300 tracking-widest uppercase">Spot Taken</span>
             <span className="text-xs font-black text-indigo-200">{spotsTaken}/{maxSpots}</span>
          </div>
          
          {/* Progress Bar Container - Green and Steady Glow (No Pulse) */}
          <div className="w-full max-w-md bg-indigo-800/50 dark:bg-slate-900/40 rounded-full h-4 mb-10 border border-white/10 overflow-hidden backdrop-blur-sm relative">
            <div 
              className={`h-full transition-all duration-1000 ease-out ${
                isUrgent 
                  ? 'bg-emerald-400 shadow-[0_0_15px_rgba(52,211,153,0.7)]' 
                  : 'bg-white shadow-[0_0_10px_rgba(255,255,255,0.4)]'
              }`}
              style={{ width: `${progressPercent}%` }}
            ></div>
          </div>

          <button 
            onClick={() => setIsModalOpen(true)}
            className="group bg-white text-indigo-600 px-12 py-5 rounded-[2rem] font-black text-2xl md:text-3xl shadow-2xl hover:scale-105 transition-all active:scale-95 flex items-center space-x-3"
          >
            <span>Apply for Waitlist</span>
            <i className="fas fa-arrow-right text-xl transition-transform group-hover:translate-x-1"></i>
          </button>
          
          <p className="mt-8 font-bold text-indigo-100/80 text-xl tracking-wide">
            {spotsLeft} slots remaining today
          </p>
        </div>
      </section>

      <footer className="bg-white dark:bg-slate-950 pt-24 pb-12 px-4 border-t border-gray-100 dark:border-slate-900 transition-colors">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center font-black text-white shadow-lg">V</div>
                <span className="text-2xl font-black text-indigo-950 dark:text-white tracking-tight">Vocademy</span>
              </div>
              <p className="text-gray-500 dark:text-gray-400 text-lg max-w-sm leading-relaxed mb-8">
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
                <li><a href="#features" className="text-gray-500 dark:text-gray-400 hover:text-indigo-600 transition-colors font-bold">Methodology</a></li>
                <li><a href="#demo" className="text-gray-500 dark:text-gray-400 hover:text-indigo-600 transition-colors font-bold">AI Analyzer Demo</a></li>
                <li><a href="https://t.me/Anmolgupta_11" className="text-gray-500 dark:text-gray-400 hover:text-indigo-600 transition-colors font-bold">Community Hub</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-indigo-950 dark:text-white font-black uppercase tracking-widest text-sm mb-6">Legal</h4>
              <ul className="space-y-4">
                <li><a href="#" className="text-gray-500 dark:text-gray-400 hover:text-indigo-600 transition-colors font-bold">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-500 dark:text-gray-400 hover:text-indigo-600 transition-colors font-bold">Terms of Service</a></li>
                <li><a href="#" className="text-gray-500 dark:text-gray-400 hover:text-indigo-600 transition-colors font-bold">Contact Us</a></li>
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

      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
          <div className="absolute inset-0 bg-indigo-950/40 dark:bg-slate-950/60 backdrop-blur-sm" onClick={() => setIsModalOpen(false)}></div>
          <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] w-full max-w-xl p-10 md:p-14 relative z-10 shadow-2xl animate-modal-in">
             <button onClick={() => setIsModalOpen(false)} className="absolute top-10 right-10 text-gray-300 dark:text-gray-600 hover:text-indigo-600 transition-colors text-2xl">
               <i className="fas fa-times"></i>
             </button>
             <h3 className="text-3xl font-black text-indigo-950 dark:text-white mb-4">Beta Application</h3>
             <p className="text-gray-500 dark:text-gray-400 font-medium mb-10">Only serious aspirants will be selected for this phase.</p>
             
             <form className="space-y-6" onSubmit={handleSubmit}>
               <div className="space-y-2">
                 <label className="text-xs font-black uppercase tracking-widest text-indigo-400">Full Name</label>
                 <input required className="w-full px-6 py-4 rounded-xl bg-gray-50 dark:bg-slate-800 border-2 border-transparent focus:border-indigo-600 dark:focus:border-indigo-500 outline-none font-bold text-indigo-950 dark:text-white" placeholder="e.g. Anmol Gupta" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
               </div>
               <div className="grid grid-cols-2 gap-4">
                 <div className="space-y-2">
                   <label className="text-xs font-black uppercase tracking-widest text-indigo-400">Target Exam</label>
                   <select className="w-full px-6 py-4 rounded-xl bg-gray-50 dark:bg-slate-800 border-2 border-transparent focus:border-indigo-600 dark:focus:border-indigo-500 outline-none font-bold text-indigo-950 dark:text-white appearance-none" value={formData.exam} onChange={e => setFormData({...formData, exam: e.target.value})}>
                     <option>UPSC CSE</option>
                     <option>SSC CGL</option>
                     <option>Banking</option>
                     <option>Other</option>
                   </select>
                 </div>
                 <div className="space-y-2">
                   <label className="text-xs font-black uppercase tracking-widest text-indigo-400">Telegram/WhatsApp</label>
                   <input required className="w-full px-6 py-4 rounded-xl bg-gray-50 dark:bg-slate-800 border-2 border-transparent focus:border-indigo-600 dark:focus:border-indigo-500 outline-none font-bold text-indigo-950 dark:text-white" placeholder="@username" value={formData.whatsapp} onChange={e => setFormData({...formData, whatsapp: e.target.value})} />
                 </div>
               </div>
               <div className="space-y-2">
                 <label className="text-xs font-black uppercase tracking-widest text-indigo-400">Why should we select you?</label>
                 <textarea className="w-full px-6 py-4 rounded-xl bg-gray-50 dark:bg-slate-800 border-2 border-transparent focus:border-indigo-600 dark:focus:border-indigo-500 outline-none font-bold text-indigo-950 dark:text-white h-24 resize-none" placeholder="Tell us about your preparation level..." value={formData.reason} onChange={e => setFormData({...formData, reason: e.target.value})} />
               </div>
               <button disabled={isSubmitting} className="w-full bg-indigo-600 dark:bg-indigo-500 text-white py-5 rounded-2xl font-black text-xl shadow-xl hover:bg-indigo-700 dark:hover:bg-indigo-600 transition-all disabled:opacity-50">
                 {isSubmitting ? <i className="fas fa-spinner animate-spin"></i> : 'Submit Application'}
               </button>
             </form>
          </div>
        </div>
      )}

      {/* Floating Action Button */}
      <button 
        onClick={() => setIsModalOpen(true)}
        className="fixed bottom-10 right-10 z-[60] bg-indigo-600 dark:bg-indigo-500 text-white px-8 py-4 rounded-full font-black shadow-[0_20px_50px_rgba(79,70,229,0.4)] hover:scale-110 active:scale-95 transition-all flex items-center space-x-3 group"
      >
        <div className="w-8 h-8 bg-white dark:bg-white text-indigo-600 dark:text-indigo-600 rounded-full flex items-center justify-center font-black animate-bounce">{spotsLeft}</div>
        <span>APPLY FOR BETA</span>
      </button>

      <style>{`
        @keyframes modal-in {
          from { opacity: 0; transform: scale(0.9) translateY(20px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
        .animate-modal-in {
          animation: modal-in 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
      `}</style>
    </div>
  );
};

const FeatureCard: React.FC<{icon: string, title: string, desc: string}> = ({icon, title, desc}) => (
  <div className="bg-white dark:bg-slate-900 p-10 rounded-3xl border border-gray-100 dark:border-slate-800 hover:shadow-2xl dark:hover:shadow-indigo-900/10 hover:border-indigo-100 dark:hover:border-slate-700 transition-all group">
    <div className="w-16 h-16 bg-indigo-50 dark:bg-indigo-900/20 rounded-2xl flex items-center justify-center text-3xl mb-8 group-hover:scale-110 transition-transform duration-500">{icon}</div>
    <h3 className="text-2xl font-black text-indigo-950 dark:text-white mb-4">{title}</h3>
    <p className="text-gray-500 dark:text-gray-400 font-medium text-lg leading-relaxed">{desc}</p>
  </div>
);

export default App;
