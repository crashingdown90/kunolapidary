import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "About Us | Kuno Lapidary",
  description:
    "Learn about Kuno Lapidary — a passionate online publication dedicated to lapidary arts, gemstones, and geological sciences. Discover our mission to educate and inspire rock and gem enthusiasts worldwide.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#FDFBF7]">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#5C4033] to-[#5C4033]/90 px-6 py-16 text-center text-white md:py-24">
        <div className="mx-auto max-w-4xl">
          <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
            About Kuno Lapidary
          </h1>
          <p className="text-lg text-[#D2B48C] md:text-xl">
            Unearthing Nature&apos;s Brilliance, One Stone at a Time
          </p>
        </div>
      </section>

      {/* Content */}
      <div className="mx-auto max-w-4xl px-6 py-12 md:py-16">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "About" },
          ]}
        />

        {/* Our Story */}
        <section className="mb-12">
          <h2 className="mb-6 text-3xl font-bold text-[#5C4033]">Our Story</h2>
          <div className="space-y-4 text-lg leading-relaxed text-[#2D1810]">
            <p>
              Kuno Lapidary was born from a deep and enduring passion for the
              earth sciences. What began as a personal fascination with the
              minerals, rocks, and gemstones hidden beneath our feet has grown
              into a comprehensive online resource for enthusiasts, hobbyists,
              and professionals alike.
            </p>
            <p>
              The name &quot;Kuno&quot; draws inspiration from the rich
              geological heritage found across our planet, and
              &quot;Lapidary&quot; speaks to the ancient art of cutting,
              shaping, and polishing stones into objects of beauty. Together,
              they represent our commitment to bridging the gap between raw
              geological knowledge and the refined craftsmanship of the
              lapidary arts.
            </p>
            <p>
              From the volcanic origins of obsidian to the slow crystallization
              of amethyst deep within geodes, every stone tells a story
              millions of years in the making. We are here to help you
              understand, appreciate, and share those stories.
            </p>
          </div>
        </section>

        {/* Our Mission */}
        <section className="mb-12 rounded-xl border border-[#D2B48C]/30 bg-[#F5E6D3]/30 p-8">
          <h2 className="mb-6 text-3xl font-bold text-[#5C4033]">
            Our Mission
          </h2>
          <div className="space-y-4 text-lg leading-relaxed text-[#2D1810]">
            <p>
              Our mission is simple yet ambitious: to educate, inspire, and
              connect people who share a love for geology, gemstones, and the
              lapidary arts. We believe that understanding the science behind
              the stones deepens our appreciation for their beauty, and that
              the craftsmanship of lapidary work transforms raw minerals into
              lasting treasures.
            </p>
            <p>
              We strive to make earth science accessible to everyone, whether
              you are a seasoned geologist, a beginning rockhound, or simply
              someone who marvels at the sparkle of a well-cut gemstone. Every
              article we publish is researched, carefully written, and designed
              to bring clarity to complex geological topics.
            </p>
          </div>
        </section>

        {/* What We Cover */}
        <section className="mb-12">
          <h2 className="mb-8 text-3xl font-bold text-[#5C4033]">
            What We Cover
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {/* Lapidary Arts */}
            <div className="rounded-xl border border-[#D2B48C]/30 bg-white p-6 shadow-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[#8B6914]/10">
                <svg
                  className="h-6 w-6 text-[#8B6914]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3l2.09 6.26L21 9.27l-5.18 4.73L17.82 21 12 17.27 6.18 21l1.64-7L3 9.27l6.91.01L12 3z"
                  />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-semibold text-[#5C4033]">
                Lapidary Arts
              </h3>
              <p className="leading-relaxed text-[#2D1810]/80">
                Explore the time-honored craft of cutting, shaping, and
                polishing gemstones. From cabochon cutting and faceting
                techniques to tumbling and carving, we cover the tools,
                methods, and artistry that transform rough stones into
                polished masterpieces.
              </p>
            </div>

            {/* Gemstone Knowledge */}
            <div className="rounded-xl border border-[#D2B48C]/30 bg-white p-6 shadow-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[#6B8E23]/10">
                <svg
                  className="h-6 w-6 text-[#6B8E23]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                  />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-semibold text-[#5C4033]">
                Gemstone Knowledge
              </h3>
              <p className="leading-relaxed text-[#2D1810]/80">
                Dive into comprehensive guides on precious and semi-precious
                gemstones. Learn about their origins, properties, grading
                criteria, identification techniques, and the cultural
                significance that has made them treasured throughout human
                history.
              </p>
            </div>

            {/* Geological Sciences */}
            <div className="rounded-xl border border-[#D2B48C]/30 bg-white p-6 shadow-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[#5C4033]/10">
                <svg
                  className="h-6 w-6 text-[#5C4033]"
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
              <h3 className="mb-3 text-xl font-semibold text-[#5C4033]">
                Geological Sciences
              </h3>
              <p className="leading-relaxed text-[#2D1810]/80">
                Understand the forces that shape our planet. From plate
                tectonics and volcanism to mineral formation and rock cycles,
                we break down the science that creates the raw materials every
                lapidary artist works with.
              </p>
            </div>
          </div>
        </section>

        {/* Our Team */}
        <section className="mb-12">
          <h2 className="mb-6 text-3xl font-bold text-[#5C4033]">Our Team</h2>
          <div className="rounded-xl border border-[#D2B48C]/30 bg-white p-8 shadow-sm">
            <h3 className="mb-3 text-xl font-semibold text-[#8B6914]">
              The Kuno Lapidary Team
            </h3>
            <p className="leading-relaxed text-[#2D1810]/80">
              Behind Kuno Lapidary is a dedicated team of writers,
              researchers, and earth science enthusiasts who share a common
              goal: making the world of geology, gemstones, and lapidary arts
              accessible and engaging for readers of all backgrounds. Our
              contributors bring a blend of academic knowledge, hands-on
              experience in the lapidary workshop, and a genuine love for the
              natural world. Together, we work to produce content that is
              accurate, insightful, and inspiring.
            </p>
          </div>
        </section>

        {/* Tagline / CTA */}
        <section className="rounded-xl bg-gradient-to-r from-[#5C4033] to-[#5C4033]/90 p-10 text-center">
          <p className="text-2xl font-semibold italic text-[#D2B48C] md:text-3xl">
            &ldquo;Unearthing Nature&apos;s Brilliance, One Stone at a
            Time&rdquo;
          </p>
          <p className="mt-4 text-[#F5E6D3]/80">
            Thank you for being part of the Kuno Lapidary community. Whether
            you are here to learn, explore, or simply admire the wonders of
            the earth, we are glad to have you with us.
          </p>
        </section>
      </div>
    </main>
  );
}
