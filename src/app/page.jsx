import Hero from '@/components/home/Hero';
import TrustStrip from '@/components/home/TrustStrip';
import ServicesOverview from '@/components/home/ServicesOverview';
import FeaturedProjects from '@/components/home/FeaturedProjects';
import WhyAlexHealthcare from '@/components/home/WhyAlexHealthcare';
import HomeGallerySection from '@/components/home/HomeGallerySection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import HomeCTA from '@/components/home/HomeCTA';
import FaqAccordion from '@/components/home/FaqAccordion';

export const metadata = {
  title: 'Alex Healthcare System | Hospital Construction & Healthcare Infrastructure',
  description: 'Building the infrastructure behind better healthcare. Turnkey hospital planning, civil construction, modular operating theatres, medical gas pipeline systems, and ICU setups across Northeast India.',
};

export default function HomePage() {
  return (
    <>
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Trust & Experience Strip */}
      <TrustStrip />

      {/* 3. Services Overview Grid (6 core services) */}
      <ServicesOverview />

      {/* 4. Featured Verified Projects Portfolio */}
      <FeaturedProjects />

      {/* 6. Why Alex Healthcare System (4 principles) */}
      <WhyAlexHealthcare />

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
