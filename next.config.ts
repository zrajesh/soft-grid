import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV !== "production";

// A per-request CSP nonce (via middleware) is the "ideal" way to allow
// Next.js's own inline hydration/RSC bootstrap scripts, but it forces every
// route into dynamic (server-rendered on demand) instead of static
// generation — a real cost for a marketing site that should stay fully
// static per this project's own rendering-strategy guidance. Given this
// site has no dangerouslySetInnerHTML, no user-rendered HTML, and no auth,
// the safer trade for a static site is: allow inline scripts (still
// same-origin only — 'unsafe-inline' does NOT allow loading scripts from
// other domains) rather than pay for dynamic rendering everywhere.
const contentSecurityPolicy = [
  "default-src 'self'",
  isDev
    ? "script-src 'self' 'unsafe-inline' 'unsafe-eval'"
    : "script-src 'self' 'unsafe-inline'",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob:",
  "font-src 'self'",
  isDev ? "connect-src 'self' ws:" : "connect-src 'self'",
  "frame-ancestors 'none'",
  "base-uri 'self'",
  "form-action 'self'",
].join("; ");

const securityHeaders = [
  { key: "Content-Security-Policy", value: contentSecurityPolicy },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()",
  },
];

const nextConfig: NextConfig = {
  // Next.js 16 removed next.config's built-in eslint-during-build
  // integration entirely (`next build` never runs lint), so
  // eslint-plugin-frontend-axiom (vendored under vendor/) is already
  // excluded from production builds — it only runs via `npm run lint`.
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
