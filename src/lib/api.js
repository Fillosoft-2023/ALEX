import { projectsData } from '@/data/projectsData';
import { galleryItems } from '@/data/galleryData';
import { companyData } from '@/data/companyData';

const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:8000/api/v1';
const SITE_KEY = 'alex_healthcare';

export async function getProjects() {
  try {
    const res = await fetch(`${API_BASE}/sites/${SITE_KEY}/projects`, {
      next: { revalidate: 60 },
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const json = await res.json();
    if (json?.data && Array.isArray(json.data) && json.data.length > 0) {
      // Map API fields if needed to align with components
      return json.data.map(p => ({
        ...p,
        categoryKey: p.category_key || p.categoryKey,
        scopeList: p.scope_list || p.scopeList || [],
        highlights: p.key_specs || p.highlights || [],
        keySpecs: p.key_specs || p.keySpecs || [],
        gallery: p.gallery || [],
      }));
    }
    return projectsData;
  } catch (err) {
    console.warn('API error fetching projects, falling back to static data:', err.message);
    return projectsData;
  }
}

export async function getProjectBySlug(slug) {
  try {
    const projects = await getProjects();
    const found = projects.find(p => p.slug === slug || String(p.id) === String(slug));
    if (found) return found;
  } catch (err) {
    console.warn('Error finding project:', err.message);
  }
  return projectsData.find(p => p.slug === slug || String(p.id) === String(slug)) || null;
}

export async function getGalleryItems() {
  try {
    const res = await fetch(`${API_BASE}/sites/${SITE_KEY}/gallery`, {
      next: { revalidate: 60 },
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const json = await res.json();
    if (json?.data && Array.isArray(json.data) && json.data.length > 0) {
      return json.data.map(item => ({
        ...item,
        categoryKey: item.category_key || item.categoryKey,
      }));
    }
    return galleryItems;
  } catch (err) {
    console.warn('API error fetching gallery, falling back to static data:', err.message);
    return galleryItems;
  }
}

export async function getPosts() {
  try {
    const res = await fetch(`${API_BASE}/sites/${SITE_KEY}/posts`, {
      next: { revalidate: 60 },
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const json = await res.json();
    return json?.data || [];
  } catch (err) {
    console.warn('API error fetching posts:', err.message);
    return [];
  }
}

export async function getPostBySlug(slug) {
  try {
    const res = await fetch(`${API_BASE}/sites/${SITE_KEY}/posts/${slug}`, {
      next: { revalidate: 60 },
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const json = await res.json();
    return json?.data || null;
  } catch (err) {
    console.warn('API error fetching post by slug:', err.message);
    return null;
  }
}

export async function getCompanySettings() {
  try {
    const res = await fetch(`${API_BASE}/sites/${SITE_KEY}/settings`, {
      next: { revalidate: 300 },
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const json = await res.json();
    if (json?.data && Object.keys(json.data).length > 0) {
      return {
        ...companyData,
        ...json.data,
      };
    }
    return companyData;
  } catch (err) {
    return companyData;
  }
}

