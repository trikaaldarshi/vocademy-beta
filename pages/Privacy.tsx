
import React from 'react';

export const Privacy: React.FC = () => {
  return (
    <div className="pt-32 pb-24 px-4 max-w-4xl mx-auto animate-fade-in text-gray-700 dark:text-gray-300">
      <h1 className="text-4xl font-black text-indigo-950 dark:text-white mb-8">Privacy Policy</h1>
      <div className="prose prose-indigo dark:prose-invert max-w-none space-y-6 text-lg leading-relaxed">
        <p>Last updated: October 2024</p>
        <p>At Vocademy, we take your privacy seriously. This policy describes how we collect and use your data during the Beta testing phase.</p>
        
        <h2 className="text-2xl font-bold text-indigo-900 dark:text-indigo-400 mt-8">1. Information We Collect</h2>
        <p>When you apply for the Beta via our Google Form, we collect your name, email address, target exam, and social handles (WhatsApp/Telegram). We use this strictly for communication regarding the app access.</p>

        <h2 className="text-2xl font-bold text-indigo-900 dark:text-indigo-400 mt-8">2. How We Use Data</h2>
        <p>Your learning progress (words learned, quiz scores) is used to optimize the Spaced Repetition System. We do not sell your personal data to third parties.</p>

        <h2 className="text-2xl font-bold text-indigo-900 dark:text-indigo-400 mt-8">3. AI Integration</h2>
        <p>Our app utilizes Google's Gemini API for word analysis. Your specific queries may be processed by AI models to provide definitions and context, but no personally identifiable information is sent to these models.</p>

        <h2 className="text-2xl font-bold text-indigo-900 dark:text-indigo-400 mt-8">4. Contact Us</h2>
        <p>For any privacy-related queries, reach out to us at support@vocademy.app or via our Telegram channel.</p>
      </div>
    </div>
  );
};
