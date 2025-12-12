import type { Metadata } from 'next';
import { Playfair_Display, Inter } from 'next/font/google';
import { Navbar } from '@/components/ui/Navbar';
import { Footer } from '@/components/ui/Footer';
import { OrganizationSchema } from '@/components/seo/ServiceSchema';
import './globals.css';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  weight: ['400', '500', '600', '700', '800', '900'],
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['300', '400', '500', '600', '700'],
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
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} scroll-smooth`}
    >
      <head>
        <meta name="theme-color" content="#0a0a0a" />
        <meta name="color-scheme" content="dark" />
        {/* Canonical URL */}
        <link rel="canonical" href="https://eventaraevents.com" />
        {/* Preconnect to optimize performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Alternate links for SEO */}
        <link rel="alternate" hrefLang="en-IN" href="https://eventaraevents.com" />
        {/* Organization Schema */}
        <OrganizationSchema siteURL="https://eventaraevents.com" />
      </head>
      <body className="bg-rich-black">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
