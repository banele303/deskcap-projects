import React, { useState } from 'react';
import { ArrowRight, Instagram, Facebook, Mail, MapPin, Phone } from 'lucide-react';
import { services } from '../data/servicesData';

export default function Footer({ setCurrentPage, showToast }) {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setEmail('');
      showToast('Subscribed — we\'ll keep you updated on renovation tips and special offers.');
    }
  };

  const navigateTo = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#110A05] text-white pt-20 pb-8 grain-overlay relative overflow-hidden">
      <div className="glow-orb w-96 h-96 bg-[#B8651B] -bottom-40 -left-40 opacity-20"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-5">
              <img src="/images/logo.jpg" alt="Deskab Projects" className="h-12 w-auto object-contain rounded-xl shadow-md" />
              <div>
                <div className="font-display font-bold text-lg leading-none">Deskab Projects</div>
                <div className="text-[10px] tracking-[0.2em] uppercase text-white/40 mt-1">Renovations & Construction</div>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-5 max-w-sm">
              Painting, tiling, wooden floors, ceilings, drywalling, carpentry, plumbing, electrical, building, and solar installation — all under one trusted name in Centurion.
            </p>
            <div className="space-y-2 text-sm text-white/60 mb-6">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#E8A04E] flex-shrink-0 mt-0.5" />
                <span>Olievenhoutbosch, Centurion, 0187, South Africa</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#E8A04E] flex-shrink-0" />
                <a href="mailto:deskabrenovations01@gmail.com" className="hover:text-white transition-colors">
                  deskabrenovations01@gmail.com
                </a>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <a href="#" className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center hover:bg-[#B8651B] hover:border-[#B8651B] transition-colors" aria-label="Instagram">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center hover:bg-[#B8651B] hover:border-[#B8651B] transition-colors" aria-label="Facebook">
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <div className="text-xs font-semibold tracking-[0.15em] uppercase text-[#E8A04E] mb-4">Our Services</div>
            <ul className="space-y-2.5 text-sm list-none p-0">
              {services.map((s) => (
                <li key={s.id}>
                  <button
                    onClick={() => navigateTo(s.slug)}
                    className="text-white/60 hover:text-white transition-colors bg-transparent border-none p-0 cursor-pointer text-left"
                  >
                    {s.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="lg:col-span-2">
            <div className="text-xs font-semibold tracking-[0.15em] uppercase text-[#E8A04E] mb-4">Company</div>
            <ul className="space-y-3 text-sm list-none p-0">
              <li><button onClick={() => navigateTo('about')} className="text-white/60 hover:text-white transition-colors bg-transparent border-none p-0 cursor-pointer">About Us</button></li>
              <li><button onClick={() => navigateTo('projects')} className="text-white/60 hover:text-white transition-colors bg-transparent border-none p-0 cursor-pointer">Projects</button></li>
              <li><button onClick={() => navigateTo('blog')} className="text-white/60 hover:text-white transition-colors bg-transparent border-none p-0 cursor-pointer">Journal</button></li>
              <li><button onClick={() => navigateTo('faq')} className="text-white/60 hover:text-white transition-colors bg-transparent border-none p-0 cursor-pointer">FAQ</button></li>
              <li><button onClick={() => navigateTo('careers')} className="text-white/60 hover:text-white transition-colors bg-transparent border-none p-0 cursor-pointer">Careers</button></li>
              <li><button onClick={() => navigateTo('contact')} className="text-white/60 hover:text-white transition-colors bg-transparent border-none p-0 cursor-pointer">Contact</button></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-3">
            <div className="text-xs font-semibold tracking-[0.15em] uppercase text-[#E8A04E] mb-4">Stay Updated</div>
            <p className="text-white/60 text-sm leading-relaxed mb-4">
              Get renovation tips, solar guides, and project spotlights delivered to your inbox.
            </p>
            <form onSubmit={handleSubscribe} className="flex gap-2">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.co.za"
                className="flex-1 px-4 py-2.5 bg-white/5 border border-white/15 rounded-lg text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-[#B8651B] focus:ring-2 focus:ring-[#B8651B]/20"
              />
              <button type="submit" className="px-4 py-2.5 bg-[#B8651B] hover:bg-[#8B4A14] rounded-lg text-sm font-semibold transition-colors flex items-center gap-2 border-none text-white cursor-pointer">
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </form>
            <div className="mt-6 pt-6 border-t border-white/10 text-xs text-white/40 space-y-1">
              <div>deskabrenovations01@gmail.com</div>
              <div>Olievenhoutbosch, Centurion, 0187</div>
              <div>Gauteng, South Africa</div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-xs text-white/40">© 2025 Deskab Projects. All rights reserved. Centurion, Gauteng, South Africa.</div>
          <div className="text-xs text-white/40 font-display italic">"Quality craftsmanship, honest pricing, on-time delivery."</div>
        </div>
      </div>
    </footer>
  );
}
