import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles, Settings, ArrowRight } from 'lucide-react';
import { DeveloperProfile } from '../types';

interface NavbarProps {
  profile: DeveloperProfile;
  onOpenAdmin: () => void;
  onNavigate: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ profile, onOpenAdmin, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'Projects', id: 'projects' },
    { name: 'About Me', id: 'about' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#080909]/90 backdrop-blur-md border-b border-zinc-800/80 py-4 shadow-2xl'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo matching screenshot ("M") */}
        <button
          onClick={() => onNavigate('home')}
          className="w-10 h-10 rounded-xl bg-gradient-to-br from-zinc-800 to-zinc-900 border border-zinc-700/80 flex items-center justify-center text-white font-bold text-lg shadow-lg hover:border-[#00ff66]/50 transition-all cursor-pointer font-serif"
        >
          {profile.name.charAt(0)}
        </button>

        {/* Centered Navigation Links */}
        <nav className="hidden md:flex items-center gap-2 bg-zinc-950/80 border border-zinc-800/80 px-6 py-2 rounded-full backdrop-blur-md shadow-inner">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => onNavigate(link.id)}
              className="px-4 py-1.5 text-xs font-medium text-zinc-300 hover:text-white transition-all cursor-pointer"
            >
              {link.name}
            </button>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={onOpenAdmin}
            title="Customize Portfolio Data"
            className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-zinc-900 border border-zinc-700/60 text-zinc-300 hover:text-[#00ff66] text-xs font-mono transition-all cursor-pointer"
          >
            <Settings className="w-3.5 h-3.5" />
            <span>Customize</span>
          </button>

          <button
            onClick={() => onNavigate('contact')}
            className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-purple-600 via-violet-600 to-pink-600 text-white text-xs font-medium shadow-lg hover:scale-[1.02] transition-all cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5 text-purple-200" />
            <span>Let's Talk</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={onOpenAdmin}
            className="p-2 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300"
            aria-label="Customize"
          >
            <Settings className="w-5 h-5" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-[#080909]/95 border-b border-zinc-800 backdrop-blur-xl px-6 py-6 flex flex-col gap-4 shadow-2xl md:hidden">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => {
                onNavigate(link.id);
                setMobileMenuOpen(false);
              }}
              className="text-left text-base font-medium text-zinc-200 hover:text-[#00ff66] py-2 border-b border-zinc-800/50"
            >
              {link.name}
            </button>
          ))}
          <button
            onClick={() => {
              onNavigate('contact');
              setMobileMenuOpen(false);
            }}
            className="w-full mt-2 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium flex items-center justify-center gap-2"
          >
            <span>Let's Talk</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </header>
  );
};
