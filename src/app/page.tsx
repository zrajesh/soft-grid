import Hero from "@/components/home/Hero";
import ServicesOverview from "@/components/home/ServicesOverview";
import BuiltDifferent from "@/components/home/BuiltDifferent";
import FeaturedWork from "@/components/home/FeaturedWork";
import ProcessTeaser from "@/components/home/ProcessTeaser";
import ClosingCta from "@/components/home/ClosingCta";

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesOverview />
      <BuiltDifferent />
      <FeaturedWork />
      <ProcessTeaser />
      <ClosingCta />
    </>
  );
}
