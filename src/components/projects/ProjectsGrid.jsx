'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MapPin, ArrowRight, Building2, Calendar, CheckCircle2, Filter } from 'lucide-react';
import { projectsData } from '@/data/projectsData';

export default function ProjectsGrid() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { key: 'all', label: 'All Projects', count: projectsData.length },
    { key: 'turnkey', label: 'Turnkey Construction', count: projectsData.filter(p => p.categoryKey === 'turnkey').length },
    { key: 'mgps', label: 'Gas Systems & MGPS', count: projectsData.filter(p => p.categoryKey === 'mgps').length },
    { key: 'ot', label: 'Modular OT', count: projectsData.filter(p => p.categoryKey === 'ot').length },
    { key: 'icu', label: 'ICU & Critical Care', count: projectsData.filter(p => p.categoryKey === 'icu').length },
  ];

  const filteredProjects = selectedCategory === 'all'
    ? projectsData
    : projectsData.filter(p => p.categoryKey === selectedCategory);

  return (
    <div className="space-y-10">
      
      {/* Category Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 border-b border-teal-deep/15 pb-6">
        <div className="hidden sm:flex items-center space-x-1.5 text-xs font-bold uppercase tracking-wider text-charcoal-green/60 mr-2">
          <Filter className="w-3.5 h-3.5 text-forest" />
          <span>Filter By:</span>
        </div>
        {categories.map((cat) => {
          const isActive = selectedCategory === cat.key;
          return (
            <button
              key={cat.key}
              onClick={() => setSelectedCategory(cat.key)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold tracking-tight transition-all duration-200 flex items-center space-x-1.5 ${
                isActive
                  ? 'bg-teal-deep text-white shadow-sm'
                  : 'bg-white hover:bg-sage/40 text-charcoal-green border border-teal-deep/15'
              }`}
            >
              <span>{cat.label}</span>
              <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                isActive ? 'bg-white/20 text-white' : 'bg-sage/60 text-teal-deep'
              }`}>
                {cat.count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-6 lg:gap-8">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="group bg-white rounded-2xl overflow-hidden border border-teal-deep/15 shadow-subtle hover:shadow-float transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              {/* Project Image */}
              <div className="relative h-52 w-full overflow-hidden bg-charcoal-green">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-green/80 via-transparent to-black/20" />
                
                {/* Badges */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded-md text-[11px] font-bold tracking-wider uppercase bg-teal-deep/90 text-white backdrop-blur-sm">
                    {project.category}
                  </span>
                  <span className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-white/90 text-charcoal-green backdrop-blur-sm flex items-center space-x-1">
                    <MapPin className="w-3 h-3 text-coral-accent" />
                    <span>{project.location}</span>
                  </span>
                </div>

                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <div className="text-xs font-semibold text-coral-accent">{project.capacity}</div>
                  <h3 className="text-lg font-bold truncate">{project.title}</h3>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 space-y-4">
                <p className="text-xs sm:text-sm text-charcoal-green/75 leading-relaxed line-clamp-3">
                  {project.summary}
                </p>

                {/* Scope Highlights */}
                <div className="pt-2 border-t border-teal-deep/10">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-teal-deep/70 mb-1.5">
                    Verified Scope:
                  </div>
                  <ul className="space-y-1 text-xs text-charcoal-green/80">
                    {project.scopeList.slice(0, 3).map((item, idx) => (
                      <li key={idx} className="flex items-start space-x-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-forest mt-0.5 flex-shrink-0" />
                        <span className="line-clamp-1">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Link Button */}
            <div className="px-6 pb-6 pt-0">
              <Link
                href={`/projects/${project.id}`}
                className="w-full inline-flex items-center justify-between py-2.5 px-4 rounded-xl text-xs font-bold text-teal-deep bg-ivory hover:bg-sage/40 border border-teal-deep/15 transition-all group/btn"
              >
                <span>Read Full Project Case Study</span>
                <ArrowRight className="w-3.5 h-3.5 text-coral-accent group-hover/btn:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
