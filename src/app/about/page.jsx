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
  HeartHandshake
} from 'lucide-react';
import { companyData } from '@/data/companyData';
import CountingNumber from '@/components/ui/CountingNumber';
import { projectsData } from '@/data/projectsData';

export const metadata = {
  title: 'About Us | Alex Healthcare System',
  description: 'Learn about Alex Healthcare System - a leading provider of hospital infrastructure, medical gas pipelines, and modular OT solutions in Northeast India. 12+ years of experience and 250+ completed projects.',
};

export default function AboutPage() {
  const coreValues = [
    {
      title: "Clinical Safety & Integrity",
      desc: "We design and install strictly around healthcare life-support norms, guaranteeing cleanroom air purity and leak-free medical gas lines."
    },
    {
      title: "Single-Point Accountability",
      desc: "From initial soil assessment and structural drawings to statutory fire clearances and NABH compliance, we manage every discipline under one roof."
    },
    {
      title: "Regional Logistics Mastery",
      desc: "Deep logistical experience across all Northeast Indian states ensures reliable material transport, seismic civil design, and localized technical support."
    },
    {
      title: "Long-Term Client Partnership",
      desc: "Our relationship doesn't end at handover. We provide periodic preventive maintenance, gas system recertification, and facility expansion guidance."
    }
  ];

  return (
    <div className="w-full bg-ivory">
      
      {/* 1. Page Hero */}
      <section className="relative w-full bg-charcoal-green text-white py-16 sm:py-24 overflow-hidden">
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

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-sage text-xs font-semibold tracking-wide">
              <span>About Alex Healthcare System</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
              Engineering the Backbone of Northeast India’s Modern Hospitals
            </h1>
            <p className="text-base sm:text-lg text-ivory/85 leading-relaxed font-normal">
              For over 12 years, Alex Healthcare System has partnered with hospital founders, healthcare trusts, and clinicians to construct, modernize, and commission patient-centric healthcare facilities.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Verified Stats Strip */}
      <section className="w-full bg-teal-deep text-white py-8 border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {companyData.stats.map((stat, idx) => (
              <div key={idx} className="space-y-1">
                <div className="text-3xl sm:text-4xl font-extrabold font-display text-sage">
                  <CountingNumber value={stat.value} duration={2000} />
                </div>
                <div className="text-xs sm:text-sm font-bold text-white/95">
                  {stat.label}
                </div>
                <div className="text-[11px] text-ivory/70 hidden sm:block">
                  {stat.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Company Story & Capabilities */}
      <section className="w-full py-16 sm:py-24 border-b border-teal-deep/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-teal-deep bg-sage/50 px-3 py-1 rounded-full">
                Our Heritage &amp; Mission
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-charcoal-green tracking-tight">
                From Concept to Commissioning, No Project is Too Big or Too Small
              </h2>
              
              <div className="space-y-4 text-sm sm:text-base text-charcoal-green/80 leading-relaxed">
                <p>
                  Headquartered in Guwahati, Assam, Alex Healthcare System was founded with a clear directive: to elevate the standard of hospital infrastructure across Northeast India through specialized healthcare engineering. 
                </p>
                <p>
                  Traditional contractors often treat hospital construction identically to commercial real estate. In healthcare, however, precision airflow, clinical zoning, medical gas purity, and life-safety fail-safes are non-negotiable. 
                </p>
                <p>
                  Over the past decade, we have successfully completed 250+ projects ranging from single modular operating theatre retrofits in district clinics to full-fledged 100+ bed hospital constructions built from the foundation up.
                </p>
              </div>

              {/* Verified Scope Checkmarks */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {[
                  "Turnkey Civil & Structural Engineering",
                  "Medical Gas Pipelines (HTM 02-01)",
                  "Modular Operating Theatres (ISO Class 7)",
                  "ICU Infrastructure & Bed Head Trunking",
                  "Fire NOC Planning & Hydrant Loops",
                  "NABH Infrastructure Alignment"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center space-x-2 text-xs font-semibold text-charcoal-green">
                    <CheckCircle2 className="w-4 h-4 text-forest flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Architectural Visuals */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-float border-2 border-white aspect-[4/3]">
                <Image
                  src="/hospital-construction-main.jpg"
                  alt="Hospital construction engineering by Alex Healthcare System"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 500px"
                />
              </div>

              <div className="mt-4 bg-white rounded-2xl p-5 border border-teal-deep/15 shadow-subtle flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-coral-accent mt-0.5 flex-shrink-0" />
                <div className="text-xs text-charcoal-green/80">
                  <strong className="text-teal-deep block mb-0.5">Regional Operational Reach:</strong>
                  Guwahati HQ with active project sites across Assam (Hojai, Nagaon, Guwahati), Meghalaya, Tripura, Arunachal Pradesh, and West Bengal.
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Core Values & Principles */}
      <section className="w-full bg-sage/30 py-16 sm:py-24 border-b border-teal-deep/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-teal-deep bg-sage/60 px-3.5 py-1.5 rounded-full">
              Guiding Philosophy
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-charcoal-green tracking-tight">
              The Principles Behind Every Facility We Build
            </h2>
            <p className="text-sm text-charcoal-green/75">
              Engineering decisions grounded in clinical safety, structural resilience, and operational efficiency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((val, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-2xl p-6 border border-teal-deep/15 shadow-subtle hover:shadow-card transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-teal-deep text-white font-bold flex items-center justify-center text-sm mb-4">
                  0{idx + 1}
                </div>
                <h3 className="text-lg font-bold text-charcoal-green mb-2">{val.title}</h3>
                <p className="text-xs text-charcoal-green/75 leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Strategic Partner Firm Spotlight */}
      <section className="w-full bg-ivory py-16 sm:py-20 border-b border-teal-deep/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-teal-deep/15 shadow-subtle flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-3 max-w-xl">
              <span className="text-[11px] font-bold uppercase tracking-wider text-forest bg-sage/50 px-3 py-1 rounded-full">
                Engineering Collaboration
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-charcoal-green">
                Strategic Alliance with MHS Partner Firm
              </h3>
              <p className="text-sm text-charcoal-green/80 leading-relaxed">
                Alex Healthcare System collaborates with MHS Partner Firm to deliver synchronized healthcare engineering, specialized equipment sourcing, and regional biomedical integration across major tertiary hospital projects.
              </p>
            </div>

            <div className="bg-ivory-warm p-6 rounded-2xl border border-teal-deep/10 text-center flex-shrink-0 w-64 flex flex-col items-center">
              <div className="relative h-14 w-44 mb-3">
                <Image
                  src="/mhslogo.png"
                  alt="MHS Partner Firm Logo"
                  fill
                  className="object-contain"
                  sizes="180px"
                />
              </div>
              <div className="text-xs font-bold text-charcoal-green">{companyData.partner.name}</div>
              <div className="text-[11px] text-charcoal-green/60 mt-0.5">{companyData.partner.role}</div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Call to Action */}
      <section className="w-full bg-teal-deep text-white py-14 sm:py-20 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-2xl sm:text-4xl font-extrabold">
            Ready to Build or Upgrade Your Healthcare Facility?
          </h2>
          <p className="text-sm sm:text-base text-ivory/85 max-w-2xl mx-auto">
            Contact our engineering desk in Guwahati to schedule an on-site feasibility evaluation or preliminary project consultation.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center space-x-2 px-8 py-4 rounded-xl text-sm font-bold text-teal-deep bg-ivory hover:bg-white transition-all shadow-float"
            >
              <span>Schedule a Project Consultation</span>
              <ArrowRight className="w-4 h-4 text-coral-accent" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
