import Link from 'next/link';
import { Camera, ArrowRight, PhoneCall, Building2, ShieldCheck, Sparkles } from 'lucide-react';
import GalleryGrid from '@/components/gallery/GalleryGrid';
import { galleryItems } from '@/data/galleryData';

export const metadata = {
  title: 'Project Photo Gallery | Alex Healthcare System | Hospital Facades & MGPS Infrastructure',
  description: 'Explore on-site photo documentation of healthcare facilities, hospital facades (IHR Guwahati, Kapili Hospital, Metro Hospital, Health Planet Hospital Nagaon), modular operating theatres, and medical gas pipeline networks in Northeast India.',
};

export default function GalleryPage() {
  return (
    <div className="w-full bg-[#faf8f2] min-h-screen relative overflow-hidden">
      
      {/* Architectural Background Pattern & Gradient Mesh */}
      <div className="absolute inset-0 pointer-events-none z-0" aria-hidden="true">
        {/* Subtle Architectural Blueprint Grid */}
        <div 
          className="absolute inset-0 opacity-[0.45]"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(16, 75, 77, 0.08) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(16, 75, 77, 0.08) 1px, transparent 1px)
            `,
            backgroundSize: '36px 36px'
          }}
        />

        {/* Diagonal architectural drafting hatch accents */}
        <div 
          className="absolute inset-0 opacity-[0.25]"
          style={{
            backgroundImage: `radial-gradient(circle at 18px 18px, rgba(16, 75, 77, 0.18) 1.5px, transparent 0)`,
            backgroundSize: '36px 36px'
          }}
        />

        {/* Ambient Warm Glows */}
        <div className="absolute -top-32 -left-32 w-[34rem] h-[34rem] rounded-full bg-sage/40 blur-[90px]" />
        <div className="absolute top-20 right-0 w-[30rem] h-[30rem] rounded-full bg-coral-accent/15 blur-[100px]" />
        <div className="absolute top-1/2 left-1/4 w-[36rem] h-[36rem] rounded-full bg-teal-deep/10 blur-[120px]" />

        {/* Gentle Vignette Fade at bottom */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#faf8f2] to-transparent" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 sm:pt-32 pb-16 sm:pb-24">
        
        {/* Unified Hero Header Section */}
        <div className="max-w-4xl mb-8 sm:mb-10 space-y-4">
          
          {/* Top Pill Badge */}
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-teal-deep/20 text-teal-deep text-xs font-semibold tracking-wide shadow-subtle backdrop-blur-md">
            <Camera className="w-3.5 h-3.5 text-coral-accent" />
            <span>Verified Healthcare Infrastructure &bull; {galleryItems.length} Visual Records</span>
          </div>

          {/* Main Title */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-charcoal-green tracking-tight leading-tight">
            Hospital Facilities &amp; On-Site Infrastructure Gallery
          </h1>

          {/* Clean Subtitle */}
          <p className="text-sm sm:text-base text-charcoal-green/80 leading-relaxed max-w-3xl font-normal">
            Authentic visual documentation of verified hospital building facades, central medical gas pipeline manifolds, ICU telemetry bed heads, and surgical cleanrooms delivered across Assam and the Northeast.
          </p>

          {/* Quick Verified Highlights Strip */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-4 pt-1 text-xs text-charcoal-green/75">
            <span className="inline-flex items-center space-x-1.5 bg-white/80 px-3 py-1 rounded-lg border border-teal-deep/10 shadow-xs">
              <Building2 className="w-3.5 h-3.5 text-teal-deep" />
              <span>4+ Verified Hospital Facades</span>
            </span>
            <span className="inline-flex items-center space-x-1.5 bg-white/80 px-3 py-1 rounded-lg border border-teal-deep/10 shadow-xs">
              <ShieldCheck className="w-3.5 h-3.5 text-forest" />
              <span>100% On-Site Authentic Work</span>
            </span>
            <span className="inline-flex items-center space-x-1.5 bg-white/80 px-3 py-1 rounded-lg border border-teal-deep/10 shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-coral-accent" />
              <span>Tap any photo for full high-res preview</span>
            </span>
          </div>
        </div>

        {/* Clean Divider Line */}
        <div className="w-full h-px bg-teal-deep/15 mb-6 sm:mb-8" />

        {/* Main Gallery Grid with Dynamic Category Filter Pills */}
        <GalleryGrid 
          initialCategory="all" 
          showFilters={true} 
        />

        {/* Bottom Consultation Call-To-Action Banner */}
        <div className="mt-16 sm:mt-20 rounded-2xl bg-gradient-to-r from-charcoal-green to-teal-dark p-6 sm:p-10 text-white shadow-elevated border border-white/15 relative overflow-hidden">
          <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-forest/30 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left max-w-2xl">
              <div className="inline-flex items-center space-x-1.5 text-xs font-bold uppercase tracking-wider text-sage">
                <ShieldCheck className="w-4 h-4 text-coral-accent" />
                <span>Turnkey Healthcare Infrastructure Partner</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Planning or Upgrading a Hospital Facility?
              </h2>
              <p className="text-xs sm:text-sm text-ivory/80 leading-relaxed">
                Connect with our lead infrastructure engineers in Guwahati for site surveys, MGPS blueprints, and NABH-compliant cleanroom estimates.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto flex-shrink-0">
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-full font-bold text-xs sm:text-sm bg-coral-accent hover:bg-coral-hover text-white transition-all shadow-subtle text-center"
              >
                <PhoneCall className="mr-2 w-4 h-4" />
                <span>Request Project Consultation</span>
              </Link>
              <Link
                href="/projects"
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-full font-bold text-xs sm:text-sm bg-white/10 hover:bg-white/20 text-white transition-all border border-white/25 text-center"
              >
                <span>View All Case Studies</span>
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
