/**
 * SITEMAP GENERATOR
 * Creates XML sitemaps for all 672 programmatic routes
 * Essential for authority distribution and crawlability
 */

import { SERVICES, LOCATIONS } from './constants';

/**
 * Generate complete sitemap entries for all routes
 */
export function generateSitemapEntries() {
  const baseUrl = 'https://eventaraevents.com';
  const now = new Date().toISOString().split('T')[0]; // Today's date

  const entries: Array<{
    url: string;
    lastmod: string;
    priority: number;
    changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  }> = [];

  // 1. Homepage (highest priority)
  entries.push({
    url: baseUrl,
    lastmod: now,
    priority: 1.0,
    changefreq: 'weekly',
  });

  // 2. Main pages (high priority)
  const mainPages = [
    { url: '/services', priority: 0.9, changefreq: 'weekly' as const },
    { url: '/about', priority: 0.8, changefreq: 'monthly' as const },
    { url: '/blog', priority: 0.85, changefreq: 'weekly' as const },
    { url: '/contact', priority: 0.8, changefreq: 'monthly' as const },
    { url: '/gallery', priority: 0.75, changefreq: 'monthly' as const },
    { url: '/venues', priority: 0.8, changefreq: 'weekly' as const },
  ];

  mainPages.forEach((page) => {
    entries.push({
      url: baseUrl + page.url,
      lastmod: now,
      priority: page.priority,
      changefreq: page.changefreq,
    });
  });

  // 3. Service-Location combinations (medium priority)
  // 672 programmatic pages
  SERVICES.forEach((service) => {
    LOCATIONS.forEach((location) => {
      entries.push({
        url: `${baseUrl}/${service.slug}-${location.slug}`,
        lastmod: now,
        priority: 0.7,
        changefreq: 'monthly' as const,
      });
    });
  });

  // 4. Blog post pages (medium priority)
  // 30 blog pages
  const blogPostPriorities = [
    { priority: 0.8, posts: 5 }, // Top 5 posts
    { priority: 0.7, posts: 10 }, // Next 10
    { priority: 0.6, posts: 15 }, // Remaining
  ];

  let postIndex = 0;
  blogPostPriorities.forEach(({ priority, posts }) => {
    for (let i = 0; i < posts && postIndex < 30; i++) {
      entries.push({
        url: `${baseUrl}/blog/post-${postIndex + 1}`,
        lastmod: now,
        priority,
        changefreq: 'monthly' as const,
      });
      postIndex++;
    }
  });

  return entries;
}

/**
 * Generate XML sitemap string
 */
export function generateXMLSitemap(): string {
  const entries = generateSitemapEntries();

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0">
${entries
  .map(
    (entry) => `  <url>
    <loc>${entry.url}</loc>
    <lastmod>${entry.lastmod}</lastmod>
    <changefreq>${entry.changefreq}</changefreq>
    <priority>${entry.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  return xml;
}

/**
 * Generate sitemap index for large sites (50,000+ URLs)
 * Since we have 700+ URLs, we can use a single sitemap
 * But structure is ready for scaling
 */
export function generateSitemapIndex(): string {
  const baseUrl = 'https://eventaraevents.com';
  const now = new Date().toISOString().split('T')[0];

  const sitemaps = [
    { url: '/sitemap-main.xml', lastmod: now }, // Homepage + main pages
    { url: '/sitemap-services.xml', lastmod: now }, // All 672 service pages
    { url: '/sitemap-blog.xml', lastmod: now }, // All 30 blog posts
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemaps
  .map(
    (sitemap) => `  <sitemap>
    <loc>${baseUrl}${sitemap.url}</loc>
    <lastmod>${sitemap.lastmod}</lastmod>
  </sitemap>`
  )
  .join('\n')}
</sitemapindex>`;

  return xml;
}

/**
 * Generate sitemap for services only
 */
export function generateServicesSitemap(): string {
  const baseUrl = 'https://eventaraevents.com';
  const now = new Date().toISOString().split('T')[0];

  const entries = SERVICES.map((service) =>
    LOCATIONS.map(
      (location) =>
        `  <url>
    <loc>${baseUrl}/${service.slug}-${location.slug}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`
    )
  ).flat();

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries.join('\n')}
</urlset>`;

  return xml;
}

/**
 * Generate RSS feed for blog
 * Helps with indexing and content discovery
 */
export function generateBlogRSS(): string {
  const baseUrl = 'https://eventaraevents.com';
  const now = new Date().toISOString();

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>Eventara | Event Planning Blog</title>
    <link>${baseUrl}/blog</link>
    <description>Professional event planning tips and guides</description>
    <language>en-in</language>
    <lastBuildDate>${now}</lastBuildDate>
    <item>
      <title>Complete Wedding Planning Checklist for Siliguri</title>
      <link>${baseUrl}/blog/wedding-planning-checklist</link>
      <description>Comprehensive guide to planning your dream wedding</description>
      <pubDate>${now}</pubDate>
      <category>Wedding Planning</category>
    </item>
    <!-- More items would be generated from blog database -->
  </channel>
</rss>`;

  return rss;
}

/**
 * Export utilities for Next.js routes
 */
export const SitemapUtils = {
  generateXMLSitemap,
  generateSitemapIndex,
  generateServicesSitemap,
  generateBlogRSS,
  generateSitemapEntries,
};

export default SitemapUtils;
