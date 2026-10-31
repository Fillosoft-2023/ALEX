'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import GalleryGrid from '@/components/gallery/GalleryGrid';
import { galleryItems } from '@/data/galleryData';

export default function HomeGallerySection() {
  return (
    <section className="w-full bg-ivory py-10 sm:py-14 border-b border-teal-deep/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Clean Section Header */}
        <div className="flex items-center justify-between mb-6 sm:mb-8 pb-4 border-b border-teal-deep/10">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-charcoal-green tracking-tight">
            Projects Gallery
          </h2>

          <Link
            href="/gallery"
            className="inline-flex items-center text-xs sm:text-sm font-bold text-teal-deep hover:text-coral-accent transition-colors group"
          >
            <span>View All ({galleryItems.length})</span>
            <ArrowRight className="ml-1.5 w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Clean Gallery Grid without filter clutter */}
        <GalleryGrid 
          initialCategory="all" 
          limit={8} 
          showFilters={false} 
        />

      </div>
    </section>
  );
}
