const ITEMS = [
  {
    title: "End-to-end delivery",
    description: "One team, from first sketch to production deploy.",
    icon: (
      <>
        <path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z" />
        <path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65" />
        <path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65" />
      </>
    ),
  },
  {
    title: "AI-native engineering",
    description: "Intelligence built into the product, not bolted on.",
    icon: (
      <>
        <rect width="16" height="16" x="4" y="4" rx="2" />
        <rect width="6" height="6" x="9" y="9" rx="1" />
        <path d="M15 2v2" />
        <path d="M15 20v2" />
        <path d="M2 15h2" />
        <path d="M2 9h2" />
        <path d="M20 15h2" />
        <path d="M20 9h2" />
        <path d="M9 2v2" />
        <path d="M9 20v2" />
      </>
    ),
  },
  {
    title: "Speed without shortcuts",
    description: "Modern stack, tight iteration loops.",
    icon: (
      <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" />
    ),
  },
  {
    title: "Scales with you",
    description: "Architecture built for growth, not just launch.",
    icon: (
      <>
        <path d="M22 7 13.5 15.5 8.5 10.5 2 17" />
        <path d="M16 7h6v6" />
      </>
    ),
  },
];

export default function BuiltDifferent() {
  return (
    <section className="flex flex-col gap-10 border-y border-border bg-background-secondary px-5 py-16 sm:px-6 lg:gap-14 lg:px-24 lg:py-24">
      <div className="flex flex-col gap-5">
        <div className="flex items-center gap-3 font-mono-ui text-[13px] tracking-[0.14em] text-accent-violet-light uppercase">
          <span className="h-px w-7 bg-accent-violet-light opacity-70" />
          <span>Why Softgrid</span>
        </div>
        <h2 className="m-0 text-[32px] leading-[1.1] font-semibold tracking-[-0.03em] text-balance text-foreground lg:text-[56px] lg:leading-[1.04] lg:tracking-[-0.035em]">
          Built different
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
        {ITEMS.map(({ title, description, icon }, index) => (
          <div
            key={title}
            className={`flex flex-col gap-4.5 lg:px-8 lg:first:pl-0 ${
              index > 0 ? "lg:border-l lg:border-border" : ""
            }`}
          >
            <svg
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              className="block shrink-0 text-accent-violet-light"
            >
              {icon}
            </svg>
            <h3 className="m-0 text-[22px] leading-[1.2] font-semibold tracking-[-0.02em] text-foreground">
              {title}
            </h3>
            <p className="m-0 text-base leading-[1.6] text-muted">
              {description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
