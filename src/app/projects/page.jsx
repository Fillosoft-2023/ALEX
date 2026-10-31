import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ShieldCheck, MapPin } from 'lucide-react';
import ProjectsGrid from '@/components/projects/ProjectsGrid';

export const metadata = {
  title: 'Verified Projects Portfolio | Alex Healthcare System',
  description: 'Explore completed hospital construction projects, modular OT installations, medical gas pipeline networks, and ICU setups across Northeast India by Alex Healthcare System.',
};

export default function ProjectsPage() {
  return (
    <div className="w-full bg-ivory">
      
      {/* 1. Page Hero */}
      <section className="relative w-full bg-charcoal-green text-white py-16 sm:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-25">
          <Image
            src="/heroa-bg.jpg"
            alt="Alex Healthcare System completed projects portfolio"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal-green via-charcoal-green/90 to-transparent z-0" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-sage text-xs font-semibold tracking-wide">
              <span>Verified Execution Portfolio</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
              Hospital Infrastructure Projects Across Northeast India
            </h1>
            <p className="text-base sm:text-lg text-ivory/85 leading-relaxed font-normal">
              From landmark multi-speciality hospitals to critical cleanroom modular OTs, explore verified case studies showcasing engineering precision, timely delivery, and operational excellence.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Interactive Projects Filter & Grid */}
      <section className="w-full py-16 sm:py-24 border-b border-teal-deep/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ProjectsGrid />
        </div>
      </section>

      {/* 3. Bottom Consultation CTA */}
      <section className="w-full bg-teal-deep text-white py-14 sm:py-20 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-2xl sm:text-4xl font-extrabold">
            Planning a Healthcare Infrastructure Project?
          </h2>
          <p className="text-sm sm:text-base text-ivory/85 max-w-2xl mx-auto">
            Our engineering team in Guwahati is ready to review your project scope, facility layouts, and equipment requirements.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center space-x-2 px-8 py-4 rounded-xl text-sm font-bold text-teal-deep bg-ivory hover:bg-white transition-all shadow-float"
            >
              <span>Request a Project Estimate</span>
              <ArrowRight className="w-4 h-4 text-coral-accent" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
