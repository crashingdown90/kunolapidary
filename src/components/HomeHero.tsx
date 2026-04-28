"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function HomeHero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-bg">
      {/* Ambient Glows */}
      <motion.div 
        animate={{ 
          x: [0, 50, 0],
          y: [0, 30, 0],
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full bg-primary/10 blur-[150px] pointer-events-none" 
      />
      <motion.div 
        animate={{ 
          x: [0, -50, 0],
          y: [0, -30, 0],
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] rounded-full bg-secondary/10 blur-[150px] pointer-events-none" 
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 md:py-32 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="inline-flex items-center px-4 py-2 bg-white/5 border border-white/10 rounded-full mb-10 backdrop-blur-xl">
              <span className="flex h-2 w-2 rounded-full bg-primary mr-3 animate-pulse" />
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white">Advanced Geological Insights</span>
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif italic text-white leading-[1.05] mb-8 tracking-tighter">
              Unearthing <br />
              <span className="text-teal-400">Nature&apos;s Brilliance</span>
            </h1>

            <p className="text-xl text-gray-300 mb-12 leading-relaxed font-light max-w-lg">
              Your premier source for the fascinating intersection of lapidary arts, mineralogy, and earth sciences. Expert guides for the modern collector.
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap gap-4 md:gap-6">
              <Link
                href="/blog"
                className="w-full sm:w-auto text-center px-8 py-4 md:px-10 md:py-5 bg-teal-500 text-[#020617] font-bold rounded-2xl shadow-[0_20px_40px_rgba(20,184,166,0.3)] transition-all duration-500 hover:scale-105 active:scale-95"
              >
                Explore Archive
              </Link>
              <Link
                href="/about"
                className="w-full sm:w-auto text-center px-8 py-4 md:px-10 md:py-5 glass border border-white/10 text-white font-bold rounded-2xl hover:bg-white/5 transition-all duration-500"
              >
                Our Mission
              </Link>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
            className="hidden lg:flex justify-end relative"
          >
            <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full animate-pulse" />
            <div className="w-full max-w-xl relative aspect-square z-10 overflow-hidden rounded-2xl border border-white/10 shadow-[0_0_50px_rgba(20,184,166,0.2)]">
              <Image
                src="/images/hero-real.png"
                alt="Lapidary Workshop"
                fill
                className="object-cover transition-transform duration-[20s] hover:scale-110"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
