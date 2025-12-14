'use client';

/**
 * Navigation Bar Component
 */

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { motion } from 'framer-motion';

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'Blog', href: '/blog' },
    { label: 'Venues', href: '/venues' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-gradient-to-b from-rich-black/95 to-rich-black/80 backdrop-blur-md border-b border-event-gold/20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 font-playfair text-2xl font-bold"
          >
            <span className="text-event-gold">✦</span>
            <span className="text-gradient">EVENTARA</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`font-inter text-sm font-medium transition-colors ${
                  pathname === item.href
                    ? 'text-event-gold'
                    : 'text-gray-300 hover:text-event-gold'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <button className="px-6 py-2 bg-event-gold text-rich-black font-semibold rounded-lg hover:bg-light-gold transition-colors">
              Enquire Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-event-gold"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            title="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden pb-4 space-y-2"
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-4 py-2 text-gray-300 hover:text-event-gold transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <button className="w-full px-4 py-2 bg-event-gold text-rich-black font-semibold rounded-lg">
              Enquire Now
            </button>
          </motion.div>
        )}
      </div>
    </nav>
  );
}
