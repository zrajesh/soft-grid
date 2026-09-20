type CaseStudyVisualProps = {
  glowColor: string;
  badgeLabel: string;
  badgeDotColor: string;
};

const BLOCK_GRADIENTS = [
  "linear-gradient(160deg,#22D3EE_0%,#0B5A73_100%)",
  "linear-gradient(160deg,#A99BFF_0%,#3B2F99_100%)",
  "linear-gradient(160deg,#6C5CE7_0%,#1D1A4A_100%)",
];

export default function CaseStudyVisual({
  glowColor,
  badgeLabel,
  badgeDotColor,
}: CaseStudyVisualProps) {
  return (
    <div
      aria-hidden="true"
      className="relative h-70 w-full overflow-hidden rounded-[32px] border border-white/8 bg-background-secondary sm:h-90 lg:h-[540px] lg:w-full"
    >
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 h-70 w-70 -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background: `radial-gradient(circle at center, ${glowColor} 0%, transparent 70%)`,
        }}
      />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 70% at 50% 50%, #000 0%, transparent 80%)",
          maskImage:
            "radial-gradient(ellipse 70% 70% at 50% 50%, #000 0%, transparent 80%)",
        }}
      />
      <div className="absolute inset-8 flex gap-3 lg:inset-12">
        {BLOCK_GRADIENTS.map((gradient) => (
          <div key={gradient} className="flex min-h-0 flex-1 flex-col gap-2">
            <div
              className="min-h-0 flex-1 rounded-lg shadow-[inset_6px_0_0_rgba(0,0,0,0.25)]"
              style={{ background: gradient.replaceAll("_", " ") }}
            />
            <div className="h-2 w-4/5 flex-none rounded bg-white/24" />
            <div className="flex gap-1.5">
              <div className="h-2 w-[30%] flex-none rounded bg-accent-cyan/50" />
              <div className="h-2 w-[24%] flex-none rounded bg-white/12" />
            </div>
          </div>
        ))}
      </div>
      <div className="absolute top-5 left-5 inline-flex h-9 items-center gap-2.5 rounded-full border border-white/9 bg-linear-to-b from-white/6 to-white/2 px-3.5 font-mono-ui text-[12.5px] whitespace-nowrap text-[#d5d9e2] backdrop-blur-[14px]">
        <span
          className="h-1.75 w-1.75 flex-none rounded-full"
          style={{
            background: badgeDotColor,
            boxShadow: `0 0 10px ${badgeDotColor}`,
          }}
        />
        <span>{badgeLabel}</span>
      </div>
    </div>
  );
}
