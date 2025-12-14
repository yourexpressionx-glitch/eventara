module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Dark mode palette (Maroon/Wine theme)
        'maroon': {
          950: '#3A0D16', // Primary dark background
          900: '#4D0F1D', // Secondary dark background
          800: '#55141F', // Card/panel background
          700: '#6E1425', // Headings in light mode
        },
        // Light mode palette (NEW - Champagne/Peach theme)
        'champagne': {
          50: '#FFF9F0',  // Primary light background
          100: '#FFFCF6', // Card background
          200: '#FCE7D8', // Secondary light background
        },
        // Light mode text colors
        'espresso': {
          900: '#4A2C2A', // Heading text (dark mode)
          800: '#6B4F4F', // Body text
        },
        'coral': {
          600: '#E65F50', // Highlight/CTA color
        },
        // Legacy colors (kept for compatibility)
        'rich-black': '#3A0D16', // Updated to maroon
        'event-gold': '#D4AF37',
        'light-gold': '#F1C40F',
        'subtle-gold': '#C9A86A',
        // Dark mode text palette (Cream tones)
        'cream': {
          50: '#FFFCF6',   // Brightest (headings)
          300: '#EBDDD0',  // Light text (body)
        },
      },
      fontFamily: {
        playfair: ['var(--font-playfair)', 'serif'],
        inter: ['var(--font-inter)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
