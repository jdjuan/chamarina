import Image from "next/image";
import type { Metadata } from "next";
import { CTA, PageHero } from "../components";
import { createPageMetadata } from "../seo";
import { getAboutPage, getSiteSettings } from "../../sanity/content";
import { imageAlt, imageUrl } from "../../sanity/image";

export async function generateMetadata(): Promise<Metadata> {
  const [aboutContent, settings] = await Promise.all([
    getAboutPage(),
    getSiteSettings(),
  ]);

  return createPageMetadata({
    title: aboutContent.seo?.title || "Über mich",
    description:
      aboutContent.seo?.description ||
      "Über Maria Chamarina, klinische Psychologin in Wien, ihre Arbeitsweise, ihren beruflichen Hintergrund und ihre Erfahrung.",
    path: "/ueber-mich",
    image: imageUrl(
      aboutContent.seo?.image || aboutContent.portraitImage,
      "/images/maria.png",
    ),
    imageAlt:
      aboutContent.seo?.imageAlt ||
      imageAlt(
        aboutContent.seo?.image || aboutContent.portraitImage,
        "Maria Chamarina, klinische Psychologin in Wien",
      ),
    metadataSiteName: settings.siteName,
  });
}

export default async function UeberMichPage() {
  const aboutContent = await getAboutPage();
  const portraitImage = imageUrl(aboutContent.portraitImage, "/images/maria.png");
  const portraitAlt = imageAlt(aboutContent.portraitImage, "Maria Chamarina");

  return (
    <main>
      <PageHero eyebrow={aboutContent.title} title={aboutContent.workTitle} />

      <section className="px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div className="relative aspect-[4/5] overflow-hidden rounded-lg bg-[#B9CFDD] shadow-[0_22px_55px_rgba(13,39,68,0.14)]">
            <Image
              src={portraitImage}
              alt={portraitAlt}
              fill
              priority
              sizes="(min-width: 1024px) 36vw, 100vw"
              className="object-cover object-top"
            />
          </div>

          <div className="rounded-lg border-l-[10px] border-[#FF929A] bg-[#F4F8FB] p-7 text-lg leading-9 text-[#53728A] sm:p-9">
            {aboutContent.workParagraphs.map((paragraph) => (
              <p className="mt-5 first:mt-0" key={paragraph}>
                {paragraph}
              </p>
            ))}
            <div className="mt-8">
              <CTA href={aboutContent.ctaHref}>{aboutContent.ctaLabel}</CTA>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#B9CFDD]/35 px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#53728A]">
            {aboutContent.educationEyebrow}
          </p>
          <h2 className="mt-4 text-4xl font-semibold text-[#0D2744]">
            {aboutContent.educationTitle}
          </h2>
          <article className="mt-10 rounded-lg border border-[#B9CFDD] border-l-[10px] border-l-[#FF929A] bg-white p-7 shadow-[0_18px_48px_rgba(13,39,68,0.08)] sm:p-9">
            <ul className="grid gap-4 text-lg leading-8 text-[#53728A]">
              {aboutContent.educationItems.map((item) => (
                <li className="flex gap-3" key={item}>
                  <span aria-hidden="true" className="text-[#FF929A]">
                    •
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>
    </main>
  );
}
