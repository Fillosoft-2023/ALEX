'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence, MotionConfig } from 'framer-motion';
import { ArrowRight, Compass, ShieldCheck } from 'lucide-react';
import { Project, ProjectCategory } from '@/types/project';
import { projectsData } from '@/data/projectsData';
import ProjectFilters from './ProjectFilters';
import FeaturedProject from './FeaturedProject';
import ProjectCard from './ProjectCard';

const FILTER_CATEGORIES: ProjectCategory[] = [
  'All Projects',
  'Turnkey Construction',
  'Gas Systems & MGPS',
  'ICU & Critical Care',
  'Modular OT'
];

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('All Projects');

  // Cast projectsData to Project[]
  const allProjects = useMemo<Project[]>(() => projectsData as Project[], []);

  // Compute dynamic project counts per category
  const categoryCounts = useMemo<Record<ProjectCategory, number>>(() => {
    const counts: Record<ProjectCategory, number> = {
      'All Projects': allProjects.length,
      'Turnkey Construction': 0,
      'Gas Systems & MGPS': 0,
      'ICU & Critical Care': 0,
      'Modular OT': 0
    };

    allProjects.forEach((proj) => {
      if (proj.category === 'Turnkey Construction') counts['Turnkey Construction']++;
      else if (proj.category === 'Gas Systems & MGPS') counts['Gas Systems & MGPS']++;
      else if (proj.category === 'ICU & Critical Care') counts['ICU & Critical Care']++;
      else if (proj.category === 'Modular OT') counts['Modular OT']++;
    });

    return counts;
  }, [allProjects]);

  // Filter projects by active category
  const filteredProjects = useMemo(() => {
    if (activeCategory === 'All Projects') {
      return allProjects;
    }
    return allProjects.filter((project) => project.category === activeCategory);
  }, [allProjects, activeCategory]);

  // Separate featured project from remaining portfolio grid
  const featuredItem = filteredProjects[0];
  const galleryItems = filteredProjects.slice(1);

  return (
    <MotionConfig reducedMotion="user">
      <section 
        className="relative w-full bg-[#F3F2EB] py-16 sm:py-20 lg:py-24 border-b border-[#17645D]/15 overflow-hidden text-[#293D37]"
        aria-labelledby="portfolio-heading"
      >
      {/* 1. Subtle Architectural Blueprint Background & Schematic */}
      <div className="absolute inset-0 pointer-events-none select-none z-0" aria-hidden="true">
        {/* Subtle CAD Drafting Grid */}
        <div 
          className="absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(23, 100, 93, 0.07) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(23, 100, 93, 0.07) 1px, transparent 1px)
            `,
            backgroundSize: '48px 48px'
          }}
        />

        {/* Ambient Warm Atmosphere Glows */}
        <div className="absolute top-0 right-1/4 w-[34rem] h-[34rem] rounded-full bg-[#17645D]/5 blur-3xl" />
        <div className="absolute bottom-0 left-10 w-[30rem] h-[30rem] rounded-full bg-[#D9795C]/6 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 2. Section Header with Editorial Styling & Architectural Outlines */}
        <div className="relative mb-10 sm:mb-12">
          
          {/* Subtle SVG Architectural Blueprint Outline behind the heading */}
          <div className="absolute right-0 top-[-20px] w-64 h-32 opacity-15 hidden md:block pointer-events-none" aria-hidden="true">
            <svg viewBox="0 0 240 120" fill="none" stroke="#17645D" strokeWidth="1">
              <rect x="10" y="10" width="220" height="100" strokeDasharray="4 4" />
              <line x1="10" y1="60" x2="230" y2="60" />
              <line x1="120" y1="10" x2="120" y2="110" />
              <circle cx="120" cy="60" r="24" strokeDasharray="2 2" />
              <text x="20" y="28" fill="#17645D" fontSize="8" fontFamily="monospace">GRID SPEC // ASSAM SECTOR</text>
            </svg>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-[#17645D]/15">
            
            {/* Left Column: Editorial Headline & Copy */}
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-3xl space-y-3.5"
            >
              {/* Technical Indicator Pill */}
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#E6EAE0] border border-[#17645D]/20 text-[#17645D] text-xs font-mono font-bold tracking-widest uppercase shadow-2xs">
                <Compass className="w-3.5 h-3.5 text-[#D9795C]" />
                <span>Healthcare Infrastructure Portfolio</span>
              </div>

              {/* Editorial Heading */}
              <h2 
                id="portfolio-heading"
                className="text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold text-[#293D37] tracking-tight leading-[1.18]"
              >
                Built for Better Healthcare.
              </h2>

              {/* Supporting Editorial Description */}
              <p className="text-sm sm:text-base text-[#293D37]/80 leading-relaxed font-normal max-w-2xl">
                Hospital construction, medical gas systems, modular operating theatres, and healthcare infrastructure delivered across Assam and Eastern India.
              </p>
            </motion.div>

            {/* Right Column: Total Dynamic Metric & Full Archive Link */}
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.65, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-4 flex-shrink-0"
            >
              {/* Total Projects Dynamic Metric */}
              <div className="px-4 py-2.5 rounded-xl bg-white/70 border border-[#17645D]/15 backdrop-blur-sm shadow-subtle flex items-center space-x-3">
                <div className="w-2.5 h-2.5 rounded-full bg-[#17645D] animate-pulse" />
                <div className="text-left">
                  <span className="block text-lg font-mono font-extrabold text-[#17645D] leading-none">
                    {allProjects.length} Projects
                  </span>
                  <span className="text-[10px] font-mono uppercase text-[#293D37]/60 tracking-wider">
                    Eastern India Record
                  </span>
                </div>
              </div>

              {/* Link to Full Archive */}
              <Link
                href="/projects"
                className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl font-bold text-sm text-[#17645D] bg-[#E6EAE0]/80 hover:bg-[#E6EAE0] border border-[#17645D]/20 transition-all duration-200 group shadow-subtle hover:shadow-card focus:outline-none focus:ring-2 focus:ring-[#17645D]"
                aria-label="Explore all projects archive"
              >
                <span>View All Projects</span>
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

          </div>

          {/* 3. Category Filter Controls */}
          <div className="mt-6 flex items-center justify-between gap-4">
            <ProjectFilters
              categories={FILTER_CATEGORIES}
              activeCategory={activeCategory}
              onSelectCategory={setActiveCategory}
              counts={categoryCounts}
            />

            {/* Showing status counter */}
            <span className="hidden md:inline-block text-xs font-mono text-[#293D37]/60 whitespace-nowrap">
              Showing <span className="font-bold text-[#17645D]">{filteredProjects.length}</span> of {allProjects.length} works
            </span>
          </div>

        </div>

        {/* 4. Portfolio Display (Animated Switch) */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Prominent Featured Landscape Project */}
            {featuredItem && (
              <FeaturedProject project={featuredItem} />
            )}

            {/* Remaining Projects Grid (2 columns on tablet, 3 on desktop) */}
            {galleryItems.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
                {galleryItems.map((project, index) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    index={index}
                  />
                ))}
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Bottom Verification Note & Regulatory Assurance */}
        <div className="mt-12 pt-6 border-t border-[#17645D]/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#293D37]/75 font-mono">
          <div className="flex items-center space-x-2">
            <ShieldCheck className="w-4 h-4 text-[#17645D] flex-shrink-0" />
            <span>All projects engineered strictly conforming to NABH, NBC 2016, and HTM 02-01 standards.</span>
          </div>

          <Link
            href="/contact"
            className="text-[#17645D] hover:text-[#D9795C] font-semibold underline underline-offset-4 transition-colors"
          >
            Request Full Infrastructure Dossier &rarr;
          </Link>
        </div>

      </div>
    </section>
    </MotionConfig>
  );
}
