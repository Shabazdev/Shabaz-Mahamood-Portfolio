import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Project } from '../types';
import { ProjectModal } from './ProjectModal';

interface ProjectsProps {
  projects: Project[];
}

export const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [showAll, setShowAll] = useState(false);

  const displayedProjects = showAll ? projects : projects.slice(0, 4);

  return (
    <section id="projects" className="py-28 bg-[#080909] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-mono text-[#00ff66] mb-4 shadow-md">
            <span>Featured Projects</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white uppercase">
            DESIGN BRANDS THAT <span className="text-[#00ff66]">SPEAK TO AUDIENCES</span>
          </h2>
        </div>

        {/* Projects Grid (2 columns) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {displayedProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              onClick={() => setSelectedProject(project)}
              className="group relative rounded-3xl bg-zinc-950 border border-zinc-800 hover:border-[#00ff66]/50 overflow-hidden shadow-2xl cursor-pointer transition-all duration-500 flex flex-col justify-between"
            >
              {/* Image Container with Zoom effect */}
              <div className="relative w-full aspect-[16/10] overflow-hidden bg-zinc-900">
                {project.image && (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out filter saturate-[0.95]"
                  />
                )}
              </div>

              {/* Content matching screenshot */}
              <div className="p-8 flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-[#00ff66] transition-colors mb-1">
                    {project.title}
                  </h3>
                  <p className="text-zinc-400 text-xs font-mono">
                    {project.description}
                  </p>
                </div>
                <div className="w-12 h-12 rounded-full border border-zinc-800 flex items-center justify-center text-zinc-300 group-hover:bg-[#00ff66] group-hover:text-zinc-950 group-hover:border-[#00ff66] transition-all duration-300 shrink-0">
                  <ArrowRight className="w-5 h-5" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Load More Button */}
        {!showAll && (
          <div className="flex justify-center mt-16">
            <button
              onClick={() => setShowAll(true)}
              className="group px-8 py-3.5 rounded-full bg-zinc-900 border border-zinc-700 text-[#00ff66] hover:bg-zinc-800 font-mono text-xs uppercase tracking-widest transition-all shadow-xl flex items-center gap-2 cursor-pointer"
            >
              <span>LOAD MORE</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        )}

      </div>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
};
