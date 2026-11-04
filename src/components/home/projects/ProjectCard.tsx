'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { 
  ArrowUpRight, 
  MapPin, 
  Building2, 
  ShieldCheck, 
  Activity, 
  Layers, 
  CheckCircle2, 
  ArrowRight 
} from 'lucide-react';
import { Project } from '@/types/project';

interface ProjectCardProps {
  project: Project;
  index: number;
  isWide?: boolean;
}

export default function ProjectCard({ project, index, isWide = false }: ProjectCardProps) {
  const primaryHighlight = project.highlights?.[0];
  const secondaryHighlight = project.highlights?.[1];

  return (
    <motion.div
      layout="position"
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{
        duration: 0.55,
        delay: (index % 4) * 0.08,
        ease: [0.22, 1, 0.36, 1]
      }}
      className={`group relative flex flex-col h-full rounded-3xl overflow-hidden border border-white/15 bg-gradient-to-b from-[#133a33]/90 via-[#0e2c26]/95 to-[#081e1a]/98 backdrop-blur-xl shadow-[0_12px_36px_rgba(0,0,0,0.35)] hover:shadow-[0_24px_55px_rgba(21,94,99,0.35)] hover:border-amber-400/60 transition-all duration-500 gpu-accelerate hover:-translate-y-1.5 ${
        isWide ? 'md:col-span-2 lg:col-span-2' : 'col-span-1'
      }`}
    >
      {/* Top Gold Shimmer Beam on Hover */}
      <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-amber-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-30" />

      {/* Subtle CAD Crosshair Marks in Corners */}
      <span className="absolute top-2.5 left-2.5 text-[9px] font-mono text-amber-400/30 group-hover:text-amber-400/80 transition-colors duration-300 pointer-events-none z-20" aria-hidden="true">+</span>
      <span className="absolute top-2.5 right-2.5 text-[9px] font-mono text-amber-400/30 group-hover:text-amber-400/80 transition-colors duration-300 pointer-events-none z-20" aria-hidden="true">+</span>
      <span className="absolute bottom-2.5 left-2.5 text-[9px] font-mono text-amber-400/30 group-hover:text-amber-400/80 transition-colors duration-300 pointer-events-none z-20" aria-hidden="true">+</span>
      <span className="absolute bottom-2.5 right-2.5 text-[9px] font-mono text-amber-400/30 group-hover:text-amber-400/80 transition-colors duration-300 pointer-events-none z-20" aria-hidden="true">+</span>

      <Link
        href={`/projects/${project.id}`}
        className="flex flex-col h-full focus:outline-none focus:ring-2 focus:ring-amber-400 rounded-3xl overflow-hidden"
        aria-label={`View dossier for ${project.title}`}
      >
        {isWide ? (
          /* =========================================================================
             WIDE BENTO HIGHLIGHT LAYOUT (Desktop 2-Col Split, Mobile Stacked)
             ========================================================================= */
          <div className="flex flex-col lg:grid lg:grid-cols-12 h-full">
            {/* Visual Column */}
            <div className="relative w-full lg:col-span-7 h-64 sm:h-72 lg:h-full min-h-[260px] overflow-hidden bg-[#0a1e19]">
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 1024px) 100vw, 66vw"
                className="object-cover object-center group-hover:scale-106 transition-transform duration-700 ease-out"
              />

              {/* Blueprint Vignette Gradients */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0e2c26] via-[#0e2c26]/40 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-[#0e2c26]/20 lg:to-[#0e2c26] pointer-events-none" />
              <div className="absolute inset-0 bg-black/20 pointer-events-none" />

              {/* Badges Bar */}
              <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between gap-2 z-10">
                <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-[11px] font-mono font-bold tracking-wider uppercase bg-teal-deep/90 text-amber-300 backdrop-blur-md border border-amber-400/30 shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                  <span>{project.category}</span>
                </span>

                <span className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-black/50 text-ivory backdrop-blur-md border border-white/15">
                  <MapPin className="w-3 h-3 text-amber-400 flex-shrink-0" />
                  <span>{project.location}</span>
                </span>
              </div>

              {/* Technical Blueprint Coordinate Tag */}
              <div className="absolute bottom-3 left-3.5 z-10 hidden sm:flex items-center space-x-2 text-[10px] font-mono text-ivory/70 bg-black/40 px-2.5 py-0.5 rounded-md backdrop-blur-xs border border-white/10">
                <Activity className="w-3 h-3 text-amber-400" />
                <span>ARCHITECTURAL DOSSIER // VERIFIED</span>
              </div>

              {/* Floating Arrow Badge */}
              <div className="absolute bottom-3 right-3 z-10">
                <div className="w-9 h-9 rounded-full bg-white/15 text-white backdrop-blur-md border border-white/25 group-hover:bg-amber-400 group-hover:text-charcoal-green group-hover:border-amber-400 flex items-center justify-center transition-all duration-300 shadow-md">
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                </div>
              </div>
            </div>

            {/* Dossier Content Column */}
            <div className="p-6 sm:p-7 lg:col-span-5 flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                {/* Client Subheading */}
                <div className="flex items-center space-x-2 text-xs font-mono text-amber-300/90 uppercase tracking-widest">
                  <Building2 className="w-3.5 h-3.5 text-amber-400" />
                  <span>{project.client}</span>
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-amber-200 transition-colors duration-300 leading-snug font-serif">
                  {project.title}
                </h3>

                {/* Subtitle / Description */}
                <p className="text-xs sm:text-sm text-ivory/85 line-clamp-3 leading-relaxed font-lora">
                  {project.subtitle || project.summary}
                </p>

                {/* Micro Metric Highlight Boxes */}
                {(primaryHighlight || secondaryHighlight) && (
                  <div className="grid grid-cols-2 gap-2.5 pt-1">
                    {primaryHighlight && (
                      <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-xs">
                        <span className="block text-[9px] font-mono uppercase text-ivory/60 tracking-wider">
                          {primaryHighlight.label}
                        </span>
                        <span className="text-xs font-bold text-amber-300 line-clamp-1 font-mono">
                          {primaryHighlight.value}
                        </span>
                      </div>
                    )}
                    {secondaryHighlight && (
                      <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-xs">
                        <span className="block text-[9px] font-mono uppercase text-ivory/60 tracking-wider">
                          {secondaryHighlight.label}
                        </span>
                        <span className="text-xs font-bold text-amber-300 line-clamp-1 font-mono">
                          {secondaryHighlight.value}
                        </span>
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Wide Footer Strip */}
              <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                <span className="inline-flex items-center space-x-1.5 text-[11px] font-mono text-sage/90">
                  <Layers className="w-3 h-3 text-amber-400" />
                  <span className="truncate max-w-[150px]">{project.capacity}</span>
                </span>

                <span className="inline-flex items-center space-x-1.5 text-xs font-bold font-jost uppercase tracking-wider text-amber-300 group-hover:text-white transition-colors">
                  <span>View Project</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </div>
          </div>
        ) : (
          /* =========================================================================
             STANDARD ARCHITECTURAL GLASS CARD LAYOUT
             ========================================================================= */
          <>
            {/* Top Visual Container */}
            <div className="relative w-full aspect-[16/10] overflow-hidden bg-[#0a1e19]">
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover object-center group-hover:scale-106 transition-transform duration-700 ease-out"
              />

              {/* Ambient Gradients for badge readability & dark integration */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0e2c26] via-transparent to-black/35 pointer-events-none" />

              {/* Badges Bar */}
              <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2 z-10">
                <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-mono font-bold tracking-wider uppercase bg-teal-deep/90 text-amber-300 backdrop-blur-md border border-amber-400/30 shadow-xs">
                  {project.category}
                </span>

                <span className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-full text-[10px] font-semibold bg-black/50 text-ivory backdrop-blur-md border border-white/15">
                  <MapPin className="w-3 h-3 text-amber-400 flex-shrink-0" />
                  <span className="truncate max-w-[120px]">{project.location}</span>
                </span>
              </div>

              {/* Bottom Right Floating Circular Action Badge */}
              <div className="absolute bottom-3 right-3 z-10">
                <div className="w-8 h-8 rounded-full bg-white/15 text-white backdrop-blur-md border border-white/20 group-hover:bg-amber-400 group-hover:text-charcoal-green group-hover:border-amber-400 flex items-center justify-center transition-all duration-300 shadow-sm">
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                </div>
              </div>

              {/* Technical Indicator Bottom Left */}
              <div className="absolute bottom-3 left-3 z-10">
                <span className="px-2 py-0.5 rounded text-[9px] font-mono font-semibold text-ivory/80 bg-black/40 backdrop-blur-xs border border-white/10">
                  {project.client}
                </span>
              </div>
            </div>

            {/* Card Body */}
            <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                {/* Title */}
                <h3 className="text-lg font-bold text-white group-hover:text-amber-200 transition-colors duration-300 line-clamp-1 leading-snug font-serif">
                  {project.title}
                </h3>

                {/* Subtitle / Short Description */}
                <p className="text-xs sm:text-sm text-ivory/80 line-clamp-2 leading-relaxed font-lora">
                  {project.subtitle || project.summary}
                </p>
              </div>

              {/* Card Footer: Metadata Specs & Action Text */}
              <div className="pt-3.5 border-t border-white/10 flex items-center justify-between text-xs">
                <span className="font-mono text-[11px] text-amber-300/90 font-medium truncate max-w-[65%] flex items-center space-x-1.5">
                  <Layers className="w-3 h-3 text-sage/70 flex-shrink-0" />
                  <span className="truncate">{project.capacity}</span>
                </span>

                <span className="font-bold text-amber-300 group-hover:text-white transition-colors flex items-center space-x-1 font-jost uppercase tracking-wider text-[11px]">
                  <span>Explore</span>
                  <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
                </span>
              </div>
            </div>
          </>
        )}
      </Link>
    </motion.div>
  );
}
