import ValueCard from "@/components/about/ValueCard";

const VALUES = [
  {
    title: "Ship fast, ship right",
    description: "A modern stack and tight iteration loops — without the shortcuts.",
    accent: "violet" as const,
    icon: (
      <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" />
    ),
  },
  {
    title: "AI-native thinking",
    description: "Intelligence is designed into the product from day one, not bolted on.",
    accent: "cyan" as const,
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
    title: "Transparent process",
    description: "Regular check-ins and clear milestones. No black boxes, no surprises.",
    accent: "violet" as const,
    icon: (
      <>
        <path d="M2.06 12.35a1 1 0 0 1 0-.7 10.75 10.75 0 0 1 19.88 0 1 1 0 0 1 0 .7 10.75 10.75 0 0 1-19.88 0" />
        <circle cx="12" cy="12" r="3" />
      </>
    ),
  },
  {
    title: "Built for scale",
    description: "Architecture that grows with your users, not just your launch.",
    accent: "violet" as const,
    icon: (
      <>
        <path d="M22 7 13.5 15.5 8.5 10.5 2 17" />
        <path d="M16 7h6v6" />
      </>
    ),
  },
];

export default function Values() {
  return (
    <section className="flex flex-col gap-10 border-b border-border bg-background-secondary px-5 py-16 sm:px-6 lg:gap-14 lg:px-24 lg:py-24">
      <div className="flex flex-col gap-5">
        <div className="flex items-center gap-3 font-mono-ui text-[13px] tracking-[0.14em] text-accent-violet-light uppercase">
          <span className="h-px w-7 bg-accent-violet-light opacity-70" />
          <span>Values</span>
        </div>
        <h2 className="m-0 text-[32px] leading-[1.1] font-semibold tracking-[-0.03em] text-balance text-foreground lg:text-[56px] lg:leading-[1.04] lg:tracking-[-0.035em]">
          How we think
        </h2>
      </div>
      <div className="grid grid-cols-2 gap-5 sm:gap-6 lg:grid-cols-4 lg:gap-6">
        {VALUES.map(({ title, description, accent, icon }) => (
          <ValueCard
            key={title}
            title={title}
            description={description}
            accent={accent}
            icon={icon}
          />
        ))}
      </div>
    </section>
  );
}
