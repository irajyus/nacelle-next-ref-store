import { NextRequest, NextResponse } from 'next/server';

const COOKIE_NAME = 'variant';

// Choose a random variant
const VARIANT_BUCKETS = ['alonso-shoes', 'alonso-shoes-variant'] as const;
const getVariant = () =>
  VARIANT_BUCKETS[Math.floor(Math.random() * VARIANT_BUCKETS.length)];

export function middleware(req: NextRequest) {
  // If the request is not for `/pages/flex-disc`, continue
  if (req.nextUrl.pathname !== '/products/alonso-shoes')
    return NextResponse.next();

  // Get the variant cookie
  const variant = req.cookies[COOKIE_NAME] || getVariant();
  // Proxy to the appropriate variant
  const res = NextResponse.rewrite(`http://localhost:3000/products/${variant}`);

  // Add the bucket to cookies if it's not there
  if (!req.cookies[COOKIE_NAME]) {
    res.cookie(COOKIE_NAME, variant);
  }

  return res;
}
