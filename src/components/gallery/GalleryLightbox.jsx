'use client';

import { useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  X, 
  ChevronLeft, 
  ChevronRight, 
  MapPin, 
  ArrowUpRight, 
  ShieldCheck, 
  Sparkles,
  PhoneCall
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function GalleryLightbox({
  isOpen,
  currentIndex,
  items,
  onClose,
  onNext,
  onPrev
}) {
  const currentItem = items && items[currentIndex] ? items[currentIndex] : null;

  // Keyboard navigation
  const handleKeyDown = useCallback((e) => {
    if (!isOpen) return;
    if (e.key === 'Escape') onClose();
    if (e.key === 'ArrowRight') onNext();
    if (e.key === 'ArrowLeft') onPrev();
  }, [isOpen, onClose, onNext, onPrev]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, handleKeyDown]);

  if (!isOpen || !currentItem) return null;

  return (
    <AnimatePresence>
      <div 
        className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-charcoal-green/95 backdrop-blur-md"
        role="dialog"
        aria-modal="true"
      >
        {/* Backdrop Click */}
        <div 
          className="absolute inset-0"
          onClick={onClose}
          aria-hidden="true"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="relative z-10 w-full max-w-5xl max-h-[92vh] flex flex-col bg-charcoal-green border border-teal-deep/30 rounded-2xl shadow-2xl overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Top Bar */}
          <div className="flex items-center justify-between px-4 py-3 sm:px-6 sm:py-3.5 bg-black/40 border-b border-white/10 text-ivory">
            <div className="flex items-center space-x-2 sm:space-x-3 overflow-hidden">
              {currentItem.isPrimaryAsset ? (
                <span className="inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider bg-coral-accent/90 text-white flex-shrink-0">
                  <Sparkles className="w-3 h-3 mr-0.5" />
                  <span>Verified Asset Photo</span>
                </span>
              ) : (
                <span className="inline-flex items-center px-2 py-0.5 rounded-md text-[11px] font-bold uppercase tracking-wider bg-teal-deep/80 text-white flex-shrink-0">
                  {currentItem.category}
                </span>
              )}
              <span className="text-xs text-ivory/60 truncate hidden sm:inline">
                Photo {currentIndex + 1} of {items.length}
              </span>
            </div>

            <div className="flex items-center space-x-2">
              <span className="text-xs text-ivory/60 sm:hidden">
                {currentIndex + 1}/{items.length}
              </span>
              <button
                type="button"
                onClick={onClose}
                className="p-1.5 rounded-lg text-ivory/80 hover:text-white hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-teal-deep"
                aria-label="Close photo preview"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Main Content Area: Image + Details */}
          <div className="flex flex-col lg:flex-row flex-1 overflow-y-auto min-h-0 bg-charcoal-green">
            {/* Image Preview Canvas */}
            <div className="relative w-full lg:w-3/5 h-64 sm:h-80 md:h-96 lg:h-auto min-h-[260px] lg:min-h-[460px] bg-black/60 flex items-center justify-center overflow-hidden">
              <Image
                src={currentItem.src}
                alt={currentItem.title}
                fill
                priority
                className="object-contain p-2 sm:p-4"
                sizes="(max-width: 1024px) 100vw, 60vw"
              />

              {/* Prev Button */}
              {items.length > 1 && (
                <button
                  type="button"
                  onClick={onPrev}
                  className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 p-2 sm:p-2.5 rounded-full bg-black/60 text-white hover:bg-teal-deep/90 transition-colors backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-coral-accent"
                  aria-label="Previous photo"
                >
                  <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>
              )}

              {/* Next Button */}
              {items.length > 1 && (
                <button
                  type="button"
                  onClick={onNext}
                  className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 p-2 sm:p-2.5 rounded-full bg-black/60 text-white hover:bg-teal-deep/90 transition-colors backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-coral-accent"
                  aria-label="Next photo"
                >
                  <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>
              )}
            </div>

            {/* Info / Metadata Panel */}
            <div className="w-full lg:w-2/5 p-4 sm:p-6 flex flex-col justify-between space-y-4 border-t lg:border-t-0 lg:border-l border-white/10 text-ivory">
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-center space-x-1.5 text-xs font-semibold text-coral-accent">
                  <MapPin className="w-3.5 h-3.5 flex-shrink-0" />
                  <span>{currentItem.location}</span>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-extrabold text-white leading-tight">
                    {currentItem.title}
                  </h3>
                  {currentItem.subtitle && (
                    <p className="text-xs sm:text-sm text-sage font-medium mt-1">
                      {currentItem.subtitle}
                    </p>
                  )}
                </div>

                <p className="text-xs sm:text-sm text-ivory/80 leading-relaxed border-l-2 border-teal-deep/60 pl-3">
                  {currentItem.caption}
                </p>

                {currentItem.details && currentItem.details.length > 0 && (
                  <div className="pt-2">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-ivory/60 mb-2 flex items-center space-x-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-sage" />
                      <span>Key Engineering Scope</span>
                    </div>
                    <ul className="space-y-1.5 text-xs text-ivory/85">
                      {currentItem.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <span className="text-coral-accent font-bold mt-0.5">•</span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Actions Footer */}
              <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row gap-2.5">
                {currentItem.projectId && (
                  <Link
                    href={`/projects/${currentItem.projectId}`}
                    onClick={onClose}
                    className="flex-1 inline-flex items-center justify-center px-4 py-2.5 rounded-xl font-bold text-xs bg-teal-deep hover:bg-forest text-white transition-all shadow-subtle group text-center"
                  >
                    <span>View Case Study</span>
                    <ArrowUpRight className="ml-1.5 w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </Link>
                )}
                <Link
                  href="/contact"
                  onClick={onClose}
                  className="inline-flex items-center justify-center px-4 py-2.5 rounded-xl font-bold text-xs bg-coral-accent hover:bg-coral-accent/90 text-white transition-all shadow-subtle text-center"
                >
                  <PhoneCall className="mr-1.5 w-3.5 h-3.5" />
                  <span>Get Estimate</span>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
