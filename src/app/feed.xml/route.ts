/**
 * RSS Feed Route
 * Blog RSS feed for syndication and discovery
 */

import { generateBlogRSS } from '@/lib/sitemapGenerator';

export async function GET() {
  const rss = generateBlogRSS();

  return new Response(rss, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
