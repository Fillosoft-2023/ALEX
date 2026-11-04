'use client';

import { useState, useEffect, useRef } from 'react';
import { 
  X, 
  Minus, 
  Send, 
  CheckCircle2, 
  ShieldCheck, 
  Clock, 
  MessageSquare
} from 'lucide-react';

export default function ConsultationModuleBox({ isOpenExternal, onCloseExternal }) {
  const [isVisible, setIsVisible] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [hasDismissed, setHasDismissed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const hasTriggeredRef = useRef(false);
  const scrollCountRef = useRef(0);

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'Hospital Construction & Planning (3100+ Beds Execution)',
    location: '',
    description: ''
  });

  // Trigger on first scroll after page load/refresh
  useEffect(() => {
    if (typeof window !== 'undefined') {
      sessionStorage.removeItem('consultation_box_dismissed');
    }

    const handleScrollOrWheel = (e) => {
      if (hasTriggeredRef.current || hasDismissed) return;

      const isScrollAction = window.scrollY > 40 || (e && Math.abs(e.deltaY) > 8);

      if (isScrollAction) {
        scrollCountRef.current += 1;

        if (scrollCountRef.current >= 1) {
          hasTriggeredRef.current = true;
          setIsVisible(true);

          window.removeEventListener('scroll', handleScrollOrWheel);
          window.removeEventListener('wheel', handleScrollOrWheel);
          window.removeEventListener('touchmove', handleScrollOrWheel);
        }
      }
    };

    window.addEventListener('scroll', handleScrollOrWheel, { passive: true });
    window.addEventListener('wheel', handleScrollOrWheel, { passive: true });
    window.addEventListener('touchmove', handleScrollOrWheel, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScrollOrWheel);
      window.removeEventListener('wheel', handleScrollOrWheel);
      window.removeEventListener('touchmove', handleScrollOrWheel);
    };
  }, [hasDismissed]);

  // Open if triggered externally
  useEffect(() => {
    if (isOpenExternal) {
      setIsVisible(true);
      setIsMinimized(false);
      setHasDismissed(false);
    }
  }, [isOpenExternal]);

  const handleClose = () => {
    setIsVisible(false);
    setHasDismissed(true);
    hasTriggeredRef.current = true;
    if (onCloseExternal) onCloseExternal();
  };

  const handleMinimize = () => {
    setIsMinimized(true);
  };

  const handleMaximize = () => {
    setIsMinimized(false);
    setIsVisible(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 700);
  };

  // Currently hidden from display per request
  return null;

  if (!isVisible && !hasDismissed) return null;

  // Minimized Floating Pill
  if (isMinimized && isVisible) {
    return (
      <div className="fixed bottom-6 right-6 z-50 animate-in fade-in slide-in-from-bottom-2 duration-300">
        <button
          onClick={handleMaximize}
          className="flex items-center space-x-2.5 bg-white/10 hover:bg-white/20 backdrop-blur-xl text-white px-5 py-3 rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.37)] border border-white/30 transition-all transform hover:scale-105 active:scale-95"
          aria-label="Re-open consultation form"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400" />
          </span>
          <MessageSquare className="w-4 h-4 text-emerald-300" />
          <span className="text-xs font-semibold tracking-wider uppercase font-sans text-white">Project Consultation</span>
        </button>
      </div>
    );
  }

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-md animate-in fade-in duration-300">
      {/* Backdrop overlay */}
      <div 
        className="absolute inset-0" 
        onClick={handleClose} 
        aria-hidden="true" 
      />

      {/* Pure Transparent Glassmorphism Card (Compact fixed frame, no scrollbar) */}
      <div className="relative w-full max-w-[430px] rounded-3xl overflow-hidden shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] border border-white/25 bg-white/[0.08] backdrop-blur-2xl text-white animate-in zoom-in-95 duration-200 z-10">
        
        {/* Subtle Specular Highlights */}
        <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent pointer-events-none" />
        <div className="absolute -top-20 -left-20 w-48 h-48 bg-emerald-400/15 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute -bottom-20 -right-20 w-48 h-48 bg-teal-300/15 rounded-full blur-2xl pointer-events-none" />

        {/* Header Bar */}
        <div className="relative bg-white/[0.05] backdrop-blur-md px-5 py-3.5 flex items-center justify-between border-b border-white/15">
          <div className="flex items-center space-x-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400" />
            </span>
            <div className="text-xs font-bold uppercase tracking-wider text-white flex items-center gap-1.5 font-sans drop-shadow-sm">
              <span>Free Project Consultation</span>
            </div>
          </div>

          {/* Action buttons (Minimize & Close) */}
          <div className="flex items-center space-x-1.5 text-white/80">
            <button
              type="button"
              onClick={handleMinimize}
              className="p-1 rounded-lg hover:bg-white/20 hover:text-white transition-colors"
              aria-label="Minimize consultation box"
              title="Minimize"
            >
              <Minus className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={handleClose}
              className="p-1 rounded-lg hover:bg-white/20 hover:text-white transition-colors"
              aria-label="Close consultation box"
              title="Close"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Content Body */}
        <div className="relative p-5">
          {isSubmitted ? (
            <div className="text-center py-8 space-y-3">
              <div className="w-12 h-12 mx-auto rounded-full bg-emerald-400/20 text-emerald-300 border border-emerald-400/40 flex items-center justify-center backdrop-blur-md shadow-inner">
                <CheckCircle2 className="w-7 h-7 text-emerald-300" />
              </div>
              <h4 className="text-lg font-bold text-white font-serif drop-shadow-md">
                Consultation Request Received!
              </h4>
              <p className="text-xs text-white/90 leading-relaxed max-w-xs mx-auto drop-shadow-sm">
                Thank you, <strong className="text-white">{formData.name || 'Doctor / Planner'}</strong>. Our senior healthcare infrastructure consultant will call you at <strong className="text-emerald-300">{formData.phone}</strong> shortly.
              </p>
              <div className="pt-3">
                <button
                  type="button"
                  onClick={handleClose}
                  className="px-6 py-2.5 text-xs font-semibold rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md border border-white/30 text-white shadow-float transition-all"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-2.5">
              <p className="text-[11px] text-white/85 leading-tight font-sans drop-shadow-sm">
                Discuss hospital planning, modular OTs, or MGPS with our lead engineers in Guwahati:
              </p>

              {/* Row: Full Name & Phone */}
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-[10px] font-semibold text-white/90 mb-0.5 uppercase tracking-wider font-sans drop-shadow-sm">
                    Name / Role *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="e.g. Dr. Baruah"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-2.5 py-1.5 text-xs rounded-xl border border-white/25 bg-white/[0.08] backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-emerald-400/70 text-white placeholder:text-white/45 shadow-inner transition-all"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-semibold text-white/90 mb-0.5 uppercase tracking-wider font-sans drop-shadow-sm">
                    Phone / WA *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-2.5 py-1.5 text-xs rounded-xl border border-white/25 bg-white/[0.08] backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-emerald-400/70 text-white placeholder:text-white/45 shadow-inner transition-all"
                  />
                </div>
              </div>

              {/* Row: Requirement & City */}
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-[10px] font-semibold text-white/90 mb-0.5 uppercase tracking-wider font-sans drop-shadow-sm">
                    Discipline
                  </label>
                  <div className="relative">
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-2.5 py-1.5 text-xs rounded-xl border border-white/25 bg-black/40 backdrop-blur-xl focus:outline-none focus:ring-2 focus:ring-emerald-400/70 text-white shadow-inner appearance-none transition-all cursor-pointer truncate"
                    >
                      <option value="Hospital Construction & Planning (3100+ Beds Execution)" className="bg-slate-900 text-white">
                        Hospital Planning (3100+ Beds)
                      </option>
                      <option value="Modular Operating Theatre (OT)" className="bg-slate-900 text-white">
                        Modular OTs (ISO Class 7)
                      </option>
                      <option value="Medical Gas Pipeline System (MGPS)" className="bg-slate-900 text-white">
                        MGPS Gas Pipelines
                      </option>
                      <option value="ICU / Critical Care Infrastructure" className="bg-slate-900 text-white">
                        ICU &amp; Critical Care
                      </option>
                      <option value="Architectural & Regulatory Planning" className="bg-slate-900 text-white">
                        NABH / Architectural
                      </option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white/70">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-semibold text-white/90 mb-0.5 uppercase tracking-wider font-sans drop-shadow-sm">
                    City / State
                  </label>
                  <input
                    type="text"
                    name="location"
                    placeholder="e.g. Guwahati"
                    value={formData.location}
                    onChange={handleChange}
                    className="w-full px-2.5 py-1.5 text-xs rounded-xl border border-white/25 bg-white/[0.08] backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-emerald-400/70 text-white placeholder:text-white/45 shadow-inner transition-all"
                  />
                </div>
              </div>

              {/* Project Description Field */}
              <div>
                <label className="block text-[10px] font-semibold text-white/90 mb-0.5 uppercase tracking-wider font-sans drop-shadow-sm">
                  Project Description / Specifications
                </label>
                <textarea
                  name="description"
                  rows={2}
                  placeholder="e.g. 50-bed expansion, 2 modular cleanrooms, timeline 6 months..."
                  value={formData.description}
                  onChange={handleChange}
                  className="w-full px-2.5 py-1.5 text-xs rounded-xl border border-white/25 bg-white/[0.08] backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-emerald-400/70 focus:border-white/40 text-white placeholder:text-white/45 shadow-inner transition-all resize-none leading-relaxed"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-0.5">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-2.5 px-4 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-emerald-600/80 to-teal-600/80 hover:from-emerald-500 hover:to-teal-500 backdrop-blur-md shadow-[0_8px_24px_rgba(16,185,129,0.35)] border border-white/30 transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-75 cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0"
                >
                  {isSubmitting ? (
                    <span>Submitting Request...</span>
                  ) : (
                    <>
                      <span>Request Free Consultation Call</span>
                      <Send className="w-3.5 h-3.5 text-white" />
                    </>
                  )}
                </button>
              </div>

              {/* Trust Subtext */}
              <div className="flex items-center justify-between text-[9px] text-white/80 pt-0.5 font-mono drop-shadow-sm">
                <span className="flex items-center space-x-1">
                  <ShieldCheck className="w-3 h-3 text-emerald-300" />
                  <span>NABH &amp; NBC Compliant</span>
                </span>
                <span className="flex items-center space-x-1">
                  <Clock className="w-3 h-3 text-emerald-300" />
                  <span>Direct Technical Review</span>
                </span>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
