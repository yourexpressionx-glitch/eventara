'use client';

import { motion } from 'framer-motion';

export function VenuesHero() {
  return (
    <section className="relative min-h-[400px] pt-20 flex items-center bg-rich-black overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-rich-black via-burgundy-dark to-rich-black opacity-90" />

      <motion.div
        className="relative z-10 max-w-5xl mx-auto px-3 sm:px-4 md:px-8 py-12 sm:py-16 md:py-20 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="font-playfair text-3xl sm:text-3xl sm:text-5xl md:text-7xl font-bold mb-6 text-white">
          Premium <span className="text-gradient">Event Venues</span>
        </h1>
        <p className="font-inter text-sm sm:text-base md:text-xl text-cream-light/90 max-w-2xl mx-auto">
          Handpicked luxury venues across the Siliguri Corridor and Darjeeling region
        </p>
      </motion.div>
    </section>
  );
}
