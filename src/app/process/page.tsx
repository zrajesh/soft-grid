import type { Metadata } from "next";
import Button from "@/components/Button";
import ProcessStep from "@/components/process/ProcessStep";
import {
  BuildIcon,
  DesignIcon,
  DiscoverIcon,
  LaunchIcon,
  ScaleIcon,
} from "@/components/process/icons";

export const metadata: Metadata = {
  title: "Process",
  description:
    "How Softgrid works: a clear, fast process from discovery to scale — no black boxes, no surprises.",
};

const STEPS = [
  {
    title: "Discover",
    description:
      "We dig into your goals, users, and constraints before writing a single line of code.",
    icon: <DiscoverIcon />,
  },
  {
    title: "Design",
    description:
      "Wireframes and UI design that we validate with you before development starts.",
    icon: <DesignIcon />,
  },
  {
    title: "Build",
    description:
      "Agile development with regular check-ins, not a black box for three months.",
    icon: <BuildIcon />,
  },
  {
    title: "Launch",
    description:
      "Deployment, QA, and a smooth handoff or transition to production.",
    icon: <LaunchIcon />,
  },
  {
    title: "Scale",
    description: "Ongoing support, iteration, and optimization as you grow.",
    icon: <ScaleIcon />,
  },
];

export default function ProcessPage() {
  return (
    <>
      <section className="relative overflow-hidden px-5 pt-14 pb-4 sm:px-6 lg:px-24 lg:pt-24">
        <div className="relative z-[2] flex max-w-2xl flex-col gap-5">
          <h1 className="m-0 text-[36px] leading-[1.05] font-semibold tracking-[-0.04em] text-foreground text-balance lg:text-[56px]">
            How We Work
          </h1>
          <p className="m-0 max-w-xl text-lg leading-[1.55] text-muted text-pretty lg:text-xl">
            A clear, fast process — no black boxes, no surprises.
          </p>
        </div>
      </section>

      <section className="relative overflow-hidden px-5 py-4 sm:px-6 lg:px-24 lg:py-10">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-[30%] left-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full lg:h-[700px] lg:w-[700px]"
          style={{
            background:
              "radial-gradient(circle at center, rgba(124,92,255,0.14) 0%, rgba(124,92,255,0.042) 40%, transparent 70%)",
          }}
        />
        <ol className="relative z-[2] m-0 flex list-none flex-col p-0">
          {STEPS.map(({ title, description, icon }, i) => (
            <ProcessStep
              key={title}
              index={i + 1}
              title={title}
              description={description}
              icon={icon}
              isLast={i === STEPS.length - 1}
            />
          ))}
        </ol>
      </section>

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
        <div className="relative z-[2] flex flex-col items-center gap-6">
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
