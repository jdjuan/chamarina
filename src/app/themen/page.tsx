import type { Metadata } from "next";
import { CTA, PageHero } from "../components";
import { focusAreas, getTopicsByCategory } from "../content";
import { createPageMetadata } from "../seo";
import { TopicTooltips } from "./topic-tooltips";

export const metadata: Metadata = createPageMetadata({
  title: "Themen & Schwerpunkte",
  description:
    "Psychologische Behandlung bei Angst, Zwang, Depression, Selbstwert, Beziehungsthemen und Sexualität in Wien.",
  path: "/themen",
});

export default function ThemenPage() {
  return (
    <main>
      <PageHero
        eyebrow="Psychologische Behandlung"
        title="Themen und Schwerpunkte"
      >
        <p>Angst, Zwang, Depression, Selbstwert, Beziehung und Sexualität.</p>
      </PageHero>

      <section className="px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-8">
          {focusAreas.map((area, index) => (
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
                <TopicTooltips topics={getTopicsByCategory(area.category)} />
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
            Sie sind unsicher, ob Ihr Anliegen passt?
          </h2>
          <CTA href="/kontakt">Kontakt aufnehmen</CTA>
        </div>
      </section>
    </main>
  );
}
