/**
 * Blog Article Detail Page
 * Displays full article with internal links and related articles
 */

import { Metadata } from 'next';
import Link from 'next/link';
import { BLOG_ARTICLES } from '@/lib/blog-articles';
import { Breadcrumb } from '@/components/sections/Breadcrumb';

interface BlogArticlePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({
  params,
}: BlogArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = BLOG_ARTICLES.find((a) => a.slug === slug);

  if (!article) {
    return {
      title: 'Article Not Found | Eventara Blog',
    };
  }

  return {
    title: `${article.title} | Eventara Blog`,
    description: article.excerpt,
    keywords: article.keywords,
    alternates: {
      canonical: `https://eventara.com/blog/${slug}`,
    },
  };
}

export async function generateStaticParams() {
  return BLOG_ARTICLES.map((article) => ({
    slug: article.slug,
  }));
}

export default async function BlogArticlePage({ params }: BlogArticlePageProps) {
  const { slug } = await params;
  const article = BLOG_ARTICLES.find((a) => a.slug === slug);

  if (!article) {
    return (
      <div className="min-h-screen bg-rich-black flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-400 mb-4">Article Not Found</h1>
          <Link href="/blog" className="text-event-gold hover:text-light-gold">
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  const relatedArticles = BLOG_ARTICLES.filter(
    (a) => a.category === article.category && a.id !== article.id
  ).slice(0, 3);

  return (
    <>
      <div className="min-h-screen bg-rich-black">
        <div className="max-w-4xl mx-auto px-4 md:px-8 py-12">
          {/* Breadcrumb */}
          <div className="mb-8">
            <Link href="/blog" className="text-event-gold hover:text-light-gold text-sm">
              ← Back to Blog
            </Link>
          </div>

          {/* Article Header */}
          <header className="mb-12">
            <div className="flex items-center gap-4 mb-4">
              <span className="inline-block px-3 py-1 bg-event-gold/20 text-event-gold text-xs font-semibold rounded">
                {article.category}
              </span>
              <time className="text-gray-400 text-sm">{article.date}</time>
              <span className="text-gray-400 text-sm">{article.readTime} min read</span>
            </div>
            <h1 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-6">
              {article.title}
            </h1>
            <p className="font-inter text-gray-300 text-lg leading-relaxed">
              {article.excerpt}
            </p>
          </header>

          {/* Article Content */}
          <article className="prose prose-invert max-w-none mb-12">
            <div className="font-inter text-gray-300 leading-relaxed space-y-6">
              <p>
                {article.excerpt}
              </p>
              <p>
                This comprehensive guide covers everything you need to know about this topic. 
                Whether you're a first-time event planner or a seasoned professional, 
                this article provides actionable insights and expert recommendations.
              </p>
              <h2 className="text-2xl font-bold text-event-gold mt-8 mb-4">Key Takeaways</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>Professional planning saves 30-40% on costs</li>
                <li>Venue selection impacts your entire event experience</li>
                <li>Budget allocation should prioritize guest experience</li>
                <li>Timeline management is crucial for success</li>
                <li>Vendor coordination requires clear communication</li>
              </ul>
            </div>
          </article>

          {/* Internal Links Section */}
          {article.internalLinks.length > 0 && (
            <div className="bg-gradient-to-r from-event-gold/10 to-light-gold/10 border border-event-gold/20 rounded-lg p-8 mb-12">
              <h3 className="font-playfair text-xl font-bold text-event-gold mb-4">
                Related Services
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {article.internalLinks.map((link, idx) => (
                  <Link
                    key={idx}
                    href={link.href}
                    className="group flex items-start gap-3 p-3 bg-rich-black/50 hover:bg-rich-black border border-event-gold/20 hover:border-event-gold/60 rounded transition-all"
                  >
                    <span className="text-event-gold mt-1">→</span>
                    <div>
                      <span className="text-event-gold group-hover:text-light-gold transition-colors">
                        {link.text}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Author Info */}
          <div className="bg-gradient-to-r from-event-gold/5 to-light-gold/5 border border-event-gold/10 rounded-lg p-8 mb-12">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-gradient-to-br from-event-gold to-light-gold rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold text-rich-black">E</span>
              </div>
              <div>
                <h4 className="font-playfair text-lg font-bold text-white">Eventara Team</h4>
                <p className="text-gray-400 text-sm">
                  Luxury event management experts with 15+ years of experience planning 
                  unforgettable events across the Darjeeling Corridor.
                </p>
              </div>
            </div>
          </div>

          {/* Related Articles */}
          {relatedArticles.length > 0 && (
            <section className="mb-12">
              <h3 className="font-playfair text-2xl font-bold text-event-gold mb-6 border-l-4 border-event-gold pl-4">
                Related Articles
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                {relatedArticles.map((relatedArticle) => (
                  <Link
                    key={relatedArticle.id}
                    href={`/blog/${relatedArticle.slug}`}
                    className="group card-luxury p-6 hover:border-event-gold/60 transition-all"
                  >
                    <div className="mb-3">
                      <span className="text-xs font-semibold text-event-gold">
                        {relatedArticle.category}
                      </span>
                    </div>
                    <h4 className="font-playfair text-lg font-bold text-white group-hover:text-event-gold transition-colors mb-2">
                      {relatedArticle.title}
                    </h4>
                    <p className="text-gray-400 text-sm mb-3 line-clamp-2">
                      {relatedArticle.excerpt}
                    </p>
                    <div className="text-xs text-gray-500">{relatedArticle.readTime} min</div>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* CTA Section */}
          <div className="text-center py-12 border-t border-event-gold/10 mt-12">
            <h3 className="font-playfair text-2xl font-bold text-event-gold mb-4">
              Ready to Plan Your Event?
            </h3>
            <p className="text-gray-400 mb-6">
              Contact our luxury event management team to bring your vision to life.
            </p>
            <a
              href="https://wa.me/919332345023?text=Hi%20Eventara,%20I%20would%20like%20to%20discuss%20my%20event%20planning%20needs."
              className="inline-block px-8 py-3 bg-event-gold text-rich-black font-semibold rounded hover:bg-light-gold transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Chat with Our Team
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
