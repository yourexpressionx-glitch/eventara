import type { Metadata } from 'next';
import { Playfair_Display, Inter } from 'next/font/google';
import Script from 'next/script';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/next';
import { Navbar } from '@/components/ui/Navbar';
import { Footer } from '@/components/ui/Footer';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';
import { ServiceWorkerRegistry } from '@/components/ui/ServiceWorkerRegistry';
import { OrganizationSchema } from '@/components/seo/ServiceSchema';
import { EventManagementCompanySchema } from '@/components/seo/EventManagementCompanySchema';
import './globals.css';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  weight: ['400', '500', '600', '700', '800', '900'],
  display: 'swap',
  preload: true,
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  preload: true,
});

export const metadata: Metadata = {
  title: {
    default: 'Eventara | Luxury Event Management in Darjeeling & Siliguri',
    template: '%s | Eventara',
  },
  description:
    'Luxury event management platform serving Siliguri Corridor and Darjeeling Himalayan region. Weddings, corporate events, destination management.',
  keywords: [
    'event management',
    'wedding planner',
    'Darjeeling',
    'Siliguri',
    'luxury events',
    'destination wedding',
  ],
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
    'max-snippet': -1,
    'max-video-preview': -1,
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://eventara.com',
    siteName: 'Eventara',
    title: 'Eventara | Luxury Event Management',
    description: 'Premium event planning and management services',
  },
  twitter: {
    card: 'summary_large_image',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Register service worker for caching
  if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/sw.js').catch(() => {
        // Service worker registration failed, continue without offline support
      });
    });
  }

  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} scroll-smooth`}
    >
      <head>
        {/* Preconnect to external domains for faster DNS resolution */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        
        {/* Favicon & Manifest */}
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="manifest" href="/manifest.json" />
        {/* Apple touch icon - uses SVG fallback (modern devices support SVG) */}
        <link rel="apple-touch-icon" href="/favicon.svg" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" sizes="any" />
        
        {/* Preload critical fonts to reduce CLS and FCP */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Theme color - supported by Chrome, Safari, Edge; Firefox ignores it */}
        <meta name="theme-color" content="#0a0a0a" media="(prefers-color-scheme: dark)" />
        <meta name="theme-color" content="#D4AF37" media="(prefers-color-scheme: light)" />
        <meta name="color-scheme" content="dark" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://eventaraevents.com" />
        
        {/* DNS Prefetch for faster third-party requests */}
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        
        {/* Alternate links for SEO */}
        <link rel="alternate" hrefLang="en-IN" href="https://eventaraevents.com" />
        
        {/* Security and Performance Headers */}
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        
        {/* Organization Schema & Event Management Schema */}
        <OrganizationSchema siteURL="https://eventaraevents.com" />
        <EventManagementCompanySchema />
        
        {/* Google Analytics - Optimized for performance */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
          strategy="afterInteractive"
          async
        />
        <Script
          id="ga-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'GA_MEASUREMENT_ID', {
                page_path: window.location.pathname,
                anonymize_ip: true,
              });
            `,
          }}
        />
      </head>
      <body className="bg-rich-black text-cream-light">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
        <ServiceWorkerRegistry />
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
