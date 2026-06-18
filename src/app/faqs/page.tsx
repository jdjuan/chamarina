import type { Metadata } from "next";
import { PageHero } from "../components";
import { createPageMetadata } from "../seo";
import { getFaqPage, getSiteSettings } from "../../sanity/content";
import { imageAlt, imageUrl } from "../../sanity/image";

export async function generateMetadata(): Promise<Metadata> {
  const [faqContent, settings] = await Promise.all([
    getFaqPage(),
    getSiteSettings(),
  ]);

  return createPageMetadata({
    title: faqContent.seo?.title || "Häufige Fragen",
    description:
      faqContent.seo?.description ||
      "Antworten auf häufige Fragen zu Erstgespräch, Online-Terminen, Kosten, Diagnostik, Verschwiegenheit und Terminabsage.",
    path: "/faqs",
    image: imageUrl(faqContent.seo?.image, "/images/praxis4.jpg"),
    imageAlt:
      faqContent.seo?.imageAlt ||
      imageAlt(faqContent.seo?.image, "Praxisraum der Praxis Chamarina in Wien"),
    metadataSiteName: settings.siteName,
  });
}

export default async function FAQsPage() {
  const faqContent = await getFaqPage();

  return (
    <main>
      <PageHero eyebrow={faqContent.eyebrow} title={faqContent.intro} />

      <section className="px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-4xl rounded-lg border border-[#B9CFDD] border-l-[10px] border-l-[#FF929A] bg-[#F4F8FB] p-5 shadow-[0_18px_48px_rgba(13,39,68,0.08)] sm:p-8">
          {faqContent.items.map((item) => (
            <details
              className="group border-b border-[#B9CFDD] py-5 last:border-b-0"
              key={item.question}
            >
              <summary className="flex cursor-pointer list-none items-start justify-between gap-5 text-lg font-semibold text-[#0D2744]">
                <span>{item.question}</span>
                <span
                  aria-hidden="true"
                  className="text-[#53728A] transition group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="mt-4 leading-8 text-[#53728A]">{item.answer}</p>
            </details>
          ))}
        </div>
      </section>
    </main>
  );
}
