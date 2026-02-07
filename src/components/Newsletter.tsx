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
    <section className="bg-primary px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-2xl font-bold text-cream sm:text-3xl">Stay Updated</h2>
        <p className="mt-3 text-sm leading-relaxed text-light">
          Get the latest articles on gemstones, lapidary techniques, and geological discoveries
          delivered straight to your inbox.
        </p>

        {status === "success" ? (
          <div className="mt-6 rounded-lg border border-accent/40 bg-accent/20 px-6 py-4">
            <p className="font-medium text-cream">
              Thank you for your interest! Newsletter subscriptions are coming soon.
              Follow us on social media for updates in the meantime.
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
                  className="w-full rounded-md border border-light/30 bg-bg px-4 py-2.5 text-sm text-text placeholder-primary/50 outline-none transition-colors duration-200 focus:border-secondary focus:ring-2 focus:ring-secondary/30"
                />
                {status === "error" && (
                  <p className="mt-1.5 text-left text-xs text-cream/90">{errorMessage}</p>
                )}
              </div>
              <button
                type="submit"
                className="shrink-0 rounded-md bg-secondary px-6 py-2.5 text-sm font-medium text-cream transition-colors duration-200 hover:bg-secondary-hover"
              >
                Subscribe
              </button>
            </div>
            <p className="mt-3 text-xs text-light/60">
              No spam, ever. Unsubscribe at any time.
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
