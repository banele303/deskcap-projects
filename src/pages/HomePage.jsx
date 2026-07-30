import React, { useState, useEffect } from 'react';
import {
  ArrowRight, ShieldCheck, Award, Star, CheckCircle2, ChevronDown,
  MapPin, Mail, Zap, Layers, Hammer, Droplets, Building2, Sun,
  PanelLeft, Square
} from 'lucide-react';
import { services } from '../data/servicesData';
import { projects } from '../data/projectsData';
import { blogPosts } from '../data/blogData';

const SERVICE_ICONS = {
  Brush: () => <span className="text-lg">🖌️</span>,
  Grid3x3: () => <span className="text-lg">▦</span>,
  Layers: () => <Layers className="w-5 h-5" />,
  Square: () => <Square className="w-5 h-5" />,
  PanelLeft: () => <PanelLeft className="w-5 h-5" />,
  Hammer: () => <Hammer className="w-5 h-5" />,
  Droplets: () => <Droplets className="w-5 h-5" />,
  Zap: () => <Zap className="w-5 h-5" />,
  Building2: () => <Building2 className="w-5 h-5" />,
  Sun: () => <Sun className="w-5 h-5" />,
};

export default function HomePage({ setCurrentPage, onSelectProject, showToast }) {
  const [quoteForm, setQuoteForm] = useState({
    name: '', phone: '', email: '', service: ''
  });
  const [submitting, setSubmitting] = useState(false);
  const [counts, setCounts] = useState({ years: 0, projects: 0, happy: 0 });

  useEffect(() => {
    const duration = 2000;
    const startTime = performance.now();
    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      setCounts({
        years: Math.floor(ease * 8),
        projects: Math.floor(ease * 350),
        happy: Math.floor(ease * 98)
      });
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, []);

  const handleHeroQuoteSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setQuoteForm({ name: '', phone: '', email: '', service: '' });
      showToast('Quote request sent — we\'ll be in touch within 48 hours!');
    }, 1200);
  };

  const featuredProjects = projects.filter(p => p.featured).slice(0, 3);
  const featuredBlog = blogPosts.slice(0, 3);

  return (
    <div className="min-h-screen">

      {/* ─── HERO ─── */}
      <section className="relative min-h-screen hero-bg-container overflow-hidden grain-overlay flex items-center pt-28 pb-20">
        <img
          src="/images/hero_renovation.jpg"
          alt="Deskab Projects — Centurion Renovations"
          className="hero-bg-image"
        />
        <div className="hero-bg-overlay"></div>
        <div className="glow-orb w-96 h-96 bg-[#B8651B] top-20 -right-20 opacity-40"></div>
        <div className="glow-orb w-72 h-72 bg-[#E8A04E] bottom-32 -left-20 opacity-30"></div>

        {/* Subtle geometric overlay */}
        <svg className="absolute top-0 right-0 w-full h-full opacity-[0.06] pointer-events-none" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
          <g stroke="white" strokeWidth="0.5" fill="none">
            <path d="M 0 600 L 400 200 L 1200 600"/><path d="M 0 620 L 400 220 L 1200 620"/>
            <path d="M 0 640 L 400 240 L 1200 640"/><path d="M 0 660 L 400 260 L 1200 660"/>
          </g>
        </svg>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 w-full z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">

            {/* Left: Hero Text */}
            <div className="lg:col-span-7 text-white">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-7">
                <span className="w-2 h-2 rounded-full bg-[#6B8E5A] animate-pulse"></span>
                <span className="text-xs font-medium tracking-wide">Now booking projects — Centurion & Pretoria</span>
              </div>

              <h1 className="font-display font-light text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem] leading-[1.02] tracking-tight hero-text-shadow">
                Deskab <em className="font-medium gradient-text italic">Projects</em><br />
                <span className="text-white/90">Built right.</span>
              </h1>

              <p className="mt-7 text-lg md:text-xl text-white/90 max-w-xl leading-relaxed hero-text-shadow">
                Painting · Tiling · Wooden Floors · Ceilings · Drywalling · Carpentry · Plumbing · Electrical · Building · Solar Installation — all from one trusted Centurion team.
              </p>

              <div className="mt-4 flex items-center gap-2 text-white/70 text-sm">
                <MapPin className="w-4 h-4 text-[#E8A04E]" />
                <span>Olievenhoutbosch, Centurion, 0187, South Africa</span>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <button onClick={() => setCurrentPage('services')} className="btn-primary">
                  Explore Our Services
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button onClick={() => setCurrentPage('projects')} className="btn-ghost-light">
                  View Projects
                </button>
              </div>

              {/* Stats */}
              <div className="mt-14 grid grid-cols-3 gap-6 max-w-lg border-t border-white/10 pt-8">
                <div>
                  <div className="font-display text-3xl md:text-4xl font-medium text-[#E8A04E]">{counts.years}+</div>
                  <div className="text-xs text-white/60 mt-1 tracking-wider uppercase">Years Delivering</div>
                </div>
                <div>
                  <div className="font-display text-3xl md:text-4xl font-medium text-[#E8A04E]">{counts.projects}+</div>
                  <div className="text-xs text-white/60 mt-1 tracking-wider uppercase">Projects Done</div>
                </div>
                <div>
                  <div className="font-display text-3xl md:text-4xl font-medium text-[#E8A04E]">{counts.happy}%</div>
                  <div className="text-xs text-white/60 mt-1 tracking-wider uppercase">Client Satisfaction</div>
                </div>
              </div>
            </div>

            {/* Right: Quote Glass Card */}
            <div className="lg:col-span-5">
              <div className="glass-card p-7 lg:p-8 shadow-2xl float-anim border border-white/20">
                <div className="flex items-center gap-3 mb-1">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#E8A04E] to-[#B8651B] flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-display font-semibold text-lg leading-none">Free Project Quote</div>
                    <div className="text-white/50 text-xs mt-1">Response within 48 hours</div>
                  </div>
                </div>

                <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent my-5"></div>

                <form onSubmit={handleHeroQuoteSubmit} className="space-y-3.5">
                  <div>
                    <label className="block text-[10px] font-semibold tracking-[0.15em] uppercase text-white/50 mb-1.5">Full Name</label>
                    <input type="text" required value={quoteForm.name}
                      onChange={(e) => setQuoteForm({ ...quoteForm, name: e.target.value })}
                      className="hero-form-input" placeholder="Jane Dlamini" />
                  </div>
                  <div>
                    <label className="block text-[10px] font-semibold tracking-[0.15em] uppercase text-white/50 mb-1.5">Phone Number</label>
                    <input type="tel" required value={quoteForm.phone}
                      onChange={(e) => setQuoteForm({ ...quoteForm, phone: e.target.value })}
                      className="hero-form-input" placeholder="+27 82 000 0000" />
                  </div>
                  <div>
                    <label className="block text-[10px] font-semibold tracking-[0.15em] uppercase text-white/50 mb-1.5">Email</label>
                    <input type="email" required value={quoteForm.email}
                      onChange={(e) => setQuoteForm({ ...quoteForm, email: e.target.value })}
                      className="hero-form-input" placeholder="jane@example.co.za" />
                  </div>
                  <div>
                    <label className="block text-[10px] font-semibold tracking-[0.15em] uppercase text-white/50 mb-1.5">Service Needed</label>
                    <select required value={quoteForm.service}
                      onChange={(e) => setQuoteForm({ ...quoteForm, service: e.target.value })}
                      className="hero-form-input">
                      <option value="">Select a service…</option>
                      {services.map(s => (
                        <option key={s.id} value={s.id}>{s.title}</option>
                      ))}
                    </select>
                  </div>

                  <button type="submit" disabled={submitting}
                    className="w-full mt-2 bg-gradient-to-r from-[#E8A04E] to-[#B8651B] hover:from-[#B8651B] hover:to-[#8B4A14] text-white font-semibold py-3.5 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 text-sm shadow-lg shadow-[#B8651B]/30 hover:shadow-xl hover:shadow-[#B8651B]/40 hover:-translate-y-0.5 border-none cursor-pointer">
                    {submitting ? (
                      <><span className="spinner"></span><span>Sending…</span></>
                    ) : (
                      <><span>Get My Free Quote</span><ArrowRight className="w-4 h-4" /></>
                    )}
                  </button>

                  <div className="flex items-center gap-2 pt-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#6B8E5A] flex-shrink-0" />
                    <span className="text-[11px] text-white/50">No obligation · Free site visit · Fixed pricing</span>
                  </div>
                </form>
              </div>

              {/* Trust badges */}
              <div className="mt-5 flex items-center justify-center gap-5 text-white/50 text-xs">
                <div className="flex items-center gap-1.5"><Star className="w-4 h-4 text-[#E8A04E] fill-[#E8A04E]" /><span>4.9/5 Rated</span></div>
                <div className="w-px h-3 bg-white/20"></div>
                <div className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-[#E8A04E]" /><span>Guaranteed Work</span></div>
                <div className="w-px h-3 bg-white/20"></div>
                <div className="flex items-center gap-1.5"><Award className="w-4 h-4 text-[#E8A04E]" /><span>COC Certified</span></div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="hidden lg:flex absolute bottom-6 left-1/2 -translate-x-1/2 text-white/40 text-xs flex-col items-center gap-2 scroll-indicator">
          <span className="tracking-widest uppercase">Scroll</span>
          <ChevronDown className="w-4 h-4" />
        </div>
      </section>

      {/* ─── MARQUEE ─── */}
      <section className="bg-[#1F1611] py-5 overflow-hidden border-y border-[#3D2F25]">
        <div className="marquee-track">
          {[...Array(2)].map((_, di) => (
            <div key={di} className="flex items-center gap-12 px-6 text-white/40 font-display text-2xl italic whitespace-nowrap">
              {['Painting', 'Tiling', 'Wooden Floors', 'Ceilings', 'Drywalling', 'Carpentry', 'Plumbing', 'Electrical', 'Building', 'Solar'].map((t, i) => (
                <React.Fragment key={i}>
                  <span>{t}</span>
                  <span className="text-[#E8A04E]">✦</span>
                </React.Fragment>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* ─── ALL 10 SERVICES GRID ─── */}
      <section className="py-24 lg:py-32 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 mb-16">
            <div className="lg:col-span-5">
              <div className="text-xs font-semibold tracking-[0.2em] uppercase text-[#B8651B] mb-4">— What We Do</div>
              <h2 className="font-display font-light text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight text-[#1F1611]">
                10 services. <em className="italic font-medium gradient-text">One team.</em>
              </h2>
            </div>
            <div className="lg:col-span-6 lg:col-start-7 flex items-end">
              <p className="text-lg text-[#7A6B5E] leading-relaxed">
                Every trade you need for a renovation, new build, or solar installation — coordinated under one roof so you only deal with one team and one bill.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mb-6">
            {services.slice(0, 8).map((s, idx) => (
              <div
                key={s.id}
                onClick={() => setCurrentPage(s.slug)}
                className="card card-hover cursor-pointer group overflow-hidden flex flex-col"
              >
                <div className="relative aspect-[16/10] img-zoom bg-[#1F1611] overflow-hidden">
                  <img src={s.image} alt={s.title} loading="lazy" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1F1611]/80 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-white/95 text-[10px] tracking-[0.15em] uppercase font-semibold text-[#B8651B] shadow-sm">
                      0{idx + 1}
                    </span>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="font-display text-xl font-semibold mb-2 text-[#1F1611] group-hover:text-[#B8651B] transition-colors">{s.title}</h3>
                  <p className="text-sm text-[#7A6B5E] leading-relaxed flex-grow">{s.shortDesc.slice(0, 90)}…</p>
                  <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-[#B8651B] group-hover:gap-3 transition-all">
                    <span>View service</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Last 2 services in wider cards */}
          <div className="grid md:grid-cols-2 gap-5 mb-12">
            {services.slice(8).map((s, idx) => (
              <div
                key={s.id}
                onClick={() => setCurrentPage(s.slug)}
                className="card card-hover cursor-pointer group overflow-hidden flex"
              >
                <div className="relative w-48 flex-shrink-0 img-zoom bg-[#1F1611] overflow-hidden">
                  <img src={s.image} alt={s.title} loading="lazy" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#1F1611]/50"></div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="text-[10px] font-semibold tracking-[0.15em] uppercase text-[#B8651B] mb-2">0{idx + 9}</div>
                  <h3 className="font-display text-xl font-semibold mb-2 text-[#1F1611] group-hover:text-[#B8651B] transition-colors">{s.title}</h3>
                  <p className="text-sm text-[#7A6B5E] leading-relaxed flex-grow">{s.shortDesc.slice(0, 100)}…</p>
                  <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-[#B8651B] group-hover:gap-3 transition-all">
                    <span>View service</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button onClick={() => setCurrentPage('services')} className="btn-outline">
              View All Services Hub
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* ─── ABOUT PREVIEW ─── */}
      <section className="py-24 lg:py-32 bg-[#1F1611] text-white relative overflow-hidden grain-overlay">
        <div className="glow-orb w-96 h-96 bg-[#B8651B] -top-40 -left-40 opacity-30"></div>
        <div className="glow-orb w-72 h-72 bg-[#E8A04E] -bottom-32 right-10 opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden aspect-[5/6] shadow-2xl">
                <img src="/images/WhatsApp Image 2026-07-30 at 11.35.36 AM.jpeg" alt="Deskab Projects craftsmanship" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1F1611]/80 to-transparent"></div>
              </div>
              <div className="absolute -bottom-8 -right-4 lg:-right-8 max-w-xs bg-[#FAF6F0] text-[#1F1611] p-6 rounded-xl shadow-2xl border border-[#E8DDD0]">
                <p className="font-display italic text-sm leading-relaxed">
                  "Quality craftsmanship, honest pricing, and on-time delivery — every single time."
                </p>
                <div className="mt-3 text-xs font-semibold tracking-wide text-[#B8651B]">— Deskab Projects Team</div>
              </div>
            </div>

            <div className="lg:pl-6 pt-8 lg:pt-0">
              <div className="text-xs font-semibold tracking-[0.2em] uppercase text-[#E8A04E] mb-5">— Who We Are</div>
              <h2 className="font-display font-light text-4xl md:text-5xl leading-tight mb-6">
                Your trusted partner in <em className="italic font-medium text-[#E8A04E]">Centurion</em> for every trade.
              </h2>
              <p className="text-white/70 leading-relaxed mb-5">
                Based in Olievenhoutbosch, Centurion, Deskab Projects has been transforming homes and businesses across Gauteng. We bring together 10 specialist trades — so you get seamless, accountable project delivery without the stress of managing multiple contractors.
              </p>
              <p className="text-white/70 leading-relaxed mb-8">
                From a single bathroom renovation to a complete home rebuild with solar installation — we manage everything, deliver on time, and stand behind our work.
              </p>

              <div className="grid grid-cols-3 gap-6 mb-10 py-6 border-t border-white/10">
                {[
                  { icon: ShieldCheck, label: 'Guaranteed Quality' },
                  { icon: Award, label: 'Registered Trades' },
                  { icon: Star, label: 'Top Rated Locally' }
                ].map(({ icon: Icon, label }) => (
                  <div key={label} className="text-center">
                    <div className="w-12 h-12 rounded-xl bg-[#B8651B]/20 border border-[#B8651B]/30 flex items-center justify-center mx-auto mb-3">
                      <Icon className="w-5 h-5 text-[#E8A04E]" />
                    </div>
                    <div className="text-xs text-white/60 font-medium">{label}</div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <button onClick={() => setCurrentPage('about')} className="btn-primary">
                  Our Story <ArrowRight className="w-4 h-4" />
                </button>
                <button onClick={() => setCurrentPage('contact')} className="btn-ghost-light">
                  Get in Touch
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FEATURED PROJECTS ─── */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-end justify-between mb-12">
            <div>
              <div className="text-xs font-semibold tracking-[0.2em] uppercase text-[#B8651B] mb-4">— Portfolio</div>
              <h2 className="font-display font-light text-4xl md:text-5xl leading-tight text-[#1F1611]">
                Recent work across <em className="italic font-medium gradient-text">Centurion</em>.
              </h2>
            </div>
            <button onClick={() => setCurrentPage('projects')} className="hidden md:flex btn-outline">
              All Projects <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {featuredProjects.map((p) => (
              <div key={p.id} onClick={() => onSelectProject(p)} className="card card-hover cursor-pointer group overflow-hidden">
                <div className="relative aspect-[4/3] img-zoom bg-[#1F1611] overflow-hidden">
                  <img src={p.image} alt={p.title} loading="lazy" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1F1611]/70 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-[#B8651B] text-white text-xs font-semibold">{p.category}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-semibold mb-2 text-[#1F1611] group-hover:text-[#B8651B] transition-colors">{p.title}</h3>
                  <p className="text-sm text-[#7A6B5E] leading-relaxed mb-4">{p.blurb}</p>
                  <div className="flex items-center gap-2 text-sm font-semibold text-[#B8651B]">
                    <MapPin className="w-4 h-4" />
                    <span>{p.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10 md:hidden">
            <button onClick={() => setCurrentPage('projects')} className="btn-outline">
              View All Projects <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─── */}
      <section className="py-24 bg-[#F2E8DA] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="text-xs font-semibold tracking-[0.2em] uppercase text-[#B8651B] mb-4">— Client Reviews</div>
            <h2 className="font-display font-light text-4xl md:text-5xl leading-tight text-[#1F1611]">
              What Centurion homeowners say.
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                quote: 'Deskab painted our entire home — inside and out — in 4 days. The finish is perfect and the team was incredibly professional. Highly recommend!',
                name: 'Thandi M.',
                location: 'Olievenhoutbosch, Centurion',
                service: 'Painting'
              },
              {
                quote: 'They installed a 10kW solar system for us. The team was knowledgeable, neat, and the installation was completed in 2 days. Our electricity bill dropped by 80%.',
                name: 'Pieter V.',
                location: 'Midrand, Gauteng',
                service: 'Solar Installation'
              },
              {
                quote: 'Completely renovated my bathroom — new tiling, plumbing, vanity, everything. Done in 7 days exactly as quoted. No surprises, no excuses. Outstanding.',
                name: 'Nompumelelo K.',
                location: 'Lyttelton, Centurion',
                service: 'Plumbing & Tiling'
              }
            ].map((t, i) => (
              <div key={i} className="card p-8">
                <div className="flex gap-1 mb-5">
                  {[1,2,3,4,5].map(s => <Star key={s} className="w-4 h-4 text-[#E8A04E] fill-[#E8A04E]" />)}
                </div>
                <p className="text-[#1F1611] text-sm leading-relaxed mb-6 font-display italic">
                  "{t.quote}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#E8A04E] to-[#B8651B] flex items-center justify-center text-white font-bold text-sm">
                    {t.name[0]}
                  </div>
                  <div>
                    <div className="font-semibold text-sm text-[#1F1611]">{t.name}</div>
                    <div className="text-xs text-[#7A6B5E]">{t.location} · {t.service}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── BLOG PREVIEW ─── */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-end justify-between mb-12">
            <div>
              <div className="text-xs font-semibold tracking-[0.2em] uppercase text-[#B8651B] mb-4">— Renovation Journal</div>
              <h2 className="font-display font-light text-4xl md:text-5xl leading-tight text-[#1F1611]">
                Tips, guides, and <em className="italic font-medium gradient-text">project stories</em>.
              </h2>
            </div>
            <button onClick={() => setCurrentPage('blog')} className="hidden md:flex btn-outline">
              All Articles <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredBlog.map((post) => (
              <div
                key={post.id}
                className="card card-hover cursor-pointer group overflow-hidden flex flex-col justify-between border border-[#E8DDD0] hover:border-[#B8651B]/40 bg-white shadow-md hover:shadow-2xl transition-all duration-300 rounded-2xl"
                onClick={() => setCurrentPage('blog')}
              >
                <div>
                  <div className="relative aspect-[16/10] img-zoom overflow-hidden bg-[#1F1611]">
                    <img src={post.image} alt={post.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1F1611]/70 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>
                    <div className="absolute top-4 left-4 flex gap-2">
                      <span className="px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md text-[11px] tracking-wide uppercase font-bold text-[#B8651B] shadow-sm">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-7">
                    <div className="flex items-center justify-between text-xs text-[#7A6B5E] mb-3">
                      <span className="font-medium text-[#B8651B]">{post.authorRole || 'Deskab Projects'}</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="font-display text-xl font-bold mb-3 text-[#1F1611] group-hover:text-[#B8651B] transition-colors leading-snug">
                      {post.title}
                    </h3>
                    <p className="text-sm text-[#7A6B5E] leading-relaxed line-clamp-3">
                      {post.blurb}
                    </p>
                  </div>
                </div>

                <div className="px-7 pb-7 pt-2 flex items-center justify-between border-t border-[#FAF6F0] text-sm font-semibold text-[#B8651B] group-hover:text-[#8B4A14]">
                  <span className="flex items-center gap-2">
                    Read Full Article
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                  </span>
                  <span className="text-xs text-[#7A6B5E] font-normal">{post.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CONTACT CTA BANNER ─── */}
      <section className="py-24 bg-[#1F1611] text-white relative overflow-hidden grain-overlay">
        <div className="glow-orb w-80 h-80 bg-[#B8651B] -top-20 -right-20 opacity-25"></div>
        <div className="glow-orb w-64 h-64 bg-[#E8A04E] bottom-0 left-10 opacity-20"></div>
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <div className="text-xs font-semibold tracking-[0.2em] uppercase text-[#E8A04E] mb-5">— Ready to Transform Your Space?</div>
          <h2 className="font-display font-light text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
            Let's start your <em className="italic font-medium text-[#E8A04E]">project</em> today.
          </h2>
          <p className="text-white/70 text-lg mb-4 max-w-xl mx-auto">
            Request a free no-obligation quote. We'll assess your site and come back with a clear written quote within 48 hours.
          </p>
          <div className="flex items-center justify-center gap-2 text-white/50 text-sm mb-10">
            <Mail className="w-4 h-4 text-[#E8A04E]" />
            <a href="mailto:deskabrenovations01@gmail.com" className="hover:text-white transition-colors">
              deskabrenovations01@gmail.com
            </a>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <button onClick={() => setCurrentPage('contact')} className="btn-primary text-base px-8 py-4">
              Request Free Quote
              <ArrowRight className="w-4 h-4" />
            </button>
            <button onClick={() => setCurrentPage('services')} className="btn-ghost-light text-base px-8 py-4">
              Explore All Services
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
