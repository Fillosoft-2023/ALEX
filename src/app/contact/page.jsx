import { getPageData } from '@/lib/api';
import ContactClient from './ContactClient';

export const metadata = {
  title: 'Contact & Appointments | Alex Healthcare System',
  description: 'Schedule a project consultation or request an on-site feasibility evaluation for hospital construction, modular operating theatres, and medical gas pipeline systems across Northeast India.',
};

export default async function ContactPage() {
  const pageData = await getPageData('contact');
  const sections = pageData?.sections || [];
  const contactSection = sections.find(
    (s) =>
      s.type?.toLowerCase() === 'alexcontacthero' ||
      s.name?.toLowerCase().includes('consultation') ||
      s.name?.toLowerCase().includes('contact')
  )?.content;

  return <ContactClient content={contactSection} />;
}
