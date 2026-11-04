'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowUpRight, MapPin, Building2, Layers, Sparkles, CheckCircle2 } from 'lucide-react';
import { Project } from '@/types/project';

interface FeaturedProjectProps {
  project: Project;
}

export default function FeaturedProject({ project }: FeaturedProjectProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="relative w-full mb-8 sm:mb-12"
    >
      <Link
        href={`/projects/${project.id}`}
        className="group relative block w-full rounded-3xl overflow-hidden border border-white/15 bg-gradient-to-b from-[#133a33]/90 via-[#0e2c26]/95 to-[#081e1a]/98 shadow-[0_16px_45px_rgba(0,0,0,0.45)] hover:shadow-[0_24px_60px_rgba(21,94,99,0.45)] hover:border-amber-400/60 transition-all duration-500 focus:outline-none focus:ring-2 focus:ring-amber-400"
        aria-label={`Flagship Featured Project: ${project.title}`}
      >
        {/* Top Gold Shimmer Beam */}
        <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-amber-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-30" />

        {/* CAD Crosshairs */}
        <span className="absolute top-3 left-3 text-[10px] font-mono text-amber-400/40 group-hover:text-amber-400/90 transition-colors duration-300 pointer-events-none z-20">+</span>
        <span className="absolute top-3 right-3 text-[10px] font-mono text-amber-400/40 group-hover:text-amber-400/90 transition-colors duration-300 pointer-events-none z-20">+</span>
        <span className="absolute bottom-3 left-3 text-[10px] font-mono text-amber-400/40 group-hover:text-amber-400/90 transition-colors duration-300 pointer-events-none z-20">+</span>
        <span className="absolute bottom-3 right-3 text-[10px] font-mono text-amber-400/40 group-hover:text-amber-400/90 transition-colors duration-300 pointer-events-none z-20">+</span>

        {/* Landscape Container */}
        <div className="relative w-full h-[380px] sm:h-[460px] lg:h-[500px] overflow-hidden">
          
          {/* Zoom Image */}
          <motion.div 
            className="relative w-full h-full"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
          >
            <Image
              src={project.image}
              alt={project.title}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 1200px"
              className="object-cover object-center"
            />
          </motion.div>

          {/* Vignette Gradients */}
          <div 
            className="absolute inset-0 bg-gradient-to-t from-[#081e1a] via-[#0e2c26]/60 to-black/30 pointer-events-none" 
            aria-hidden="true" 
          />

          {/* Blueprint Grid Accent */}
          <div 
            className="absolute inset-0 opacity-0 group-hover:opacity-15 transition-opacity duration-500 pointer-events-none"
            style={{
              backgroundImage: `linear-gradient(to right, rgba(255,202,40,0.3) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,202,40,0.3) 1px, transparent 1px)`,
              backgroundSize: '36px 36px'
            }}
            aria-hidden="true"
          />

          {/* Top Badges Bar */}
          <div className="absolute top-4 sm:top-6 left-4 sm:left-6 right-4 sm:right-6 flex flex-wrap items-center justify-between gap-3 z-10">
            {/* Category Badge & Flagship Marker */}
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-teal-deep/95 text-amber-300 backdrop-blur-md border border-amber-400/40 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                <span>Flagship Engineering Showcase</span>
              </span>

              <span className="hidden sm:inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-black/50 text-ivory backdrop-blur-md border border-white/15">
                {project.category}
              </span>
            </div>

            {/* Location Pill */}
            <div className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-black/50 text-ivory backdrop-blur-md border border-white/15 shadow-sm">
              <MapPin className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
              <span>{project.location}</span>
            </div>
          </div>

          {/* Bottom Content Panel */}
          <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 lg:p-10 z-10">
            <div className="max-w-4xl space-y-3 sm:space-y-4">
              
              {/* Technical Spec & Subtitle */}
              <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs sm:text-sm font-mono text-ivory/90">
                <span className="inline-flex items-center space-x-1.5 text-amber-300 font-bold uppercase tracking-wider">
                  <Building2 className="w-3.5 h-3.5 text-amber-400" />
                  <span>{project.client}</span>
                </span>
                <span className="hidden sm:inline text-white/40">•</span>
                <span className="inline-flex items-center space-x-1.5 text-ivory/80">
                  <Layers className="w-3.5 h-3.5 text-amber-400" />
                  <span>{project.capacity}</span>
                </span>
                <span className="hidden md:inline text-white/40">•</span>
                <span className="hidden md:inline-flex items-center space-x-1 text-sage font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
                  <span>Verified Operational Facility</span>
                </span>
              </div>

              {/* Title */}
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight group-hover:text-amber-200 transition-colors duration-300 leading-tight font-serif">
                {project.title}
              </h3>

              {/* Summary */}
              <p className="text-sm sm:text-base text-ivory/85 line-clamp-2 max-w-3xl leading-relaxed font-lora">
                {project.summary}
              </p>

              {/* Action Bar */}
              <div className="pt-2 flex items-center justify-between">
                <div className="inline-flex items-center space-x-2.5 text-sm sm:text-base font-bold font-jost uppercase tracking-wider text-amber-300 group-hover:text-white transition-colors duration-200">
                  <span>Explore Flagship Case Study</span>
                  <div className="w-8 h-8 rounded-full bg-white/15 text-white group-hover:bg-amber-400 group-hover:text-charcoal-green flex items-center justify-center transition-all duration-300 shadow-sm">
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                  </div>
                </div>

                <span className="text-xs font-mono text-ivory/60 hidden sm:inline-block">
                  Commissioned // {project.date}
                </span>
              </div>

            </div>
          </div>

          {/* Bottom Accent Line */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-deep via-amber-400 to-teal-deep opacity-60 group-hover:opacity-100 transition-opacity duration-300" />

        </div>
      </Link>
    </motion.div>
  );
}
