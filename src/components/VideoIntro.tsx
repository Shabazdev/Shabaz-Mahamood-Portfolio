import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Play, Video } from 'lucide-react';
import { VideoModal } from './VideoModal';

interface VideoIntroProps {
  videoUrl: string;
}

export const VideoIntro: React.FC<VideoIntroProps> = ({ videoUrl }) => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section className="py-28 bg-[#0b0b0b] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-mono text-[#00ff66] mb-4 shadow-md">
            <span>Video Explanation Section</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white uppercase mb-4">
            MEET ME IN 2 MINUTES
          </h2>
          <p className="text-zinc-400 text-sm leading-relaxed">
            Sometimes text isn't enough. Here's a quick video where I introduce myself, share my journey as a <span className="text-[#00ff66]">developer</span>, and explain how I help clients turn ideas into reality.
          </p>
        </div>

        {/* Large Video Thumbnail Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          onClick={() => setModalOpen(true)}
          className="relative max-w-4xl mx-auto aspect-[16/9] rounded-3xl overflow-hidden bg-zinc-900 border border-zinc-800 shadow-2xl cursor-pointer group"
        >
          <img
            src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1400"
            alt="Video introduction"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter saturate-[0.8]"
          />
          <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center gap-4">
            <div className="w-16 h-16 rounded-full bg-zinc-900/90 border border-zinc-700 flex items-center justify-center text-white pl-1 shadow-2xl group-hover:scale-110 transition-transform">
              <Play className="w-7 h-7 fill-white text-white" />
            </div>
            <span className="text-white font-bold text-xl tracking-tight">Play Video</span>
          </div>
        </motion.div>

      </div>

      <VideoModal
        videoUrl={videoUrl}
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </section>
  );
};
