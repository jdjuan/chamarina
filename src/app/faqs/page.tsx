import type { Metadata } from "next";
import { PageHero } from "../components";
import { faqIntro, faqItems } from "../content";
import { createPageMetadata } from "../seo";

export const metadata: Metadata = createPageMetadata({
  title: "Häufige Fragen",
  description:
    "Antworten auf häufige Fragen zu Erstgespräch, Online-Terminen, Kosten, Diagnostik, Verschwiegenheit und Terminabsage.",
  path: "/faqs",
});

export default function FAQsPage() {
  return (
    <main>
      <PageHero eyebrow="FAQ" title={faqIntro} />

      <section className="px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-4xl rounded-[2.5rem] bg-[#f3fbf8] p-5 sm:p-8">
          {faqItems.map((item) => (
            <details
              className="group border-b border-[#d4e8e3] py-5 last:border-b-0"
              key={item.question}
            >
              <summary className="flex cursor-pointer list-none items-start justify-between gap-5 text-lg font-semibold text-[#14363b]">
                <span>{item.question}</span>
                <span
                  aria-hidden="true"
                  className="text-[#d7192a] transition group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="mt-4 leading-8 text-[#506a70]">{item.answer}</p>
            </details>
          ))}
        </div>
      </section>
    </main>
  );
}
