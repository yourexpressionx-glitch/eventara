/**
 * Utility Functions for Eventara
 */

/**
 * Format location name for display
 */
export function formatLocationName(name: string): string {
  return name.charAt(0).toUpperCase() + name.slice(1);
}

/**
 * Format service name for display
 */
export function formatServiceName(name: string): string {
  return name
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

/**
 * Generate SEO-friendly title
 */
export function generateTitle(
  service: string,
  location: string,
  type: 'short' | 'long' = 'short'
): string {
  if (type === 'short') {
    return `${service} in ${location} | Eventara`;
  }
  return `Luxury ${service} in ${location} | Premium Event Planning | Eventara`;
}

/**
 * Generate SEO-friendly description
 */
export function generateDescription(
  service: string,
  location: string
): string {
  return `Discover premium ${service.toLowerCase()} services in ${location}. Eventara offers luxury event management for weddings, corporate events, and destination experiences in the Darjeeling Corridor. Book your perfect event today.`;
}

/**
 * Encode WhatsApp message
 */
export function encodeWhatsAppMessage(message: string): string {
  return encodeURIComponent(message);
}

/**
 * Get WhatsApp link
 */
export function getWhatsAppLink(phoneNumber: string, message: string): string {
  return `https://wa.me/${phoneNumber}?text=${encodeWhatsAppMessage(message)}`;
}

/**
 * Get color for service category
 */
export function getCategoryColor(category: string): string {
  const colors: Record<string, string> = {
    core: '#D4AF37',
    vernacular: '#F1C40F',
    tech: '#B8860B',
    additional: '#DAA520',
  };
  return colors[category] || '#D4AF37';
}

/**
 * Get rich structured data for location
 */
export function getLocationStructuredData(location: any) {
  return {
    '@type': 'City',
    name: location.name,
    description: location.description,
    geo: {
      '@type': 'GeoCoordinates',
      latitude: location.coordinates.lat,
      longitude: location.coordinates.lng,
    },
    sameAs: location.wikiUrl,
  };
}
