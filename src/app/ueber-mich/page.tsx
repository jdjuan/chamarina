import Image from "next/image";
import type { Metadata } from "next";
import { CTA, PageHero } from "../components";
import { aboutContent, educationItems } from "../content";
import { createPageMetadata } from "../seo";

export const metadata: Metadata = createPageMetadata({
  title: "Über mich",
  description:
    "Über Maria Chamarina, klinische Psychologin in Wien, ihre Arbeitsweise, ihren beruflichen Hintergrund und ihre Erfahrung.",
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
          <div className="relative aspect-[4/5] overflow-hidden rounded-lg bg-[#B9CFDD] shadow-[0_22px_55px_rgba(13,39,68,0.14)]">
            <Image
              src="/images/maria.png"
              alt="Maria Chamarina"
              fill
              priority
              sizes="(min-width: 1024px) 36vw, 100vw"
              className="object-cover object-top"
            />
          </div>

          <div className="rounded-lg border-l-[10px] border-[#FF929A] bg-[#F4F8FB] p-7 text-lg leading-9 text-[#53728A] sm:p-9">
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

      <section className="bg-[#B9CFDD]/35 px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#53728A]">
            Erfahrung
          </p>
          <h2 className="mt-4 text-4xl font-semibold text-[#0D2744]">
            {aboutContent.educationTitle}
          </h2>
          <div className="mt-10 grid gap-4">
            {educationItems.map((item) => (
              <div
                className="rounded-lg border border-[#B9CFDD] bg-white p-6 shadow-[0_12px_30px_rgba(13,39,68,0.06)]"
                key={item}
              >
                <p className="leading-7 text-[#53728A]">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
