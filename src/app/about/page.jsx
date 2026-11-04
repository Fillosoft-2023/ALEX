import Image from 'next/image';
import Link from 'next/link';
import { 
  Building2, 
  ShieldCheck, 
  CheckCircle2, 
  MapPin, 
  Award, 
  Clock, 
  Wrench, 
  ArrowRight,
  Stethoscope,
  HeartHandshake,
  Sparkles,
  Compass,
  Layers,
  Activity
} from 'lucide-react';
import { companyData } from '@/data/companyData';
import CountingNumber from '@/components/ui/CountingNumber';
import { projectsData } from '@/data/projectsData';

export const metadata = {
  title: 'About Us | Alex Healthcare System',
  description: 'Learn about Alex Healthcare System - a leading provider of hospital infrastructure, medical gas pipelines, and modular OT solutions in Northeast India. 6+ years of experience, 30+ completed projects, and 100+ ongoing projects.',
};

export default function AboutPage() {
  const coreValues = [
    {
      num: "01",
      title: "Clinical Safety & Integrity",
      spec: "HTM 02-01 & ISO Class 7",
      desc: "We design and install strictly around healthcare life-support norms, guaranteeing cleanroom air purity and leak-free medical gas lines."
    },
    {
      num: "02",
      title: "Single-Point Accountability",
      spec: "Unified EPC Contract",
      desc: "From initial soil assessment and structural drawings to statutory fire clearances and NABH compliance, we manage every discipline under one roof."
    },
    {
      num: "03",
      title: "Regional Logistics Mastery",
      spec: "Zone V Seismic Engineering",
      desc: "Deep logistical experience across all Northeast Indian states ensures reliable material transport, seismic civil design, and localized technical support."
    },
    {
      num: "04",
      title: "Long-Term Client Partnership",
      spec: "Preventive O&M Support",
      desc: "Our relationship doesn't end at handover. We provide periodic preventive maintenance, gas system recertification, and facility expansion guidance."
    }
  ];

  return (
    <div className="w-full bg-[#faf9f5]">
      
      {/* 1. Page Hero with Blueprint CAD Grid & Atmospheric Glows */}
      <section className="relative w-full bg-charcoal-green text-white pt-28 pb-20 sm:pt-36 sm:pb-28 overflow-hidden border-b border-teal-deep/20">
        
        {/* Background photo & overlay */}
        <div className="absolute inset-0 z-0 opacity-20 mix-blend-luminosity">
          <Image
            src="/buildings-bg.jpg"
            alt="Alex Healthcare System hospital engineering background"
            fill
            priority
            className="object-cover object-center animate-kenburns"
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal-green via-charcoal-green/95 to-charcoal-green/75 z-0" />

        {/* Blueprint CAD Drafting Grid Overlay */}
        <div 
          className="absolute inset-0 opacity-[0.22] pointer-events-none z-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(200, 176, 130, 0.15) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(200, 176, 130, 0.15) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}
          aria-hidden="true"
        />

        {/* Atmospheric Floating Glow Halos */}
        <div className="absolute -top-16 -left-16 w-[550px] h-[550px] bg-teal-deep/40 rounded-full blur-3xl pointer-events-none animate-floatSlow" />
        <div className="absolute -bottom-16 right-0 w-[500px] h-[500px] bg-coral-accent/15 rounded-full blur-3xl pointer-events-none animate-floatSlowReverse" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 anim-view">
          <div className="max-w-3xl space-y-5">
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-xs font-semibold tracking-wide backdrop-blur-md shadow-subtle">
              <span className="w-2 h-2 rounded-full bg-coral-accent animate-pulse" />
              <span className="font-jost uppercase tracking-widest text-[11px] text-sage">About Alex Healthcare System &bull; Guwahati HQ</span>
            </div>
            
            <h1 className="text-3xl sm:text-5xl lg:text-[3.25rem] font-extrabold tracking-tight leading-[1.2] font-serif text-white">
              Engineering the Backbone of Northeast India’s Modern Hospitals
            </h1>
            
            <p className="text-base sm:text-lg text-ivory/85 leading-relaxed font-lora max-w-2xl">
              For over 12 years, Alex Healthcare System has partnered with hospital founders, healthcare trusts, and clinicians to construct, modernize, and commission patient-centric healthcare facilities.
            </p>

            {/* Quick credentials strip */}
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
            </div>
          </div>
        </div>
      </section>

      {/* 2. Verified Stats Strip with Gold Accents */}
      <section className="w-full bg-[#103a35] text-white py-10 border-y border-white/15 relative overflow-hidden">
        <div className="absolute inset-0 bg-blueprint-grid opacity-15 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 anim-view">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-white/15 anim-stagger">
            {companyData.stats.map((stat, idx) => (
              <div key={idx} className={`space-y-1.5 ${idx !== 0 ? 'pt-4 md:pt-0' : ''}`}>
                <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-serif text-amber-300 drop-shadow-sm">
                  <CountingNumber value={stat.value} duration={2000} />
                </div>
                <div className="text-xs sm:text-sm font-bold text-white/95 font-jost uppercase tracking-wider">
                  {stat.label}
                </div>
                <div className="text-[11px] text-ivory/70 hidden sm:block font-lora">
                  {stat.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Company Story & Capabilities */}
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

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 anim-view">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-teal-deep bg-white border border-teal-deep/20 px-3.5 py-1.5 rounded-full font-jost shadow-xs">
                Our Heritage &amp; Mission
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-charcoal-green tracking-tight font-serif leading-tight">
                From Concept to Commissioning, No Project is Too Big or Too Small
              </h2>
              
              <div className="space-y-4 text-sm sm:text-base text-charcoal-green/80 leading-relaxed font-lora">
                <p>
                  Headquartered in Guwahati, Assam, Alex Healthcare System was founded with a clear directive: to elevate the standard of hospital infrastructure across Northeast India through specialized healthcare engineering. 
                </p>
                <p>
                  Traditional contractors often treat hospital construction identically to commercial real estate. In healthcare, however, precision airflow, clinical zoning, medical gas purity, and life-safety fail-safes are non-negotiable. 
                </p>
                <p>
                  With 6+ years of specialized healthcare engineering, we have successfully delivered 30+ completed projects and 100+ ongoing projects ranging from single modular operating theatre retrofits in district clinics to full-fledged 30 to 100+ bed hospital constructions built from the foundation up.
                </p>
              </div>

              {/* Verified Scope Checkmarks with Architectural Pill Styling */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3">
                {[
                  "Full-Scale Civil & Structural Engineering",
                  "Medical Gas Pipelines (HTM 02-01)",
                  "Modular Operating Theatres (ISO Class 7)",
                  "ICU Infrastructure & Bed Head Trunking",
                  "Fire NOC Planning & Hydrant Loops",
                  "NABH Infrastructure Alignment"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center space-x-2.5 text-xs font-semibold text-charcoal-green bg-white p-2.5 rounded-xl border border-teal-deep/15 shadow-xs">
                    <CheckCircle2 className="w-4 h-4 text-coral-accent flex-shrink-0" />
                    <span className="font-jost">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Architectural Visuals with CAD Corner Accents */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-elevated border-2 border-white aspect-[4/3] group">
                <Image
                  src="/hospital-construction-main.jpg"
                  alt="Hospital construction engineering by Alex Healthcare System"
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 500px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-green/70 via-transparent to-transparent pointer-events-none" />

                {/* Architectural Corner Brackets on Image */}
                <div className="absolute top-3 left-3 w-3 h-3 border-t-2 border-l-2 border-amber-400" />
                <div className="absolute top-3 right-3 w-3 h-3 border-t-2 border-r-2 border-amber-400" />
                <div className="absolute bottom-3 left-3 w-3 h-3 border-b-2 border-l-2 border-amber-400" />
                <div className="absolute bottom-3 right-3 w-3 h-3 border-b-2 border-r-2 border-amber-400" />

                <div className="absolute bottom-3 left-4 right-4 text-white">
                  <div className="text-[10px] font-mono uppercase tracking-widest text-amber-300">Active Build Site</div>
                  <div className="text-sm font-bold font-serif truncate">Multi-Speciality Hospital Erection &bull; Assam</div>
                </div>
              </div>

              <div className="mt-4 bg-white rounded-2xl p-5 border border-teal-deep/15 shadow-subtle flex items-start space-x-3.5">
                <MapPin className="w-5 h-5 text-coral-accent mt-0.5 flex-shrink-0" />
                <div className="text-xs text-charcoal-green/80 font-lora">
                  <strong className="text-teal-deep block mb-0.5 font-serif font-bold text-sm">Regional Operational Reach:</strong>
                  Guwahati HQ with active project sites across Assam (Hojai, Nagaon, Guwahati), Meghalaya, Tripura, Arunachal Pradesh, and West Bengal.
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Core Values & Principles (4 Luxury Elevated Cards) */}
      <section className="relative w-full bg-[#f4f7f4] py-16 sm:py-24 border-b border-teal-deep/15 overflow-hidden">
        {/* Subtle grid */}
        <div 
          className="absolute inset-0 opacity-[0.3]"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(23, 79, 73, 0.08) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(23, 79, 73, 0.08) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 anim-view">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center space-x-2 text-[11px] font-bold uppercase tracking-widest text-teal-deep bg-white border border-teal-deep/20 px-3.5 py-1 rounded-full shadow-xs">
              <Sparkles className="w-3 h-3 text-coral-accent" />
              <span className="font-jost">Guiding Philosophy &bull; Engineering Standards</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-charcoal-green tracking-tight font-serif">
              The Principles Behind Every Facility We Build
            </h2>
            <p className="text-sm sm:text-base text-charcoal-green/75 font-lora">
              Engineering decisions grounded in clinical safety, structural resilience, and operational efficiency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 anim-stagger">
            {coreValues.map((val, idx) => (
              <div 
                key={idx}
                className="group relative bg-white rounded-3xl p-7 border border-teal-deep/15 shadow-subtle hover:shadow-elevated transition-all duration-300 flex flex-col justify-between gpu-accelerate hover:-translate-y-2 overflow-hidden"
              >
                {/* Top Gold Shimmer on hover */}
                <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#c8b082] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20" />

                {/* Corner Architectural Ticks */}
                <div className="absolute top-2.5 left-2.5 w-2 h-2 border-t border-l border-amber-500/50" />
                <div className="absolute top-2.5 right-2.5 w-2 h-2 border-t border-r border-amber-500/50" />
                <div className="absolute bottom-2.5 left-2.5 w-2 h-2 border-b border-l border-amber-500/50" />
                <div className="absolute bottom-2.5 right-2.5 w-2 h-2 border-b border-r border-amber-500/50" />

                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-xs font-extrabold font-mono text-teal-deep bg-sage/50 border border-teal-deep/20 px-2.5 py-1 rounded-md group-hover:bg-teal-deep group-hover:text-white transition-colors">
                      {val.num}
                    </span>
                    <span className="text-[10px] font-mono text-forest/70 font-semibold uppercase tracking-wider">
                      {val.spec}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-charcoal-green mb-2.5 font-serif group-hover:text-teal-deep transition-colors leading-snug">
                    {val.title}
                  </h3>
                </div>

                <p className="text-xs text-charcoal-green/75 leading-relaxed font-lora pt-3 border-t border-teal-deep/10">
                  {val.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Strategic Partner Firm Spotlight (Institutional Alliance Plaque) */}
      <section className="relative w-full bg-[#faf9f5] py-16 sm:py-24 border-b border-teal-deep/15 overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 anim-view">
          <div className="relative bg-white rounded-3xl p-8 sm:p-12 border border-teal-deep/20 shadow-elevated flex flex-col md:flex-row items-center justify-between gap-8 overflow-hidden">
            
            {/* Top gold line */}
            <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-teal-deep via-amber-400 to-teal-deep" />

            <div className="space-y-3.5 max-w-xl">
              <span className="text-[11px] font-bold uppercase tracking-widest text-forest bg-sage/50 border border-teal-deep/15 px-3 py-1 rounded-full font-jost">
                Engineering Collaboration &bull; Strategic Alliance
              </span>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-charcoal-green font-serif leading-tight">
                Strategic Alliance with MHS Partner Firm
              </h3>
              <p className="text-sm text-charcoal-green/80 leading-relaxed font-lora">
                Alex Healthcare System collaborates with MHS Partner Firm to deliver synchronized healthcare engineering, specialized equipment sourcing, and regional biomedical integration across major tertiary hospital projects.
              </p>
              
              <div className="flex items-center space-x-4 pt-2 text-xs font-mono text-teal-deep">
                <span className="flex items-center space-x-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-coral-accent" />
                  <span>Joint Technical Oversight</span>
                </span>
                <span className="flex items-center space-x-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-coral-accent" />
                  <span>Equipment Synergy</span>
                </span>
              </div>
            </div>

            <div className="bg-[#f4f7f4] p-6 rounded-2xl border border-teal-deep/20 text-center flex-shrink-0 w-64 flex flex-col items-center shadow-subtle">
              <div className="relative h-16 w-48 mb-3">
                <Image
                  src="/mhslogo.png"
                  alt="MHS Partner Firm Logo"
                  fill
                  className="object-contain"
                  sizes="180px"
                />
              </div>
              <div className="text-xs font-bold text-charcoal-green font-serif">{companyData.partner.name}</div>
              <div className="text-[11px] text-charcoal-green/70 mt-0.5 font-lora">{companyData.partner.role}</div>
              <span className="mt-2 text-[10px] font-mono uppercase bg-white border border-teal-deep/15 px-2 py-0.5 rounded text-teal-deep font-bold">
                Certified Partner
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Call to Action */}
      <section className="relative w-full bg-teal-deep text-white py-16 sm:py-24 text-center overflow-hidden">
        {/* CAD Blueprint grid overlay */}
        <div className="absolute inset-0 bg-blueprint-grid opacity-15 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-coral-accent/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 relative z-10 anim-view">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-sage text-xs font-semibold font-jost uppercase tracking-wider">
            <span>Guwahati Central Engineering Desk</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold font-serif tracking-tight leading-tight">
            Ready to Build or Upgrade Your Healthcare Facility?
          </h2>
          <p className="text-sm sm:text-base text-ivory/85 max-w-2xl mx-auto font-lora">
            Contact our engineering desk in Guwahati to schedule an on-site feasibility evaluation or preliminary project consultation.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center space-x-2.5 px-8 py-4 rounded-full text-sm font-bold text-charcoal-green bg-gradient-to-r from-amber-300 via-amber-200 to-amber-400 hover:from-amber-400 hover:to-amber-500 transition-all shadow-float hover:shadow-elevated font-jost uppercase tracking-wider"
            >
              <span>Schedule a Project Consultation</span>
              <ArrowRight className="w-4 h-4 text-charcoal-green" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
