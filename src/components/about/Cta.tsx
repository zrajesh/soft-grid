import Button from "@/components/Button";

export default function Cta() {
  return (
    <section className="relative overflow-hidden px-5 py-24 text-center sm:px-6 lg:px-24 lg:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 80% at 50% 100%, #000 0%, transparent 75%)",
          maskImage:
            "radial-gradient(ellipse 70% 80% at 50% 100%, #000 0%, transparent 75%)",
        }}
      />
      <div className="relative z-[2] mx-auto flex max-w-3xl flex-col items-center gap-6">
        <h2 className="m-0 max-w-[1000px] text-[38px] leading-[1.1] font-semibold tracking-[-0.04em] text-balance text-foreground lg:text-[76px] lg:leading-[1.05]">
          Let&rsquo;s Build Something
        </h2>
        <div className="mt-2">
          <Button href="/contact" size="lg" showArrow>
            Start a Project
          </Button>
        </div>
      </div>
    </section>
  );
}
