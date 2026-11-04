'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Share2, ChevronRight, ChevronLeft, Power, X } from 'lucide-react';
import { companyData } from '@/data/companyData';

function FacebookIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function InstagramIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

function WhatsAppIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
    </svg>
  );
}

function LinkedInIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  );
}

const SOCIAL_CONFIG = [
  {
    key: 'whatsapp',
    label: 'WhatsApp',
    color: 'bg-[#25D366] hover:bg-[#1EBE5D] text-white',
    ring: 'hover:ring-[#25D366]/40',
    icon: WhatsAppIcon,
  },
  {
    key: 'facebook',
    label: 'Facebook',
    color: 'bg-[#1877F2] hover:bg-[#0c63d4] text-white',
    ring: 'hover:ring-[#1877F2]/40',
    icon: FacebookIcon,
  },
  {
    key: 'instagram',
    label: 'Instagram',
    color: 'bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] hover:opacity-95 text-white',
    ring: 'hover:ring-[#dc2743]/40',
    icon: InstagramIcon,
  },
  {
    key: 'linkedin',
    label: 'LinkedIn',
    color: 'bg-[#0A66C2] hover:bg-[#084e96] text-white',
    ring: 'hover:ring-[#0A66C2]/40',
    icon: LinkedInIcon,
  },
];

export default function FloatingSocials() {
  const [isOn, setIsOn] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem('alex_social_bar_active');
      if (saved !== null) {
        setIsOn(saved === 'true');
      }
    } catch {
      // ignore localStorage errors in restricted contexts
    }
    setMounted(true);
  }, []);

  const handleToggle = (state) => {
    setIsOn(state);
    try {
      localStorage.setItem('alex_social_bar_active', String(state));
    } catch {
      // ignore
    }
  };

  if (!mounted) return null;

  // Map companyData socials to configuration
  const activeSocials = SOCIAL_CONFIG.map((cfg) => {
    const item = companyData.socials.find((s) =>
      s.name.toLowerCase().includes(cfg.key)
    );
    return {
      ...cfg,
      url: item?.url || '#',
      ariaLabel: item?.ariaLabel || `${cfg.label} Link`,
    };
  }).filter((s) => s.url && s.url !== '#');

  return (
    <aside
      aria-label="Floating Social Media Sidebar"
      className="fixed right-0 top-1/2 -translate-y-1/2 z-50 select-none print:hidden pointer-events-none"
    >
      <div className="pointer-events-auto">
        <AnimatePresence mode="wait">
          {isOn ? (
            /* ACTIVE (ON) STATE */
            <motion.div
              key="social-bar-on"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ type: 'spring', stiffness: 320, damping: 28 }}
              className="flex items-center"
            >
              <div className="bg-white/95 backdrop-blur-md rounded-l-2xl shadow-float border-y border-l border-teal-deep/20 p-2 sm:p-2.5 flex flex-col items-center space-y-2">
                {/* On/Off Switch Button */}
                <div className="pb-1.5 mb-0.5 border-b border-teal-deep/15 flex flex-col items-center">
                  <button
                    onClick={() => handleToggle(false)}
                    title="Turn off social media bar"
                    aria-label="Turn off floating social media bar"
                    className="group relative flex items-center justify-center w-7 h-7 rounded-full bg-sage/40 hover:bg-rose-50 text-charcoal-green/70 hover:text-rose-600 transition-colors"
                  >
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    {/* Tooltip */}
                    <span className="absolute right-full mr-2 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity bg-charcoal-green text-white text-[11px] font-medium px-2 py-0.5 rounded shadow whitespace-nowrap z-50">
                      Turn Off
                    </span>
                  </button>
                  <span className="text-[8px] font-bold tracking-wider uppercase text-charcoal-green/50 mt-0.5">
                    ON
                  </span>
                </div>

                {/* Social Media Links */}
                <div className="flex flex-col items-center space-y-2">
                  {activeSocials.map((social) => {
                    const IconComponent = social.icon;
                    return (
                      <a
                        key={social.key}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.ariaLabel}
                        className={`group relative flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-xl ${social.color} shadow-sm hover:shadow-elevated hover:scale-105 active:scale-95 transition-all duration-200 ring-2 ring-transparent ${social.ring}`}
                      >
                        <IconComponent className="w-4 h-4 sm:w-4.5 sm:h-4.5" />

                        {/* Tooltip label appearing on the left */}
                        <span className="absolute right-full mr-2.5 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-150 bg-charcoal-green text-white text-xs font-semibold px-2.5 py-1 rounded-lg shadow-float whitespace-nowrap z-50 flex items-center space-x-1.5">
                          <span>{social.label}</span>
                        </span>
                      </a>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          ) : (
            /* COLLAPSED (OFF) STATE */
            <motion.div
              key="social-bar-off"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ type: 'spring', stiffness: 320, damping: 28 }}
              className="flex items-center"
            >
              <button
                onClick={() => handleToggle(true)}
                title="Turn on social media bar"
                aria-label="Turn on floating social media bar"
                className="group relative flex flex-col items-center justify-center bg-teal-deep text-white hover:bg-teal-dark shadow-float rounded-l-xl px-2 py-3 border-y border-l border-teal-light/30 transition-all duration-200 active:scale-95"
              >
                <ChevronLeft className="w-4 h-4 text-coral-accent group-hover:-translate-x-0.5 transition-transform" />
                <Share2 className="w-4 h-4 my-1" />
                <span className="text-[9px] font-bold tracking-widest uppercase [writing-mode:vertical-rl] rotate-180 text-white/90 group-hover:text-white">
                  Socials
                </span>
                <span className="mt-1 text-[8px] font-semibold text-white/60">
                  OFF
                </span>

                {/* Tooltip */}
                <span className="absolute right-full mr-2.5 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-150 bg-charcoal-green text-white text-xs font-semibold px-2.5 py-1 rounded-lg shadow-float whitespace-nowrap z-50">
                  Turn On Social Bar
                </span>
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </aside>
  );
}

