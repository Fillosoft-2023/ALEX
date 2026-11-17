// Client-safe: submits website enquiries to the admin panel (shown under "Booked Leads").
const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api/v1';
const SITE_KEY = 'alex_healthcare';

export async function submitLead(payload) {
  const res = await fetch(`${API_BASE}/sites/${SITE_KEY}/leads`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify(payload),
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json();
}
