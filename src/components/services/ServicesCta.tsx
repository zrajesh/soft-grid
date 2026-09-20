import Button from "@/components/Button";

export default function ServicesCta() {
  return (
    <section className="relative overflow-hidden border-t border-white/8 px-5 py-16 text-center sm:px-6 lg:px-24 lg:py-22">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-full"
        style={{
          background:
            "radial-gradient(ellipse 70% 80% at 50% 100%, rgba(124,92,255,0.16) 0%, transparent 70%)",
        }}
      />
      <div className="relative z-2 mx-auto flex max-w-160 flex-col items-center gap-6">
        <h2 className="m-0 text-[40px] leading-[1.08] font-semibold tracking-[-0.035em] text-balance text-foreground lg:text-[76px] lg:leading-[1.05] lg:tracking-[-0.04em]">
          Not sure what you need?
        </h2>
        <p className="m-0 max-w-125 text-lg leading-[1.55] text-muted text-pretty lg:text-xl">
          Tell us the problem — we&rsquo;ll figure out the right build.
        </p>
        <Button href="/contact" size="lg" showArrow className="mt-2">
          Book a Call
        </Button>
      </div>
    </section>
  );
}
