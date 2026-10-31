'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, ChevronRight } from 'lucide-react';
import CountingNumber from '@/components/ui/CountingNumber';
import ConsultationModuleBox from '@/components/home/ConsultationModuleBox';

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

  const HeroStatsNumbers = ({ className = '' }) => (
    <div className={`grid grid-cols-3 gap-3 sm:gap-6 text-white ${className}`}>
      <div className="space-y-0.5">
        <div className="text-2xl sm:text-3xl font-extrabold text-sage tracking-tight">
          <CountingNumber target={12} duration={1800} suffix="+" />
        </div>
        <div className="text-[10px] sm:text-xs text-white/75 font-medium leading-tight">Years Heritage</div>
      </div>
      <div className="space-y-0.5 border-l border-white/20 pl-3 sm:pl-6">
        <div className="text-2xl sm:text-3xl font-extrabold text-coral-light tracking-tight">
          <CountingNumber target={250} duration={2200} suffix="+" />
        </div>
        <div className="text-[10px] sm:text-xs text-white/75 font-medium leading-tight">Completed Projects</div>
      </div>
      <div className="space-y-0.5 border-l border-white/20 pl-3 sm:pl-6">
        <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          <CountingNumber target={100} duration={2000} suffix="+" />
        </div>
        <div className="text-[10px] sm:text-xs text-white/75 font-medium leading-tight">Bed Hospital Builds</div>
      </div>
    </div>
  );

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
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover object-center"
        >
          <source src="/NEW.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Directional Gradient: Left is dark for crisp text readability; Right is 100% transparent so construction video is crystal clear */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-transparent to-black/60 pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column (Takes 7 cols on desktop): Content & Actions */}
          <div className="lg:col-span-7 xl:col-span-6 space-y-6 max-w-xl">
            
            {/* Top Verified Badge */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-white text-xs font-semibold tracking-wide shadow-subtle">
              <span className="w-2 h-2 rounded-full bg-coral-accent animate-pulse" />
              <span>Turnkey Healthcare Infrastructure Partner &bull; Northeast India</span>
            </div>

            {/* Main Editorial Headline with clean line height & glowing accent */}
            <h1 className="text-3xl sm:text-4xl lg:text-[2.85rem] font-extrabold text-white tracking-tight leading-[1.25] sm:leading-[1.28] drop-shadow-md relative">
              {/* Soft atmospheric ambient glow behind the title */}
              <span className="absolute -top-6 -left-6 w-60 h-28 bg-gradient-to-r from-coral-accent/25 via-amber-400/20 to-transparent blur-2xl pointer-events-none -z-10" aria-hidden="true" />
              
              Building the{' '}
              <span className="relative inline-block font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#ff7043] via-[#ffca28] to-[#ffa726] drop-shadow-[0_0_24px_rgba(255,167,38,0.75)] filter">
                Infrastructure
              </span>{' '}
              Behind Better Healthcare.
            </h1>

            {/* Action CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-1">
              <button
                type="button"
                onClick={() => setIsConsultationOpen(true)}
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-full text-sm font-bold text-white bg-coral-accent hover:bg-coral-hover shadow-float hover:shadow-elevated transition-all duration-200 group cursor-pointer"
              >
                <span>Discuss Your Project</span>
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform text-white" />
              </button>

              <Link
                href="/projects"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-full text-sm font-bold text-white bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/25 shadow-sm transition-all duration-200"
              >
                <span>Explore Our Projects</span>
                <ChevronRight className="ml-1.5 w-4 h-4 text-white/80" />
              </Link>
            </div>

            {/* Stats Numbers in Sleek Frosted Glass Card */}
            <div className="pt-2">
              <div className="p-3.5 sm:p-4 rounded-2xl bg-black/40 backdrop-blur-md border border-white/15 shadow-subtle">
                <HeroStatsNumbers />
              </div>
            </div>

          </div>

          {/* Right Column: 100% Open Unobstructed View of the Background Video */}
          <div className="hidden lg:block lg:col-span-5 xl:col-span-6 pointer-events-none" />

        </div>
      </div>


      {/* Consultation Form Module Box (Triggers on First Scroll from Hero or on Button Click) */}
      <ConsultationModuleBox
        isOpenExternal={isConsultationOpen}
        onCloseExternal={() => setIsConsultationOpen(false)}
      />
    </section>
  );
}

