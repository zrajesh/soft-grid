import Link from "next/link";
import type { ReactNode } from "react";

type ButtonVariant = "primary" | "secondary";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  size?: "md" | "lg";
  className?: string;
  showArrow?: boolean;
};

const VARIANT_CLASSES: Record<ButtonVariant, string> = {
  primary:
    "bg-linear-to-br from-cta-from to-cta-to text-white shadow-[inset_0_0_0_1px_rgba(255,255,255,0.18),0_10px_36px_rgba(124,92,255,0.45),0_0_72px_rgba(34,211,238,0.14)]",
  secondary:
    "border border-white/18 bg-white/3 text-foreground",
};

const SIZE_CLASSES: Record<NonNullable<ButtonProps["size"]>, string> = {
  md: "h-11 px-[22px] text-[15px]",
  lg: "h-13 px-7 text-base",
};

function ArrowIcon() {
  return (
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
      className="block shrink-0"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

export default function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  className = "",
  showArrow = false,
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center gap-2.5 rounded-full font-medium tracking-[-0.01em] ${VARIANT_CLASSES[variant]} ${SIZE_CLASSES[size]} ${className}`}
    >
      {children}
      {showArrow ? <ArrowIcon /> : null}
    </Link>
  );
}
