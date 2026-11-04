'use client';

import { useState } from 'react';
import { 
  ClipboardCheck, 
  Compass, 
  Wrench, 
  Cpu, 
  ShieldCheck,
  ArrowRight,
  Sparkles,
  CheckCircle2
} from 'lucide-react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

export default function ProcessTimeline() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      num: "01",
      title: "Consultation & Assessment",
      subtitle: "Phase I // Feasibility",
      desc: "Comprehensive evaluation of clinical bed matrix, OT spatial zoning, statutory setbacks, and itemized CapEx budgeting.",
      icon: ClipboardCheck,
      spec: "Site & Regulatory Audit",
      deliverable: "Feasibility Report, Soil Test & Statutory Matrix"
    },
    {
      num: "02",
      title: "Planning & Architecture",
      subtitle: "Phase II // Layout CAD",
      desc: "NABH-compliant cleanroom workflows, surgical zoning, sterile supply loops, and structural seismic engineering.",
      icon: Compass,
      spec: "AIA / NABH Standards",
      deliverable: "CAD Blueprints, Cleanroom Zoning & Seismic Model"
    },
    {
      num: "03",
      title: "Engineering & Civil Build",
      subtitle: "Phase III // Heavy Civil",
      desc: "Structural concrete erection, degreased copper MGPS trunking, and cleanroom air handling duct routing.",
      icon: Wrench,
      spec: "HTM 02-01 Piping",
      deliverable: "Superstructure, Medical Gas Line Riser & AHU Loops"
    },
    {
      num: "04",
      title: "Installation & Integration",
      subtitle: "Phase IV // Cleanroom Fit",
      desc: "Antibacterial modular OT wall panels, laminar airflow plenums, ceiling surgical pendants, and ICU headwalls.",
      icon: Cpu,
      spec: "ISO Class 7 OT Setup",
      deliverable: "Modular Wall Cladding, Laminar Ceilings & ICU Beds"
    },
    {
      num: "05",
      title: "Testing & Handover",
      subtitle: "Phase V // Clinical Go-Live",
      desc: "24-hr hydrostatic pressure holding, airborne particle counts, municipal Fire NOC clearance, and staff operational training.",
      icon: ShieldCheck,
      spec: "Zero-Defect Commission",
      deliverable: "Particle Count Cert, Fire NOC & Operational Handover"
    }
  ];

  return (
    <section className="relative w-full bg-gradient-to-b from-[#09221e] via-[#0d2d27] to-[#09221e] text-white py-16 sm:py-24 border-b border-teal-deep/30 overflow-hidden">
      
      {/* 1. Architectural CAD Blueprint Background Elements with Teal & Gold Halos */}
      <div className="absolute inset-0 pointer-events-none select-none z-0 overflow-hidden" aria-hidden="true">
        {/* Fine Architectural CAD Drafting Grid */}
        <div 
          className="absolute inset-0 opacity-[0.22]"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(200, 235, 220, 0.15) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(200, 235, 220, 0.15) 1px, transparent 1px)
            `,
            backgroundSize: '36px 36px'
          }}
        />

        {/* Diagonal CAD cross-markers at grid intersections */}
        <div 
          className="absolute inset-0 opacity-[0.18]"
          style={{
            backgroundImage: `radial-gradient(circle at 18px 18px, rgba(255, 215, 0, 0.35) 1.5px, transparent 0)`,
            backgroundSize: '36px 36px'
          }}
        />

        {/* Ambient Glow Halos */}
        <div className="absolute top-1/4 -left-16 w-[500px] h-[500px] bg-teal-deep/40 rounded-full blur-3xl pointer-events-none animate-floatSlow" />
        <div className="absolute bottom-1/4 -right-16 w-[450px] h-[450px] bg-amber-400/10 rounded-full blur-3xl pointer-events-none animate-floatSlowReverse" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center space-x-2 text-[11px] font-bold uppercase tracking-widest text-amber-300 bg-white/10 border border-white/20 px-3.5 py-1 rounded-full shadow-xs backdrop-blur-sm">
            <Sparkles className="w-3 h-3 text-amber-400" />
            <span className="font-jost">Project Delivery Lifecycle &bull; 5-Stage Framework</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-serif">
            End-to-End Hospital Execution Framework
          </h2>
          <p className="text-sm sm:text-base text-ivory/85 leading-relaxed font-lora">
            How Alex Healthcare System delivers complex hospital engineering projects from concept drawings to certified clinical readiness with single-source accountability.
          </p>

          {/* Interactive Step Navigator Bar */}
          <div className="pt-3 flex flex-wrap items-center justify-center gap-2">
            {steps.map((st, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setActiveStep(i)}
                className={`text-xs font-mono font-bold px-3 py-1.5 rounded-full transition-all cursor-pointer ${
                  activeStep === i
                    ? 'bg-amber-400 text-charcoal-green shadow-md scale-105'
                    : 'bg-white/10 hover:bg-white/20 text-white/80 border border-white/15'
                }`}
              >
                0{i + 1} // {st.subtitle.split('// ')[1]}
              </button>
            ))}
          </div>
        </div>

        {/* Desktop Horizontal Timeline with Animated Golden Tracer Line */}
        <div className="hidden lg:block relative mb-12">
          
          {/* Animated Connecting Golden SVG Conduit with Traveling Pulse */}
          <div className="absolute top-[52px] left-8 right-8 h-4 -translate-y-1/2 z-0 overflow-hidden pointer-events-none">
            <svg className="w-full h-4" viewBox="0 0 1000 16" preserveAspectRatio="none">
              {/* Static background conduit */}
              <line x1="0" y1="8" x2="1000" y2="8" stroke="rgba(255, 255, 255, 0.2)" strokeWidth="2" strokeDasharray="4 4" />
              {/* Active flowing conduit in gold */}
              <line x1="0" y1="8" x2="1000" y2="8" stroke="#ffca28" strokeWidth="2" strokeDasharray="8 8" className="animate-[pipelinePulse_12s_linear_infinite]" />
              {/* Traveling Golden Pulse Dot */}
              <circle r="4.5" fill="#ffa726">
                <animateMotion path="M0,8 L1000,8" dur="6s" repeatCount="indefinite" />
              </circle>
            </svg>
          </div>

          <div className="grid grid-cols-5 gap-4 relative z-10">
            {steps.map((step, idx) => {
              const IconComponent = step.icon;
              const isActive = activeStep === idx;
              return (
                <div 
                  key={idx}
                  onClick={() => setActiveStep(idx)}
                  onMouseEnter={() => setActiveStep(idx)}
                  className={`group relative bg-white rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between gpu-accelerate overflow-hidden text-charcoal-green cursor-pointer ${
                    isActive
                      ? 'border-2 border-amber-400 shadow-float ring-2 ring-amber-400/50 -translate-y-2.5'
                      : 'border-2 border-amber-400/20 shadow-elevated hover:shadow-float hover:-translate-y-1'
                  }`}
                >
                  {/* Top Gold Shimmer */}
                  <div className={`absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-teal-deep via-amber-400 to-teal-deep transition-opacity duration-300 z-20 ${
                    isActive ? 'opacity-100' : 'opacity-60 group-hover:opacity-100'
                  }`} />

                  {/* Corner Accent Ticks */}
                  <div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-amber-500/70" />
                  <div className="absolute top-2 right-2 w-2 h-2 border-t border-r border-amber-500/70" />
                  <div className="absolute bottom-2 left-2 w-2 h-2 border-b border-l border-amber-500/70" />
                  <div className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-amber-500/70" />

                  <div>
                    {/* Number Badge and Icon */}
                    <div className="flex items-center justify-between mb-5">
                      <span className={`text-xs font-extrabold font-mono px-2.5 py-1 rounded-md transition-colors ${
                        isActive 
                          ? 'bg-amber-400 text-charcoal-green font-bold'
                          : 'text-teal-deep bg-sage/60 border border-teal-deep/20 group-hover:bg-teal-deep group-hover:text-white'
                      }`}>
                        {step.num}
                      </span>
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center shadow-sm transition-all ${
                        isActive
                          ? 'bg-amber-400 text-charcoal-green scale-110 ring-2 ring-amber-500'
                          : 'bg-teal-deep text-white ring-2 ring-amber-400/30'
                      }`}>
                        <IconComponent className="w-4 h-4" />
                      </div>
                    </div>

                    <div className="text-[10px] font-bold uppercase tracking-wider font-jost text-forest mb-1.5">
                      {step.subtitle}
                    </div>
                    <h3 className="text-base font-bold text-charcoal-green mb-2.5 leading-snug font-serif group-hover:text-teal-deep transition-colors">
                      {step.title}
                    </h3>
                  </div>

                  <div className="mt-2 pt-3 border-t border-teal-deep/10 space-y-2">
                    <p className="text-xs text-charcoal-green/75 leading-relaxed font-lora">
                      {step.desc}
                    </p>
                    <div className="text-[10px] font-mono text-forest/90 font-bold flex items-center space-x-1 pt-1">
                      <CheckCircle2 className="w-3 h-3 text-amber-600" />
                      <span>{step.spec}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile Vertical Timeline (Hidden on desktop) */}
        <div className="block lg:hidden space-y-4 mb-8">
          {steps.map((step, idx) => {
            const IconComponent = step.icon;
            return (
              <div 
                key={idx} 
                className="relative bg-white text-charcoal-green rounded-2xl p-5 border border-amber-400/30 shadow-subtle flex items-start space-x-4 overflow-hidden"
              >
                <div className="w-11 h-11 rounded-xl bg-teal-deep text-white flex items-center justify-center flex-shrink-0 font-bold font-mono text-xs ring-2 ring-amber-400/40">
                  {step.num}
                </div>
                <div className="space-y-1">
                  <div className="text-[10px] font-bold uppercase tracking-wider font-jost text-forest">
                    {step.subtitle}
                  </div>
                  <h3 className="text-base font-bold text-charcoal-green font-serif">
                    {step.title}
                  </h3>
                  <p className="text-xs text-charcoal-green/75 leading-relaxed font-lora">
                    {step.desc}
                  </p>
                  <div className="text-[10px] font-mono text-forest/90 font-bold flex items-center space-x-1 pt-1">
                    <CheckCircle2 className="w-3 h-3 text-coral-accent" />
                    <span>{step.spec}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Assurance Plaque with Frosted Glass Styling */}
        <div className="relative bg-white/10 backdrop-blur-md rounded-2xl p-6 sm:p-7 border border-white/20 shadow-elevated flex flex-col sm:flex-row items-center justify-between gap-5 max-w-5xl mx-auto overflow-hidden">
          {/* Subtle top gold accent */}
          <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-amber-400 to-transparent" />

          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-400/20 text-amber-300 flex items-center justify-center flex-shrink-0 ring-1 ring-amber-400/40">
              <ShieldCheck className="w-6 h-6 text-amber-300" />
            </div>
            <div className="text-xs sm:text-sm text-ivory/90 leading-relaxed font-lora">
              <strong className="text-amber-300 font-bold font-serif text-sm sm:text-base block mb-0.5">
                Phase 0{activeStep + 1} Selected // {steps[activeStep].title}:
              </strong>
              Primary Milestone: <span className="text-amber-200 font-semibold">{steps[activeStep].deliverable}</span>. Continuous life-safety checks, statutory documentation, and regional engineering compliance across Northeast India.
            </div>
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center space-x-2 text-xs font-bold text-charcoal-green bg-gradient-to-r from-amber-300 via-amber-200 to-amber-400 hover:from-amber-400 hover:to-amber-500 px-6 py-3.5 rounded-xl transition-all shadow-subtle flex-shrink-0 group hover:shadow-elevated cursor-pointer"
          >
            <span className="font-jost uppercase tracking-wider font-extrabold">Discuss Timeline</span>
            <ArrowRight className="w-4 h-4 text-charcoal-green group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

      </div>
    </section>
  );
}
