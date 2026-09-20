import type { ReactNode } from "react";

type ValueCardProps = {
  title: string;
  description: string;
  accent: "violet" | "cyan";
  icon: ReactNode;
};

const ACCENT_CLASSES: Record<ValueCardProps["accent"], string> = {
  violet:
    "text-accent-violet-light bg-[linear-gradient(145deg,rgba(124,92,255,0.22),rgba(124,92,255,0.06))] border-[rgba(124,92,255,0.35)] shadow-[0_0_32px_rgba(124,92,255,0.18)]",
  cyan: "text-accent-cyan bg-[linear-gradient(145deg,rgba(34,211,238,0.22),rgba(34,211,238,0.06))] border-[rgba(34,211,238,0.35)] shadow-[0_0_32px_rgba(34,211,238,0.18)]",
};

export default function ValueCard({
  title,
  description,
  accent,
  icon,
}: ValueCardProps) {
  return (
    <div className="flex h-[260px] flex-col rounded-[24px] border border-white/9 bg-[linear-gradient(180deg,rgba(255,255,255,0.06)0%,rgba(255,255,255,0.02)100%)] p-6 backdrop-blur-[14px] lg:h-[300px] lg:p-8">
      <div
        className={`flex h-[52px] w-[52px] flex-none items-center justify-center rounded-[15px] border ${ACCENT_CLASSES[accent]}`}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          className="block shrink-0"
        >
          {icon}
        </svg>
      </div>
      <div className="flex-1" />
      <h3 className="m-0 mb-2.5 text-[22px] leading-[1.2] font-semibold tracking-[-0.02em] text-foreground">
        {title}
      </h3>
      <p className="m-0 text-base leading-[1.6] text-muted">{description}</p>
    </div>
  );
}
