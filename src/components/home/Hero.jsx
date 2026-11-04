'use client';

import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, ChevronRight } from 'lucide-react';
import CountingNumber from '@/components/ui/CountingNumber';
import HeroTypewriter from '@/components/home/HeroTypewriter';
import ConsultationModuleBox from '@/components/home/ConsultationModuleBox';

const HeroStatsNumbers = ({ className = '' }) => (
  <div className={`grid grid-cols-3 gap-3 sm:gap-6 text-white ${className}`}>
    <div className="space-y-0.5">
      <div className="text-2xl sm:text-3xl font-extrabold text-emerald-300 tracking-tight">
        <CountingNumber target={6} duration={1200} suffix="+" />
      </div>
      <div className="text-[10px] sm:text-xs text-white/75 font-medium leading-tight">Years Experience</div>
    </div>
    <div className="space-y-0.5 border-l border-emerald-500/20 pl-3 sm:pl-6">
      <div className="text-2xl sm:text-3xl font-extrabold text-emerald-300 tracking-tight">
        <CountingNumber target={30} duration={1400} suffix="+" />
      </div>
      <div className="text-[10px] sm:text-xs text-white/75 font-medium leading-tight">Completed Projects</div>
    </div>
    <div className="space-y-0.5 border-l border-emerald-500/20 pl-3 sm:pl-6">
      <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
        <CountingNumber target={100} duration={1500} suffix="+" />
      </div>
      <div className="text-[10px] sm:text-xs text-white/75 font-medium leading-tight">Ongoing Projects</div>
    </div>
  </div>
);


export default function Hero() {
  const videoRef = useRef(null);
  const sectionRef = useRef(null);
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

  useEffect(() => {
    // Attempt auto-play when component mounts
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative w-full min-h-screen h-screen flex items-center overflow-hidden bg-charcoal-green text-white pt-24 pb-12 sm:pt-28 sm:pb-16 border-b border-teal-deep/20"
    >
      {/* Full Screen Background Video Layer */}
      <div className="absolute inset-0 z-0 overflow-hidden w-full h-full">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          poster="/video-thumb.jpg"
          preload="metadata"
          className="absolute inset-0 w-full h-full object-cover object-center"
        >
          <source src="/NEW.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Directional Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-transparent to-black/60 pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column (Instant Rendering) */}
          <div className="lg:col-span-7 xl:col-span-6 space-y-6 max-w-xl">
            
            {/* Top Verified Badge */}
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-emerald-950/60 backdrop-blur-md border border-emerald-500/30 text-white text-xs font-semibold tracking-wide shadow-subtle gpu-accelerate">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400" />
              </span>
              <span className="font-jost tracking-wider uppercase text-[11px] text-white/90">
                Integrated Healthcare Infrastructure Partner &bull; Northeast India
              </span>
            </div>

            {/* Main Editorial Headline with continuous typewriter loop */}
            <h1 className="text-3xl sm:text-4xl lg:text-[3.35rem] font-medium text-white tracking-tight leading-[1.18] sm:leading-[1.2] drop-shadow-md relative font-cormorant min-h-[3.6em] sm:min-h-[3em]">
              {/* Soft atmospheric ambient glow behind the title */}
              <span className="absolute -top-8 -left-8 w-72 h-36 bg-gradient-to-r from-teal-deep/40 via-forest/30 to-emerald-500/20 blur-3xl pointer-events-none -z-10 animate-floatSlow" aria-hidden="true" />
              
              <HeroTypewriter />
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-base text-white/85 leading-relaxed font-lora max-w-lg drop-shadow-sm">
              Comprehensive hospital planning, civil engineering, ISO cleanroom modular operating theatres, and certified medical gas pipelines across Northeast India.
            </p>

            {/* Action CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-1">
              <button
                type="button"
                onClick={() => setIsConsultationOpen(true)}
                className="relative inline-flex items-center justify-center px-7 py-3.5 rounded-full text-sm font-bold text-white bg-forest hover:bg-forest-dark shadow-float hover:shadow-elevated transition-all duration-300 group cursor-pointer border border-forest-light/40"
              >
                <span>Discuss Your Project</span>
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1.5 transition-transform text-white" />
              </button>

              <Link
                href="/projects"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-full text-sm font-bold text-white bg-emerald-950/40 hover:bg-emerald-900/60 backdrop-blur-md border border-emerald-500/30 shadow-sm transition-all duration-200 hover:border-emerald-400/50"
              >
                <span>Explore Our Projects</span>
                <ChevronRight className="ml-1.5 w-4 h-4 text-white/80" />
              </Link>
            </div>

            {/* Stats Numbers directly rendered without card backgrounds or borders */}
            <div className="pt-2">
              <HeroStatsNumbers />
            </div>

          </div>

          {/* Right Column: Floating Interactive Glass Telemetry HUD Cards */}
          <div className="hidden lg:flex lg:col-span-5 xl:col-span-6 flex-col items-end justify-center space-y-4 pointer-events-none pr-4">
            
            {/* HUD Card 1: Live Status */}
            <div className="relative p-4 rounded-3xl bg-gradient-to-br from-emerald-950/80 via-teal-950/70 to-slate-950/80 backdrop-blur-2xl border border-emerald-500/35 shadow-[0_12px_36px_rgba(6,78,59,0.4)] text-left space-y-1 w-64 transform hover:scale-105 transition-all duration-300 pointer-events-auto animate-floatSlow overflow-hidden">
              <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent pointer-events-none" />
              <div className="flex items-center justify-between text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-400">
                <span className="flex items-center space-x-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block" />
                  <span>Execution Desk</span>
                </span>
                <span className="text-emerald-200/70">LIVE // GH-01</span>
              </div>
              <div className="text-xs font-bold text-white font-serif drop-shadow-sm">Guwahati Technical HQ</div>
              <div className="text-[10px] text-white/75 font-mono">Immediate Site Readiness Review</div>
            </div>

            {/* HUD Card 2: Regulatory Benchmark */}
            <div className="relative p-4 rounded-3xl bg-gradient-to-br from-emerald-950/80 via-teal-950/70 to-slate-950/80 backdrop-blur-2xl border border-emerald-500/35 shadow-[0_12px_36px_rgba(6,78,59,0.4)] text-left space-y-1 w-72 transform hover:scale-105 transition-all duration-300 pointer-events-auto animate-floatSlowReverse overflow-hidden">
              <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent pointer-events-none" />
              <div className="flex items-center justify-between text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-300">
                <span>Compliance Benchmark</span>
                <span className="text-emerald-200/70">NABH &bull; NBC 2016</span>
              </div>
              <div className="text-xs font-bold text-white font-serif drop-shadow-sm">ISO Class 7 &amp; HTM 02-01 Certified</div>
              <div className="text-[10px] text-white/75 font-mono">Pressure Cascades &bull; Medical Degreased Copper</div>
            </div>

            {/* HUD Card 3: Bed Capacity Milestone */}
            <div className="relative p-4 rounded-3xl bg-gradient-to-br from-emerald-950/80 via-teal-950/70 to-slate-950/80 backdrop-blur-2xl border border-emerald-500/35 shadow-[0_12px_36px_rgba(6,78,59,0.4)] text-left space-y-1 w-64 transform hover:scale-105 transition-all duration-300 pointer-events-auto animate-floatSlow overflow-hidden">
              <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent pointer-events-none" />
              <div className="flex items-center justify-between text-[10px] font-mono font-bold uppercase tracking-wider text-teal-300">
                <span>Facility Scale</span>
                <span className="text-emerald-200/70">3100+ BEDS</span>
              </div>
              <div className="text-xs font-bold text-white font-serif drop-shadow-sm">Multi-Speciality Hospital EPC</div>
              <div className="text-[10px] text-white/75 font-mono">3,100+ Cumulative Bed Capacity</div>
            </div>

          </div>

        </div>
      </div>

      {/* Floating Animated Downward Scroll Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 hidden md:flex flex-col items-center space-y-1 text-white/75 select-none pointer-events-none">
        <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-300/90 font-bold">
          Explore Disciplines
        </span>
        <div className="w-5 h-9 rounded-full border-2 border-emerald-500/40 flex items-start justify-center p-1">
          <div className="w-1.5 h-2 rounded-full bg-emerald-400 animate-bounce" />
        </div>
      </div>

      {/* Consultation Form Module Box */}
      <ConsultationModuleBox
        isOpenExternal={isConsultationOpen}
        onCloseExternal={() => setIsConsultationOpen(false)}
      />
    </section>
  );
}
