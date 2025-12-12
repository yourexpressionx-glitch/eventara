'use client';

/**
 * Location Highlights Section
 * Showcases location details and attractions
 */

import { motion } from 'framer-motion';
import { LOCATIONS } from '@/lib/constants';

interface LocationHighlightsProps {
  location: (typeof LOCATIONS)[0];
}

export function LocationHighlights({ location }: LocationHighlightsProps) {
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
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="relative py-20 bg-rich-black px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-4">
            Discover <span className="text-event-gold">{location.name}</span>
          </h2>
          <p className="font-inter text-gray-400 text-lg max-w-2xl mx-auto">
            {location.description}
          </p>
        </motion.div>

        {/* Location Grid */}
        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Elevation */}
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-br from-event-gold/10 to-light-gold/5 border border-event-gold/30 rounded-xl p-8 backdrop-blur-sm hover:border-event-gold/50 transition-colors"
          >
            <div className="text-event-gold text-4xl font-bold mb-2">
              {location.elevation}
            </div>
            <div className="font-inter text-gray-300 mb-2">Elevation</div>
            <p className="font-inter text-sm text-gray-400">
              Altitude and climate characteristics
            </p>
          </motion.div>

          {/* Coordinates */}
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-br from-event-gold/10 to-light-gold/5 border border-event-gold/30 rounded-xl p-8 backdrop-blur-sm hover:border-event-gold/50 transition-colors"
          >
            <div className="text-light-gold text-lg font-bold mb-2">
              {location.coordinates.lat.toFixed(3)}° N<br />
              {location.coordinates.lng.toFixed(3)}° E
            </div>
            <div className="font-inter text-gray-300 mb-2">Coordinates</div>
            <p className="font-inter text-sm text-gray-400">
              Geographic location for logistics
            </p>
          </motion.div>

          {/* Tourist Classification */}
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-br from-event-gold/10 to-light-gold/5 border border-event-gold/30 rounded-xl p-8 backdrop-blur-sm hover:border-event-gold/50 transition-colors"
          >
            <div className="text-event-gold font-playfair text-2xl font-bold mb-2">
              ★★★★★
            </div>
            <div className="font-inter text-gray-300 mb-2">Destination Rating</div>
            <p className="font-inter text-sm text-gray-400">
              Premium venue availability
            </p>
          </motion.div>
        </motion.div>

        {/* Why Host Events Here */}
        <motion.div
          className="mt-16 bg-gradient-to-r from-event-gold/5 via-light-gold/5 to-event-gold/5 border border-event-gold/20 rounded-xl p-12"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h3 className="font-playfair text-3xl font-bold text-event-gold mb-8">
            Why Host Your Event in {location.name}?
          </h3>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Strategic Location',
                desc: 'Gateway to Northeast India with excellent connectivity',
              },
              {
                title: 'World-Class Venues',
                desc: 'Premium resorts, halls, and outdoor spaces',
              },
              {
                title: 'Expert Services',
                desc: 'Local vendors and service providers',
              },
              {
                title: 'Scenic Beauty',
                desc: 'Backdrop for stunning event photography',
              },
              {
                title: 'Cultural Richness',
                desc: 'Blend traditional and modern experiences',
              },
              {
                title: 'All-Weather Ready',
                desc: 'Indoor and outdoor contingency options',
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="space-y-2"
              >
                <h4 className="font-playfair text-xl font-bold text-light-gold">
                  {item.title}
                </h4>
                <p className="font-inter text-gray-300">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Learn More Link */}
        <motion.div
          className="text-center mt-8"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <a
            href={location.wikiUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-event-gold hover:text-light-gold transition-colors font-inter"
          >
            Learn more about {location.name} →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
