import React from 'react';
import { ArrowRight, Award, ShieldCheck, Heart, MapPin, Mail, FileText } from 'lucide-react';

export default function AboutPage({ setCurrentPage }) {
  return (
    <div className="min-h-screen pt-20">

      {/* Header */}
      <section className="pt-24 pb-20 bg-[#1F1611] text-white relative overflow-hidden grain-overlay">
        <div className="glow-orb w-96 h-96 bg-[#B8651B] -top-40 left-1/4 opacity-30"></div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-xs font-semibold tracking-[0.2em] uppercase text-[#E8A04E] mb-4">— Our Story</div>
          <h1 className="font-display font-light text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight max-w-4xl">
            Centurion's most <em className="italic font-medium text-[#E8A04E]">trusted</em> renovation team.
          </h1>
          <p className="mt-6 text-lg text-white/70 max-w-2xl">
            Based in Olievenhoutbosch, Deskab Projects brings together skilled artisans across 10 trades — delivering quality renovation and construction work throughout Centurion and Gauteng.
          </p>
          <div className="mt-5 flex flex-wrap items-center gap-4 text-white/50 text-sm">
            <div className="flex items-center gap-2"><MapPin className="w-4 h-4 text-[#E8A04E]" /> Olievenhoutbosch, Centurion, 0187, South Africa</div>
            <span>·</span>
            <div className="flex items-center gap-2"><Mail className="w-4 h-4 text-[#E8A04E]" />
              <a href="mailto:info@deskabprojects.co.za" className="hover:text-white transition-colors">info@deskabprojects.co.za</a>
            </div>
          </div>
        </div>
      </section>

      {/* About Story */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <img
                src="/images/painting4.jpeg"
                alt="Deskab Projects work"
                className="rounded-2xl shadow-2xl w-full object-cover aspect-[4/5]"
              />
            </div>
            <div>
              <div className="text-xs font-semibold tracking-[0.2em] uppercase text-[#B8651B] mb-4">— Deskab Projects</div>
              <h2 className="font-display text-3xl md:text-4xl font-semibold mb-5 text-[#1F1611]">Built on trust, craftsmanship, and community.</h2>
              <p className="text-[#7A6B5E] leading-relaxed mb-4">
                Deskab Projects was founded with a simple mission: give homeowners and businesses in Centurion access to skilled, honest, and reliable building and renovation services — all under one company.
              </p>
              <p className="text-[#7A6B5E] leading-relaxed mb-4">
                Too many clients had been burned by fly-by-night contractors who disappear mid-project, overcharge, or deliver substandard work. We set out to be different — clear quotes, fixed pricing, on-time delivery, and guaranteed workmanship.
              </p>
              <p className="text-[#7A6B5E] leading-relaxed mb-6">
                From our base in Olievenhoutbosch, we've grown our team to cover all 10 major renovation trades — meaning you get one accountable company managing every aspect of your project from start to finish.
              </p>

              {/* Official Registration & Tax Box */}
              <div className="p-5 bg-[#FAF6F0] rounded-xl border border-[#E8DDD0] space-y-2">
                <div className="text-xs font-semibold uppercase tracking-wider text-[#B8651B] flex items-center gap-1.5 mb-2">
                  <FileText className="w-4 h-4 text-[#B8651B]" />
                  <span>Registered & Tax Compliant Business</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-[#1F1611]">
                  <div><strong className="text-[#7A6B5E] font-medium">Company Reg:</strong> 2025/575475/07</div>
                  <div><strong className="text-[#7A6B5E] font-medium">Tax Ref:</strong> 9765578191</div>
                </div>
                <div className="text-xs text-[#7A6B5E] pt-1">
                  Email: <a href="mailto:info@deskabprojects.co.za" className="text-[#B8651B] font-semibold hover:underline">info@deskabprojects.co.za</a>
                </div>
              </div>
            </div>
          </div>

          {/* Services We Do */}
          <div className="mt-20">
            <div className="text-center mb-14">
              <div className="text-xs font-semibold tracking-[0.2em] uppercase text-[#B8651B] mb-4">— Our Services</div>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-[#1F1611]">10 trades, one team, one promise.</h2>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-5 gap-4">
              {[
                'Painting', 'Tiling', 'Wooden Floors', 'Ceilings & Cornices', 'Drywalling',
                'Carpentry', 'Plumbing', 'Electrical', 'Building', 'Solar Installation'
              ].map((service, i) => (
                <div key={i} className="card p-5 text-center">
                  <div className="w-10 h-10 rounded-full bg-[#B8651B]/10 flex items-center justify-center mx-auto mb-3">
                    <span className="text-[#B8651B] font-bold text-sm">{String(i + 1).padStart(2, '0')}</span>
                  </div>
                  <div className="font-semibold text-sm text-[#1F1611]">{service}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Company Timeline */}
          <div className="mt-24">
            <div className="text-center mb-16">
              <div className="text-xs font-semibold tracking-[0.2em] uppercase text-[#B8651B] mb-4">— Our Journey</div>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-[#1F1611]">How we got here</h2>
            </div>
            <div className="relative pl-8 space-y-12 border-l-2 border-[#E8DDD0] ml-4 md:ml-0">
              {[
                { year: '2017', title: 'First Project', desc: 'Started with a small painting and tiling team serving clients in Olievenhoutbosch and the greater Centurion area.' },
                { year: '2019', title: 'Expanded to 5 Trades', desc: 'Added carpentry, drywalling, and electrical to our service offering — now handling full renovation contracts.' },
                { year: '2021', title: 'Solar Division Launched', desc: 'Established our solar installation team as load shedding began affecting every household in Gauteng.' },
                { year: '2023', title: 'Full 10-Trade Capability', desc: 'Achieved full 10-trade capability covering every major renovation and construction discipline under one brand.' },
                { year: '2025', title: '350+ Projects Completed', desc: 'Serving 350+ happy clients across Centurion, Pretoria, and Midrand with a 4.9/5 satisfaction rating.' }
              ].map((item, idx) => (
                <div key={idx} className="relative pl-6">
                  <div className="absolute -left-[33px] top-1 w-4 h-4 rounded-full bg-[#B8651B] border-4 border-[#FAF6F0]" />
                  <div className="font-display text-xl font-bold text-[#B8651B] mb-1">{item.year}</div>
                  <h3 className="font-display text-xl font-semibold mb-2 text-[#1F1611]">{item.title}</h3>
                  <p className="text-[#7A6B5E] leading-relaxed text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-[#F2E8DA] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <div className="text-xs font-semibold tracking-[0.2em] uppercase text-[#B8651B] mb-4">— What We Believe</div>
            <h2 className="font-display font-light text-4xl md:text-5xl leading-[1.05] tracking-tight text-[#1F1611]">
              Three principles, non-negotiable.
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="card p-8">
              <Award className="w-10 h-10 text-[#B8651B] mb-5" />
              <h3 className="font-display text-2xl font-semibold mb-3 text-[#1F1611]">Quality Over Speed</h3>
              <p className="text-[#7A6B5E] leading-relaxed text-sm">
                We will never rush a job to move on to the next one. Every surface prepared correctly, every fixture installed true. If it's not right, we fix it — no charge.
              </p>
            </div>
            <div className="card p-8">
              <Heart className="w-10 h-10 text-[#B8651B] mb-5" />
              <h3 className="font-display text-2xl font-semibold mb-3 text-[#1F1611]">Honest Pricing</h3>
              <p className="text-[#7A6B5E] leading-relaxed text-sm">
                You get a detailed written quote before we start. No hidden extras, no surprises on invoice day. What we quote is what you pay — unless you change the scope.
              </p>
            </div>
            <div className="card p-8">
              <ShieldCheck className="w-10 h-10 text-[#B8651B] mb-5" />
              <h3 className="font-display text-2xl font-semibold mb-3 text-[#1F1611]">Guaranteed Workmanship</h3>
              <p className="text-[#7A6B5E] leading-relaxed text-sm">
                We guarantee all our work. If something isn't right within the warranty period, we come back and fix it. Full stop. That's the Deskab Projects promise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center">
        <h2 className="font-display text-3xl font-semibold mb-4 text-[#1F1611]">Ready to start your project?</h2>
        <p className="text-[#7A6B5E] mb-8 max-w-md mx-auto">Get a free, no-obligation quote for your renovation, building, or solar project.</p>
        <button onClick={() => setCurrentPage('contact')} className="btn-primary">
          Get Free Quote
          <ArrowRight className="w-4 h-4" />
        </button>
      </section>
    </div>
  );
}
