import type { Metadata } from "next";
import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Tell Softgrid what you're building — we'll tell you how fast we can ship it.",
};

export default function ContactPage() {
  return (
    <section className="relative overflow-hidden px-5 py-14 sm:px-6 lg:px-24 lg:py-20">
      <div className="relative z-2 mx-auto flex max-w-[1120px] flex-col gap-10 lg:grid lg:grid-cols-[720px_400px] lg:items-start lg:gap-10">
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-3 font-mono-ui text-[13px] tracking-[0.14em] text-accent-violet-light uppercase">
            <span className="h-px w-7 bg-accent-violet-light opacity-70" />
            <span>Contact</span>
          </div>
          <h1 className="m-0 text-[46px] leading-[0.98] font-semibold tracking-[-0.048em] text-foreground text-balance lg:text-[76px]">
            Let&rsquo;s Build
            <br />
            Something
          </h1>
          <p className="m-0 max-w-[560px] text-lg leading-[1.55] text-muted text-pretty lg:text-xl">
            Tell us what you&rsquo;re building — we&rsquo;ll tell you how fast
            we can ship it.
          </p>
          <ContactForm />
        </div>

        <ContactInfo />
      </div>
    </section>
  );
}
