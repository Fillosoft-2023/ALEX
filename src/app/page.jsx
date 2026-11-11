import dynamic from 'next/dynamic';
import Hero from '@/components/home/Hero';
import TrustStrip from '@/components/home/TrustStrip';
import ServicesOverview from '@/components/home/ServicesOverview';
import FeaturedProjects from '@/components/home/FeaturedProjects';
import { getProjects } from '@/lib/api';

// Defer below-the-fold components to reduce initial JS execution and improve FCP/LCP
const WhyAlexHealthcare = dynamic(() => import('@/components/home/WhyAlexHealthcare'));
const ProcessTimeline = dynamic(() => import('@/components/home/ProcessTimeline'));
const HomeGallerySection = dynamic(() => import('@/components/home/HomeGallerySection'));
const TestimonialsSection = dynamic(() => import('@/components/home/TestimonialsSection'));
const HomeCTA = dynamic(() => import('@/components/home/HomeCTA'));
const FaqAccordion = dynamic(() => import('@/components/home/FaqAccordion'));

export const metadata = {
  title: 'Alex Healthcare System | Hospital Construction & Healthcare Infrastructure',
  description: 'Building the infrastructure behind better healthcare. Comprehensive hospital planning, civil construction, modular operating theatres, medical gas pipeline systems, and ICU setups across Northeast India.',
};

export default async function HomePage() {
  const projects = await getProjects();

  return (
    <>
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Trust & Experience Strip */}
      <TrustStrip />

      {/* 3. Services Overview Grid (6 core services) */}
      <ServicesOverview />

      {/* 4. Featured Verified Projects Portfolio */}
      <FeaturedProjects initialProjects={projects} />

      {/* 5. Why Alex Healthcare System (4 principles) */}
      <WhyAlexHealthcare />

      {/* 6. End-to-End Execution Process Timeline */}
      <ProcessTimeline />

      {/* 7. Healthcare Infrastructure & Facilities Photo Gallery */}
      <HomeGallerySection />

      {/* 8. Verified Client Testimonials */}
      <TestimonialsSection />

      {/* 9. Strong Call to Action */}
      <HomeCTA />

      {/* 10. Frequently Asked Questions */}
      <FaqAccordion />
    </>
  );
}
