import { WebIcon, MobileIcon, AiIcon } from "@/components/services/ServiceIcons";

const QUICK_LINKS = [
  { href: "#web", label: "Web Apps", Icon: WebIcon, accent: "text-accent-violet-light" },
  { href: "#mobile", label: "Mobile Apps", Icon: MobileIcon, accent: "text-accent-violet-light" },
  { href: "#ai", label: "Agentic AI", Icon: AiIcon, accent: "text-accent-cyan" },
] as const;

export default function ServicesHero() {
  return (
    <section className="relative overflow-hidden px-5 pt-14 pb-16 sm:px-6 lg:px-24 lg:pt-20 lg:pb-20">
      <div className="relative z-2 flex max-w-3xl flex-col items-start gap-5">
        <div className="flex items-center gap-3 font-mono-ui text-xs tracking-[0.14em] text-accent-violet-light uppercase lg:text-[13px]">
          <span className="h-px w-7 bg-accent-violet-light opacity-70" />
          <span>Services</span>
        </div>
        <h1 className="m-0 text-[44px] leading-[1.02] font-semibold tracking-[-0.045em] text-foreground text-balance lg:text-[88px] lg:leading-[0.98] lg:tracking-[-0.048em]">
          What We Build
        </h1>
        <p className="max-w-xl text-[17px] leading-[1.55] text-muted text-pretty lg:max-w-160 lg:text-[22px]">
          Three disciplines. One team. Everything you need to go from idea to
          shipped product.
        </p>
        <div className="mt-2 flex flex-wrap gap-2 lg:gap-3">
          {QUICK_LINKS.map(({ href, label, Icon, accent }) => (
            <a
              key={href}
              href={href}
              className="inline-flex h-11 items-center gap-2 rounded-full border border-white/9 bg-linear-to-b from-white/6 to-white/2 px-4 text-[15px] font-medium text-foreground backdrop-blur-[14px] lg:h-12 lg:gap-2.5 lg:px-5"
            >
              <Icon className={`block h-[18px] w-[18px] shrink-0 ${accent}`} />
              {label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
