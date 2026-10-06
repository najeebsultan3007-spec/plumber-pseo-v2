import type { Metadata, Viewport } from "next";
import "./globals.css";
import { SITE_URL } from "@/lib/config";

export const metadata: Metadata = { metadataBase: new URL(SITE_URL) };
export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#0a1f44" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white font-sans text-slate-900 antialiased">{children}</body>
    </html>
  );
}
