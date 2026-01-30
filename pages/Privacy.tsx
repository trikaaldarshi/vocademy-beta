
import React from 'react';

export const Privacy: React.FC = () => {
  return (
    <div className="pt-32 pb-24 px-4 max-w-5xl mx-auto animate-fade-in transition-colors duration-300">
      <style>{`
        @keyframes pulse-aura {
          0%, 100% { opacity: 0.1; transform: scale(1); }
          50% { opacity: 0.2; transform: scale(1.05); }
        }
        .animate-pulse-aura {
          animation: pulse-aura 5s ease-in-out infinite;
        }
      `}</style>

      {/* Policy Header */}
      <div className="text-center mb-16 md:mb-24">
        <div className="inline-flex items-center space-x-2 bg-indigo-50 dark:bg-indigo-950/30 text-indigo-600 dark:text-indigo-400 px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest mb-6 border border-indigo-100 dark:border-indigo-800 shadow-sm">
          <i className="fas fa-shield-halved animate-pulse"></i>
          <span>Privacy Protocol</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-black text-indigo-950 dark:text-white mb-6 tracking-tight leading-none">
          Privacy <span className="text-indigo-600">Policy</span>
        </h1>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-xs font-bold text-gray-500 dark:text-gray-400 mb-8">
          <div className="flex items-center space-x-2">
            <i className="far fa-calendar-alt text-indigo-500"></i>
            <span>Last Updated: January 17, 2026</span>
          </div>
          <div className="hidden sm:block text-gray-300 dark:text-gray-700">|</div>
          <div className="flex items-center space-x-2">
            <i className="far fa-calendar-check text-indigo-500"></i>
            <span>Effective Date: December 15, 2025</span>
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto p-6 md:p-10 bg-white dark:bg-slate-900/50 rounded-[2.5rem] border border-indigo-50 dark:border-slate-800 shadow-2xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 rounded-full blur-3xl -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700"></div>
          <p className="text-lg md:text-xl text-indigo-900 dark:text-indigo-300 font-black mb-4 leading-tight text-center">Welcome to Vocademy.</p>
          <div className="text-gray-600 dark:text-gray-400 font-medium text-base leading-relaxed text-left space-y-4">
            <p>
              Your privacy is extremely important to us, and we are committed to protecting your personal information and being transparent about how your data is used. This Privacy Policy explains how Vocademy collects, uses, stores, and safeguards your information when you use our mobile application and website.
            </p>
            <p className="p-4 bg-indigo-50/50 dark:bg-indigo-900/20 rounded-2xl border border-indigo-100/50 dark:border-indigo-800/50 font-bold text-sm italic">
              By signing up, logging in, accessing or using Vocademy, you agree to the terms described in this Privacy Policy. If you do not agree with any part of this policy, please discontinue use of the app and website.
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-16">
        {/* Our Privacy Philosophy */}
        <section>
          <div className="flex items-center space-x-4 mb-8">
            <div className="w-12 h-12 bg-rose-500 text-white rounded-xl flex items-center justify-center shadow-xl shadow-rose-500/20 animate-float">
              <i className="fas fa-heart text-xl"></i>
            </div>
            <h2 className="text-2xl md:text-3xl font-black text-indigo-950 dark:text-white tracking-tight">Our Privacy Philosophy</h2>
          </div>
          <div className="bg-white dark:bg-slate-900 p-8 md:p-12 rounded-[2.5rem] border border-gray-100 dark:border-slate-800 shadow-xl">
            <p className="text-indigo-900 dark:text-indigo-300 font-bold text-lg mb-8 text-center uppercase tracking-widest">At Vocademy, we strongly believe that:</p>
            <div className="grid md:grid-cols-3 gap-8">
              <PhilosophyItem icon="fa-user-shield" title="Safe & Respectful" text="Learning should be safe and respectful" />
              <PhilosophyItem icon="fa-filter" title="Minimal Data" text="User data should be collected minimally" />
              <PhilosophyItem icon="fa-handshake" title="Long-term Trust" text="Transparency builds long-term trust" />
            </div>
            <p className="mt-10 text-gray-600 dark:text-gray-400 font-medium leading-relaxed bg-gray-50 dark:bg-slate-950/50 p-6 rounded-2xl border border-gray-100 dark:border-slate-800 text-center">
              We collect only what is necessary to provide a smooth, personalized, and effective learning experience. We do <b>not</b> collect data for unnecessary tracking, aggressive advertising, or resale.
            </p>
          </div>
        </section>

        {/* Information We Collect */}
        <section>
          <div className="flex items-center space-x-4 mb-8">
            <div className="w-12 h-12 bg-indigo-600 text-white rounded-xl flex items-center justify-center shadow-xl shadow-indigo-500/20">
              <i className="fas fa-database text-xl"></i>
            </div>
            <h2 className="text-2xl md:text-3xl font-black text-indigo-950 dark:text-white tracking-tight">Information We Collect</h2>
          </div>
          
          <p className="text-gray-600 dark:text-gray-400 mb-8 font-bold">We collect information in the following categories:</p>

          <div className="grid gap-8">
            <PrivacySectionCard 
              title="1. Personal Information"
              icon="fa-id-card"
              color="text-blue-500"
              items={[
                "Name or username",
                "Email address",
                "Profile details voluntarily provided by you",
                "Profile photo (only if you choose to upload one)"
              ]}
              extraTitle="Media & Camera Access"
              extra="To enable profile photo customization, the app may request permission to access your device's Camera and Photo Library/Media Storage. These permissions are used solely for the purpose of capturing or selecting a profile picture. We do not access, collect, or store any other media from your device."
              summary="This information helps us identify your account, provide support, and personalize your experience."
            />
            <PrivacySectionCard 
              title="2. Learning & Usage Information"
              icon="fa-brain"
              color="text-emerald-500"
              items={[
                "Vocabulary progress and revision history",
                "Test attempts, scores, and performance insights",
                "Time spent on features and learning modules",
                "App interaction patterns (non-intrusive)"
              ]}
              summary="This data is used strictly to enhance your learning journey."
            />
            <PrivacySectionCard 
              title="3. Device & Technical Information"
              icon="fa-microchip"
              color="text-purple-500"
              items={[
                "Device type and model",
                "Operating system version",
                "App version",
                "Crash logs and performance diagnostics",
                "Network connection status (online/offline/latency)"
              ]}
              extraTitle="Screen Orientation & Local Processing"
              extra="Screen Orientation: The app is designed and locked to Portrait Mode only to ensure a consistent and optimized learning interface across all devices."
              summary="This information helps us fix bugs, improve stability, notify you of connectivity issues, and ensure a smooth user experience. Data regarding network status is processed locally on your device."
            />
          </div>
        </section>

        {/* Use of Information */}
        <section>
          <div className="grid md:grid-cols-2 gap-8">
            <FeatureBlock 
              title="How We Use Your Information" 
              icon="fa-gears" 
              items={[
                "To provide and maintain core app functionality",
                "To personalize learning and revision experience",
                "To track learning progress and consistency",
                "To improve app performance, stability, and security",
                "To communicate important updates and support responses",
                "To comply with legal and regulatory requirements"
              ]}
              footer="Vocademy does not sell, rent, or trade your personal information to any third party."
            />
            <FeatureBlock 
              title="Editorial Learning & User Data" 
              icon="fa-feather-pointed" 
              desc="Vocademy focuses on structured editorial-based learning and daily revision. Any data related to editorial vocabulary practice, revision history, learning streaks, or gamified progress indicators is used only within the app to support your personal learning goals. This data is never used for advertising targeting and is never shared for marketing purposes."
            />
          </div>
        </section>

        {/* Gamification & Storage */}
        <div className="grid md:grid-cols-2 gap-8">
          <MiniCard 
            title="Gamification & Progress" 
            icon="fa-trophy" 
            text="Vocademy uses light gamification to encourage consistency, such as progress indicators, streaks, and milestones. All such data remains private to your account and is used solely to motivate and guide your learning journey."
          />
          <MiniCard 
            title="Data Storage & Security" 
            icon="fa-cloud-arrow-up" 
            text="We take reasonable and appropriate security measures to protect your data. Data is stored using secure cloud infrastructure with restricted access. While no digital system is completely immune to risks, we continuously improve our security measures."
          />
        </div>

        {/* Third-Party & AdMob */}
        <section>
          <div className="flex items-center space-x-4 mb-8">
            <div className="w-12 h-12 bg-amber-500 text-white rounded-xl flex items-center justify-center shadow-xl shadow-amber-500/20">
              <i className="fas fa-handshake-angle text-xl"></i>
            </div>
            <h2 className="text-2xl md:text-3xl font-black text-indigo-950 dark:text-white tracking-tight">Third-Party Services</h2>
          </div>
          <div className="bg-white dark:bg-slate-900 p-8 md:p-12 rounded-[2.5rem] border border-gray-100 dark:border-slate-800 shadow-xl space-y-10">
            <div>
              <p className="text-gray-600 dark:text-gray-400 font-medium text-base mb-6">
                Vocademy may use trusted third-party services for limited purposes such as analytics, crash reporting, payment processing, and display advertising.
              </p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {["App Analytics", "Crash Reporting", "Payment Processing", "Advertising"].map((item, i) => (
                  <div key={i} className="flex items-center space-x-3 p-4 bg-gray-50 dark:bg-slate-950 rounded-2xl border border-gray-100 dark:border-slate-800 font-bold text-xs text-indigo-600">
                    <i className="fas fa-check-circle"></i>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-8 bg-indigo-50/50 dark:bg-indigo-900/10 rounded-3xl border border-indigo-100 dark:border-indigo-800/50">
              <div className="flex items-center space-x-3 mb-4">
                <i className="fas fa-rectangle-ad text-indigo-600 text-xl"></i>
                <h4 className="text-lg font-black text-indigo-950 dark:text-white uppercase tracking-wider">Advertising (Google AdMob)</h4>
              </div>
              <div className="space-y-4 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                <p>Vocademy uses <b>Google AdMob</b> to display advertisements within the app. These advertisements help us keep the app free and cover operational costs (server, AI services, etc.).</p>
                <ul className="list-disc pl-5 space-y-2 font-medium">
                  <li><b>Personalized Advertising:</b> Google and its partners may use cookies or unique device identifiers to serve ads based on your visits to our app and other websites on the internet.</li>
                  <li><b>Opt-Out:</b> You can opt out of personalized advertising by visiting Google's Ad Settings or by using your device's privacy settings (e.g., "Limit Ad Tracking" on iOS or "Opt out of Interest-Based Ads" on Android).</li>
                  <li><b>Data Collection:</b> AdMob may collect and use certain data, such as device identifiers and location data, in accordance with [Google’s Privacy Policy](https://policies.google.com/privacy).</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Subscriptions & Payments */}
        <section>
          <div className="flex items-center space-x-4 mb-8">
            <div className="w-12 h-12 bg-emerald-600 text-white rounded-xl flex items-center justify-center shadow-xl shadow-emerald-500/20">
              <i className="fas fa-credit-card text-xl"></i>
            </div>
            <h2 className="text-2xl md:text-3xl font-black text-indigo-950 dark:text-white tracking-tight">Subscriptions and Payments</h2>
          </div>
          <div className="bg-white dark:bg-slate-900 p-8 md:p-12 rounded-[2.5rem] border border-gray-100 dark:border-slate-800 shadow-xl">
             <div className="grid md:grid-cols-2 gap-12">
               <div className="space-y-4">
                 <h4 className="text-lg font-black text-indigo-950 dark:text-white flex items-center">
                   <i className="fas fa-wallet text-indigo-600 mr-3"></i>
                   Billing Logic
                 </h4>
                 <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400 font-medium">
                   <li className="flex items-start space-x-2"><i className="fas fa-check mt-1 text-emerald-500"></i><span>Payments are processed securely via Google Play Store.</span></li>
                   <li className="flex items-start space-x-2"><i className="fas fa-check mt-1 text-emerald-500"></i><span>Vocademy does <b>not</b> store your credit card or bank details.</span></li>
                   <li className="flex items-start space-x-2"><i className="fas fa-check mt-1 text-emerald-500"></i><span>Subscriptions auto-renew unless canceled 24h before.</span></li>
                 </ul>
               </div>
               <div className="space-y-4">
                 <h4 className="text-lg font-black text-indigo-950 dark:text-white flex items-center">
                   <i className="fas fa-rotate-left text-orange-500 mr-3"></i>
                   Refund Policy
                 </h4>
                 <div className="p-5 bg-orange-50/50 dark:bg-orange-950/20 rounded-2xl border border-orange-100 dark:border-orange-900/40 text-sm text-gray-600 dark:text-gray-400 font-medium leading-relaxed">
                   In addition to Google Play's standard refund window, Vocademy offers an extended money-back guarantee: <b>3 days</b> for Monthly plans and <b>7 days</b> for Yearly plans. If you are not satisfied, please contact our support team with your Order ID within this period. In case of any policy contradiction, Google Play's official policy and terms will take precedence.
                 </div>
               </div>
             </div>
          </div>
        </section>

        {/* Email & Rights */}
        <div className="grid md:grid-cols-2 gap-8">
          <section className="bg-white dark:bg-slate-900 p-8 rounded-[2.5rem] border border-gray-100 dark:border-slate-800 shadow-xl">
            <h3 className="text-2xl font-black text-indigo-950 dark:text-white mb-6 flex items-center">
              <i className="fas fa-envelope-open-text text-indigo-600 mr-4"></i>
              Email Communication
            </h3>
            <p className="text-gray-600 dark:text-gray-400 font-medium leading-relaxed text-sm">
              When you contact Vocademy for support, feedback, or queries, we usually respond from our official support email addresses. All our official email addresses are listed in the Contact Us section below. Please treat emails from these addresses as valid only for Vocademy-related communication.
            </p>
          </section>

          <section className="bg-white dark:bg-slate-900 p-8 rounded-[2.5rem] border border-gray-100 dark:border-slate-800 shadow-xl">
            <h3 className="text-2xl font-black text-indigo-950 dark:text-white mb-6 flex items-center">
              <i className="fas fa-user-gear text-indigo-600 mr-4"></i>
              User Rights & Control
            </h3>
            <ul className="grid grid-cols-2 gap-3">
              {["Access & Update Data", "Correction of Inaccuracy", "Account Deletion", "Permission Control"].map((item, i) => (
                <li key={i} className="bg-gray-50 dark:bg-slate-950 p-3 rounded-xl border border-gray-100 dark:border-slate-800 text-[10px] font-black uppercase text-gray-500 dark:text-gray-400">
                  <i className="fas fa-circle-check text-indigo-500 mr-2"></i>{item}
                </li>
              ))}
            </ul>
          </section>
        </div>

        {/* Children & Retention */}
        <div className="grid md:grid-cols-2 gap-8">
          <section className="bg-white dark:bg-slate-900 p-8 rounded-[2.5rem] border border-gray-100 dark:border-slate-800 shadow-xl">
            <h3 className="text-xl font-black text-indigo-950 dark:text-white mb-4 flex items-center">
              <i className="fas fa-calendar-minus text-indigo-600 mr-3"></i>
              Data Retention
            </h3>
            <p className="text-gray-600 dark:text-gray-400 font-medium leading-relaxed text-sm">
              We retain user data only for as long as necessary to provide services, maintain learning history, and comply with legal obligations. When data is no longer required, it is securely deleted or anonymized where appropriate.
            </p>
          </section>
          <section className="bg-white dark:bg-slate-900 p-8 rounded-[2.5rem] border border-gray-100 dark:border-slate-800 shadow-xl">
            <h3 className="text-xl font-black text-indigo-950 dark:text-white mb-4 flex items-center">
              <i className="fas fa-child-reaching text-rose-500 mr-3"></i>
              Children’s Privacy
            </h3>
            <p className="text-gray-600 dark:text-gray-400 font-medium leading-relaxed text-sm">
              Vocademy is not knowingly intended for children under the age of 13. We do not knowingly collect personal information from children. If you believe that a child has provided personal data, please contact us immediately and we will take appropriate action.
            </p>
          </section>
        </div>

        {/* Legal & Changes - Professionalized Animation Section */}
        <section className="space-y-12">
          {/* Legal Compliance */}
          <div className="bg-indigo-50/50 dark:bg-indigo-950/20 p-10 rounded-[2.5rem] border border-indigo-100 dark:border-indigo-900/40 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-indigo-500/5 rounded-full blur-[80px] -mr-40 -mt-40 animate-pulse-aura"></div>
            <div className="grid md:grid-cols-3 gap-10 items-center relative z-10">
              <div className="md:col-span-2">
                <h3 className="text-2xl font-black text-indigo-950 dark:text-white mb-6 uppercase tracking-tight flex items-center">
                   <div className="w-1.5 h-6 bg-indigo-600 mr-4 rounded-full"></div>
                   Legal Compliance
                </h3>
                <p className="text-gray-600 dark:text-gray-400 font-medium text-base leading-relaxed">
                  Vocademy complies with applicable data protection and privacy laws. We may disclose information only when required to do so by law or to protect our legal rights and users’ safety.
                </p>
              </div>
              <div className="flex justify-center md:justify-end">
                <div className="w-24 h-24 bg-white dark:bg-slate-900 rounded-[2rem] flex items-center justify-center shadow-[0_20px_60px_-15px_rgba(79,70,229,0.2)] animate-float">
                  <i className="fas fa-scale-balanced text-indigo-600 text-5xl animate-pulse-soft"></i>
                </div>
              </div>
            </div>
          </div>

          {/* Changes to Policy */}
          <div className="bg-white dark:bg-slate-900 p-10 rounded-[2.5rem] border border-gray-100 dark:border-slate-800 shadow-xl group">
             <h3 className="text-2xl font-black text-indigo-950 dark:text-white mb-6 uppercase tracking-tight flex items-center">
                <div className="w-1.5 h-6 bg-emerald-500 mr-4 rounded-full"></div>
                Changes to This Privacy Policy
             </h3>
             <div className="space-y-6 text-gray-600 dark:text-gray-400 font-medium text-base leading-relaxed">
               <p>We may update this Privacy Policy from time to time to reflect:</p>
               <ul className="list-disc pl-5 space-y-3">
                 <li>Changes in features</li>
                 <li>Legal or regulatory requirements</li>
                 <li>Improvements in privacy practices</li>
               </ul>
               <p className="italic bg-gray-50 dark:bg-slate-950 p-4 rounded-xl border border-gray-100 dark:border-slate-800">
                 Any changes will be posted on this page with an updated effective date. Continued use of Vocademy after changes indicates acceptance of the updated policy.
               </p>
             </div>
          </div>
        </section>

        {/* Contact Us */}
        <section id="contact-us" className="pt-4">
          <div className="bg-gradient-to-br from-indigo-600 to-indigo-800 rounded-[3rem] p-8 md:p-16 text-white relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-white/10 rounded-full blur-[100px] -mr-32 -mt-32 animate-pulse-aura"></div>
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
              <div className="text-center md:text-left">
                <h3 className="text-3xl md:text-4xl font-black mb-4 tracking-tight">Contact Us</h3>
                <p className="text-indigo-100 font-bold text-base max-w-sm leading-relaxed">
                  If you have any questions, concerns, or requests regarding this Privacy Policy, please contact us at:
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-xl p-6 sm:p-8 rounded-[2rem] border border-white/20 w-full md:max-w-md space-y-4">
                <ContactLink icon="fa-globe" label="Official Website" value="vocademy.co.in" href="https://vocademy.co.in" />
                <ContactLink icon="fa-envelope" label="Primary Support" value="support@vocademy.co.in" href="mailto:support@vocademy.co.in" />
                <ContactLink icon="fa-paper-plane" label="Contact" value="contact@vocademy.co.in" href="mailto:contact@vocademy.co.in" />
                <ContactLink icon="fa-at" label="Gmail" value="vocademy.co.in@gmail.com" href="mailto:vocademy.co.in@gmail.com" />
              </div>
            </div>
          </div>
        </section>

        {/* Commitment Footer */}
        <div className="text-center py-10">
          <p className="text-[10px] font-black text-indigo-600 dark:text-indigo-400 uppercase tracking-[0.2em] mb-4">Our Commitment to You</p>
          <div className="bg-indigo-50 dark:bg-indigo-950/30 p-8 rounded-[2.5rem] border border-indigo-100 dark:border-indigo-900/40">
            <p className="text-indigo-700 dark:text-indigo-300 max-w-2xl mx-auto italic font-black text-lg md:text-xl leading-relaxed mb-4">
              "Vocademy is built with a deep respect for learners and their data. Transparency builds long-term trust."
            </p>
            <p className="text-indigo-950 dark:text-indigo-200 font-black text-lg">
              Your data exists only to support your learning — nothing more, nothing less.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const PhilosophyItem = ({ icon, title, text }: any) => (
  <div className="flex flex-col items-center text-center p-6 bg-gray-50 dark:bg-slate-950 rounded-3xl border border-gray-100 dark:border-slate-800 transition-all hover:scale-105 group">
    <div className="w-14 h-14 bg-white dark:bg-slate-900 rounded-2xl flex items-center justify-center mb-4 shadow-sm border border-gray-100 dark:border-slate-800 group-hover:rotate-6 transition-transform">
      <i className={`fas ${icon} text-indigo-600 text-2xl`}></i>
    </div>
    <h4 className="text-lg font-black text-indigo-950 dark:text-white mb-1">{title}</h4>
    <span className="text-xs font-medium text-gray-500 dark:text-gray-400 leading-relaxed">{text}</span>
  </div>
);

const PrivacySectionCard = ({ title, icon, color, items, extra, summary, extraTitle }: any) => (
  <div className="bg-white dark:bg-slate-900 p-8 md:p-10 rounded-[2.5rem] border border-gray-100 dark:border-slate-800 shadow-xl group hover:border-indigo-200 dark:hover:border-indigo-900/50 transition-all">
    <div className="flex items-center space-x-4 mb-6">
      <div className={`w-12 h-12 rounded-xl flex items-center justify-center bg-gray-50 dark:bg-slate-800/50 ${color} shadow-sm group-hover:scale-110 transition-transform`}>
        <i className={`fas ${icon} text-xl`}></i>
      </div>
      <h3 className="text-xl font-black text-indigo-950 dark:text-white tracking-tight">{title}</h3>
    </div>
    <ul className="space-y-3 mb-8">
      {items.map((item: string, i: number) => (
        <li key={i} className="flex items-start space-x-3 text-gray-600 dark:text-gray-400 font-bold text-sm">
          <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
          <span>{item}</span>
        </li>
      ))}
    </ul>
    {extra && (
      <div className="p-6 bg-gray-50 dark:bg-slate-950/50 rounded-2xl border border-gray-100 dark:border-slate-800 mb-6">
        <h5 className="text-xs font-black text-indigo-900 dark:text-indigo-400 uppercase mb-2">{extraTitle}</h5>
        <p className="text-xs text-gray-500 dark:text-gray-400 font-medium leading-relaxed italic">{extra}</p>
      </div>
    )}
    <p className="text-indigo-600 dark:text-indigo-400 font-black text-[10px] uppercase tracking-widest">{summary}</p>
  </div>
);

const FeatureBlock = ({ title, icon, items, desc, footer }: any) => (
  <div className="bg-white dark:bg-slate-900 p-8 rounded-[2.5rem] border border-gray-100 dark:border-slate-800 shadow-xl h-full flex flex-col">
    <div className="flex items-center space-x-3 mb-6">
      <i className={`fas ${icon} text-indigo-600 text-xl`}></i>
      <h3 className="text-xl font-black text-indigo-950 dark:text-white tracking-tight">{title}</h3>
    </div>
    {desc && <p className="text-gray-600 dark:text-gray-400 font-medium text-sm leading-relaxed mb-6">{desc}</p>}
    {items && (
      <ul className="space-y-3 mb-auto">
        {items.map((item: string, i: number) => (
          <li key={i} className="flex items-center space-x-3 text-gray-500 dark:text-gray-400 font-bold text-xs">
            <i className="fas fa-check-circle text-emerald-500 text-sm"></i>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    )}
    {footer && (
      <div className="mt-8 pt-6 border-t border-gray-50 dark:border-slate-800 text-xs font-black text-indigo-600 dark:text-indigo-400">
        {footer}
      </div>
    )}
  </div>
);

const MiniCard = ({ title, icon, text }: any) => (
  <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-gray-100 dark:border-slate-800 shadow-lg text-center">
    <div className="w-10 h-10 bg-indigo-50 dark:bg-indigo-950/30 text-indigo-600 dark:text-indigo-400 rounded-xl flex items-center justify-center mx-auto mb-4">
      <i className={`fas ${icon}`}></i>
    </div>
    <h4 className="text-sm font-black text-indigo-950 dark:text-white mb-2 uppercase tracking-widest">{title}</h4>
    <p className="text-xs text-gray-500 dark:text-gray-400 font-medium leading-relaxed">{text}</p>
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
