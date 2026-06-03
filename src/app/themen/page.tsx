import type { Metadata } from "next";
import { CTA, PageHero } from "../components";
import { focusAreas } from "../content";
import { createPageMetadata } from "../seo";

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
                {area.items ? (
                  <div className="mt-5 flex flex-wrap gap-2">
                    {area.items.map((item) => (
                      <span
                        className="inline-flex items-center gap-2 rounded-lg border border-[#B9CFDD] bg-[#B9CFDD]/35 px-3.5 py-2 text-sm font-medium text-[#0D2744] shadow-[0_10px_24px_rgba(13,39,68,0.06)]"
                        key={item}
                      >
                        <span
                          aria-hidden="true"
                          className="h-1.5 w-1.5 rounded-full bg-[#FF929A]"
                        />
                        {item}
                      </span>
                    ))}
                  </div>
                ) : null}
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
