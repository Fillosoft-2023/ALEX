'use client';

import { useRef } from 'react';
import { 
  Layers, 
  ShieldAlert, 
  Workflow, 
  MapPinned, 
  CheckCircle2, 
  Compass, 
  Activity, 
  FileCheck2,
  Building
} from 'lucide-react';
import { motion, useScroll, useSpring, MotionConfig } from 'framer-motion';

export default function WhyAlexHealthcare() {
  const sectionRef = useRef(null);

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
      spec: 'Turnkey Handover & NOC'
    },
    {
      num: '04',
      icon: MapPinned,
      phase: 'Phase IV // Regional Execution',
      title: 'Regional Knowledge & Client Delivery',
      subtitle: 'Northeast India Mastery',
      desc: 'Based in Guwahati with 12+ years of on-ground regional experience navigating local terrain, supply chain logistics, seismic design considerations, and statutory health directorate frameworks.',
      spec: 'Seismic Zone V Certified'
    }
  ];

  return (
    <MotionConfig reducedMotion="user">
      <section 
        ref={sectionRef} 
        className="relative w-full bg-[#EDF1E8] text-[#293D37] py-16 sm:py-24 border-b border-[#174F49]/15 overflow-hidden"
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

        {/* Subtle Hospital Floor-Plan Architectural Stroke Illustration */}
        <svg 
          className="absolute right-[-4%] top-12 w-[680px] h-[520px] stroke-[#174F49] opacity-[0.12] hidden lg:block"
          viewBox="0 0 700 500" 
          fill="none" 
          strokeWidth="1.25"
        >
          {/* Main surgical block boundary */}
          <rect x="50" y="40" width="580" height="400" strokeDasharray="6 4" />
          
          {/* Modular OT Suite 1 */}
          <rect x="70" y="60" width="220" height="180" />
          <line x1="70" y1="120" x2="110" y2="120" />
          <circle cx="180" cy="150" r="30" strokeDasharray="3 3" />
          <path d="M 180 130 L 180 170 M 160 150 L 200 150" />
          <text x="80" y="80" fill="#174F49" fontSize="10" fontFamily="monospace" letterSpacing="1.5">OT SUITE 01 [LAMINAR]</text>

          {/* Sterile Scrub Airlock */}
          <rect x="310" y="60" width="140" height="90" />
          <text x="320" y="80" fill="#174F49" fontSize="9" fontFamily="monospace">SCRUB AIRLOCK</text>

          {/* MGPS Gas Manifold Riser Duct */}
          <rect x="310" y="165" width="140" height="75" strokeWidth="1.5" />
          <text x="320" y="185" fill="#174F49" fontSize="9" fontFamily="monospace">MGPS RISER DUCT</text>
          <line x1="320" y1="205" x2="430" y2="205" strokeDasharray="4 2" />

          {/* ICU Telemetry Bay */}
          <rect x="470" y="60" width="140" height="180" />
          <text x="480" y="80" fill="#174F49" fontSize="9" fontFamily="monospace">ICU TELEMETRY</text>
          <rect x="490" y="100" width="40" height="25" strokeDasharray="2 2" />
          <rect x="550" y="100" width="40" height="25" strokeDasharray="2 2" />
          <rect x="490" y="145" width="40" height="25" strokeDasharray="2 2" />
          <rect x="550" y="145" width="40" height="25" strokeDasharray="2 2" />

          {/* Sterile Corridor */}
          <line x1="70" y1="260" x2="610" y2="260" strokeWidth="1.5" />
          <line x1="70" y1="300" x2="610" y2="300" strokeWidth="1.5" />
          <text x="260" y="285" fill="#174F49" fontSize="10" fontFamily="monospace" letterSpacing="3">STERILE AIR CASCADE CORRIDOR &rarr;</text>

          {/* Recovery & Clean Core */}
          <rect x="70" y="320" width="280" height="100" />
          <text x="80" y="340" fill="#174F49" fontSize="9" fontFamily="monospace">PACU / RECOVERY WARD</text>

          <rect x="370" y="320" width="240" height="100" />
          <text x="380" y="340" fill="#174F49" fontSize="9" fontFamily="monospace">CLEAN UTILITY &amp; PHARMACY</text>
        </svg>

        {/* Ambient atmospheric organic glow */}
        <div className="absolute top-10 left-10 w-96 h-96 rounded-full bg-[#174F49]/5 blur-3xl" />
        <div className="absolute bottom-10 right-10 w-[30rem] h-[30rem] rounded-full bg-[#D76D4C]/8 blur-3xl" />
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
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#174F49]/10 border border-[#174F49]/20 text-[#174F49] text-xs font-mono font-bold tracking-widest uppercase">
              <Compass className="w-3.5 h-3.5 text-[#D76D4C]" />
              <span>Engineering Advantage</span>
            </div>

            {/* Large Editorial Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold text-[#293D37] tracking-tight leading-[1.18]">
              Why Healthcare Providers Choose Alex Healthcare System
            </h2>
          </motion.div>

          {/* Right Column (Asymmetric Context & Technical Standards) */}
          <motion.div 
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 space-y-4 lg:pl-4 border-l-2 border-[#174F49]/20"
          >
            <p className="text-sm sm:text-base text-[#293D37]/85 leading-relaxed font-normal">
              Constructing a hospital is unlike any other commercial building project. Precision engineering, statutory life-safety, and clinical patient outcomes dictate every design and installation decision.
            </p>

            {/* Key Clinical Standards Ribbon */}
            <div className="flex flex-wrap items-center gap-2 pt-1 text-[11px] font-mono font-semibold text-[#174F49]">
              <span className="bg-white/80 px-2.5 py-1 rounded border border-[#174F49]/15">
                NABH &amp; NBC 2016
              </span>
              <span className="bg-white/80 px-2.5 py-1 rounded border border-[#174F49]/15">
                HTM 02-01 MGPS
              </span>
              <span className="bg-white/80 px-2.5 py-1 rounded border border-[#174F49]/15">
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
                  <stop offset="0%" stopColor="#174F49" stopOpacity="0.3" />
                  <stop offset="35%" stopColor="#174F49" stopOpacity="0.8" />
                  <stop offset="70%" stopColor="#293D37" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#D76D4C" stopOpacity="1" />
                </linearGradient>
              </defs>

              {/* Faint Guide Track */}
              <line 
                x1="0" y1="16" x2="1000" y2="16" 
                stroke="rgba(23, 79, 73, 0.18)" 
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

              {/* Station Junction Nodes */}
              <circle cx="125" cy="16" r="4.5" fill="#174F49" />
              <circle cx="375" cy="16" r="4.5" fill="#174F49" />
              <circle cx="625" cy="16" r="4.5" fill="#293D37" />
              <circle cx="875" cy="16" r="5" fill="#D76D4C" />
            </svg>
          </div>

          {/* 4 Capabilities Grid (Staggered Entrance & Interactive Showcase) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6 relative z-10">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
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
                  tabIndex={0}
                  role="article"
                  aria-label={`${pillar.num}: ${pillar.title}`}
                  className="group relative bg-[#F7F9F5] rounded-2xl p-6 sm:p-7 border border-[#174F49]/15 shadow-subtle hover:border-[#174F49] hover:shadow-float transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-default focus:outline-none focus:ring-2 focus:ring-[#174F49]"
                >
                  {/* Top Reveal Accent Line (Terracotta #D76D4C on hover) */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-[#174F49]/10 group-hover:bg-[#D76D4C] transition-colors duration-300" />

                  {/* Upper Section */}
                  <div>
                    {/* Header Row: Sequential Oversized Number + Restrained Icon */}
                    <div className="flex items-center justify-between mb-5">
                      {/* Oversized Number in Architectural Styling */}
                      <span className="text-3xl sm:text-4xl font-extrabold font-mono text-[#174F49]/35 group-hover:text-[#D76D4C] transition-colors duration-300 select-none">
                        {pillar.num}
                      </span>

                      {/* Technical Icon Container */}
                      <div className="w-11 h-11 rounded-xl bg-[#174F49]/10 text-[#174F49] group-hover:bg-[#174F49] group-hover:text-white transition-all duration-300 flex items-center justify-center shadow-xs">
                        <Icon className="w-5 h-5 text-current group-hover:scale-110 transition-transform duration-300" />
                      </div>
                    </div>

                    {/* Phase Specifier Tag */}
                    <div className="text-[10px] font-mono font-bold tracking-wider uppercase text-[#174F49]/60 mb-1.5">
                      {pillar.phase}
                    </div>

                    {/* Subtitle in Restrained Terracotta */}
                    <div className="text-xs font-bold uppercase tracking-wider text-[#D76D4C] mb-2">
                      {pillar.subtitle}
                    </div>

                    {/* Capability Title */}
                    <h3 className="text-lg sm:text-xl font-bold text-[#293D37] mb-3 leading-snug group-hover:text-[#174F49] transition-colors">
                      {pillar.title}
                    </h3>

                    {/* Full Preserved Description */}
                    <p className="text-xs sm:text-sm text-[#293D37]/80 leading-relaxed font-normal">
                      {pillar.desc}
                    </p>
                  </div>

                  {/* Bottom Metadata & Verified Capability Indicator */}
                  <div className="pt-4 mt-6 border-t border-[#174F49]/10 flex items-center justify-between">
                    <div className="flex items-center space-x-1.5 text-xs font-semibold text-[#174F49]">
                      <CheckCircle2 className="w-4 h-4 text-[#174F49] flex-shrink-0" />
                      <span>Verified Capability</span>
                    </div>

                    <span className="text-[10px] font-mono text-[#293D37]/50 uppercase tracking-wider">
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

