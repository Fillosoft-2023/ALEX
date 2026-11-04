'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ProjectCategory } from '@/types/project';

interface ProjectFiltersProps {
  categories: ProjectCategory[];
  activeCategory: ProjectCategory;
  onSelectCategory: (category: ProjectCategory) => void;
  counts: Record<ProjectCategory, number>;
}

export default function ProjectFilters({
  categories,
  activeCategory,
  onSelectCategory,
  counts
}: ProjectFiltersProps) {

  return (
    <nav 
      aria-label="Project portfolio categories"
      className="flex items-center overflow-x-auto no-scrollbar py-2 gap-2 sm:gap-2.5"
    >
      <div 
        role="tablist" 
        aria-orientation="horizontal"
        className="inline-flex items-center p-1 rounded-full bg-white/10 border border-white/20 backdrop-blur-md"
      >
        {categories.map((category) => {
          const isActive = activeCategory === category;
          const count = counts[category] || 0;

          return (
            <button
              key={category}
              role="tab"
              aria-selected={isActive}
              tabIndex={isActive ? 0 : -1}
              onClick={() => onSelectCategory(category)}
              className={`relative px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold transition-colors duration-200 flex items-center space-x-1.5 sm:space-x-2 whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 font-jost uppercase tracking-wider cursor-pointer ${
                isActive
                  ? 'text-white font-bold'
                  : 'text-white/75 hover:text-white hover:bg-white/10'
              }`}
            >
              {/* Active animated background bubble */}
              {isActive && (
                <motion.div
                  layoutId="activeProjectFilterBubble"
                  className="absolute inset-0 rounded-full bg-teal-deep border border-amber-400/50 shadow-sm z-0"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}

              {/* Label */}
              <span className="relative z-10">{category}</span>

              {/* Count badge */}
              <span
                className={`relative z-10 text-[10px] font-mono font-bold px-1.5 py-0.5 rounded-full transition-colors ${
                  isActive
                    ? 'bg-amber-400/30 text-amber-300'
                    : 'bg-white/10 text-white/70'
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
