"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Basic email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setStatus("error");
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    // Simulate successful subscription (no actual backend)
    setStatus("success");
    setEmail("");
  };

  return (
    <section className="bg-[#020617] px-4 py-16 md:py-20 sm:px-6 lg:px-8 relative overflow-hidden border-t border-white/5">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(20,184,166,0.05)_0,transparent_70%)] pointer-events-none"></div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 30 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mx-auto max-w-4xl glass-card border border-white/10 rounded-3xl p-6 md:p-12 text-center relative z-10 shadow-2xl"
      >
        <h2 className="text-3xl font-bold bg-gradient-to-r from-teal-400 to-purple-400 bg-clip-text text-transparent sm:text-4xl">Join the Inner Circle</h2>
        <p className="mt-4 text-lg leading-relaxed text-gray-400 max-w-2xl mx-auto">
          Get the latest articles on gemstones, lapidary techniques, and geological discoveries
          delivered straight to your inbox.
        </p>

        {status === "success" ? (
          <div className="mt-8 rounded-2xl border border-teal-500/20 bg-teal-500/10 px-8 py-6">
            <p className="font-semibold text-teal-300">
              Welcome to the family! Newsletter subscriptions are being activated soon.
              Follow us for cosmic updates in the meantime.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-6" noValidate>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-center">
              <div className="flex-1 sm:max-w-sm">
                <label htmlFor="newsletter-email" className="sr-only">
                  Email address
                </label>
                <input
                  id="newsletter-email"
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (status === "error") {
                      setStatus("idle");
                      setErrorMessage("");
                    }
                  }}
                  placeholder="Enter your email"
                  required
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-5 py-3.5 text-sm text-white placeholder-gray-500 outline-none transition-all duration-300 focus:border-teal-500 focus:ring-4 focus:ring-teal-500/10"
                />
                {status === "error" && (
                  <p className="mt-1.5 text-left text-xs text-cream/90">{errorMessage}</p>
                )}
              </div>
              <button
                type="submit"
                className="w-full sm:w-auto shrink-0 rounded-xl bg-teal-500 px-10 py-3.5 text-sm font-bold text-white shadow-[0_0_20px_rgba(20,184,166,0.3)] transition-all duration-300 hover:bg-teal-400 hover:scale-105 active:scale-95"
              >
                Sign Up
              </button>
            </div>
            <p className="mt-4 text-xs text-gray-500 font-medium uppercase tracking-widest">
              Zero noise. Just pure geological insight.
            </p>
          </form>
        )}
      </motion.div>
    </section>
  );
}
