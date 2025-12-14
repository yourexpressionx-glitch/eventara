'use client';

/**
 * Contact Page Content
 */

import { motion } from 'framer-motion';
import { useState } from 'react';

export function ContactPageContent() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    location: '',
    message: '',
  });

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Track GA4 event
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'form_submit', {
        form_name: 'contact_form',
        event_type: formData.eventType,
        location: formData.location,
        device_type: window.innerWidth < 768 ? 'mobile' : 'desktop',
      });
    }
    // Create WhatsApp message
    const message = `Hi Eventara, I'd like to inquire about ${formData.eventType} in ${formData.location}. Name: ${formData.name}, Email: ${formData.email}, Phone: ${formData.phone}. ${formData.message}`;
    const waLink = `https://wa.me/919332345023?text=${encodeURIComponent(message)}`;
    window.open(waLink, '_blank');
  };

  return (
    <div className="pt-20 pb-20">
      {/* Hero */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-rich-black via-burgundy-dark to-rich-black px-3 sm:px-4 md:px-8">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            variants={itemVariants}
            className="font-playfair text-4xl sm:text-5xl md:text-7xl font-bold mb-6"
          >
            <span className="text-gradient">Let's Create Magic</span>
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="font-inter text-sm sm:text-base md:text-lg text-cream-light/70"
          >
            Reach out to our team and let's discuss your event vision
          </motion.p>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section className="py-12 sm:py-16 md:py-20 px-3 sm:px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Contact Info */}
            <motion.div
              variants={itemVariants}
              className="space-y-8"
            >
              <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-event-gold">
                Get In Touch
              </h2>

              {[
                {
                  icon: '📱',
                  title: 'WhatsApp',
                  value: '+91 93323 45023',
                  href: 'https://wa.me/919332345023',
                },
                {
                  icon: '📧',
                  title: 'Email',
                  value: 'info@eventara.com',
                  href: 'mailto:info@eventara.com',
                },
                {
                  icon: '☎️',
                  title: 'Phone',
                  value: '+91 93323 45023',
                  href: 'tel:+919332345023',
                },
                {
                  icon: '📍',
                  title: 'Service Area',
                  value: 'Darjeeling Corridor & NE India',
                  href: '#',
                },
              ].map((contact, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="space-y-2"
                >
                  <div className="text-3xl">{contact.icon}</div>
                  <h3 className="font-playfair text-xl font-bold text-event-gold">
                    {contact.title}
                  </h3>
                  {contact.href.startsWith('#') ? (
                    <p className="font-inter text-cream-light/90">{contact.value}</p>
                  ) : (
                    <a
                      href={contact.href}
                      target={contact.href.startsWith('http') ? '_blank' : '_self'}
                      rel={contact.href.startsWith('http') ? 'noopener noreferrer' : ''}
                      className="font-inter text-cream-light/90 hover:text-light-gold transition-colors"
                    >
                      {contact.value}
                    </a>
                  )}
                </motion.div>
              ))}
            </motion.div>

            {/* Contact Form */}
            <motion.div
              variants={itemVariants}
              className="card-luxury p-8"
            >
              <h3 className="font-playfair text-2xl font-bold text-event-gold mb-6">
                Quick Enquiry
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block font-inter text-sm text-cream-light/90 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full bg-rich-black border border-event-gold/30 rounded-lg px-4 py-3 font-inter text-cream-light focus:outline-none focus:border-event-gold transition-colors"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block font-inter text-sm text-cream-light/90 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full bg-rich-black border border-event-gold/30 rounded-lg px-4 py-3 font-inter text-cream-light focus:outline-none focus:border-event-gold transition-colors"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block font-inter text-sm text-cream-light/90 mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="w-full bg-rich-black border border-event-gold/30 rounded-lg px-4 py-3 font-inter text-cream-light focus:outline-none focus:border-event-gold transition-colors"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>

                <div>
                  <label className="block font-inter text-sm text-cream-light/90 mb-2" htmlFor="event-type">
                    Event Type
                  </label>
                  <select
                    id="event-type"
                    required
                    value={formData.eventType}
                    onChange={(e) =>
                      setFormData({ ...formData, eventType: e.target.value })
                    }
                    className="w-full bg-rich-black border border-event-gold/30 rounded-lg px-4 py-3 font-inter text-cream-light focus:outline-none focus:border-event-gold transition-colors"
                    aria-label="Event type"
                  >
                    <option value="">Select event type</option>
                    <option value="Wedding">Wedding</option>
                    <option value="Corporate Event">Corporate Event</option>
                    <option value="Destination Tour">Destination Tour</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block font-inter text-sm text-cream-light/90 mb-2" htmlFor="location">
                    Location
                  </label>
                  <select
                    id="location"
                    required
                    value={formData.location}
                    onChange={(e) =>
                      setFormData({ ...formData, location: e.target.value })
                    }
                    className="w-full bg-rich-black border border-event-gold/30 rounded-lg px-4 py-3 font-inter text-cream-light focus:outline-none focus:border-event-gold transition-colors"
                    aria-label="Location"
                  >
                    <option value="">Select location</option>
                    <option value="Siliguri">Siliguri</option>
                    <option value="Darjeeling">Darjeeling</option>
                    <option value="Gangtok">Gangtok</option>
                    <option value="Kalimpong">Kalimpong</option>
                    <option value="Kurseong">Kurseong</option>
                    <option value="Bagdogra">Bagdogra</option>
                    <option value="Mirik">Mirik</option>
                  </select>
                </div>

                <div>
                  <label className="block font-inter text-sm text-cream-light/90 mb-2">
                    Message
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full bg-rich-black border border-event-gold/30 rounded-lg px-4 py-3 font-inter text-cream-light focus:outline-none focus:border-event-gold transition-colors resize-none h-24"
                    placeholder="Tell us about your event..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-event-gold text-rich-black font-playfair font-bold py-3 rounded-lg hover:bg-light-gold transition-colors"
                >
                  Send via WhatsApp
                </button>
              </form>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
