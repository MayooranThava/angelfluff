import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Figtree, Great_Vibes } from "next/font/google";
import { MainContent } from "@/components/main-content";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SITE } from "@/lib/constants";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const greatVibes = Great_Vibes({
  variable: "--font-script",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: {
    default: `${SITE.name} | Natural Handcrafted Skincare`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  metadataBase: new URL("https://angelfluff444.ca"),
  openGraph: {
    title: SITE.name,
    description: SITE.description,
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#f6e4e4",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${figtree.variable} ${greatVibes.variable} h-full`}
    >
      <body className="flex min-h-full flex-col font-sans antialiased">
        <SiteHeader />
        <MainContent>{children}</MainContent>
        <SiteFooter />
      </body>
    </html>
  );
}
