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
  Cpu,
  Sparkles
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
      code: "01",
      name: "Hospital Construction & Planning",
      kicker: "Civil & Structural Engineering",
      desc: "Comprehensive architectural facility planning, structural engineering, seismic resilience, and statutory hospital licensing support."
    },
    {
      code: "02",
      name: "Critical Care & Surgical Systems",
      kicker: "Cleanroom & Life-Support Systems",
      desc: "Modular operation theatres, centralized medical gas pipeline networks (HTM 02-01), and intensive care setups."
    },
    {
      code: "03",
      name: "Facility Engineering & Safety",
      kicker: "MEP, Safety & Biomedical IT",
      desc: "Medical equipment procurement, fire safety life-support systems, biomedical earthing, and healthcare IT infrastructure."
    }
  ];

  return (
    <div className="w-full bg-[#faf9f5]">

      {/* 1. Page Hero - Architectural Identity with CAD Grid & Ambient Halos */}
      <section className="relative w-full bg-charcoal-green text-white pt-28 pb-16 sm:pt-36 sm:pb-24 overflow-hidden border-b border-teal-deep/20">
        
        {/* Background photo & overlay */}
        <div className="absolute inset-0 z-0 opacity-20 mix-blend-luminosity pointer-events-none">
          <Image
            src="/buildings-bg.jpg"
            alt="Alex Healthcare System hospital engineering background"
            fill
            priority
            className="object-cover object-center animate-kenburns"
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal-green via-charcoal-green/95 to-charcoal-green/80 z-0" />

        {/* Blueprint CAD Drafting Grid Overlay */}
        <div 
          className="absolute inset-0 opacity-[0.2] pointer-events-none z-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(200, 176, 130, 0.15) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(200, 176, 130, 0.15) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}
          aria-hidden="true"
        />

        {/* Floating Ambient Glow Halos */}
        <div className="absolute -top-16 -left-16 w-[550px] h-[550px] bg-teal-deep/40 rounded-full blur-3xl pointer-events-none animate-floatSlow" />
        <div className="absolute -bottom-16 right-0 w-[500px] h-[500px] bg-coral-accent/15 rounded-full blur-3xl pointer-events-none animate-floatSlowReverse" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 anim-view">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

            {/* Left: Text & Badges */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-xs font-semibold tracking-wide backdrop-blur-md shadow-subtle">
                <span className="w-2 h-2 rounded-full bg-coral-accent animate-pulse" />
                <span className="font-jost uppercase tracking-widest text-[11px] text-sage">Healthcare Infrastructure Disciplines &bull; Integrated EPC</span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.2] text-white font-serif">
                Comprehensive Hospital Engineering &amp; Infrastructure Development
              </h1>
              
              <p className="text-base sm:text-lg text-ivory/85 leading-relaxed font-lora max-w-xl">
                From site feasibility and civil construction to specialized cleanroom modular OTs, medical gas pipelines, and licensing support, we provide single-source accountability for healthcare institutions across Northeast India.
              </p>

              {/* Regulatory & Engineering Standards Badges */}
              <div className="flex flex-wrap items-center gap-2 pt-2 text-xs font-mono text-sage">
                <span className="bg-white/10 px-3 py-1.5 rounded-lg border border-white/15 backdrop-blur-xs flex items-center space-x-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-coral-accent" />
                  <span>Single EPC Accountability</span>
                </span>
                <span className="bg-white/10 px-3 py-1.5 rounded-lg border border-white/15 backdrop-blur-xs flex items-center space-x-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-coral-accent" />
                  <span>HTM 02-01 MGPS</span>
                </span>
                <span className="bg-white/10 px-3 py-1.5 rounded-lg border border-white/15 backdrop-blur-xs flex items-center space-x-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-coral-accent" />
                  <span>ISO Class 7 Modular OTs</span>
                </span>
                <span className="bg-white/10 px-3 py-1.5 rounded-lg border border-white/15 backdrop-blur-xs flex items-center space-x-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-coral-accent" />
                  <span>NABH &amp; NBC 2016 Compliant</span>
                </span>
              </div>
            </div>

            {/* Right: Photo collage with sleek architectural framing & corner accents */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-3 sm:gap-4">
              {servicesData.slice(0, 3).map((s, i) => (
                <div
                  key={s.id}
                  className={`relative overflow-hidden rounded-2xl border border-white/20 shadow-elevated backdrop-blur-sm group ${i === 0 ? 'col-span-2 h-48 sm:h-56' : 'h-36 sm:h-44'}`}
                >
                  <Image
                    src={s.cardImage}
                    alt={s.title}
                    fill
                    priority={i === 0}
                    className="object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-green/90 via-charcoal-green/30 to-transparent pointer-events-none" />

                  {/* Corner Accent Ticks */}
                  <div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-amber-400 opacity-80" />
                  <div className="absolute top-2 right-2 w-2 h-2 border-t border-r border-amber-400 opacity-80" />
                  <div className="absolute bottom-2 left-2 w-2 h-2 border-b border-l border-amber-400 opacity-80" />
                  <div className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-amber-400 opacity-80" />

                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-amber-300 block mb-0.5">
                      Spec 0{i + 1}
                    </span>
                    <div className="text-xs sm:text-sm font-bold font-serif line-clamp-1">
                      {s.title}
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* 2. Categorized Services Deck with Luxury Elevated Cards */}
      <section className="relative w-full py-16 sm:py-24 border-b border-teal-deep/15 overflow-hidden">
        {/* Subtle CAD grid */}
        <div 
          className="absolute inset-0 opacity-[0.25] pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(23, 79, 73, 0.08) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(23, 79, 73, 0.08) 1px, transparent 1px)
            `,
            backgroundSize: '36px 36px'
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 relative z-10 anim-view">

          {categories.map((cat, catIdx) => {
            const catServices = servicesData.filter(s => s.category === cat.name);
            return (
              <div key={catIdx} className="space-y-8">
                {/* Category Header */}
                <div className="border-b border-teal-deep/15 pb-5">
                  <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-teal-deep font-jost">
                    <span className="bg-sage/60 px-2.5 py-0.5 rounded font-mono">Category {cat.code}</span>
                    <span>&bull;</span>
                    <span className="text-forest">{cat.kicker}</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-charcoal-green mt-2 tracking-tight font-serif">
                    {cat.name}
                  </h2>
                  <p className="text-xs sm:text-sm text-charcoal-green/75 mt-2 font-lora max-w-2xl">
                    {cat.desc}
                  </p>
                </div>

                {/* Services Cards in this Category */}
                <div className={`grid grid-cols-1 md:grid-cols-2 ${catServices.length === 2 ? '' : 'lg:grid-cols-3'} gap-6 lg:gap-8 anim-stagger`}>
                  {catServices.map((service, sIdx) => (
                    <div
                      key={service.id}
                      className="group relative bg-white rounded-2xl overflow-hidden border border-teal-deep/15 shadow-subtle hover:shadow-elevated transition-all duration-300 flex flex-col gpu-accelerate hover:-translate-y-1.5"
                    >
                      {/* Top gold shimmer highlight on hover */}
                      <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#c8b082] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20" />

                      <Link href={`/services/${service.slug}`} className="flex flex-col h-full">
                        {/* Image */}
                        <div className="relative h-48 sm:h-52 md:h-56 w-full overflow-hidden bg-charcoal-green">
                          <Image
                            src={service.cardImage}
                            alt={service.title}
                            fill
                            className="object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
                            sizes="(max-width: 768px) 100vw, 33vw"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-charcoal-green/80 via-transparent to-black/20" />

                          {/* Modern Ambient Radial Glow on hover */}
                          <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/0 via-teal-400/10 to-emerald-300/25 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10" />

                          <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md text-[11px] font-extrabold font-mono tracking-wider uppercase bg-white/95 text-teal-deep backdrop-blur-sm shadow-sm border border-teal-deep/10">
                            {cat.code}.0{sIdx + 1}
                          </span>
                        </div>

                        {/* Content */}
                        <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
                          <div className="space-y-2">
                            <h3 className="text-lg sm:text-xl font-bold text-charcoal-green group-hover:text-teal-deep transition-colors leading-snug tracking-tight font-serif">
                              {service.title}
                            </h3>
                            <p className="text-xs sm:text-sm text-charcoal-green/75 leading-relaxed line-clamp-2 font-lora">
                              {service.summary}
                            </p>
                          </div>

                          {/* Key Points Pills if available */}
                          {service.keyPoints && (
                            <div className="flex flex-wrap gap-1.5 pt-1">
                              {service.keyPoints.slice(0, 2).map((kp, kIdx) => (
                                <span key={kIdx} className="text-[10px] font-mono text-teal-deep bg-sage/40 px-2 py-0.5 rounded border border-teal-deep/10">
                                  {kp}
                                </span>
                              ))}
                            </div>
                          )}

                          <div className="pt-3 border-t border-teal-deep/10 flex items-center justify-between">
                            <span className="inline-flex items-center text-xs font-bold text-teal-deep group-hover:text-coral-accent transition-colors font-jost uppercase tracking-wider">
                              <span>Explore Full Scope</span>
                              <ArrowRight className="ml-1.5 w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform" />
                            </span>
                            <span className="text-[10px] text-forest/70 font-mono">
                              Full-Scope Delivery
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

      {/* 3. Engineering Consultation Plaque */}
      <section className="relative w-full bg-[#f4f7f4] py-16 sm:py-24 border-b border-teal-deep/15 text-center overflow-hidden">
        {/* Subtle grid */}
        <div 
          className="absolute inset-0 opacity-[0.25] pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(23, 79, 73, 0.08) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(23, 79, 73, 0.08) 1px, transparent 1px)
            `,
            backgroundSize: '36px 36px'
          }}
        />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 relative z-10 anim-view">
          <span className="text-xs font-bold uppercase tracking-widest text-teal-deep bg-white border border-teal-deep/20 px-3.5 py-1.5 rounded-full font-jost shadow-xs">
            Technical Engineering Assessment
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-charcoal-green font-serif tracking-tight">
            Need Guidance on Facility Sizing, Bed Layouts or Statutory Approvals?
          </h2>
          <p className="text-sm sm:text-base text-charcoal-green/80 max-w-2xl mx-auto font-lora">
            Our engineering team assesses your facility plans, provides compliance feedback, and delivers transparent itemized infrastructure estimates.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center space-x-2.5 px-8 py-4 rounded-full text-sm font-bold text-white bg-teal-deep hover:bg-teal-dark transition-all shadow-elevated font-jost uppercase tracking-wider group"
            >
              <span>Request a Technical Consultation</span>
              <ArrowRight className="w-4 h-4 text-coral-accent group-hover:translate-x-1.5 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
