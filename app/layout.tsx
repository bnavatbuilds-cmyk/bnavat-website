import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono, Orbitron } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CookieConsent from "@/components/legal/CookieConsent";
import OrganizationSchema from "@/components/seo/OrganizationSchema";
import { BRAND } from "@/lib/constants";

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["700", "800"],
  variable: "--font-brand-display",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-brand-heading",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-brand-body",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-brand-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL(BRAND.siteUrl),
  title: {
    default: "BNAVAT | Digital Architecture & Web Engineering Studio",
    template: "%s | BNAVAT",
  },
  description:
    "BNAVAT designs and engineers high-performance websites, scalable web applications and bespoke digital experiences for businesses, founders and creators. Precision-led design. Clean engineering. Reliable execution.",
  applicationName: "BNAVAT",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: BRAND.siteUrl,
    siteName: "BNAVAT",
    title: "BNAVAT | Digital Architecture & Web Engineering Studio",
    description:
      "Precision-led design. Clean engineering. High-performance digital systems.",
    images: [
      {
        url: "/og/bnavat-og.svg",
        width: 1200,
        height: 630,
        alt: "BNAVAT — Digital Architecture & Web Engineering",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BNAVAT | Digital Architecture & Web Engineering Studio",
    description:
      "Precision-led design. Clean engineering. High-performance digital systems.",
    images: ["/og/bnavat-og.svg"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${orbitron.variable} ${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <OrganizationSchema />
      </head>
      <body className="min-h-screen flex flex-col bg-bnavat-base text-bnavat-primary antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}
