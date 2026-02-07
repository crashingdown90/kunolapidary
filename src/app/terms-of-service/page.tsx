import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Terms of Service | Kuno Lapidary",
  description:
    "Read the Terms of Service for Kuno Lapidary. Understand the rules and regulations governing the use of kunolapidary.com and its content.",
};

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen bg-[#FDFBF7]">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#5C4033] to-[#5C4033]/90 px-6 py-16 text-center text-white md:py-20">
        <div className="mx-auto max-w-4xl">
          <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
            Terms of Service
          </h1>
          <p className="text-lg text-[#D2B48C]">
            Please read these terms carefully before using our website.
          </p>
        </div>
      </section>

      {/* Content */}
      <div className="mx-auto max-w-4xl px-6 py-12 md:py-16">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Terms of Service" },
          ]}
        />

        <div className="space-y-10 text-[#2D1810]">
          <p className="text-sm text-[#2D1810]/60">
            <strong>Last Updated:</strong> February 1, 2026
          </p>

          <p className="text-lg leading-relaxed">
            Welcome to Kuno Lapidary. These Terms of Service
            (&quot;Terms&quot;) govern your use of the website located at{" "}
            <a
              href="https://kunolapidary.com"
              className="text-[#8B6914] underline hover:text-[#8B6914]/80"
            >
              kunolapidary.com
            </a>{" "}
            (the &quot;Site&quot;), operated by Kuno Lapidary (&quot;we,&quot;
            &quot;us,&quot; or &quot;our&quot;). By accessing or using the
            Site, you agree to be bound by these Terms. If you do not agree to
            all of these Terms, do not use the Site.
          </p>

          {/* Acceptance of Terms */}
          <section>
            <h2 className="mb-4 text-2xl font-bold text-[#5C4033]">
              1. Acceptance of Terms
            </h2>
            <p className="leading-relaxed">
              By accessing and using this Site, you accept and agree to be
              bound by the terms and provisions of this agreement. In
              addition, when using the Site, you shall be subject to any
              posted guidelines or rules applicable to the Site. Any
              participation in this Site will constitute acceptance of this
              agreement. If you do not agree to abide by the above, please do
              not use this Site. We reserve the right to modify these Terms at
              any time, and such modifications shall be effective immediately
              upon posting on the Site. Your continued use of the Site
              following any modifications indicates your acceptance of the
              modified Terms.
            </p>
          </section>

          {/* Use of Website */}
          <section>
            <h2 className="mb-4 text-2xl font-bold text-[#5C4033]">
              2. Use of Website
            </h2>
            <p className="mb-4 leading-relaxed">
              You agree to use the Site only for lawful purposes and in a
              manner that does not infringe the rights of, restrict, or
              inhibit anyone else&apos;s use and enjoyment of the Site. You
              agree not to:
            </p>
            <ul className="ml-6 list-disc space-y-2 leading-relaxed">
              <li>
                Use the Site in any way that violates any applicable federal,
                state, local, or international law or regulation.
              </li>
              <li>
                Engage in any conduct that restricts or inhibits anyone&apos;s
                use or enjoyment of the Site, or which may harm us or users of
                the Site.
              </li>
              <li>
                Use the Site in any manner that could disable, overburden,
                damage, or impair the Site or interfere with any other
                party&apos;s use of the Site.
              </li>
              <li>
                Use any robot, spider, or other automatic device, process, or
                means to access the Site for any purpose, including monitoring
                or copying any of the material on the Site without our prior
                written consent.
              </li>
              <li>
                Introduce any viruses, Trojan horses, worms, logic bombs, or
                other material that is malicious or technologically harmful.
              </li>
              <li>
                Attempt to gain unauthorized access to, interfere with, damage,
                or disrupt any parts of the Site, the server on which the Site
                is stored, or any server, computer, or database connected to
                the Site.
              </li>
            </ul>
          </section>

          {/* Intellectual Property */}
          <section>
            <h2 className="mb-4 text-2xl font-bold text-[#5C4033]">
              3. Intellectual Property
            </h2>
            <p className="mb-4 leading-relaxed">
              The Site and its entire contents, features, and functionality
              (including but not limited to all information, software, text,
              displays, images, video, and audio, and the design, selection,
              and arrangement thereof) are owned by Kuno Lapidary, its
              licensors, or other providers of such material and are protected
              by copyright, trademark, patent, trade secret, and other
              intellectual property or proprietary rights laws.
            </p>
            <p className="leading-relaxed">
              You may not reproduce, distribute, modify, create derivative
              works of, publicly display, publicly perform, republish,
              download, store, or transmit any of the material on our Site
              without the prior written consent of Kuno Lapidary, except as
              follows: your computer may temporarily store copies of such
              materials in RAM incidental to your accessing and viewing those
              materials, and you may store files that are automatically cached
              by your web browser for display enhancement purposes.
            </p>
          </section>

          {/* User Content */}
          <section>
            <h2 className="mb-4 text-2xl font-bold text-[#5C4033]">
              4. User Content
            </h2>
            <p className="mb-4 leading-relaxed">
              The Site may allow you to submit comments, feedback, or other
              content (&quot;User Content&quot;). By submitting User Content,
              you grant us a non-exclusive, worldwide, royalty-free,
              irrevocable, sub-licensable, and transferable license to use,
              reproduce, modify, adapt, publish, translate, create derivative
              works from, distribute, and display such content in any media.
            </p>
            <p className="leading-relaxed">
              You represent and warrant that you own or have the necessary
              rights to submit the User Content and that the User Content does
              not violate the rights of any third party, including intellectual
              property rights and privacy rights. You are solely responsible
              for the User Content you submit, and we assume no liability for
              any User Content posted by you or any third party.
            </p>
          </section>

          {/* Disclaimer of Warranties */}
          <section>
            <h2 className="mb-4 text-2xl font-bold text-[#5C4033]">
              5. Disclaimer of Warranties
            </h2>
            <p className="mb-4 leading-relaxed">
              THE SITE AND ALL CONTENT, MATERIALS, INFORMATION, AND SERVICES
              PROVIDED ON THE SITE ARE PROVIDED ON AN &quot;AS IS&quot; AND
              &quot;AS AVAILABLE&quot; BASIS WITHOUT WARRANTIES OF ANY KIND,
              EITHER EXPRESS OR IMPLIED.
            </p>
            <p className="leading-relaxed">
              TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, WE DISCLAIM
              ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO
              IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
              PURPOSE, AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE SITE
              WILL BE UNINTERRUPTED, TIMELY, SECURE, OR ERROR-FREE, THAT
              DEFECTS WILL BE CORRECTED, OR THAT THE SITE OR THE SERVER THAT
              MAKES IT AVAILABLE ARE FREE OF VIRUSES OR OTHER HARMFUL
              COMPONENTS.
            </p>
          </section>

          {/* Limitation of Liability */}
          <section>
            <h2 className="mb-4 text-2xl font-bold text-[#5C4033]">
              6. Limitation of Liability
            </h2>
            <p className="leading-relaxed">
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT SHALL KUNO
              LAPIDARY, ITS AFFILIATES, OR THEIR LICENSORS, SERVICE PROVIDERS,
              EMPLOYEES, AGENTS, OFFICERS, OR DIRECTORS BE LIABLE FOR DAMAGES
              OF ANY KIND, UNDER ANY LEGAL THEORY, ARISING OUT OF OR IN
              CONNECTION WITH YOUR USE, OR INABILITY TO USE, THE SITE, ANY
              WEBSITES LINKED TO IT, ANY CONTENT ON THE SITE OR SUCH OTHER
              WEBSITES, INCLUDING ANY DIRECT, INDIRECT, SPECIAL, INCIDENTAL,
              CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO
              PERSONAL INJURY, PAIN AND SUFFERING, EMOTIONAL DISTRESS, LOSS OF
              REVENUE, LOSS OF PROFITS, LOSS OF BUSINESS OR ANTICIPATED
              SAVINGS, LOSS OF USE, LOSS OF GOODWILL, LOSS OF DATA, AND
              WHETHER CAUSED BY TORT (INCLUDING NEGLIGENCE), BREACH OF
              CONTRACT, OR OTHERWISE, EVEN IF FORESEEABLE.
            </p>
          </section>

          {/* Third-Party Links */}
          <section>
            <h2 className="mb-4 text-2xl font-bold text-[#5C4033]">
              7. Third-Party Links
            </h2>
            <p className="leading-relaxed">
              The Site may contain links to third-party websites or services
              that are not owned or controlled by Kuno Lapidary. We have no
              control over, and assume no responsibility for, the content,
              privacy policies, or practices of any third-party websites or
              services. You acknowledge and agree that Kuno Lapidary shall not
              be responsible or liable, directly or indirectly, for any damage
              or loss caused or alleged to be caused by or in connection with
              the use of or reliance on any such content, goods, or services
              available on or through any such third-party websites or
              services. We strongly advise you to read the terms and conditions
              and privacy policies of any third-party websites or services that
              you visit.
            </p>
          </section>

          {/* Advertising */}
          <section>
            <h2 className="mb-4 text-2xl font-bold text-[#5C4033]">
              8. Advertising
            </h2>
            <p className="leading-relaxed">
              The Site may display advertisements provided by third-party ad
              networks, including but not limited to Google AdSense. These
              advertisements may use cookies and similar technologies to serve
              ads based on your prior visits to this Site or other websites.
              The appearance of third-party advertising on the Site does not
              constitute an endorsement, guarantee, or recommendation by Kuno
              Lapidary of the advertiser or the products or services
              advertised. We are not responsible for the content of any
              third-party advertisements or for any claims, damages, or losses
              that may result from your interaction with such advertisements.
            </p>
          </section>

          {/* Governing Law */}
          <section>
            <h2 className="mb-4 text-2xl font-bold text-[#5C4033]">
              9. Governing Law
            </h2>
            <p className="leading-relaxed">
              These Terms shall be governed by and construed in accordance with
              the laws of the jurisdiction in which Kuno Lapidary operates,
              without regard to its conflict of law provisions. Any disputes
              arising under or in connection with these Terms shall be subject
              to the exclusive jurisdiction of the courts in that jurisdiction.
              Our failure to enforce any right or provision of these Terms will
              not be considered a waiver of those rights.
            </p>
          </section>

          {/* Changes to Terms */}
          <section>
            <h2 className="mb-4 text-2xl font-bold text-[#5C4033]">
              10. Changes to Terms
            </h2>
            <p className="leading-relaxed">
              We reserve the right, at our sole discretion, to modify or
              replace these Terms at any time. If a revision is material, we
              will provide at least 30 days&apos; notice prior to any new
              terms taking effect by posting the updated Terms on the Site and
              updating the &quot;Last Updated&quot; date. What constitutes a
              material change will be determined at our sole discretion. By
              continuing to access or use our Site after any revisions become
              effective, you agree to be bound by the revised Terms. If you do
              not agree to the new Terms, you are no longer authorized to use
              the Site.
            </p>
          </section>

          {/* Contact */}
          <section>
            <h2 className="mb-4 text-2xl font-bold text-[#5C4033]">
              11. Contact
            </h2>
            <p className="leading-relaxed">
              If you have any questions about these Terms of Service, please
              contact us:
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
