'use client';

import { useRef, useState } from 'react';
import { 
  Layers, 
  ShieldAlert, 
  Workflow, 
  MapPinned, 
  CheckCircle2, 
  Compass, 
  Activity, 
  FileCheck2,
  Building,
  Sparkles
} from 'lucide-react';
import { motion, useScroll, useSpring, MotionConfig } from 'framer-motion';

export default function WhyAlexHealthcare() {
  const sectionRef = useRef(null);
  const [hoveredPillar, setHoveredPillar] = useState(0);

  // Scroll progress for the connected engineering line
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start 80%', 'end 25%']
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 24,
    restDelta: 0.001
  });

  const pillars = [
    {
      num: '01',
      icon: Layers,
      phase: 'Phase I // Unified Contract',
      title: 'Integrated Infrastructure Solutions',
      subtitle: 'Unified Accountability',
      desc: 'We bring civil engineering, cleanroom modular OTs, medical gas pipelines, and life-safety systems under a single contract. Eliminates costly blame-shifting between fragmented subcontractors.',
      spec: 'Single EPC Accountability'
    },
    {
      num: '02',
      icon: ShieldAlert,
      phase: 'Phase II // Clinical Protocols',
      title: 'Healthcare-Focused Engineering',
      subtitle: 'Life-Safety & Infection Control',
      desc: 'Our installations are designed exclusively around medical protocols—strict positive-pressure cascades, laminar air filtration, medical grade degreased copper lines, and emergency utility redundancy.',
      spec: 'HTM 02-01 & ISO Class 7'
    },
    {
      num: '03',
      icon: Workflow,
      phase: 'Phase III // Regulatory Readiness',
      title: 'Coordinated Planning to Commissioning',
      subtitle: 'Clinical Handover Readiness',
      desc: 'From architectural floorplans to final biomedical calibration and municipal Fire NOC filings, our project directors ensure zero delays between building handover and hospital opening.',
      spec: 'Commissioning & NOC'
    },
    {
      num: '04',
      icon: MapPinned,
      phase: 'Phase IV // Regional Execution',
      title: 'Regional Knowledge & Client Delivery',
      subtitle: 'Northeast India Mastery',
      desc: 'Based in Guwahati with 6+ years of on-ground regional experience navigating local terrain, supply chain logistics, seismic design considerations, and statutory health directorate frameworks.',
      spec: 'Seismic Zone V Certified'
    }
  ];

  return (
    <MotionConfig reducedMotion="user">
      <section 
        ref={sectionRef} 
        className="relative w-full bg-gradient-to-b from-[#d2e5d8] via-[#c6ded0] to-[#d2e5d8] text-[#1c3832] py-16 sm:py-24 border-b border-[#174F49]/25 overflow-hidden"
      >
      {/* 1. Subtle Architectural Blueprint Background Grid & Schematic */}
      <div className="absolute inset-0 pointer-events-none select-none z-0 overflow-hidden" aria-hidden="true">
        
        {/* Fine Architectural CAD Drafting Grid */}
        <div 
          className="absolute inset-0 opacity-[0.45]"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(23, 79, 73, 0.08) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(23, 79, 73, 0.08) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}
        />

        {/* Diagonal CAD cross-markers at grid intersections */}
        <div 
          className="absolute inset-0 opacity-[0.25]"
          style={{
            backgroundImage: `radial-gradient(circle at 20px 20px, rgba(23, 79, 73, 0.25) 1.5px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
        />

        {/* Subtle Hospital Floor-Plan Architectural Stroke Illustration with Dynamic Hover Highlighting */}
        <svg 
          className="absolute right-[-4%] top-12 w-[680px] h-[520px] stroke-[#174F49] opacity-[0.25] hidden lg:block transition-all duration-500"
          viewBox="0 0 700 500" 
          fill="none" 
          strokeWidth="1.25"
        >
          {/* Main surgical block boundary (Phase 0) */}
          <rect 
            x="50" y="40" width="580" height="400" 
            strokeDasharray="6 4"
            stroke={hoveredPillar === 0 ? '#ffca28' : '#174F49'} 
            strokeWidth={hoveredPillar === 0 ? 2 : 1.25}
            fill={hoveredPillar === 0 ? 'rgba(255, 202, 40, 0.08)' : 'none'}
            className="transition-all duration-300"
          />
          
          {/* Modular OT Suite 1 (Phase 1) */}
          <rect 
            x="70" y="60" width="220" height="180" 
            stroke={hoveredPillar === 1 ? '#ffca28' : '#174F49'}
            strokeWidth={hoveredPillar === 1 ? 2.5 : 1.25}
            fill={hoveredPillar === 1 ? 'rgba(255, 202, 40, 0.15)' : 'none'}
            className="transition-all duration-300"
          />
          <line x1="70" y1="120" x2="110" y2="120" />
          <circle cx="180" cy="150" r="30" strokeDasharray="3 3" stroke={hoveredPillar === 1 ? '#ffca28' : '#174F49'} />
          <path d="M 180 130 L 180 170 M 160 150 L 200 150" stroke={hoveredPillar === 1 ? '#ffca28' : '#174F49'} />
          <text x="80" y="80" fill={hoveredPillar === 1 ? '#d97706' : '#174F49'} fontSize="10" fontFamily="monospace" fontWeight="bold" letterSpacing="1.5">OT SUITE 01 [LAMINAR]</text>

          {/* Sterile Scrub Airlock */}
          <rect 
            x="310" y="60" width="140" height="90" 
            stroke={hoveredPillar === 2 ? '#ffca28' : '#174F49'}
            strokeWidth={hoveredPillar === 2 ? 2 : 1.25}
            fill={hoveredPillar === 2 ? 'rgba(255, 202, 40, 0.12)' : 'none'}
            className="transition-all duration-300"
          />
          <text x="320" y="80" fill={hoveredPillar === 2 ? '#d97706' : '#174F49'} fontSize="9" fontFamily="monospace">SCRUB AIRLOCK</text>

          {/* MGPS Gas Manifold Riser Duct */}
          <rect 
            x="310" y="165" width="140" height="75" strokeWidth="1.5" 
            stroke={hoveredPillar === 1 ? '#ffca28' : '#174F49'}
            fill={hoveredPillar === 1 ? 'rgba(255, 202, 40, 0.12)' : 'none'}
            className="transition-all duration-300"
          />
          <text x="320" y="185" fill={hoveredPillar === 1 ? '#d97706' : '#174F49'} fontSize="9" fontFamily="monospace">MGPS RISER DUCT</text>
          <line x1="320" y1="205" x2="430" y2="205" strokeDasharray="4 2" />

          {/* ICU Telemetry Bay (Phase 2) */}
          <rect 
            x="470" y="60" width="140" height="180" 
            stroke={hoveredPillar === 2 ? '#ffca28' : '#174F49'}
            strokeWidth={hoveredPillar === 2 ? 2.5 : 1.25}
            fill={hoveredPillar === 2 ? 'rgba(255, 202, 40, 0.15)' : 'none'}
            className="transition-all duration-300"
          />
          <text x="480" y="80" fill={hoveredPillar === 2 ? '#d97706' : '#174F49'} fontSize="9" fontFamily="monospace" fontWeight="bold">ICU TELEMETRY</text>
          <rect x="490" y="100" width="40" height="25" strokeDasharray="2 2" stroke={hoveredPillar === 2 ? '#ffca28' : '#174F49'} />
          <rect x="550" y="100" width="40" height="25" strokeDasharray="2 2" stroke={hoveredPillar === 2 ? '#ffca28' : '#174F49'} />
          <rect x="490" y="145" width="40" height="25" strokeDasharray="2 2" stroke={hoveredPillar === 2 ? '#ffca28' : '#174F49'} />
          <rect x="550" y="145" width="40" height="25" strokeDasharray="2 2" stroke={hoveredPillar === 2 ? '#ffca28' : '#174F49'} />

          {/* Sterile Corridor */}
          <line x1="70" y1="260" x2="610" y2="260" strokeWidth="1.5" />
          <line x1="70" y1="300" x2="610" y2="300" strokeWidth="1.5" />
          <text x="260" y="285" fill="#174F49" fontSize="10" fontFamily="monospace" letterSpacing="3">STERILE AIR CASCADE CORRIDOR &rarr;</text>

          {/* Recovery & Clean Core (Phase 3) */}
          <rect 
            x="70" y="320" width="280" height="100" 
            stroke={hoveredPillar === 3 ? '#ffca28' : '#174F49'}
            strokeWidth={hoveredPillar === 3 ? 2 : 1.25}
            fill={hoveredPillar === 3 ? 'rgba(255, 202, 40, 0.12)' : 'none'}
            className="transition-all duration-300"
          />
          <text x="80" y="340" fill={hoveredPillar === 3 ? '#d97706' : '#174F49'} fontSize="9" fontFamily="monospace">PACU / RECOVERY WARD</text>

          <rect 
            x="370" y="320" width="240" height="100" 
            stroke={hoveredPillar === 3 ? '#ffca28' : '#174F49'}
            strokeWidth={hoveredPillar === 3 ? 2 : 1.25}
            fill={hoveredPillar === 3 ? 'rgba(255, 202, 40, 0.12)' : 'none'}
            className="transition-all duration-300"
          />
          <text x="380" y="340" fill={hoveredPillar === 3 ? '#d97706' : '#174F49'} fontSize="9" fontFamily="monospace">CLEAN UTILITY &amp; PHARMACY</text>
        </svg>

        {/* Ambient atmospheric organic glow */}
        <div className="absolute top-10 left-10 w-96 h-96 rounded-full bg-[#174F49]/10 blur-3xl" />
        <div className="absolute bottom-10 right-10 w-[30rem] h-[30rem] rounded-full bg-[#ffca28]/15 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 2. Asymmetrical Editorial Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end mb-12 sm:mb-16">
          
          {/* Left Column (Editorial Headline) */}
          <motion.div 
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 space-y-3.5"
          >
            {/* Technical Label */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-[#174F49]/20 text-[#174F49] text-xs font-mono font-bold tracking-widest uppercase shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              <span>Engineering Advantage</span>
            </div>

            {/* Large Editorial Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold text-[#174F49] tracking-tight leading-[1.18] font-serif">
              Why Healthcare Providers Choose Alex Healthcare System
            </h2>
          </motion.div>

          {/* Right Column (Asymmetric Context & Technical Standards) */}
          <motion.div 
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 space-y-4 lg:pl-4 border-l-2 border-[#174F49]/25"
          >
            <p className="text-sm sm:text-base text-[#1c3832]/85 leading-relaxed font-lora">
              Constructing a hospital is unlike any other commercial building project. Precision engineering, statutory life-safety, and clinical patient outcomes dictate every design and installation decision.
            </p>

            {/* Key Clinical Standards Ribbon */}
            <div className="flex flex-wrap items-center gap-2 pt-1 text-[11px] font-mono font-semibold text-[#174F49]">
              <span className="bg-white px-2.5 py-1 rounded-full border border-[#174F49]/20 shadow-2xs">
                NABH &amp; NBC 2016
              </span>
              <span className="bg-white px-2.5 py-1 rounded-full border border-[#174F49]/20 shadow-2xs">
                HTM 02-01 MGPS
              </span>
              <span className="bg-white px-2.5 py-1 rounded-full border border-[#174F49]/20 shadow-2xs">
                ISO Class 7 Cleanrooms
              </span>
            </div>
          </motion.div>

        </div>

        {/* 3. Connected Engineering Sequence Architecture */}
        <div className="relative">

          {/* Animated Connecting Engineering Pipeline Line (Desktop) */}
          <div className="hidden lg:block absolute top-[72px] left-[6%] right-[6%] pointer-events-none z-0" aria-hidden="true">
            <svg className="w-full h-8 overflow-visible" viewBox="0 0 1000 32" preserveAspectRatio="none">
              <defs>
                <linearGradient id="whySequenceGrad" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#174F49" stopOpacity="0.4" />
                  <stop offset="35%" stopColor="#ffca28" stopOpacity="0.9" />
                  <stop offset="70%" stopColor="#174F49" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#D76D4C" stopOpacity="1" />
                </linearGradient>
              </defs>

              {/* Faint Guide Track */}
              <line 
                x1="0" y1="16" x2="1000" y2="16" 
                stroke="rgba(23, 79, 73, 0.2)" 
                strokeWidth="2" 
                strokeDasharray="6 4" 
              />

              {/* Active Scroll-Driven Connecting Conduit Line */}
              <motion.line 
                x1="0" y1="16" x2="1000" y2="16" 
                stroke="url(#whySequenceGrad)" 
                strokeWidth="2.5" 
                style={{ pathLength: smoothProgress }}
              />

              {/* Station Junction Nodes with Dynamic Active States */}
              <circle cx="125" cy="16" r={hoveredPillar === 0 ? 8 : 4.5} fill={hoveredPillar === 0 ? '#ffca28' : '#174F49'} className="transition-all duration-300" />
              <circle cx="375" cy="16" r={hoveredPillar === 1 ? 8 : 4.5} fill={hoveredPillar === 1 ? '#ffca28' : '#174F49'} className="transition-all duration-300" />
              <circle cx="625" cy="16" r={hoveredPillar === 2 ? 8 : 4.5} fill={hoveredPillar === 2 ? '#ffca28' : '#174F49'} className="transition-all duration-300" />
              <circle cx="875" cy="16" r={hoveredPillar === 3 ? 8 : 5} fill={hoveredPillar === 3 ? '#ffca28' : '#D76D4C'} className="transition-all duration-300" />
            </svg>
          </div>

          {/* 4 Capabilities Grid (Staggered Entrance & Interactive Showcase) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6 relative z-10">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              const isHovered = hoveredPillar === idx;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.7,
                    delay: idx * 0.12,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                  whileHover={{ y: -6 }}
                  onMouseEnter={() => setHoveredPillar(idx)}
                  tabIndex={0}
                  role="article"
                  aria-label={`${pillar.num}: ${pillar.title}`}
                  className={`group relative bg-white rounded-2xl p-6 sm:p-7 border transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#174F49] ${
                    isHovered 
                      ? 'border-amber-400 shadow-elevated ring-2 ring-amber-400/40 -translate-y-1.5' 
                      : 'border-[#174F49]/20 shadow-card hover:border-[#174F49]/40'
                  }`}
                >
                  {/* Top Reveal Accent Line */}
                  <div className={`absolute top-0 left-0 right-0 h-1 transition-colors duration-300 ${
                    isHovered ? 'bg-amber-400' : 'bg-[#174F49]/15'
                  }`} />

                  {/* Modern Ambient Bioluminescent Glow on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/0 via-teal-400/10 to-amber-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  {/* Upper Section */}
                  <div>
                    {/* Header Row: Sequential Oversized Number + Restrained Icon */}
                    <div className="flex items-center justify-between mb-5">
                      <span className={`text-3xl sm:text-4xl font-extrabold font-mono transition-colors duration-300 select-none ${
                        isHovered ? 'text-amber-500' : 'text-[#174F49]/35'
                      }`}>
                        {pillar.num}
                      </span>

                      {/* Technical Icon Container */}
                      <div className={`w-11 h-11 rounded-xl transition-all duration-300 flex items-center justify-center shadow-xs ${
                        isHovered ? 'bg-teal-deep text-white scale-110' : 'bg-[#174F49]/10 text-[#174F49]'
                      }`}>
                        <Icon className="w-5 h-5 text-current" />
                      </div>
                    </div>

                    {/* Phase Specifier Tag */}
                    <div className="text-[10px] font-mono font-bold tracking-wider uppercase text-[#174F49]/60 mb-1.5">
                      {pillar.phase}
                    </div>

                    {/* Subtitle */}
                    <div className="text-xs font-bold uppercase tracking-wider text-[#d97706] mb-2 font-jost">
                      {pillar.subtitle}
                    </div>

                    {/* Capability Title */}
                    <h3 className="text-lg sm:text-xl font-bold text-[#174F49] mb-3 leading-snug font-serif">
                      {pillar.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-[#1c3832]/80 leading-relaxed font-lora">
                      {pillar.desc}
                    </p>
                  </div>

                  {/* Bottom Metadata & Verified Capability Indicator */}
                  <div className="pt-4 mt-6 border-t border-[#174F49]/10 flex items-center justify-between">
                    <div className="flex items-center space-x-1.5 text-xs font-semibold text-[#174F49] font-jost">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                      <span>Verified Standard</span>
                    </div>

                    <span className="text-[10px] font-mono text-[#174F49]/70 uppercase tracking-wider font-semibold">
                      {pillar.spec}
                    </span>
                  </div>

                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
    </MotionConfig>
  );
}

