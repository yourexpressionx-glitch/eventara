'use client';

/**
 * Location Testimonials Section
 * Social proof from clients in this location
 */

import { motion } from 'framer-motion';
import { LOCATIONS } from '@/lib/constants';

interface LocationTestimonialsProps {
  location: (typeof LOCATIONS)[0];
}

export function LocationTestimonials({ location }: LocationTestimonialsProps) {
  const testimonials = [
    {
      name: 'Priya & Rahul',
      event: 'Destination Wedding',
      quote: `Eventara made our ${location.name} wedding absolutely perfect. Every detail was flawless!`,
      rating: 5,
    },
    {
      name: 'Arjun Singh',
      event: 'Corporate Conference',
      quote: `Professional, reliable, and incredibly creative. They handled everything seamlessly in ${location.name}.`,
      rating: 5,
    },
    {
      name: 'Meera & Rohan',
      event: 'Anniversary Celebration',
      quote: `The venue coordination and vendor management in ${location.name} was outstanding. Highly recommended!`,
      rating: 5,
    },
  ];

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
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-rich-black via-burgundy-dark/30 to-rich-black px-3 sm:px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="font-playfair text-5xl md:text-6xl font-bold mb-4">
            Loved by Clients in <span className="text-gradient">{location.name}</span>
          </h2>
          <p className="font-inter text-cream-light/70 text-lg">
            Real stories from real events in {location.name}
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="card-luxury p-8"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-event-gold text-lg">
                    ★
                  </span>
                ))}
              </div>
              <p className="font-inter text-cream-light/90 mb-6 italic">
                "{testimonial.quote}"
              </p>
              <div>
                <p className="font-playfair font-bold text-event-gold">
                  {testimonial.name}
                </p>
                <p className="font-inter text-sm text-cream-light/70">
                  {testimonial.event}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
