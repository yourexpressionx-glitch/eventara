'use client';

import { motion } from 'framer-motion';
import { BLOG_ARTICLES } from '@/lib/blog-articles';

export function BlogGrid() {
  // Use first 6 articles from the comprehensive blog database
  const blogPosts = BLOG_ARTICLES.slice(0, 6).map(article => ({
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
    <section className="py-20 bg-rich-black px-4 md:px-8">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="grid gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {blogPosts.map((post, idx) => (
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
                <span className="font-inter text-xs text-gray-500">{post.readTime}</span>
              </div>

              <h3 className="font-playfair text-2xl font-bold text-white mb-3 group-hover:text-event-gold transition-colors">
                {post.title}
              </h3>

              <p className="font-inter text-gray-400 mb-4">{post.excerpt}</p>

              <div className="flex items-center justify-between">
                <span className="font-inter text-sm text-gray-500">{post.date}</span>
                <span className="text-light-gold group-hover:translate-x-2 transition-transform">
                  Read More →
                </span>
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* Subscribe CTA */}
        <motion.div
          className="mt-16 card-luxury p-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <h3 className="font-playfair text-2xl font-bold text-event-gold mb-2">
            Subscribe to Our Blog
          </h3>
          <p className="font-inter text-gray-400 mb-6">
            Get event planning tips and insights delivered to your inbox
          </p>
          <div className="flex gap-2 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 bg-rich-black border border-event-gold/30 rounded px-4 py-2 font-inter text-gray-100 focus:outline-none focus:border-event-gold"
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
