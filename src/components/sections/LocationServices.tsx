'use client';

/**
 * Location Services Section
 * Shows all services available in the location
 */

import { motion } from 'framer-motion';
import Link from 'next/link';
import { LOCATIONS, SERVICES } from '@/lib/constants';

interface LocationServicesProps {
  location: (typeof LOCATIONS)[0];
}

export function LocationServices({ location }: LocationServicesProps) {
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

  // Get core and popular services
  const coreServices = SERVICES.filter((s) => s.category === 'core').slice(0, 3);

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-rich-black px-3 sm:px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="font-playfair text-5xl md:text-6xl font-bold mb-4">
            <span className="text-gradient">Complete Services</span> in {location.name}
          </h2>
          <p className="font-inter text-cream-light/70 text-lg max-w-2xl mx-auto">
            From wedding planning to corporate events, we offer comprehensive services tailored to {location.name}'s unique charm
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {coreServices.map((service) => (
            <motion.div
              key={service.slug}
              variants={itemVariants}
              className="card-luxury p-8 hover:border-event-gold/60 transition-all group cursor-pointer"
            >
              <h3 className="font-playfair text-2xl font-bold text-event-gold mb-3">
                {service.display}
              </h3>
              <p className="font-inter text-cream-light/70 text-sm mb-6">
                {service.description}
              </p>
              <Link
                href={`/${service.slug}-${location.slug}`}
                className="inline-flex items-center text-light-gold hover:text-event-gold transition-colors font-semibold text-sm"
              >
                Learn More →
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* All Services CTA */}
        <motion.div
          className="text-center"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-8 py-3 bg-event-gold/10 border border-event-gold text-event-gold font-inter font-semibold rounded-lg hover:bg-event-gold/20 transition-colors"
          >
            View All Services in {location.name} →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
