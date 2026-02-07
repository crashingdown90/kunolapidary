import type { FAQItem } from "@/lib/mdx";

export default function FAQSection({ items }: { items: FAQItem[] }) {
  if (items.length === 0) return null;

  return (
    <section className="mt-12 pt-8 border-t-2 border-cream">
      <h2 className="text-2xl font-bold text-text mb-6">
        Frequently Asked Questions
      </h2>
      <dl className="space-y-6">
        {items.map((item, index) => (
          <div
            key={index}
            className="rounded-xl border border-border bg-white p-6"
          >
            <dt className="text-lg font-semibold text-primary">
              {item.question}
            </dt>
            <dd className="mt-2 text-text-soft leading-relaxed">
              {item.answer}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
