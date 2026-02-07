import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Privacy Policy | Kuno Lapidary",
  description:
    "Read the Kuno Lapidary privacy policy. Learn how we collect, use, and protect your personal information when you visit kunolapidary.com.",
  alternates: {
    canonical: "https://kunolapidary.com/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-[#FDFBF7]">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#5C4033] to-[#5C4033]/90 px-6 py-16 text-center text-white md:py-20">
        <div className="mx-auto max-w-4xl">
          <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
            Privacy Policy
          </h1>
          <p className="text-lg text-[#D2B48C]">
            Your privacy is important to us.
          </p>
        </div>
      </section>

      {/* Content */}
      <div className="mx-auto max-w-4xl px-6 py-12 md:py-16">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Privacy Policy" },
          ]}
        />

        <div className="prose-custom space-y-10 text-[#2D1810]">
          <p className="text-sm text-[#2D1810]/60">
            <strong>Last Updated:</strong> February 1, 2026
          </p>

          <p className="text-lg leading-relaxed">
            Kuno Lapidary (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;)
            operates the website{" "}
            <a
              href="https://kunolapidary.com"
              className="text-[#8B6914] underline hover:text-[#8B6914]/80"
            >
              kunolapidary.com
            </a>{" "}
            (the &quot;Site&quot;). This Privacy Policy explains how we
            collect, use, disclose, and safeguard your information when you
            visit our website. Please read this privacy policy carefully. If
            you do not agree with the terms of this privacy policy, please do
            not access the Site.
          </p>

          {/* Information We Collect */}
          <section>
            <h2 className="mb-4 text-2xl font-bold text-[#5C4033]">
              1. Information We Collect
            </h2>
            <p className="mb-4 leading-relaxed">
              We may collect information about you in a variety of ways. The
              information we may collect on the Site includes:
            </p>

            <h3 className="mb-2 mt-6 text-xl font-semibold text-[#5C4033]">
              Personal Data
            </h3>
            <p className="mb-4 leading-relaxed">
              Personally identifiable information, such as your name and email
              address, that you voluntarily give to us when you contact us
              through our contact form, subscribe to our newsletter, or
              otherwise interact with the Site.
            </p>

            <h3 className="mb-2 mt-6 text-xl font-semibold text-[#5C4033]">
              Derivative Data
            </h3>
            <p className="mb-4 leading-relaxed">
              Information our servers automatically collect when you access the
              Site, such as your IP address, your browser type, your operating
              system, your access times, and the pages you have viewed directly
              before and after accessing the Site. This data is collected for
              analytics purposes and to improve the user experience.
            </p>

            <h3 className="mb-2 mt-6 text-xl font-semibold text-[#5C4033]">
              Data from Cookies and Similar Technologies
            </h3>
            <p className="leading-relaxed">
              We may use cookies, web beacons, tracking pixels, and other
              tracking technologies on the Site to help customize the Site and
              improve your experience. For more information on how we use
              cookies, please refer to the &quot;Cookies and Tracking
              Technologies&quot; section below.
            </p>
          </section>

          {/* How We Use Your Information */}
          <section>
            <h2 className="mb-4 text-2xl font-bold text-[#5C4033]">
              2. How We Use Your Information
            </h2>
            <p className="mb-4 leading-relaxed">
              Having accurate information about you permits us to provide you
              with a smooth, efficient, and customized experience.
              Specifically, we may use information collected about you via the
              Site to:
            </p>
            <ul className="ml-6 list-disc space-y-2 leading-relaxed">
              <li>Respond to your inquiries and contact form submissions.</li>
              <li>
                Send you newsletters and updates about our content, if you have
                opted in to receive them.
              </li>
              <li>
                Monitor and analyze usage and trends to improve your experience
                with the Site.
              </li>
              <li>
                Deliver targeted advertising, including advertisements served
                through Google AdSense, based on your interests and browsing
                behavior.
              </li>
              <li>
                Compile anonymous statistical data and analysis for internal use
                or with third parties.
              </li>
              <li>
                Prevent fraudulent transactions, monitor against theft, and
                protect against criminal activity.
              </li>
              <li>
                Maintain the security and integrity of the Site.
              </li>
            </ul>
          </section>

          {/* Cookies and Tracking Technologies */}
          <section>
            <h2 className="mb-4 text-2xl font-bold text-[#5C4033]">
              3. Cookies and Tracking Technologies
            </h2>
            <p className="mb-4 leading-relaxed">
              We may use cookies and similar tracking technologies (like web
              beacons and pixels) to access or store information. Cookies are
              small data files stored on your device that help us improve our
              Site and your experience, see which areas and features of our
              Site are popular, and count visits.
            </p>

            <h3 className="mb-2 mt-6 text-xl font-semibold text-[#5C4033]">
              Google AdSense
            </h3>
            <p className="mb-4 leading-relaxed">
              We use Google AdSense to serve advertisements on the Site. Google
              AdSense uses cookies to serve ads based on your prior visits to
              our website or other websites on the internet. Google&apos;s use
              of advertising cookies enables it and its partners to serve ads
              to you based on your visit to our Site and/or other websites on
              the internet. You may opt out of personalized advertising by
              visiting{" "}
              <a
                href="https://www.google.com/settings/ads"
                className="text-[#8B6914] underline hover:text-[#8B6914]/80"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google Ads Settings
              </a>
              .
            </p>

            <h3 className="mb-2 mt-6 text-xl font-semibold text-[#5C4033]">
              Google Analytics
            </h3>
            <p className="mb-4 leading-relaxed">
              We use Google Analytics to collect information about how visitors
              use the Site. Google Analytics collects information such as how
              often users visit the Site, what pages they visit, and what other
              sites they used before coming to the Site. We use the information
              we get from Google Analytics to analyze traffic and improve the
              Site. Google Analytics collects only the IP address assigned to
              you on the date you visit the Site, rather than your name or
              other identifying information. You can learn more about how
              Google uses data by visiting{" "}
              <a
                href="https://policies.google.com/privacy"
                className="text-[#8B6914] underline hover:text-[#8B6914]/80"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google&apos;s Privacy Policy
              </a>
              .
            </p>

            <p className="leading-relaxed">
              Most web browsers are set to accept cookies by default. If you
              prefer, you can usually set your browser to remove or reject
              cookies. Please note that if you choose to remove or reject
              cookies, this could affect the availability and functionality of
              our Site.
            </p>
          </section>

          {/* Third-Party Services */}
          <section>
            <h2 className="mb-4 text-2xl font-bold text-[#5C4033]">
              4. Third-Party Services
            </h2>
            <p className="mb-4 leading-relaxed">
              We may share your information with third parties that perform
              services for us or on our behalf, including data analysis, email
              delivery, hosting services, customer service, and marketing
              assistance.
            </p>
            <p className="leading-relaxed">
              The Site may contain links to third-party websites and
              applications. Once you leave the Site via such a link, any
              information you provide to that third party is not covered by
              this Privacy Policy, and we cannot guarantee the safety and
              privacy of your information. We encourage you to read the privacy
              policy of every website you visit before providing any personal
              information.
            </p>
          </section>

          {/* Data Security */}
          <section>
            <h2 className="mb-4 text-2xl font-bold text-[#5C4033]">
              5. Data Security
            </h2>
            <p className="leading-relaxed">
              We use administrative, technical, and physical security measures
              to help protect your personal information. While we have taken
              reasonable steps to secure the personal information you provide
              to us, please be aware that despite our efforts, no security
              measures are perfect or impenetrable, and no method of data
              transmission can be guaranteed against any interception or other
              type of misuse. Any information disclosed online is vulnerable to
              interception and misuse by unauthorized parties. Therefore, we
              cannot guarantee complete security if you provide personal
              information.
            </p>
          </section>

          {/* Children's Privacy */}
          <section>
            <h2 className="mb-4 text-2xl font-bold text-[#5C4033]">
              6. Children&apos;s Privacy
            </h2>
            <p className="leading-relaxed">
              We do not knowingly solicit information from or market to
              children under the age of 13. If we learn that we have collected
              personal information from a child under age 13 without
              verification of parental consent, we will delete that
              information as quickly as possible. If you believe we might have
              any information from or about a child under 13, please contact
              us at{" "}
              <a
                href="mailto:hello@kunolapidary.com"
                className="text-[#8B6914] underline hover:text-[#8B6914]/80"
              >
                hello@kunolapidary.com
              </a>
              .
            </p>
          </section>

          {/* Changes to This Privacy Policy */}
          <section>
            <h2 className="mb-4 text-2xl font-bold text-[#5C4033]">
              7. Changes to This Privacy Policy
            </h2>
            <p className="leading-relaxed">
              We may update this Privacy Policy from time to time in order to
              reflect changes to our practices or for other operational, legal,
              or regulatory reasons. We will notify you of any changes by
              posting the new Privacy Policy on this page and updating the
              &quot;Last Updated&quot; date at the top of this Privacy Policy.
              You are advised to review this Privacy Policy periodically for
              any changes. Changes to this Privacy Policy are effective when
              they are posted on this page. Your continued use of the Site
              after we post any modifications to the Privacy Policy will
              constitute your acknowledgment of the modifications and your
              consent to abide by the modified Privacy Policy.
            </p>
          </section>

          {/* Contact Information */}
          <section>
            <h2 className="mb-4 text-2xl font-bold text-[#5C4033]">
              8. Contact Information
            </h2>
            <p className="leading-relaxed">
              If you have questions or comments about this Privacy Policy,
              please contact us at:
            </p>
            <div className="mt-4 rounded-lg border border-[#D2B48C]/30 bg-[#F5E6D3]/20 p-6">
              <p className="font-semibold text-[#5C4033]">Kuno Lapidary</p>
              <p className="mt-1">
                Email:{" "}
                <a
                  href="mailto:hello@kunolapidary.com"
                  className="text-[#8B6914] underline hover:text-[#8B6914]/80"
                >
                  hello@kunolapidary.com
                </a>
              </p>
              <p className="mt-1">
                Website:{" "}
                <a
                  href="https://kunolapidary.com"
                  className="text-[#8B6914] underline hover:text-[#8B6914]/80"
                >
                  kunolapidary.com
                </a>
              </p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
