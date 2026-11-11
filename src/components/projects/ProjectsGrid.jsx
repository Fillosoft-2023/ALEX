'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { MapPin, ArrowRight, Building2, Calendar, CheckCircle2, Filter, Sparkles } from 'lucide-react';
import { projectsData } from '@/data/projectsData';

export default function ProjectsGrid({ initialProjects = null }) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const allProjects = initialProjects && initialProjects.length > 0 ? initialProjects : projectsData;

  const categories = [
    { key: 'all', label: 'All Projects', count: allProjects.length },
    { key: 'turnkey', label: 'Turnkey Construction', count: allProjects.filter(p => p.categoryKey === 'turnkey').length },
    { key: 'mgps', label: 'Gas Systems & MGPS', count: allProjects.filter(p => p.categoryKey === 'mgps').length },
    { key: 'ot', label: 'Modular OT', count: allProjects.filter(p => p.categoryKey === 'ot').length },
    { key: 'icu', label: 'ICU & Critical Care', count: allProjects.filter(p => p.categoryKey === 'icu').length },
  ];

  const filteredProjects = selectedCategory === 'all'
    ? allProjects
    : allProjects.filter(p => p.categoryKey === selectedCategory);

  return (
    <div className="space-y-12">
      
      {/* Category Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 border-b border-teal-deep/15 pb-8">
        <div className="hidden sm:flex items-center space-x-1.5 text-xs font-bold uppercase tracking-wider text-charcoal-green/60 mr-2 font-jost">
          <Filter className="w-3.5 h-3.5 text-forest" />
          <span>Filter Vertical:</span>
        </div>
        {categories.map((cat) => {
          const isActive = selectedCategory === cat.key;
          return (
            <button
              key={cat.key}
              onClick={() => setSelectedCategory(cat.key)}
              className={`px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold tracking-tight transition-all duration-300 flex items-center space-x-2 cursor-pointer font-jost uppercase ${
                isActive
                  ? 'bg-teal-deep text-white shadow-elevated ring-2 ring-amber-400/40'
                  : 'bg-white hover:bg-sage/40 text-charcoal-green border border-teal-deep/20 hover:border-teal-deep/40'
              }`}
            >
              <span>{cat.label}</span>
              <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full ${
                isActive ? 'bg-white/20 text-white font-bold' : 'bg-sage/60 text-teal-deep font-semibold'
              }`}>
                {cat.count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Projects Grid */}
      <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-6 lg:gap-8">
        <AnimatePresence mode="popLayout">
        {filteredProjects.map((project, index) => (
          <motion.div
            layout
            key={project.id}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.45, delay: Math.min(index * 0.06, 0.36), ease: [0.16, 1, 0.3, 1] }}
            className="group relative bg-white rounded-3xl overflow-hidden border border-teal-deep/15 shadow-subtle hover:shadow-elevated transition-all duration-300 flex flex-col justify-between gpu-accelerate hover:-translate-y-2"
          >
            {/* Top gold shimmer highlight on hover */}
            <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#c8b082] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20" />

            <div>
              {/* Project Image */}
              <div className="relative h-56 w-full overflow-hidden bg-charcoal-green">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-green/90 via-charcoal-green/30 to-black/20" />
                
                {/* Modern Ambient Bioluminescent Glow on Hover */}
                <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/0 via-teal-400/10 to-emerald-400/25 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                {/* Badges */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                  <span className="px-3 py-1 rounded-md text-[10px] font-bold tracking-widest font-jost uppercase bg-teal-deep/95 text-white backdrop-blur-sm border border-white/20 shadow-xs">
                    {project.category}
                  </span>
                  <span className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-white/95 text-charcoal-green backdrop-blur-sm flex items-center space-x-1 shadow-xs font-lora">
                    <MapPin className="w-3 h-3 text-coral-accent" />
                    <span>{project.location}</span>
                  </span>
                </div>

                <div className="absolute bottom-3 left-4 right-4 text-white">
                  <div className="text-xs font-semibold text-amber-300 font-mono tracking-wide">{project.capacity}</div>
                  <h3 className="text-lg font-bold font-serif truncate">{project.title}</h3>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 space-y-4">
                <p className="text-xs sm:text-sm text-charcoal-green/75 leading-relaxed line-clamp-3 font-lora">
                  {project.summary}
                </p>

                {/* Scope Highlights */}
                <div className="pt-3 border-t border-teal-deep/10">
                  <div className="text-[10px] font-bold uppercase tracking-widest font-jost text-teal-deep mb-2 flex items-center space-x-1">
                    <Sparkles className="w-3 h-3 text-coral-accent" />
                    <span>Verified Scope Highlights:</span>
                  </div>
                  <ul className="space-y-1.5 text-xs text-charcoal-green/85 font-lora">
                    {project.scopeList.slice(0, 3).map((item, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-coral-accent mt-0.5 flex-shrink-0" />
                        <span className="line-clamp-1">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Link Button */}
            <div className="px-6 pb-6 pt-0 sm:px-7 sm:pb-7">
              <Link
                href={`/projects/${project.id}`}
                className="w-full inline-flex items-center justify-between py-3 px-4 rounded-xl text-xs font-bold text-teal-deep bg-[#f4f7f4] hover:bg-teal-deep hover:text-white border border-teal-deep/20 transition-all duration-200 group/btn font-jost uppercase tracking-wider"
              >
                <span>Read Full Case Study</span>
                <ArrowRight className="w-3.5 h-3.5 text-coral-accent group-hover/btn:translate-x-1.5 transition-transform" />
              </Link>
            </div>
          </motion.div>
        ))}
        </AnimatePresence>
      </motion.div>

    </div>
  );
}
