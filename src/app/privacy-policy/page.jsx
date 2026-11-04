import Link from 'next/link';
import { ArrowLeft, ShieldCheck } from 'lucide-react';
import { companyData } from '@/data/companyData';

export const metadata = {
  title: 'Privacy Policy | Alex Healthcare System',
  description: 'Privacy policy and data protection standards for Alex Healthcare System.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="w-full bg-ivory py-16 sm:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 anim-view">
        
        <Link
          href="/"
          className="inline-flex items-center space-x-1.5 text-xs font-semibold text-teal-deep hover:text-coral-accent transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Homepage</span>
        </Link>

        <div className="space-y-3 border-b border-teal-deep/15 pb-6">
          <span className="text-[11px] font-bold uppercase tracking-wider text-teal-deep bg-sage/50 px-3 py-1 rounded-full">
            Legal &amp; Compliance
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-charcoal-green tracking-tight">
            Privacy Policy &amp; Confidentiality Agreement
          </h1>
          <p className="text-xs text-charcoal-green/70">
            Last Updated: January 2025 &bull; Alex Healthcare System
          </p>
        </div>

        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-teal-deep/15 shadow-subtle space-y-8 text-xs sm:text-sm text-charcoal-green/80 leading-relaxed">
          
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-charcoal-green">1. Introduction &amp; Commitment to Confidentiality</h2>
            <p>
              Alex Healthcare System (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;), operating from H/no. 6, Jayanagar, Sixmile, Guwahati, Assam 781022, respects the intellectual and operational privacy of our clients, healthcare facility founders, partners, and website visitors.
            </p>
            <p>
              Hospital architectural layouts, medical gas pipeline specifications, facility capacities, and clinical equipment requirements shared with us are treated with strict professional confidentiality.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-charcoal-green">2. Information We Collect</h2>
            <p>
              When you submit a project estimate request, request a technical consultation, or communicate with our engineering desk, we collect:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-charcoal-green/75">
              <li>Contact details: Name, professional designation, hospital or clinic name, phone number, and email address.</li>
              <li>Project details: Geographic location, proposed facility type, bed capacity, engineering disciplines needed, and timeline considerations.</li>
              <li>Technical documents: Preliminary architectural plans, floor layouts, or equipment bills of quantities (BOQ) voluntarily submitted for assessment.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-charcoal-green">3. How We Use Project Information</h2>
            <p>
              All technical and contact data collected is utilized solely to:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-charcoal-green/75">
              <li>Formulate engineering feasibility reports, cost estimates, and project timelines.</li>
              <li>Communicate directly regarding your hospital construction or infrastructure inquiry.</li>
              <li>Comply with statutory building codes and regulatory documentation requirements where contractual projects are established.</li>
            </ul>
            <p>
              We do NOT sell, rent, or trade your personal or facility data to third-party commercial marketing firms under any circumstance.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-charcoal-green">4. Protection of Architectural &amp; Engineering Data</h2>
            <p>
              Hospital designs and medical utility drawings are sensitive commercial assets. Our digital archives and project management systems adhere to industry-standard data safeguards preventing unauthorized access, loss, or leakage.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-charcoal-green">5. Contact Our Privacy Officer</h2>
            <p>
              For any questions regarding this Privacy Policy or your data, you may reach our compliance desk at:
            </p>
            <div className="bg-ivory p-4 rounded-xl border border-teal-deep/10 text-xs text-charcoal-green space-y-1">
              <div><strong>Alex Healthcare System</strong></div>
              <div>H/no. 6, Jayanagar, Sixmile, Guwahati, Assam 781022</div>
              <div>Phone: +91 7002394679 | Email: alexhealthcare10@gmail.com</div>
            </div>
          </section>

        </div>

      </div>
    </div>
  );
}
