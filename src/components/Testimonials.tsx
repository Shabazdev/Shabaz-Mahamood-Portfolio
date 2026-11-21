import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Testimonial } from '../types';

interface TestimonialsProps {
  testimonials: Testimonial[];
}

export const Testimonials: React.FC<TestimonialsProps> = ({ testimonials }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  if (!testimonials.length) return null;
  const current = testimonials[currentIndex];

  return (
    <section id="testimonials" className="py-28 bg-[#080909] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-mono text-[#00ff66] mb-4 shadow-md">
            <span>Testimonials</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white uppercase">
            WHAT CLIENTS SAY
          </h2>
        </div>

        {/* Testimonial Card with Prev/Next Controls */}
        <div className="max-w-4xl mx-auto relative flex items-center">
          
          {/* Previous Button */}
          <button
            onClick={handlePrev}
            className="absolute -left-6 sm:-left-10 z-20 p-3 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white shadow-xl transition-all cursor-pointer"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Card */}
          <div className="w-full p-8 sm:p-12 rounded-3xl bg-zinc-950 border border-zinc-800/90 shadow-2xl relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col md:flex-row gap-8 items-center"
              >
                {/* Client Avatar */}
                <div className="shrink-0">
                  <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl overflow-hidden border border-zinc-800 shadow-xl">
                    {current.avatar && (
                      <img
                        src={current.avatar}
                        alt={current.name}
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>
                </div>

                {/* Content with Quote symbol */}
                <div className="flex-1 text-left relative">
                  <Quote className="w-10 h-10 text-zinc-700/40 mb-4" />
                  <p className="text-zinc-200 text-base sm:text-lg leading-relaxed mb-6 font-serif italic">
                    “{current.content}”
                  </p>
                  <div>
                    <h3 className="text-white font-bold text-base">{current.name}</h3>
                    <p className="text-xs font-mono text-zinc-500">{current.role} / {current.company}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Next Button */}
          <button
            onClick={handleNext}
            className="absolute -right-6 sm:-right-10 z-20 p-3 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white shadow-xl transition-all cursor-pointer"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

        </div>

      </div>
    </section>
  );
};
