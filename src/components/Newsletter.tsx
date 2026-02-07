"use client";

import { useState, type FormEvent } from "react";

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
    <section className="bg-[#5C4033] px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-2xl font-bold text-[#F5E6D3] sm:text-3xl">Stay Updated</h2>
        <p className="mt-3 text-sm leading-relaxed text-[#D2B48C]">
          Get the latest articles on gemstones, lapidary techniques, and geological discoveries
          delivered straight to your inbox.
        </p>

        {status === "success" ? (
          <div className="mt-6 rounded-lg border border-[#6B8E23]/40 bg-[#6B8E23]/20 px-6 py-4">
            <p className="font-medium text-[#F5E6D3]">
              Thank you for subscribing! You&apos;ll receive our next update soon.
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
                  className="w-full rounded-md border border-[#D2B48C]/30 bg-[#FDFBF7] px-4 py-2.5 text-sm text-[#2D1810] placeholder-[#5C4033]/50 outline-none transition-colors duration-200 focus:border-[#8B6914] focus:ring-2 focus:ring-[#8B6914]/30"
                />
                {status === "error" && (
                  <p className="mt-1.5 text-left text-xs text-[#F5E6D3]/90">{errorMessage}</p>
                )}
              </div>
              <button
                type="submit"
                className="shrink-0 rounded-md bg-[#8B6914] px-6 py-2.5 text-sm font-medium text-[#F5E6D3] transition-colors duration-200 hover:bg-[#A07D1A]"
              >
                Subscribe
              </button>
            </div>
            <p className="mt-3 text-xs text-[#D2B48C]/60">
              No spam, ever. Unsubscribe at any time.
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
