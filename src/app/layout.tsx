import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";

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
    <html lang="en">
      <body className="antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[200] focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-white focus:outline-none"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="min-h-screen">{children}</main>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}
