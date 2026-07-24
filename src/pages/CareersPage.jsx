import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function CareersPage({ setCurrentPage }) {
  return (
    <div className="min-h-screen pt-20">

      {/* Header */}
      <section className="pt-24 pb-20 bg-[#1F1611] text-white relative overflow-hidden grain-overlay">
        <div className="glow-orb w-96 h-96 bg-[#B8651B] -top-40 right-1/4 opacity-30"></div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-xs font-semibold tracking-[0.2em] uppercase text-[#E8A04E] mb-4">— Join the Team</div>
          <h1 className="font-display font-light text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight max-w-4xl">
            Build a career in <em className="italic font-medium text-[#E8A04E]">renovation</em>.
          </h1>
          <p className="mt-6 text-lg text-white/70 max-w-2xl">
            We're growing. Looking for skilled artisans — painters, tilers, electricians, plumbers, carpenters, and solar technicians who take pride in their craft and want steady, well-paid work in Centurion.
          </p>
        </div>
      </section>

      {/* Apprenticeship section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="text-xs font-semibold tracking-[0.2em] uppercase text-[#B8651B] mb-4">— Why Join Us</div>
              <h2 className="font-display font-light text-4xl md:text-5xl leading-[1.05] tracking-tight text-[#1F1611] mb-6">
                Steady work. Fair pay. Growth.
              </h2>
              <p className="text-[#7A6B5E] text-lg leading-relaxed mb-6">
                At Deskab Projects you work on a variety of projects — not the same thing every day. One week you're tiling a bathroom in Centurion, the next you're installing solar on a Midrand roof. You'll learn new skills and grow with the company.
              </p>
              <p className="text-[#7A6B5E] leading-relaxed mb-8">
                We pay on time, every time. We provide tools and transport to site. And we genuinely care about the people on our team — their development, their safety, and their wellbeing.
              </p>

              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="p-4 bg-[#F2E8DA] rounded-xl border border-[#E8DDD0]">
                  <div className="font-display text-2xl font-bold text-[#B8651B]">10</div>
                  <div className="text-xs text-[#7A6B5E] mt-1">Trade disciplines</div>
                </div>
                <div className="p-4 bg-[#F2E8DA] rounded-xl border border-[#E8DDD0]">
                  <div className="font-display text-2xl font-bold text-[#B8651B]">25+</div>
                  <div className="text-xs text-[#7A6B5E] mt-1">Team members</div>
                </div>
                <div className="p-4 bg-[#F2E8DA] rounded-xl border border-[#E8DDD0]">
                  <div className="font-display text-2xl font-bold text-[#B8651B]">98%</div>
                  <div className="text-xs text-[#7A6B5E] mt-1">Satisfaction rate</div>
                </div>
              </div>

              <button onClick={() => setCurrentPage('contact')} className="btn-primary">
                Apply Now
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="relative">
              <div className="rounded-2xl overflow-hidden aspect-[4/5] shadow-2xl bg-[#1F1611]">
                <img src="/images/projects/st_project_68.jpg" alt="Thatching apprentice" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-5 rounded-xl shadow-2xl border border-[#E8DDD0] max-w-[220px]">
                <div className="text-xs font-semibold tracking-wide text-[#B8651B] mb-1">Year 3 Apprentice</div>
                <p className="text-sm font-display italic text-[#1F1611]">"I didn't just want a job. I wanted to know how to build something that lasts."</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Open positions */}
      <section className="py-24 bg-[#F2E8DA] relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="text-xs font-semibold tracking-[0.2em] uppercase text-[#B8651B] mb-4">— Open Positions</div>
            <h2 className="font-display font-light text-4xl md:text-5xl leading-[1.05] tracking-tight text-[#1F1611]">
              Immediate openings.
            </h2>
          </div>

          <div className="space-y-4">
            {[
              { title: 'Site Supervisor', type: 'FULL-TIME', typeColor: 'bg-[#6B8E5A]/10 text-[#6B8E5A]', desc: 'Centurion, Gauteng · 3+ years supervision · Client liaison & safety compliance' },
              { title: 'Electrician (Registered)', type: 'FULL-TIME', typeColor: 'bg-[#B8651B]/10 text-[#B8651B]', desc: 'Centurion & Pretoria · Registered electrician · Domestic and commercial wiring' },
              { title: 'Solar Technician', type: 'FULL-TIME', typeColor: 'bg-[#E8A04E]/10 text-[#E8A04E]', desc: 'Centurion, Gauteng · Solar PV experience required · Inverter & battery systems' },
              { title: 'Skilled Tiler / Painter', type: 'FULL-TIME', typeColor: 'bg-[#6B8E5A]/10 text-[#6B8E5A]', desc: 'Centurion & Pretoria · Experienced in residential tiling & interior/exterior painting' }
            ].map((job, idx) => (
              <div key={idx} className="card p-6 flex flex-wrap items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-display text-xl font-semibold text-[#1F1611]">{job.title}</h3>
                    <span className={`px-2.5 py-1 rounded-full text-[10px] font-semibold tracking-wide ${job.typeColor}`}>
                      {job.type}
                    </span>
                  </div>
                  <p className="text-sm text-[#7A6B5E]">{job.desc}</p>
                </div>
                <button onClick={() => setCurrentPage('contact')} className="btn-outline text-sm">
                  Apply Now
                </button>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-[#7A6B5E] mb-4">Don't see your role? We're always looking for good people.</p>
            <button onClick={() => setCurrentPage('contact')} className="btn-primary">
              Send Open Application
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
