'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LeadMagnetForm } from './LeadMagnetForm';

interface LeadMagnetModalProps {
  magnet: 'checklist' | 'budget' | 'calculator';
  isOpen: boolean;
  onClose: () => void;
  onSubmit?: (data: { email: string; phone: string; name: string }) => void;
}

const magnetData = {
  checklist: {
    title: 'Wedding Planning Checklist',
    description:
      'Get a complete, detailed checklist with 50+ essential items to ensure you don\'t miss anything for your perfect wedding day.',
    icon: '✓',
    color: 'from-event-gold to-light-gold',
    highlights: [
      '50+ planning items',
      'Timeline breakdown',
      'Budget allocation guide',
      'Vendor checklist',
      'Day-of checklist',
    ],
  },
  budget: {
    title: 'Wedding Budget Planner',
    description:
      'Step-by-step guide to plan, allocate, and manage your wedding budget across all categories.',
    icon: '₹',
    color: 'from-event-gold to-light-gold',
    highlights: [
      'Budget templates',
      'Category breakdown',
      'Cost estimation',
      'Savings tips',
      'Payment timeline',
    ],
  },
  calculator: {
    title: 'Wedding Cost Calculator',
    description:
      'Instantly calculate estimated wedding costs based on your preferences, guest count, and service selections.',
    icon: '🧮',
    color: 'from-event-gold to-light-gold',
    highlights: [
      'Instant calculations',
      'Guest count analysis',
      'Service type pricing',
      'Regional cost comparison',
      'Export reports',
    ],
  },
};

export function LeadMagnetModal({
  magnet,
  isOpen,
  onClose,
  onSubmit,
}: LeadMagnetModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const data = magnetData[magnet];

  const handleSubmit = async (formData: {
    email: string;
    phone: string;
    name: string;
  }) => {
    setIsSubmitting(true);
    try {
      if (onSubmit) {
        onSubmit(formData);
      } else {
        // Default handling - send to WhatsApp
        const message = `Hi! I'm ${formData.name}. I'd like to download the ${data.title}. Email: ${formData.email}, Phone: ${formData.phone}`;
        const whatsappUrl = `https://wa.me/919332345023?text=${encodeURIComponent(
          message
        )}`;
        window.open(whatsappUrl, '_blank');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-md mx-4"
          >
            <div className="bg-gradient-to-br from-rich-black to-burgundy-dark border border-event-gold/30 rounded-xl shadow-2xl overflow-hidden">
              {/* Header */}
              <div className={`bg-gradient-to-r ${data.color} p-6 relative`}>
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 text-rich-black hover:scale-110 transition-transform"
                >
                  ✕
                </button>
                <div className="text-4xl mb-3">{data.icon}</div>
                <h2 className="text-2xl font-playfair font-bold text-rich-black">
                  {data.title}
                </h2>
                <p className="text-rich-black/80 text-sm mt-2">{data.description}</p>
              </div>

              {/* Highlights */}
              <div className="px-6 py-4 border-b border-event-gold/20">
                <p className="text-xs text-cream-light/60 mb-3 font-semibold">
                  WHAT YOU'LL GET:
                </p>
                <ul className="space-y-2">
                  {data.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-center text-sm text-cream-light">
                      <span className="text-event-gold mr-2">✓</span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Form */}
              <div className="p-6">
                <LeadMagnetForm
                  magnet={magnet}
                  onSubmit={handleSubmit}
                  isLoading={isSubmitting}
                />
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
