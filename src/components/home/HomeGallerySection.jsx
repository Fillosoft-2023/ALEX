'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import GalleryGrid from '@/components/gallery/GalleryGrid';
import { galleryItems } from '@/data/galleryData';

export default function HomeGallerySection() {
  return (
    <section className="relative w-full bg-[#fcfbfa] py-12 sm:py-16 border-b border-teal-deep/15 overflow-hidden">
      {/* Subtle CAD Drafting Grid Background */}
      <div 
        className="absolute inset-0 opacity-[0.25] pointer-events-none" 
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(16, 75, 77, 0.08) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(16, 75, 77, 0.08) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
        aria-hidden="true" 
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Clean Section Header */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-teal-deep/15">
          <div className="space-y-1">
            <span className="text-[11px] font-mono font-bold tracking-widest uppercase text-teal-deep/70">
              Visual Documentation // Project Sites
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-charcoal-green tracking-tight font-serif">
              Healthcare Infrastructure Gallery
            </h2>
          </div>

          <Link
            href="/gallery"
            className="inline-flex items-center text-xs sm:text-sm font-bold text-teal-deep hover:text-amber-700 transition-colors group px-4 py-2 rounded-full border border-teal-deep/20 hover:border-teal-deep/40 bg-white shadow-2xs"
          >
            <span>View All ({galleryItems.length})</span>
            <ArrowRight className="ml-1.5 w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Interactive Gallery Grid with Category Filters & Lightbox */}
        <GalleryGrid 
          initialCategory="all" 
          limit={8} 
          showFilters={true} 
        />

      </div>
    </section>
  );
}
