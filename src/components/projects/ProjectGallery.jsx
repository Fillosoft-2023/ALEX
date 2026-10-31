'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { 
  Camera, 
  Maximize2, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  ShieldCheck, 
  Sparkles,
  Layers
} from 'lucide-react';

export default function ProjectGallery({ images = [], projectTitle = 'Project' }) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  // Normalize image data to { src, title, caption }
  const normalizedImages = (images && images.length > 0 ? images : []).map((img, idx) => {
    if (typeof img === 'string') {
      return {
        src: img,
        title: `${projectTitle} - View ${idx + 1}`,
        caption: 'Authentic project site photography & healthcare installation',
      };
    }
    return {
      src: img.src || img,
      title: img.title || `${projectTitle} - View ${idx + 1}`,
      caption: img.caption || 'Authentic project site photography & healthcare installation',
    };
  });

  if (normalizedImages.length === 0) {
    return null;
  }

  const activeImage = normalizedImages[selectedIndex] || normalizedImages[0];

  const handlePrev = (e) => {
    if (e) e.stopPropagation();
    setSelectedIndex((prev) => (prev === 0 ? normalizedImages.length - 1 : prev - 1));
  };

  const handleNext = (e) => {
    if (e) e.stopPropagation();
    setSelectedIndex((prev) => (prev === normalizedImages.length - 1 ? 0 : prev + 1));
  };

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (!lightboxOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setLightboxOpen(false);
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen]);

  return (
    <div id="project-gallery-section" className="bg-white rounded-2xl p-6 sm:p-8 border border-teal-deep/15 shadow-subtle space-y-6">
      
      {/* Gallery Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-teal-deep/10 pb-4">
        <div className="space-y-1">
          <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-teal-deep">
            <Camera className="w-4 h-4 text-forest" />
            <span>Facility &amp; Infrastructure Site Visuals</span>
          </div>
          <p className="text-xs text-charcoal-green/70">
            Real photography of completed hospital building facade, medical utility pipelines, and surgical cleanrooms.
          </p>
        </div>

        <div className="flex items-center space-x-2 self-start sm:self-auto">
          <span className="inline-flex items-center space-x-1 text-[11px] font-semibold text-forest bg-sage/60 px-2.5 py-1 rounded-full">
            <ShieldCheck className="w-3.5 h-3.5 text-forest" />
            <span>Verified Site Photos</span>
          </span>
          <span className="text-xs text-charcoal-green/60 font-medium">
            {selectedIndex + 1} / {normalizedImages.length}
          </span>
        </div>
      </div>

      {/* Main Interactive Viewer */}
      <div 
        id="project-gallery-featured-view"
        onClick={() => setLightboxOpen(true)}
        className="group relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-2xl overflow-hidden bg-charcoal-green cursor-pointer shadow-inner border border-teal-deep/10"
      >
        <Image
          src={activeImage.src}
          alt={activeImage.title}
          fill
          priority
          className="object-cover object-center group-hover:scale-[1.02] transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 800px"
        />

        {/* Ambient Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-green/90 via-charcoal-green/15 to-black/20 pointer-events-none" />

        {/* Enlarge / Fullscreen Prompt */}
        <div className="absolute top-4 right-4 z-10">
          <button
            id="gallery-enlarge-btn"
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setLightboxOpen(true);
            }}
            className="flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-charcoal-green/80 hover:bg-teal-deep text-white text-xs font-semibold backdrop-blur-md transition-all shadow-md group/btn"
          >
            <Maximize2 className="w-3.5 h-3.5 text-sage group-hover/btn:scale-110 transition-transform" />
            <span className="hidden sm:inline">Enlarge Photo</span>
          </button>
        </div>

        {/* Navigation Arrows (if > 1 image) */}
        {normalizedImages.length > 1 && (
          <>
            <button
              id="gallery-prev-btn"
              type="button"
              onClick={handlePrev}
              aria-label="Previous Image"
              className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-charcoal-green/75 hover:bg-teal-deep text-white flex items-center justify-center backdrop-blur-md transition-all opacity-80 group-hover:opacity-100 shadow-md"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              id="gallery-next-btn"
              type="button"
              onClick={handleNext}
              aria-label="Next Image"
              className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-charcoal-green/75 hover:bg-teal-deep text-white flex items-center justify-center backdrop-blur-md transition-all opacity-80 group-hover:opacity-100 shadow-md"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </>
        )}

        {/* Caption & Metadata Strip at bottom */}
        <div className="absolute bottom-0 inset-x-0 p-4 sm:p-6 text-white z-10 pointer-events-none">
          <div className="max-w-2xl space-y-1">
            <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-coral-accent bg-black/40 px-2 py-0.5 rounded-md inline-block backdrop-blur-sm">
              Photo {selectedIndex + 1} of {normalizedImages.length}
            </span>
            <h4 className="text-base sm:text-lg font-bold text-white drop-shadow-sm">
              {activeImage.title}
            </h4>
            {activeImage.caption && (
              <p className="text-xs sm:text-sm text-ivory/85 line-clamp-2 drop-shadow-sm">
                {activeImage.caption}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Thumbnails Row */}
      {normalizedImages.length > 1 && (
        <div className="space-y-2">
          <div className="text-[11px] font-bold uppercase tracking-wider text-charcoal-green/60">
            Available Facility Angles ({normalizedImages.length})
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
            {normalizedImages.map((img, idx) => {
              const isActive = selectedIndex === idx;
              return (
                <button
                  key={idx}
                  id={`gallery-thumb-${idx}`}
                  type="button"
                  onClick={() => setSelectedIndex(idx)}
                  className={`group relative aspect-[4/3] rounded-xl overflow-hidden bg-charcoal-green transition-all duration-200 focus:outline-none ${
                    isActive
                      ? 'ring-2 ring-forest ring-offset-2 scale-[1.02] shadow-md'
                      : 'opacity-70 hover:opacity-100 border border-teal-deep/15'
                  }`}
                >
                  <Image
                    src={img.src}
                    alt={img.title}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform"
                    sizes="120px"
                  />
                  <div className={`absolute inset-0 transition-opacity ${
                    isActive ? 'bg-transparent' : 'bg-black/20 group-hover:bg-transparent'
                  }`} />
                  <span className="absolute bottom-1 right-1 text-[9px] font-bold px-1.5 py-0.2 rounded bg-black/70 text-white">
                    #{idx + 1}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Fullscreen Lightbox Modal */}
      {lightboxOpen && (
        <div 
          id="gallery-lightbox-modal"
          role="dialog"
          aria-modal="true"
          onClick={() => setLightboxOpen(false)}
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col justify-between p-4 sm:p-8 animate-fadeIn"
        >
          {/* Lightbox Topbar */}
          <div className="flex items-center justify-between text-white z-20">
            <div className="space-y-0.5">
              <span className="text-xs text-coral-accent font-bold uppercase tracking-wider">
                {projectTitle} &bull; Photo {selectedIndex + 1} of {normalizedImages.length}
              </span>
              <h3 className="text-sm sm:text-base font-bold text-white">
                {activeImage.title}
              </h3>
            </div>

            <button
              id="lightbox-close-btn"
              type="button"
              onClick={() => setLightboxOpen(false)}
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Lightbox Center Image View */}
          <div 
            onClick={(e) => e.stopPropagation()}
            className="relative flex-1 max-h-[75vh] w-full max-w-5xl mx-auto my-4 flex items-center justify-center"
          >
            <div className="relative w-full h-full">
              <Image
                src={activeImage.src}
                alt={activeImage.title}
                fill
                priority
                className="object-contain"
                sizes="100vw"
              />
            </div>

            {/* Prev / Next controls in Lightbox */}
            {normalizedImages.length > 1 && (
              <>
                <button
                  id="lightbox-prev-btn"
                  type="button"
                  onClick={handlePrev}
                  className="absolute left-2 sm:-left-12 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/15 hover:bg-white/30 text-white flex items-center justify-center transition-all shadow-lg"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  id="lightbox-next-btn"
                  type="button"
                  onClick={handleNext}
                  className="absolute right-2 sm:-right-12 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/15 hover:bg-white/30 text-white flex items-center justify-center transition-all shadow-lg"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </>
            )}
          </div>

          {/* Lightbox Bottom Caption & Thumbnails */}
          <div 
            onClick={(e) => e.stopPropagation()}
            className="text-center text-white space-y-3 max-w-3xl mx-auto z-20"
          >
            {activeImage.caption && (
              <p className="text-xs sm:text-sm text-ivory/80">
                {activeImage.caption}
              </p>
            )}

            {/* Mini thumbnails strip */}
            {normalizedImages.length > 1 && (
              <div className="flex items-center justify-center gap-2 overflow-x-auto py-1">
                {normalizedImages.map((img, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setSelectedIndex(idx)}
                    className={`relative w-14 h-10 rounded-lg overflow-hidden flex-shrink-0 transition-all ${
                      selectedIndex === idx ? 'ring-2 ring-forest scale-105' : 'opacity-50 hover:opacity-100'
                    }`}
                  >
                    <Image src={img.src} alt={img.title} fill className="object-cover" sizes="60px" />
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

    </div>
  );
}
