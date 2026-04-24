import type { Metadata } from "next";
import { Inter, Outfit, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit", display: "swap" });
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-serif",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kunolapidary.com"),
  title: {
    default: "Kuno Lapidary - Unearthing Nature's Brilliance, One Stone at a Time",
    template: "%s | Kuno Lapidary",
  },
  description:
    "Explore the fascinating world of lapidary arts, gemstones, and geology. Expert guides, in-depth articles, and geological insights for enthusiasts and professionals.",
  keywords: [
    "lapidary",
    "gemstones",
    "geology",
    "gem cutting",
    "stone polishing",
    "minerals",
    "precious stones",
    "rock formation",
    "cabochon",
    "crystal",
  ],
  authors: [{ name: "Kuno Lapidary Team" }],
  creator: "Kuno Lapidary",
  publisher: "Kuno Lapidary",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://kunolapidary.com",
    siteName: "Kuno Lapidary",
    title: "Kuno Lapidary - Unearthing Nature's Brilliance, One Stone at a Time",
    description:
      "Explore the fascinating world of lapidary arts, gemstones, and geology. Expert guides, in-depth articles, and geological insights for enthusiasts and professionals.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kuno Lapidary - Unearthing Nature's Brilliance",
    description:
      "Explore the fascinating world of lapidary arts, gemstones, and geology.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add your Google Search Console verification code here
    // google: "your-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable} ${cormorant.variable}`}>
      <body className="antialiased bg-bg text-gray-300 font-sans min-h-screen flex flex-col">
        {/* Google AdSense Integration */}
        <Script
          async
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.NEXT_PUBLIC_ADSENSE_ID || 'ca-pub-9806436984867634'}`}
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[200] focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-white focus:outline-none"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="flex-1 w-full pt-24 md:pt-32">{children}</main>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}
