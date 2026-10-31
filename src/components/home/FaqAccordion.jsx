'use client';

import { useState } from 'react';
import { Plus, Minus, HelpCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { faqData } from '@/data/faqData';

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="w-full bg-ivory py-16 sm:py-24 border-b border-teal-deep/10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-teal-deep bg-sage/60 px-3.5 py-1.5 rounded-full inline-flex items-center space-x-1.5">
            <HelpCircle className="w-3.5 h-3.5 text-forest" />
            <span>Frequently Asked Questions</span>
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-charcoal-green tracking-tight">
            Frequently Asked Project Questions
          </h2>
          <p className="text-sm sm:text-base text-charcoal-green/75 leading-relaxed">
            Verified answers regarding our healthcare infrastructure capabilities, turnkey delivery model, and regional service coverage.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl border border-teal-deep/15 overflow-hidden shadow-subtle transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  className="w-full text-left p-6 sm:p-7 flex items-center justify-between gap-4 focus:outline-none focus:ring-2 focus:ring-teal-deep/30 transition-colors hover:bg-ivory/50"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span className="font-bold text-base sm:text-lg text-charcoal-green flex items-start space-x-3">
                    <span className="text-xs font-extrabold text-teal-deep bg-sage/50 px-2 py-0.5 rounded mt-0.5">
                      0{index + 1}
                    </span>
                    <span className="leading-snug">{item.question}</span>
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-200 ${
                    isOpen ? 'bg-teal-deep text-white' : 'bg-sage/40 text-charcoal-green'
                  }`}>
                    {isOpen ? (
                      <Minus className="w-4 h-4 text-coral-accent" />
                    ) : (
                      <Plus className="w-4 h-4" />
                    )}
                  </div>
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${index}`}
                    className="px-6 pb-6 sm:px-7 sm:pb-7 pt-0 text-xs sm:text-sm text-charcoal-green/80 leading-relaxed border-t border-teal-deep/10 bg-ivory/30 animate-in fade-in duration-200"
                  >
                    <p className="pt-4">{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Have Questions Box */}
        <div className="mt-12 p-6 rounded-2xl bg-sage/40 border border-teal-deep/15 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1">
            <h3 className="font-bold text-sm text-charcoal-green">Have a specific hospital requirement not listed here?</h3>
            <p className="text-xs text-charcoal-green/75">Our project engineering team is available for in-person or virtual consultations.</p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center space-x-2 font-bold text-xs text-white bg-teal-deep hover:bg-teal-dark px-5 py-2.5 rounded-xl shadow-sm transition-all flex-shrink-0"
          >
            <span>Ask Our Engineers</span>
            <ArrowRight className="w-3.5 h-3.5 text-coral-accent" />
          </Link>
        </div>

      </div>
    </section>
  );
}
