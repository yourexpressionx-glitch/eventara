'use client';

/**
 * Homepage Hero Section
 */

import { motion } from 'framer-motion';
import Link from 'next/link';

export function HomepageHero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section className="relative min-h-screen pt-20 w-full overflow-hidden bg-rich-black">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-rich-black via-gray-900 to-rich-black opacity-90" />
      <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-event-gold opacity-5 blur-3xl" />
      <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-light-gold opacity-5 blur-3xl" />

      <motion.div
        className="relative z-10 flex min-h-[calc(100vh-80px)] flex-col items-center justify-center px-4 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          variants={itemVariants}
          className="mb-8 inline-flex items-center gap-3 rounded-full border border-event-gold/30 bg-event-gold/5 px-6 py-2 backdrop-blur-sm"
        >
          <span className="h-2 w-2 rounded-full bg-event-gold" />
          <span className="text-sm font-medium text-event-gold uppercase tracking-widest">
            Luxury Event Management
          </span>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="max-w-5xl font-playfair text-6xl md:text-7xl font-bold leading-tight text-white mb-6"
        >
          Elevate Your Events to
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-event-gold via-light-gold to-event-gold">
            Unforgettable Moments
          </span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="max-w-2xl font-inter text-lg md:text-xl text-gray-400 mb-12"
        >
          Eventara brings together expertise, creativity, and luxury to create
          destination events that define elegance. From Darjeeling's misty peaks
          to Siliguri's vibrant corridors.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            href="/#services"
            className="px-8 py-4 bg-event-gold text-rich-black font-playfair font-bold text-lg rounded-lg hover:bg-light-gold transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            Explore Services
          </Link>
          <Link
            href="/contact"
            className="px-8 py-4 border-2 border-event-gold text-event-gold font-inter font-semibold rounded-lg hover:bg-event-gold/10 transition-colors duration-300"
          >
            Start Planning
          </Link>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="mt-16 pt-8 border-t border-event-gold/20 w-full max-w-2xl"
        >
          <div className="grid grid-cols-3 gap-8 text-center">
            {[
              { label: '500+', desc: 'Events Delivered' },
              { label: '15+', desc: 'Years Experience' },
              { label: '7', desc: 'Prime Locations' },
            ].map((stat, idx) => (
              <motion.div key={idx} variants={itemVariants}>
                <div className="font-playfair text-3xl font-bold text-event-gold">
                  {stat.label}
                </div>
                <div className="font-inter text-sm text-gray-400">{stat.desc}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
