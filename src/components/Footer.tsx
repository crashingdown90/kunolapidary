import Link from "next/link";
import Logo from "@/components/Logo";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const categories = [
  { href: "/blog?category=Lapidary", label: "Lapidary" },
  { href: "/blog?category=Gemstones", label: "Gemstones" },
  { href: "/blog?category=Geology", label: "Geology" },
];

const legalLinks = [
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms-of-service", label: "Terms of Service" },
  { href: "/disclaimer", label: "Disclaimer" },
];

export default function Footer() {
  return (
    <footer className="bg-[#2D1810] text-[#D2B48C]">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Footer Columns */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Column 1: Logo + Tagline + Description */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-block" aria-label="Kuno Lapidary Home">
              <Logo size="sm" />
            </Link>
            <p className="mt-3 text-lg font-medium text-[#F5E6D3]">
              Exploring Earth&apos;s Hidden Treasures
            </p>
            <p className="mt-2 text-sm leading-relaxed text-[#D2B48C]/80">
              Discover the art and science of lapidary, learn about fascinating gemstones, and
              explore the geological wonders that shape our world.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[#F5E6D3]">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#D2B48C]/80 transition-colors duration-200 hover:text-[#F5E6D3]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Categories */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[#F5E6D3]">
              Categories
            </h3>
            <ul className="mt-4 space-y-2">
              {categories.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#D2B48C]/80 transition-colors duration-200 hover:text-[#F5E6D3]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Legal */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[#F5E6D3]">
              Legal
            </h3>
            <ul className="mt-4 space-y-2">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#D2B48C]/80 transition-colors duration-200 hover:text-[#F5E6D3]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 border-t border-[#D2B48C]/20 pt-6">
          <div className="flex flex-col items-center justify-between gap-2 text-center text-xs text-[#D2B48C]/60 sm:flex-row sm:text-left">
            <p>&copy; 2026 Kuno Lapidary. All rights reserved.</p>
            <p>kunolapidary.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
