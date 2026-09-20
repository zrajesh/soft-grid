import Button from "@/components/Button";
import HeroVisual from "@/components/home/hero-visual/HeroVisual";

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-5 pt-14 pb-20 sm:px-6 lg:px-24 lg:pt-24 lg:pb-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-[-160px] right-[-200px] h-[620px] w-[620px] rounded-full lg:top-[-180px] lg:right-[-160px] lg:h-[980px] lg:w-[980px]"
        style={{
          background:
            "radial-gradient(circle at center, rgba(124,92,255,0.5) 0%, rgba(124,92,255,0.15) 40%, transparent 70%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[-60px] left-[-220px] h-[520px] w-[520px] rounded-full lg:right-[-60px] lg:left-auto lg:bottom-[-260px] lg:h-[760px] lg:w-[760px]"
        style={{
          background:
            "radial-gradient(circle at center, rgba(34,211,238,0.2) 0%, rgba(34,211,238,0.06) 40%, transparent 70%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 hidden lg:block"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          WebkitMaskImage:
            "radial-gradient(ellipse 62% 75% at 72% 42%, #000 0%, transparent 78%)",
          maskImage:
            "radial-gradient(ellipse 62% 75% at 72% 42%, #000 0%, transparent 78%)",
        }}
      />

      <div className="relative z-2 flex flex-col items-center lg:flex-row lg:items-center lg:justify-between lg:gap-10">
        <div className="flex max-w-3xl flex-col items-start lg:max-w-[690px] lg:flex-none">
          <div className="mb-8 inline-flex h-8.5 items-center gap-2.5 rounded-full border border-white/12 bg-white/4 px-4 font-mono-ui text-[12.5px] tracking-[0.06em] text-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-cyan shadow-[0_0_10px_#22D3EE]" />
            Web apps · Mobile apps · Agentic AI
          </div>
          <h1 className="m-0 text-[44px] leading-[1.02] font-semibold tracking-[-0.045em] text-foreground text-balance lg:text-[88px] lg:leading-[0.98] lg:tracking-[-0.048em]">
            We Build
            <br />
            Software That
            <br />
            <span className="bg-[linear-gradient(100deg,#B5A8FF_0%,#7C5CFF_38%,#22D3EE_100%)] bg-clip-text text-transparent">
              Thinks.
            </span>
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-[1.6] text-muted text-pretty lg:mt-7 lg:text-xl">
            Softgrid designs and engineers web apps, mobile apps, and agentic
            AI solutions for businesses that refuse to move slow.
          </p>
          <div className="mt-10 flex w-full flex-col gap-4 sm:w-auto sm:flex-row">
            <Button
              href="/contact"
              size="lg"
              showArrow
              className="w-full sm:w-auto"
            >
              Start a Project
            </Button>
            <Button
              href="/work"
              variant="secondary"
              size="lg"
              className="w-full sm:w-auto"
            >
              See Our Work
            </Button>
          </div>
        </div>

        <div className="mt-10 lg:mt-0">
          <HeroVisual />
        </div>
      </div>
    </section>
  );
}
