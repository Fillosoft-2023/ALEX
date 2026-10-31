'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowUpRight, MapPin } from 'lucide-react';
import { Project } from '@/types/project';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      layout="position"
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{
        duration: 0.5,
        delay: (index % 4) * 0.08,
        ease: [0.22, 1, 0.36, 1]
      }}
      className="group relative flex flex-col h-full bg-[#F3F2EB] rounded-2xl overflow-hidden border border-[#17645D]/15 shadow-subtle hover:shadow-card hover:border-[#17645D] transition-all duration-300"
    >
      <Link
        href={`/projects/${project.id}`}
        className="flex flex-col h-full focus:outline-none focus:ring-2 focus:ring-[#17645D] rounded-2xl overflow-hidden"
        aria-label={`View ${project.title}`}
      >
        {/* Top Image Container */}
        <div className="relative w-full aspect-[16/10] overflow-hidden bg-[#293D37]">
          {/* Smooth Zoom Image on Hover */}
          <motion.div
            className="relative w-full h-full"
            whileHover={{ scale: 1.06 }}
            transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
          >
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover object-center"
            />
          </motion.div>

          {/* Vignette Gradient for badge readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#293D37]/70 via-transparent to-black/25 pointer-events-none" />

          {/* Top Badges */}
          <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2 z-10">
            <span className="px-2.5 py-1 rounded-md text-[11px] font-mono font-bold tracking-wider uppercase bg-[#17645D]/90 text-[#F3F2EB] backdrop-blur-sm shadow-xs">
              {project.category}
            </span>

            <span className="px-2.5 py-1 rounded-md text-[11px] font-semibold bg-[#F3F2EB]/95 text-[#293D37] backdrop-blur-sm flex items-center space-x-1 shadow-xs border border-[#17645D]/10">
              <MapPin className="w-3 h-3 text-[#D9795C] flex-shrink-0" />
              <span>{project.location}</span>
            </span>
          </div>

          {/* Bottom of Image: Quick Arrow Badge that animates on hover */}
          <div className="absolute bottom-3 right-3 z-10">
            <div className="w-8 h-8 rounded-full bg-[#F3F2EB]/90 text-[#17645D] group-hover:bg-[#D9795C] group-hover:text-white flex items-center justify-center transition-all duration-300 shadow-sm">
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
            </div>
          </div>
        </div>

        {/* Card Body */}
        <div className="p-5 flex-1 flex flex-col justify-between bg-[#F3F2EB]">
          <div className="space-y-2">
            
            {/* Title with upward shift on hover */}
            <h3 className="text-lg font-bold text-[#293D37] group-hover:text-[#17645D] group-hover:-translate-y-0.5 transition-all duration-300 line-clamp-1 leading-snug">
              {project.title}
            </h3>

            {/* Subtitle / Short Description */}
            <p className="text-xs sm:text-sm text-[#293D37]/75 line-clamp-2 leading-relaxed">
              {project.subtitle || project.summary}
            </p>
          </div>

          {/* Card Footer: Metadata Specs & Action Text */}
          <div className="pt-3.5 mt-3.5 border-t border-[#17645D]/10 flex items-center justify-between text-xs">
            <span className="font-mono text-[11px] text-[#293D37]/60 truncate max-w-[65%]">
              {project.capacity}
            </span>

            <span className="font-bold text-[#17645D] group-hover:text-[#D9795C] transition-colors flex items-center space-x-1">
              <span>Explore</span>
              <span className="group-hover:translate-x-0.5 transition-transform">&rarr;</span>
            </span>
          </div>
        </div>

        {/* Hover Terracotta Accent Line at Bottom */}
        <div className="h-0.5 w-full bg-[#17645D]/15 group-hover:bg-[#D9795C] transition-colors duration-300" />
      </Link>
    </motion.div>
  );
}
