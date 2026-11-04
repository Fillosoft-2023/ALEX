import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ShieldCheck, MapPin, Sparkles, CheckCircle2 } from 'lucide-react';
import ProjectsGrid from '@/components/projects/ProjectsGrid';

export const metadata = {
  title: 'Verified Projects Portfolio | Alex Healthcare System',
  description: 'Explore completed hospital construction projects, modular OT installations, medical gas pipeline networks, and ICU setups across Northeast India by Alex Healthcare System.',
};

export default function ProjectsPage() {
  return (
    <div className="w-full bg-[#faf9f5]">
      
      {/* 1. Page Hero with Blueprint CAD Grid & Ambient Halos */}
      <section className="relative w-full bg-charcoal-green text-white pt-28 pb-16 sm:pt-36 sm:pb-24 overflow-hidden border-b border-teal-deep/20">
        <div className="absolute inset-0 z-0 opacity-20 mix-blend-luminosity pointer-events-none">
          <Image
            src="/heroa-bg.jpg"
            alt="Alex Healthcare System completed projects portfolio"
            fill
            priority
            className="object-cover object-center animate-kenburns"
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal-green via-charcoal-green/95 to-charcoal-green/80 z-0" />

        {/* Blueprint CAD Drafting Grid Overlay */}
        <div 
          className="absolute inset-0 opacity-[0.2] pointer-events-none z-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(200, 176, 130, 0.15) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(200, 176, 130, 0.15) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}
          aria-hidden="true"
        />

        {/* Atmospheric Floating Glow Halos */}
        <div className="absolute -top-16 -left-16 w-[550px] h-[550px] bg-teal-deep/40 rounded-full blur-3xl pointer-events-none animate-floatSlow" />
        <div className="absolute -bottom-16 right-0 w-[500px] h-[500px] bg-coral-accent/15 rounded-full blur-3xl pointer-events-none animate-floatSlowReverse" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 anim-view">
          <div className="max-w-3xl space-y-5">
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-xs font-semibold tracking-wide backdrop-blur-md shadow-subtle">
              <span className="w-2 h-2 rounded-full bg-coral-accent animate-pulse" />
              <span className="font-jost uppercase tracking-widest text-[11px] text-sage">Verified Healthcare Infrastructure Portfolio</span>
            </div>
            
            <h1 className="text-3xl sm:text-5xl lg:text-[3.25rem] font-extrabold tracking-tight leading-[1.2] font-serif text-white">
              Hospital Infrastructure Projects Across Northeast India
            </h1>
            
            <p className="text-base sm:text-lg text-ivory/85 leading-relaxed font-lora max-w-2xl">
              From landmark multi-speciality hospitals to critical cleanroom modular OTs, explore verified case studies showcasing engineering precision, timely delivery, and operational clinical compliance.
            </p>

            <div className="flex flex-wrap items-center gap-2 pt-2 text-xs font-mono text-sage">
              <span className="bg-white/10 px-3 py-1.5 rounded-lg border border-white/15 backdrop-blur-xs flex items-center space-x-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-coral-accent" />
                <span>30+ Completed | 100+ Ongoing</span>
              </span>
              <span className="bg-white/10 px-3 py-1.5 rounded-lg border border-white/15 backdrop-blur-xs flex items-center space-x-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-coral-accent" />
                <span>Zero Gas Pressure Leaks</span>
              </span>
              <span className="bg-white/10 px-3 py-1.5 rounded-lg border border-white/15 backdrop-blur-xs flex items-center space-x-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-coral-accent" />
                <span>3100+ Bed Scale</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Interactive Projects Filter & Grid */}
      <section className="relative w-full py-16 sm:py-24 border-b border-teal-deep/15 overflow-hidden">
        {/* Subtle CAD grid */}
        <div 
          className="absolute inset-0 opacity-[0.25] pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(23, 79, 73, 0.08) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(23, 79, 73, 0.08) 1px, transparent 1px)
            `,
            backgroundSize: '36px 36px'
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 anim-view">
          <ProjectsGrid />
        </div>
      </section>

      {/* 3. Bottom Consultation CTA */}
      <section className="relative w-full bg-teal-deep text-white py-16 sm:py-24 text-center overflow-hidden">
        <div className="absolute inset-0 bg-blueprint-grid opacity-15 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-coral-accent/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 relative z-10 anim-view">
          <span className="text-xs font-bold uppercase tracking-widest text-teal-deep bg-white border border-teal-deep/20 px-3.5 py-1.5 rounded-full font-jost shadow-xs">
            Guwahati Engineering Office
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-serif tracking-tight leading-tight">
            Planning a Healthcare Infrastructure Project?
          </h2>
          <p className="text-sm sm:text-base text-ivory/85 max-w-2xl mx-auto font-lora">
            Our engineering team in Guwahati is ready to review your project scope, facility layouts, and equipment requirements.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center space-x-2.5 px-8 py-4 rounded-full text-sm font-bold text-charcoal-green bg-gradient-to-r from-amber-300 via-amber-200 to-amber-400 hover:from-amber-400 hover:to-amber-500 transition-all shadow-float hover:shadow-elevated font-jost uppercase tracking-wider"
            >
              <span>Request a Project Estimate</span>
              <ArrowRight className="w-4 h-4 text-charcoal-green" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
