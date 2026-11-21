/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { initialPortfolioData } from './data/initialData';
import { PortfolioData } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Marquee } from './components/Marquee';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { VideoIntro } from './components/VideoIntro';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { AdminModal } from './components/AdminModal';

export default function App() {
  const [portfolioData, setPortfolioData] = useState<PortfolioData>(() => {
    const saved = localStorage.getItem('alex_portfolio_data');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error('Failed to parse saved portfolio data', e);
      }
    }
    return initialPortfolioData;
  });

  const [adminOpen, setAdminOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem('alex_portfolio_data', JSON.stringify(portfolioData));
  }, [portfolioData]);

  const handleNavigate = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleResetData = () => {
    setPortfolioData(initialPortfolioData);
    localStorage.removeItem('alex_portfolio_data');
  };

  return (
    <div className="min-h-screen bg-[#080909] text-zinc-100 font-sans selection:bg-[#00ff66] selection:text-zinc-950">
      {/* Navigation */}
      <Navbar
        profile={portfolioData.profile}
        onOpenAdmin={() => setAdminOpen(true)}
        onNavigate={handleNavigate}
      />

      {/* Hero Section */}
      <Hero
        profile={portfolioData.profile}
        onNavigate={handleNavigate}
      />

      {/* Technology Marquee */}
      <Marquee />

      {/* About Me Section */}
      <About
        profile={portfolioData.profile}
        aboutText={portfolioData.aboutText}
      />

      {/* Skills & Tech Stack Section */}
      <Skills
        skills={portfolioData.skills}
      />

      {/* Featured Projects Section */}
      <Projects
        projects={portfolioData.projects}
      />

      {/* Video Introduction Section */}
      <VideoIntro
        videoUrl={portfolioData.profile.videoUrl}
      />

      {/* Testimonials Section */}
      <Testimonials
        testimonials={portfolioData.testimonials}
      />

      {/* Contact & CTA Section */}
      <Contact
        profile={portfolioData.profile}
      />

      {/* Footer */}
      <Footer
        profile={portfolioData.profile}
        onNavigate={handleNavigate}
      />

      {/* Customizer / Admin Modal */}
      <AdminModal
        isOpen={adminOpen}
        onClose={() => setAdminOpen(false)}
        data={portfolioData}
        onSave={(newData) => setPortfolioData(newData)}
        onReset={handleResetData}
      />
    </div>
  );
}
