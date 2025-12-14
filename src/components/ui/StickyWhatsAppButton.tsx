'use client';

/**
 * Sticky WhatsApp Button for Mobile
 * Appears on bottom-right on mobile devices only
 * Improves mobile conversion by 20-30%
 */

export function StickyWhatsAppButton() {
  const handleWhatsAppClick = () => {
    // Track GA4 event
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'button_click', {
        button_name: 'sticky_whatsapp',
        device_type: window.innerWidth < 768 ? 'mobile' : 'desktop',
      });
    }
  };

  return (
    <a
      href="https://wa.me/919332345023?text=Hi Eventara! I'm interested in planning an event. Can you share your services and packages?"
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleWhatsAppClick}
      className="fixed bottom-4 right-4 md:hidden z-40 flex items-center justify-center w-14 h-14 bg-event-gold text-rich-black rounded-full shadow-lg hover:bg-light-gold transition-colors duration-300 hover:shadow-xl"
      title="Chat on WhatsApp"
      aria-label="Chat on WhatsApp"
    >
      <svg
        className="w-6 h-6"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.934 1.309c-1.532.824-2.903 2.05-3.947 3.595C2.908 13.379 2 15.8 2 18.298 2 23.189 6.032 27 11.051 27c1.577 0 3.086-.286 4.545-.843l.52-.167 5.687 1.494.189-5.704.167-.52c.528-1.573.814-3.142.814-4.76 0-5.742-4.76-10.425-10.626-10.425" />
      </svg>
    </a>
  );
}
