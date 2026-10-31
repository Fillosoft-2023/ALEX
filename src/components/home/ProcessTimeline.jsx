import { 
  ClipboardCheck, 
  Compass, 
  Wrench, 
  Cpu, 
  ShieldCheck,
  ArrowRight
} from 'lucide-react';
import Link from 'next/link';

export default function ProcessTimeline() {
  const steps = [
    {
      num: "01",
      title: "Consultation & Assessment",
      subtitle: "Requirements Evaluation",
      desc: "Comprehensive review of bed capacity, clinical specialties, site conditions, statutory zoning, and preliminary CapEx budgeting.",
      icon: ClipboardCheck
    },
    {
      num: "02",
      title: "Planning & Architecture",
      subtitle: "Facility Design",
      desc: "Specialized healthcare layout design aligning sterile surgical corridors, public circulation, and departmental NABH infrastructure standards.",
      icon: Compass
    },
    {
      num: "03",
      title: "Engineering & Civil Build",
      subtitle: "Infrastructure Development",
      desc: "Turnkey structural civil construction, copper medical gas pipeline (MGPS) laying, and electrical substation integration.",
      icon: Wrench
    },
    {
      num: "04",
      title: "Installation & Integration",
      subtitle: "Equipment Deployment",
      desc: "Cleanroom modular OT wall assembly, laminar airflow plenums, pendant arm mounting, and ICU bed head unit cabling.",
      icon: Cpu
    },
    {
      num: "05",
      title: "Testing & Handover",
      subtitle: "Compliance Support",
      desc: "24-hr gas pressure holding tests, cleanroom particle validation, Fire NOC documentation, and final clinical commissioning.",
      icon: ShieldCheck
    }
  ];

  return (
    <section className="w-full bg-mint-muted/50 py-16 sm:py-24 border-b border-teal-deep/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-teal-deep bg-sage/60 px-3.5 py-1.5 rounded-full">
            Project Lifecycle
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-charcoal-green tracking-tight">
            End-to-End Project Execution Framework
          </h2>
          <p className="text-sm sm:text-base text-charcoal-green/75 leading-relaxed">
            How Alex Healthcare System delivers complex hospital engineering projects from concept to certified clinical readiness.
          </p>
        </div>

        {/* Desktop Horizontal Timeline (Hidden on mobile) */}
        <div className="hidden lg:block relative mb-12">
          {/* Connecting Line */}
          <div className="absolute top-1/4 left-10 right-10 h-0.5 bg-teal-deep/20 -translate-y-1/2 z-0" />

          <div className="grid grid-cols-5 gap-4 relative z-10">
            {steps.map((step, idx) => {
              const IconComponent = step.icon;
              return (
                <div 
                  key={idx}
                  className="bg-white rounded-2xl p-5 border border-teal-deep/15 shadow-subtle hover:shadow-elevated transition-all duration-200 flex flex-col justify-between"
                >
                  <div>
                    {/* Number Badge and Icon */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-extrabold text-teal-deep bg-sage/60 px-2 py-1 rounded-md">
                        {step.num}
                      </span>
                      <div className="w-9 h-9 rounded-xl bg-teal-deep text-white flex items-center justify-center">
                        <IconComponent className="w-4 h-4 text-coral-accent" />
                      </div>
                    </div>

                    <div className="text-[10px] font-bold uppercase tracking-wider text-forest mb-1">
                      {step.subtitle}
                    </div>
                    <h3 className="text-sm font-bold text-charcoal-green mb-2 leading-snug">
                      {step.title}
                    </h3>
                  </div>

                  <p className="text-xs text-charcoal-green/70 leading-relaxed mt-2 pt-2 border-t border-teal-deep/10">
                    {step.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile Vertical Timeline (Hidden on desktop) */}
        <div className="block lg:hidden space-y-4 mb-8">
          {steps.map((step, idx) => {
            const IconComponent = step.icon;
            return (
              <div 
                key={idx} 
                className="bg-white rounded-2xl p-5 border border-teal-deep/15 shadow-subtle flex items-start space-x-4"
              >
                <div className="w-10 h-10 rounded-xl bg-teal-deep text-white flex items-center justify-center flex-shrink-0 font-bold text-xs">
                  {step.num}
                </div>
                <div className="space-y-1">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-forest">
                    {step.subtitle}
                  </div>
                  <h3 className="text-base font-bold text-charcoal-green">
                    {step.title}
                  </h3>
                  <p className="text-xs text-charcoal-green/75 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Process Note */}
        <div className="bg-white/80 rounded-2xl p-5 border border-teal-deep/10 flex flex-col sm:flex-row items-center justify-between gap-4 max-w-4xl mx-auto">
          <div className="text-xs text-charcoal-green/80 text-center sm:text-left">
            <strong className="text-teal-deep font-bold">Turnkey Project Assurance:</strong> Every milestone incorporates safety validation, statutory documentation, and regional engineering compliance.
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center space-x-1.5 text-xs font-bold text-teal-deep hover:text-coral-accent transition-colors flex-shrink-0"
          >
            <span>Discuss your facility timeline &rarr;</span>
          </Link>
        </div>

      </div>
    </section>
  );
}
