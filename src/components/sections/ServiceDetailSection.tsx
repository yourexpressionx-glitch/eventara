'use client';

/**
 * Service Detail Section - Enhanced for Conversion
 * Dynamically rendered based on service type with emotional triggers and CTAs
 */

import { LOCATIONS, SERVICES } from '@/lib/constants';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface ServiceDetailSectionProps {
  service: (typeof SERVICES)[0];
  location: (typeof LOCATIONS)[0];
}

export function ServiceDetailSection({
  service,
  location,
}: ServiceDetailSectionProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
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

  // Get benefits - use service object if available, otherwise generate defaults
  const benefits = (service as any).benefits || [
    'Professional expertise',
    'Quality service',
    'Custom solutions',
    'Client satisfaction',
  ];

  // Get emotional benefit copy
  const emotionalBenefit = (service as any).emotionalBenefit || 
    `Transform your ${service.display.toLowerCase()} into an unforgettable experience with our expert services.`;

  // Get trust signals
  const trustSignals = (service as any).trustSignals || [
    '500+ events delivered',
    '15+ years of excellence',
    '98% client satisfaction',
    'Award-winning service',
  ];

  return (
    <section className="relative py-12 sm:py-16 md:py-20 bg-gradient-to-b from-rich-black via-burgundy-dark/50 to-rich-black px-3 sm:px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Main Value Proposition with Emotional Trigger */}
        <motion.div
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <motion.h2
            variants={itemVariants}
            className="font-playfair text-5xl md:text-6xl font-bold mb-6"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-event-gold via-light-gold to-event-gold">
              {service.display}
            </span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="font-inter text-xl text-cream-light/90 max-w-3xl mx-auto mb-8 leading-relaxed"
          >
            {emotionalBenefit}
          </motion.p>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {benefits.map((benefit: string, idx: number) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="card-luxury p-8 hover:border-event-gold/60 transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-event-gold/20 flex items-center justify-center">
                    <span className="text-event-gold font-bold text-lg">✓</span>
                  </div>
                </div>
                <div className="flex-1">
                  <p className="font-inter text-cream-light/95 leading-relaxed">{benefit}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust Signals Section */}
        <motion.div
          className="bg-gradient-to-r from-event-gold/10 via-light-gold/5 to-event-gold/10 border border-event-gold/20 rounded-xl p-8 md:p-12 mb-16"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <h3 className="font-playfair text-3xl font-bold text-event-gold mb-8 text-center">
            Why Couples & Corporations Choose Eventara
          </h3>
          <div className="grid md:grid-cols-4 gap-6">
            {trustSignals.map((signal: string, idx: number) => (
              <div key={idx} className="text-center">
                <div className="font-playfair text-2xl font-bold text-light-gold mb-2">
                  {signal.split(' ')[0]}
                </div>
                <p className="font-inter text-sm text-cream-light/90">
                  {signal.substring(signal.indexOf(' ') + 1)}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Local Expertise + CTA Section */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="font-playfair text-4xl font-bold">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-event-gold to-light-gold">
                Trusted in {location.name}
              </span>
            </h3>
            <p className="font-inter text-cream-light/90 text-lg leading-relaxed">
              With deep expertise in {location.name}'s unique venues, climate, and local culture, Eventara brings unmatched local knowledge to every {service.display.toLowerCase()} we manage. Our local partnerships and vendor relationships ensure seamless execution.
            </p>
            <div className="space-y-3 pt-4">
              <div className="flex items-center gap-3">
                <span className="text-light-gold font-bold">✓</span>
                <span className="font-inter text-cream-light/95">
                  Expert knowledge of {location.name} venues
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-light-gold font-bold">✓</span>
                <span className="font-inter text-cream-light/95">
                  Premium local vendor partnerships
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-light-gold font-bold">✓</span>
                <span className="font-inter text-cream-light/95">
                  Weather & terrain expertise
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-light-gold font-bold">✓</span>
                <span className="font-inter text-cream-light/95">
                  Logistics management from day 1
                </span>
              </div>
            </div>
          </motion.div>

          {/* CTA Box */}
          <motion.div
            variants={itemVariants}
            className="card-luxury p-8 border-2 border-event-gold/50 bg-gradient-to-br from-event-gold/5 to-light-gold/5"
          >
            <h4 className="font-playfair text-2xl font-bold text-event-gold mb-4">
              Ready to Plan?
            </h4>
            <p className="font-inter text-cream-light/90 mb-6">
              Get a free consultation to discuss your {service.display.toLowerCase()} needs and how we can create something extraordinary in {location.name}.
            </p>
            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-2 text-sm text-cream-light/95">
                <span>📞</span> <span>24-Hour Response Guarantee</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-cream-light/95">
                <span>✓</span> <span>No Obligation Consultation</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-cream-light/95">
                <span>⚡</span> <span>Competitive Pricing</span>
              </div>
            </div>
            <Link
              href="/contact"
              className="block w-full px-6 py-3 bg-event-gold text-rich-black font-playfair font-bold rounded-lg hover:bg-light-gold transition-colors text-center mb-3"
            >
              Get Free Consultation
            </Link>
            <a
              href={`https://wa.me/919332345023?text=Hi%20Eventara%2C%20I'm%20interested%20in%20${service.display.replace(/ /g, '%20')}%20services%20in%20${location.name}.%20Please%20provide%20details%20and%20pricing.`}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full px-6 py-3 bg-event-gold/20 border border-event-gold text-event-gold font-inter font-semibold rounded-lg hover:bg-event-gold/30 transition-colors text-center"
            >
              Chat on WhatsApp
            </a>
          </motion.div>
        </motion.div>

        {/* FAQ/Questions Section */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="bg-rich-black border border-event-gold/20 rounded-xl p-8"
        >
          <h3 className="font-playfair text-2xl font-bold text-event-gold mb-6">
            Common Questions
          </h3>
          <div className="space-y-4">
            <details className="cursor-pointer group">
              <summary className="flex items-center gap-3 font-inter font-semibold text-cream-light/95 hover:text-event-gold transition-colors">
                <span className="text-light-gold group-open:rotate-90 transition-transform">
                  ▶
                </span>
                How far in advance should I book {service.display.toLowerCase()}?
              </summary>
              <p className="font-inter text-cream-light/70 mt-3 ml-6">
                We recommend 3-6 months in advance for optimal selection and planning. However, we can accommodate urgent requests with our rush booking service.
              </p>
            </details>
            <details className="cursor-pointer group">
              <summary className="flex items-center gap-3 font-inter font-semibold text-cream-light/95 hover:text-event-gold transition-colors">
                <span className="text-light-gold group-open:rotate-90 transition-transform">
                  ▶
                </span>
                What's included in {service.display.toLowerCase()} pricing?
              </summary>
              <p className="font-inter text-cream-light/70 mt-3 ml-6">
                We provide transparent, all-inclusive pricing. Our quotation includes all services, setup, coordination, and day-of support. No hidden charges.
              </p>
            </details>
            <details className="cursor-pointer group">
              <summary className="flex items-center gap-3 font-inter font-semibold text-cream-light/95 hover:text-event-gold transition-colors">
                <span className="text-light-gold group-open:rotate-90 transition-transform">
                  ▶
                </span>
                Can I customize {service.display.toLowerCase()} for my event?
              </summary>
              <p className="font-inter text-cream-light/70 mt-3 ml-6">
                Absolutely! All our services are fully customizable to match your vision, budget, and preferences. We work closely with you to create exactly what you need.
              </p>
            </details>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
