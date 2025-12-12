'use client';

/**
 * Cinematic Hero Section
 * Animated, luxury-focused hero with gradient text
 */

import { motion } from 'framer-motion';
import { LOCATIONS, SERVICES } from '@/lib/constants';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  service: (typeof SERVICES)[0];
  location: (typeof LOCATIONS)[0];
}

export function HeroSection({
  subtitle,
  service,
  location,
}: HeroSectionProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-rich-black">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-rich-black via-gray-900 to-rich-black opacity-90" />

      {/* Animated Accent */}
      <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-event-gold opacity-5 blur-3xl" />
      <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-light-gold opacity-5 blur-3xl" />

      {/* Content */}
      <motion.div
        className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Service & Location Badge */}
        <motion.div
          variants={itemVariants}
          className="mb-8 inline-flex items-center gap-3 rounded-full border border-event-gold/30 bg-event-gold/5 px-6 py-2 backdrop-blur-sm"
        >
          <span className="h-2 w-2 rounded-full bg-event-gold" />
          <span className="text-sm font-medium text-event-gold uppercase tracking-widest">
            {service.display} in {location.name}
          </span>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          variants={itemVariants}
          className="max-w-4xl font-playfair text-5xl md:text-7xl font-bold leading-tight text-white mb-6"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-event-gold via-light-gold to-event-gold animate-pulse">
            Luxury {service.display}
          </span>
          <br />
          <span className="text-gray-300">in {location.name}</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="max-w-2xl font-inter text-lg md:text-xl text-gray-400 mb-12"
        >
          {subtitle}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button className="px-8 py-4 bg-event-gold text-rich-black font-playfair font-bold text-lg rounded-lg hover:bg-light-gold transition-colors duration-300 shadow-lg hover:shadow-xl">
            Explore {service.display}
          </button>
          <button className="px-8 py-4 border-2 border-event-gold text-event-gold font-inter font-semibold rounded-lg hover:bg-event-gold/10 transition-colors duration-300">
            Get In Touch
          </button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          variants={itemVariants}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-sm text-gray-500 font-inter">Scroll to explore</span>
            <svg
              className="w-5 h-5 text-event-gold"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
