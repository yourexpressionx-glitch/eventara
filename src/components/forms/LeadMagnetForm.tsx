'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

interface LeadMagnetFormProps {
  magnet: 'checklist' | 'budget' | 'calculator';
  onSubmit: (data: { email: string; phone: string; name: string }) => void;
  isLoading?: boolean;
}

export function LeadMagnetForm({ magnet, onSubmit, isLoading = false }: LeadMagnetFormProps) {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });
  const [submitted, setSubmitted] = useState(false);

  const magnetTitle = {
    checklist: 'Download Your Wedding Planning Checklist',
    budget: 'Get Your Budget Planning Guide',
    calculator: 'Access Wedding Cost Calculator',
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.phone) {
      onSubmit(formData);
      setSubmitted(true);
      setTimeout(() => {
        setFormData({ name: '', email: '', phone: '' });
        setSubmitted(false);
      }, 3000);
    }
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center py-8"
      >
        <div className="text-5xl mb-4">✓</div>
        <h3 className="text-xl font-playfair font-bold text-event-gold mb-2">
          Thank You!
        </h3>
        <p className="text-cream-light/80">
          Check your email for your {magnetTitle[magnet].toLowerCase()}. Our team will also contact you soon!
        </p>
      </motion.div>
    );
  }

  return (
    <motion.form
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      onSubmit={handleSubmit}
      className="space-y-4"
    >
      <div>
        <label htmlFor="name" className="block text-sm font-semibold text-cream-light mb-2">
          Full Name *
        </label>
        <input
          type="text"
          id="name"
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full px-4 py-3 bg-rich-black border border-event-gold/30 rounded-lg text-cream-light placeholder-cream-light/50 focus:outline-none focus:border-event-gold focus:ring-2 focus:ring-event-gold/20"
          placeholder="Your name"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-semibold text-cream-light mb-2">
          Email Address *
        </label>
        <input
          type="email"
          id="email"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full px-4 py-3 bg-rich-black border border-event-gold/30 rounded-lg text-cream-light placeholder-cream-light/50 focus:outline-none focus:border-event-gold focus:ring-2 focus:ring-event-gold/20"
          placeholder="your.email@example.com"
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-semibold text-cream-light mb-2">
          Phone Number *
        </label>
        <input
          type="tel"
          id="phone"
          required
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          className="w-full px-4 py-3 bg-rich-black border border-event-gold/30 rounded-lg text-cream-light placeholder-cream-light/50 focus:outline-none focus:border-event-gold focus:ring-2 focus:ring-event-gold/20"
          placeholder="+91 9876543210"
        />
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed font-playfair text-lg"
      >
        {isLoading ? 'Processing...' : `Get ${magnetTitle[magnet].split(' ').pop()}`}
      </button>

      <p className="text-xs text-cream-light/60 text-center">
        We'll send your {magnetTitle[magnet].toLowerCase()} and contact you with personalized event planning assistance.
      </p>
    </motion.form>
  );
}
