// Client/server-safe helpers for media served by the admin panel.
const rawEnv = process.env.NEXT_PUBLIC_API_URL;
const isProd = process.env.NODE_ENV === 'production';
const API_BASE = rawEnv || (isProd ? 'https://erp.alexhealthcaresystems.com/api/v1' : 'http://localhost:8000/api/v1');
export const API_ORIGIN = API_BASE.replace(/\/api\/v\d+\/?$/, '');

/**
 * Turn admin-uploaded relative paths (/storage/...) into absolute URLs served by
 * the admin panel. Absolute URLs and local /public assets are returned untouched.
 */
export function mediaUrl(path) {
  if (!path || typeof path !== 'string') return path;
  const trimmed = path.trim();
  if (!trimmed) return trimmed;
  if (trimmed.startsWith('blob:') || trimmed.startsWith('data:')) return trimmed;

  if (trimmed.startsWith('http://') || trimmed.startsWith('https://')) {
    if ((trimmed.includes('://127.0.0.1:8000') || trimmed.includes('://localhost:8000')) && !API_ORIGIN.includes('localhost') && !API_ORIGIN.includes('127.0.0.1')) {
      return trimmed.replace(/^https?:\/\/(127\.0\.0\.1|localhost):8000/, API_ORIGIN);
    }
    return trimmed;
  }

  if (trimmed.startsWith('/storage/')) return `${API_ORIGIN}${trimmed}`;
  if (trimmed.startsWith('storage/')) return `${API_ORIGIN}/${trimmed}`;
  if (/^(cms_media|showcase_projects|blog_posts|gallery|sites|project_documents)\//i.test(trimmed)) {
    return `${API_ORIGIN}/storage/${trimmed}`;
  }
  if (/^\/(cms_media|showcase_projects|blog_posts|gallery|sites|project_documents)\//i.test(trimmed)) {
    return `${API_ORIGIN}/storage${trimmed}`;
  }
  return trimmed;
}

/** Recursively rewrite every /storage/... string inside API data (images, galleries, section content). */
export function resolveMedia(value) {
  if (typeof value === 'string') return mediaUrl(value);
  if (Array.isArray(value)) return value.map(resolveMedia);
  if (value && typeof value === 'object') {
    return Object.fromEntries(Object.entries(value).map(([k, v]) => [k, resolveMedia(v)]));
  }
  return value;
}
