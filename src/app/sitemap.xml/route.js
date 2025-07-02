const BASE = 'https://gym-app-prod.vercel.app';

export async function GET() {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url><loc>${BASE}/</loc></url>
    <url><loc>${BASE}/book</loc></url>
  </urlset>`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml' },
  });
}
