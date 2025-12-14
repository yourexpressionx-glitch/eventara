'use client';

import { motion } from 'framer-motion';

export function AboutHero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
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
    <section className="relative min-h-screen pt-20 flex items-center bg-rich-black overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-rich-black via-burgundy-dark to-rich-black opacity-90" />
      <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-event-gold opacity-5 blur-3xl" />

      <motion.div
        className="relative z-10 max-w-5xl mx-auto px-3 sm:px-4 md:px-8 py-12 sm:py-16 md:py-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          variants={itemVariants}
          className="mb-6 inline-flex items-center gap-3 rounded-full border border-event-gold/30 bg-event-gold/5 px-6 py-2 backdrop-blur-sm"
        >
          <span className="h-2 w-2 rounded-full bg-event-gold" />
          <span className="text-sm font-medium text-event-gold uppercase tracking-widest">
            Our Story
          </span>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="font-playfair text-3xl sm:text-3xl sm:text-5xl md:text-7xl font-bold mb-6 text-white"
        >
          Crafting Unforgettable
          <br />
          <span className="text-gradient">Moments Since 2010</span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="max-w-2xl font-inter text-sm sm:text-base md:text-xl text-cream-light/90 mb-8"
        >
          Eventara has been the trusted partner for luxury event management across
          the Siliguri Corridor and Darjeeling Himalayan region for over 15 years.
          We've orchestrated 500+ memorable celebrations.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="grid md:grid-cols-4 gap-6"
        >
          {[
            { number: '500+', label: 'Events Delivered' },
            { number: '15+', label: 'Years Experience' },
            { number: '2000+', label: 'Happy Clients' },
            { number: '7', label: 'Service Locations' },
          ].map((stat, idx) => (
            <div key={idx} className="card-luxury p-6 text-center">
              <div className="font-playfair text-4xl font-bold text-event-gold mb-2">
                {stat.number}
              </div>
              <div className="font-inter text-cream-light/70 text-sm">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
