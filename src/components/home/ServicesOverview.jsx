'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { servicesData } from '@/data/servicesData';

export default function ServicesOverview() {
  // 6 Primary Service Categories required by user
  const primaryServices = servicesData.slice(0, 6);

  return (
    <section className="relative w-full bg-[#faf8f2] pt-12 pb-8 sm:pt-16 sm:pb-12 border-b border-teal-deep/10 overflow-hidden">

      {/* Relatable Healthcare & Engineering Background Animations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">

        {/* 1. Subtle Architectural Blueprint CAD Grid */}
        <div
          className="absolute inset-0 opacity-[0.32]"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(16, 75, 77, 0.08) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(16, 75, 77, 0.08) 1px, transparent 1px)
            `,
            backgroundSize: '36px 36px'
          }}
        />

        {/* 2. Floating Ambient Glow Orbs with organic drift */}
        <motion.div
          animate={{
            x: [0, 30, -20, 0],
            y: [0, -20, 15, 0],
            scale: [1, 1.08, 0.96, 1]
          }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-10 -left-16 w-80 h-80 rounded-full bg-sage/45 blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -25, 20, 0],
            y: [0, 25, -15, 0],
            scale: [1, 0.94, 1.06, 1]
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-10 right-0 w-96 h-96 rounded-full bg-teal-deep/10 blur-3xl"
        />

        {/* 3. Hospital Telemetry / ECG Heartbeat Lifeline Wave Animation */}
        <div className="absolute top-12 left-0 right-0 w-full overflow-hidden opacity-30 select-none">
          <svg className="w-[200%] h-16 stroke-teal-deep fill-none" viewBox="0 0 1600 80" preserveAspectRatio="none">
            <path
              d="M0,40 L280,40 L295,40 L305,18 L315,68 L328,8 L340,62 L350,40 L365,40 L680,40 L695,40 L705,18 L715,68 L728,8 L740,62 L750,40 L765,40 L1080,40 L1095,40 L1105,18 L1115,68 L1128,8 L1140,62 L1150,40 L1165,40 L1480,40 L1495,40 L1505,18 L1515,68 L1528,8 L1540,62 L1550,40 L1600,40"
              strokeWidth="1.75"
              strokeDasharray="6 4"
              className="animate-[ecgFlow_24s_linear_infinite]"
            />
          </svg>
        </div>

        {/* 4. Medical Gas Pipeline (MGPS) Flow Tracer with Moving Pulse */}
        <div className="absolute bottom-14 left-0 right-0 w-full overflow-hidden opacity-25 select-none">
          <svg className="w-full h-12 stroke-forest fill-none" viewBox="0 0 1200 48" preserveAspectRatio="none">
            <path
              d="M0,24 L420,24 L450,10 L840,10 L870,24 L1200,24"
              strokeWidth="1.5"
              strokeDasharray="160"
              className="animate-[pipelinePulse_8s_linear_infinite]"
            />
            <circle r="3" fill="#dd6b4d">
              <animateMotion path="M0,24 L420,24 L450,10 L840,10 L870,24 L1200,24" dur="8s" repeatCount="indefinite" />
            </circle>
          </svg>
        </div>


      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 sm:mb-8 gap-4 sm:gap-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-2xl space-y-2 sm:space-y-3"
          >
            <div className="inline-flex items-center space-x-2 text-[11px] sm:text-xs font-bold uppercase tracking-widest text-teal-deep bg-sage/50 px-3 py-1 rounded-full">
              <span>Disciplines &amp; Solutions</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-charcoal-green tracking-tight leading-snug">
              Integrated Healthcare Infrastructure Disciplines
            </h2>
            <p className="text-xs sm:text-base text-charcoal-green/75 leading-relaxed">
              Every stage of a healthcare facility’s lifecycle demands engineering precision. We eliminate multi-vendor friction by executing civil builds, surgical cleanrooms, gas distribution, and licensing under unified governance.
            </p>
          </motion.div>

          <Link
            href="/services"
            className="inline-flex items-center space-x-1.5 font-bold text-xs sm:text-sm text-teal-deep hover:text-coral-accent transition-colors group flex-shrink-0"
          >
            <span>View All Service Verticals</span>
            <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 6 Editorial Service Cards Grid - 2 cols on mobile, 3 cols on desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 lg:gap-8">
          {primaryServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1, margin: '0px 0px -40px 0px' }}
              transition={{
                duration: 0.7,
                delay: (index % 3) * 0.1,
                ease: [0.22, 1, 0.36, 1]
              }}
              style={{ willChange: 'transform, opacity' }}
              className="group bg-white rounded-xl sm:rounded-2xl overflow-hidden border border-teal-deep/15 shadow-subtle hover:shadow-float transition-shadow duration-300 flex flex-col"
            >
              <Link href={`/services/${service.slug}`} className="flex flex-col h-full">
                {/* Card Image */}
                <div className="relative h-36 sm:h-48 md:h-52 w-full overflow-hidden bg-charcoal-green">
                  <Image
                    src={service.cardImage}
                    alt={service.title}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md text-[11px] font-bold tracking-wider uppercase bg-white/95 text-teal-deep backdrop-blur-sm shadow-sm">
                    0{index + 1}
                  </span>
                </div>

                {/* Card Content - Clean & Minimal */}
                <div className="p-4 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-sm sm:text-lg md:text-xl font-bold text-charcoal-green group-hover:text-teal-deep transition-colors line-clamp-2 leading-snug">
                      {service.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-charcoal-green/75 leading-relaxed line-clamp-2">
                      {service.summary}
                    </p>
                  </div>

                  {/* Clean Footer Action */}
                  <div className="pt-2 border-t border-teal-deep/10">
                    <span className="inline-flex items-center text-xs font-bold text-teal-deep group-hover:text-coral-accent transition-colors">
                      <span>Explore Service</span>
                      <ArrowRight className="ml-1.5 w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
