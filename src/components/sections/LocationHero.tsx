'use client';

/**
 * Location Hero Section
 * Dynamic hero for location landing pages
 */

import { motion } from 'framer-motion';
import Link from 'next/link';
import { LOCATIONS } from '@/lib/constants';

interface LocationHeroProps {
  location: (typeof LOCATIONS)[0];
}

export function LocationHero({ location }: LocationHeroProps) {
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

  const handleWhatsAppClick = () => {
    // Track GA4 event
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'button_click', {
        button_name: 'location_whatsapp_cta',
        location: location.name,
        device_type: window.innerWidth < 768 ? 'mobile' : 'desktop',
      });
    }
  };

  return (
    <section className="relative min-h-screen pt-20 w-full overflow-hidden bg-rich-black">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-rich-black via-burgundy-dark to-rich-black opacity-90" />
      <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-event-gold opacity-5 blur-3xl" />
      <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-light-gold opacity-5 blur-3xl" />

      <motion.div
        className="relative z-10 flex min-h-[calc(100vh-80px)] flex-col items-center justify-center px-4 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          variants={itemVariants}
          className="mb-8 inline-flex items-center gap-3 rounded-full border border-event-gold/30 bg-event-gold/5 px-6 py-2 backdrop-blur-sm"
        >
          <span className="h-2 w-2 rounded-full bg-event-gold animate-pulse" />
          <span className="text-sm font-medium text-event-gold uppercase tracking-widest">
            ✓ 500+ Events | Premium Service | Local Expertise
          </span>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="max-w-4xl font-playfair text-3xl sm:text-3xl sm:text-5xl md:text-7xl font-bold leading-tight text-white mb-6"
        >
          Premium Event Planning in
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-event-gold via-light-gold to-event-gold">
            {location.name}
          </span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="max-w-2xl font-inter text-sm sm:text-base md:text-sm sm:text-base md:text-xl text-cream-light/90 mb-8 leading-relaxed"
        >
          {location.description}. With 500+ events delivered and deep expertise in {location.name}'s unique venues and culture, Eventara creates unforgettable celebrations tailored to your vision.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8"
        >
          <Link
            href="/contact"
            className="px-6 sm:px-8 py-3 sm:py-4 bg-event-gold text-rich-black font-playfair font-bold text-sm sm:text-lg rounded-lg hover:bg-light-gold transition-colors duration-300 shadow-lg hover:shadow-xl min-h-[48px] flex items-center justify-center"
            title="Get free event planning consultation"
          >
            Get Free Consultation
          </Link>
          <a
            href={`https://wa.me/919332345023?text=Hi%20Eventara%2C%20I'm%20interested%20in%20planning%20an%20event%20in%20${location.name}.%20Please%20share%20your%20services%20and%20packages.`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleWhatsAppClick}
            className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-event-gold text-event-gold font-inter font-semibold text-sm sm:text-base rounded-lg hover:bg-event-gold/10 transition-colors duration-300 min-h-[48px] flex items-center justify-center"
            title="Chat with us on WhatsApp"
          >
            Chat on WhatsApp
          </a>
        </motion.div>

        {/* Location Stats */}
        <motion.div
          variants={itemVariants}
          className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-event-gold/20 w-full max-w-3xl"
        >
          <div className="grid grid-cols-3 gap-4 sm:gap-4 sm:gap-6 md:gap-8 text-center">
            <div>
              <div className="font-playfair text-xl sm:text-2xl md:text-3xl font-bold text-event-gold mb-1">
                {location.elevation}
              </div>
              <div className="font-inter text-xs sm:text-sm text-cream-light/70">Elevation</div>
            </div>
            <div>
              <div className="font-playfair text-xl sm:text-2xl md:text-3xl font-bold text-event-gold mb-1">
                {location.bestTime}
              </div>
              <div className="font-inter text-xs sm:text-sm text-cream-light/70">Best Season</div>
            </div>
            <div>
              <div className="font-playfair text-xl sm:text-2xl md:text-3xl font-bold text-event-gold mb-1">
                {location.averageTemp}
              </div>
              <div className="font-inter text-xs sm:text-sm text-cream-light/70">Avg Temperature</div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
