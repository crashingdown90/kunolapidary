import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | Kuno Lapidary",
  description:
    "Get in touch with the Kuno Lapidary team. Have questions about lapidary arts, gemstones, or geology? Send us a message and we will get back to you.",
  alternates: {
    canonical: "https://kunolapidary.com/contact",
  },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#FDFBF7]">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#5C4033] to-[#5C4033]/90 px-6 py-16 text-center text-white md:py-24">
        <div className="mx-auto max-w-4xl">
          <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
            Contact Us
          </h1>
          <p className="text-lg text-[#D2B48C] md:text-xl">
            We would love to hear from you. Reach out with questions, feedback,
            or collaboration ideas.
          </p>
        </div>
      </section>

      {/* Content */}
      <div className="mx-auto max-w-5xl px-6 py-12 md:py-16">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Contact" },
          ]}
        />

        <div className="grid gap-12 lg:grid-cols-3">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <h2 className="mb-6 text-2xl font-bold text-[#5C4033]">
              Send Us a Message
            </h2>
            <ContactForm />
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Contact Info */}
            <div className="rounded-xl border border-[#D2B48C]/30 bg-white p-6 shadow-sm">
              <h2 className="mb-6 text-xl font-bold text-[#5C4033]">
                Contact Information
              </h2>

              <div className="space-y-5">
                {/* Email */}
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#8B6914]/10">
                    <svg
                      className="h-5 w-5 text-[#8B6914]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-[#5C4033]">
                      Email
                    </h3>
                    <a
                      href="mailto:hello@kunolapidary.com"
                      className="text-[#8B6914] transition-colors hover:text-[#8B6914]/80"
                    >
                      hello@kunolapidary.com
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#6B8E23]/10">
                    <svg
                      className="h-5 w-5 text-[#6B8E23]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-[#5C4033]">
                      Location
                    </h3>
                    <p className="text-[#2D1810]/70">
                      Worldwide Online Publication
                    </p>
                  </div>
                </div>

                {/* Response Time */}
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#5C4033]/10">
                    <svg
                      className="h-5 w-5 text-[#5C4033]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-[#5C4033]">
                      Response Time
                    </h3>
                    <p className="text-[#2D1810]/70">
                      We typically respond within 1-2 business days.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Newsletter CTA */}
            <div className="rounded-xl border border-[#D2B48C]/30 bg-white p-6 shadow-sm">
              <h2 className="mb-4 text-xl font-bold text-[#5C4033]">
                Stay Updated
              </h2>
              <p className="text-sm text-[#2D1810]/70">
                Subscribe to our newsletter for the latest articles on lapidary
                arts, gemstones, and geology delivered to your inbox.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
