"use client";

import { useState, useEffect } from "react";

const COOKIE_CONSENT_KEY = "kuno-lapidary-cookie-consent";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (consent === null) {
      // Small delay so the banner slides up after page load
      const timer = setTimeout(() => setVisible(true), 500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, "accepted");
    setVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, "declined");
    setVisible(false);
  };

  // Don't render anything if consent has already been given
  if (!visible) return null;

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-[100] transform transition-transform duration-500 ease-out ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
      role="dialog"
      aria-label="Cookie consent"
    >
      <div className="border-t border-[#D2B48C]/30 bg-[#2D1810] px-4 py-4 shadow-[0_-4px_12px_rgba(0,0,0,0.15)] sm:px-6">
        <div className="mx-auto flex max-w-7xl flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex-1">
            <p className="text-sm leading-relaxed text-[#F5E6D3]">
              We use cookies to enhance your experience, serve personalized ads, and analyze site
              traffic. By clicking &quot;Accept,&quot; you consent to our use of cookies for
              advertising and analytics purposes.{" "}
              <a
                href="/privacy-policy"
                className="font-medium text-[#D2B48C] underline underline-offset-2 transition-colors hover:text-[#F5E6D3]"
              >
                Learn more
              </a>
            </p>
          </div>
          <div className="flex shrink-0 gap-3">
            <button
              onClick={handleDecline}
              className="rounded-md border border-[#D2B48C]/40 px-5 py-2 text-sm font-medium text-[#D2B48C] transition-colors duration-200 hover:border-[#D2B48C] hover:text-[#F5E6D3]"
            >
              Decline
            </button>
            <button
              onClick={handleAccept}
              className="rounded-md bg-[#8B6914] px-5 py-2 text-sm font-medium text-[#F5E6D3] transition-colors duration-200 hover:bg-[#A07D1A]"
            >
              Accept
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
