'use client';

/**
 * Location FAQ Section
 * Answers to common questions about events in this location
 */

import { motion } from 'framer-motion';
import { useState } from 'react';
import { LOCATIONS } from '@/lib/constants';

interface LocationFAQProps {
  location: (typeof LOCATIONS)[0];
}

export function LocationFAQ({ location }: LocationFAQProps) {
  const [expandedIdx, setExpandedIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: `What's the best time to host an event in ${location.name}?`,
      a: `The ideal season is ${location.bestTime}. The weather is pleasant with temperatures ranging from ${location.averageTemp}, perfect for outdoor and indoor events. We recommend booking venues 2-3 months in advance.`,
    },
    {
      q: `How far in advance should I plan my event in ${location.name}?`,
      a: `We recommend planning 3-4 months in advance for weddings and 4-6 weeks for corporate events. This allows us to secure premium venues, coordinate with local vendors, and ensure every detail is perfect.`,
    },
    {
      q: `What types of venues are available in ${location.name}?`,
      a: `${location.name} offers diverse venues including ${location.highlights?.slice(0, 2).join(', ')}. Whether you want an intimate gathering or a grand celebration, we have options to match your vision and budget.`,
    },
    {
      q: `Can Eventara handle vendor coordination in ${location.name}?`,
      a: `Absolutely! We have established relationships with premium local vendors in ${location.name}—caterers, decorators, photographers, musicians, and more. We vet each vendor personally to ensure quality.`,
    },
    {
      q: `What's the cost range for events in ${location.name}?`,
      a: `Event costs vary widely based on guest count, venue, and services. ${location.name} offers excellent value with ${location.eventBenefits}. Contact us for a free consultation to discuss your budget.`,
    },
    {
      q: `Do you provide day-of event management in ${location.name}?`,
      a: `Yes, our team provides complete day-of coordination including timeline management, vendor supervision, guest management, and troubleshooting. We ensure your event runs flawlessly.`,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  };

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-rich-black px-3 sm:px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="font-playfair text-5xl md:text-6xl font-bold mb-4">
            Questions About Events in <span className="text-gradient">{location.name}</span>?
          </h2>
          <p className="font-inter text-cream-light/70 text-lg">
            Get answers from our {location.name} event experts
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          className="space-y-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {faqs.map((faq, idx) => (
            <motion.div key={idx} variants={itemVariants}>
              <button
                onClick={() => setExpandedIdx(expandedIdx === idx ? null : idx)}
                className="w-full card-luxury p-6 text-left hover:border-event-gold/50 transition-colors"
              >
                <div className="flex justify-between items-start gap-4">
                  <h3 className="font-playfair text-xl font-bold">
                    {faq.q}
                  </h3>
                  <span className="text-event-gold text-2xl flex-shrink-0">
                    {expandedIdx === idx ? '−' : '+'}
                  </span>
                </div>
              </button>
              {expandedIdx === idx && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-6 py-4 bg-gray-900/50 border-l-2 border-event-gold/30"
                >
                  <p className="font-inter text-cream-light/90 leading-relaxed">
                    {faq.a}
                  </p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="font-inter text-cream-light/70 mb-6">
            Still have questions about hosting an event in {location.name}?
          </p>
          <a
            href={`https://wa.me/919876543210?text=Hi Eventara! I'd like to know more about planning an event in ${location.name}.`}
            className="btn-primary inline-block"
          >
            Chat with Our {location.name} Expert
          </a>
        </motion.div>
      </div>
    </section>
  );
}
