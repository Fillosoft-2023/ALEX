'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import { 
  MapPin, 
  ZoomIn, 
  Sparkles, 
  SlidersHorizontal,
  Building,
  CheckCircle2
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
      {/* Category Filter Tabs */}
      {showFilters && (
        <div className="mb-6 sm:mb-8">
          <div className="flex items-center space-x-2 pb-2 overflow-x-auto no-scrollbar sm:flex-wrap sm:gap-2">
            {galleryCategories.map((cat) => {
              const isActive = activeCategory === cat.id;
              const count = categoryCounts[cat.id] || 0;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  type="button"
                  className={`px-3.5 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all whitespace-nowrap flex items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-teal-deep ${
                    isActive
                      ? 'bg-teal-deep text-white shadow-subtle ring-1 ring-teal-deep'
                      : 'bg-white hover:bg-sage/40 text-charcoal-green/85 border border-teal-deep/15 shadow-xs'
                  }`}
                >
                  {cat.id === 'asset-photos' && (
                    <Sparkles className={`w-3.5 h-3.5 ${isActive ? 'text-coral-accent' : 'text-teal-deep'}`} />
                  )}
                  <span>{cat.name}</span>
                  <span className={`text-[10px] sm:text-xs px-1.5 py-0.5 rounded-full font-bold ${
                    isActive ? 'bg-white/20 text-white' : 'bg-teal-deep/10 text-teal-deep'
                  }`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Grid: 2 CARDS IN A ROW FOR MOBILE (grid-cols-2), 3 on md, 4 on lg */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2.5 sm:gap-4 lg:gap-6">
        <AnimatePresence>
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1, margin: '0px 0px -40px 0px' }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.65, delay: (index % 4) * 0.08, ease: [0.22, 1, 0.36, 1] }}
              style={{ willChange: 'transform, opacity' }}
              onClick={() => handleOpenLightbox(index)}
              className="group relative cursor-pointer rounded-xl sm:rounded-2xl overflow-hidden bg-charcoal-green border border-teal-deep/15 shadow-subtle hover:shadow-float transition-shadow duration-300 focus:outline-none focus:ring-2 focus:ring-teal-deep"
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
              {/* Photo Box with aspect-[4/3] on mobile for clean 2-card fit */}
              <div className="relative w-full aspect-[4/3] sm:aspect-[4/3] overflow-hidden">
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  className="object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />

                {/* Dark Contrast Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-green/95 via-charcoal-green/35 to-black/15 group-hover:from-charcoal-green group-hover:via-charcoal-green/50 transition-colors" />

                {/* Top Badge (Asset / Category) */}
                <div className="absolute top-2 left-2 right-2 flex items-center justify-between gap-1 z-10 pointer-events-none">
                  {item.isPrimaryAsset ? (
                    <span className="inline-flex items-center space-x-0.5 sm:space-x-1 px-1.5 sm:px-2.5 py-0.5 rounded-md text-[9px] sm:text-[11px] font-extrabold uppercase tracking-wider bg-coral-accent/95 text-white shadow-sm backdrop-blur-sm">
                      <Sparkles className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                      <span>Asset Photo</span>
                    </span>
                  ) : (
                    <span className="inline-flex items-center px-1.5 sm:px-2 py-0.5 rounded-md text-[9px] sm:text-[10px] font-bold uppercase tracking-wider bg-black/60 text-white/90 backdrop-blur-sm">
                      {item.tag}
                    </span>
                  )}

                  {/* Zoom Icon indicator */}
                  <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:scale-110">
                    <ZoomIn className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                  </div>
                </div>

                {/* Bottom Overlay Info (Optimized for 2 cards in a row on mobile) */}
                <div className="absolute bottom-2 left-2 right-2 sm:bottom-3 sm:left-3 sm:right-3 z-10 space-y-0.5 sm:space-y-1 text-white">
                  <div className="flex items-center space-x-1 text-[10px] sm:text-xs font-semibold text-coral-accent">
                    <MapPin className="w-2.5 h-2.5 sm:w-3 sm:h-3 flex-shrink-0" />
                    <span className="truncate">{item.location}</span>
                  </div>
                  <h3 className="text-xs sm:text-sm font-bold text-white group-hover:text-sage transition-colors leading-snug line-clamp-1 sm:line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-[10px] sm:text-[11px] text-ivory/70 line-clamp-1 hidden sm:block">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
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
