import Image from 'next/image';
import Link from 'next/link';
import {
  Building2,
  Stethoscope,
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
  Wrench,
  Layers,
  Activity,
  Flame,
  Cpu
} from 'lucide-react';
import { servicesData } from '@/data/servicesData';
import { companyData } from '@/data/companyData';

export const metadata = {
  title: 'Our Services & Disciplines | Alex Healthcare System',
  description: 'Comprehensive hospital consultancy, civil construction, modular operation theatres, medical gas pipeline systems (MGPS), and ICU critical care infrastructure solutions across Northeast India.',
};

export default function ServicesPage() {
  const categories = [
    {
      name: "Hospital Construction & Planning",
      desc: "Architectural facility planning, structural engineering, and statutory hospital licensing support."
    },
    {
      name: "Critical Care & Surgical Systems",
      desc: "Modular operation theatres, centralized medical gas pipeline networks, and intensive care setups."
    },
    {
      name: "Facility Engineering & Safety",
      desc: "Medical equipment procurement, fire safety life-support systems, and healthcare IT infrastructure."
    }
  ];

  return (
    <div className="w-full bg-ivory">

      {/* 1. Page Hero - Matching About Page Architectural Identity */}
      <section className="relative w-full bg-charcoal-green text-white pt-28 pb-16 sm:pt-36 sm:pb-24 overflow-hidden">
        
        {/* Background photo & overlay like About page */}
        <div className="absolute inset-0 z-0 opacity-20">
          <Image
            src="/buildings-bg.jpg"
            alt="Alex Healthcare System hospital engineering background"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal-green via-charcoal-green/90 to-transparent z-0" />

        {/* Subtle Architectural CAD Grid */}
        <div 
          className="absolute inset-0 opacity-[0.12] pointer-events-none z-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255, 255, 255, 0.15) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255, 255, 255, 0.15) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}
          aria-hidden="true"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

            {/* Left: Text & Badges */}
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-sage text-xs font-semibold tracking-wide backdrop-blur-sm">
                <span>Healthcare Infrastructure Disciplines</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-white">
                Comprehensive Hospital Engineering &amp; Turnkey Development
              </h1>
              <p className="text-base sm:text-lg text-ivory/85 leading-relaxed font-normal max-w-xl">
                From site feasibility and civil construction to specialized cleanroom modular OTs, medical gas pipelines, and licensing support, we provide single-source accountability for healthcare institutions across Northeast India.
              </p>

              {/* Regulatory & Engineering Standards Badges */}
              <div className="flex flex-wrap items-center gap-2 pt-2 text-xs font-mono text-sage">
                <span className="bg-white/10 px-3 py-1 rounded-md border border-white/15 backdrop-blur-xs">
                  Single EPC Accountability
                </span>
                <span className="bg-white/10 px-3 py-1 rounded-md border border-white/15 backdrop-blur-xs">
                  HTM 02-01 MGPS
                </span>
                <span className="bg-white/10 px-3 py-1 rounded-md border border-white/15 backdrop-blur-xs">
                  ISO Class 7 Modular OTs
                </span>
                <span className="bg-white/10 px-3 py-1 rounded-md border border-white/15 backdrop-blur-xs">
                  NABH &amp; NBC 2016 Compliant
                </span>
              </div>
            </div>

            {/* Right: Photo collage with sleek architectural framing */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-3 sm:gap-4">
              {servicesData.slice(0, 3).map((s, i) => (
                <div
                  key={s.id}
                  className={`relative overflow-hidden rounded-2xl border border-white/20 shadow-float backdrop-blur-sm group ${i === 0 ? 'col-span-2 h-44 sm:h-52' : 'h-32 sm:h-38'}`}
                >
                  <Image
                    src={s.cardImage}
                    alt={s.title}
                    fill
                    priority={i === 0}
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-green/90 via-charcoal-green/30 to-transparent pointer-events-none" />
                  <div className="absolute bottom-3 left-3 right-3 text-xs font-bold text-white line-clamp-1">
                    {s.title}
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* 2. Categorized Services Deck */}
      <section className="w-full pt-10 pb-12 sm:pt-12 sm:pb-16 border-b border-teal-deep/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

          {categories.map((cat, catIdx) => {
            const catServices = servicesData.filter(s => s.category === cat.name);
            return (
              <div key={catIdx} className="space-y-6">
                {/* Category Header */}
                <div className="border-b border-teal-deep/15 pb-4">
                  <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-teal-deep">
                    <span>Category 0{catIdx + 1}</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-charcoal-green mt-2 tracking-tight">
                    {cat.name}
                  </h2>
                  <p className="text-xs sm:text-sm text-charcoal-green/70 mt-2">
                    {cat.desc}
                  </p>
                </div>

                {/* Services Cards in this Category - clean, same as home page */}
                <div className={`grid grid-cols-1 md:grid-cols-2 ${catServices.length === 2 ? '' : 'lg:grid-cols-3'} gap-6 lg:gap-8`}>
                  {catServices.map((service) => (
                    <div
                      key={service.id}
                      className="group bg-white rounded-2xl overflow-hidden border border-teal-deep/15 shadow-subtle hover:shadow-float transition-shadow duration-300 flex flex-col"
                    >
                      <Link href={`/services/${service.slug}`} className="flex flex-col h-full">
                        {/* Image */}
                        <div className="relative h-48 md:h-52 w-full overflow-hidden bg-charcoal-green">
                          <Image
                            src={service.cardImage}
                            alt={service.title}
                            fill
                            className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                            sizes="(max-width: 768px) 100vw, 33vw"
                          />
                        </div>

                        {/* Content */}
                        <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
                          <div className="space-y-2">
                            <h3 className="text-lg sm:text-xl font-bold text-charcoal-green group-hover:text-teal-deep transition-colors leading-snug tracking-tight">
                              {service.title}
                            </h3>
                            <p className="text-xs sm:text-sm text-charcoal-green/75 leading-relaxed line-clamp-2">
                              {service.summary}
                            </p>
                          </div>

                          <div className="pt-2 border-t border-teal-deep/10">
                            <span className="inline-flex items-center text-xs font-bold text-teal-deep group-hover:text-coral-accent transition-colors">
                              <span>Explore Service</span>
                              <ArrowRight className="ml-1.5 w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                            </span>
                          </div>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}

        </div>
      </section>

      {/* 3. Consultation Section */}
      <section className="w-full bg-sage/35 py-16 sm:py-20 border-b border-teal-deep/10 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <span className="text-xs font-bold uppercase tracking-widest text-teal-deep bg-sage/60 px-3.5 py-1.5 rounded-full">
            Turnkey Consultation
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-charcoal-green">
            Need Guidance on Facility Sizing, Bed Layouts or Statutory Approvals?
          </h2>
          <p className="text-sm sm:text-base text-charcoal-green/80 max-w-2xl mx-auto">
            Our engineering team assesses your facility plans, provides compliance feedback, and delivers transparent itemized infrastructure estimates.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center space-x-2 px-8 py-4 rounded-xl text-sm font-bold text-white bg-teal-deep hover:bg-teal-dark transition-all shadow-elevated"
            >
              <span>Request a Technical Consultation</span>
              <ArrowRight className="w-4 h-4 text-coral-accent" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
