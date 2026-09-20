import Link from "next/link";

const SERVICES = [
  {
    number: "01",
    title: "Web App Development",
    description:
      "Fast, scalable, production-grade web applications — from MVP to enterprise scale.",
    icon: (
      <>
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="M2 9h20" />
        <path d="M6 6.5h.01" />
        <path d="M10 6.5h.01" />
      </>
    ),
  },
  {
    number: "02",
    title: "Mobile App Development",
    description:
      "Native and cross-platform apps that feel fast, look sharp, and ship on schedule.",
    icon: (
      <>
        <rect width="14" height="20" x="5" y="2" rx="2" />
        <path d="M12 18h.01" />
      </>
    ),
  },
  {
    number: "03",
    title: "Agentic AI Solutions",
    description:
      "AI agents and intelligent automation that do real work — not just chatbots.",
    icon: (
      <>
        <path d="M12 3v3" />
        <path d="M12 18v3" />
        <path d="M3 12h3" />
        <path d="M18 12h3" />
        <circle cx="12" cy="12" r="4" />
      </>
    ),
  },
];

export default function ServicesOverview() {
  return (
    <section className="flex flex-col gap-10 px-5 py-16 sm:px-6 lg:gap-14 lg:px-24 lg:py-24">
      <div className="flex items-end justify-between">
        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-3 font-mono-ui text-[13px] tracking-[0.14em] text-accent-violet-light uppercase">
            <span className="h-px w-7 bg-accent-violet-light opacity-70" />
            <span>Services</span>
          </div>
          <h2 className="m-0 text-[32px] leading-[1.1] font-semibold tracking-[-0.03em] text-balance text-foreground lg:text-[56px] lg:leading-[1.04] lg:tracking-[-0.035em]">
            What we build
          </h2>
        </div>
        <Link
          href="/services"
          className="hidden min-h-11 items-center gap-2 text-base font-medium text-accent-violet-light lg:inline-flex"
        >
          All services
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
        {SERVICES.map(({ number, title, description, icon }) => (
          <Link
            key={number}
            href="/services"
            className="relative flex h-auto min-h-70 flex-col overflow-hidden rounded-3xl border border-white/9 bg-linear-to-b from-white/6 to-white/2 p-9 backdrop-blur-[14px] lg:h-90"
          >
            <span
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(124,92,255,0.8),transparent)]"
            />
            <div className="relative flex items-start justify-between">
              <div className="flex h-14 w-14 flex-none items-center justify-center rounded-2xl border border-[rgba(124,92,255,0.35)] bg-[linear-gradient(145deg,rgba(124,92,255,0.22),rgba(124,92,255,0.06))] text-accent-violet-light shadow-[0_0_32px_rgba(124,92,255,0.18)]">
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
                  className="block shrink-0"
                >
                  {icon}
                </svg>
              </div>
              <span className="font-mono-ui text-[13px] text-muted-dim">
                {number}
              </span>
            </div>
            <div className="flex-1" />
            <h3 className="relative m-0 mb-3 text-2xl leading-[1.15] font-semibold tracking-[-0.025em] text-foreground">
              {title}
            </h3>
            <p className="relative m-0 mb-6 text-base leading-[1.6] text-muted">
              {description}
            </p>
            <span className="relative inline-flex items-center gap-2 text-[15px] font-medium text-accent-violet-light">
              Learn more
              <svg
                width="16"
                height="16"
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
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
