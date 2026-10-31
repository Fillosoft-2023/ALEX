'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Phone, MessageSquare, X, ArrowRight } from 'lucide-react';
import { companyData } from '@/data/companyData';

export default function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end space-y-3">
      {/* Expandable Quick Card */}
      {isOpen && (
        <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-float border border-teal-deep/20 p-5 w-80 mb-2 animate-in fade-in slide-in-from-bottom-4 duration-200">
          <div className="flex items-center justify-between pb-3 border-b border-teal-deep/10">
            <div className="flex items-center space-x-2">
              <span className="w-2.5 h-2.5 rounded-full bg-forest animate-pulse"></span>
              <span className="text-xs font-bold uppercase tracking-wider text-teal-deep">Project Inquiry Desk</span>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-md text-charcoal-green/60 hover:text-charcoal-green"
              aria-label="Close inquiry window"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="py-3 space-y-2">
            <p className="text-xs text-charcoal-green/80 leading-relaxed">
              Planning a new hospital or upgrading OT / MGPS infrastructure? Speak directly with our engineering team:
            </p>

            <a
              href={`tel:${companyData.contact.phoneRaw}`}
              className="flex items-center justify-between p-3 rounded-xl bg-sage/30 hover:bg-sage/50 border border-teal-deep/10 transition-colors group"
            >
              <div className="flex items-center space-x-2.5">
                <Phone className="w-4 h-4 text-forest" />
                <div>
                  <div className="text-[10px] text-charcoal-green/60 font-medium">Direct Line</div>
                  <div className="text-xs font-bold text-teal-deep">{companyData.contact.phoneDisplay}</div>
                </div>
              </div>
              <ArrowRight className="w-3.5 h-3.5 text-coral-accent group-hover:translate-x-1 transition-transform" />
            </a>

            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="w-full flex items-center justify-center py-2.5 px-3 rounded-xl text-xs font-bold text-white bg-teal-deep hover:bg-teal-dark transition-all shadow-sm"
            >
              <span>Submit Project Requirements</span>
            </Link>
          </div>

          <div className="pt-2 text-[10px] text-charcoal-green/60 text-center">
            Guwahati Head Office: Mon–Fri, 9am–6pm
          </div>
        </div>
      )}

      {/* Floating Action Buttons */}
      <div className="flex items-center space-x-2">
        <a
          href={`tel:${companyData.contact.phoneRaw}`}
          aria-label="Call Alex Healthcare System"
          className="sm:hidden flex items-center justify-center w-12 h-12 rounded-full bg-forest text-white shadow-elevated active:scale-95 transition-transform"
        >
          <Phone className="w-5 h-5" />
        </a>

        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Open project inquiry assistant"
          aria-expanded={isOpen}
          className="flex items-center space-x-2.5 bg-teal-deep text-white px-4 py-3 rounded-full shadow-float hover:bg-teal-dark active:scale-95 transition-all duration-200 border border-white/20"
        >
          <MessageSquare className="w-4 h-4 text-coral-accent" />
          <span className="text-xs font-bold tracking-wide">Quick Inquiry</span>
        </button>
      </div>
    </div>
  );
}
