import { CTA, PageHero } from "../components";
import { focusAreas } from "../content";

export default function ThemenPage() {
  return (
    <main>
      <PageHero
        eyebrow="Themen"
        title="Schwerpunkte der psychologischen Behandlung."
      >
        <p>
          Auch wenn sich Probleme ähneln, ist der Weg zum Ziel oft
          unterschiedlich. Gemeinsam schauen wir, was für Sie persönlich passt.
        </p>
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
                <p className="leading-8 text-[#506a70]">{area.text}</p>
                {area.items ? (
                  <div className="mt-5 flex flex-wrap gap-2">
                    {area.items.map((item) => (
                      <span
                        className="rounded-full border border-[#f1c3ba] bg-[#fff7ee] px-3 py-1.5 text-sm text-[#314f56]"
                        key={item}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
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
