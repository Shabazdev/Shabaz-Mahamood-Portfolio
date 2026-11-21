import React from 'react';
import { motion } from 'motion/react';
import { Monitor, Database, Server, Shield, CreditCard, Code } from 'lucide-react';
import { SkillCategory } from '../types';

interface SkillsProps {
  skills: SkillCategory[];
}

export const Skills: React.FC<SkillsProps> = ({ skills }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Monitor': return <Monitor className="w-5 h-5 text-[#00ff66]" />;
      case 'Database': return <Database className="w-5 h-5 text-[#00ff66]" />;
      case 'Server': return <Server className="w-5 h-5 text-[#00ff66]" />;
      case 'Shield': return <Shield className="w-5 h-5 text-[#00ff66]" />;
      case 'CreditCard': return <CreditCard className="w-5 h-5 text-[#00ff66]" />;
      default: return <Code className="w-5 h-5 text-[#00ff66]" />;
    }
  };

  return (
    <section id="skills" className="py-28 bg-[#0b0b0b] relative overflow-hidden">
      {/* Background Atmospheric Green Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#00ff66]/10 rounded-full blur-[200px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-mono text-[#00ff66] mb-4 shadow-md">
            <span>Skills & Tech Stack</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white uppercase">
            MY TECH TOOLBOX
          </h2>
        </div>

        {/* Cards Layout: 2 in row 1, 3 in row 2 */}
        <div className="space-y-8">
          {/* Row 1: Frontend & Databases (2 larger cards) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {skills.slice(0, 2).map((category, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative p-8 rounded-3xl bg-gradient-to-b from-zinc-900/90 to-zinc-950/90 border border-zinc-800/90 hover:border-[#00ff66]/50 transition-all duration-300 shadow-xl flex flex-col justify-between overflow-hidden"
              >
                {/* Visual Graphic Representation inside card */}
                <div className="relative w-full h-36 rounded-2xl bg-zinc-950/80 border border-zinc-800 mb-6 flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#00ff66]/5 via-transparent to-transparent opacity-50" />
                  <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-700 flex items-center justify-center text-[#00ff66] shadow-lg z-10">
                    {getIcon(category.iconName)}
                  </div>
                  {/* Floating badge pill items */}
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-lg bg-zinc-900/90 border border-zinc-800 text-[10px] font-mono text-zinc-300">
                    {category.skills[0]?.name || 'Core'}
                  </div>
                  <div className="absolute top-3 right-3 px-2.5 py-1 rounded-lg bg-zinc-900/90 border border-zinc-800 text-[10px] font-mono text-zinc-300">
                    {category.skills[1]?.name || 'Advanced'}
                  </div>
                  <div className="absolute bottom-3 left-4 px-2.5 py-1 rounded-lg bg-zinc-900/90 border border-zinc-800 text-[10px] font-mono text-zinc-300">
                    {category.skills[2]?.name || 'Pro'}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-[#00ff66] transition-colors">
                    {category.title}
                  </h3>
                  <div className="text-zinc-400 text-xs sm:text-sm font-mono mb-3">
                    {category.skills.map(s => s.name).join(', ')}
                  </div>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    {category.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Row 2: Backend, Authentication, Payments (3 smaller cards) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skills.slice(2, 5).map((category, idx) => (
              <motion.div
                key={idx + 2}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (idx + 2) * 0.1 }}
                className="group relative p-6 rounded-3xl bg-gradient-to-b from-zinc-900/90 to-zinc-950/90 border border-zinc-800/90 hover:border-[#00ff66]/50 transition-all duration-300 shadow-xl flex flex-col justify-between overflow-hidden"
              >
                <div className="relative w-full h-28 rounded-2xl bg-zinc-950/80 border border-zinc-800 mb-6 flex items-center justify-center overflow-hidden">
                  <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-700 flex items-center justify-center text-[#00ff66] shadow-lg z-10">
                    {getIcon(category.iconName)}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#00ff66] transition-colors">
                    {category.title}
                  </h3>
                  <div className="text-zinc-400 text-xs font-mono mb-3">
                    {category.skills.map(s => s.name).join(', ')}
                  </div>
                  <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                    {category.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
