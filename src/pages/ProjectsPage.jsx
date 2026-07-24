import React, { useState } from 'react';
import { MapPin, ArrowRight } from 'lucide-react';
import { projects } from '../data/projectsData';

export default function ProjectsPage({ onSelectProject, setCurrentPage }) {
  const [filter, setFilter] = useState('all');

  const categories = ['all', 'Painting', 'Tiling', 'Wooden Floors', 'Solar Installation', 'Building', 'Drywalling', 'Ceilings & Cornices', 'Carpentry', 'Plumbing', 'Electrical'];

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(p => p.category === filter);

  return (
    <div className="min-h-screen pt-20">

      {/* Header */}
      <section className="pt-24 pb-20 bg-[#1F1611] text-white relative overflow-hidden grain-overlay">
        <div className="glow-orb w-96 h-96 bg-[#B8651B] -top-40 right-0 opacity-30"></div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-xs font-semibold tracking-[0.2em] uppercase text-[#E8A04E] mb-4">— Project Portfolio</div>
          <h1 className="font-display font-light text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight max-w-3xl">
            Work we're <em className="italic font-medium text-[#E8A04E]">proud of</em>.
          </h1>
          <p className="mt-6 text-lg text-white/70 max-w-2xl">
            350+ projects completed across Centurion, Pretoria, and Midrand. Here are recent highlights spanning all 10 of our renovation and construction services.
          </p>
        </div>
      </section>

      {/* Filters & Grid */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`filter-btn capitalize ${filter === cat ? 'active' : ''}`}
              >
                {cat === 'all' ? 'All Projects' : cat}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((p) => (
              <div
                key={p.id}
                onClick={() => onSelectProject(p)}
                className="card card-hover cursor-pointer overflow-hidden group"
              >
                <div className="relative aspect-[4/3] img-zoom bg-[#1F1611]">
                  <img src={p.image} alt={p.title} loading="lazy" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#110A05]/90 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>

                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-white/95 text-[10px] tracking-[0.15em] uppercase font-semibold text-[#1F1611]">
                      {p.category}
                    </span>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="font-display text-xl font-semibold mb-1">{p.title}</h3>
                    <div className="text-xs text-white/70 flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[#E8A04E]" />
                      <span>{p.location} · {p.year}</span>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-sm text-[#7A6B5E] leading-relaxed">{p.blurb}</p>
                  <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-[#B8651B] group-hover:gap-3 transition-all">
                    <span>View project details</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-20 text-[#7A6B5E]">
              <p className="text-lg mb-4">No projects in this category yet.</p>
              <button onClick={() => setFilter('all')} className="btn-outline">View All Projects</button>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#F2E8DA]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-display font-light text-3xl md:text-4xl lg:text-5xl leading-tight text-[#1F1611] mb-6">
            Have a project in mind?
          </h2>
          <p className="text-[#7A6B5E] text-lg mb-8 max-w-xl mx-auto">
            We're booking new projects across Centurion and Pretoria. Get a free no-obligation quote within 48 hours.
          </p>
          <button onClick={() => setCurrentPage('contact')} className="btn-primary">
            Request a Free Quote
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

    </div>
  );
}
