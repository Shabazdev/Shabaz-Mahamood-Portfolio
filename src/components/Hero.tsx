import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Github, Twitter, Dribbble, Star } from 'lucide-react';
import { DeveloperProfile } from '../types';

interface HeroProps {
  profile: DeveloperProfile;
  onNavigate: (sectionId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ profile, onNavigate }) => {
  const techStackAvatars = [
    "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=100",
    "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=100",
    "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&q=80&w=100",
  ];

  return (
    <section id="home" className="relative min-h-screen pt-32 pb-20 overflow-hidden flex items-center bg-[#080909]">
      {/* Atmospheric Green & Purple Glowing Background Accents */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00ff66]/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-purple-600/15 rounded-full blur-[180px] pointer-events-none" />

      {/* Vertical scroll indicator & social icon rail (Far left) */}
      <div className="hidden xl:flex flex-col items-center gap-6 absolute left-6 top-1/3 z-30">
        <div className="w-[1px] h-16 bg-zinc-700" />
        <a href={profile.socials.github} target="_blank" rel="noopener noreferrer" className="p-2 text-zinc-400 hover:text-[#00ff66] transition-colors">
          <Github className="w-4 h-4" />
        </a>
        <a href={profile.socials.twitter} target="_blank" rel="noopener noreferrer" className="p-2 text-zinc-400 hover:text-[#00ff66] transition-colors">
          <Twitter className="w-4 h-4" />
        </a>
        <a href={profile.socials.dribbble} target="_blank" rel="noopener noreferrer" className="p-2 text-zinc-400 hover:text-[#00ff66] transition-colors">
          <Dribbble className="w-4 h-4" />
        </a>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headline, Stack, Stats, Bio Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            {/* Headline with Italic Serif on Sketch & Imagine */}
            <h1 className="text-4xl sm:text-6xl lg:text-[64px] font-bold tracking-tight text-white mb-6 leading-[1.1]">
              From <span className="font-serif italic font-normal text-zinc-200">Sketch</span> to Scale – I Build the Web You <span className="font-serif italic font-normal text-zinc-200">Imagine</span>
            </h1>

            {/* Tech Stack Avatars & Success Rate */}
            <div className="flex items-center gap-3 mb-8">
              <div className="flex -space-x-2">
                {techStackAvatars.map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt="User"
                    className="w-8 h-8 rounded-full border border-zinc-800 object-cover"
                  />
                ))}
              </div>
              <div className="flex items-center gap-1.5 text-xs text-zinc-300 font-medium">
                <div className="flex text-amber-400">
                  <Star className="w-3.5 h-3.5 fill-amber-400" />
                </div>
                <span>100% Success Rate</span>
              </div>
            </div>

            {/* Experience Statistics */}
            <div className="flex items-center gap-12 mb-10">
              <div>
                <div className="text-3xl sm:text-4xl font-bold text-white tracking-tight">10+</div>
                <div className="text-xs text-zinc-400 font-mono mt-1">Projects Completed</div>
              </div>
              <div className="w-[1px] h-10 bg-zinc-800" />
              <div>
                <div className="text-3xl sm:text-4xl font-bold text-white tracking-tight">3+</div>
                <div className="text-xs text-zinc-400 font-mono mt-1">Years Of Experience</div>
              </div>
            </div>

            {/* Floating Introduction Card */}
            <div className="w-full max-w-lg p-5 rounded-2xl bg-zinc-900/80 border border-zinc-800/90 backdrop-blur-xl shadow-2xl flex flex-col sm:flex-row items-center gap-5">
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed flex-1">
                {profile.bio}
              </p>
              <button
                onClick={() => onNavigate('projects')}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 via-violet-600 to-pink-600 text-white font-medium text-xs shadow-lg hover:scale-[1.02] transition-all flex items-center justify-center gap-1.5 shrink-0 cursor-pointer"
              >
                <span>View Projects</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </motion.div>

          {/* Right Column: Developer Portrait with Green Glow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative flex justify-center items-center"
          >
            {/* Glowing Backdrop */}
            <div className="absolute w-[380px] h-[380px] sm:w-[460px] sm:h-[460px] rounded-full bg-gradient-to-tr from-[#00ff66]/20 via-purple-600/20 to-transparent blur-3xl -z-10" />

            {/* Portrait Frame */}
            <div className="relative w-full max-w-md aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border border-zinc-800/80 bg-zinc-950">
              <div className="absolute inset-0 bg-gradient-to-t from-[#080909] via-transparent to-transparent z-10 opacity-40" />
              {profile.avatarUrl && (
                <img
                  src={profile.avatarUrl}
                  alt={profile.name}
                  className="w-full h-full object-cover filter saturate-[0.9] contrast-[1.05]"
                />
              )}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
