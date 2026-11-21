import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Code, Database, Globe, Cpu, Layers } from 'lucide-react';
import { DeveloperProfile } from '../types';

interface AboutProps {
  profile: DeveloperProfile;
  aboutText: string[];
}

export const About: React.FC<AboutProps> = ({ profile, aboutText }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <section id="about" className="py-28 bg-[#080909] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Text & Bio */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            {/* Badge */}
            <div className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-mono text-[#00ff66] mb-6 shadow-md">
              <span>About Me</span>
            </div>

            {/* Title */}
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-6 uppercase">
              Everything About <span className="text-[#00ff66]">{profile.name.toUpperCase()}</span>
            </h2>

            {/* Paragraphs with highlighted keywords */}
            <div className="space-y-4 text-zinc-300 text-sm sm:text-base leading-relaxed mb-8">
              <p>
                Hi, <strong className="text-white font-semibold">{profile.name}</strong>, a passionate <span className="text-[#00ff66] font-medium">Full Stack Developer</span> who loves crafting modern web applications that are both beautiful on the surface and powerful under the hood.
              </p>
              <p>
                With expertise in <span className="text-[#00ff66] font-medium">React, Next.js, Node.js, Express</span>, and <span className="text-[#00ff66] font-medium">PostgreSQL</span>, I bring intuitive design and efficient functionality. My experience with authentication systems, payment gateways, and cloud deployment makes me confident in delivering production-ready solutions for real-world clients.
              </p>
              <p>
                Whether it's a <span className="text-[#00ff66] font-medium">Startup MVP</span> or a scalable enterprise application, I focus on writing clean, maintainable code and creating experiences that users love.
              </p>

              {expanded && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-zinc-400 pt-2"
                >
                  I am constantly exploring new paradigms in software architecture, cloud scalability, and interactive UI design to ensure every product stands out in the market.
                </motion.p>
              )}
            </div>

            {/* More About Me Link */}
            <button
              onClick={() => setExpanded(!expanded)}
              className="group inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#00ff66] hover:text-[#00ff66]/80 transition-colors cursor-pointer"
            >
              <span>{expanded ? 'LESS ABOUT ME' : 'MORE ABOUT ME'}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>

          {/* Right Column: Futuristic Radar Tech Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 relative flex justify-center items-center"
          >
            <div className="relative w-full max-w-md aspect-square rounded-3xl bg-zinc-950/80 border border-zinc-800/80 p-8 flex items-center justify-center shadow-2xl overflow-hidden">
              {/* Concentric radar rings */}
              <div className="absolute w-72 h-72 rounded-full border border-zinc-800/80 flex items-center justify-center pointer-events-none" />
              <div className="absolute w-52 h-52 rounded-full border border-zinc-800/80 flex items-center justify-center pointer-events-none" />
              <div className="absolute w-32 h-32 rounded-full border border-[#00ff66]/20 flex items-center justify-center pointer-events-none" />

              {/* Glowing nodes */}
              <div className="relative w-full h-full flex items-center justify-center">
                <div className="absolute w-12 h-12 rounded-2xl bg-zinc-900 border border-[#00ff66]/40 flex items-center justify-center text-[#00ff66] shadow-lg shadow-[#00ff66]/10">
                  <Code className="w-6 h-6" />
                </div>

                <div className="absolute -top-4 right-12 w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-700 flex items-center justify-center text-cyan-400">
                  <Globe className="w-5 h-5" />
                </div>

                <div className="absolute bottom-10 right-4 w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-700 flex items-center justify-center text-purple-400">
                  <Cpu className="w-5 h-5" />
                </div>

                <div className="absolute bottom-8 left-6 w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-700 flex items-center justify-center text-emerald-400">
                  <Layers className="w-5 h-5" />
                </div>

                <div className="absolute top-12 left-8 w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-700 flex items-center justify-center text-amber-400">
                  <Database className="w-5 h-5" />
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
