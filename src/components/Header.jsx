import React, { useState, useEffect } from 'react';
import { Mail, ArrowRight, Menu, X, ChevronDown } from 'lucide-react';
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

  // The hero is dark only at the top of the Home page
  const isDarkHero = currentPage === 'home' && !scrolled;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isDarkHero
          ? 'bg-transparent'
          : 'bg-[#FAF6F0]/95 backdrop-blur-md border-b border-[#E8DDD0] shadow-sm'
      }`}
    >
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
              <div
                key={item.id}
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <button
                  onClick={() => handleNavClick(item.id)}
                  className={`nav-link text-sm font-medium transition-colors bg-transparent border-none cursor-pointer flex items-center gap-1 ${
                    currentPage === item.id || currentPage.startsWith('service-')
                      ? isDarkHero ? 'text-[#E8A04E] font-bold' : 'text-[#B8651B] font-bold'
                      : isDarkHero ? 'text-white hover:text-[#E8A04E]' : 'text-[#1F1611] hover:text-[#B8651B]'
                  }`}
                >
                  {item.label}
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                </button>

                {/* Simple One-Line Services Dropdown */}
                {servicesOpen && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-2xl border border-[#E8DDD0] py-2 animate-in fade-in slide-in-from-top-2 duration-150 z-50">
                    <button
                      onClick={() => handleNavClick('services')}
                      className="w-full text-left px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#B8651B] bg-[#FAF6F0] hover:bg-[#F2E8DA] border-b border-[#E8DDD0] flex items-center justify-between cursor-pointer border-none"
                    >
                      <span>All 10 Services</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                    {services.map((s, idx) => (
                      <button
                        key={s.id}
                        onClick={() => handleNavClick(s.slug)}
                        className="w-full text-left px-4 py-2 text-sm font-medium text-[#1F1611] hover:bg-[#FAF6F0] hover:text-[#B8651B] transition-colors border-none bg-transparent cursor-pointer flex items-center justify-between group/item"
                      >
                        <span>{s.title}</span>
                        <span className="text-[10px] text-[#7A6B5E] group-hover/item:text-[#B8651B]">0{idx + 1}</span>
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
                    ? isDarkHero ? 'text-[#E8A04E] font-bold' : 'text-[#B8651B] font-bold'
                    : isDarkHero ? 'text-white hover:text-[#E8A04E]' : 'text-[#1F1611] hover:text-[#B8651B]'
                }`}
              >
                {item.label}
              </button>
            )
          ))}
        </div>

        {/* Desktop CTA & Email */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="mailto:info@deskabprojects.co.za"
            className={`text-sm font-medium transition-colors flex items-center gap-2 ${
              isDarkHero ? 'text-white hover:text-[#E8A04E]' : 'text-[#1F1611] hover:text-[#B8651B]'
            }`}
          >
            <Mail className="w-4 h-4" />
            info@deskabprojects.co.za
          </a>
          <button
            onClick={() => handleNavClick('contact')}
            className="btn-primary header-cta text-sm"
            style={isDarkHero ? { background: 'rgba(255,255,255,0.1)', borderColor: 'rgba(255,255,255,0.25)', backdropFilter: 'blur(8px)' } : {}}
          >
            Free Quote
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`lg:hidden p-2 rounded-lg transition-colors border-none bg-transparent cursor-pointer ${
            isDarkHero ? 'text-white' : 'text-[#1F1611]'
          }`}
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
              href="mailto:info@deskabprojects.co.za"
              className="flex items-center justify-center gap-2 text-sm text-[#7A6B5E] py-3 mt-2"
            >
              <Mail className="w-4 h-4" />
              info@deskabprojects.co.za
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
