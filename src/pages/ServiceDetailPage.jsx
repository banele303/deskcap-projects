import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, ChevronRight, Clock, Star, ArrowLeft, X, ZoomIn } from 'lucide-react';

export default function ServiceDetailPage({ service, setCurrentPage }) {
  const [activeImg, setActiveImg] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState(null);

  if (!service) return null;

  // Deduplicate images if any
  const galleryList = Array.from(new Set([service.image, ...(service.gallery || [])]));

  return (
    <div className="min-h-screen pt-20">

      {/* Hero Header */}
      <section className="pt-24 pb-20 bg-[#1F1611] text-white relative overflow-hidden grain-overlay">
        <div className="glow-orb w-96 h-96 bg-[#B8651B] -top-40 right-0 opacity-30"></div>
        <div className="glow-orb w-64 h-64 bg-[#E8A04E] bottom-0 left-1/4 opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          {/* Breadcrumb */}
          <button
            onClick={() => setCurrentPage('services')}
            className="inline-flex items-center gap-2 text-white/50 hover:text-white text-sm mb-8 transition-colors bg-transparent border-none cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            All Services
          </button>

          <div className="grid lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-7">
              <div className="text-xs font-semibold tracking-[0.2em] uppercase text-[#E8A04E] mb-4">— {service.title}</div>
              <h1 className="font-display font-light text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight">
                {service.title}
              </h1>
              <p className="mt-6 text-lg text-white/75 max-w-xl leading-relaxed">
                {service.details}
              </p>
              <div className="mt-8 flex items-center gap-3 flex-wrap">
                <button
                  onClick={() => setCurrentPage('contact')}
                  className="btn-primary"
                >
                  Get Free Quote
                  <ArrowRight className="w-4 h-4" />
                </button>
                <div className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md">
                  <Clock className="w-4 h-4 text-[#E8A04E]" />
                  <span className="text-sm text-white/80">{service.timeframe}</span>
                </div>
              </div>
            </div>

            {/* Feature tags */}
            <div className="lg:col-span-5 flex flex-col gap-3">
              {service.features.map((f, i) => (
                <div key={i} className="flex items-center gap-3 px-5 py-3.5 bg-white/5 backdrop-blur border border-white/10 rounded-xl">
                  <div className="w-7 h-7 rounded-full bg-[#B8651B] flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-white font-medium">{f}</span>
                </div>
              ))}
              <div className="flex items-center gap-2 mt-2">
                {[1,2,3,4,5].map(s => <Star key={s} className="w-5 h-5 text-[#E8A04E] fill-[#E8A04E]" />)}
                <span className="text-white/60 text-sm ml-1">5.0 — Trusted across Centurion</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Feature Image + Details */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Feature Image Viewer */}
            <div>
              <div
                onClick={() => setLightboxIndex(activeImg)}
                className="rounded-2xl overflow-hidden aspect-[4/3] shadow-2xl img-zoom bg-[#1F1611] mb-4 cursor-pointer relative group"
              >
                <img
                  src={galleryList[activeImg]}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white gap-2 font-medium text-sm">
                  <ZoomIn className="w-5 h-5" /> View Fullscreen
                </div>
              </div>
              <div className="flex gap-3 overflow-x-auto pb-2">
                {galleryList.slice(0, 6).map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImg(i)}
                    className={`rounded-xl overflow-hidden w-20 h-16 flex-shrink-0 border-2 transition-all cursor-pointer ${
                      activeImg === i ? 'border-[#B8651B]' : 'border-transparent opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* What's Included */}
            <div>
              <div className="text-xs font-semibold tracking-[0.2em] uppercase text-[#B8651B] mb-4">— What's Included</div>
              <h2 className="font-display text-3xl md:text-4xl font-semibold mb-6 text-[#1F1611]">
                Everything covered, nothing hidden.
              </h2>
              <ul className="space-y-3.5 mb-8 list-none p-0">
                {service.bullets.map((b, i) => (
                  <li key={i} className="flex items-start gap-3 text-[#1F1611] text-sm">
                    <CheckCircle2 className="w-5 h-5 text-[#B8651B] flex-shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{b}</span>
                  </li>
                ))}
              </ul>
              <div className="p-5 bg-[#F2E8DA] rounded-xl border border-[#E8DDD0]">
                <div className="text-xs font-semibold tracking-[0.15em] uppercase text-[#B8651B] mb-1">Typical Timeframe</div>
                <div className="text-[#1F1611] font-semibold">{service.timeframe}</div>
                <p className="text-xs text-[#7A6B5E] mt-1">Exact timelines quoted per project after site assessment.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Complete Dedicated Photo Gallery Section */}
      <section className="py-20 bg-[#FAF6F0] border-t border-b border-[#E8DDD0]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <div className="text-xs font-semibold tracking-[0.2em] uppercase text-[#B8651B] mb-3">— Actual Work Showcase</div>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-[#1F1611]">
                {service.title} Project Gallery
              </h2>
            </div>
            <div className="text-sm text-[#7A6B5E]">
              Showing {galleryList.length} completed {service.title.toLowerCase()} projects by Deskab Projects.
            </div>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {galleryList.map((img, i) => (
              <div
                key={i}
                onClick={() => setLightboxIndex(i)}
                className="group relative rounded-xl overflow-hidden aspect-[4/3] bg-[#1F1611] shadow-md cursor-pointer hover:shadow-xl transition-all"
              >
                <img
                  src={img}
                  alt={`${service.title} project photo ${i + 1}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-4 flex flex-col justify-end text-white">
                  <div className="text-xs font-semibold text-[#E8A04E]">{service.title} Project</div>
                  <div className="text-sm font-medium">Click to view full screen</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
          <button
            onClick={() => setLightboxIndex(null)}
            className="absolute top-6 right-6 text-white/70 hover:text-white p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors border-none cursor-pointer"
          >
            <X className="w-6 h-6" />
          </button>
          <div className="max-w-4xl w-full max-h-[85vh] flex flex-col items-center">
            <img
              src={galleryList[lightboxIndex]}
              alt={`${service.title} full view`}
              className="max-w-full max-h-[75vh] object-contain rounded-lg shadow-2xl"
            />
            <div className="mt-4 text-white text-center">
              <div className="font-semibold text-lg">{service.title} Project Photo {lightboxIndex + 1} of {galleryList.length}</div>
              <div className="flex gap-4 mt-3 justify-center">
                <button
                  disabled={lightboxIndex === 0}
                  onClick={() => setLightboxIndex(lightboxIndex - 1)}
                  className="px-4 py-2 bg-white/10 hover:bg-white/20 disabled:opacity-30 rounded-lg text-sm text-white border-none cursor-pointer"
                >
                  Previous
                </button>
                <button
                  disabled={lightboxIndex === galleryList.length - 1}
                  onClick={() => setLightboxIndex(lightboxIndex + 1)}
                  className="px-4 py-2 bg-[#B8651B] hover:bg-[#8B4A14] disabled:opacity-30 rounded-lg text-sm text-white border-none cursor-pointer"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Our Process */}
      <section className="py-24 bg-[#F2E8DA] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <div className="text-xs font-semibold tracking-[0.2em] uppercase text-[#B8651B] mb-4">— How We Work</div>
            <h2 className="font-display font-light text-4xl md:text-5xl leading-[1.05] tracking-tight text-[#1F1611]">
              Our {service.title} process.
            </h2>
            <p className="mt-4 text-[#7A6B5E]">A clear, transparent process — so you know exactly what to expect.</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 relative">
            <div className="hidden md:block process-line"></div>
            {service.process.map((step, i) => (
              <div key={i} className="card p-6 text-center relative">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#E8A04E] to-[#B8651B] flex items-center justify-center mx-auto mb-5 shadow-lg shadow-[#B8651B]/30">
                  <span className="text-white font-display font-bold text-lg">{i + 1}</span>
                </div>
                <div className="text-[10px] font-semibold tracking-[0.15em] uppercase text-[#B8651B] mb-2">{step.step}</div>
                <h3 className="font-display text-lg font-semibold mb-2 text-[#1F1611]">{step.title}</h3>
                <p className="text-[#7A6B5E] text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-24 bg-[#1F1611] text-white relative overflow-hidden grain-overlay">
        <div className="glow-orb w-80 h-80 bg-[#B8651B] -top-20 -right-20 opacity-25"></div>
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <div className="text-xs font-semibold tracking-[0.2em] uppercase text-[#E8A04E] mb-5">— Ready to Start?</div>
          <h2 className="font-display font-light text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
            Let's get your <em className="italic font-medium text-[#E8A04E]">{service.title.toLowerCase()}</em> project started.
          </h2>
          <p className="text-white/70 text-lg mb-10 max-w-xl mx-auto">
            Request a free, no-obligation quote. We'll assess your site, discuss your needs, and provide a clear written quote — usually within 48 hours.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setCurrentPage('contact')}
              className="btn-primary text-base px-8 py-4"
            >
              Request Free Quote
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => setCurrentPage('projects')}
              className="btn-ghost-light text-base px-8 py-4"
            >
              View Our Work
            </button>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-xs font-semibold tracking-[0.2em] uppercase text-[#B8651B] mb-6">— Related Services</div>
          <div className="flex flex-wrap gap-3">
            {[
              { label: 'Painting', slug: 'service-painting' },
              { label: 'Tiling', slug: 'service-tiling' },
              { label: 'Wooden Floors', slug: 'service-wooden-floors' },
              { label: 'Ceilings & Cornices', slug: 'service-ceilings-cornices' },
              { label: 'Drywalling', slug: 'service-drywalling' },
              { label: 'Carpentry', slug: 'service-carpentry' },
              { label: 'Plumbing', slug: 'service-plumbing' },
              { label: 'Electrical', slug: 'service-electrical' },
              { label: 'Building', slug: 'service-building' },
              { label: 'Solar Installation', slug: 'service-solar-installation' },
            ].filter(r => r.slug !== service.slug).map((r) => (
              <button
                key={r.slug}
                onClick={() => {
                  setCurrentPage(r.slug);
                  window.scrollTo({ top: 0, behavior: 'instant' });
                }}
                className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#E8DDD0] text-sm font-medium text-[#1F1611] hover:border-[#B8651B] hover:text-[#B8651B] transition-colors bg-white cursor-pointer"
              >
                {r.label}
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
