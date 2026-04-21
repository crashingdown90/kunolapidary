"use client";

import { useState, FormEvent } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required.";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters long.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <div className="rounded-xl border border-accent/30 bg-accent/5 p-8 text-center">
        <div className="mb-4 flex justify-center">
          <svg
            className="h-16 w-16 text-accent"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <h3 className="mb-2 text-2xl font-bold text-primary">
          Thank You!
        </h3>
        <p className="mb-6 text-text/70">
          Your message has been received. Please email us directly at{" "}
          <a href="mailto:hello@kunolapidary.com" className="text-secondary underline">
            hello@kunolapidary.com
          </a>{" "}
          if you need an immediate response.
        </p>
        <button
          onClick={() => {
            setSubmitted(false);
            setFormData({ name: "", email: "", subject: "", message: "" });
            setErrors({});
          }}
          className="rounded-xl bg-teal-500 px-10 py-3.5 text-sm font-bold text-white shadow-[0_0_20px_rgba(20,184,166,0.3)] transition-all duration-300 hover:bg-teal-400 hover:scale-105"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      {/* Name */}
      <div>
        <label
          htmlFor="name"
          className="mb-3 block text-sm font-bold uppercase tracking-widest text-gray-400"
        >
          Name <span className="text-teal-400">*</span>
        </label>
        <input
          type="text"
          id="name"
          value={formData.name}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, name: e.target.value }))
          }
          className={`w-full rounded-xl border px-5 py-4 text-white placeholder-gray-600 outline-none transition-all duration-300 focus:ring-4 focus:ring-teal-500/10 ${errors.name
              ? "border-red-500/50 bg-red-500/5"
              : "border-white/10 bg-white/5 focus:border-teal-500"
            }`}
          placeholder="Your full name"
        />
        {errors.name && (
          <p className="mt-1 text-sm text-red-600">{errors.name}</p>
        )}
      </div>

      {/* Email */}
      <div>
        <label
          htmlFor="email"
          className="mb-3 block text-sm font-bold uppercase tracking-widest text-gray-400"
        >
          Email <span className="text-teal-400">*</span>
        </label>
        <input
          type="email"
          id="email"
          value={formData.email}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, email: e.target.value }))
          }
          className={`w-full rounded-xl border px-5 py-4 text-white placeholder-gray-600 outline-none transition-all duration-300 focus:ring-4 focus:ring-teal-500/10 ${errors.email
              ? "border-red-500/50 bg-red-500/5"
              : "border-white/10 bg-white/5 focus:border-teal-500"
            }`}
          placeholder="your@email.com"
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-600">{errors.email}</p>
        )}
      </div>

      {/* Subject */}
      <div>
        <label
          htmlFor="subject"
          className="mb-3 block text-sm font-bold uppercase tracking-widest text-gray-400"
        >
          Subject <span className="text-teal-400">*</span>
        </label>
        <input
          type="text"
          id="subject"
          value={formData.subject}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, subject: e.target.value }))
          }
          className={`w-full rounded-xl border px-5 py-4 text-white placeholder-gray-600 outline-none transition-all duration-300 focus:ring-4 focus:ring-teal-500/10 ${errors.subject
              ? "border-red-500/50 bg-red-500/5"
              : "border-white/10 bg-white/5 focus:border-teal-500"
            }`}
          placeholder="What is your message about?"
        />
        {errors.subject && (
          <p className="mt-1 text-sm text-red-600">{errors.subject}</p>
        )}
      </div>

      {/* Message */}
      <div>
        <label
          htmlFor="message"
          className="mb-3 block text-sm font-bold uppercase tracking-widest text-gray-400"
        >
          Message <span className="text-teal-400">*</span>
        </label>
        <textarea
          id="message"
          rows={6}
          value={formData.message}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, message: e.target.value }))
          }
          className={`w-full resize-vertical rounded-xl border px-5 py-4 text-white placeholder-gray-600 outline-none transition-all duration-300 focus:ring-4 focus:ring-teal-500/10 ${errors.message
              ? "border-red-500/50 bg-red-500/5"
              : "border-white/10 bg-white/5 focus:border-teal-500"
            }`}
          placeholder="Write your message here..."
        />
        {errors.message && (
          <p className="mt-1 text-sm text-red-600">{errors.message}</p>
        )}
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="w-full rounded-xl bg-teal-500 px-8 py-4 text-lg font-bold text-white shadow-[0_0_30px_rgba(20,184,166,0.3)] transition-all duration-300 hover:bg-teal-400 hover:scale-[1.02] active:scale-95 focus:outline-none focus:ring-4 focus:ring-teal-500/20"
      >
        Send Cosmic Signal
      </button>
    </form>
  );
}
