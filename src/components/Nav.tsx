import Link from "next/link";
import Logo from "@/components/Logo";
import Button from "@/components/Button";
import MobileMenu from "@/components/MobileMenu";
import { NAV_LINKS } from "@/lib/navigation";

export default function Nav() {
  return (
    <nav className="relative z-10 flex h-16 flex-none items-center justify-between px-5 sm:px-6 lg:h-20 lg:px-24">
      <Logo />
      <div className="hidden items-center gap-10 lg:flex">
        {NAV_LINKS.map(({ label, href }) => (
          <Link
            key={href}
            href={href}
            className="py-3 text-[15px] font-medium text-muted"
          >
            {label}
          </Link>
        ))}
      </div>
      <div className="hidden lg:block">
        <Button href="/contact">Start a Project</Button>
      </div>
      <MobileMenu />
    </nav>
  );
}
