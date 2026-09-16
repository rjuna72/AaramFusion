import type { Metadata, Viewport } from "next";
import "@fontsource/fraunces/latin-400.css";
import "@fontsource/fraunces/latin-500.css";
import "@fontsource/dm-sans/latin-400.css";
import "@fontsource/dm-sans/latin-500.css";
import "@fontsource/dm-sans/latin-600.css";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { indexable, siteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: { default: "Aaram Fusion | Café in Rochedale, Brisbane", template: "%s | Aaram Fusion" },
  description: "Explore the Aaram Fusion café menu and find visiting details for 664 Miles Platting Road, Rochedale, Brisbane.",
  robots: { index: indexable, follow: indexable },
};
export const viewport: Viewport = { themeColor: "#28231e", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en-AU"><body><a className="skip-link" href="#main">Skip to content</a><Header /><main id="main" tabIndex={-1}>{children}</main><Footer /></body></html>;
}
