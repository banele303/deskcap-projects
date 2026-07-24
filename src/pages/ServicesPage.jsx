import React, { useState } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { services } from '../data/servicesData';

const CATEGORIES = ['All', 'Interior', 'Exterior', 'Structure', 'Energy'];
const SERVICE_CATS = {
  painting: 'Interior',
  tiling: 'Interior',
  'wooden-floors': 'Interior',
  'ceilings-cornices': 'Interior',
  drywalling: 'Structure',
  carpentry: 'Interior',
  plumbing: 'Interior',
  electrical: 'Energy',
  building: 'Structure',
  'solar-installation': 'Energy'
};

export default function ServicesPage({ setCurrentPage }) {
  const [activeFilter, setActiveFilter] = useState('All');

  const filtered = activeFilter === 'All'
    ? services
    : services.filter(s => SERVICE_CATS[s.id] === activeFilter);

  return (
    <div className="min-h-screen pt-20">

      {/* Header */}
      <section className="pt-24 pb-20 bg-[#1F1611] text-white relative overflow-hidden grain-overlay">
        <div className="glow-orb w-96 h-96 bg-[#B8651B] -top-40 right-0 opacity-30"></div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-xs font-semibold tracking-[0.2em] uppercase text-[#E8A04E] mb-4">— Our Services</div>
          <h1 className="font-display font-light text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight max-w-4xl">
            10 trades. <em className="italic font-medium text-[#E8A04E]">One team.</em>
          </h1>
          <p className="mt-6 text-lg text-white/70 max-w-2xl">
            Painting, tiling, wooden floors, ceilings, drywalling, carpentry, plumbing, electrical, building, and solar installation — every trade you need for a complete renovation or new build.
          </p>
        </div>
      </section>

      {/* Filter */}
      <section className="border-b border-[#E8DDD0] bg-white sticky top-20 z-30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4 flex gap-3 flex-wrap">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`filter-btn ${activeFilter === cat ? 'active' : ''}`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-24">
          {filtered.map((s, idx) => (
            <div
              key={s.id}
              className={`grid lg:grid-cols-2 gap-12 items-center ${idx % 2 === 1 ? '' : ''}`}
            >
              <div className={idx % 2 === 1 ? 'lg:order-2' : 'lg:order-1'}>
                <div className="text-xs font-semibold tracking-[0.2em] uppercase text-[#B8651B] mb-4">
                  — {String(services.indexOf(s) + 1).padStart(2,'0')} / {s.title}
                </div>
                <h2 className="font-display text-3xl md:text-4xl font-semibold mb-5 text-[#1F1611]">
                  {s.title}
                </h2>
                <p className="text-[#7A6B5E] leading-relaxed mb-6">{s.details}</p>
                <ul className="space-y-3 mb-8 list-none p-0">
                  {s.bullets.map((b, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-3 text-[#1F1611] text-sm">
                      <CheckCircle2 className="w-5 h-5 text-[#B8651B] flex-shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex gap-4 flex-wrap">
                  <button
                    onClick={() => setCurrentPage(s.slug)}
                    className="btn-primary"
                  >
                    <span>Full {s.title} Details</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setCurrentPage('contact')}
                    className="btn-outline text-sm"
                  >
                    Get Quote
                  </button>
                </div>
              </div>

              <div className={idx % 2 === 1 ? 'lg:order-1' : 'lg:order-2'}>
                <div
                  className="rounded-2xl overflow-hidden aspect-[4/3] shadow-2xl img-zoom bg-[#1F1611] cursor-pointer"
                  onClick={() => setCurrentPage(s.slug)}
                >
                  <img src={s.image} alt={s.title} className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Consultation Banner */}
      <section className="py-20 bg-[#F2E8DA]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-display font-light text-3xl md:text-4xl lg:text-5xl leading-tight text-[#1F1611] mb-6">
            Not sure which service you need?
          </h2>
          <p className="text-[#7A6B5E] text-lg mb-8 max-w-xl mx-auto">
            Book a free site visit. We'll walk through your property, assess what's needed, and recommend the right approach — with no obligation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button onClick={() => setCurrentPage('contact')} className="btn-primary">
              Book a Free Site Visit
              <ArrowRight className="w-4 h-4" />
            </button>
            <button onClick={() => setCurrentPage('faq')} className="btn-outline">
              Read FAQ
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
