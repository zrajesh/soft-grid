import Link from "next/link";

const PROJECTS = [
  {
    slug: "bookstohome",
    name: "BooksToHome",
    description:
      "An online bookstore platform for the Indian market — built for speed, affordability, and a smooth checkout.",
    tag: "₹20 Lakh+ monthly revenue",
  },
  {
    slug: "lingotree",
    name: "LingoTree",
    description:
      "An AI-powered English learning app for beginners and intermediate learners — built around a personalized roadmap and live AI conversation practice.",
    tag: "Live on Google Play",
  },
];

function BrowserMockup() {
  return (
    <div
      aria-hidden="true"
      className="relative h-52 w-full overflow-hidden bg-background-secondary lg:h-95"
    >
      <div
        className="pointer-events-none absolute top-[-140px] left-[-80px] h-140 w-140 rounded-full"
        style={{
          background:
            "radial-gradient(circle at center, rgba(124,92,255,0.5) 0%, rgba(124,92,255,0.15) 40%, transparent 70%)",
        }}
      />
      <div className="absolute inset-6 flex flex-col overflow-hidden rounded-2xl border border-white/12 bg-[#0E1017] shadow-[0_40px_100px_rgba(0,0,0,0.55),0_0_90px_rgba(124,92,255,0.22)]">
        <div className="flex h-8.5 flex-none items-center gap-1.5 border-b border-white/7 bg-white/3 px-3.5">
          <span className="h-2.5 w-2.5 flex-none rounded-full bg-white/22" />
          <span className="h-2.5 w-2.5 flex-none rounded-full bg-white/22" />
          <span className="h-2.5 w-2.5 flex-none rounded-full bg-white/22" />
          <span className="ml-3 h-4.5 max-w-55 flex-1 rounded-md bg-white/6" />
        </div>
        <div className="flex flex-1 flex-col gap-3 p-5">
          <span className="h-14 w-full rounded-xl bg-[linear-gradient(120deg,rgba(124,92,255,0.55),rgba(34,211,238,0.18))]" />
          <div className="grid flex-1 grid-cols-4 gap-3">
            {[0, 1, 2, 3].map((i) => (
              <span
                key={i}
                className="rounded-lg bg-[linear-gradient(160deg,#7C5CFF_0%,#2B1F80_100%)]"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function FeaturedWork() {
  return (
    <section className="flex flex-col gap-10 px-5 py-16 sm:px-6 lg:gap-14 lg:px-24 lg:py-24">
      <div className="flex items-end justify-between">
        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-3 font-mono-ui text-[13px] tracking-[0.14em] text-accent-violet-light uppercase">
            <span className="h-px w-7 bg-accent-violet-light opacity-70" />
            <span>Featured work</span>
          </div>
          <h2 className="m-0 text-[32px] leading-[1.1] font-semibold tracking-[-0.03em] text-balance text-foreground lg:text-[56px] lg:leading-[1.04] lg:tracking-[-0.035em]">
            Products we&rsquo;ve shipped
          </h2>
        </div>
        <Link
          href="/work"
          className="hidden min-h-11 items-center gap-2 text-base font-medium text-accent-violet-light lg:inline-flex"
        >
          View all work
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {PROJECTS.map(({ slug, name, description, tag }) => (
          <Link
            key={slug}
            href="/work"
            className="flex flex-col overflow-hidden rounded-[28px] border border-white/9 bg-linear-to-b from-white/6 to-white/2 backdrop-blur-[14px]"
          >
            <BrowserMockup />
            <div className="flex flex-col gap-3 p-8">
              <span className="font-mono-ui text-xs tracking-[0.1em] text-accent-cyan uppercase">
                {tag}
              </span>
              <h3 className="m-0 text-2xl font-semibold tracking-[-0.025em] text-foreground">
                {name}
              </h3>
              <p className="m-0 text-base leading-[1.6] text-muted">
                {description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
