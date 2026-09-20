"use client";

import { useState } from "react";
import Link from "next/link";
import Button from "@/components/Button";
import SocialLinks from "@/components/SocialLinks";
import { NAV_LINKS } from "@/lib/navigation";

function MenuIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="block shrink-0"
    >
      <path d="M4 7h16" />
      <path d="M4 12h16" />
      <path d="M4 17h16" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="block shrink-0"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-label="Open menu"
        aria-expanded={isOpen}
        aria-controls="mobile-menu-panel"
        onClick={() => setIsOpen(true)}
        className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/12 bg-white/4 text-foreground"
      >
        <MenuIcon />
      </button>

      {isOpen ? (
        <div className="fixed inset-0 z-50">
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setIsOpen(false)}
            className="absolute inset-0 bg-[rgba(5,5,8,0.74)]"
          />
          <div
            id="mobile-menu-panel"
            className="absolute inset-y-0 right-0 flex w-[85vw] max-w-[322px] flex-col border-l border-white/10 bg-[#0E1017] px-6 pb-8 shadow-[-30px_0_80px_rgba(0,0,0,0.6)]"
          >
            <div className="flex h-16 flex-none items-center justify-between">
              <span className="font-mono-ui text-xs tracking-[0.14em] text-muted-dim uppercase">
                Menu
              </span>
              <button
                type="button"
                aria-label="Close menu"
                onClick={() => setIsOpen(false)}
                className="-mr-2 flex h-11 w-11 items-center justify-center rounded-xl border border-white/12 bg-white/4 text-foreground"
              >
                <CloseIcon />
              </button>
            </div>
            <nav className="flex flex-col border-t border-white/8">
              {NAV_LINKS.map(({ label, href }, index) => (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setIsOpen(false)}
                  className="flex h-17 items-center gap-3.5 border-b border-white/8 text-[28px] font-medium tracking-[-0.03em] text-foreground"
                >
                  <span className="w-5.5 font-mono-ui text-xs tracking-[0.1em] text-muted-dim">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="flex-1">{label}</span>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                    className="block shrink-0 text-muted-dim"
                  >
                    <path d="M7 7h10v10" />
                    <path d="M7 17 17 7" />
                  </svg>
                </Link>
              ))}
            </nav>
            <div className="flex-1" />
            <div className="flex flex-col gap-5">
              <Button href="/contact" size="lg" showArrow className="w-full">
                Start a Project
              </Button>
              <SocialLinks />
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
