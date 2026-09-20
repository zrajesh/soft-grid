export default function Mission() {
  return (
    <section className="flex flex-col gap-6 border-y border-border bg-background-secondary px-5 py-16 sm:px-6 lg:px-24 lg:py-20">
      <div className="flex items-center gap-3 font-mono-ui text-[13px] tracking-[0.14em] text-accent-violet-light uppercase">
        <span className="h-px w-7 bg-accent-violet-light opacity-70" />
        <span>Our idea</span>
      </div>
      <p className="m-0 max-w-[1120px] text-2xl leading-[1.4] font-normal text-pretty text-muted lg:text-[42px] lg:leading-[1.32] lg:tracking-[-0.025em]">
        Softgrid was built on a simple idea — software should be{" "}
        <span className="text-foreground">fast to build</span>,{" "}
        <span className="text-foreground">intelligent by default</span>, and
        made by{" "}
        <span className="text-foreground">people who actually ship</span>. We
        work across{" "}
        <span className="bg-[linear-gradient(100deg,#B5A8FF_0%,#7C5CFF_38%,#22D3EE_100%)] bg-clip-text text-transparent">
          web, mobile, and AI
        </span>{" "}
        because most real products need all three, not one in isolation.
      </p>
    </section>
  );
}
