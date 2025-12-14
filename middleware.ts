import { NextResponse } from 'next/server';

// Security headers are now set via next.config.js headers configuration
// Middleware disabled due to Edge Runtime limitations causing MIDDLEWARE_INVOCATION_FAILED errors
// on some deployments. Headers are configured at build time instead.

export function middleware() {
  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - api (API routes)
     */
    '/((?!_next/static|_next/image|favicon.ico|api).*)',
  ],
};

