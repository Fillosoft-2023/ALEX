'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { 
  Phone, 
  Mail, 
  MapPin, 
  ChevronDown, 
  Menu, 
  X, 
  ArrowRight,
  Clock,
  ShieldCheck,
  Building2,
  Stethoscope,
  Activity,
  Flame,
  Cpu
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { companyData } from '@/data/companyData';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const next = window.scrollY > 20;
          setIsScrolled((prev) => (prev !== next ? next : prev));
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { 
      name: 'Services', 
      href: '/services', 
      hasMegaMenu: true 
    },
    { name: 'Projects', href: '/projects' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact', href: '/contact' }
  ];

  return (
    <header className="fixed top-3 sm:top-5 inset-x-0 z-50 px-3 sm:px-6 lg:px-8 pointer-events-none transition-all duration-300">
      <div className="max-w-7xl mx-auto">
        {/* Main Floating Capsule Navigation Bar */}
        <motion.nav
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className={`pointer-events-auto rounded-full transition-all duration-300 px-4 sm:px-6 py-2 sm:py-2.5 flex items-center justify-between border shadow-float ${
            isScrolled 
              ? 'bg-[#f7f5ef]/95 backdrop-blur-xl border-teal-deep/20 shadow-elevated' 
              : 'bg-[#f7f5ef]/85 backdrop-blur-md border-white/60'
          }`}
          aria-label="Main Navigation"
        >
          {/* Logo */}
          <Link href="/" className="flex items-center pl-1 sm:pl-2 group focus:outline-none focus:ring-2 focus:ring-teal-deep rounded-full">
            <div className="relative h-9 w-36 sm:h-10 sm:w-48 transition-transform duration-200 group-hover:scale-[1.02]">
              <Image 
                src="/alexreal-teal.png" 
                alt="Alex Healthcare System Logo" 
                fill 
                priority
                className="object-contain object-left"
                sizes="(max-width: 640px) 150px, 200px"
              />
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-1 xl:space-x-1.5">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
              
              if (link.hasMegaMenu) {
                return (
                  <div 
                    key={link.name} 
                    className="relative"
                    onMouseEnter={() => setServicesDropdownOpen(true)}
                    onMouseLeave={() => setServicesDropdownOpen(false)}
                  >
                    <Link
                      href={link.href}
                      className={`inline-flex items-center px-4 py-1.5 rounded-full text-xs xl:text-sm font-semibold transition-all duration-150 ${
                        isActive 
                          ? 'text-teal-deep bg-[#e8e1d3]/80 font-bold shadow-xs' 
                          : 'text-charcoal-green/85 hover:text-teal-deep hover:bg-black/5'
                      }`}
                      aria-expanded={servicesDropdownOpen}
                    >
                      <span>{link.name}</span>
                      <ChevronDown className={`ml-1 w-3.5 h-3.5 transition-transform duration-200 ${
                        servicesDropdownOpen ? 'rotate-180 text-coral-accent' : 'text-charcoal-green/60'
                      }`} />
                    </Link>

                    {/* Services Mega Menu Dropdown */}
                    <AnimatePresence>
                    {servicesDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                        className="absolute top-full left-1/2 -translate-x-1/2 w-[840px] max-w-[calc(100vw-2rem)] pt-3 z-50"
                      >
                        {/* Invisible hover bridge to keep dropdown open during mouse movement */}
                        <div className="absolute -top-3 left-0 right-0 h-4" />

                        <div 
                          className="bg-white rounded-3xl shadow-2xl border border-teal-deep/20 p-6 relative z-10"
                          style={{ backgroundColor: '#ffffff', opacity: 1 }}
                        >
                          <div className="grid grid-cols-3 gap-6">
                            {companyData.megaMenu.map((cat, idx) => {
                              const CategoryIcon = idx === 0 ? Building2 : idx === 1 ? Activity : ShieldCheck;
                              return (
                                <div key={idx} className="space-y-3">
                                  <div className="text-[11px] font-bold uppercase tracking-wider text-teal-deep pb-2 border-b border-teal-deep/15 flex items-center space-x-1.5">
                                    <CategoryIcon className="w-3.5 h-3.5 text-coral-accent" />
                                    <span>{cat.category}</span>
                                  </div>
                                  <div className="space-y-1.5">
                                    {cat.items.map((item, itemIdx) => (
                                      <Link
                                        key={itemIdx}
                                        href={item.href}
                                        onClick={() => setServicesDropdownOpen(false)}
                                        className="block p-2.5 rounded-xl hover:bg-sage/40 transition-colors group/item"
                                      >
                                        <div className="text-sm font-bold text-charcoal-green group-hover/item:text-teal-deep flex items-center justify-between">
                                          <span>{item.title}</span>
                                          <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all text-coral-accent flex-shrink-0" />
                                        </div>
                                        <p className="text-xs text-charcoal-green/75 line-clamp-2 mt-0.5 leading-relaxed font-normal">
                                          {item.desc}
                                        </p>
                                      </Link>
                                    ))}
                                  </div>
                                </div>
                              );
                            })}
                          </div>

                          {/* Mega menu bottom bar with solid ivory background */}
                          <div 
                            className="mt-5 pt-3.5 border-t border-teal-deep/15 -mx-6 -mb-6 p-4 px-6 rounded-b-3xl flex items-center justify-between text-xs"
                            style={{ backgroundColor: '#F7F5EF' }}
                          >
                            <div className="flex items-center space-x-2 text-charcoal-green">
                              <ShieldCheck className="w-4 h-4 text-forest flex-shrink-0" />
                              <span className="font-semibold">Comprehensive Support from Engineering to NABH Handover</span>
                            </div>
                            <Link 
                              href="/services" 
                              onClick={() => setServicesDropdownOpen(false)}
                              className="font-bold text-teal-deep hover:text-coral-accent inline-flex items-center space-x-1 transition-colors flex-shrink-0"
                            >
                              <span>Explore All Capabilities</span>
                              <ArrowRight className="w-3.5 h-3.5 ml-1" />
                            </Link>
                          </div>
                        </div>
                      </motion.div>
                    )}
                    </AnimatePresence>
                  </div>
                );
              }

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-4 py-1.5 rounded-full text-xs xl:text-sm font-semibold transition-all duration-150 ${
                    isActive 
                      ? 'text-teal-deep bg-[#e8e1d3]/80 font-bold shadow-xs' 
                      : 'text-charcoal-green/85 hover:text-teal-deep hover:bg-black/5'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* Desktop Right CTA Pill (Like "Book Appointment →" in screenshot) */}
          <div className="hidden lg:flex items-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-5 py-2 rounded-full text-xs sm:text-sm font-bold tracking-wide text-white bg-coral-accent hover:bg-coral-hover shadow-subtle hover:shadow-float transition-all duration-200 group"
            >
              <span>Book Appointment</span>
              <ArrowRight className="ml-1.5 w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Mobile Actions */}
          <div className="flex lg:hidden items-center space-x-2">
            <a
              href={`tel:${companyData.contact.phoneRaw}`}
              aria-label="Call Alex Healthcare"
              className="p-2 rounded-full text-teal-deep hover:bg-sage/40 transition-colors"
            >
              <Phone className="w-4 h-4 text-teal-deep" />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-full text-charcoal-green hover:bg-sage/40 focus:outline-none focus:ring-2 focus:ring-teal-deep transition-colors"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 text-charcoal-green" />
              ) : (
                <Menu className="w-5 h-5 text-charcoal-green" />
              )}
            </button>
          </div>
        </motion.nav>

        {/* Mobile Dropdown Card */}
        <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden pointer-events-auto mt-2 rounded-3xl bg-white/95 backdrop-blur-xl border border-teal-deep/20 shadow-2xl p-6 max-h-[calc(100vh-100px)] overflow-y-auto"
          >
            <div className="space-y-2 mb-6">
              {navLinks.map((link) => {
                const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
                return (
                  <div key={link.name} className="border-b border-teal-deep/10 pb-2">
                    <Link
                      href={link.href}
                      className={`block py-2 text-base font-bold ${
                        isActive ? 'text-teal-deep' : 'text-charcoal-green'
                      }`}
                    >
                      {link.name}
                    </Link>

                    {/* Mobile Services Sub-items */}
                    {link.hasMegaMenu && (
                      <div className="pl-3 mt-1 space-y-1.5 border-l-2 border-teal-deep/20 my-2">
                        {companyData.megaMenu.flatMap(c => c.items).slice(0, 5).map((subItem, idx) => (
                          <Link
                            key={idx}
                            href={subItem.href}
                            className="block py-1 text-xs font-medium text-charcoal-green/80 hover:text-teal-deep"
                          >
                            {subItem.title}
                          </Link>
                        ))}
                        <Link
                          href="/services"
                          className="block py-1 text-xs font-bold text-teal-deep inline-flex items-center space-x-1"
                        >
                          <span>View all services &rarr;</span>
                        </Link>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Mobile Contact Quick Actions */}
            <div className="space-y-3 pt-2">
              <Link
                href="/contact"
                className="w-full flex items-center justify-center py-3 px-4 rounded-full font-bold text-sm text-white bg-coral-accent hover:bg-coral-hover shadow transition-all"
              >
                <span>Book Appointment</span>
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>

              <div className="bg-mint-muted rounded-2xl p-4 border border-teal-deep/15 text-xs text-charcoal-green space-y-2">
                <div className="font-bold text-teal-deep">Alex Healthcare System</div>
                <div className="flex items-center space-x-2 text-charcoal-green/80">
                  <Phone className="w-3.5 h-3.5 text-coral-accent" />
                  <a href={`tel:${companyData.contact.phoneRaw}`} className="font-semibold">{companyData.contact.phoneDisplay}</a>
                </div>
                <div className="flex items-center space-x-2 text-charcoal-green/80">
                  <Mail className="w-3.5 h-3.5 text-coral-accent" />
                  <span>{companyData.contact.email}</span>
                </div>
                <div className="text-[11px] text-charcoal-green/70 pt-1 border-t border-teal-deep/10">
                  {companyData.contact.address.full}
                </div>
              </div>
            </div>
          </motion.div>
        )}
        </AnimatePresence>
      </div>
    </header>
  );
}
