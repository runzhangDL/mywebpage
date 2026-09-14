import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { SpeedInsights } from "@vercel/speed-insights/next";

import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Run Zhang",
    template: "%s · Run Zhang",
  },
  description:
    "Run Zhang — software engineer working on AI, from model training to the systems that run them.",
  icons: { icon: "/favicon.ico" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col bg-bg text-ink">
        <div className="flex-1">{children}</div>
        <Footer />
        <SpeedInsights />
      </body>
    </html>
  );
}
