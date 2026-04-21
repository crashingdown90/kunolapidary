import Link from "next/link";
import Logo from "@/components/Logo";
import { FOOTER_LINKS } from "@/lib/constants";

const quickLinks = FOOTER_LINKS.quickLinks;
const categories = FOOTER_LINKS.categories;
const legalLinks = FOOTER_LINKS.legal;

export default function Footer() {
  return (
    <footer className="bg-[#020617] text-gray-300 border-t border-white/10 relative overflow-hidden">
      {/* Subtle top glow */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-teal-500/50 to-transparent"></div>

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 relative z-10">
        {/* Footer Columns */}
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Column 1: Logo + Tagline + Description */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-block" aria-label="Kuno Lapidary Home">
              <Logo size="sm" />
            </Link>
            <p className="mt-4 text-lg font-semibold bg-gradient-to-r from-teal-400 to-purple-400 bg-clip-text text-transparent">
              Exploring Earth&apos;s Hidden Treasures
            </p>
            <p className="mt-4 text-sm leading-relaxed text-gray-400">
              Discover the art and science of lapidary, learn about fascinating gemstones, and
              explore the geological wonders that shape our world.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-white mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 transition-colors duration-300 hover:text-teal-400 flex items-center group"
                  >
                    <span className="w-0 overflow-hidden group-hover:w-3 transition-all duration-300 ease-out text-teal-500 mr-0 group-hover:mr-1">&rsaquo;</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Categories */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-white mb-6">
              Categories
            </h3>
            <ul className="space-y-3">
              {categories.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 transition-colors duration-300 hover:text-teal-400 flex items-center group"
                  >
                    <span className="w-0 overflow-hidden group-hover:w-3 transition-all duration-300 ease-out text-teal-500 mr-0 group-hover:mr-1">&rsaquo;</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Legal */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-white mb-6">
              Legal
            </h3>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 transition-colors duration-300 hover:text-teal-400 flex items-center group"
                  >
                    <span className="w-0 overflow-hidden group-hover:w-3 transition-all duration-300 ease-out text-teal-500 mr-0 group-hover:mr-1">&rsaquo;</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        {/* Bottom Bar */}
        <div className="mt-16 border-t border-white/10 pt-8 flex flex-col items-center justify-between gap-4 text-center text-sm text-gray-500 sm:flex-row sm:text-left">
          <p>&copy; {new Date().getFullYear()} Kuno Lapidary. All rights reserved.</p>
          <div className="flex gap-4">
            <span className="hover:text-white transition-colors cursor-pointer">kunolapidary.com</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
