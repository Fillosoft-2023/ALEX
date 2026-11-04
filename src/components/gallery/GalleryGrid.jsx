'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import {
  MapPin,
  ZoomIn,
  Sparkles,
  Building2,
  Activity,
  Layers,
  CheckCircle2,
  ArrowUpRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { galleryItems, galleryCategories } from '@/data/galleryData';
import GalleryLightbox from './GalleryLightbox';

export default function GalleryGrid({
  initialCategory = 'all',
  limit = null,
  showFilters = true,
  showCategoryHeader = true,
  onImageClick = null,
}) {
  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  // Filter items based on active category
  const filteredItems = useMemo(() => {
    let list = galleryItems;
    if (activeCategory !== 'all') {
      list = list.filter((item) => item.categoryKey === activeCategory);
    }
    return limit ? list.slice(0, limit) : list;
  }, [activeCategory, limit]);

  const handleOpenLightbox = (index) => {
    if (onImageClick) {
      onImageClick(filteredItems[index]);
      return;
    }
    setSelectedIndex(index);
    setLightboxOpen(true);
  };

  const handleNext = () => {
    setSelectedIndex((prev) => (prev + 1) % filteredItems.length);
  };

  const handlePrev = () => {
    setSelectedIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
  };

  // Calculate count for each category
  const categoryCounts = useMemo(() => {
    const counts = { all: galleryItems.length };
    galleryCategories.forEach(cat => {
      if (cat.id !== 'all') {
        counts[cat.id] = galleryItems.filter(item => item.categoryKey === cat.id).length;
      }
    });
    return counts;
  }, []);

  return (
    <div className="w-full">
      {/* Category Filter Tabs with Architectural Frosted Styling */}
      {showFilters && (
        <div className="mb-8 sm:mb-10">
          <div className="flex items-center space-x-2 pb-2 overflow-x-auto no-scrollbar sm:flex-wrap sm:gap-2.5">
            {galleryCategories.map((cat) => {
              const isActive = activeCategory === cat.id;
              const count = categoryCounts[cat.id] || 0;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  type="button"
                  className={`relative px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 whitespace-nowrap flex items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-teal-deep cursor-pointer font-jost uppercase tracking-wider ${isActive
                      ? 'bg-teal-deep text-white shadow-elevated border border-amber-400/40'
                      : 'bg-white hover:bg-sage/40 text-charcoal-green/85 border border-teal-deep/15 shadow-xs'
                    }`}
                >
                  {cat.id === 'asset-photos' && (
                    <Sparkles className={`w-3.5 h-3.5 ${isActive ? 'text-amber-300' : 'text-coral-accent'}`} />
                  )}
                  <span>{cat.name}</span>
                  <span className={`text-[10px] sm:text-xs px-2 py-0.5 rounded-full font-mono font-bold transition-colors ${isActive ? 'bg-amber-400/30 text-amber-300' : 'bg-teal-deep/10 text-teal-deep'
                    }`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Architectural Bento Masonry Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-7 auto-rows-[340px] sm:auto-rows-[380px]">
        <AnimatePresence mode="popLayout">
          {filteredItems.map((item, index) => {
            // Determine Bento Spanning: Give featured / primary asset photos wider presence
            const isWide = (activeCategory === 'all' || activeCategory === 'asset-photos') &&
              (index === 0 || index === 5 || index === 10);

            return (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.5, delay: (index % 6) * 0.06, ease: [0.22, 1, 0.36, 1] }}
                onClick={() => handleOpenLightbox(index)}
                className={`group relative cursor-pointer rounded-2xl sm:rounded-3xl overflow-hidden border border-white/20 bg-gradient-to-b from-[#133a33]/95 via-[#0e2c26]/95 to-[#081e1a]/98 shadow-[0_12px_36px_rgba(0,0,0,0.28)] hover:shadow-[0_24px_55px_rgba(21,94,99,0.38)] hover:border-amber-400/60 transition-all duration-500 focus:outline-none focus:ring-2 focus:ring-amber-400 gpu-accelerate hover:-translate-y-1.5 flex flex-col justify-between ${isWide ? 'sm:col-span-2' : 'col-span-1'
                  }`}
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleOpenLightbox(index);
                  }
                }}
                role="button"
                aria-label={`View photo of ${item.title}`}
              >
                {/* Top Gold Shimmer Highlight on Hover */}
                <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-amber-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-30" />

                {/* CAD Technical Crosshair Corners */}
                <span className="absolute top-2.5 left-2.5 text-[9px] font-mono text-amber-400/40 group-hover:text-amber-400/90 transition-colors pointer-events-none z-20">+</span>
                <span className="absolute top-2.5 right-2.5 text-[9px] font-mono text-amber-400/40 group-hover:text-amber-400/90 transition-colors pointer-events-none z-20">+</span>
                <span className="absolute bottom-2.5 left-2.5 text-[9px] font-mono text-amber-400/40 group-hover:text-amber-400/90 transition-colors pointer-events-none z-20">+</span>
                <span className="absolute bottom-2.5 right-2.5 text-[9px] font-mono text-amber-400/40 group-hover:text-amber-400/90 transition-colors pointer-events-none z-20">+</span>

                {/* Main Full-Bleed Photograph */}
                <div className="absolute inset-0 z-0 bg-[#0a1e19] overflow-hidden">
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    className="object-cover object-center group-hover:scale-106 transition-transform duration-700 ease-out"
                    sizes={isWide ? "(max-width: 768px) 100vw, 66vw" : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"}
                  />

                  {/* Multi-layered Architectural Contrast Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#081e1a] via-[#0e2c26]/60 to-black/35 group-hover:via-[#0e2c26]/50 transition-colors duration-500 pointer-events-none" />

                  {/* Subtle Blueprint Mesh Accent on Hover */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none"
                    style={{
                      backgroundImage: `linear-gradient(to right, rgba(255,202,40,0.3) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,202,40,0.3) 1px, transparent 1px)`,
                      backgroundSize: '32px 32px'
                    }}
                  />
                </div>

                {/* Top Overlay Badges */}
                <div className="relative z-10 p-3.5 sm:p-4 flex items-center justify-between gap-2 pointer-events-none">
                  {item.isPrimaryAsset ? (
                    <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-[10px] sm:text-[11px] font-mono font-bold tracking-wider uppercase bg-teal-deep/90 text-amber-300 backdrop-blur-md border border-amber-400/40 shadow-sm">
                      <Sparkles className="w-3 h-3 text-amber-400" />
                      <span>Verified Facade</span>
                    </span>
                  ) : (
                    <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-mono font-bold tracking-wider uppercase bg-black/60 text-white/95 backdrop-blur-md border border-white/15">
                      {item.tag || item.category}
                    </span>
                  )}

                  <span className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-black/55 text-ivory backdrop-blur-md border border-white/15 shadow-sm">
                    <MapPin className="w-3 h-3 text-amber-400 flex-shrink-0" />
                    <span>{item.location}</span>
                  </span>
                </div>

                {/* Bottom Overlay Content */}
                <div className="relative z-10 p-4 sm:p-5 space-y-2.5">
                  {/* Subtitle / Department tag */}
                  <div className="flex items-center space-x-2 text-xs font-mono text-amber-300/90 uppercase tracking-widest">
                    <Building2 className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                    <span className="truncate">{item.subtitle}</span>
                  </div>

                  {/* Main Title */}
                  <h3 className="text-base sm:text-lg lg:text-xl font-bold text-white group-hover:text-amber-200 transition-colors leading-snug line-clamp-2 font-serif">
                    {item.title}
                  </h3>

                  {/* Wide Card Highlight Snippet */}
                  {isWide && item.caption && (
                    <p className="text-xs text-ivory/80 line-clamp-2 font-lora leading-relaxed hidden sm:block">
                      {item.caption}
                    </p>
                  )}

                  {/* Action Bar with Inspect Trigger */}
                  <div className="pt-2 border-t border-white/15 flex items-center justify-between text-xs">
                    <div className="flex items-center space-x-1.5 text-amber-300 font-bold font-jost uppercase tracking-wider text-[11px] group-hover:text-white transition-colors">
                      <ZoomIn className="w-3.5 h-3.5" />
                      <span>Inspect High-Res</span>
                    </div>

                    <div className="w-7 h-7 rounded-full bg-white/15 text-white group-hover:bg-amber-400 group-hover:text-charcoal-green group-hover:border-amber-400 border border-white/20 flex items-center justify-center transition-all duration-300 shadow-sm">
                      <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Lightbox Modal */}
      <GalleryLightbox
        isOpen={lightboxOpen}
        currentIndex={selectedIndex}
        items={filteredItems}
        onClose={() => setLightboxOpen(false)}
        onNext={handleNext}
        onPrev={handlePrev}
      />
    </div>
  );
}
