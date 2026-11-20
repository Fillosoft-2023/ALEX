import { projectsData } from '@/data/projectsData';
import { galleryItems } from '@/data/galleryData';
import { companyData } from '@/data/companyData';
import { mediaUrl, resolveMedia } from '@/lib/media';

export { mediaUrl, resolveMedia };

const rawEnvUrl = process.env.NEXT_PUBLIC_API_URL;
const isProd = process.env.NODE_ENV === 'production';

const API_BASE = (isProd && (!rawEnvUrl || rawEnvUrl.includes('localhost') || rawEnvUrl.includes('127.0.0.1')))
  ? 'https://erp.alexhealthcaresystems.com/api/v1'
  : (rawEnvUrl || 'https://erp.alexhealthcaresystems.com/api/v1');
const SITE_KEY = 'alex_healthcare';

function normalizeProjectCategoryKey(key, category) {
  const k = String(key || '').toLowerCase().trim();
  const c = String(category || '').toLowerCase().trim();
  if (k.includes('turnkey') || c.includes('turnkey')) return 'turnkey';
  if (k.includes('mgps') || k.includes('gas') || c.includes('gas') || c.includes('mgps')) return 'mgps';
  if (k === 'ot' || k.includes('modular') || c.includes('modular') || c.includes('ot')) return 'ot';
  if (k.includes('icu') || k.includes('critical') || c.includes('icu') || c.includes('critical')) return 'icu';
  return k || 'other';
}

function normalizeYouTubeEmbed(url) {
  if (!url || typeof url !== 'string') return null;
  const trimmed = url.trim();
  if (!trimmed) return null;

  const srcMatch = trimmed.match(/src=["']([^"']+)["']/i);
  const target = srcMatch ? srcMatch[1] : trimmed;

  if (target.includes('youtube.com/embed/') || target.includes('youtube-nocookie.com/embed/')) {
    return target;
  }

  const shortMatch = target.match(/youtu\.be\/([a-zA-Z0-9_-]{11})/i);
  if (shortMatch) {
    return `https://www.youtube.com/embed/${shortMatch[1]}`;
  }

  const watchMatch = target.match(/[?&]v=([a-zA-Z0-9_-]{11})/i);
  if (watchMatch) {
    return `https://www.youtube.com/embed/${watchMatch[1]}`;
  }

  const shortsMatch = target.match(/youtube\.com\/shorts\/([a-zA-Z0-9_-]{11})/i);
  if (shortsMatch) {
    return `https://www.youtube.com/embed/${shortsMatch[1]}`;
  }

  const liveMatch = target.match(/youtube\.com\/live\/([a-zA-Z0-9_-]{11})/i);
  if (liveMatch) {
    return `https://www.youtube.com/embed/${liveMatch[1]}`;
  }

  return target;
}

export async function getProjects() {
  try {
    const res = await fetch(`${API_BASE}/sites/${SITE_KEY}/projects`, {
      cache: 'no-store',
      next: { revalidate: 0 },
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const json = await res.json();
    if (json?.data && Array.isArray(json.data) && json.data.length > 0) {
      // Map API fields if needed to align with components
      return resolveMedia(json.data).map(p => ({
        ...p,
        categoryKey: normalizeProjectCategoryKey(p.category_key || p.categoryKey, p.category),
        scopeList: p.scope_list || p.scopeList || [],
        highlights: p.key_specs || p.highlights || [],
        keySpecs: p.key_specs || p.keySpecs || [],
        gallery: p.gallery || [],
        videoEmbed: normalizeYouTubeEmbed(p.video_embed || p.videoEmbed || null),
        testimonial: p.testimonial || null,
      }));
    }
    return projectsData;
  } catch (err) {
    console.warn('API error fetching projects, falling back to static data:', err.message);
    return projectsData;
  }
}

export async function getProjectBySlug(slug) {
  if (!slug) return null;
  const decoded = decodeURIComponent(String(slug)).trim().toLowerCase();
  try {
    const projects = await getProjects();
    const found = projects.find(p => {
      const pSlug = String(p.slug || '').trim().toLowerCase();
      const pId = String(p.id || '').trim();
      const pTitleSlug = String(p.title || '').trim().toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
      return pSlug === decoded || pId === decoded || pTitleSlug === decoded;
    });
    if (found) return found;
  } catch (err) {
    console.warn('Error finding project:', err.message);
  }
  return projectsData.find(p => {
    const pSlug = String(p.slug || '').trim().toLowerCase();
    const pId = String(p.id || '').trim();
    return pSlug === decoded || pId === decoded;
  }) || null;
}

export async function getGalleryItems() {
  try {
    const res = await fetch(`${API_BASE}/sites/${SITE_KEY}/gallery`, {
      cache: 'no-store',
      next: { revalidate: 0 },
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const json = await res.json();
    if (json?.data && Array.isArray(json.data) && json.data.length > 0) {
      return resolveMedia(json.data).map(item => ({
        ...item,
        categoryKey: item.category_key || item.categoryKey,
        projectId: item.project_slug || item.projectId || item.project_id,
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
    return resolveMedia(json?.data || []);
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
    return resolveMedia(json?.data || null);
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
        ...resolveMedia(json.data),
      };
    }
    return companyData;
  } catch (err) {
    return companyData;
  }
}

export async function getPageData(slug) {
  try {
    const res = await fetch(`${API_BASE}/sites/${SITE_KEY}/pages/${slug}`, {
      cache: 'no-store',
      next: { revalidate: 0 },
    });
    if (!res.ok) return null;
    const json = await res.json();
    return resolveMedia(json?.data || null);
  } catch (err) {
    return null;
  }
}

