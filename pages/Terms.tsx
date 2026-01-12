
import React from 'react';

export const Terms: React.FC = () => {
  return (
    <div className="pt-32 pb-24 px-4 max-w-5xl mx-auto animate-fade-in transition-colors duration-300">
      {/* Terms Header */}
      <div className="text-center mb-16 md:mb-24">
        <div className="inline-flex items-center space-x-2 bg-indigo-50 dark:bg-indigo-950/30 text-indigo-600 dark:text-indigo-400 px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest mb-6 border border-indigo-100 dark:border-indigo-800 shadow-sm">
          <i className="fas fa-file-contract animate-pulse"></i>
          <span>Legal Framework</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-black text-indigo-950 dark:text-white mb-6 tracking-tight leading-none">
          Terms & <span className="text-indigo-600">Conditions</span>
        </h1>
        <div className="flex items-center justify-center space-x-2 text-xs font-bold text-gray-500 dark:text-gray-400 mb-8">
          <i className="far fa-calendar-check text-indigo-500"></i>
          <span>Effective Date: January 11, 2026</span>
        </div>
        
        <div className="max-w-4xl mx-auto p-6 md:p-10 bg-white dark:bg-slate-900/50 rounded-[2.5rem] border border-indigo-50 dark:border-slate-800 shadow-2xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 rounded-full blur-3xl -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700"></div>
          <p className="text-lg md:text-xl text-indigo-900 dark:text-indigo-300 font-black mb-4 leading-tight">Welcome to Vocademy.</p>
          <div className="text-gray-600 dark:text-gray-400 font-medium text-base leading-relaxed text-left space-y-4">
            <p>
              These Terms and Conditions ("Terms") govern your access to and use of the Vocademy mobile application and website ("Service"). By accessing or using our Service, you agree to be bound by these Terms.
            </p>
            <p className="p-4 bg-indigo-50/50 dark:bg-indigo-900/20 rounded-2xl border border-indigo-100/50 dark:border-indigo-800/50 font-bold text-sm italic">
              Vocademy is an educational platform designed to enhance English language proficiency through curated editorial content, vocabulary exercises, competitive sprints, and gamified learning experiences.
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-16">
        {/* User Accounts Section */}
        <section>
          <div className="flex items-center space-x-4 mb-8">
            <div className="w-12 h-12 bg-indigo-600 text-white rounded-xl flex items-center justify-center shadow-xl shadow-indigo-500/20 animate-float">
              <i className="fas fa-user-circle text-xl"></i>
            </div>
            <h2 className="text-2xl md:text-3xl font-black text-indigo-950 dark:text-white tracking-tight">User Accounts</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <TermsDetailCard 
              title="Eligibility & Registration"
              items={[
                "Minimum age requirement: 13 years",
                "Users under 18 must have guardian permission",
                "You must provide accurate and complete info",
                "Keep your account credentials confidential"
              ]}
            />
            <TermsDetailCard 
              title="Account Security & Termination"
              items={[
                "You are responsible for all account activity",
                "Notify us immediately of unauthorized use",
                "We reserve the right to suspend accounts",
                "Violations may lead to permanent bans"
              ]}
            />
          </div>
        </section>

        {/* IP & Conduct */}
        <section className="grid md:grid-cols-2 gap-8">
          <TermsFeatureBlock 
            title="Intellectual Property" 
            icon="fa-copyright" 
            color="text-emerald-500"
            desc="All content including text, graphics, logos, and AI-generated definitions is the property of Vocademy."
            items={[
              "Personal, non-commercial use only",
              "No copying or derivative works allowed",
              "No reverse engineering of source code",
              "No automated data extraction (scraping)"
            ]}
          />
          <TermsFeatureBlock 
            title="User Conduct" 
            icon="fa-gavel" 
            color="text-rose-500"
            desc="We maintain a strictly educational and respectful environment for all aspirants."
            items={[
              "Zero tolerance for harassment or bullying",
              "No cheating or unauthorized automation bots",
              "No distribution of malicious code or viruses",
              "Fair play in all multiplayer duels"
            ]}
          />
        </section>

        {/* Premium & Refunds */}
        <section>
          <div className="flex items-center space-x-4 mb-8">
            <div className="w-12 h-12 bg-amber-500 text-white rounded-xl flex items-center justify-center shadow-xl shadow-amber-500/20 animate-bounce-soft">
              <i className="fas fa-crown text-xl"></i>
            </div>
            <h2 className="text-2xl md:text-3xl font-black text-indigo-950 dark:text-white tracking-tight">Premium & Refunds</h2>
          </div>
          <div className="bg-white dark:bg-slate-900 p-8 md:p-12 rounded-[2.5rem] border border-gray-100 dark:border-slate-800 shadow-xl grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-black text-indigo-950 dark:text-white mb-4 flex items-center">
                <i className="fas fa-credit-card text-indigo-600 mr-3"></i>
                Subscription Plans
              </h3>
              <p className="text-gray-600 dark:text-gray-400 font-medium leading-relaxed text-sm mb-4">
                Payments are processed via Play Store/App Store. Subscriptions auto-renew unless cancelled 24h prior. Pricing changes apply to the next billing cycle.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-[10px] font-black rounded-lg">MONTHLY</span>
                <span className="px-3 py-1 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-[10px] font-black rounded-lg">YEARLY</span>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-black text-indigo-950 dark:text-white mb-4 flex items-center">
                <i className="fas fa-hand-holding-dollar text-emerald-500 mr-3"></i>
                Refund Policy
              </h3>
              <p className="text-gray-600 dark:text-gray-400 font-medium leading-relaxed text-sm">
                Refunds are subject to platform store policies. We don't offer direct refunds for partially used periods. Technical blocks will be addressed on a case-by-case basis.
              </p>
            </div>
          </div>
        </section>

        {/* Limitation of Liability */}
        <section className="bg-indigo-50/50 dark:bg-indigo-950/20 p-8 md:p-12 rounded-[2.5rem] border border-indigo-100 dark:border-indigo-900/40 text-center">
           <div className="w-16 h-16 bg-white dark:bg-slate-900 rounded-2xl flex items-center justify-center shadow-lg mx-auto mb-6">
             <i className="fas fa-shield-virus text-indigo-600 text-3xl"></i>
           </div>
           <h3 className="text-2xl font-black text-indigo-950 dark:text-white mb-4 uppercase tracking-tighter">Limitation of Liability</h3>
           <p className="text-gray-600 dark:text-gray-400 font-medium text-sm leading-relaxed max-w-3xl mx-auto mb-6">
             Vocademy is provided on an "AS IS" basis. We do not guarantee uninterrupted or error-free service. To the full extent permissible by law, Vocademy shall not be liable for any damages arising from the use of the Service.
           </p>
           <div className="inline-block px-6 py-2 bg-indigo-600 text-white rounded-full text-xs font-black tracking-widest uppercase">
             Disclaimer of Warranties
           </div>
        </section>

        {/* Policy Changes Section */}
        <section className="bg-white dark:bg-slate-900 p-8 rounded-[2.5rem] border border-gray-100 dark:border-slate-800 shadow-xl">
           <div className="flex flex-col md:flex-row items-center gap-8">
             <div className="w-20 h-20 bg-indigo-50 dark:bg-indigo-950/30 rounded-3xl flex items-center justify-center flex-shrink-0 animate-wiggle">
               <i className="fas fa-sync-alt text-indigo-600 text-4xl"></i>
             </div>
             <div>
               <h3 className="text-2xl font-black text-indigo-950 dark:text-white mb-2">Changes to Terms</h3>
               <p className="text-gray-600 dark:text-gray-400 font-medium text-sm leading-relaxed italic">
                 We reserve the right to modify these Terms at any time. Significant changes will be announced via in-app notifications and email updates. Your continued use after updates constitutes acceptance.
               </p>
             </div>
           </div>
        </section>

        {/* Contact Section */}
        <section id="contact-us" className="pt-4">
          <div className="bg-gradient-to-br from-indigo-600 to-indigo-800 rounded-[3rem] p-8 md:p-16 text-white relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-white/10 rounded-full blur-[100px] -mr-32 -mt-32 animate-pulse-aura"></div>
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
              <div className="text-center md:text-left">
                <h3 className="text-3xl md:text-4xl font-black mb-4 tracking-tight">Legal Inquiry</h3>
                <p className="text-indigo-100 font-bold text-base max-w-sm leading-relaxed">
                  For any clarifications regarding these Terms and Conditions, reach out to our legal support desk:
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-xl p-6 sm:p-8 rounded-[2rem] border border-white/20 w-full md:max-w-md space-y-4">
                <ContactLink icon="fa-globe" label="Official Portal" value="vocademy.co.in" href="https://vocademy.co.in" />
                <ContactLink icon="fa-envelope" label="Legal Support" value="support@vocademy.co.in" href="mailto:support@vocademy.co.in" />
                <ContactLink icon="fa-paper-plane" label="Secondary" value="contact@vocademy.co.in" href="mailto:contact@vocademy.co.in" />
                <ContactLink icon="fa-at" label="Gmail Desk" value="vocademy.co.in@gmail.com" href="mailto:vocademy.co.in@gmail.com" />
              </div>
            </div>
          </div>
        </section>

        {/* Commitment Footer */}
        <div className="text-center py-10">
          <p className="text-[10px] font-black text-indigo-600 dark:text-indigo-400 uppercase tracking-[0.2em] mb-4">Integrity in Learning</p>
          <div className="bg-indigo-50 dark:bg-indigo-950/30 p-8 rounded-[2.5rem] border border-indigo-100 dark:border-indigo-900/40">
            <p className="text-indigo-700 dark:text-indigo-300 max-w-2xl mx-auto italic font-black text-lg md:text-xl leading-relaxed mb-4">
              "By using Vocademy, you become part of a community committed to excellence and mutual respect."
            </p>
            <p className="text-indigo-950 dark:text-indigo-200 font-black text-lg">
              Thank you for choosing Vocademy for your learning journey!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const TermsDetailCard = ({ title, items }: any) => (
  <div className="bg-white dark:bg-slate-900 p-8 rounded-[2rem] border border-gray-100 dark:border-slate-800 shadow-xl group hover:border-indigo-100 dark:hover:border-indigo-900 transition-all">
    <h3 className="text-lg font-black text-indigo-950 dark:text-white mb-6 uppercase tracking-wider">{title}</h3>
    <ul className="space-y-4">
      {items.map((item: string, i: number) => (
        <li key={i} className="flex items-start space-x-3 text-gray-600 dark:text-gray-400 font-bold text-sm">
          <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  </div>
);

const TermsFeatureBlock = ({ title, icon, color, desc, items }: any) => (
  <div className="bg-white dark:bg-slate-900 p-8 rounded-[2.5rem] border border-gray-100 dark:border-slate-800 shadow-xl h-full flex flex-col group hover:border-indigo-100 transition-all">
    <div className="flex items-center space-x-3 mb-6">
      <div className={`w-10 h-10 rounded-xl flex items-center justify-center bg-gray-50 dark:bg-slate-800/50 ${color} group-hover:scale-110 transition-transform`}>
        <i className={`fas ${icon} text-lg`}></i>
      </div>
      <h3 className="text-xl font-black text-indigo-950 dark:text-white tracking-tight">{title}</h3>
    </div>
    <p className="text-gray-600 dark:text-gray-400 font-medium text-sm leading-relaxed mb-6">{desc}</p>
    <ul className="space-y-3 mb-auto">
      {items.map((item: string, i: number) => (
        <li key={i} className="flex items-center space-x-3 text-gray-500 dark:text-gray-400 font-bold text-xs">
          <i className="fas fa-check-circle text-indigo-500 text-sm"></i>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  </div>
);

const ContactLink = ({ icon, label, value, href }: any) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer"
    className="flex items-center space-x-4 group p-2 rounded-xl hover:bg-white/5 transition-all"
  >
    <div className="w-9 h-9 sm:w-8 sm:h-8 bg-white/10 rounded-lg flex items-center justify-center text-indigo-300 group-hover:scale-110 transition-transform flex-shrink-0">
      <i className={`fas ${icon} text-base sm:text-sm`}></i>
    </div>
    <div className="min-w-0 flex-1">
      <p className="text-[8px] uppercase font-black tracking-widest text-indigo-200/60 leading-none mb-1">{label}</p>
      <p className="text-[13px] sm:text-sm font-black tracking-tight group-hover:text-indigo-300 transition-colors break-words">
        {value}
      </p>
    </div>
  </a>
);
