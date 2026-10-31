import Link from 'next/link';
import { Star, Quote, Building2, CheckCircle2 } from 'lucide-react';
import { testimonialsData } from '@/data/testimonialsData';

export default function TestimonialsSection() {
  return (
    <section className="w-full bg-sage/25 py-16 sm:py-24 border-b border-teal-deep/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-teal-deep bg-sage/60 px-3.5 py-1.5 rounded-full">
            Client Endorsements
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-charcoal-green tracking-tight">
            Trusted by Hospital Leaders Across Northeast India
          </h2>
          <p className="text-sm sm:text-base text-charcoal-green/75 leading-relaxed">
            Verified feedback from hospital directors, medical superintendents, and healthcare administrators on project execution, MGPS reliability, and compliance.
          </p>
        </div>

        {/* 3 Testimonial Editorial Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-6 lg:gap-8">
          {testimonialsData.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-7 border border-teal-deep/15 shadow-subtle hover:shadow-card transition-all duration-200 flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* 5-star rating and quote icon */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-coral-accent text-coral-accent" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-sage/70" />
                </div>

                {/* Quote Text */}
                <p className="text-xs sm:text-sm text-charcoal-green/85 leading-relaxed italic">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              {/* Author & Facility Details */}
              <div className="pt-5 mt-6 border-t border-teal-deep/10 flex items-start space-x-3">
                <div className="w-10 h-10 rounded-full bg-teal-deep/10 text-teal-deep font-bold flex items-center justify-center flex-shrink-0 text-sm">
                  {item.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <div className="font-bold text-sm text-charcoal-green">{item.name}</div>
                  <div className="text-xs text-charcoal-green/70">{item.title}</div>
                  <div className="text-xs font-semibold text-teal-deep mt-0.5 flex items-center space-x-1">
                    <Building2 className="w-3 h-3 text-forest" />
                    <span>{item.organization}, {item.location}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
