function ChartLine({ gradientId }: { gradientId: string }) {
  return (
    <svg
      viewBox="0 0 300 100"
      preserveAspectRatio="none"
      width="100%"
      height="100%"
      aria-hidden="true"
      className="block"
    >
      <defs>
        <linearGradient id={`${gradientId}s`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#7C5CFF" />
          <stop offset="1" stopColor="#22D3EE" />
        </linearGradient>
        <linearGradient id={`${gradientId}f`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#7C5CFF" stopOpacity="0.35" />
          <stop offset="1" stopColor="#7C5CFF" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path
        d="M0 78 C25 72 40 88 70 62 S120 48 150 54 S210 24 240 30 S285 12 300 6 L300 100 L0 100 Z"
        fill={`url(#${gradientId}f)`}
      />
      <path
        d="M0 78 C25 72 40 88 70 62 S120 48 150 54 S210 24 240 30 S285 12 300 6"
        fill="none"
        stroke={`url(#${gradientId}s)`}
        strokeWidth="2"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}

const SIDEBAR_ROWS = [
  { dotOpacity: 1, barOpacity: 0.4, barWidth: "62%" },
  { dotOpacity: 0.14, barOpacity: 0.16, barWidth: "48%" },
  { dotOpacity: 0.14, barOpacity: 0.16, barWidth: "70%" },
  { dotOpacity: 0.14, barOpacity: 0.16, barWidth: "40%" },
  { dotOpacity: 0.14, barOpacity: 0.16, barWidth: "56%" },
] as const;

const CONTENT_CARDS = [
  { barColor: "rgba(124,92,255,0.5)" },
  { barColor: "rgba(124,92,255,0.28)" },
  { barColor: "rgba(34,211,238,0.28)" },
] as const;

export default function BrowserMockup() {
  return (
    <div
      aria-hidden="true"
      className="flex h-[200px] w-[290px] flex-col overflow-hidden rounded-2xl border border-white/12 bg-[#0E1017] shadow-[0_40px_100px_rgba(0,0,0,0.55),0_0_90px_rgba(124,92,255,0.22)] [transform:perspective(1200px)_rotateY(-10deg)_rotateX(3deg)] lg:h-[320px] lg:w-[470px] lg:[transform:perspective(1600px)_rotateY(-12deg)_rotateX(4deg)]">
      <div className="flex h-8.5 flex-none items-center gap-1.5 border-b border-white/7 bg-white/3 px-3.5">
        <span className="h-2.25 w-2.25 flex-none rounded-full bg-white/22" />
        <span className="h-2.25 w-2.25 flex-none rounded-full bg-white/22" />
        <span className="h-2.25 w-2.25 flex-none rounded-full bg-white/22" />
        <span className="ml-3 h-4.5 max-w-55 flex-1 rounded-md bg-white/6" />
      </div>
      <div className="relative flex min-h-0 flex-1 overflow-hidden">
        <div className="hidden w-[24%] flex-none flex-col gap-3 border-r border-white/6 p-3.5 lg:flex">
          <div className="flex items-center gap-2">
            <span className="h-4 w-4 flex-none rounded-md bg-[linear-gradient(135deg,#7C5CFF,#22D3EE)]" />
            <span className="h-1.75 w-1/2 flex-none rounded bg-white/22" />
          </div>
          <div className="h-1.5" />
          {SIDEBAR_ROWS.map(({ dotOpacity, barOpacity, barWidth }, i) => (
            <div key={i} className="flex items-center gap-2">
              <span
                className="h-2.5 w-2.5 flex-none rounded-[3px]"
                style={{ background: `rgba(124,92,255,${dotOpacity})` }}
              />
              <span
                className="h-1.75 flex-none rounded"
                style={{
                  width: barWidth,
                  background: `rgba(255,255,255,${barOpacity})`,
                }}
              />
            </div>
          ))}
        </div>
        <div className="flex min-w-0 flex-1 flex-col gap-3 p-3.5">
          <div className="flex items-center justify-between">
            <span className="h-2.5 w-[30%] flex-none rounded bg-white/28" />
            <span className="h-4.5 w-13 rounded-[9px] bg-[rgba(124,92,255,0.35)]" />
          </div>
          <div className="grid grid-cols-3 gap-2.5">
            {CONTENT_CARDS.map(({ barColor }, i) => (
              <div
                key={i}
                className="flex flex-col gap-2 rounded-[10px] border border-white/8 bg-white/2.5 p-2.5"
              >
                <span className="h-1.5 w-2/5 rounded bg-white/18" />
                <span
                  className="h-3 w-[70%] rounded"
                  style={{ background: barColor }}
                />
              </div>
            ))}
          </div>
          <div className="min-h-0 flex-1 rounded-[10px] border border-white/8 bg-white/2 p-2.5">
            <ChartLine gradientId="heroChartDesktop" />
          </div>
        </div>
      </div>
    </div>
  );
}
