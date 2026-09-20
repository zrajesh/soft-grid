import BrowserMockup from "@/components/home/hero-visual/BrowserMockup";
import PhoneMockup from "@/components/home/hero-visual/PhoneMockup";

export default function HeroVisual() {
  return (
    <div
      aria-hidden="true"
      className="relative mx-auto h-[380px] w-[350px] flex-none lg:mx-0 lg:h-[700px] lg:w-[560px]"
    >
      <div
        className="absolute top-0 left-[118px] h-[230px] w-[230px] rounded-full lg:top-[10px] lg:left-[190px] lg:h-[340px] lg:w-[340px]"
        style={{
          background:
            "radial-gradient(circle at 32% 28%, #C9BEFF 0%, #7C5CFF 30%, #3A2A9E 62%, #0E0B24 100%)",
          boxShadow:
            "0 0 80px rgba(124,92,255,0.5), inset -20px -30px 60px rgba(34,211,238,0.25)",
        }}
      />
      <div className="absolute top-[62px] left-[44px] h-[84px] w-[290px] rotate-[-14deg] rounded-full border border-[rgba(34,211,238,0.35)] lg:top-[150px] lg:left-[110px] lg:h-[130px] lg:w-[460px] lg:rotate-[-16deg]" />
      <div className="absolute top-[96px] left-0 lg:top-[170px]">
        <BrowserMockup />
      </div>
      <div className="absolute top-[120px] left-[214px] lg:top-[262px] lg:left-[352px]">
        <PhoneMockup />
      </div>
    </div>
  );
}
