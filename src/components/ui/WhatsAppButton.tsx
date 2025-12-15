'use client';

import { useState, useEffect } from 'react';

/**
 * WhatsApp Contact Button
 * Fixed position button for easy WhatsApp contact
 * Visible on all devices
 */

export function WhatsAppButton() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  const phoneNumber = '919332345023';
  const message = encodeURIComponent(
    "Hi Eventara! I'm interested in planning an event. Can you share your services and packages?"
  );
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-[999] flex items-center justify-center w-16 h-16 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full shadow-2xl hover:shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95"
      title="Chat with us on WhatsApp"
      aria-label="Open WhatsApp chat"
    >
      {/* WhatsApp Icon - Simple and Reliable */}
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="white"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M23.25 12c0 6.213-5.037 11.25-11.25 11.25-2.05 0-3.971-.548-5.637-1.503l-6.363 1.503 1.503-6.363C1.298 15.971.75 14.05.75 12 .75 5.787 5.787.75 12 .75 18.213.75 23.25 5.787 23.25 12zm-11.25-9c-4.966 0-9 4.034-9 9s4.034 9 9 9 9-4.034 9-9-4.034-9-9-9zm4.753 13.534c-.208.32-.635.507-1.09.507-.156 0-.325-.02-.507-.06-.598-.13-1.273-.41-1.878-.89-.988-.757-1.85-1.761-2.5-2.91-.416-.727-.662-1.453-.792-2.14-.13-.688-.156-1.375 0-2.01.13-.66.507-1.247 1.091-1.662.234-.182.481-.26.74-.26.182 0 .351.052.48.157.286.234.378.507.507 1.013.233 1.039.559 2.4 1.247 3.49.27.455.663.89 1.247 1.117.247.078.481.156.714.156.26 0 .507-.078.714-.26.364-.364.507-.91.507-1.364z" />
      </svg>
    </a>
  );
}

