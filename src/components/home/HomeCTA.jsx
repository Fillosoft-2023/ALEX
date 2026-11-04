'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Phone, Mail, ShieldCheck, Sparkles, Clock, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { companyData } from '@/data/companyData';

export default function HomeCTA() {
  return (
    <section className="relative w-full bg-charcoal-green text-white py-16 sm:py-24 overflow-hidden border-b border-teal-deep/20">
      
      {/* Background Architectural Blueprint Image & Overlay */}
      <div className="absolute inset-0 z-0 opacity-20 mix-blend-luminosity pointer-events-none">
        <Image
          src="/buildings-bg.jpg"
          alt="Healthcare infrastructure architecture"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
      </div>

      {/* Blueprint CAD Drafting Grid Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.25] pointer-events-none z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(200, 176, 130, 0.15) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(200, 176, 130, 0.15) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
        aria-hidden="true" 
      />

      {/* Atmospheric Concentric Sonar Pulse Animation */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] pointer-events-none z-0 opacity-20">
        <div className="absolute inset-0 rounded-full border border-amber-400/40 animate-ping duration-1000" style={{ animationDuration: '4s' }} />
        <div className="absolute inset-16 rounded-full border border-teal-deep/40 animate-pulse duration-700" />
        <div className="absolute inset-36 rounded-full border border-amber-400/30" />
      </div>

      {/* Atmospheric Floating Ambient Glows */}
      <div className="absolute -top-16 right-1/4 w-[500px] h-[500px] bg-teal-deep/40 rounded-full blur-3xl pointer-events-none animate-floatSlow" />
      <div className="absolute -bottom-16 left-10 w-[450px] h-[450px] bg-amber-400/15 rounded-full blur-3xl pointer-events-none animate-floatSlowReverse" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
        
        {/* Top Verified Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-xs font-semibold tracking-wide backdrop-blur-md shadow-subtle"
        >
          <ShieldCheck className="w-4 h-4 text-amber-400" />
          <span className="font-jost uppercase tracking-widest text-[11px] text-amber-200">
            End-to-End Hospital Engineering &bull; Architecture &bull; Commissioning
          </span>
        </motion.div>

        {/* Headline & Subtitle */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, delay: 0.1 }}
          className="space-y-4 max-w-3xl mx-auto"
        >
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight font-serif text-white">
            Planning a Hospital or Upgrading Your Healthcare Facility?
          </h2>
          <p className="text-base sm:text-lg text-ivory/85 leading-relaxed font-lora">
            Let&apos;s evaluate your infrastructure parameters and develop an itemized architectural roadmap. From concept drawings to final OT particle certification, our Guwahati engineering team is at your service.
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2"
        >
          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-full text-sm font-bold text-charcoal-green bg-gradient-to-r from-amber-300 via-amber-200 to-amber-400 hover:from-amber-400 hover:to-amber-500 shadow-float hover:shadow-elevated transition-all duration-300 group border border-amber-300 font-jost uppercase tracking-wider cursor-pointer"
          >
            <span>Request a Project Consultation</span>
            <ArrowRight className="ml-2.5 w-4 h-4 text-charcoal-green group-hover:translate-x-1.5 transition-transform" />
          </Link>

          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-full text-sm font-bold text-white bg-white/10 hover:bg-white/20 border border-white/30 backdrop-blur-md transition-all duration-200 hover:border-white/50 font-jost uppercase tracking-wider cursor-pointer"
          >
            <span>Direct Engineering Desk</span>
          </Link>
        </motion.div>

        {/* Direct Contact & Live Status Row */}
        <div className="pt-8 border-t border-white/15 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs sm:text-sm text-ivory/85">
          <div className="flex items-center space-x-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400" />
            </span>
            <span className="font-jost uppercase tracking-wider text-[11px] text-emerald-300 font-bold">
              Engineering Desk Active &bull; Guwahati HQ
            </span>
          </div>

          <span className="hidden sm:inline text-white/30">&bull;</span>

          <a 
            href={`tel:${companyData.contact.phoneRaw}`}
            className="flex items-center space-x-2 hover:text-coral-accent transition-colors font-mono"
          >
            <Phone className="w-4 h-4 text-coral-accent" />
            <span>Direct Call: <strong className="text-white">{companyData.contact.phoneDisplay}</strong></span>
          </a>

          <span className="hidden sm:inline text-white/30">&bull;</span>

          <a 
            href={`mailto:${companyData.contact.email}`}
            className="flex items-center space-x-2 hover:text-coral-accent transition-colors font-mono"
          >
            <Mail className="w-4 h-4 text-coral-accent" />
            <span>Email: <strong className="text-white">{companyData.contact.email}</strong></span>
          </a>
        </div>

      </div>
    </section>
  );
}
