import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';
import { DeveloperProfile } from '../types';

interface ContactProps {
  profile: DeveloperProfile;
}

export const Contact: React.FC<ContactProps> = ({ profile }) => {
  const [submitted, setSubmitted] = useState(false);
  const [emailInput, setEmailInput] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailInput) return;
    setSubmitted(true);
    setTimeout(() => {
      setEmailInput('');
    }, 3000);
  };

  return (
    <section id="contact" className="py-28 bg-[#0b0b0b] relative overflow-hidden text-center">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[200px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <h2 className="text-4xl sm:text-6xl font-bold tracking-tight text-white">
            Let's Build <span className="font-serif italic font-normal text-zinc-300">Something Amazing</span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Have a project, idea, or collaboration in mind? I'd love to hear from you. Let's create something impactful together.
          </p>

          {submitted ? (
            <div className="py-6 flex items-center justify-center gap-2 text-[#00ff66] font-mono text-sm">
              <CheckCircle2 className="w-5 h-5" />
              <span>Thank you! We will get in touch shortly.</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
              <input
                type="email"
                required
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
                placeholder="Enter your email..."
                className="w-full px-5 py-3 rounded-xl bg-zinc-900 border border-zinc-800 text-white placeholder-zinc-500 focus:outline-none focus:border-[#00ff66] text-sm"
              />
              <button
                type="submit"
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 via-violet-600 to-pink-600 text-white font-medium text-sm shadow-lg hover:scale-105 transition-all flex items-center justify-center gap-2 shrink-0 cursor-pointer"
              >
                <span>Get in Touch</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          )}
        </motion.div>

      </div>
    </section>
  );
};
