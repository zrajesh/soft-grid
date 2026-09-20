import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://softgrid.example.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Softgrid — Web, Mobile & Agentic AI Development Agency",
    template: "%s | Softgrid",
  },
  description:
    "Softgrid builds web apps, mobile apps, and agentic AI solutions for businesses that move fast. From idea to production, one team, end to end.",
  openGraph: {
    title: "Softgrid — Web, Mobile & Agentic AI Development Agency",
    description:
      "Softgrid builds web apps, mobile apps, and agentic AI solutions for businesses that move fast.",
    url: siteUrl,
    siteName: "Softgrid",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <Nav />
        <main className="flex flex-1 flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
