const WINDOW_MS = 60_000;
const MAX_REQUESTS_PER_WINDOW = 5;

const hits = new Map<string, number[]>();

/**
 * In-memory, single-instance rate limiting. Resets on every server
 * restart and does not share state across multiple server instances or
 * serverless invocations — swap for a shared store (e.g. Upstash Redis)
 * before relying on this in a real multi-instance deployment.
 */
export function isRateLimited(key: string): boolean {
  const now = Date.now();
  const recent = (hits.get(key) ?? []).filter((timestamp) => now - timestamp < WINDOW_MS);
  recent.push(now);
  hits.set(key, recent);
  return recent.length > MAX_REQUESTS_PER_WINDOW;
}
