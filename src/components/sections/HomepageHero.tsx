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
      <div className="absolute inset-0 bg-gradient-to-br from-rich-black via-burgundy-dark to-rich-black opacity-90" />
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
          <span className="h-2 w-2 rounded-full bg-event-gold animate-pulse" />
          <span className="text-sm font-medium text-event-gold uppercase tracking-widest">
            ✓ 500+ Events | 15+ Years | Premium Luxury Service
          </span>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="max-w-5xl font-playfair text-3xl sm:text-3xl sm:text-5xl md:text-7xl font-bold leading-tight text-white mb-6"
        >
          Your Luxury Event Deserves
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-event-gold via-light-gold to-event-gold">
            Northeast India's #1 Expert
          </span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="max-w-2xl font-inter text-sm sm:text-base md:text-lg lg:text-sm sm:text-base md:text-xl text-cream-light/90 mb-8 leading-relaxed"
        >
          Eventara has transformed 500+ destination weddings, corporate summits, and luxury events across Darjeeling, Siliguri, and the Northeast. With 15 years of expertise, our award-winning team orchestrates every detail—from pandal artistry to seamless logistics—ensuring your vision becomes an unforgettable reality.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex items-center gap-2 sm:gap-3 justify-center mb-6 text-xs sm:text-sm text-event-gold font-semibold"
        >
          <span>⏰ Peak Season Dates Fill Fast—</span>
          <span className="animate-pulse">Book Your Date Now</span>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center"
        >
          <Link
            href="/contact"
            className="px-6 sm:px-8 py-3 sm:py-4 bg-event-gold text-rich-black font-playfair font-bold text-sm sm:text-lg rounded-lg hover:bg-light-gold transition-colors duration-300 shadow-lg hover:shadow-xl min-h-[48px] flex items-center justify-center"
            title="Get free event planning consultation"
          >
            Get Free Consultation
          </Link>
          <Link
            href="/#services"
            className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-event-gold text-event-gold font-inter font-semibold text-sm sm:text-base rounded-lg hover:bg-event-gold/10 transition-colors duration-300 min-h-[48px] flex items-center justify-center"
            title="Explore our event services"
          >
            Explore All Services
          </Link>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="mt-8 text-xs text-cream-light/50 text-center"
        >
          ✓ No Obligation | Free Planning Consultation | 24-Hour Response
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="mt-8 sm:mt-16 pt-6 sm:pt-8 border-t border-event-gold/20 w-full max-w-2xl"
        >
          <div className="grid grid-cols-3 gap-4 sm:gap-4 sm:gap-6 md:gap-8 text-center">
            {[
              { label: '500+', desc: 'Events Delivered', subtext: '15 years of excellence' },
              { label: '98%', desc: 'Client Satisfaction', subtext: 'Repeat & referral rate' },
              { label: '7', desc: 'Prime Locations', subtext: 'Northeast India coverage' },
            ].map((stat, idx) => (
              <motion.div key={idx} variants={itemVariants}>
                <div className="font-playfair text-xl sm:text-2xl md:text-3xl font-bold text-event-gold">
                  {stat.label}
                </div>
                <div className="font-inter text-xs sm:text-sm text-cream-light/70">{stat.desc}</div>
                <div className="font-inter text-xs text-cream-light/50 mt-1">{stat.subtext}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
