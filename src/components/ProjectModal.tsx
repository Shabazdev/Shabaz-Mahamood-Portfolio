import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ExternalLink, Github, CheckCircle2, Calendar, Tag } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/80 backdrop-blur-xl overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-4xl bg-zinc-950 border border-zinc-800 rounded-3xl overflow-hidden shadow-2xl my-auto"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-zinc-900/90 border border-zinc-700 text-zinc-300 hover:text-white hover:bg-zinc-800 transition-all cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Modal Image Banner */}
          <div className="relative w-full h-64 sm:h-80 md:h-96 overflow-hidden bg-zinc-900">
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent z-10" />
            {project.image && (
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            )}
            <div className="absolute bottom-6 left-6 right-6 z-20">
              <span className="inline-block px-3 py-1 rounded-full bg-[#00ff66]/20 border border-[#00ff66]/40 text-[#00ff66] text-xs font-mono mb-3">
                {project.category}
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
                {project.title}
              </h2>
            </div>
          </div>

          {/* Modal Content */}
          <div className="p-6 sm:p-8 space-y-6">
            <div>
              <h3 className="text-lg font-bold text-white mb-2">Overview</h3>
              <p className="text-zinc-300 text-base leading-relaxed">
                {project.longDescription || project.description}
              </p>
            </div>

            {/* Tags */}
            <div>
              <h3 className="text-sm font-mono text-zinc-400 uppercase tracking-widest mb-3 flex items-center gap-2">
                <Tag className="w-4 h-4 text-[#00ff66]" />
                <span>Technologies Used</span>
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-200 text-sm font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-zinc-800">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 via-violet-600 to-pink-600 text-white font-medium text-sm flex items-center gap-2 shadow-lg hover:scale-[1.02] transition-all"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>View Live Preview</span>
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-xl bg-zinc-900 border border-zinc-700 text-zinc-200 hover:text-white hover:bg-zinc-800 font-medium text-sm flex items-center gap-2 transition-all"
                >
                  <Github className="w-4 h-4" />
                  <span>Source Code</span>
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
