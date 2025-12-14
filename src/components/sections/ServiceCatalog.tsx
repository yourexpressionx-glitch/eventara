'use client';

/**
 * Service Catalog Page
 */

import { motion } from 'framer-motion';
import { SERVICES } from '@/lib/constants';
import Link from 'next/link';

export function ServiceCatalog() {
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
    <div className="pt-20">
      {/* Hero */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-rich-black via-burgundy-dark to-rich-black px-3 sm:px-4 md:px-8">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            variants={itemVariants}
            className="font-playfair text-6xl md:text-7xl font-bold mb-6"
          >
            <span className="text-gradient">Complete Event Solutions</span>
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="font-inter text-lg text-cream-light/70 mb-8"
          >
            Discover our full range of event management services, from core
            planning to specialized local expertise
          </motion.p>
        </motion.div>
      </section>

      {/* Services by Category */}
      <section className="py-12 sm:py-16 md:py-20 px-3 sm:px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          {[
            { title: 'Core Services', category: 'core' },
            { title: 'Local Specialty Services', category: 'vernacular' },
            { title: 'Tech & Support Services', category: 'tech' },
            { title: 'Additional Services', category: 'additional' },
          ].map((section) => {
            const services = SERVICES.filter((s) => s.category === section.category);
            if (services.length === 0) return null;

            return (
              <div key={section.category} className="mb-16">
                <h2 className="font-playfair text-4xl font-bold text-event-gold mb-8">
                  {section.title}
                </h2>
                <motion.div
                  className="grid grid-cols-1 md:grid-cols-2 gap-8"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {services.map((service) => (
                    <motion.div
                      key={service.slug}
                      variants={itemVariants}
                      className="card-luxury p-8"
                    >
                      <h3 className="font-playfair text-2xl font-bold text-event-gold mb-3">
                        {service.display}
                      </h3>
                      <p className="font-inter text-cream-light/90 mb-4">
                        {service.description}
                      </p>
                      {service.highlights && (
                        <ul className="space-y-2 mb-6">
                          {service.highlights.map((highlight, idx) => (
                            <li
                              key={idx}
                              className="flex items-center gap-2 text-cream-light/70 font-inter text-sm"
                            >
                              <span className="text-light-gold">•</span>
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      )}
                      <Link
                        href={`/${service.slug}-siliguri`}
                        className="inline-flex items-center text-light-gold hover:text-event-gold transition-colors font-semibold"
                      >
                        Learn More →
                      </Link>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-r from-event-gold/10 to-light-gold/10 px-3 sm:px-4 md:px-8">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2
            variants={itemVariants}
            className="font-playfair text-4xl font-bold mb-4"
          >
            Ready to Plan Your Event?
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="font-inter text-cream-light/90 text-lg mb-8"
          >
            Get in touch with our team to discuss your event needs
          </motion.p>
          <motion.a
            variants={itemVariants}
            href="https://wa.me/919332345023"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-event-gold text-rich-black font-playfair font-bold text-lg rounded-lg hover:bg-light-gold transition-colors"
          >
            Chat on WhatsApp
          </motion.a>
        </motion.div>
      </section>
    </div>
  );
}
