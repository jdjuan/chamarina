import type { Metadata } from "next";
import { CTA, PageHero } from "../components";
import { createPageMetadata } from "../seo";
import { TopicTooltips } from "./topic-tooltips";
import { getSiteSettings, getTopicsPage } from "../../sanity/content";
import { imageAlt, imageUrl } from "../../sanity/image";

export async function generateMetadata(): Promise<Metadata> {
  const [content, settings] = await Promise.all([
    getTopicsPage(),
    getSiteSettings(),
  ]);

  return createPageMetadata({
    title: content.seo?.title || "Themen & Schwerpunkte",
    description:
      content.seo?.description ||
      "Psychologische Behandlung bei Angst, Zwang, Depression, Selbstwert, Beziehungsthemen und Sexualität in Wien.",
    path: "/themen",
    image: imageUrl(content.seo?.image, "/images/praxis4.jpg"),
    imageAlt:
      content.seo?.imageAlt ||
      imageAlt(content.seo?.image, "Praxisraum der Praxis Chamarina in Wien"),
    metadataSiteName: settings.siteName,
  });
}

export default async function ThemenPage() {
  const content = await getTopicsPage();

  return (
    <main>
      <PageHero
        eyebrow={content.heroEyebrow}
        title={content.heroTitle}
      >
        <p>{content.heroText}</p>
      </PageHero>

      <section className="px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-8">
          {content.focusAreas.map((area, index) => (
            <article
              className={`grid gap-8 rounded-lg border border-[#B9CFDD] border-l-[10px] bg-white p-7 shadow-[0_18px_48px_rgba(13,39,68,0.08)] lg:grid-cols-[220px_1fr] ${
                index % 2 === 0 ? "border-l-[#FF929A]" : "border-l-[#53728A]"
              }`}
              key={area.title}
            >
              <div>
                <h2 className="text-3xl font-semibold text-[#0D2744]">
                  {area.title}
                </h2>
              </div>
              <div>
                <div className="grid gap-4 leading-8 text-[#53728A]">
                  {area.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
                <TopicTooltips topics={area.topics} />
                {area.closing ? (
                  <p className="mt-5 leading-8 text-[#53728A]">
                    {area.closing}
                  </p>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#0D2744] px-5 py-16 text-white sm:px-8 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="max-w-2xl text-3xl font-semibold text-white">
            {content.ctaTitle}
          </h2>
          <CTA href="/kontakt">{content.ctaLabel}</CTA>
        </div>
      </section>
    </main>
  );
}
