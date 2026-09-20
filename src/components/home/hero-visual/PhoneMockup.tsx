const LIST_ROWS = 4;

export default function PhoneMockup() {
  return (
    <div
      aria-hidden="true"
      className="box-border h-[262px] w-[128px] rounded-[21px] border border-white/16 bg-[#0B0C12] p-2 shadow-[0_40px_90px_rgba(0,0,0,0.6),0_0_80px_rgba(124,92,255,0.25)] [transform:perspective(1200px)_rotateY(-8deg)] lg:h-[400px] lg:w-[196px] lg:rounded-[33px] lg:[transform:perspective(1600px)_rotateY(-10deg)_rotateX(3deg)]"
    >
      <div className="relative h-full w-full overflow-hidden rounded-[13px] bg-[#0F1118] lg:rounded-[25px]">
        <div className="flex h-full flex-col gap-3 p-3.5 lg:gap-3 lg:p-4.5">
          <div className="flex items-center gap-2.5">
            <span className="h-5 w-5 flex-none rounded-full bg-[linear-gradient(135deg,#7C5CFF,#22D3EE)] lg:h-6.5 lg:w-6.5" />
            <div className="flex flex-1 flex-col gap-1">
              <span className="h-1.5 w-[55%] flex-none rounded bg-white/30" />
              <span className="h-1.25 w-[35%] flex-none rounded bg-white/14" />
            </div>
          </div>
          <div className="flex h-16 flex-none flex-col justify-end gap-1.5 rounded-xl bg-[linear-gradient(135deg,rgba(124,92,255,0.75),rgba(34,211,238,0.35))] p-2.5 lg:h-24">
            <span className="h-2 w-[60%] flex-none rounded bg-white/60" />
            <span className="h-1.5 w-[40%] flex-none rounded bg-white/35" />
          </div>
          {Array.from({ length: LIST_ROWS }).map((_, i) => (
            <div
              key={i}
              className="flex items-center gap-2.5 rounded-xl border border-white/7 bg-white/3 p-2"
            >
              <span className="h-6 w-6 flex-none rounded-[9px] bg-[rgba(124,92,255,0.3)] lg:h-7.5 lg:w-7.5" />
              <div className="flex flex-1 flex-col gap-1">
                <span className="h-1.5 w-[70%] flex-none rounded bg-white/24" />
                <span className="h-1.25 w-[45%] flex-none rounded bg-white/12" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
