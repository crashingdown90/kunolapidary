"use client";

import { useState, useEffect } from "react";

const COOKIE_CONSENT_KEY = "kuno-lapidary-cookie-consent";

export default function CookieConsent() {
  const [shouldRender, setShouldRender] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (consent === null) {
      setShouldRender(true);
      // Small delay so the banner slides up after page load
      const timer = setTimeout(() => setVisible(true), 500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleDismiss = (choice: "accepted" | "declined") => {
    localStorage.setItem(COOKIE_CONSENT_KEY, choice);
    setVisible(false);
    // Wait for the slide-out animation to finish before unmounting
    setTimeout(() => setShouldRender(false), 500);
  };

  if (!shouldRender) return null;

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-[100] transform transition-transform duration-500 ease-out ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
      role="dialog"
      aria-label="Cookie consent"
    >
      <div className="border-t border-light/30 bg-text px-4 py-4 shadow-[0_-4px_12px_rgba(0,0,0,0.15)] sm:px-6">
        <div className="mx-auto flex max-w-7xl flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex-1">
            <p className="text-sm leading-relaxed text-cream">
              We use cookies to enhance your experience, serve personalized ads, and analyze site
              traffic. By clicking &quot;Accept,&quot; you consent to our use of cookies for
              advertising and analytics purposes.{" "}
              <a
                href="/privacy-policy"
                className="font-medium text-light underline underline-offset-2 transition-colors hover:text-cream"
              >
                Learn more
              </a>
            </p>
          </div>
          <div className="flex shrink-0 gap-3">
            <button
              onClick={() => handleDismiss("declined")}
              className="rounded-md border border-light/40 px-5 py-2 text-sm font-medium text-light transition-colors duration-200 hover:border-light hover:text-cream"
            >
              Decline
            </button>
            <button
              onClick={() => handleDismiss("accepted")}
              className="rounded-md bg-secondary px-5 py-2 text-sm font-medium text-cream transition-colors duration-200 hover:bg-secondary-hover"
            >
              Accept
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
