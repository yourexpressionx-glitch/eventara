'use client';

/**
 * Location CTA Section
 * Conversion-focused call-to-action for location pages
 */

import { motion } from 'framer-motion';
import { LOCATIONS } from '@/lib/constants';

interface LocationCTAProps {
  location: (typeof LOCATIONS)[0];
}

export function LocationCTA({ location }: LocationCTAProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.8 },
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
    <section className="py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-event-gold/10 via-transparent to-event-gold/10" />
      <div className="absolute inset-0 bg-rich-black" />

      <motion.div
        className="relative z-10 max-w-5xl mx-auto px-3 sm:px-4 md:px-8 text-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.h2
          variants={itemVariants}
          className="font-playfair text-5xl md:text-7xl font-bold mb-6"
        >
          Ready to Create Magic in <span className="text-gradient">{location.name}</span>?
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="font-inter text-xl text-cream-light/90 mb-4 max-w-2xl mx-auto"
        >
          Our {location.name} event experts are ready to bring your vision to life. From intimate gatherings to grand celebrations, we handle every detail.
        </motion.p>

        <motion.p
          variants={itemVariants}
          className="font-inter text-lg text-event-gold mb-12"
        >
          ✨ Free Consultation | No Hidden Fees | 500+ Successful Events
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="/contact"
            className="btn-primary px-8 py-4 text-center"
          >
            Get Free Consultation
          </a>
          <a
            href={`https://wa.me/919876543210?text=Hi Eventara! I'm interested in planning an event in ${location.name}.`}
            className="btn-secondary px-8 py-4 text-center"
          >
            Chat on WhatsApp
          </a>
        </motion.div>

        {/* Trust signals */}
        <motion.div
          variants={itemVariants}
          className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
        >
          <div>
            <p className="font-playfair text-3xl font-bold text-event-gold mb-2">
              500+
            </p>
            <p className="font-inter text-cream-light/70">
              Events Planned
            </p>
          </div>
          <div>
            <p className="font-playfair text-3xl font-bold text-event-gold mb-2">
              98%
            </p>
            <p className="font-inter text-cream-light/70">
              Client Satisfaction
            </p>
          </div>
          <div>
            <p className="font-playfair text-3xl font-bold text-event-gold mb-2">
              7 Years
            </p>
            <p className="font-inter text-cream-light/70">
              Industry Experience
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
