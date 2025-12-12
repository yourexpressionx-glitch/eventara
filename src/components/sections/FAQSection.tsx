'use client';

/**
 * FAQ Section
 */

import { motion } from 'framer-motion';
import { useState } from 'react';

export function FAQSection() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: 'How far in advance should I book Eventara?',
      a: 'We recommend booking 3-6 months in advance for weddings and major events to ensure venue availability and perfect coordination. However, we can accommodate shorter timelines for corporate events.',
    },
    {
      q: 'Which locations do you serve?',
      a: 'We serve 7 prime locations: Siliguri, Darjeeling, Gangtok, Kalimpong, Kurseong, Bagdogra, and Mirik. Our local expertise spans the entire Darjeeling Corridor and Northeast region.',
    },
    {
      q: 'What services can be customized?',
      a: 'All our services are fully customizable. From pandal decoration themes to multi-cuisine catering menus, DJ music playlists to venue logistics—we tailor everything to your vision and budget.',
    },
    {
      q: 'Do you handle destination weddings?',
      a: 'Absolutely! We specialize in destination weddings. Our DMC services include accommodation coordination, travel logistics, vendor management, and full event planning.',
    },
    {
      q: 'What is your cancellation policy?',
      a: 'Our cancellation policy is flexible based on the event date and services booked. Please contact us directly to discuss terms specific to your booking.',
    },
    {
      q: 'How do I get a quote?',
      a: 'Reach out via WhatsApp, email, or phone with your event details. Our team will provide a customized quote within 24 hours.',
    },
  ];

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
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  };

  return (
    <section className="py-20 bg-gradient-to-b from-rich-black via-gray-900/30 to-rich-black px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="font-playfair text-5xl md:text-6xl font-bold mb-4">
            <span className="text-gradient">FAQ</span>
          </h2>
          <p className="font-inter text-gray-400 text-lg">
            Common questions answered
          </p>
        </motion.div>

        {/* FAQ Items */}
        <motion.div
          className="space-y-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="card-luxury overflow-hidden"
            >
              <button
                onClick={() =>
                  setExpandedIndex(expandedIndex === idx ? null : idx)
                }
                className="w-full flex items-center justify-between p-6 text-left hover:bg-event-gold/10 transition-colors"
              >
                <h3 className="font-playfair font-bold text-event-gold text-lg">
                  {faq.q}
                </h3>
                <motion.svg
                  className="w-6 h-6 text-event-gold flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  animate={{
                    rotate: expandedIndex === idx ? 180 : 0,
                  }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </motion.svg>
              </button>

              {expandedIndex === idx && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="px-6 pb-6 border-t border-event-gold/20"
                >
                  <p className="font-inter text-gray-400">{faq.a}</p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="mt-12 text-center"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <p className="font-inter text-gray-400 mb-4">
            Didn't find your answer?
          </p>
          <a
            href="https://wa.me/919332345023"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-event-gold text-rich-black font-semibold rounded-lg hover:bg-light-gold transition-colors"
          >
            Chat with us on WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
}
