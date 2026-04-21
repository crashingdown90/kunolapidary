import type { FAQItem } from "@/lib/mdx";

export default function FAQSection({ items }: { items: FAQItem[] }) {
  if (items.length === 0) return null;

  return (
    <section className="mt-16 pt-12 border-t border-white/10">
      <h2 className="text-3xl font-bold text-white mb-10 uppercase tracking-widest text-sm text-center">
        Frequently Asked Questions
      </h2>
      <dl className="space-y-6">
        {items.map((item, index) => (
          <div
            key={index}
            className="rounded-2xl border border-white/10 glass-card p-8 shadow-xl"
          >
            <dt className="text-xl font-bold text-teal-400">
              {item.question}
            </dt>
            <dd className="mt-4 text-gray-400 leading-relaxed">
              {item.answer}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
