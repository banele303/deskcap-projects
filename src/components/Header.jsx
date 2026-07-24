import React, { useState, useEffect } from 'react';
import { Phone, ArrowRight, Menu, X, ChevronDown, Mail } from 'lucide-react';
import { services } from '../data/servicesData';

export default function Header({ currentPage, setCurrentPage }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services', hasDropdown: true },
    { id: 'projects', label: 'Projects' },
    { id: 'blog', label: 'Journal' },
    { id: 'faq', label: 'FAQ' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id) => {
    setCurrentPage(id);
    setMobileOpen(false);
    setServicesOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'scrolled' : ''}`}>
      <nav className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-20 lg:h-24 transition-all">
        {/* Logo */}
        <button
          onClick={() => handleNavClick('home')}
          className="flex items-center group cursor-pointer border-none bg-transparent p-0"
        >
          <img
            src="/images/logo.jpg"
            alt="Deskab Projects"
            className="h-12 sm:h-14 md:h-16 lg:h-20 max-h-20 w-auto object-contain rounded-xl group-hover:scale-105 transition-all duration-300 drop-shadow-md"
          />
        </button>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center gap-7">
          {navItems.map((item) => (
            item.hasDropdown ? (
              <div key={item.id} className="relative" onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)}>
                <button
                  onClick={() => handleNavClick(item.id)}
                  className={`nav-link text-sm font-medium transition-colors bg-transparent border-none cursor-pointer flex items-center gap-1 ${
                    currentPage === item.id || currentPage.startsWith('service-')
                      ? 'text-[#E8A04E] font-semibold'
                      : scrolled ? 'text-[#1F1611] hover:text-[#B8651B]' : 'text-white hover:text-[#E8A04E]'
                  }`}
                >
                  {item.label}
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                </button>

                {/* Mega Dropdown */}
                {servicesOpen && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[720px] bg-white rounded-2xl shadow-2xl border border-[#E8DDD0] p-6 grid grid-cols-2 gap-2 animate-in fade-in slide-in-from-top-2 duration-200 z-50">
                    <div className="col-span-2 text-[10px] font-semibold tracking-[0.2em] uppercase text-[#B8651B] mb-2 pb-2 border-b border-[#E8DDD0]">
                      All 10 Services
                    </div>
                    {services.map((s) => (
                      <button
                        key={s.id}
                        onClick={() => handleNavClick(s.slug)}
                        className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-[#FAF6F0] transition-colors text-left group/item border-none bg-transparent cursor-pointer"
                      >
                        <div className="w-8 h-8 rounded-lg bg-[#B8651B]/10 flex items-center justify-center flex-shrink-0">
                          <span className="text-[#B8651B] text-xs font-bold">{s.title[0]}</span>
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-[#1F1611] group-hover/item:text-[#B8651B] transition-colors leading-none mb-0.5">{s.title}</div>
                          <div className="text-[11px] text-[#7A6B5E] leading-snug">{s.shortDesc.slice(0, 55)}…</div>
                        </div>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`nav-link text-sm font-medium transition-colors bg-transparent border-none cursor-pointer ${
                  currentPage === item.id
                    ? 'text-[#E8A04E] font-semibold'
                    : scrolled ? 'text-[#1F1611] hover:text-[#B8651B]' : 'text-white hover:text-[#E8A04E]'
                }`}
              >
                {item.label}
              </button>
            )
          ))}
        </div>

        {/* Desktop CTA & Phone */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="mailto:deskabrenovations01@gmail.com"
            className={`text-sm font-medium transition-colors flex items-center gap-2 ${
              scrolled ? 'text-[#1F1611] hover:text-[#B8651B]' : 'text-white hover:text-[#E8A04E]'
            }`}
          >
            <Mail className="w-4 h-4" />
            deskabrenovations01@gmail.com
          </a>
          <button
            onClick={() => handleNavClick('contact')}
            className="btn-primary header-cta text-sm"
            style={scrolled ? {} : { background: 'rgba(255,255,255,0.1)', borderColor: 'rgba(255,255,255,0.25)', backdropFilter: 'blur(8px)' }}
          >
            Free Quote
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`lg:hidden p-2 rounded-lg transition-colors border-none bg-transparent cursor-pointer ${scrolled ? 'text-[#1F1611]' : 'text-white'}`}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#FAF6F0] border-t border-[#E8DDD0] shadow-2xl">
          <div className="px-6 py-5 space-y-1 max-h-[calc(100vh-5rem)] overflow-y-auto">
            {navItems.filter(i => !i.hasDropdown).map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="w-full text-left py-3 text-base font-medium text-[#1F1611] border-b border-[#E8DDD0] bg-transparent border-none cursor-pointer flex items-center justify-between"
              >
                <span>{item.label}</span>
                {currentPage === item.id && <span className="w-2 h-2 rounded-full bg-[#B8651B]"></span>}
              </button>
            ))}
            <div className="pt-3">
              <div className="text-xs font-semibold tracking-[0.15em] uppercase text-[#B8651B] mb-3">Our Services</div>
              <div className="grid grid-cols-2 gap-2">
                {services.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => handleNavClick(s.slug)}
                    className="text-left py-2 px-3 text-sm font-medium text-[#1F1611] bg-white rounded-lg border border-[#E8DDD0] cursor-pointer hover:border-[#B8651B] hover:text-[#B8651B] transition-colors"
                  >
                    {s.title}
                  </button>
                ))}
              </div>
            </div>
            <button
              onClick={() => handleNavClick('contact')}
              className="btn-primary w-full justify-center mt-4"
            >
              Get Free Quote
            </button>
            <a
              href="mailto:deskabrenovations01@gmail.com"
              className="flex items-center justify-center gap-2 text-sm text-[#7A6B5E] py-3 mt-2"
            >
              <Mail className="w-4 h-4" />
              deskabrenovations01@gmail.com
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
