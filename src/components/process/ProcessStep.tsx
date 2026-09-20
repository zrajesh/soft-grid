import type { ReactNode } from "react";

type ProcessStepProps = {
  index: number;
  title: string;
  description: string;
  icon: ReactNode;
  isLast?: boolean;
};

function StepIcon({ icon, size }: { icon: ReactNode; size: "sm" | "lg" }) {
  const sizeClasses =
    size === "sm" ? "h-13 w-13 [&_svg]:h-5.5 [&_svg]:w-5.5" : "h-16 w-16 [&_svg]:h-6.5 [&_svg]:w-6.5";

  return (
    <span
      className={`flex flex-none items-center justify-center rounded-full border border-accent-violet/60 bg-background-secondary text-accent-violet-light shadow-[0_0_32px_rgba(124,92,255,0.3)] ${sizeClasses}`}
    >
      {icon}
    </span>
  );
}

function GhostNumber({ label, align }: { label: string; align: "left" | "right" }) {
  return (
    <div
      className={`text-[128px] leading-none font-bold tracking-[-0.05em] text-transparent ${
        align === "right" ? "text-right" : "text-left"
      }`}
      style={{ WebkitTextStroke: "1px rgba(169,155,255,0.35)" }}
      aria-hidden="true"
    >
      {label}
    </div>
  );
}

function StepText({
  title,
  description,
  align,
}: {
  title: string;
  description: string;
  align: "left" | "right";
}) {
  return (
    <div
      className={`flex flex-col gap-3 ${
        align === "right" ? "items-end text-right" : "items-start text-left"
      }`}
    >
      <h3 className="m-0 max-w-[420px] text-[44px] leading-[1.05] font-semibold tracking-[-0.03em] text-foreground">
        {title}
      </h3>
      <p className="m-0 max-w-[460px] text-xl leading-[1.55] text-muted text-pretty">
        {description}
      </p>
    </div>
  );
}

export default function ProcessStep({
  index,
  title,
  description,
  icon,
  isLast = false,
}: ProcessStepProps) {
  const label = String(index).padStart(2, "0");
  const flip = index % 2 === 0;

  return (
    <li className="list-none">
      {/* Mobile / tablet layout */}
      <div className="grid grid-cols-[52px_1fr] gap-5 py-8 lg:hidden">
        <div className="relative flex flex-col items-center">
          <StepIcon icon={icon} size="sm" />
          {!isLast ? (
            <span
              aria-hidden="true"
              className="mt-1 w-px flex-1 bg-linear-to-b from-accent-violet/70 to-accent-cyan/50"
            />
          ) : null}
        </div>
        <div className="flex flex-col gap-2 pt-1">
          <span className="font-mono-ui text-xs tracking-[0.14em] text-accent-violet-light">
            STEP {label}
          </span>
          <h3 className="m-0 text-[30px] leading-[1.05] font-semibold tracking-[-0.03em] text-foreground">
            {title}
          </h3>
          <p className="m-0 mt-0.5 text-[17px] leading-[1.55] text-muted text-pretty">
            {description}
          </p>
        </div>
      </div>

      {/* Desktop layout */}
      <div className="hidden lg:grid lg:min-h-[220px] lg:grid-cols-[1fr_128px_1fr] lg:items-center lg:gap-0">
        <div className="pr-10">
          {flip ? <GhostNumber label={label} align="right" /> : <StepText title={title} description={description} align="right" />}
        </div>
        <div className="relative flex h-full items-center justify-center">
          {!isLast ? (
            <span
              aria-hidden="true"
              className="absolute top-1/2 left-1/2 w-px -translate-x-1/2 bg-linear-to-b from-accent-violet/70 to-accent-cyan/50"
              style={{ bottom: 0 }}
            />
          ) : null}
          {index > 1 ? (
            <span
              aria-hidden="true"
              className="absolute bottom-1/2 left-1/2 w-px -translate-x-1/2 bg-linear-to-b from-accent-violet/70 to-accent-cyan/50"
              style={{ top: 0 }}
            />
          ) : null}
          <StepIcon icon={icon} size="lg" />
        </div>
        <div className="pl-10">
          {flip ? <StepText title={title} description={description} align="left" /> : <GhostNumber label={label} align="left" />}
        </div>
      </div>
    </li>
  );
}
