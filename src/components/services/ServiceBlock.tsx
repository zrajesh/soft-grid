import type { ComponentType } from "react";
import ServiceVisual from "@/components/services/ServiceVisual";
import { CheckIcon } from "@/components/services/ServiceIcons";

type Accent = "violet" | "cyan";

const ICON_BADGE_BY_ACCENT: Record<Accent, string> = {
  violet:
    "text-accent-violet-light bg-[linear-gradient(145deg,rgba(124,92,255,0.22),rgba(124,92,255,0.06))] border-accent-violet/35 shadow-[0_0_32px_rgba(124,92,255,0.18)]",
  cyan: "text-accent-cyan bg-[linear-gradient(145deg,rgba(34,211,238,0.22),rgba(34,211,238,0.06))] border-accent-cyan/35 shadow-[0_0_32px_rgba(34,211,238,0.18)]",
};

const CHECK_BG_BY_ACCENT: Record<Accent, string> = {
  violet: "bg-accent-violet/16 text-accent-violet-light",
  cyan: "bg-accent-cyan/16 text-accent-cyan",
};

type ServiceBlockProps = {
  id: string;
  index: number;
  total: number;
  title: string;
  body: string;
  features: string[];
  accent: Accent;
  Icon: ComponentType<{ className?: string }>;
};

export default function ServiceBlock({
  id,
  index,
  total,
  title,
  body,
  features,
  accent,
  Icon,
}: ServiceBlockProps) {
  return (
    <section
      id={id}
      className="scroll-mt-20 border-t border-white/8 px-5 py-14 sm:px-6 lg:px-24 lg:py-24"
    >
      <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-24">
        <div className="flex flex-col">
          <div className="mb-6 flex items-center gap-4 lg:mb-7">
            <div
              className={`flex h-14 w-14 flex-none items-center justify-center rounded-2xl border ${ICON_BADGE_BY_ACCENT[accent]}`}
            >
              <Icon className="block h-6.5 w-6.5 shrink-0" />
            </div>
            <span className="font-mono-ui text-[13px] tracking-[0.12em] text-muted-dim lg:text-sm">
              {String(index).padStart(2, "0")} / {String(total).padStart(2, "0")}
            </span>
          </div>
          <h2 className="m-0 mb-4 text-[32px] leading-[1.1] font-semibold tracking-[-0.035em] text-foreground lg:mb-5 lg:text-[46px] lg:leading-[1.05]">
            {title}
          </h2>
          <p className="m-0 mb-6 text-base leading-[1.65] text-muted text-pretty lg:mb-8 lg:text-lg">
            {body}
          </p>
          <div className="flex flex-col">
            {features.map((feature) => (
              <div
                key={feature}
                className="flex items-center gap-3.5 border-t border-white/8 py-3 text-[15px] leading-[1.4] text-foreground lg:py-3.25 lg:text-[17px]"
              >
                <div
                  className={`flex h-5.5 w-5.5 flex-none items-center justify-center rounded-full ${CHECK_BG_BY_ACCENT[accent]}`}
                >
                  <CheckIcon className="block h-3.25 w-3.25 shrink-0" />
                </div>
                {feature}
              </div>
            ))}
          </div>
        </div>
        <ServiceVisual accent={accent === "cyan" ? "cyan" : "violet"} />
      </div>
    </section>
  );
}
