"use client";

import { useState, useEffect } from "react";

const COOKIE_CONSENT_KEY = "kuno-lapidary-cookie-consent";

export default function CookieConsent() {
  const [shouldRender, setShouldRender] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (consent === null) {
      // Defer state update to avoid synchronous cascading render
      const renderTimer = setTimeout(() => setShouldRender(true), 0);
      // Small delay so the banner slides up after page load
      const visibleTimer = setTimeout(() => setVisible(true), 500);
      return () => {
        clearTimeout(renderTimer);
        clearTimeout(visibleTimer);
      };
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
      className={`fixed bottom-0 left-0 right-0 z-[100] transform transition-transform duration-500 ease-out ${visible ? "translate-y-0" : "translate-y-full"
        }`}
      role="dialog"
      aria-label="Cookie consent"
    >
      <div className="border-t border-white/10 bg-[#0f172a]/95 backdrop-blur-xl px-4 py-5 shadow-[0_-10px_40px_rgba(0,0,0,0.5)] sm:px-6 relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-teal-500/30 to-transparent"></div>
        <div className="mx-auto flex max-w-7xl flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex-1">
            <p className="text-sm leading-relaxed text-gray-300">
              We use cookies to enhance your experience, serve personalized ads, and analyze site
              traffic. By clicking &quot;Accept,&quot; you consent to our use of cookies for
              advertising and analytics purposes.{" "}
              <a
                href="/privacy-policy"
                className="font-bold text-teal-400 underline decoration-teal-400/30 underline-offset-4 transition-all hover:text-teal-300"
              >
                Learn more
              </a>
            </p>
          </div>
          <div className="flex shrink-0 gap-3">
            <button
              onClick={() => handleDismiss("declined")}
              className="rounded-xl border border-white/10 bg-white/5 px-6 py-2.5 text-sm font-bold text-gray-400 transition-all duration-300 hover:bg-white/10 hover:text-white"
            >
              Decline
            </button>
            <button
              onClick={() => handleDismiss("accepted")}
              className="rounded-xl bg-teal-500 px-8 py-2.5 text-sm font-bold text-white shadow-[0_0_20px_rgba(20,184,166,0.3)] transition-all duration-300 hover:bg-teal-400 hover:scale-105 active:scale-95"
            >
              Accept
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
