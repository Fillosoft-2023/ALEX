'use client';

import { Star, Quote, Building2, CheckCircle2, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { testimonialsData } from '@/data/testimonialsData';

export default function TestimonialsSection() {
  return (
    <section className="relative w-full bg-gradient-to-b from-[#d6e9dd] via-[#cce2d3] to-[#d6e9dd] py-16 sm:py-24 border-b border-[#1b5b4a]/25 overflow-hidden">
      
      {/* Decorative Blueprint CAD Grid & Ambient Lighting */}
      <div className="absolute inset-0 pointer-events-none select-none z-0 overflow-hidden" aria-hidden="true">
        <div 
          className="absolute inset-0 opacity-[0.38]"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(23, 79, 73, 0.12) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(23, 79, 73, 0.12) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}
        />
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[350px] bg-teal-deep/12 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-[#c8b082]/20 rounded-full blur-3xl pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 text-[11px] font-bold uppercase tracking-widest text-teal-deep bg-white border border-teal-deep/20 px-3.5 py-1 rounded-full shadow-xs">
            <Sparkles className="w-3 h-3 text-coral-accent" />
            <span className="font-jost">Client Endorsements &bull; Verified Testimonials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-charcoal-green tracking-tight font-serif">
            Trusted by Hospital Leaders Across Northeast India
          </h2>
          <p className="text-sm sm:text-base text-charcoal-green/80 leading-relaxed font-lora">
            Verified feedback from hospital directors, medical superintendents, and healthcare administrators on healthcare project execution, MGPS reliability, and clinical compliance.
          </p>
        </div>

        {/* 3 Testimonial Luxury Editorial Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonialsData.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.65, delay: idx * 0.12, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6 }}
              className="group relative bg-white rounded-3xl p-7 sm:p-8 border border-teal-deep/20 shadow-card hover:shadow-float hover:border-teal-deep transition-all duration-300 flex flex-col justify-between gpu-accelerate overflow-hidden cursor-default"
            >
              {/* Top Golden Shimmer Accent Line */}
              <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#c8b082] to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Corner Architectural Ticks */}
              <div className="absolute top-2.5 left-2.5 w-2 h-2 border-t border-l border-amber-500/50" />
              <div className="absolute top-2.5 right-2.5 w-2 h-2 border-t border-r border-amber-500/50" />
              <div className="absolute bottom-2.5 left-2.5 w-2 h-2 border-b border-l border-amber-500/50" />
              <div className="absolute bottom-2.5 right-2.5 w-2 h-2 border-b border-r border-amber-500/50" />

              <div className="space-y-5">
                {/* 5-star rating and quote icon */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-500 drop-shadow-xs" />
                    ))}
                  </div>
                  <div className="w-9 h-9 rounded-xl bg-teal-deep/5 flex items-center justify-center">
                    <Quote className="w-4 h-4 text-teal-deep/60" />
                  </div>
                </div>

                {/* Quote Text in Cormorant Garamond */}
                <p className="text-base sm:text-lg text-charcoal-green/90 leading-relaxed italic font-cormorant font-medium">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              {/* Author & Facility Details */}
              <div className="pt-5 mt-6 border-t border-teal-deep/10 flex items-start space-x-3.5">
                <div className="w-11 h-11 rounded-2xl bg-teal-deep text-white font-bold flex items-center justify-center flex-shrink-0 text-sm shadow-xs font-mono ring-2 ring-amber-400/30">
                  {item.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div className="space-y-0.5">
                  <div className="font-bold text-sm text-charcoal-green font-serif">{item.name}</div>
                  <div className="text-xs text-charcoal-green/70 font-lora">{item.title}</div>
                  <div className="text-xs font-semibold text-teal-deep flex items-center space-x-1 font-jost pt-0.5">
                    <Building2 className="w-3.5 h-3.5 text-coral-accent" />
                    <span>{item.organization}, {item.location}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
