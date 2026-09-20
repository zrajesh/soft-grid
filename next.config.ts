import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV !== "production";

const contentSecurityPolicy = [
  "default-src 'self'",
  // Dev only: Next.js dev tooling (Fast Refresh/HMR eval, and inline
  // bootstrap scripts like the one setting self.__next_r for its debug
  // channel) needs both unsafe-eval and unsafe-inline — without them,
  // dev-mode hydration breaks entirely and no client interactivity works.
  // Production builds ship neither and need no such exception.
  isDev
    ? "script-src 'self' 'unsafe-eval' 'unsafe-inline'"
    : "script-src 'self'",
  // style-src allows unsafe-inline: Next.js/Tailwind inject inline <style>
  // tags for font optimization; style injection carries far less XSS risk
  // than script injection, so script-src stays strict with no exceptions.
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob:",
  "font-src 'self'",
  // Dev only: HMR's websocket connection to the dev server.
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
