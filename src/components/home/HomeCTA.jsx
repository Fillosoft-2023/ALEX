import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Phone, Mail, ShieldCheck } from 'lucide-react';
import { companyData } from '@/data/companyData';

export default function HomeCTA() {
  return (
    <section className="relative w-full bg-teal-deep text-white py-16 sm:py-24 overflow-hidden">
      {/* Background architectural image overlay */}
      <div className="absolute inset-0 z-0 opacity-15 mix-blend-overlay">
        <Image
          src="/buildings-bg.jpg"
          alt="Healthcare infrastructure architecture"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
      </div>

      {/* Decorative gradient glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-forest/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-sage/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
        
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-sage text-xs font-semibold tracking-wide">
          <ShieldCheck className="w-4 h-4 text-coral-accent" />
          <span>Turnkey Engineering &bull; Architecture &bull; Commissioning</span>
        </div>

        <div className="space-y-4 max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
            Planning a Hospital or Upgrading Your Healthcare Facility?
          </h2>
          <p className="text-base sm:text-lg text-ivory/85 leading-relaxed font-normal">
            Let&apos;s discuss your infrastructure requirements and identify the right solutions for your project. From initial concept drawings to final OT certification, our engineering team is here to support you.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-xl text-sm font-bold text-teal-deep bg-ivory hover:bg-white shadow-float transition-all duration-200 group"
          >
            <span>Request a Project Consultation</span>
            <ArrowRight className="ml-2.5 w-4 h-4 text-coral-accent group-hover:translate-x-1 transition-transform" />
          </Link>

          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-xl text-sm font-bold text-white bg-white/10 hover:bg-white/20 border border-white/30 backdrop-blur-sm transition-all duration-200"
          >
            <span>Contact Our Team</span>
          </Link>
        </div>

        {/* Direct Phone / Email row */}
        <div className="pt-6 border-t border-white/15 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs sm:text-sm text-ivory/80">
          <a 
            href={`tel:${companyData.contact.phoneRaw}`}
            className="flex items-center space-x-2 hover:text-coral-accent transition-colors"
          >
            <Phone className="w-4 h-4 text-coral-accent" />
            <span>Direct Call: <strong className="text-white">{companyData.contact.phoneDisplay}</strong></span>
          </a>
          <span className="hidden sm:inline text-white/30">&bull;</span>
          <a 
            href={`mailto:${companyData.contact.email}`}
            className="flex items-center space-x-2 hover:text-coral-accent transition-colors"
          >
            <Mail className="w-4 h-4 text-coral-accent" />
            <span>Email: <strong className="text-white">{companyData.contact.email}</strong></span>
          </a>
        </div>

      </div>
    </section>
  );
}
