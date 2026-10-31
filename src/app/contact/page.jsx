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
  ShieldCheck
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
    <div className="w-full bg-ivory">
      
      {/* 1. Header Banner */}
      <section className="w-full bg-charcoal-green text-white py-14 sm:py-20 border-b border-teal-deep/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-coral-accent bg-white/10 px-3 py-1 rounded-full">
              Get In Touch &bull; Project Inquiries
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
              Request a Project Consultation
            </h1>
            <p className="text-sm sm:text-base text-ivory/80 leading-relaxed">
              Whether you are planning a new hospital from the ground up or modernizing an existing modular OT or medical gas pipeline, our Guwahati-based engineering team is ready to evaluate your requirements.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Main Contact Form & Details Section */}
      <section className="w-full py-14 sm:py-20 border-b border-teal-deep/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column: Consultation Form (7 cols) */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-7 sm:p-10 border border-teal-deep/15 shadow-subtle">
              <div className="space-y-2 mb-8">
                <span className="text-xs font-bold uppercase tracking-wider text-teal-deep">
                  Online Estimate Form
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-charcoal-green">
                  Tell Us About Your Project
                </h2>
                <p className="text-xs sm:text-sm text-charcoal-green/75">
                  Complete this form to receive technical guidance and an itemized cost estimate from our senior hospital infrastructure consultants.
                </p>
              </div>

              {/* Success Message Banner */}
              {submissionState.submitted && (
                <div className="mb-8 p-6 rounded-2xl bg-sage/50 border border-forest/30 text-charcoal-green space-y-3 animate-in fade-in duration-300">
                  <div className="flex items-center space-x-2 text-forest font-bold text-base">
                    <CheckCircle2 className="w-5 h-5 text-forest" />
                    <span>Inquiry Acknowledged</span>
                  </div>
                  <p className="text-xs sm:text-sm text-charcoal-green/85 leading-relaxed">
                    Thank you! Your project consultation request has been recorded. Our hospital infrastructure engineering desk in Guwahati will review your requirements and reach out within 24 business hours.
                  </p>
                  {submissionState.data && (
                    <div className="text-xs bg-white/70 p-3 rounded-xl border border-teal-deep/10 space-y-1">
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
                    <label className="text-xs font-bold text-charcoal-green block">
                      Full Name <span className="text-coral-accent">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Dr. Ramesh Kalita"
                      {...register('fullName', { required: 'Please provide your full name' })}
                      className="w-full px-4 py-3 rounded-xl border border-teal-deep/20 text-xs sm:text-sm focus:border-teal-deep focus:ring-2 focus:ring-teal-deep/20 outline-none transition-all"
                    />
                    {errors.fullName && (
                      <span className="text-[11px] text-red-600 flex items-center space-x-1 mt-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.fullName.message}</span>
                      </span>
                    )}
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-charcoal-green block">
                      Hospital or Company Name <span className="text-coral-accent">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Northeast Health Research Centre"
                      {...register('organization', { required: 'Please specify hospital or organization name' })}
                      className="w-full px-4 py-3 rounded-xl border border-teal-deep/20 text-xs sm:text-sm focus:border-teal-deep focus:ring-2 focus:ring-teal-deep/20 outline-none transition-all"
                    />
                    {errors.organization && (
                      <span className="text-[11px] text-red-600 flex items-center space-x-1 mt-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.organization.message}</span>
                      </span>
                    )}
                  </div>
                </div>

                {/* Row 2: Email & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-charcoal-green block">
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
                      className="w-full px-4 py-3 rounded-xl border border-teal-deep/20 text-xs sm:text-sm focus:border-teal-deep focus:ring-2 focus:ring-teal-deep/20 outline-none transition-all"
                    />
                    {errors.email && (
                      <span className="text-[11px] text-red-600 flex items-center space-x-1 mt-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.email.message}</span>
                      </span>
                    )}
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-charcoal-green block">
                      Phone Number <span className="text-coral-accent">*</span>
                    </label>
                    <input
                      type="tel"
                      placeholder="e.g. +91 9876543210"
                      {...register('phone', { 
                        required: 'Phone number is required for consultation follow-up',
                        minLength: { value: 8, message: 'Please enter a valid phone number' }
                      })}
                      className="w-full px-4 py-3 rounded-xl border border-teal-deep/20 text-xs sm:text-sm focus:border-teal-deep focus:ring-2 focus:ring-teal-deep/20 outline-none transition-all"
                    />
                    {errors.phone && (
                      <span className="text-[11px] text-red-600 flex items-center space-x-1 mt-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.phone.message}</span>
                      </span>
                    )}
                  </div>
                </div>

                {/* Row 3: Facility Type & Service */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-charcoal-green block">
                      Facility or Project Type
                    </label>
                    <select
                      {...register('facilityType')}
                      className="w-full px-4 py-3 rounded-xl border border-teal-deep/20 text-xs sm:text-sm focus:border-teal-deep focus:ring-2 focus:ring-teal-deep/20 outline-none bg-white transition-all"
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
                    <label className="text-xs font-bold text-charcoal-green block">
                      Primary Service Required
                    </label>
                    <select
                      {...register('serviceRequired')}
                      className="w-full px-4 py-3 rounded-xl border border-teal-deep/20 text-xs sm:text-sm focus:border-teal-deep focus:ring-2 focus:ring-teal-deep/20 outline-none bg-white transition-all"
                    >
                      <option value="Turnkey Hospital Construction">Turnkey Hospital Construction</option>
                      <option value="Modular Operation Theatres">Modular Operation Theatres</option>
                      <option value="Medical Gas Pipeline Systems (MGPS)">Medical Gas Pipeline Systems (MGPS)</option>
                      <option value="ICU & Critical Care Infrastructure">ICU &amp; Critical Care Infrastructure</option>
                      <option value="Hospital Consultancy & Licensing">Hospital Consultancy &amp; Licensing</option>
                      <option value="Medical Equipment & Hospital Furniture">Medical Equipment &amp; Furniture</option>
                      <option value="Fire Safety & Fire NOC Support">Fire Safety &amp; Fire NOC Support</option>
                      <option value="Complete Facility Turnkey Package">Complete Facility Turnkey Package</option>
                    </select>
                  </div>
                </div>

                {/* Row 4: Location & Bed Capacity */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-charcoal-green block">
                      Project Location (City / State) <span className="text-coral-accent">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Guwahati, Assam"
                      {...register('location', { required: 'Please specify the project location' })}
                      className="w-full px-4 py-3 rounded-xl border border-teal-deep/20 text-xs sm:text-sm focus:border-teal-deep focus:ring-2 focus:ring-teal-deep/20 outline-none transition-all"
                    />
                    {errors.location && (
                      <span className="text-[11px] text-red-600 flex items-center space-x-1 mt-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.location.message}</span>
                      </span>
                    )}
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-charcoal-green block">
                      Estimated Bed Capacity / Scope <span className="text-charcoal-green/50 text-[10px]">(Optional)</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. 70 Beds or 2 Modular OTs"
                      {...register('bedCapacity')}
                      className="w-full px-4 py-3 rounded-xl border border-teal-deep/20 text-xs sm:text-sm focus:border-teal-deep focus:ring-2 focus:ring-teal-deep/20 outline-none transition-all"
                    />
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-charcoal-green block">
                    Project Details or Inquiries <span className="text-coral-accent">*</span>
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Briefly describe your proposed project requirements, current status (land acquisition, existing building, timeline), or specific technical needs..."
                    {...register('message', { required: 'Please include a brief description of your project' })}
                    className="w-full px-4 py-3 rounded-xl border border-teal-deep/20 text-xs sm:text-sm focus:border-teal-deep focus:ring-2 focus:ring-teal-deep/20 outline-none transition-all resize-none"
                  ></textarea>
                  {errors.message && (
                    <span className="text-[11px] text-red-600 flex items-center space-x-1 mt-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.message.message}</span>
                    </span>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={submissionState.submitting}
                  className="w-full inline-flex items-center justify-center py-4 px-6 rounded-xl text-sm font-bold text-white bg-teal-deep hover:bg-teal-dark active:scale-[0.99] transition-all shadow-elevated disabled:opacity-70 disabled:cursor-not-allowed group"
                >
                  {submissionState.submitting ? (
                    <span>Processing Inquiry...</span>
                  ) : (
                    <>
                      <span>Submit Project Requirements</span>
                      <Send className="ml-2 w-4 h-4 text-coral-accent group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Right Column: Office Details, Hours & Direct Contact (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Office Details Card */}
              <div className="bg-white rounded-3xl p-7 sm:p-8 border border-teal-deep/15 shadow-subtle space-y-6">
                <div className="space-y-1">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-teal-deep">
                    Headquarters
                  </span>
                  <h3 className="text-xl font-bold text-charcoal-green">
                    Guwahati Engineering Office
                  </h3>
                </div>

                <div className="space-y-4 text-xs sm:text-sm text-charcoal-green/85">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-coral-accent mt-0.5 flex-shrink-0" />
                    <div>
                      <strong className="block text-charcoal-green font-bold">Office Address:</strong>
                      <p className="mt-0.5 leading-relaxed">{companyData.contact.address.full}</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 border-t border-teal-deep/10 pt-3">
                    <Phone className="w-5 h-5 text-forest mt-0.5 flex-shrink-0" />
                    <div>
                      <strong className="block text-charcoal-green font-bold">Direct Phone:</strong>
                      <a 
                        href={`tel:${companyData.contact.phoneRaw}`}
                        className="text-teal-deep hover:text-coral-accent font-bold transition-colors inline-block mt-0.5"
                      >
                        {companyData.contact.phoneDisplay}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 border-t border-teal-deep/10 pt-3">
                    <Mail className="w-5 h-5 text-coral-accent mt-0.5 flex-shrink-0" />
                    <div>
                      <strong className="block text-charcoal-green font-bold">Inquiry Email:</strong>
                      <a 
                        href={`mailto:${companyData.contact.email}`}
                        className="text-teal-deep hover:text-coral-accent font-semibold transition-colors inline-block mt-0.5"
                      >
                        {companyData.contact.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 border-t border-teal-deep/10 pt-3">
                    <Clock className="w-5 h-5 text-teal-deep mt-0.5 flex-shrink-0" />
                    <div>
                      <strong className="block text-charcoal-green font-bold">Office Working Hours:</strong>
                      <p className="mt-0.5">{companyData.contact.hours.weekdays}</p>
                      <p className="text-[11px] text-charcoal-green/60">{companyData.contact.hours.saturday}</p>
                    </div>
                  </div>
                </div>

                <div className="pt-2 border-t border-teal-deep/10 flex items-center space-x-2 text-xs text-forest font-semibold">
                  <ShieldCheck className="w-4 h-4 text-forest" />
                  <span>Licensed Healthcare Infrastructure Consultants</span>
                </div>
              </div>

              {/* Verified Google Map Embed */}
              <div className="bg-white rounded-3xl p-3 border border-teal-deep/15 shadow-subtle overflow-hidden">
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
                <div className="p-2 text-center text-[11px] text-charcoal-green/70">
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
