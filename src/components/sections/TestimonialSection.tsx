'use client';

/**
 * Testimonial Section
 */

import { motion } from 'framer-motion';

export function TestimonialSection() {
  const testimonials = [
    {
      name: 'Priya & Arjun',
      event: 'Destination Wedding',
      location: 'Darjeeling',
      quote:
        'Eventara turned our Darjeeling wedding into a magical experience. From pandal decoration to catering, every detail was perfection.',
      rating: 5,
    },
    {
      name: 'Anurag Sharma',
      event: 'Corporate Summit',
      location: 'Siliguri',
      quote:
        'Professional, reliable, and incredibly creative. They handled our 500-person corporate event seamlessly.',
      rating: 5,
    },
    {
      name: 'Meera & Rohan',
      event: 'Pre-Wedding Shoot',
      location: 'Mirik',
      quote:
        'The location coordination and vendor management was outstanding. Our pre-wedding photos are breathtaking!',
      rating: 5,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    <section className="py-20 bg-rich-black px-4 md:px-8">
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
            Loved by <span className="text-gradient">Our Clients</span>
          </h2>
          <p className="font-inter text-gray-400 text-lg">
            Real stories from real events
          </p>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          className="grid md:grid-cols-3 gap-8"
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
                  <span key={i} className="text-event-gold">
                    ★
                  </span>
                ))}
              </div>
              <p className="font-inter text-gray-300 mb-6 italic">
                "{testimonial.quote}"
              </p>
              <div>
                <p className="font-playfair font-bold text-event-gold">
                  {testimonial.name}
                </p>
                <p className="font-inter text-sm text-gray-400">
                  {testimonial.event} • {testimonial.location}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
