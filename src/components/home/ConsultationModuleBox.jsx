'use client';

import { useState, useEffect, useRef } from 'react';
import { 
  X, 
  Minus, 
  Send, 
  CheckCircle2, 
  Phone, 
  ShieldCheck, 
  Building2, 
  Clock, 
  Sparkles,
  MessageSquare
} from 'lucide-react';
import { companyData } from '@/data/companyData';

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
    service: 'Turnkey Hospital Construction',
    location: ''
  });

  // Trigger on the first scroll after every page load/refresh, then unbind listeners
  useEffect(() => {
    // Clear any stale dismissal flag left by earlier versions
    if (typeof window !== 'undefined') {
      sessionStorage.removeItem('consultation_box_dismissed');
    }

    const handleScrollOrWheel = (e) => {
      if (hasTriggeredRef.current || hasDismissed) return;

      // Detect deliberate scroll action (wheel tick, touchmove, or scroll distance)
      const isScrollAction = window.scrollY > 40 || (e && Math.abs(e.deltaY) > 8);

      if (isScrollAction) {
        scrollCountRef.current += 1;

        // Show on first or second scroll gesture
        if (scrollCountRef.current >= 1) {
          hasTriggeredRef.current = true;
          setIsVisible(true);

          // Remove listeners immediately so it never triggers again while browsing
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

  // Open if triggered externally (e.g. "Discuss Your Project" button in Hero)
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

    // Simulate submission delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 700);
  };

  if (!isVisible && !hasDismissed) return null;

  // Minimized Floating Pill
  if (isMinimized && isVisible) {
    return (
      <div className="fixed bottom-6 right-6 z-50 animate-in fade-in slide-in-from-bottom-2 duration-200">
        <button
          onClick={handleMaximize}
          className="flex items-center space-x-2.5 bg-teal-deep hover:bg-teal-dark text-white px-4 py-3 rounded-full shadow-float border border-white/20 transition-all transform hover:scale-105 active:scale-95"
          aria-label="Re-open consultation form"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-coral-accent opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-coral-accent" />
          </span>
          <MessageSquare className="w-4 h-4 text-coral-accent" />
          <span className="text-xs font-bold tracking-wide">Free Consultation Form</span>
        </button>
      </div>
    );
  }

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      {/* Backdrop overlay (click to close) */}
      <div 
        className="absolute inset-0" 
        onClick={handleClose} 
        aria-hidden="true" 
      />

      <div className="relative w-full max-w-md rounded-2xl overflow-hidden shadow-2xl border border-teal-deep/20 bg-white text-charcoal-green animate-in zoom-in-95 duration-200 z-10 max-h-[92vh] overflow-y-auto">
        
        {/* Header Bar */}
        <div className="bg-charcoal-green text-white px-5 py-4 flex items-center justify-between border-b border-white/10">
          <div className="flex items-center space-x-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-coral-accent opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-coral-accent" />
            </span>
            <div>
              <div className="text-[11px] font-bold uppercase tracking-wider text-sage">
                Free Project Consultation
              </div>
            </div>
          </div>

          {/* Action buttons (Minimize & Close) */}
          <div className="flex items-center space-x-1.5 text-white/70">
            <button
              type="button"
              onClick={handleMinimize}
              className="p-1 rounded-md hover:bg-white/15 hover:text-white transition-colors"
              aria-label="Minimize consultation box"
              title="Minimize"
            >
              <Minus className="w-3.5 h-3.5" />
            </button>
            <button
              type="button"
              onClick={handleClose}
              className="p-1 rounded-md hover:bg-white/15 hover:text-white transition-colors"
              aria-label="Close consultation box"
              title="Close"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-5">
          {isSubmitted ? (
            <div className="text-center py-6 space-y-3">
              <div className="w-12 h-12 mx-auto rounded-full bg-forest/15 text-forest flex items-center justify-center">
                <CheckCircle2 className="w-7 h-7 text-forest" />
              </div>
              <h4 className="text-base font-bold text-charcoal-green">
                Consultation Request Received!
              </h4>
              <p className="text-xs text-charcoal-green/75 leading-relaxed max-w-xs mx-auto">
                Thank you, <strong className="text-charcoal-green">{formData.name || 'Doctor / Planner'}</strong>. Our senior healthcare infrastructure consultant will call you at <strong className="text-teal-deep">{formData.phone}</strong> shortly.
              </p>
              <div className="pt-2">
                <button
                  type="button"
                  onClick={handleClose}
                  className="px-4 py-2 text-xs font-semibold rounded-lg bg-teal-deep text-white hover:bg-teal-dark transition-colors"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="space-y-1">
                <p className="text-xs text-charcoal-green/75 leading-tight">
                  Discuss hospital planning, modular OTs, or MGPS with our lead engineers in Guwahati:
                </p>
              </div>

              {/* Full Name */}
              <div>
                <label className="block text-[11px] font-semibold text-charcoal-green mb-1">
                  Your Name / Designation *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="e.g. Dr. Baruah / Project Director"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 py-2 text-xs rounded-lg border border-teal-deep/20 bg-white focus:outline-none focus:ring-2 focus:ring-teal-deep text-charcoal-green placeholder:text-charcoal-green/40"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-[11px] font-semibold text-charcoal-green mb-1">
                  Phone / WhatsApp Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  placeholder="e.g. +91 98765 43210"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-3 py-2 text-xs rounded-lg border border-teal-deep/20 bg-white focus:outline-none focus:ring-2 focus:ring-teal-deep text-charcoal-green placeholder:text-charcoal-green/40"
                />
              </div>

              {/* Service Required */}
              <div>
                <label className="block text-[11px] font-semibold text-charcoal-green mb-1">
                  Infrastructure Requirement
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-3 py-2 text-xs rounded-lg border border-teal-deep/20 bg-white focus:outline-none focus:ring-2 focus:ring-teal-deep text-charcoal-green"
                >
                  <option value="Turnkey Hospital Construction">Turnkey Hospital Construction (70-100+ Beds)</option>
                  <option value="Modular Operating Theatre (OT)">Modular Operating Theatres (ISO Class 7)</option>
                  <option value="Medical Gas Pipeline System (MGPS)">Medical Gas Pipeline System (MGPS)</option>
                  <option value="ICU / Critical Care Infrastructure">ICU &amp; Critical Care Infrastructure</option>
                  <option value="Architectural & Regulatory Planning">Hospital Planning &amp; NABH Compliance</option>
                </select>
              </div>

              {/* Location */}
              <div>
                <label className="block text-[11px] font-semibold text-charcoal-green mb-1">
                  Facility Location / City
                </label>
                <input
                  type="text"
                  name="location"
                  placeholder="e.g. Guwahati, Dibrugarh, Shillong, Siliguri"
                  value={formData.location}
                  onChange={handleChange}
                  className="w-full px-3 py-2 text-xs rounded-lg border border-teal-deep/20 bg-white focus:outline-none focus:ring-2 focus:ring-teal-deep text-charcoal-green placeholder:text-charcoal-green/40"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-1.5">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-2.5 px-4 rounded-xl text-xs font-bold text-white bg-coral-accent hover:bg-coral-hover shadow-sm transition-all duration-200 flex items-center justify-center space-x-2 disabled:opacity-75 cursor-pointer"
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
              <div className="flex items-center justify-between text-[10px] text-charcoal-green/60 pt-1">
                <span className="flex items-center space-x-1">
                  <ShieldCheck className="w-3 h-3 text-forest" />
                  <span>NABH &amp; NBC Compliant</span>
                </span>
                <span className="flex items-center space-x-1">
                  <Clock className="w-3 h-3 text-forest" />
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
