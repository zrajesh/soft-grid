import type { Metadata } from "next";
import Hero from "@/components/about/Hero";
import Mission from "@/components/about/Mission";
import Values from "@/components/about/Values";
import Cta from "@/components/about/Cta";

export const metadata: Metadata = {
  title: "About",
  description:
    "Softgrid was built on a simple idea — software should be fast to build, intelligent by default, and made by people who actually ship.",
};

export default function About() {
  return (
    <>
      <Hero />
      <Mission />
      <Values />
      <Cta />
    </>
  );
}
