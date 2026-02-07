import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Disclaimer | Kuno Lapidary",
  description:
    "Read the disclaimer for Kuno Lapidary. Understand the limitations of the information provided on kunolapidary.com regarding lapidary arts, gemstones, and geology.",
};

export default function DisclaimerPage() {
  return (
    <main className="min-h-screen bg-bg">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary to-primary/90 px-6 py-16 text-center text-white md:py-20">
        <div className="mx-auto max-w-4xl">
          <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
            Disclaimer
          </h1>
          <p className="text-lg text-light">
            Important information about the content on this website.
          </p>
        </div>
      </section>

      {/* Content */}
      <div className="mx-auto max-w-4xl px-6 py-12 md:py-16">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Disclaimer" },
          ]}
        />

        <div className="space-y-10 text-text">
          <p className="text-sm text-text/60">
            <strong>Last Updated:</strong> February 1, 2026
          </p>

          <p className="text-lg leading-relaxed">
            The information provided on{" "}
            <a
              href="https://kunolapidary.com"
              className="text-secondary underline hover:text-secondary/80"
            >
              kunolapidary.com
            </a>{" "}
            (the &quot;Site&quot;), operated by Kuno Lapidary (&quot;we,&quot;
            &quot;us,&quot; or &quot;our&quot;), is for general informational
            and educational purposes only. By using this Site, you acknowledge
            and agree to the following disclaimers.
          </p>

          {/* General Disclaimer */}
          <section>
            <h2 className="mb-4 text-2xl font-bold text-primary">
              1. General Disclaimer
            </h2>
            <p className="leading-relaxed">
              All information on this Site is provided in good faith. However,
              we make no representation or warranty of any kind, express or
              implied, regarding the accuracy, adequacy, validity, reliability,
              availability, or completeness of any information on the Site.
              Under no circumstance shall we have any liability to you for any
              loss or damage of any kind incurred as a result of the use of the
              Site or reliance on any information provided on the Site. Your
              use of the Site and your reliance on any information on the Site
              is solely at your own risk.
            </p>
          </section>

          {/* Professional Advice Disclaimer */}
          <section>
            <h2 className="mb-4 text-2xl font-bold text-primary">
              2. Professional Advice Disclaimer
            </h2>
            <p className="mb-4 leading-relaxed">
              The content published on Kuno Lapidary, including but not limited
              to articles about geology, gemstones, minerals, lapidary
              techniques, and related earth science topics, is intended for
              educational and informational purposes only. This content does
              not constitute professional advice of any kind.
            </p>
            <p className="mb-4 leading-relaxed">
              Specifically, the information on this Site should not be used as
              a substitute for:
            </p>
            <ul className="ml-6 list-disc space-y-2 leading-relaxed">
              <li>
                <strong>Professional geological assessments</strong> &mdash;
                Our articles about geological formations, mineral
                identification, and rock types are educational in nature and
                should not replace expert geological surveys or evaluations.
              </li>
              <li>
                <strong>Certified gemstone appraisals</strong> &mdash;
                Information about gemstone grading, quality, and value is
                provided for general knowledge. For accurate gemstone
                valuations, consult a certified gemologist or appraiser.
              </li>
              <li>
                <strong>Safety guidance for lapidary work</strong> &mdash;
                While we may discuss lapidary techniques and tools, always
                follow manufacturer safety instructions and consult qualified
                professionals before undertaking lapidary work, especially with
                power tools and chemicals.
              </li>
              <li>
                <strong>Investment or financial advice</strong> &mdash; Any
                discussion of gemstone or mineral values, market trends, or
                collectibility is purely informational and should not be
                construed as investment advice.
              </li>
            </ul>
            <p className="mt-4 leading-relaxed">
              Always seek the advice of qualified professionals for specific
              questions related to your situation.
            </p>
          </section>

          {/* Affiliate and Advertising Disclaimer */}
          <section>
            <h2 className="mb-4 text-2xl font-bold text-primary">
              3. Affiliate and Advertising Disclaimer
            </h2>
            <p className="mb-4 leading-relaxed">
              Kuno Lapidary may contain advertisements, sponsored content, and
              affiliate links. We may earn a commission or receive
              compensation when you click on links or purchase products or
              services through our Site.
            </p>

            <h3 className="mb-2 mt-6 text-xl font-semibold text-primary">
              Google AdSense
            </h3>
            <p className="mb-4 leading-relaxed">
              This Site displays advertisements served by Google AdSense, a
              third-party advertising service provided by Google LLC. Google
              AdSense uses cookies to serve ads based on your prior visits to
              this Site and other websites on the internet. These
              advertisements are clearly distinguishable from our editorial
              content. The inclusion of advertising on this Site does not
              constitute or imply endorsement, recommendation, or favoring by
              Kuno Lapidary of the products or services advertised.
            </p>

            <h3 className="mb-2 mt-6 text-xl font-semibold text-primary">
              Affiliate Links
            </h3>
            <p className="leading-relaxed">
              Some links on this Site may be affiliate links, meaning we may
              earn a small commission at no additional cost to you if you make
              a purchase through those links. We only recommend products and
              services that we believe provide value to our readers.
              Regardless of any affiliate relationships, all opinions expressed
              on this Site are our own.
            </p>
          </section>

          {/* Accuracy of Information */}
          <section>
            <h2 className="mb-4 text-2xl font-bold text-primary">
              4. Accuracy of Information
            </h2>
            <p className="mb-4 leading-relaxed">
              We make every effort to ensure that the information presented on
              this Site is accurate and up-to-date. However, the fields of
              geology, gemology, and lapidary arts are continually evolving,
              and new discoveries, research, and techniques may render some
              information outdated or incomplete.
            </p>
            <p className="leading-relaxed">
              We do not guarantee the accuracy, completeness, or timeliness of
              any information on the Site. Information may contain technical
              inaccuracies or typographical errors. We reserve the right to
              make changes, corrections, and updates to the Site content at
              any time without prior notice.
            </p>
          </section>

          {/* External Links */}
          <section>
            <h2 className="mb-4 text-2xl font-bold text-primary">
              5. External Links
            </h2>
            <p className="leading-relaxed">
              The Site may contain links to external websites that are not
              provided or maintained by or in any way affiliated with Kuno
              Lapidary. Please note that we do not guarantee the accuracy,
              relevance, timeliness, or completeness of any information on
              these external websites. The inclusion of any links does not
              necessarily imply a recommendation or endorsement of the views
              expressed within them. We have no control over the nature,
              content, and availability of those sites. We encourage our
              readers to be aware when they leave our Site and to read the
              privacy statements and terms of service of any external websites
              they visit.
            </p>
          </section>

          {/* Fair Use */}
          <section>
            <h2 className="mb-4 text-2xl font-bold text-primary">
              6. Fair Use
            </h2>
            <p className="leading-relaxed">
              This Site may contain copyrighted material the use of which has
              not always been specifically authorized by the copyright owner.
              We believe that our use of such material constitutes &quot;fair
              use&quot; as provided for in Section 107 of the United States
              Copyright Law. In accordance with Title 17 U.S.C. Section 107,
              the material on this Site is made available for purposes such as
              criticism, comment, news reporting, teaching, scholarship, and
              research. If you wish to use copyrighted material from this Site
              for purposes of your own that go beyond fair use, you must
              obtain permission from the copyright owner. If you believe that
              any content on this Site infringes upon your copyright, please
              contact us so that we can address the issue promptly.
            </p>
          </section>

          {/* Contact */}
          <section>
            <h2 className="mb-4 text-2xl font-bold text-primary">
              7. Contact
            </h2>
            <p className="leading-relaxed">
              If you have any questions or concerns about this Disclaimer,
              please contact us:
            </p>
            <div className="mt-4 rounded-lg border border-light/30 bg-cream/20 p-6">
              <p className="font-semibold text-primary">Kuno Lapidary</p>
              <p className="mt-1">
                Email:{" "}
                <a
                  href="mailto:hello@kunolapidary.com"
                  className="text-secondary underline hover:text-secondary/80"
                >
                  hello@kunolapidary.com
                </a>
              </p>
              <p className="mt-1">
                Website:{" "}
                <a
                  href="https://kunolapidary.com"
                  className="text-secondary underline hover:text-secondary/80"
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
