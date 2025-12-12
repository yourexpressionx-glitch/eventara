'use client';

import { motion } from 'framer-motion';

export function VenuesHero() {
  return (
    <section className="relative min-h-[400px] pt-20 flex items-center bg-rich-black overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-rich-black via-gray-900 to-rich-black opacity-90" />

      <motion.div
        className="relative z-10 max-w-5xl mx-auto px-4 md:px-8 py-20 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="font-playfair text-6xl md:text-7xl font-bold mb-6 text-white">
          Premium <span className="text-gradient">Event Venues</span>
        </h1>
        <p className="font-inter text-xl text-gray-300 max-w-2xl mx-auto">
          Handpicked luxury venues across the Siliguri Corridor and Darjeeling region
        </p>
      </motion.div>
    </section>
  );
}
