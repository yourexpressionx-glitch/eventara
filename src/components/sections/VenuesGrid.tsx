'use client';

import { motion } from 'framer-motion';

export function VenuesGrid() {
  const venues = [
    {
      name: 'Mountain Vista Resort',
      location: 'Darjeeling',
      capacity: '200-500',
      type: 'Resort',
      features: ['Indoor & Outdoor', 'Restaurant', 'Accommodation'],
    },
    {
      name: 'Golden Horizon Banquet',
      location: 'Siliguri',
      capacity: '100-300',
      type: 'Banquet Hall',
      features: ['Modern Decor', 'Catering', 'Parking'],
    },
    {
      name: 'Lake View Gardens',
      location: 'Mirik',
      capacity: '150-400',
      type: 'Garden Venue',
      features: ['Scenic Location', 'Outdoor Setup', 'Landscape'],
    },
    {
      name: 'Heritage Kalimpong',
      location: 'Kalimpong',
      capacity: '100-250',
      type: 'Heritage Property',
      features: ['Colonial Style', 'Historic', 'Charm'],
    },
    {
      name: 'Gangtok Grand Hall',
      location: 'Gangtok',
      capacity: '200-600',
      type: 'Convention Center',
      features: ['State-of-art', 'Multiple Halls', 'Sound System'],
    },
    {
      name: 'Riverside Pavilion',
      location: 'Kurseong',
      capacity: '80-200',
      type: 'Open Air',
      features: ['Nature View', 'Intimate', 'Scenic'],
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
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {venues.map((venue, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ translateY: -8 }}
              className="card-luxury p-6 hover:border-event-gold/60 transition-colors group"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="font-playfair text-lg font-bold text-event-gold mb-1">
                    {venue.name}
                  </h3>
                  <p className="font-inter text-sm text-gray-400">{venue.location}</p>
                </div>
                <span className="text-3xl">🏛️</span>
              </div>

              <div className="space-y-3 mb-4">
                <div>
                  <p className="font-inter text-xs text-gray-500">Type</p>
                  <p className="font-inter text-sm text-gray-300">{venue.type}</p>
                </div>
                <div>
                  <p className="font-inter text-xs text-gray-500">Capacity</p>
                  <p className="font-inter text-sm text-gray-300">{venue.capacity} guests</p>
                </div>
              </div>

              <div className="space-y-2 mb-4 pt-4 border-t border-event-gold/20">
                {venue.features.map((feature, fidx) => (
                  <div key={fidx} className="flex items-center gap-2">
                    <span className="text-light-gold text-xs">✓</span>
                    <span className="font-inter text-xs text-gray-400">{feature}</span>
                  </div>
                ))}
              </div>

              <button className="w-full py-2 border border-event-gold text-event-gold rounded font-inter text-sm hover:bg-event-gold/10 transition-colors group-hover:bg-event-gold/20">
                View Details
              </button>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="mt-16 card-luxury p-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <h3 className="font-playfair text-2xl font-bold text-event-gold mb-4">
            Can't Find Your Perfect Venue?
          </h3>
          <p className="font-inter text-gray-400 mb-6 max-w-2xl mx-auto">
            We have access to many more premium venues across the region. Contact us
            to discuss your specific requirements.
          </p>
          <a
            href="https://wa.me/919332345023?text=Hi%20Eventara,%20I%20need%20help%20finding%20the%20perfect%20venue%20for%20my%20event."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-event-gold text-rich-black font-semibold rounded-lg hover:bg-light-gold transition-colors"
          >
            Get Venue Recommendations
          </a>
        </motion.div>
      </div>
    </section>
  );
}
