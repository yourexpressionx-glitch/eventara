'use client';

import { motion } from 'framer-motion';
import { BLOG_ARTICLES } from '@/lib/blog-articles-with-content';
import { useState } from 'react';

export function BlogGrid() {
  const POSTS_PER_PAGE = 12;
  const [currentPage, setCurrentPage] = useState(1);

  const blogPosts = BLOG_ARTICLES.map(article => ({
    slug: article.slug,
    title: article.title,
    excerpt: article.excerpt,
    date: new Date(article.date).toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    }),
    category: article.category,
    readTime: `${article.readTime} min read`,
  }));

  // Calculate pagination
  const totalPages = Math.ceil(blogPosts.length / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const endIndex = startIndex + POSTS_PER_PAGE;
  const displayedPosts = blogPosts.slice(startIndex, endIndex);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-rich-black px-3 sm:px-4 md:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Blog Posts Grid */}
        <motion.div
          className="grid gap-8 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {displayedPosts.map((post, idx) => (
            <motion.a
              key={idx}
              href={`/blog/${post.slug}`}
              variants={itemVariants}
              whileHover={{ translateX: 8 }}
              className="card-luxury p-8 hover:border-event-gold/60 transition-colors cursor-pointer group block"
            >
              <div className="flex items-start justify-between mb-4">
                <span className="inline-block px-3 py-1 bg-event-gold/20 text-event-gold text-xs font-semibold rounded">
                  {post.category}
                </span>
                <span className="font-inter text-xs text-cream-light/50">{post.readTime}</span>
              </div>

              <h3 className="font-playfair text-2xl font-bold text-white mb-3 group-hover:text-event-gold transition-colors">
                {post.title}
              </h3>

              <p className="font-inter text-cream-light/70 mb-4">{post.excerpt}</p>

              <div className="flex items-center justify-between">
                <span className="font-inter text-sm text-cream-light/50">{post.date}</span>
                <span className="text-light-gold group-hover:translate-x-2 transition-transform">
                  Read More →
                </span>
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <motion.div
            className="flex items-center justify-center gap-2 mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {/* Previous Button */}
            <button
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 bg-event-gold/10 border border-event-gold/30 text-event-gold rounded hover:bg-event-gold/20 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              ← Previous
            </button>

            {/* Page Numbers */}
            <div className="flex gap-1">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                <button
                  key={pageNum}
                  onClick={() => setCurrentPage(pageNum)}
                  className={`px-3 py-2 rounded font-inter text-sm transition-colors ${
                    pageNum === currentPage
                      ? 'bg-event-gold text-rich-black font-bold'
                      : 'bg-event-gold/10 border border-event-gold/30 text-event-gold hover:bg-event-gold/20'
                  }`}
                >
                  {pageNum}
                </button>
              ))}
            </div>

            {/* Next Button */}
            <button
              onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
              className="px-4 py-2 bg-event-gold/10 border border-event-gold/30 text-event-gold rounded hover:bg-event-gold/20 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              Next →
            </button>
          </motion.div>
        )}

        {/* Pagination Info */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <p className="font-inter text-cream-light/70 text-sm">
            Showing {startIndex + 1} - {Math.min(endIndex, blogPosts.length)} of {blogPosts.length} articles
            {totalPages > 1 && ` (Page ${currentPage} of ${totalPages})`}
          </p>
        </motion.div>

        {/* Subscribe CTA */}
        <motion.div
          className="card-luxury p-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <h3 className="font-playfair text-2xl font-bold text-event-gold mb-2">
            Subscribe to Our Blog
          </h3>
          <p className="font-inter text-cream-light/70 mb-6">
            Get event planning tips and insights delivered to your inbox
          </p>
          <div className="flex gap-2 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 bg-rich-black border border-event-gold/30 rounded px-4 py-2 font-inter text-cream-light focus:outline-none focus:border-event-gold"
            />
            <button className="px-6 py-2 bg-event-gold text-rich-black font-semibold rounded hover:bg-light-gold transition-colors">
              Subscribe
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
