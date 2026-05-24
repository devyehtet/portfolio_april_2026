type RateLimitEntry = {
  count: number;
  reset: number;
};

const store = new Map<string, RateLimitEntry>();

/**
 * Simple in-memory rate limiter.
 * Returns true if the request is allowed, false if rate limit is exceeded.
 *
 * @param key      - Usually the client IP address
 * @param max      - Maximum requests allowed per window (default: 5)
 * @param windowMs - Time window in milliseconds (default: 60 seconds)
 */
export function checkRateLimit(
  key: string,
  max = 5,
  windowMs = 60_000
): boolean {
  const now = Date.now();
  const entry = store.get(key);

  if (!entry || now > entry.reset) {
    store.set(key, { count: 1, reset: now + windowMs });
    return true;
  }

  if (entry.count >= max) {
    return false;
  }

  entry.count++;
  return true;
}

/**
 * Extract the client IP from a Next.js Request.
 * Handles Vercel / reverse-proxy x-forwarded-for headers.
 */
export function getClientIp(req: Request): string {
  const xff = req.headers.get("x-forwarded-for");
  if (xff) return xff.split(",")[0].trim();

  const realIp = req.headers.get("x-real-ip");
  if (realIp) return realIp.trim();

  return "unknown";
}
