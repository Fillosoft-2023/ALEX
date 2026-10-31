'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowUpRight, MapPin, Building2, Layers } from 'lucide-react';
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
        className="group relative block w-full rounded-2xl sm:rounded-3xl overflow-hidden border border-[#17645D]/20 bg-[#293D37] shadow-card hover:shadow-float transition-all duration-500 focus:outline-none focus:ring-2 focus:ring-[#17645D]"
        aria-label={`Featured Project: ${project.title}`}
      >
        {/* Landscape Container */}
        <div className="relative w-full h-[380px] sm:h-[460px] lg:h-[520px] overflow-hidden">
          
          {/* Next.js Optimized Image with smooth scale on hover */}
          <motion.div 
            className="relative w-full h-full"
            whileHover={{ scale: 1.06 }}
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

          {/* Restrained Architectural Vignette / Gradient for Legibility */}
          <div 
            className="absolute inset-0 bg-gradient-to-t from-[#293D37] via-[#293D37]/45 to-[#293D37]/15 pointer-events-none" 
            aria-hidden="true" 
          />

          {/* Subtle Blueprint Grid Accent Overlay on Hover */}
          <div 
            className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none"
            style={{
              backgroundImage: `linear-gradient(to right, #F3F2EB 1px, transparent 1px), linear-gradient(to bottom, #F3F2EB 1px, transparent 1px)`,
              backgroundSize: '32px 32px'
            }}
            aria-hidden="true"
          />

          {/* Top Badges Bar */}
          <div className="absolute top-4 sm:top-6 left-4 sm:left-6 right-4 sm:right-6 flex flex-wrap items-center justify-between gap-3 z-10">
            {/* Category Badge & Flagship Marker */}
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-[#17645D]/90 text-[#F3F2EB] backdrop-blur-md border border-[#F3F2EB]/20 shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D9795C]" />
                <span>Featured Project</span>
              </span>

              <span className="hidden sm:inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-[#F3F2EB]/95 text-[#293D37] backdrop-blur-md shadow-sm">
                {project.category}
              </span>
            </div>

            {/* Location Pill */}
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#F3F2EB]/95 text-[#293D37] backdrop-blur-md shadow-sm border border-[#17645D]/10">
              <MapPin className="w-3.5 h-3.5 text-[#D9795C] flex-shrink-0" />
              <span>{project.location}</span>
            </div>
          </div>

          {/* Bottom Content Panel */}
          <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-8 lg:p-10 z-10">
            <div className="max-w-4xl space-y-3 sm:space-y-4">
              
              {/* Technical Spec & Subtitle */}
              <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs sm:text-sm font-mono text-[#E6EAE0]/90">
                <span className="inline-flex items-center space-x-1 text-[#D9795C] font-semibold">
                  <Building2 className="w-3.5 h-3.5" />
                  <span>{project.client}</span>
                </span>
                <span className="hidden sm:inline text-[#E6EAE0]/50">•</span>
                <span className="hidden sm:inline-flex items-center space-x-1 text-[#E6EAE0]/80">
                  <Layers className="w-3.5 h-3.5" />
                  <span>{project.capacity}</span>
                </span>
              </div>

              {/* Title with slight upward lift on hover */}
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#F3F2EB] tracking-tight group-hover:translate-y-[-2px] transition-transform duration-300 leading-tight">
                {project.title}
              </h3>

              {/* Summary */}
              <p className="text-sm sm:text-base text-[#E6EAE0]/85 line-clamp-2 max-w-3xl leading-relaxed font-normal">
                {project.summary}
              </p>

              {/* Action Bar */}
              <div className="pt-2 flex items-center justify-between">
                <div className="inline-flex items-center space-x-2 text-sm sm:text-base font-bold text-[#F3F2EB] group-hover:text-[#D9795C] transition-colors duration-200">
                  <span>View Project Case Study</span>
                  <div className="w-8 h-8 rounded-full bg-[#F3F2EB]/15 group-hover:bg-[#D9795C] group-hover:text-[#F3F2EB] flex items-center justify-center transition-all duration-300">
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                  </div>
                </div>

                {/* Subtle Terracotta Accent Line on Card Base */}
                <span className="text-xs font-mono text-[#E6EAE0]/60 hidden sm:inline-block">
                  Commissioned // {project.date}
                </span>
              </div>

            </div>
          </div>

          {/* Bottom Accent Line */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#17645D]/40 group-hover:bg-[#D9795C] transition-colors duration-300" />

        </div>
      </Link>
    </motion.div>
  );
}
