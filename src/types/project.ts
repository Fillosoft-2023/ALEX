export interface ProjectHighlight {
  label: string;
  value: string;
}

export interface ProjectGalleryItem {
  src: string;
  title: string;
  caption: string;
}

export interface ProjectTestimonial {
  quote: string;
  author: string;
  role: string;
  facility: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  location: string;
  client: string;
  date: string;
  category: string;
  categoryKey: string;
  capacity: string;
  image: string;
  gallery: ProjectGalleryItem[];
  summary: string;
  description: string;
  scopeList: string[];
  highlights: ProjectHighlight[];
  videoEmbed?: string | null;
  testimonial?: ProjectTestimonial | null;
}

export type ProjectCategory =
  | 'All Projects'
  | 'Turnkey Construction'
  | 'Gas Systems & MGPS'
  | 'ICU & Critical Care'
  | 'Modular OT';
