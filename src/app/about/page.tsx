import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "About Us | Kuno Lapidary",
  description:
    "Learn about Kuno Lapidary — a passionate online publication dedicated to lapidary arts, gemstones, and geological sciences. Discover our mission to educate and inspire rock and gem enthusiasts worldwide.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-bg">
      {/* Hero Section */}
      <section className="bg-light/30 border-b border-border py-20 text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.1)_0,transparent_70%)] pointer-events-none"></div>
        <div className="mx-auto max-w-4xl relative z-10">
          <h1 className="mb-6 text-5xl md:text-7xl font-bold bg-gradient-to-r from-teal-400 to-purple-400 bg-clip-text text-transparent">
            About Kuno Lapidary
          </h1>
          <p className="text-xl text-gray-400 md:text-2xl font-light">
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
        <section className="mb-16">
          <h2 className="mb-8 text-4xl font-bold text-white border-b border-white/10 pb-4">Our Story</h2>
          <div className="space-y-6 text-lg leading-relaxed text-gray-300">
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
        <section className="mb-16 glass-card rounded-3xl border border-white/10 p-10 md:p-14 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/5 blur-[100px] pointer-events-none"></div>
          <h2 className="mb-8 text-4xl font-bold text-teal-400">
            Our Mission
          </h2>
          <div className="space-y-6 text-lg leading-relaxed text-gray-300">
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
        <section className="mb-20">
          <h2 className="mb-12 text-4xl font-bold text-white border-b border-white/10 pb-4">
            What We Cover
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {/* Lapidary Arts */}
            <div className="rounded-3xl border border-white/10 glass-card p-8 shadow-xl transition-transform hover:-translate-y-2">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-500/10 shadow-[0_0_15px_rgba(20,184,166,0.1)]">
                <svg
                  className="h-8 w-8 text-teal-400"
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
              <h3 className="mb-4 text-2xl font-bold text-white">
                Lapidary Arts
              </h3>
              <p className="leading-relaxed text-gray-400 text-sm">
                Explore the time-honored craft of cutting, shaping, and
                polishing gemstones. From cabochon cutting and faceting
                techniques to tumbling and carving, we cover the tools,
                methods, and artistry that transform rough stones into
                polished masterpieces.
              </p>
            </div>

            {/* Gemstone Knowledge */}
            <div className="rounded-3xl border border-white/10 glass-card p-8 shadow-xl transition-transform hover:-translate-y-2">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-500/10 shadow-[0_0_15px_rgba(168,85,247,0.1)]">
                <svg
                  className="h-8 w-8 text-purple-400"
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
              <h3 className="mb-4 text-2xl font-bold text-white">
                Gemstone Knowledge
              </h3>
              <p className="leading-relaxed text-gray-400 text-sm">
                Dive into comprehensive guides on precious and semi-precious
                gemstones. Learn about their origins, properties, grading
                criteria, identification techniques, and the cultural
                significance that has made them treasured throughout human
                history.
              </p>
            </div>

            {/* Geological Sciences */}
            <div className="rounded-3xl border border-white/10 glass-card p-8 shadow-xl transition-transform hover:-translate-y-2">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/10 shadow-[0_0_15px_rgba(59,130,246,0.1)]">
                <svg
                  className="h-8 w-8 text-blue-400"
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
              <h3 className="mb-4 text-2xl font-bold text-white">
                Geological Sciences
              </h3>
              <p className="leading-relaxed text-gray-400 text-sm">
                Understand the forces that shape our planet. From plate
                tectonics and volcanism to mineral formation and rock cycles,
                we break down the science that creates the raw materials every
                lapidary artist works with.
              </p>
            </div>
          </div>
        </section>

        {/* Our Team */}
        <section className="mb-20">
          <h2 className="mb-8 text-4xl font-bold text-white border-b border-white/10 pb-4">Our Team</h2>
          <div className="glass-card rounded-3xl border border-white/10 p-10 md:p-14 shadow-2xl relative overflow-hidden group">
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-purple-500/10 rounded-full blur-[80px] group-hover:bg-purple-500/20 transition-all"></div>
            <h3 className="mb-6 text-2xl font-bold text-teal-400">
              The Kuno Lapidary Team
            </h3>
            <p className="leading-relaxed text-gray-300 text-lg">
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
        <section className="rounded-3xl bg-gradient-to-br from-light to-bg border border-border p-16 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(20,184,166,0.1)_0,transparent_70%)] pointer-events-none"></div>
          <p className="text-3xl font-bold italic text-white md:text-5xl mb-8 leading-tight">
            &ldquo;Unearthing Nature&apos;s Brilliance, <br /> One Stone at a Time&rdquo;
          </p>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto uppercase tracking-widest font-semibold">
            Thank you for being part of our journey.
          </p>
        </section>
      </div>
    </main>
  );
}
