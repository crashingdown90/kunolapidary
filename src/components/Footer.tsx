import Link from "next/link";
import Logo from "@/components/Logo";
import { FOOTER_LINKS } from "@/lib/constants";

const quickLinks = FOOTER_LINKS.quickLinks;
const categories = FOOTER_LINKS.categories;
const legalLinks = FOOTER_LINKS.legal;

export default function Footer() {
  return (
    <footer className="bg-light/30 text-text border-t border-border relative overflow-hidden py-12 md:py-16">
      {/* Subtle top glow */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-teal-500/20 to-transparent"></div>

      <div className="mx-auto max-w-7xl px-6 sm:px-6 lg:px-8 relative z-10">
        {/* Footer Columns */}
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-4 lg:grid-cols-5">
          {/* Column 1: Logo + Tagline + Description */}
          <div className="col-span-2 md:col-span-4 lg:col-span-2">
            <Link href="/" className="inline-block mb-4" aria-label="Kuno Lapidary Home">
              <Logo size="sm" />
            </Link>
            <p className="text-xl font-serif italic text-text mb-4">
              Exploring Earth&apos;s <span className="text-teal-400">Hidden Treasures</span>
            </p>
            <p className="text-sm leading-relaxed text-text-soft font-light max-w-sm">
              Your trusted guide to the science of lapidary and the geological history that shapes our unique planet.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="col-span-1">
            <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-text mb-5">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-soft transition-colors duration-300 hover:text-teal-400 font-light"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Topics */}
          <div className="col-span-1">
            <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-text mb-5">
              Curated Topics
            </h3>
            <ul className="space-y-3">
              {categories.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-soft transition-colors duration-300 hover:text-teal-400 font-light"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Newsletter or Legal */}
          <div className="col-span-2 md:col-span-2 lg:col-span-1">
            <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-text mb-5">
              Our Presence
            </h3>
            <div className="space-y-3">
              {legalLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-sm text-text-soft transition-colors duration-300 hover:text-teal-400 font-light"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-border flex flex-col items-center justify-between gap-6 text-[10px] font-bold uppercase tracking-[0.2em] text-text-soft sm:flex-row">
          <p>&copy; {new Date().getFullYear()} Kuno Lapidary Architecture.</p>
          <div className="flex gap-8">
            <span className="hover:text-teal-400 transition-colors cursor-pointer">Jakarta, ID</span>
            <span className="hover:text-teal-400 transition-colors cursor-pointer">Scientific Journal</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
