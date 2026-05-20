import { CTA, PageHero } from "../components";
import { focusAreas } from "../content";

export default function ThemenPage() {
  return (
    <main>
      <PageHero
        eyebrow="Themen & Schwerpunkte"
        title="Themen und Schwerpunkte"
      >
        <p>Angst, Zwang, Depression, Selbstwert, Beziehung und Sexualität.</p>
      </PageHero>

      <section className="px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-8">
          {focusAreas.map((area, index) => (
            <article
              className="grid gap-8 rounded-[2.25rem] border border-[#d9eee9] bg-white p-7 shadow-[0_18px_48px_rgba(20,54,59,0.06)] lg:grid-cols-[220px_1fr]"
              key={area.title}
            >
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#d7192a]">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h2 className="mt-3 text-3xl font-semibold text-[#14363b]">
                  {area.title}
                </h2>
              </div>
              <div>
                <div className="grid gap-4 leading-8 text-[#506a70]">
                  {area.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
                {area.items ? (
                  <div className="mt-5 flex flex-wrap gap-2">
                    {area.items.map((item) => (
                      <span
                        className="inline-flex items-center gap-2 rounded-2xl border border-[#f1c3ba] bg-white px-3.5 py-2 text-sm font-medium text-[#314f56] shadow-[0_10px_24px_rgba(20,54,59,0.06)]"
                        key={item}
                      >
                        <span
                          aria-hidden="true"
                          className="h-1.5 w-1.5 rounded-full bg-[#d7192a]"
                        />
                        {item}
                      </span>
                    ))}
                  </div>
                ) : null}
                {area.closing ? (
                  <p className="mt-5 leading-8 text-[#506a70]">
                    {area.closing}
                  </p>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#e9f8f5] px-5 py-16 sm:px-8 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="max-w-2xl text-3xl font-semibold text-[#14363b]">
            Sie sind unsicher, ob Ihr Anliegen passt?
          </h2>
          <CTA href="/versionB/kontakt">Kontakt aufnehmen</CTA>
        </div>
      </section>
    </main>
  );
}
