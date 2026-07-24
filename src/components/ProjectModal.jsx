import React from 'react';
import { X, MapPin, ArrowRight } from 'lucide-react';

export default function ProjectModal({ project, onClose, onRequestQuote }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 bg-[#110A05]/85 backdrop-blur-md z-[70] flex items-center justify-center p-4 animate-in fade-in duration-300">
      <div className="bg-[#FAF6F0] rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative border border-[#E8DDD0] animate-in zoom-in-95 duration-300">
        
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/90 hover:bg-white flex items-center justify-center shadow-lg border-none cursor-pointer text-[#1F1611] transition-transform hover:scale-105"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Hero image */}
        <div className="relative aspect-[16/9] overflow-hidden bg-[#1F1611]">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#FAF6F0] via-transparent to-transparent opacity-90"></div>
        </div>

        {/* Details */}
        <div className="p-8 lg:p-10 -mt-12 relative z-10">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="px-3 py-1 rounded-full bg-[#B8651B]/15 text-[10px] tracking-[0.15em] uppercase font-semibold text-[#B8651B]">
              {project.category}
            </span>
            <span className="text-xs text-[#7A6B5E] flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5" />
              {project.location}
            </span>
            <span className="text-xs text-[#7A6B5E]">·</span>
            <span className="text-xs text-[#7A6B5E]">Completed {project.year}</span>
          </div>

          <h2 className="font-display text-3xl md:text-4xl font-semibold mb-5 text-[#1F1611] leading-tight">
            {project.title}
          </h2>

          <p className="text-[#3D2F25] leading-relaxed text-lg mb-8">
            {project.description}
          </p>

          {/* Specs grid */}
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {project.specs?.map((s, idx) => (
              <div key={idx} className="p-4 bg-[#F2E8DA] rounded-xl border border-[#E8DDD0]">
                <div className="text-[10px] tracking-[0.15em] uppercase text-[#7A6B5E] mb-1">
                  {s.label}
                </div>
                <div className="font-display font-semibold text-[#1F1611]">
                  {s.value}
                </div>
              </div>
            ))}
          </div>

          {/* Actions */}
          <div className="flex flex-wrap gap-3 pt-4 border-t border-[#E8DDD0]">
            <button
              onClick={() => {
                onClose();
                onRequestQuote();
              }}
              className="btn-primary"
            >
              Start a Similar Project
              <ArrowRight className="w-4 h-4" />
            </button>
            <button onClick={onClose} className="btn-outline">
              Close Preview
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
