import Image from "next/image";
import type { Metadata } from "next";
import { CTA, PageHero } from "../components";
import { aboutContent, educationItems } from "../content";
import { createPageMetadata } from "../seo";

export const metadata: Metadata = createPageMetadata({
  title: "Über mich",
  description:
    "Über Maria Chamarina, klinische Psychologin in Wien, ihre evidenzbasierte Arbeitsweise, Ausbildung und Erfahrung.",
  path: "/ueber-mich",
  image: "/images/maria.png",
  imageAlt: "Maria Chamarina, klinische Psychologin in Wien",
});

export default function UeberMichPage() {
  return (
    <main>
      <PageHero eyebrow={aboutContent.title} title={aboutContent.workTitle}>
        <p>{aboutContent.workParagraphs[0]}</p>
      </PageHero>

      <section className="px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] bg-[#e9f8f5]">
            <Image
              src="/images/maria.png"
              alt="Maria Chamarina"
              fill
              priority
              sizes="(min-width: 1024px) 36vw, 100vw"
              className="object-cover object-top"
            />
          </div>

          <div className="text-lg leading-9 text-[#506a70]">
            {aboutContent.workParagraphs.slice(1).map((paragraph) => (
              <p className="mt-5 first:mt-0" key={paragraph}>
                {paragraph}
              </p>
            ))}
            <div className="mt-8">
              <CTA href="/kontakt">Kontakt aufnehmen</CTA>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#e9f8f5] px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#d7192a]">
            {aboutContent.educationTitle}
          </p>
          <h2 className="mt-4 text-4xl font-semibold text-[#14363b]">
            {aboutContent.educationTitle}
          </h2>
          <div className="mt-10 grid gap-4">
            {educationItems.map((item, index) => (
              <div
                className="grid gap-4 rounded-[1.75rem] bg-white p-6 sm:grid-cols-[70px_1fr]"
                key={item}
              >
                <span className="font-semibold text-[#d7192a]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="leading-7 text-[#506a70]">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
