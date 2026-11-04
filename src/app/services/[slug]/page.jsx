import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Building2, 
  ArrowLeft,
  Wrench,
  HelpCircle,
  FileText
} from 'lucide-react';
import { servicesData } from '@/data/servicesData';
import { projectsData } from '@/data/projectsData';

export async function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);
  if (!service) return { title: 'Service Not Found' };

  return {
    title: `${service.title} | Alex Healthcare System`,
    description: service.summary,
  };
}

export default async function ServiceDetailPage({ params }) {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  // Find related verified projects
  const relatedProjects = projectsData.filter((p) => 
    service.relatedProjects.includes(p.id)
  );

  // Other related services
  const otherServices = servicesData.filter((s) => s.id !== service.id).slice(0, 3);

  return (
    <div className="w-full bg-ivory">
      
      {/* 1. Service Hero */}
      <section className="relative w-full bg-charcoal-green text-white py-16 sm:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-25">
          <Image
            src={service.heroImage}
            alt={service.title}
            fill
            priority
            className="object-cover object-center animate-kenburns"
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal-green via-charcoal-green/90 to-transparent z-0" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 anim-view">
          <div className="max-w-3xl space-y-4">
            
            <Link
              href="/services"
              className="inline-flex items-center space-x-1.5 text-xs font-semibold text-sage hover:text-coral-accent transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to all services</span>
            </Link>

            <div className="pt-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-coral-accent bg-white/10 px-3 py-1 rounded-full">
                {service.category}
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
              {service.title}
            </h1>

            <p className="text-base sm:text-lg text-ivory/85 leading-relaxed font-normal">
              {service.tagline}
            </p>
          </div>
        </div>
      </section>

      {/* 2. Overview & Scope Grid */}
      <section className="w-full py-16 sm:py-24 border-b border-teal-deep/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 anim-view">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Content (8 cols) */}
            <div className="lg:col-span-8 space-y-10">
              
              {/* Executive Overview */}
              <div className="space-y-4">
                <span className="text-xs font-bold uppercase tracking-widest text-teal-deep bg-sage/50 px-3 py-1 rounded-full">
                  Executive Overview
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-charcoal-green">
                  Engineering Standards &amp; Clinical Impact
                </h2>
                <p className="text-sm sm:text-base text-charcoal-green/80 leading-relaxed">
                  {service.overview}
                </p>
              </div>

              {/* Detailed Scope of Work */}
              <div className="bg-white rounded-2xl p-7 sm:p-8 border border-teal-deep/15 shadow-subtle space-y-6">
                <div className="flex items-center space-x-2 text-teal-deep">
                  <Wrench className="w-5 h-5 text-forest" />
                  <h3 className="text-lg sm:text-xl font-bold text-charcoal-green">
                    Comprehensive Scope of Execution
                  </h3>
                </div>
                <ul className="space-y-3">
                  {service.scope.map((item, idx) => (
                    <li key={idx} className="flex items-start space-x-3 text-xs sm:text-sm text-charcoal-green/80 leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-forest mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technical Capabilities */}
              <div className="space-y-6">
                <h3 className="text-xl sm:text-2xl font-extrabold text-charcoal-green">
                  Technical Capabilities &amp; Compliance Highlights
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  {service.capabilities.map((cap, idx) => (
                    <div 
                      key={idx}
                      className="bg-white rounded-2xl p-5 border border-teal-deep/15 shadow-subtle space-y-2"
                    >
                      <div className="w-8 h-8 rounded-lg bg-sage/50 text-teal-deep font-bold flex items-center justify-center text-xs">
                        0{idx + 1}
                      </div>
                      <h4 className="font-bold text-sm text-charcoal-green">{cap.title}</h4>
                      <p className="text-xs text-charcoal-green/70 leading-relaxed">{cap.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Practical Benefits */}
              <div className="bg-sage/25 rounded-2xl p-7 border border-teal-deep/15 space-y-4">
                <div className="flex items-center space-x-2 text-teal-deep font-bold text-sm sm:text-base">
                  <ShieldCheck className="w-5 h-5 text-forest" />
                  <span>Practical Benefits for Healthcare Facilities</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-charcoal-green/80">
                  {service.benefits.map((b, idx) => (
                    <div key={idx} className="p-3 bg-white/80 rounded-xl border border-teal-deep/10">
                      {b}
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Sidebar: Inquiry Card & Related (4 cols) */}
            <div className="lg:col-span-4 space-y-8">
              
              {/* Consultation Card */}
              <div className="bg-teal-deep text-white rounded-3xl p-7 shadow-elevated space-y-5">
                <span className="text-[10px] font-bold uppercase tracking-wider text-coral-accent bg-white/10 px-2.5 py-1 rounded-full">
                  Direct Engineering Inquiry
                </span>
                <h3 className="text-xl font-bold leading-snug">
                  Plan Your {service.title} Project
                </h3>
                <p className="text-xs text-ivory/80 leading-relaxed">
                  Discuss technical sizing, floor layout requirements, and cost estimates directly with our engineering team in Guwahati.
                </p>

                <div className="pt-2 space-y-3">
                  <Link
                    href="/contact"
                    className="w-full inline-flex items-center justify-center py-3 px-4 rounded-xl text-xs font-bold text-teal-deep bg-ivory hover:bg-white transition-all shadow-sm"
                  >
                    <span>Request Project Estimate</span>
                    <ArrowRight className="ml-1.5 w-3.5 h-3.5 text-coral-accent" />
                  </Link>

                  <div className="text-center text-[11px] text-ivory/70">
                    Direct Line: <strong className="text-white">+91 7002394679</strong>
                  </div>
                </div>
              </div>

              {/* Verified Related Projects */}
              {relatedProjects.length > 0 && (
                <div className="bg-white rounded-2xl p-6 border border-teal-deep/15 shadow-subtle space-y-4">
                  <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-teal-deep">
                    <Building2 className="w-4 h-4 text-forest" />
                    <span>Verified Project Applications</span>
                  </div>
                  <div className="space-y-3">
                    {relatedProjects.map((proj) => (
                      <Link
                        key={proj.id}
                        href={`/projects/${proj.id}`}
                        className="block p-3 rounded-xl hover:bg-ivory border border-teal-deep/10 transition-colors group"
                      >
                        <div className="text-xs font-bold text-charcoal-green group-hover:text-teal-deep flex items-center justify-between">
                          <span>{proj.title}</span>
                          <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-coral-accent" />
                        </div>
                        <div className="text-[11px] text-charcoal-green/60 mt-0.5">{proj.location} &bull; {proj.category}</div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Related Services */}
              <div className="bg-white rounded-2xl p-6 border border-teal-deep/15 shadow-subtle space-y-4">
                <div className="text-xs font-bold uppercase tracking-wider text-teal-deep">
                  Explore Other Disciplines
                </div>
                <div className="space-y-2">
                  {otherServices.map((other) => (
                    <Link
                      key={other.id}
                      href={`/services/${other.slug}`}
                      className="block p-2.5 rounded-lg text-xs font-medium text-charcoal-green hover:text-teal-deep hover:bg-mint-muted transition-colors"
                    >
                      {other.title} &rarr;
                    </Link>
                  ))}
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
