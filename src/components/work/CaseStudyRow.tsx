import CaseStudyVisual from "@/components/work/CaseStudyVisual";

type DetailRow = {
  label: string;
  kind: "text" | "chips";
  value: string | readonly string[];
  valueColor?: string;
};

type CaseStudyRowProps = {
  index: string;
  accentColor: string;
  bgVariant: "primary" | "secondary";
  name: string;
  tag: string;
  tagColor: string;
  details: readonly DetailRow[];
  outcomeHeadline: string;
  outcomeSub: string;
  visualGlowColor: string;
  visualBadgeLabel: string;
  visualBadgeDotColor: string;
};

export default function CaseStudyRow({
  index,
  accentColor,
  bgVariant,
  name,
  tag,
  tagColor,
  details,
  outcomeHeadline,
  outcomeSub,
  visualGlowColor,
  visualBadgeLabel,
  visualBadgeDotColor,
}: CaseStudyRowProps) {
  return (
    <div
      className={`border-t border-white/8 px-5 py-16 sm:px-6 lg:px-24 lg:py-24 ${
        bgVariant === "secondary" ? "bg-background-secondary" : "bg-background"
      }`}
    >
      <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-20">
        <div className="order-2 flex flex-col lg:order-1">
          <div
            className="flex items-center gap-3 font-mono-ui text-xs tracking-[0.14em] uppercase lg:text-[13px]"
            style={{ color: accentColor }}
          >
            <span
              className="h-px w-7 opacity-70"
              style={{ background: accentColor }}
            />
            <span>Case study {index}</span>
          </div>
          <h2 className="mt-5 text-[42px] leading-none font-semibold tracking-[-0.04em] text-foreground lg:mt-4 lg:text-[60px]">
            {name}
          </h2>
          <span
            className="mt-3.5 inline-flex h-7.5 w-fit items-center gap-2 rounded-full border px-3.5 font-mono-ui text-[12.5px] whitespace-nowrap lg:mt-4.5"
            style={{
              color: tagColor,
              borderColor: `${tagColor}61`,
              background: `${tagColor}17`,
            }}
          >
            {tag}
          </span>

          <div className="mt-6 flex flex-col lg:mt-7">
            {details.map(({ label, kind, value, valueColor }) => (
              <div
                key={label}
                className="grid grid-cols-[110px_minmax(0,1fr)] border-t border-white/8 py-5 lg:grid-cols-[128px_minmax(0,1fr)]"
              >
                <div className="pt-1 font-mono-ui text-xs tracking-[0.14em] text-muted-dim uppercase">
                  {label}
                </div>
                {kind === "text" ? (
                  <p
                    className="m-0 text-base leading-[1.65] text-pretty"
                    style={{ color: valueColor ?? "#9CA3AF" }}
                  >
                    {value as string}
                  </p>
                ) : (
                  <div className="flex flex-wrap gap-2">
                    {(value as string[]).map((chip) => (
                      <span
                        key={chip}
                        className="inline-flex h-8.5 items-center rounded-full border border-white/8 bg-white/4 px-3.5 text-sm text-[#d5d9e2]"
                      >
                        {chip}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <div className="grid grid-cols-[110px_minmax(0,1fr)] border-t border-white/8 py-5 lg:grid-cols-[128px_minmax(0,1fr)]">
              <div className="pt-1 font-mono-ui text-xs tracking-[0.14em] text-muted-dim uppercase">
                Outcome
              </div>
              <div className="flex flex-col gap-2">
                <div className="bg-[linear-gradient(100deg,#B5A8FF_0%,#7C5CFF_38%,#22D3EE_100%)] bg-clip-text text-[26px] leading-[1.1] font-semibold tracking-[-0.03em] text-transparent lg:text-[34px]">
                  {outcomeHeadline}
                </div>
                <p className="m-0 text-base text-muted">{outcomeSub}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <CaseStudyVisual
            glowColor={visualGlowColor}
            badgeLabel={visualBadgeLabel}
            badgeDotColor={visualBadgeDotColor}
          />
        </div>
      </div>
    </div>
  );
}
