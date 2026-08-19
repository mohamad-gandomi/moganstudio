import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
import { siteUrl } from "@/lib/site";
import "@fontsource-variable/manrope/wght.css";
import "@fontsource-variable/newsreader/wght.css";
import "@fontsource-variable/newsreader/wght-italic.css";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Mogan Studio — WordPress & WooCommerce Development",
  description: "WordPress and WooCommerce development, performance improvements, technical support, and custom web development for growing businesses.",
  alternates: { canonical: "/" },
  applicationName: "Mogan Studio",
  authors: [{ name: "Gandomi" }],
  creator: "Gandomi",
  openGraph: {
    type: "website",
    url: "/",
    title: "Mogan Studio — WordPress & WooCommerce Development",
    description: "Fast, reliable WordPress and WooCommerce development for growing businesses.",
    siteName: "Mogan Studio",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Mogan Studio" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mogan Studio — WordPress & WooCommerce Development",
    description: "Fast, reliable WordPress and WooCommerce development for growing businesses.",
    images: ["/opengraph-image"],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#f7f7f5" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
