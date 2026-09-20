import Link from "next/link";
import Logo from "@/components/Logo";
import SocialLinks from "@/components/SocialLinks";
import { NAV_LINKS } from "@/lib/navigation";

const SERVICE_LINKS = [
  { label: "Web App Development", href: "/services" },
  { label: "Mobile App Development", href: "/services" },
  { label: "Agentic AI Solutions", href: "/services" },
];

function ColumnHeading({ children }: { children: string }) {
  return (
    <div className="mb-1.5 font-mono-ui text-xs tracking-[0.14em] text-muted-dim uppercase">
      {children}
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background px-5 pt-16 pb-8 sm:px-6 lg:px-24 lg:pt-22">
      <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.2fr] lg:gap-12">
        <div className="flex flex-col gap-4">
          <Logo />
          <p className="max-w-70 text-[15px] leading-[1.55] text-muted">
            We Build Software That Thinks.
          </p>
        </div>

        <div className="flex flex-col gap-3.5">
          <ColumnHeading>Navigate</ColumnHeading>
          {NAV_LINKS.map(({ label, href }) => (
            <Link key={href} href={href} className="block text-base text-muted">
              {label}
            </Link>
          ))}
        </div>

        <div className="flex flex-col gap-3.5">
          <ColumnHeading>Services</ColumnHeading>
          {SERVICE_LINKS.map(({ label, href }, index) => (
            <Link
              key={`${href}-${index}`}
              href={href}
              className="block text-base text-muted"
            >
              {label}
            </Link>
          ))}
        </div>

        <div className="flex flex-col gap-3.5">
          <ColumnHeading>Contact</ColumnHeading>
          <div className="flex items-center gap-3 text-[15px] text-muted">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              className="block shrink-0 text-accent-violet-light"
            >
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
            hello@softgrid.example
          </div>
          <div className="flex items-center gap-3 text-[15px] text-muted">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              className="block shrink-0 text-accent-violet-light"
            >
              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            Remote / Global
          </div>
          <div className="mt-1.5">
            <SocialLinks />
          </div>
        </div>
      </div>

      <div className="mt-16 flex h-21 items-center border-t border-border text-sm text-muted-dim lg:mt-12">
        © 2026 Softgrid. All rights reserved.
      </div>
    </footer>
  );
}
