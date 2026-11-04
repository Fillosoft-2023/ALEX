'use client';

import { useState, useMemo } from 'react';
import { Plus, Minus, HelpCircle, ArrowRight, Search, X, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { faqData } from '@/data/faqData';

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = useMemo(() => {
    return ['all', 'Project Execution', 'Compliance & Safety', 'Services'];
  }, []);

  const filteredFaqs = useMemo(() => {
    return faqData.filter((item) => {
      const matchesSearch = 
        item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.answer.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesCategory = 
        activeCategory === 'all' || item.category === activeCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, activeCategory]);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="w-full bg-gradient-to-b from-[#d5e7dc] via-[#cae1d2] to-[#d5e7dc] py-16 sm:py-24 border-b border-[#1b5b4a]/25 relative overflow-hidden">
      
      {/* Decorative Blueprint CAD Grid Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.35] pointer-events-none select-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(23, 79, 73, 0.12) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(23, 79, 73, 0.12) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
        aria-hidden="true" 
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-teal-deep bg-white/95 border border-teal-deep/20 px-3.5 py-1.5 rounded-full inline-flex items-center space-x-1.5 shadow-2xs font-jost">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            <span>Frequently Asked Questions &bull; Direct Answers</span>
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-charcoal-green tracking-tight font-serif">
            Frequently Asked Project Questions
          </h2>
          <p className="text-sm sm:text-base text-charcoal-green/80 leading-relaxed font-lora">
            Verified answers regarding our healthcare infrastructure capabilities, project execution model, and regional service coverage.
          </p>
        </div>

        {/* Live Search and Category Filter Controls */}
        <div className="space-y-4 mb-8">
          {/* Interactive Search Input */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-teal-deep/60" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search questions (e.g. 'NABH', 'timelines', 'cost', 'MGPS')..."
              className="w-full pl-11 pr-10 py-3.5 rounded-2xl bg-white border border-teal-deep/20 text-charcoal-green text-sm placeholder:text-charcoal-green/50 shadow-card focus:outline-none focus:ring-2 focus:ring-teal-deep transition-all"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-teal-deep/10 text-teal-deep flex items-center justify-center hover:bg-teal-deep hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Category Filter Chips */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  className={`text-xs font-bold px-3.5 py-1.5 rounded-full transition-all cursor-pointer font-jost uppercase tracking-wider ${
                    isActive
                      ? 'bg-teal-deep text-white shadow-sm scale-105'
                      : 'bg-white/80 hover:bg-white text-charcoal-green/80 border border-teal-deep/20'
                  }`}
                >
                  {cat === 'all' ? 'All Questions' : cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Accordion List with Framer Motion AnimatePresence */}
        <div className="space-y-4">
          <AnimatePresence>
            {filteredFaqs.length === 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="p-8 text-center bg-white/90 rounded-2xl border border-teal-deep/20 text-charcoal-green space-y-2"
              >
                <p className="font-bold text-base font-serif">No matching questions found.</p>
                <p className="text-xs text-charcoal-green/70 font-lora">Try adjusting your search terms or ask our project engineers directly.</p>
                <button
                  type="button"
                  onClick={() => { setSearchQuery(''); setActiveCategory('all'); }}
                  className="mt-2 text-xs font-bold text-teal-deep hover:underline"
                >
                  Reset filters
                </button>
              </motion.div>
            ) : (
              filteredFaqs.map((item, index) => {
                const isOpen = openIndex === index;
                return (
                  <motion.div
                    key={index}
                    layout
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white rounded-2xl border border-teal-deep/20 overflow-hidden shadow-card hover:shadow-elevated transition-all duration-200"
                  >
                    <button
                      type="button"
                      onClick={() => toggle(index)}
                      className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 focus:outline-none focus:ring-2 focus:ring-teal-deep/30 transition-colors hover:bg-sage/10 cursor-pointer"
                      aria-expanded={isOpen}
                    >
                      <span className="font-bold text-base sm:text-lg text-charcoal-green flex items-start space-x-3.5 font-serif">
                        <span className="text-xs font-extrabold font-mono text-white bg-teal-deep px-2.5 py-1 rounded-md mt-0.5">
                          0{index + 1}
                        </span>
                        <span className="leading-snug">{item.question}</span>
                      </span>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-200 ${
                        isOpen ? 'bg-teal-deep text-white shadow-xs' : 'bg-sage/60 text-charcoal-green'
                      }`}>
                        {isOpen ? (
                          <Minus className="w-4 h-4 text-amber-300" />
                        ) : (
                          <Plus className="w-4 h-4" />
                        )}
                      </div>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-6 sm:px-7 sm:pb-7 pt-0 text-xs sm:text-sm text-charcoal-green/85 leading-relaxed border-t border-teal-deep/10 bg-ivory/20 font-lora">
                            <p className="pt-4">{item.answer}</p>
                            <div className="pt-3 flex items-center justify-between text-[11px] font-mono text-teal-deep font-semibold">
                              <span>Standard: HTM 02-01 &bull; NABH</span>
                              <span className="text-amber-700">{item.category}</span>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })
            )}
          </AnimatePresence>
        </div>

        {/* Still Have Questions Box */}
        <div className="mt-12 p-6 sm:p-7 rounded-2xl bg-white border border-teal-deep/20 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-5 shadow-elevated">
          <div className="space-y-1">
            <h3 className="font-bold text-base text-charcoal-green font-serif">Have a specific hospital requirement not listed here?</h3>
            <p className="text-xs sm:text-sm text-charcoal-green/75 font-lora">Our project engineering team is available for in-person or virtual consultations across Northeast India.</p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center space-x-2 font-bold text-xs text-white bg-teal-deep hover:bg-teal-dark px-6 py-3.5 rounded-full shadow-sm hover:shadow-md transition-all flex-shrink-0 font-jost uppercase tracking-wider"
          >
            <span>Ask Our Engineers</span>
            <ArrowRight className="w-3.5 h-3.5 text-amber-400" />
          </Link>
        </div>

      </div>
    </section>
  );
}
