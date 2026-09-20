type ServiceVisualProps = {
  accent: "violet" | "cyan";
};

const GLOW_BY_ACCENT: Record<ServiceVisualProps["accent"], string> = {
  violet: "0 40px 100px rgba(0,0,0,0.55), 0 0 90px rgba(124,92,255,0.22)",
  cyan: "0 40px 100px rgba(0,0,0,0.55), 0 0 90px rgba(34,211,238,0.22)",
};

function BrowserCard({
  className,
  accent,
}: {
  className: string;
  accent: ServiceVisualProps["accent"];
}) {
  return (
    <div
      className={`flex flex-col overflow-hidden rounded-2xl border border-white/12 bg-[#0E1017] ${className}`}
      style={{ boxShadow: GLOW_BY_ACCENT[accent] }}
    >
      <div className="flex h-8.5 flex-none items-center gap-1.5 border-b border-white/7 bg-white/3 px-3.5">
        <span className="h-2.5 w-2.5 flex-none rounded-full bg-white/22" />
        <span className="h-2.5 w-2.5 flex-none rounded-full bg-white/22" />
        <span className="h-2.5 w-2.5 flex-none rounded-full bg-white/22" />
        <span className="ml-3 h-4.5 max-w-55 flex-1 rounded-md bg-white/6" />
      </div>
      <div className="flex flex-1 flex-col gap-2.5 p-4">
        <span className="h-2.5 w-2/5 flex-none rounded bg-white/25" />
        <span className="h-1.75 w-4/5 flex-none rounded bg-white/12" />
        <span className="h-1.75 w-3/5 flex-none rounded bg-white/12" />
      </div>
    </div>
  );
}

export default function ServiceVisual({ accent }: ServiceVisualProps) {
  return (
    <div
      aria-hidden="true"
      className="relative hidden h-95 lg:block"
    >
      <BrowserCard
        accent={accent}
        className="absolute top-13 left-37.5 h-62.5 w-95 opacity-55"
      />
      <BrowserCard
        accent={accent}
        className="absolute top-32 left-9 h-85 w-122.5"
      />
    </div>
  );
}
