'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Sparkles, Filter } from 'lucide-react';
import { servicesData } from '@/data/servicesData';

const CATEGORY_TABS = [
  { id: 'all', label: 'All Disciplines' },
  { id: 'civil', label: 'Civil & Hospital Build' },
  { id: 'ot', label: 'Modular OTs & ICU' },
  { id: 'mgps', label: 'MGPS & Gas Pipelines' },
];

export default function ServicesOverview() {
  const [activeTab, setActiveTab] = useState('all');

  // Filter 6 featured services based on selected discipline
  const filteredServices = servicesData.slice(0, 6).filter((service) => {
    if (activeTab === 'all') return true;
    if (activeTab === 'civil') return service.category.toLowerCase().includes('construction') || service.category.toLowerCase().includes('planning');
    if (activeTab === 'ot') return service.category.toLowerCase().includes('theatre') || service.category.toLowerCase().includes('cleanroom');
    if (activeTab === 'mgps') return service.category.toLowerCase().includes('gas') || service.category.toLowerCase().includes('pipeline') || service.category.toLowerCase().includes('equipment');
    return true;
  });

  return (
    <section className="relative py-16 sm:py-24 bg-gradient-to-b from-[#f8faf9] via-mint-cream/35 to-sand/20 overflow-hidden border-b border-teal-deep/15">
      {/* Engineering Cad & Medical Gas Pipeline Blueprint Backdrop */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Subtle Architectural Blueprint Grid */}
        <div 
          className="absolute inset-0 opacity-[0.07]" 
          style={{
            backgroundImage: `radial-gradient(circle, #0f4c47 1px, transparent 1px), linear-gradient(to right, #0f4c47 1px, transparent 1px), linear-gradient(to bottom, #0f4c47 1px, transparent 1px)`,
            backgroundSize: `40px 40px, 80px 80px, 80px 80px`
          }}
        />

        {/* Ambient Glow Orbs */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 -right-32 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Dynamic ECG Vital Waveform Pulse Line */}
        <div className="absolute top-12 left-0 right-0 w-full overflow-hidden opacity-35 select-none">
          <svg className="w-[200%] h-16 stroke-teal-deep fill-none" viewBox="0 0 1600 80" preserveAspectRatio="none">
            <path
              d="M0,40 L280,40 L295,40 L305,18 L315,68 L328,8 L340,62 L350,40 L365,40 L680,40 L695,40 L705,18 L715,68 L728,8 L740,62 L750,40 L765,40 L1080,40 L1095,40 L1105,18 L1115,68 L1128,8 L1140,62 L1150,40 L1165,40 L1480,40 L1495,40 L1505,18 L1515,68 L1528,8 L1540,62 L1550,40 L1600,40"
              strokeWidth="1.75"
              strokeDasharray="6 4"
              className="animate-[ecgFlow_24s_linear_infinite]"
            />
          </svg>
        </div>

        {/* Medical Gas Pipeline Flow Tracer */}
        <div className="absolute bottom-14 left-0 right-0 w-full overflow-hidden opacity-30 select-none">
          <svg className="w-full h-12 stroke-forest fill-none" viewBox="0 0 1200 48" preserveAspectRatio="none">
            <path
              d="M0,24 L420,24 L450,10 L840,10 L870,24 L1200,24"
              strokeWidth="1.5"
              strokeDasharray="160"
              className="animate-[pipelinePulse_8s_linear_infinite]"
            />
            <circle r="3.5" fill="#ffa726">
              <animateMotion path="M0,24 L420,24 L450,10 L840,10 L870,24 L1200,24" dur="8s" repeatCount="indefinite" />
            </circle>
          </svg>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-10 gap-4 sm:gap-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-2xl space-y-2.5 sm:space-y-3"
          >
            <div className="inline-flex items-center space-x-2 text-[11px] sm:text-xs font-bold uppercase tracking-widest text-teal-deep bg-white/70 backdrop-blur-md border border-white/60 px-3.5 py-1 rounded-full shadow-sm font-jost">
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              <span>Disciplines &amp; Solutions</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-charcoal-green tracking-tight leading-snug font-cormorant">
              Integrated Healthcare Infrastructure Disciplines
            </h2>
            <p className="text-xs sm:text-base text-charcoal-green/80 leading-relaxed font-lora">
              Every stage of a healthcare facility’s lifecycle demands engineering precision. We eliminate multi-vendor friction by executing civil builds, surgical cleanrooms, gas distribution, and licensing under unified governance.
            </p>
          </motion.div>

          <Link
            href="/services"
            className="inline-flex items-center space-x-1.5 font-bold text-xs sm:text-sm text-teal-deep hover:text-amber-700 bg-white/60 hover:bg-white/90 backdrop-blur-md border border-white/60 hover:border-teal-deep/30 px-5 py-2.5 rounded-full transition-all group flex-shrink-0 shadow-sm"
          >
            <span className="font-jost uppercase tracking-wider">View All Verticals</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Category Filter Pills (Glassmorphism) */}
        <div className="flex flex-wrap items-center gap-2 mb-8 pb-3 border-b border-teal-deep/15">
          <span className="text-xs font-mono font-bold text-teal-deep/70 uppercase tracking-wider mr-2 hidden sm:inline-flex items-center space-x-1">
            <Filter className="w-3.5 h-3.5" />
            <span>Filter:</span>
          </span>

          {CATEGORY_TABS.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`relative px-4 py-2 rounded-full text-xs font-bold tracking-wide transition-all duration-300 font-jost cursor-pointer backdrop-blur-md ${
                  isActive
                    ? 'text-white bg-teal-deep shadow-md scale-105 border border-teal-deep'
                    : 'text-charcoal-green/80 bg-white/45 hover:bg-white/80 border border-white/60 hover:border-teal-deep/30'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* 6 Editorial Service Cards Grid with Glassmorphism */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8"
        >
          <AnimatePresence>
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="group relative rounded-3xl overflow-hidden border border-white/60 bg-white/40 hover:bg-white/60 backdrop-blur-xl shadow-[0_8px_32px_0_rgba(15,76,71,0.08)] hover:shadow-[0_16px_40px_0_rgba(15,76,71,0.16)] hover:border-teal-deep/40 transition-all duration-500 flex flex-col gpu-accelerate hover:-translate-y-2 cursor-pointer"
              >
                {/* Specular Edge Highlights & Modern Ambient Bioluminescent Glow on Hover */}
                <div className="absolute inset-x-0 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-white/90 to-transparent pointer-events-none z-20" />
                <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/0 via-teal-400/5 to-emerald-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10" />
                <div className="absolute -inset-0.5 rounded-3xl bg-gradient-to-r from-emerald-500 via-teal-400 to-emerald-600 opacity-0 group-hover:opacity-30 blur-md transition-opacity duration-500 pointer-events-none -z-10" />

                <Link href={`/services/${service.slug}`} className="flex flex-col h-full">
                  {/* Card Image Container with smooth zoom */}
                  <div className="relative h-44 sm:h-52 w-full overflow-hidden bg-charcoal-green/20">
                    <Image
                      src={service.cardImage}
                      alt={service.title}
                      fill
                      className="object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                    <span className="absolute top-3.5 left-3.5 px-2.5 py-1 rounded-md text-[11px] font-extrabold tracking-wider font-mono uppercase bg-white/80 text-teal-deep backdrop-blur-md shadow-sm border border-white/60">
                      0{index + 1}
                    </span>

                    <span className="absolute bottom-3 right-3 text-[10px] font-bold tracking-widest uppercase font-jost text-emerald-300 bg-black/55 px-2.5 py-1 rounded-full backdrop-blur-md border border-white/20">
                      {service.category.split('&')[0]}
                    </span>
                  </div>

                  {/* Card Content (Glassmorphism Frosted Area) */}
                  <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-2.5">
                      <h3 className="text-lg sm:text-xl font-medium text-charcoal-green group-hover:text-teal-deep transition-colors line-clamp-2 leading-snug font-cormorant">
                        {service.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-charcoal-green/80 leading-relaxed line-clamp-2 font-lora">
                        {service.summary}
                      </p>

                      {/* Technical Standards Chips */}
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        <span className="text-[10px] font-mono text-teal-deep font-semibold bg-white/60 backdrop-blur-sm px-2.5 py-0.5 rounded-full border border-teal-deep/15 shadow-2xs">
                          NABH Aligned
                        </span>
                        <span className="text-[10px] font-mono text-teal-deep font-semibold bg-white/60 backdrop-blur-sm px-2.5 py-0.5 rounded-full border border-teal-deep/15 shadow-2xs">
                          Integrated EPC
                        </span>
                      </div>
                    </div>

                    {/* Glassmorphic Footer Action */}
                    <div className="pt-3 border-t border-teal-deep/15 flex items-center justify-between">
                      <span className="inline-flex items-center text-xs font-bold text-teal-deep group-hover:text-emerald-700 transition-colors font-jost uppercase tracking-wider">
                        <span>Explore Scope</span>
                        <ArrowRight className="ml-1.5 w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform" />
                      </span>
                      <span className="text-[10px] text-teal-900/60 font-mono hidden sm:inline">
                        HTM 02-01 // NBC
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
