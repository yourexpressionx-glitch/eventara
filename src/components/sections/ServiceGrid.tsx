'use client';

/**
 * Service Grid Section
 */

import { motion } from 'framer-motion';
import Link from 'next/link';
import { SERVICES } from '@/lib/constants';

export function ServiceGrid() {
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

  const coreServices = SERVICES.filter((s) => s.category === 'core');
  const vernacularServices = SERVICES.filter((s) => s.category === 'vernacular');
  const techServices = SERVICES.filter((s) => s.category === 'tech');

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-rich-black via-gray-900/30 to-rich-black px-4 md:px-8">
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
            <span className="text-gradient">Our Services</span>
          </h2>
          <p className="font-inter text-gray-400 text-lg max-w-2xl mx-auto">
            Comprehensive event management solutions tailored to your vision
          </p>
        </motion.div>

        {/* Core Services */}
        <div className="mb-16">
          <h3 className="font-playfair text-2xl font-bold text-event-gold mb-8">
            Core Services
          </h3>
          <motion.div
            className="grid md:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {coreServices.map((service) => (
              <ServiceCard key={service.slug} service={service} variants={itemVariants} />
            ))}
          </motion.div>
        </div>

        {/* Vernacular Services */}
        <div className="mb-16">
          <h3 className="font-playfair text-2xl font-bold text-light-gold mb-8">
            Local Specialty Services
          </h3>
          <motion.div
            className="grid md:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {vernacularServices.map((service) => (
              <ServiceCard key={service.slug} service={service} variants={itemVariants} />
            ))}
          </motion.div>
        </div>

        {/* Tech Services */}
        <div>
          <h3 className="font-playfair text-2xl font-bold text-event-gold mb-8">
            Tech & Support Services
          </h3>
          <motion.div
            className="grid md:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {techServices.map((service) => (
              <ServiceCard key={service.slug} service={service} variants={itemVariants} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  service,
  variants,
}: {
  service: (typeof SERVICES)[0];
  variants: any;
}) {
  return (
    <motion.div
      variants={variants}
      whileHover={{ translateY: -8 }}
      className="card-luxury p-8 hover:border-event-gold/60 transition-all cursor-pointer group"
    >
      <div className="mb-4">
        <div className="inline-block p-3 bg-event-gold/10 rounded-lg group-hover:bg-event-gold/20 transition-colors">
          <svg
            className="w-6 h-6 text-event-gold"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 10V3L4 14h7v7l9-11h-7z"
            />
          </svg>
        </div>
      </div>
      <h3 className="font-playfair text-xl font-bold text-event-gold mb-2">
        {service.display}
      </h3>
      <p className="font-inter text-gray-400 text-sm mb-4">{service.description}</p>
      <Link
        href={`/${service.slug}-siliguri`}
        className="inline-flex items-center text-light-gold hover:text-event-gold transition-colors text-sm font-semibold"
      >
        Explore →
      </Link>
    </motion.div>
  );
}
