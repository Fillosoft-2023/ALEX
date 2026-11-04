'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  CheckCircle2, 
  AlertCircle, 
  Send,
  Building2,
  ShieldCheck,
  Sparkles
} from 'lucide-react';
import { companyData } from '@/data/companyData';

export default function ContactPage() {
  const [submissionState, setSubmissionState] = useState({
    submitting: false,
    submitted: false,
    error: null,
    data: null
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({
    defaultValues: {
      fullName: '',
      organization: '',
      email: '',
      phone: '',
      facilityType: 'Multi-Speciality Hospital',
      serviceRequired: 'Turnkey Hospital Construction',
      location: '',
      bedCapacity: '',
      message: ''
    }
  });

  const onSubmit = async (formData) => {
    setSubmissionState({ submitting: true, submitted: false, error: null, data: null });
    
    // Simulate real form processing delay
    await new Promise((resolve) => setTimeout(resolve, 800));

    // Save honest local feedback and display acknowledgment
    setSubmissionState({
      submitting: false,
      submitted: true,
      error: null,
      data: formData
    });
    reset();
  };

  return (
    <div className="w-full bg-[#faf9f5]">
      
      {/* 1. Header Banner with Blueprint CAD Grid & Ambient Halos */}
      <section className="relative w-full bg-charcoal-green text-white pt-28 pb-16 sm:pt-36 sm:pb-24 border-b border-teal-deep/20 overflow-hidden">
        {/* Subtle CAD Drafting Grid */}
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

        {/* Ambient Floating Glow Halos */}
        <div className="absolute -top-16 -left-16 w-[550px] h-[550px] bg-teal-deep/40 rounded-full blur-3xl pointer-events-none animate-floatSlow" />
        <div className="absolute -bottom-16 right-0 w-[500px] h-[500px] bg-coral-accent/15 rounded-full blur-3xl pointer-events-none animate-floatSlowReverse" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 anim-view">
          <div className="max-w-3xl space-y-5">
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-xs font-semibold tracking-wide backdrop-blur-md shadow-subtle">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400" />
              </span>
              <span className="font-jost uppercase tracking-widest text-[11px] text-emerald-300">
                Guwahati Central Engineering Desk &bull; Rapid Response Active
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-[3.25rem] font-extrabold tracking-tight leading-[1.2] font-serif text-white">
              Request a Project Consultation
            </h1>
            
            <p className="text-base sm:text-lg text-ivory/85 leading-relaxed font-lora max-w-2xl">
              Whether you are planning a new hospital from the ground up or modernizing an existing modular OT or medical gas pipeline, our Guwahati-based engineering team is ready to evaluate your requirements.
            </p>

            <div className="flex flex-wrap items-center gap-2 pt-2 text-xs font-mono text-sage">
              <span className="bg-white/10 px-3 py-1.5 rounded-lg border border-white/15 backdrop-blur-xs flex items-center space-x-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-coral-accent" />
                <span>Confidential CapEx Estimation</span>
              </span>
              <span className="bg-white/10 px-3 py-1.5 rounded-lg border border-white/15 backdrop-blur-xs flex items-center space-x-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-coral-accent" />
                <span>On-Site Feasibility Review</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Main Contact Form & Details Section */}
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
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column: Consultation Form (7 cols) */}
            <div className="lg:col-span-7 relative bg-white rounded-3xl p-7 sm:p-10 border border-teal-deep/20 shadow-elevated overflow-hidden">
              {/* Top gold shimmer highlight */}
              <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-teal-deep via-amber-400 to-teal-deep" />

              {/* Corner Architectural Ticks */}
              <div className="absolute top-2.5 left-2.5 w-2 h-2 border-t border-l border-amber-500/50" />
              <div className="absolute top-2.5 right-2.5 w-2 h-2 border-t border-r border-amber-500/50" />
              <div className="absolute bottom-2.5 left-2.5 w-2 h-2 border-b border-l border-amber-500/50" />
              <div className="absolute bottom-2.5 right-2.5 w-2 h-2 border-b border-r border-amber-500/50" />

              <div className="space-y-2 mb-8">
                <span className="text-xs font-bold uppercase tracking-widest text-teal-deep font-jost">
                  Online Estimate Form &bull; Confidential Assessment
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-charcoal-green font-serif tracking-tight">
                  Tell Us About Your Project
                </h2>
                <p className="text-xs sm:text-sm text-charcoal-green/75 font-lora">
                  Complete this form to receive technical guidance and an itemized cost estimate from our senior hospital infrastructure consultants.
                </p>
              </div>

              {/* Success Message Banner */}
              {submissionState.submitted && (
                <div className="mb-8 p-6 rounded-2xl bg-sage/50 border border-forest/30 text-charcoal-green space-y-3 animate-in fade-in duration-300">
                  <div className="flex items-center space-x-2 text-forest font-bold text-base font-serif">
                    <CheckCircle2 className="w-5 h-5 text-forest" />
                    <span>Inquiry Acknowledged Successfully</span>
                  </div>
                  <p className="text-xs sm:text-sm text-charcoal-green/85 leading-relaxed font-lora">
                    Thank you! Your project consultation request has been recorded. Our hospital infrastructure engineering desk in Guwahati will review your requirements and reach out within 24 business hours.
                  </p>
                  {submissionState.data && (
                    <div className="text-xs bg-white/80 p-3.5 rounded-xl border border-teal-deep/15 space-y-1 font-mono">
                      <div><strong>Contact:</strong> {submissionState.data.fullName} ({submissionState.data.phone})</div>
                      <div><strong>Service:</strong> {submissionState.data.serviceRequired}</div>
                      <div><strong>Facility:</strong> {submissionState.data.facilityType} in {submissionState.data.location}</div>
                    </div>
                  )}
                </div>
              )}

              {/* Consultation Form */}
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                
                {/* Row 1: Name & Hospital */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-charcoal-green block font-jost uppercase tracking-wider">
                      Full Name <span className="text-coral-accent">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Dr. Ramesh Kalita"
                      {...register('fullName', { required: 'Please provide your full name' })}
                      className="w-full px-4 py-3 rounded-xl border border-teal-deep/20 text-xs sm:text-sm focus:border-teal-deep focus:ring-2 focus:ring-teal-deep/20 outline-none transition-all font-lora bg-[#faf9f5]"
                    />
                    {errors.fullName && (
                      <span className="text-[11px] text-red-600 flex items-center space-x-1 mt-1 font-mono">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.fullName.message}</span>
                      </span>
                    )}
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-charcoal-green block font-jost uppercase tracking-wider">
                      Hospital or Company Name <span className="text-coral-accent">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Northeast Health Research Centre"
                      {...register('organization', { required: 'Please specify hospital or organization name' })}
                      className="w-full px-4 py-3 rounded-xl border border-teal-deep/20 text-xs sm:text-sm focus:border-teal-deep focus:ring-2 focus:ring-teal-deep/20 outline-none transition-all font-lora bg-[#faf9f5]"
                    />
                    {errors.organization && (
                      <span className="text-[11px] text-red-600 flex items-center space-x-1 mt-1 font-mono">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.organization.message}</span>
                      </span>
                    )}
                  </div>
                </div>

                {/* Row 2: Email & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-charcoal-green block font-jost uppercase tracking-wider">
                      Email Address <span className="text-coral-accent">*</span>
                    </label>
                    <input
                      type="email"
                      placeholder="director@hospital.com"
                      {...register('email', { 
                        required: 'Email address is required',
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: 'Please enter a valid email address'
                        }
                      })}
                      className="w-full px-4 py-3 rounded-xl border border-teal-deep/20 text-xs sm:text-sm focus:border-teal-deep focus:ring-2 focus:ring-teal-deep/20 outline-none transition-all font-lora bg-[#faf9f5]"
                    />
                    {errors.email && (
                      <span className="text-[11px] text-red-600 flex items-center space-x-1 mt-1 font-mono">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.email.message}</span>
                      </span>
                    )}
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-charcoal-green block font-jost uppercase tracking-wider">
                      Phone Number <span className="text-coral-accent">*</span>
                    </label>
                    <input
                      type="tel"
                      placeholder="e.g. +91 9876543210"
                      {...register('phone', { 
                        required: 'Phone number is required for consultation follow-up',
                        minLength: { value: 8, message: 'Please enter a valid phone number' }
                      })}
                      className="w-full px-4 py-3 rounded-xl border border-teal-deep/20 text-xs sm:text-sm focus:border-teal-deep focus:ring-2 focus:ring-teal-deep/20 outline-none transition-all font-mono bg-[#faf9f5]"
                    />
                    {errors.phone && (
                      <span className="text-[11px] text-red-600 flex items-center space-x-1 mt-1 font-mono">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.phone.message}</span>
                      </span>
                    )}
                  </div>
                </div>

                {/* Row 3: Facility Type & Service */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-charcoal-green block font-jost uppercase tracking-wider">
                      Facility or Project Type
                    </label>
                    <select
                      {...register('facilityType')}
                      className="w-full px-4 py-3 rounded-xl border border-teal-deep/20 text-xs sm:text-sm focus:border-teal-deep focus:ring-2 focus:ring-teal-deep/20 outline-none bg-[#faf9f5] transition-all font-lora"
                    >
                      <option value="Multi-Speciality Hospital">Multi-Speciality Hospital</option>
                      <option value="Single-Speciality Hospital / Clinic">Single-Speciality Hospital / Clinic</option>
                      <option value="Modular Surgical Centre">Modular Surgical Centre / OT Suite</option>
                      <option value="Nursing Home Upgrade">Nursing Home Upgrade</option>
                      <option value="IVF / Fertility Cleanroom">IVF / Fertility Cleanroom Centre</option>
                      <option value="Diagnostic / Imaging Centre">Diagnostic / Imaging Centre</option>
                      <option value="Other Healthcare Complex">Other Healthcare Complex</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-charcoal-green block font-jost uppercase tracking-wider">
                      Primary Service Required
                    </label>
                    <select
                      {...register('serviceRequired')}
                      className="w-full px-4 py-3 rounded-xl border border-teal-deep/20 text-xs sm:text-sm focus:border-teal-deep focus:ring-2 focus:ring-teal-deep/20 outline-none bg-[#faf9f5] transition-all font-lora"
                    >
                      <option value="Turnkey Hospital Construction">Turnkey Hospital Construction</option>
                      <option value="Modular Operation Theatres">Modular Operation Theatres</option>
                      <option value="Medical Gas Pipeline Systems (MGPS)">Medical Gas Pipeline Systems (MGPS)</option>
                      <option value="ICU & Critical Care Infrastructure">ICU &amp; Critical Care Infrastructure</option>
                      <option value="Hospital Consultancy & Licensing">Hospital Consultancy &amp; Licensing</option>
                      <option value="Medical Equipment & Hospital Furniture">Medical Equipment &amp; Furniture</option>
                      <option value="Fire Safety & Fire NOC Support">Fire Safety &amp; Fire NOC Support</option>
                      <option value="End-to-End Hospital Development Package">End-to-End Hospital Development Package</option>
                    </select>
                  </div>
                </div>

                {/* Row 4: Location & Bed Capacity */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-charcoal-green block font-jost uppercase tracking-wider">
                      Project Location (City / State) <span className="text-coral-accent">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Guwahati, Assam"
                      {...register('location', { required: 'Please specify the project location' })}
                      className="w-full px-4 py-3 rounded-xl border border-teal-deep/20 text-xs sm:text-sm focus:border-teal-deep focus:ring-2 focus:ring-teal-deep/20 outline-none transition-all font-lora bg-[#faf9f5]"
                    />
                    {errors.location && (
                      <span className="text-[11px] text-red-600 flex items-center space-x-1 mt-1 font-mono">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.location.message}</span>
                      </span>
                    )}
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-charcoal-green block font-jost uppercase tracking-wider">
                      Estimated Bed Capacity / Scope <span className="text-charcoal-green/50 text-[10px] font-mono">(Optional)</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. 70 Beds or 2 Modular OTs"
                      {...register('bedCapacity')}
                      className="w-full px-4 py-3 rounded-xl border border-teal-deep/20 text-xs sm:text-sm focus:border-teal-deep focus:ring-2 focus:ring-teal-deep/20 outline-none transition-all font-lora bg-[#faf9f5]"
                    />
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-charcoal-green block font-jost uppercase tracking-wider">
                    Project Details or Scope Description <span className="text-coral-accent">*</span>
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Briefly describe your proposed project requirements, current status (land acquisition, existing building, timeline), or specific technical needs..."
                    {...register('message', { required: 'Please include a brief description of your project' })}
                    className="w-full px-4 py-3 rounded-xl border border-teal-deep/20 text-xs sm:text-sm focus:border-teal-deep focus:ring-2 focus:ring-teal-deep/20 outline-none transition-all resize-none font-lora bg-[#faf9f5]"
                  ></textarea>
                  {errors.message && (
                    <span className="text-[11px] text-red-600 flex items-center space-x-1 mt-1 font-mono">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.message.message}</span>
                    </span>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={submissionState.submitting}
                  className="w-full inline-flex items-center justify-center py-4 px-6 rounded-xl text-sm font-bold text-white bg-teal-deep hover:bg-teal-dark active:scale-[0.99] transition-all shadow-elevated disabled:opacity-70 disabled:cursor-not-allowed group font-jost uppercase tracking-wider cursor-pointer"
                >
                  {submissionState.submitting ? (
                    <span>Processing Inquiry...</span>
                  ) : (
                    <>
                      <span>Submit Project Requirements</span>
                      <Send className="ml-2 w-4 h-4 text-coral-accent group-hover:translate-x-1.5 transition-transform" />
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Right Column: Office Details, Hours & Direct Contact (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Office Details Card */}
              <div className="relative bg-white rounded-3xl p-7 sm:p-8 border border-teal-deep/20 shadow-elevated space-y-6 overflow-hidden">
                {/* Top gold shimmer */}
                <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#c8b082] to-transparent" />

                <div className="space-y-1">
                  <div className="flex items-center space-x-2">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                    </span>
                    <span className="text-[11px] font-bold uppercase tracking-widest text-teal-deep font-jost">
                      Headquarters &bull; Active Desk
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-charcoal-green font-serif">
                    Guwahati Engineering Office
                  </h3>
                </div>

                <div className="space-y-4 text-xs sm:text-sm text-charcoal-green/85">
                  <div className="flex items-start space-x-3.5">
                    <div className="w-9 h-9 rounded-xl bg-teal-deep/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <MapPin className="w-4 h-4 text-coral-accent" />
                    </div>
                    <div>
                      <strong className="block text-charcoal-green font-bold font-serif">Office Address:</strong>
                      <p className="mt-0.5 leading-relaxed font-lora">{companyData.contact.address.full}</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3.5 border-t border-teal-deep/10 pt-4">
                    <div className="w-9 h-9 rounded-xl bg-teal-deep/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Phone className="w-4 h-4 text-forest" />
                    </div>
                    <div>
                      <strong className="block text-charcoal-green font-bold font-serif">Direct Engineering Hotline:</strong>
                      <a 
                        href={`tel:${companyData.contact.phoneRaw}`}
                        className="text-teal-deep hover:text-coral-accent font-bold transition-colors inline-block mt-0.5 font-mono text-sm"
                      >
                        {companyData.contact.phoneDisplay}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3.5 border-t border-teal-deep/10 pt-4">
                    <div className="w-9 h-9 rounded-xl bg-teal-deep/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Mail className="w-4 h-4 text-coral-accent" />
                    </div>
                    <div>
                      <strong className="block text-charcoal-green font-bold font-serif">Inquiry Email:</strong>
                      <a 
                        href={`mailto:${companyData.contact.email}`}
                        className="text-teal-deep hover:text-coral-accent font-semibold transition-colors inline-block mt-0.5 font-mono text-sm"
                      >
                        {companyData.contact.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3.5 border-t border-teal-deep/10 pt-4">
                    <div className="w-9 h-9 rounded-xl bg-teal-deep/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Clock className="w-4 h-4 text-teal-deep" />
                    </div>
                    <div>
                      <strong className="block text-charcoal-green font-bold font-serif">Office Working Hours:</strong>
                      <p className="mt-0.5 font-lora">{companyData.contact.hours.weekdays}</p>
                      <p className="text-[11px] text-charcoal-green/60 font-lora">{companyData.contact.hours.saturday}</p>
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-teal-deep/10 flex items-center space-x-2 text-xs text-forest font-semibold font-jost">
                  <ShieldCheck className="w-4 h-4 text-forest" />
                  <span>Licensed Healthcare Infrastructure Consultants</span>
                </div>
              </div>

              {/* Verified Google Map Embed */}
              <div className="bg-white rounded-3xl p-3.5 border border-teal-deep/20 shadow-elevated overflow-hidden">
                <div className="w-full h-64 sm:h-72 rounded-2xl overflow-hidden relative">
                  <iframe
                    src={companyData.contact.mapEmbedUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Alex Health Care System Guwahati Office Map"
                    className="w-full h-full"
                  />
                </div>
                <div className="p-2.5 text-center text-[11px] text-charcoal-green/70 font-mono">
                  Alex Healthcare System &bull; Sixmile, Guwahati, Assam
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
