'use client';

/**
 * Location Grid Section
 */

import { motion } from 'framer-motion';
import Link from 'next/link';
import { LOCATIONS } from '@/lib/constants';

export function LocationGrid() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
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
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-gray-900/30 via-rich-black to-gray-900/30 px-3 sm:px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="font-playfair text-5xl md:text-6xl font-bold mb-4">
            Serve Across <span className="text-gradient">7 Regions</span>
          </h2>
          <p className="font-inter text-cream-light/70 text-lg max-w-2xl mx-auto">
            From the foothills of Darjeeling to the bustling corridors of Siliguri
          </p>
        </motion.div>

        {/* Locations Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {LOCATIONS.map((location) => (
            <LocationCard
              key={location.slug}
              location={location}
              variants={itemVariants}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function LocationCard({
  location,
  variants,
}: {
  location: (typeof LOCATIONS)[0];
  variants: any;
}) {
  return (
    <motion.div
      variants={variants}
      whileHover={{ translateY: -8 }}
      className="card-luxury p-6 hover:border-event-gold/60 transition-all group"
    >
      <div className="mb-4 text-3xl">📍</div>
      <h3 className="font-playfair text-lg font-bold text-event-gold mb-2">
        {location.name}
      </h3>
      <div className="space-y-2 mb-4">
        <p className="font-inter text-sm text-cream-light/70">{location.description}</p>
        <p className="font-inter text-xs text-cream-light/50">
          Elevation: {location.elevation}
        </p>
      </div>
      <Link
        href={`/wedding-planner-${location.slug}`}
        className="inline-flex items-center text-light-gold hover:text-event-gold transition-colors text-sm font-semibold"
      >
        Events in {location.name.split(' ')[0]} →
      </Link>
    </motion.div>
  );
}
