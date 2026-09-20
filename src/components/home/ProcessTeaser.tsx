import Link from "next/link";

const STEPS = [
  {
    number: "01",
    label: "Discover",
    icon: (
      <>
        <circle cx="12" cy="12" r="10" />
        <path d="m16.24 7.76-2.12 6.36-6.36 2.12 2.12-6.36 6.36-2.12z" />
      </>
    ),
  },
  {
    number: "02",
    label: "Design",
    icon: (
      <>
        <path d="m12 19 7-7 3 3-7 7-3-3z" />
        <path d="m18 13-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
        <path d="m2 2 7.586 7.586" />
        <circle cx="11" cy="11" r="2" />
      </>
    ),
  },
  {
    number: "03",
    label: "Build",
    icon: (
      <>
        <path d="m14.5 12.5-8 8a2.12 2.12 0 1 1-3-3l8-8" />
        <path d="m16 16 6-6" />
        <path d="m8 8 6-6a2.12 2.12 0 1 1 3 3l-6 6" />
        <path d="m9.5 6.5 8 8" />
      </>
    ),
  },
  {
    number: "04",
    label: "Launch",
    icon: (
      <>
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
        <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
        <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
        <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
      </>
    ),
  },
  {
    number: "05",
    label: "Scale",
    icon: (
      <>
        <path d="M22 7 13.5 15.5 8.5 10.5 2 17" />
        <path d="M16 7h6v6" />
      </>
    ),
  },
];

function ArrowIcon() {
  return (
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
  );
}

export default function ProcessTeaser() {
  return (
    <section className="flex flex-col gap-10 px-5 py-16 sm:px-6 lg:gap-14 lg:px-24 lg:py-24">
      <div className="flex items-end justify-between">
        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-3 font-mono-ui text-xs tracking-[0.14em] text-accent-violet-light uppercase lg:text-[13px]">
            <span className="h-px w-7 bg-accent-violet-light opacity-70" />
            <span>Process</span>
          </div>
          <h2 className="m-0 text-[32px] leading-[1.1] font-semibold tracking-[-0.03em] text-balance text-foreground lg:text-[56px] lg:leading-[1.04] lg:tracking-[-0.035em]">
            How we work
          </h2>
        </div>
        <Link
          href="/process"
          className="hidden min-h-11 items-center gap-2 text-base font-medium text-accent-violet-light lg:inline-flex"
        >
          See the full process
          <ArrowIcon />
        </Link>
      </div>

      <div className="relative grid grid-cols-2 gap-y-10 sm:grid-cols-5 sm:gap-x-6">
        <div
          aria-hidden="true"
          className="absolute top-9 right-[10%] left-[10%] hidden h-px opacity-50 sm:block"
          style={{
            background: "linear-gradient(90deg, #7C5CFF, #22D3EE)",
          }}
        />
        {STEPS.map(({ number, label, icon }) => (
          <Link
            key={number}
            href="/process"
            className="relative z-2 flex flex-col items-center gap-4.5 text-center"
          >
            <div className="flex h-18 w-18 items-center justify-center rounded-full border border-[rgba(124,92,255,0.45)] bg-background-secondary text-accent-violet-light shadow-[0_0_40px_rgba(124,92,255,0.22)]">
              <svg
                width="28"
                height="28"
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
            <div className="flex flex-col items-center gap-1.5">
              <span className="text-xl font-medium tracking-[-0.01em] text-foreground">
                {label}
              </span>
              <span className="font-mono-ui text-xs text-muted-dim">
                {number}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
