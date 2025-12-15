import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-rich-black text-cream-light flex flex-col items-center justify-center px-4 py-20">
      <div className="text-center max-w-2xl">
        {/* 404 Text */}
        <h1 className="text-8xl md:text-9xl font-bold text-event-gold mb-4">
          404
        </h1>
        <h2 className="text-2xl md:text-3xl font-playfair text-cream-light mb-4">
          Page Not Found
        </h2>

        {/* Description */}
        <p className="text-cream-light/70 text-base md:text-lg max-w-md mx-auto mb-8">
          The page you're looking for doesn't exist or has been moved. Let's get
          you back on track.
        </p>

        {/* Quick Links */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link
            href="/"
            className="px-8 py-3 bg-event-gold text-rich-black font-semibold rounded-lg hover:bg-light-gold transition-colors inline-block"
          >
            Go Home
          </Link>
          <Link
            href="/services"
            className="px-8 py-3 border-2 border-event-gold text-event-gold font-semibold rounded-lg hover:bg-event-gold/10 transition-colors inline-block"
          >
            Browse Services
          </Link>
        </div>

        {/* Popular Links */}
        <div className="text-sm text-cream-light/60">
          <p className="mb-4 font-semibold">Popular Pages:</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/"
              className="text-event-gold hover:text-light-gold transition-colors underline"
            >
              Home
            </Link>
            <span>•</span>
            <Link
              href="/services"
              className="text-event-gold hover:text-light-gold transition-colors underline"
            >
              Services
            </Link>
            <span>•</span>
            <Link
              href="/contact"
              className="text-event-gold hover:text-light-gold transition-colors underline"
            >
              Contact
            </Link>
            <span>•</span>
            <Link
              href="/blog"
              className="text-event-gold hover:text-light-gold transition-colors underline"
            >
              Blog
            </Link>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-event-gold/5 rounded-full blur-3xl opacity-20" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-event-gold/5 rounded-full blur-3xl opacity-20" />
      </div>
    </div>
  );
}

