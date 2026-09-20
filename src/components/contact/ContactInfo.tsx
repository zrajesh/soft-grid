import SocialLinks from "@/components/SocialLinks";
import Button from "@/components/Button";

const ROWS = [
  {
    label: "Email",
    value: "hello@softgrid.example",
    path: "M3 5h18a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1z",
    extra: <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />,
  },
  {
    label: "Phone",
    value: "Available on request",
    path: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",
  },
  {
    label: "Location",
    value: "Remote / Global",
    path: "M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",
    extra: <circle cx="12" cy="10" r="3" />,
  },
];

export default function ContactInfo() {
  return (
    <div className="flex flex-col gap-7 rounded-[28px] border border-white/9 bg-linear-to-b from-white/6 to-white/2 p-9 backdrop-blur-[14px]">
      <div className="flex items-center gap-3 font-mono-ui text-[13px] tracking-[0.14em] text-[#67E8F9] uppercase">
        <div className="h-px w-7 bg-[#67E8F9] opacity-70" />
        <span>Reach us directly</span>
      </div>

      {ROWS.map(({ label, value, path, extra }) => (
        <div key={label} className="flex items-center gap-4">
          <div className="flex h-12 w-12 flex-none items-center justify-center rounded-[14px] border border-accent-violet/35 bg-linear-to-br from-accent-violet/22 to-accent-violet/6 text-accent-violet-light shadow-[0_0_32px_rgba(124,92,255,0.18)]">
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              className="block shrink-0"
            >
              <path d={path} />
              {extra}
            </svg>
          </div>
          <div className="flex flex-col gap-1">
            <span className="font-mono-ui text-xs tracking-[0.14em] text-muted-dim uppercase">
              {label}
            </span>
            <span className="text-[17px] text-foreground">{value}</span>
          </div>
        </div>
      ))}

      <div className="h-px bg-border" />

      <SocialLinks />

      <Button href="#" variant="secondary" size="lg" className="w-full">
        Book a Call
      </Button>
    </div>
  );
}
