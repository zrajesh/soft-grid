function VennMark() {
  return (
    <svg
      width="540"
      height="478"
      viewBox="0 0 520 460"
      aria-hidden="true"
      className="hidden shrink-0 lg:block"
    >
      <circle
        cx="195"
        cy="185"
        r="140"
        fill="rgba(124,92,255,0.16)"
        stroke="rgba(124,92,255,0.75)"
        strokeWidth="1.5"
      />
      <circle
        cx="325"
        cy="185"
        r="140"
        fill="rgba(108,92,231,0.16)"
        stroke="rgba(169,155,255,0.75)"
        strokeWidth="1.5"
      />
      <circle
        cx="260"
        cy="300"
        r="140"
        fill="rgba(34,211,238,0.14)"
        stroke="rgba(34,211,238,0.75)"
        strokeWidth="1.5"
      />
      <g
        fontFamily="Geist Mono, ui-monospace, monospace"
        fontSize="14"
        letterSpacing="2"
        textAnchor="middle"
      >
        <text x="140" y="150" fill="#C4B9FF">
          WEB
        </text>
        <text x="380" y="150" fill="#C4B9FF">
          MOBILE
        </text>
        <text x="260" y="385" fill="#A5F3FC">
          AGENTIC AI
        </text>
      </g>
      <circle cx="260" cy="222" r="5" fill="#FFFFFF" />
      <text
        x="260"
        y="248"
        textAnchor="middle"
        fontFamily="Geist, system-ui, sans-serif"
        fontSize="18"
        fontWeight="600"
        fill="#F5F5F7"
        letterSpacing="-0.5"
      >
        Softgrid
      </text>
    </svg>
  );
}

export default function Hero() {
  return (
    <section className="flex flex-col items-start justify-center gap-8 px-5 py-16 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-24 lg:py-24">
      <div className="flex flex-col gap-6 lg:max-w-[560px]">
        <div className="flex items-center gap-3 font-mono-ui text-[13px] tracking-[0.14em] text-accent-violet-light uppercase">
          <span className="h-px w-7 bg-accent-violet-light opacity-70" />
          <span>About</span>
        </div>
        <h1 className="m-0 text-[46px] leading-[1.02] font-semibold tracking-[-0.045em] text-balance text-foreground lg:text-[96px] lg:leading-[0.98] lg:tracking-[-0.048em]">
          Why Softgrid
          <br />
          Exists
        </h1>
        <p className="m-0 max-w-[520px] text-lg leading-[1.55] text-muted lg:text-[22px]">
          Web, mobile, and AI — because most real products need all three.
        </p>
      </div>
      <VennMark />
    </section>
  );
}
