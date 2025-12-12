/**
 * Sitemap Route
 * Serves XML sitemap for Google and other crawlers
 */

import { generateXMLSitemap } from '@/lib/sitemapGenerator';

export async function GET() {
  const xml = generateXMLSitemap();

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600', // Cache for 1 hour
    },
  });
}
