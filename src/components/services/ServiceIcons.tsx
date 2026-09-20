import type { ReactNode } from "react";

type IconProps = {
  className?: string;
};

function IconBase({
  className,
  children,
}: IconProps & { children: ReactNode }) {
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className ?? "block shrink-0"}
    >
      {children}
    </svg>
  );
}

export function WebIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="M2 9h20" />
      <path d="M6 6.5h.01" />
      <path d="M10 6.5h.01" />
    </IconBase>
  );
}

export function MobileIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <rect width="14" height="20" x="5" y="2" rx="2" />
      <path d="M12 18h.01" />
    </IconBase>
  );
}

export function AiIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M12 8V4H8" />
      <rect width="16" height="12" x="4" y="8" rx="2" />
      <path d="M2 14h2" />
      <path d="M20 14h2" />
      <path d="M15 13v2" />
      <path d="M9 13v2" />
    </IconBase>
  );
}

export function CheckIcon(props: IconProps) {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={props.className ?? "block shrink-0"}
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

export function ArrowIcon(props: IconProps) {
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
      className={props.className ?? "block shrink-0"}
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}
