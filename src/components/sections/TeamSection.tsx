'use client';

import { motion } from 'framer-motion';

export function TeamSection() {
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

  const team = [
    {
      name: 'Priya Sharma',
      role: 'Founder & Creative Director',
      bio: 'Visionary event designer with 15+ years in luxury events',
    },
    {
      name: 'Aniket Kumar',
      role: 'Operations Manager',
      bio: 'Expert logistics coordinator for destination events',
    },
    {
      name: 'Meera Patel',
      role: 'Event Planning Lead',
      bio: 'Specializes in wedding planning and coordination',
    },
    {
      name: 'Rohit Singh',
      role: 'Decoration & Design Head',
      bio: 'Award-winning décor specialist and theme designer',
    },
  ];

  return (
    <section className="py-20 bg-rich-black px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="font-playfair text-5xl font-bold mb-4">
            Meet Our <span className="text-gradient">Expert Team</span>
          </h2>
          <p className="font-inter text-gray-400 text-lg">
            Dedicated professionals committed to excellence
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {team.map((member, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="card-luxury p-6 text-center hover:border-event-gold/60 transition-colors"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-event-gold to-light-gold rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-3xl">👤</span>
              </div>
              <h3 className="font-playfair text-lg font-bold text-event-gold mb-1">
                {member.name}
              </h3>
              <p className="font-inter text-sm text-light-gold mb-3">
                {member.role}
              </p>
              <p className="font-inter text-xs text-gray-400">{member.bio}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
