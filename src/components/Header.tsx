"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "@/components/Logo";
import { NAV_LINKS } from "@/lib/constants";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-700 ${scrolled
        ? "py-3 bg-bg/70 backdrop-blur-2xl border-b border-white/5 saturate-[1.8]"
        : "py-5 bg-transparent border-b border-transparent"
        }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">
        {/* Brand */}
        <Link href="/" className="flex items-center group">
          <Logo size={scrolled ? "sm" : "md"} />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`relative text-[11px] font-bold uppercase tracking-[0.2em] transition-colors duration-300 ${isActive(link.href) ? "text-primary" : "text-gray-400 hover:text-white"
                    }`}
                >
                  {link.label}
                  {isActive(link.href) && (
                    <motion.div
                      layoutId="nav-underline"
                      className="absolute -bottom-2 left-0 w-full h-[2px] bg-primary shadow-[0_0_10px_rgba(20,184,166,0.5)]"
                    />
                  )}
                </Link>
              </li>
            ))}
          </ul>

          <Link
            href="/blog"
            className="px-6 py-2 bg-white/5 border border-white/10 rounded-full text-[10px] font-bold uppercase tracking-widest text-white hover:bg-white/10 transition-all"
          >
            Stay Informed
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-white p-2"
          aria-label="Toggle Menu"
        >
          <div className="w-6 h-5 relative flex flex-col justify-between">
            <span className={`w-full h-[1.5px] bg-current transition-all duration-300 ${mobileMenuOpen ? "rotate-45 translate-y-[9px]" : ""}`} />
            <span className={`w-3/4 h-[1.5px] bg-current transition-opacity duration-300 ${mobileMenuOpen ? "opacity-0" : ""}`} />
            <span className={`w-full h-[1.5px] bg-current transition-all duration-300 ${mobileMenuOpen ? "-rotate-45 -translate-y-[9px]" : ""}`} />
          </div>
        </button>
      </nav>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 top-0 z-[90] bg-bg/95 backdrop-blur-3xl md:hidden overflow-hidden flex flex-col items-center justify-center pt-20"
          >
            <ul className="flex flex-col items-center gap-10">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`text-3xl font-serif italic ${isActive(link.href) ? "text-primary" : "text-white"}`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
