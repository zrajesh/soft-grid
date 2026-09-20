import type { Metadata } from "next";
import ServicesHero from "@/components/services/ServicesHero";
import ServiceBlock from "@/components/services/ServiceBlock";
import ServicesCta from "@/components/services/ServicesCta";
import { WebIcon, MobileIcon, AiIcon } from "@/components/services/ServiceIcons";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Web app development, mobile app development, and agentic AI solutions — from strategy to launch, one team end to end.",
};

const SERVICES = [
  {
    id: "web",
    title: "Web App Development",
    body: "We design and build fast, secure, scalable web applications — from customer-facing products to internal tools. Modern frameworks, clean architecture, built to handle real usage from day one.",
    features: [
      "Product strategy & technical architecture",
      "UI/UX design",
      "Frontend & backend development",
      "API design & integrations",
      "Cloud infrastructure & deployment",
      "Post-launch support & scaling",
    ],
    accent: "violet",
    Icon: WebIcon,
  },
  {
    id: "mobile",
    title: "Mobile App Development",
    body: "iOS, Android, or both — we build mobile experiences that are fast, intuitive, and built to scale with your user base. From concept to App Store.",
    features: [
      "Native & cross-platform development",
      "UI/UX design for mobile",
      "App Store / Play Store deployment",
      "Push notifications, offline support, integrations",
      "Ongoing maintenance & updates",
    ],
    accent: "violet",
    Icon: MobileIcon,
  },
  {
    id: "ai",
    title: "Agentic AI Solutions",
    body: "We build agentic AI systems — autonomous agents and intelligent workflows that take action, not just answer questions. From internal automation to AI-powered products, we design systems that actually reduce work.",
    features: [
      "AI agent design & development",
      "Workflow automation",
      "LLM integration & fine-tuning",
      "Custom AI product development",
      "Agent orchestration & tooling",
    ],
    accent: "cyan",
    Icon: AiIcon,
  },
] as const;

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      {SERVICES.map(({ id, title, body, features, accent, Icon }, i) => (
        <ServiceBlock
          key={id}
          id={id}
          index={i + 1}
          total={SERVICES.length}
          title={title}
          body={body}
          features={[...features]}
          accent={accent}
          Icon={Icon}
        />
      ))}
      <ServicesCta />
    </>
  );
}
