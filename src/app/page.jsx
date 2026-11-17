import dynamic from 'next/dynamic';
import Hero from '@/components/home/Hero';
import TrustStrip from '@/components/home/TrustStrip';
import ServicesOverview from '@/components/home/ServicesOverview';
import FeaturedProjects from '@/components/home/FeaturedProjects';
import { getProjects, getPageData } from '@/lib/api';

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
  const [projects, pageData] = await Promise.all([
    getProjects(),
    getPageData('home')
  ]);

  const sections = pageData?.sections || [];

  // Helper function to check if a section exists in the API response
  const getSection = (compType) => {
    return sections.find(
      (s) => s.type?.toLowerCase() === compType.toLowerCase() || s.name?.toLowerCase().includes(compType.toLowerCase())
    );
  };

  const isSectionVisible = (compType) => {
    if (!pageData) return true; // fallback to showing if API unreachable
    return Boolean(getSection(compType));
  };

  const getSectionContent = (compType) => {
    return getSection(compType)?.content || undefined;
  };

  return (
    <>
      {/* 1. Hero Section */}
      {isSectionVisible('Hero') && (
        <Hero content={getSectionContent('Hero')} />
      )}

      {/* 2. Trust & Experience Strip */}
      {isSectionVisible('TrustStrip') && (
        <TrustStrip content={getSectionContent('TrustStrip')} />
      )}

      {/* 3. Services Overview Grid (6 core services) */}
      {isSectionVisible('ServicesOverview') && (
        <ServicesOverview content={getSectionContent('ServicesOverview')} />
      )}

      {/* 4. Featured Verified Projects Portfolio */}
      {isSectionVisible('FeaturedProjects') && (
        <FeaturedProjects initialProjects={projects} content={getSectionContent('FeaturedProjects')} />
      )}

      {/* 5. Why Alex Healthcare System (4 principles) */}
      {isSectionVisible('WhyAlexHealthcare') && (
        <WhyAlexHealthcare content={getSectionContent('WhyAlexHealthcare')} />
      )}

      {/* 6. End-to-End Execution Process Timeline */}
      {isSectionVisible('ProcessTimeline') && (
        <ProcessTimeline content={getSectionContent('ProcessTimeline')} />
      )}

      {/* 7. Healthcare Infrastructure & Facilities Photo Gallery */}
      {isSectionVisible('HomeGallerySection') && (
        <HomeGallerySection content={getSectionContent('HomeGallerySection')} />
      )}

      {/* 8. Verified Client Testimonials */}
      {isSectionVisible('TestimonialsSection') && (
        <TestimonialsSection content={getSectionContent('TestimonialsSection')} />
      )}

      {/* 9. Strong Call to Action */}
      {isSectionVisible('HomeCTA') && (
        <HomeCTA content={getSectionContent('HomeCTA')} />
      )}

      {/* 10. Frequently Asked Questions */}
      {isSectionVisible('FaqAccordion') && (
        <FaqAccordion content={getSectionContent('FaqAccordion')} />
      )}
    </>
  );
}
