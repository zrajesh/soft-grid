import type { Metadata } from "next";
import Button from "@/components/Button";
import CaseStudyRow from "@/components/work/CaseStudyRow";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Products Softgrid has shipped — real client work across web and mobile.",
};

const CASE_STUDIES = [
  {
    index: "01",
    accentColor: "#A99BFF",
    bgVariant: "primary",
    name: "BooksToHome",
    tag: "₹20 Lakh+ monthly revenue",
    tagColor: "#A99BFF",
    details: [
      {
        label: "Problem",
        kind: "text",
        value:
          "Bring an affordable, high-volume online bookstore to market with a checkout experience that removes friction for Indian buyers.",
      },
      {
        label: "Solution",
        kind: "text",
        value:
          "A full e-commerce platform — from catalog to order tracking — built for speed, affordability, and a smooth checkout.",
      },
      {
        label: "Key features",
        kind: "chips",
        value: [
          "Catalog",
          "Search",
          "Wishlist",
          "Coupon engine",
          "COD + prepaid-discount checkout",
          "Order tracking",
          "WhatsApp bulk-order channel",
          "Google-integrated reviews",
        ],
      },
    ],
    outcomeHeadline: "₹20 Lakh+ monthly revenue",
    outcomeSub: "Built end-to-end by Softgrid.",
    visualGlowColor: "rgba(34,211,238,0.35)",
    visualBadgeLabel: "Google reviews",
    visualBadgeDotColor: "#22D3EE",
  },
  {
    index: "02",
    accentColor: "#67E8F9",
    bgVariant: "secondary",
    name: "LingoTree",
    tag: "Live on Google Play",
    tagColor: "#67E8F9",
    details: [
      {
        label: "Problem",
        kind: "text",
        value:
          "Most English-learning apps stop at vocabulary drills — they don't build real speaking confidence or adapt to the learner.",
      },
      {
        label: "Solution",
        kind: "text",
        value:
          'A personalized, AI-driven learning roadmap, plus "AI Calling" for live conversation practice with multiple AI personalities.',
      },
      {
        label: "Key features",
        kind: "chips",
        value: [
          "Personalized learning roadmap",
          "AI Calling",
          "Multiple AI personalities",
        ],
      },
    ],
    outcomeHeadline: "Published and live on Google Play.",
    outcomeSub: "Built by Softgrid.",
    visualGlowColor: "rgba(124,92,255,0.35)",
    visualBadgeLabel: "Google Play",
    visualBadgeDotColor: "#7C5CFF",
  },
] as const;

export default function WorkPage() {
  return (
    <>
      <section className="relative overflow-hidden px-5 pt-14 pb-16 sm:px-6 lg:px-24 lg:pt-20 lg:pb-20">
        <div className="relative z-2 flex max-w-3xl flex-col items-start gap-5">
          <div className="flex items-center gap-3 font-mono-ui text-xs tracking-[0.14em] text-accent-violet-light uppercase lg:text-[13px]">
            <span className="h-px w-7 bg-accent-violet-light opacity-70" />
            <span>Work</span>
          </div>
          <h1 className="m-0 text-[44px] leading-[1.02] font-semibold tracking-[-0.048em] text-foreground text-balance lg:text-[88px] lg:leading-[0.98]">
            Our Work
          </h1>
          <p className="max-w-xl text-[17px] leading-[1.55] text-muted text-pretty lg:text-[22px]">
            Products we&rsquo;ve shipped.
          </p>
        </div>
      </section>

      {CASE_STUDIES.map((study) => (
        <CaseStudyRow key={study.name} {...study} />
      ))}

      <section className="relative flex flex-col items-center overflow-hidden border-t border-white/8 bg-background px-5 py-20 text-center sm:px-6 lg:px-24 lg:py-32">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-[-190px] left-1/2 h-[380px] w-[640px] -translate-x-1/2 rounded-full lg:bottom-[-380px] lg:h-[760px] lg:w-[1280px]"
          style={{
            background:
              "radial-gradient(circle at center, rgba(124,92,255,0.55) 0%, rgba(124,92,255,0.165) 40%, transparent 70%)",
          }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-[6%] bottom-[-150px] h-[230px] w-[320px] rounded-full lg:bottom-[-300px] lg:h-[460px] lg:w-[640px]"
          style={{
            background:
              "radial-gradient(circle at center, rgba(34,211,238,0.3) 0%, rgba(34,211,238,0.09) 40%, transparent 70%)",
          }}
        />
        <div className="relative z-2 flex flex-col items-center gap-6">
          <h2 className="m-0 max-w-2xl text-[36px] leading-[1.1] font-semibold tracking-[-0.03em] text-foreground text-balance lg:text-[76px] lg:leading-[1.05] lg:tracking-[-0.04em]">
            Have an idea? Let&rsquo;s build it.
          </h2>
          <p className="m-0 max-w-[620px] text-lg leading-[1.55] text-muted text-pretty lg:text-xl">
            Tell us what you&rsquo;re building — we&rsquo;ll tell you how fast
            we can ship it.
          </p>
          <div className="mt-4">
            <Button href="/contact" size="lg" showArrow>
              Start a Project
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
