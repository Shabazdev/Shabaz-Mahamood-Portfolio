import React from 'react';
import { Mail, Github, Linkedin, Twitter, Dribbble } from 'lucide-react';
import { DeveloperProfile } from '../types';

interface FooterProps {
  profile: DeveloperProfile;
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ profile, onNavigate }) => {
  return (
    <footer className="bg-[#080909] border-t border-zinc-800/80 pt-20 pb-12 text-zinc-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Footer Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-zinc-800/80 items-center">
          
          {/* Left: Logo & Nav */}
          <div className="lg:col-span-6 space-y-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-zinc-800 to-zinc-900 border border-zinc-700 flex items-center justify-center text-white font-bold text-lg shadow-lg font-serif">
                {profile.name.charAt(0)}
              </div>
            </div>

            <div className="flex items-center gap-8 text-sm font-medium text-zinc-300">
              <button onClick={() => onNavigate('projects')} className="hover:text-white transition-colors cursor-pointer">
                Projects
              </button>
              <button onClick={() => onNavigate('about')} className="hover:text-white transition-colors cursor-pointer">
                About Me
              </button>
              <button onClick={() => onNavigate('contact')} className="hover:text-white transition-colors cursor-pointer">
                Contact
              </button>
            </div>

            <div className="flex items-center gap-2 text-sm text-zinc-400 font-mono">
              <Mail className="w-4 h-4 text-[#00ff66]" />
              <span>{profile.email}</span>
            </div>
          </div>

          {/* Right: Big Headline matching screenshot */}
          <div className="lg:col-span-6 text-left lg:text-right">
            <h3 className="text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight font-serif italic">
              Is there a fascinating project brewing in your mind?
            </h3>
          </div>

        </div>

        {/* Bottom Footer Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs font-mono text-zinc-500">
          <div className="flex items-center gap-4">
            <a href={profile.socials.github} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              <Github className="w-4 h-4" />
            </a>
            <a href={profile.socials.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href={profile.socials.twitter} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              <Twitter className="w-4 h-4" />
            </a>
            <a href={profile.socials.dribbble} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              <Dribbble className="w-4 h-4" />
            </a>
          </div>

          <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>

          <p className="text-zinc-600">Designed by Zehni</p>
        </div>

      </div>
    </footer>
  );
};
