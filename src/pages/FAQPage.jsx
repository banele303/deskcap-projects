import React, { useState } from 'react';
import { Plus, Minus, MessageSquare, Mail, ArrowRight } from 'lucide-react';
import { faqs } from '../data/faqData';

export default function FAQPage({ onOpenChat, setCurrentPage }) {
  const [openKey, setOpenKey] = useState(null);

  const toggle = (key) => setOpenKey(openKey === key ? null : key);

  return (
    <div className="min-h-screen pt-20">

      {/* Header */}
      <section className="pt-24 pb-20 bg-[#1F1611] text-white relative overflow-hidden grain-overlay">
        <div className="glow-orb w-96 h-96 bg-[#B8651B] -top-40 left-0 opacity-30"></div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-xs font-semibold tracking-[0.2em] uppercase text-[#E8A04E] mb-4">— Questions & Answers</div>
          <h1 className="font-display font-light text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight max-w-4xl">
            The <em className="italic font-medium text-[#E8A04E]">honest</em> answers.
          </h1>
          <p className="mt-6 text-lg text-white/70 max-w-2xl">
            Everything you need to know about working with Deskab Projects — from quotes and timelines to what we cover in Centurion and Pretoria.
          </p>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 space-y-10">
          {faqs.map((section) => (
            <div key={section.category}>
              <h2 className="font-display text-xl font-semibold text-[#1F1611] mb-5 pb-3 border-b border-[#E8DDD0]">
                {section.category}
              </h2>
              <div className="space-y-3">
                {section.questions.map((faq, qi) => {
                  const key = `${section.category}-${qi}`;
                  const isOpen = openKey === key;
                  return (
                    <div
                      key={qi}
                      className={`border border-[#E8DDD0] rounded-xl overflow-hidden bg-white transition-colors ${isOpen ? 'border-[#B8651B]' : ''}`}
                    >
                      <button
                        onClick={() => toggle(key)}
                        className="w-full p-6 text-left flex items-center justify-between gap-4 font-display font-semibold text-lg text-[#1F1611] bg-transparent border-none cursor-pointer"
                      >
                        <span>{faq.q}</span>
                        {isOpen ? (
                          <Minus className="w-5 h-5 text-[#B8651B] flex-shrink-0" />
                        ) : (
                          <Plus className="w-5 h-5 text-[#B8651B] flex-shrink-0" />
                        )}
                      </button>
                      {isOpen && (
                        <div className="px-6 pb-6 text-[#7A6B5E] text-base leading-relaxed border-t border-[#FAF6F0] pt-4">
                          {faq.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}

          {/* Still Have Questions Card */}
          <div className="mt-8 p-8 rounded-2xl bg-[#F2E8DA] border border-[#E8DDD0] text-center">
            <div className="text-xs font-semibold tracking-[0.2em] uppercase text-[#B8651B] mb-3">— Still Have Questions?</div>
            <h3 className="font-display text-2xl font-semibold mb-3 text-[#1F1611]">Chat with our Deskab assistant</h3>
            <p className="text-[#7A6B5E] mb-6 max-w-md mx-auto">
              Our AI assistant can answer renovation, solar, and building questions instantly — or email us directly and we'll respond within 48 hours.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <button onClick={onOpenChat} className="btn-primary">
                <MessageSquare className="w-4 h-4" />
                Ask Deskab Assistant
              </button>
              <button onClick={() => setCurrentPage('contact')} className="btn-outline">
                <Mail className="w-4 h-4" />
                Email Us
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
