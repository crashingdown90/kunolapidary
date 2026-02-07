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
      <div className="rounded-xl border border-[#6B8E23]/30 bg-[#6B8E23]/5 p-8 text-center">
        <div className="mb-4 flex justify-center">
          <svg
            className="h-16 w-16 text-[#6B8E23]"
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
        <h3 className="mb-2 text-2xl font-bold text-[#5C4033]">
          Message Sent Successfully!
        </h3>
        <p className="mb-6 text-[#2D1810]/70">
          Thank you for reaching out to Kuno Lapidary. We appreciate your
          message and will get back to you as soon as possible.
        </p>
        <button
          onClick={() => {
            setSubmitted(false);
            setFormData({ name: "", email: "", subject: "", message: "" });
            setErrors({});
          }}
          className="rounded-lg bg-[#5C4033] px-6 py-3 font-medium text-white transition-colors hover:bg-[#5C4033]/90"
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
          className="mb-2 block text-sm font-medium text-[#5C4033]"
        >
          Name <span className="text-red-600">*</span>
        </label>
        <input
          type="text"
          id="name"
          value={formData.name}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, name: e.target.value }))
          }
          className={`w-full rounded-lg border px-4 py-3 text-[#2D1810] placeholder-[#2D1810]/40 outline-none transition-colors focus:border-[#8B6914] focus:ring-2 focus:ring-[#8B6914]/20 ${
            errors.name
              ? "border-red-400 bg-red-50"
              : "border-[#D2B48C]/50 bg-white"
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
          className="mb-2 block text-sm font-medium text-[#5C4033]"
        >
          Email <span className="text-red-600">*</span>
        </label>
        <input
          type="email"
          id="email"
          value={formData.email}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, email: e.target.value }))
          }
          className={`w-full rounded-lg border px-4 py-3 text-[#2D1810] placeholder-[#2D1810]/40 outline-none transition-colors focus:border-[#8B6914] focus:ring-2 focus:ring-[#8B6914]/20 ${
            errors.email
              ? "border-red-400 bg-red-50"
              : "border-[#D2B48C]/50 bg-white"
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
          className="mb-2 block text-sm font-medium text-[#5C4033]"
        >
          Subject <span className="text-red-600">*</span>
        </label>
        <input
          type="text"
          id="subject"
          value={formData.subject}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, subject: e.target.value }))
          }
          className={`w-full rounded-lg border px-4 py-3 text-[#2D1810] placeholder-[#2D1810]/40 outline-none transition-colors focus:border-[#8B6914] focus:ring-2 focus:ring-[#8B6914]/20 ${
            errors.subject
              ? "border-red-400 bg-red-50"
              : "border-[#D2B48C]/50 bg-white"
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
          className="mb-2 block text-sm font-medium text-[#5C4033]"
        >
          Message <span className="text-red-600">*</span>
        </label>
        <textarea
          id="message"
          rows={6}
          value={formData.message}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, message: e.target.value }))
          }
          className={`w-full resize-vertical rounded-lg border px-4 py-3 text-[#2D1810] placeholder-[#2D1810]/40 outline-none transition-colors focus:border-[#8B6914] focus:ring-2 focus:ring-[#8B6914]/20 ${
            errors.message
              ? "border-red-400 bg-red-50"
              : "border-[#D2B48C]/50 bg-white"
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
        className="w-full rounded-lg bg-[#5C4033] px-6 py-3 text-lg font-medium text-white transition-colors hover:bg-[#5C4033]/90 focus:outline-none focus:ring-2 focus:ring-[#8B6914]/50 focus:ring-offset-2"
      >
        Send Message
      </button>
    </form>
  );
}
