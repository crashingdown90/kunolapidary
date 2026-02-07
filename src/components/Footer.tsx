import Link from "next/link";
import Logo from "@/components/Logo";
import { FOOTER_LINKS } from "@/lib/constants";

const quickLinks = FOOTER_LINKS.quickLinks;
const categories = FOOTER_LINKS.categories;
const legalLinks = FOOTER_LINKS.legal;

export default function Footer() {
  return (
    <footer className="bg-text text-light">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Footer Columns */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Column 1: Logo + Tagline + Description */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-block" aria-label="Kuno Lapidary Home">
              <Logo size="sm" />
            </Link>
            <p className="mt-3 text-lg font-medium text-cream">
              Exploring Earth&apos;s Hidden Treasures
            </p>
            <p className="mt-2 text-sm leading-relaxed text-light/80">
              Discover the art and science of lapidary, learn about fascinating gemstones, and
              explore the geological wonders that shape our world.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-cream">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-light/80 transition-colors duration-200 hover:text-cream"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Categories */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-cream">
              Categories
            </h3>
            <ul className="mt-4 space-y-2">
              {categories.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-light/80 transition-colors duration-200 hover:text-cream"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Legal */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-cream">
              Legal
            </h3>
            <ul className="mt-4 space-y-2">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-light/80 transition-colors duration-200 hover:text-cream"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 border-t border-light/20 pt-6">
          <div className="flex flex-col items-center justify-between gap-2 text-center text-xs text-light/60 sm:flex-row sm:text-left">
            <p>&copy; 2026 Kuno Lapidary. All rights reserved.</p>
            <p>kunolapidary.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
