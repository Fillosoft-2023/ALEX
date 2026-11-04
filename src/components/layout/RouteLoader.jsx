'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

export default function RouteLoader() {
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(false);

  // Initial load / reload
  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => setIsLoading(false), 350);
    };

    if (document.readyState === 'complete') {
      const timer = setTimeout(() => setIsLoading(false), 400);
      return () => clearTimeout(timer);
    } else {
      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
    }
  }, []);

  // Pathname change
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 450);
    return () => clearTimeout(timer);
  }, [pathname]);

  // Page reload
  useEffect(() => {
    const handleBeforeUnload = () => {
      setIsLoading(true);
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, []);

  // Route clicks
  useEffect(() => {
    const handleLinkClick = (event) => {
      const anchor = event.target.closest('a');
      if (!anchor) return;

      const href = anchor.getAttribute('href');
      const target = anchor.getAttribute('target');

      if (
        !href ||
        href.startsWith('#') ||
        href.startsWith('mailto:') ||
        href.startsWith('tel:') ||
        href.startsWith('javascript:') ||
        target === '_blank' ||
        event.ctrlKey ||
        event.metaKey ||
        event.shiftKey ||
        event.altKey
      ) {
        return;
      }

      try {
        const targetUrl = new URL(href, window.location.origin);
        if (
          targetUrl.origin === window.location.origin &&
          targetUrl.pathname !== window.location.pathname
        ) {
          setIsLoading(true);
        }
      } catch {
        // ignore
      }
    };

    document.addEventListener('click', handleLinkClick, { capture: true });
    return () => {
      document.removeEventListener('click', handleLinkClick, { capture: true });
    };
  }, []);

  // Safety fallback
  useEffect(() => {
    if (isLoading) {
      const timeout = setTimeout(() => {
        setIsLoading(false);
      }, 4000);
      return () => clearTimeout(timeout);
    }
  }, [isLoading]);

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <div
          key="global-route-loader"
          className="fixed inset-0 z-[9999] flex items-center justify-center pointer-events-auto select-none overflow-hidden"
          role="status"
          aria-live="polite"
          aria-label="Loading"
        >
          {/* Static Fullscreen Backdrop Blur Layer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            className="absolute inset-0 bg-black/25 backdrop-blur-xl"
            style={{ willChange: 'opacity' }}
          />

          {/* Radial Gradient Expansion originating from bottom-right */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{
              duration: 0.9,
              ease: [0.16, 1, 0.3, 1],
            }}
            style={{
              background: 'radial-gradient(circle at bottom right, rgba(20,184,166,0.18) 0%, rgba(15,23,42,0.3) 45%, rgba(0,0,0,0.15) 100%)',
              willChange: 'transform, opacity',
            }}
            className="absolute inset-0 pointer-events-none"
          />

          {/* Ultra-Smooth Floating Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -6 }}
            transition={{
              duration: 0.7,
              delay: 0.08,
              ease: [0.16, 1, 0.3, 1],
            }}
            style={{ willChange: 'transform, opacity' }}
            className="relative z-10 w-56 h-16 sm:w-64 sm:h-20"
          >
            <Image
              src="/alexreal-teal.png"
              alt="Alex Healthcare"
              fill
              priority
              className="object-contain drop-shadow-[0_10px_28px_rgba(0,0,0,0.25)]"
              sizes="(max-width: 640px) 230px, 260px"
            />
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
