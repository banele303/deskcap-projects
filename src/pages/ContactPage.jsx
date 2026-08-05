import React, { useState } from 'react';
import { Phone, Mail, MapPin, ArrowRight, ShieldAlert, MessageSquare, FileText } from 'lucide-react';

export default function ContactPage({ showToast }) {
  const [formData, setFormData] = useState({
    name: '', phone: '', email: '', service: '', area: '', message: '', consent: false
  });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setFormData({ name: '', phone: '', email: '', service: '', area: '', message: '', consent: false });
      showToast('Enquiry sent — we\'ll be in touch within 48 hours.');
    }, 1500);
  };

  return (
    <div className="min-h-screen pt-20">

      {/* Header */}
      <section className="pt-24 pb-20 bg-[#1F1611] text-white relative overflow-hidden grain-overlay">
        <div className="glow-orb w-96 h-96 bg-[#B8651B] -top-40 right-0 opacity-30"></div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-xs font-semibold tracking-[0.2em] uppercase text-[#E8A04E] mb-4">— Get In Touch</div>
          <h1 className="font-display font-light text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight max-w-3xl">
            Let's start your <em className="italic font-medium text-[#E8A04E]">project</em>.
          </h1>
          <p className="mt-6 text-lg text-white/70 max-w-2xl">
            Tell us about your renovation, building, or solar project. We'll respond within 48 hours with next steps and a free site visit booking.
          </p>
        </div>
      </section>

      {/* Form & Contact Info */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">

            {/* Form */}
            <div className="lg:col-span-3">
              <form onSubmit={handleSubmit} className="card p-8 lg:p-10 space-y-5">
                <div>
                  <h2 className="font-display text-2xl font-semibold mb-2 text-[#1F1611]">Request your free quote</h2>
                  <p className="text-sm text-[#7A6B5E]">The more detail you share, the better we can prepare for your site visit.</p>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold tracking-wide uppercase text-[#7A6B5E] mb-2">Full Name *</label>
                    <input type="text" required value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="form-input" placeholder="Jane Dlamini" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold tracking-wide uppercase text-[#7A6B5E] mb-2">Phone *</label>
                    <input type="tel" required value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="form-input" placeholder="+27 82 000 0000" />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold tracking-wide uppercase text-[#7A6B5E] mb-2">Email *</label>
                  <input type="email" required value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="form-input" placeholder="jane@example.co.za" />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold tracking-wide uppercase text-[#7A6B5E] mb-2">Service Needed *</label>
                    <select required value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="form-input">
                      <option value="">Select a service…</option>
                      <option>Painting</option>
                      <option>Tiling</option>
                      <option>Wooden Floors</option>
                      <option>Ceilings &amp; Cornices</option>
                      <option>Drywalling</option>
                      <option>Carpentry</option>
                      <option>Plumbing</option>
                      <option>Electrical</option>
                      <option>Building / Extensions</option>
                      <option>Solar Installation</option>
                      <option>Multiple Services</option>
                      <option>Other / Not sure yet</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold tracking-wide uppercase text-[#7A6B5E] mb-2">Area / Suburb</label>
                    <input type="text" value={formData.area}
                      onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                      className="form-input" placeholder="Olievenhoutbosch, Centurion…" />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold tracking-wide uppercase text-[#7A6B5E] mb-2">Project Details</label>
                  <textarea rows={5} value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="form-input"
                    placeholder="Describe your project — size, current state, what you'd like done, preferred timeline…" />
                </div>

                <div className="flex items-start gap-3">
                  <input type="checkbox" id="consent" required checked={formData.consent}
                    onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                    className="mt-1 w-4 h-4 accent-[#B8651B]" />
                  <label htmlFor="consent" className="text-xs text-[#7A6B5E] leading-relaxed">
                    I agree to be contacted about my enquiry by Deskab Projects. We never share your details with third parties.
                  </label>
                </div>

                <button type="submit" disabled={submitting} className="btn-primary w-full justify-center">
                  {submitting ? (
                    <><span className="spinner"></span><span>Sending…</span></>
                  ) : (
                    <><span>Send My Enquiry</span><ArrowRight className="w-4 h-4" /></>
                  )}
                </button>
              </form>
            </div>

            {/* Sidebar Contact Info */}
            <div className="lg:col-span-2 space-y-5">
              <div className="card p-6">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-lg bg-[#B8651B]/10 flex items-center justify-center flex-shrink-0 text-[#B8651B]">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold tracking-wide uppercase text-[#7A6B5E] mb-1">Email Us</div>
                    <a href="mailto:info@deskabprojects.co.za" className="text-[#1F1611] font-semibold hover:text-[#B8651B] transition-colors break-all text-sm">
                      info@deskabprojects.co.za
                    </a>
                    <div className="text-xs text-[#7A6B5E] mt-1">We reply within 48 hours</div>
                  </div>
                </div>
              </div>

              <div className="card p-6">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-lg bg-[#B8651B]/10 flex items-center justify-center flex-shrink-0 text-[#B8651B]">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold tracking-wide uppercase text-[#7A6B5E] mb-1">Company Details</div>
                    <div className="text-[#1F1611] font-semibold text-sm">Reg: 2025/575475/07</div>
                    <div className="text-[#1F1611] font-semibold text-sm">Tax: 9765578191</div>
                    <div className="text-xs text-[#7A6B5E] mt-1">Registered &amp; Tax Compliant</div>
                  </div>
                </div>
              </div>

              <div className="card p-6">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-lg bg-[#B8651B]/10 flex items-center justify-center flex-shrink-0 text-[#B8651B]">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold tracking-wide uppercase text-[#7A6B5E] mb-1">Our Base</div>
                    <div className="text-[#1F1611] font-semibold">Olievenhoutbosch</div>
                    <div className="text-[#1F1611]">Centurion, 0187</div>
                    <div className="text-[#1F1611]">Gauteng, South Africa</div>
                    <div className="text-xs text-[#7A6B5E] mt-1">Serving Centurion, Pretoria &amp; Midrand</div>
                  </div>
                </div>
              </div>

              <div className="card p-6">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-lg bg-[#B8651B]/10 flex items-center justify-center flex-shrink-0 text-[#B8651B]">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold tracking-wide uppercase text-[#7A6B5E] mb-1">WhatsApp</div>
                    <a
                      href="https://wa.me/27747404229?text=Hi%20Deskab%20Projects%2C%20I%27d%20like%20a%20quote%20for..."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#1F1611] font-semibold hover:text-[#B8651B] transition-colors"
                    >
                      Chat on WhatsApp
                    </a>
                    <div className="text-xs text-[#7A6B5E] mt-1">Quick response · Mon–Sat 7:00–18:00</div>
                  </div>
                </div>
              </div>

              <div className="card p-6 bg-[#1F1611] text-white border-[#3D2F25]">
                <div className="text-xs font-semibold tracking-wide uppercase text-[#E8A04E] mb-2 flex items-center gap-1.5">
                  <ShieldAlert className="w-4 h-4 text-[#E8A04E]" />
                  <span>Emergency Services</span>
                </div>
                <div className="font-display text-xl font-semibold mb-2">Burst Pipe? Electrical Fault?</div>
                <p className="text-sm text-white/70 mb-4">
                  For plumbing emergencies (burst pipes, blocked drains) or electrical faults — contact us for urgent response across Centurion and Pretoria.
                </p>
                <a href="mailto:info@deskabprojects.co.za" className="text-[#E8A04E] font-semibold text-sm flex items-center gap-2 hover:gap-3 transition-all">
                  info@deskabprojects.co.za
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>

              {/* Service Area Map Placeholder */}
              <div className="card p-6 bg-[#F2E8DA]">
                <div className="text-xs font-semibold tracking-wide uppercase text-[#B8651B] mb-3">Service Area</div>
                <div className="rounded-xl overflow-hidden h-40 bg-[#1F1611] flex items-center justify-center relative">
                  <img src="/images/house-remodeling.jpeg" alt="Centurion area" className="w-full h-full object-cover opacity-40" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                    <MapPin className="w-8 h-8 text-[#E8A04E] mb-2" />
                    <div className="font-semibold text-sm">Centurion & Pretoria</div>
                    <div className="text-xs text-white/60">Gauteng, South Africa</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
