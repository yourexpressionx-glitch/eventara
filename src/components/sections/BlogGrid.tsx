'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export function BlogGrid() {
  const blogPosts = [
    {
      title: 'The Ultimate Guide to Planning a Destination Wedding in Darjeeling',
      excerpt:
        'Learn how to plan the perfect destination wedding in the Queen of the Hills. Tips on venues, logistics, and budget.',
      date: 'Dec 10, 2025',
      category: 'Weddings',
      readTime: '5 min read',
    },
    {
      title: 'Top Pandal Decoration Trends for 2025',
      excerpt:
        'Explore the latest trends in pandal decoration, from modern minimalism to traditional themes. Get inspired!',
      date: 'Dec 8, 2025',
      category: 'Decoration',
      readTime: '4 min read',
    },
    {
      title: 'Corporate Event Planning: From Concept to Execution',
      excerpt:
        'A complete guide to planning successful corporate events. Learn about venue selection, logistics, and team building.',
      date: 'Dec 5, 2025',
      category: 'Corporate',
      readTime: '6 min read',
    },
    {
      title: 'Bridal Care Tips: Look Your Best on Your Special Day',
      excerpt:
        'Complete bridal care guide including skincare routine, makeup preparation, and wellness tips for your wedding.',
      date: 'Dec 1, 2025',
      category: 'Wedding Tips',
      readTime: '5 min read',
    },
    {
      title: 'DJ vs Live Band: Choosing the Right Music for Your Event',
      excerpt:
        'Explore the pros and cons of DJ services vs live bands. Find the perfect entertainment solution for your event.',
      date: 'Nov 28, 2025',
      category: 'Entertainment',
      readTime: '4 min read',
    },
    {
      title: 'Destination Wedding Logistics: A Complete Checklist',
      excerpt:
        'Master the logistics of destination events. Hotels, travel, accommodation, and guest management guide.',
      date: 'Nov 25, 2025',
      category: 'Logistics',
      readTime: '7 min read',
    },
  ];

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
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ translateX: 8 }}
              className="card-luxury p-8 hover:border-event-gold/60 transition-colors cursor-pointer group"
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
            </motion.div>
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
