import { CTA, PageHero, SoftCard } from "../components";
import { diagnosticsContent, focusAreas, homeContent } from "../content";

export default function AngebotePage() {
  return (
    <main>
      <PageHero eyebrow="Startseite" title={homeContent.title}>
        <p>{homeContent.subtitle}</p>
      </PageHero>

      <section className="px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-3">
          <SoftCard title="Behandlung">
            <p>{homeContent.supportIntro}</p>
            <ul className="mt-3 grid gap-2">
              {homeContent.supportTopics.map((topic) => (
                <li key={topic}>{topic}</li>
              ))}
            </ul>
          </SoftCard>
          <SoftCard title={homeContent.diagnosticsTitle}>
            {homeContent.diagnosticsText}
          </SoftCard>
          <SoftCard title={homeContent.settingTitle}>
            <ul className="grid gap-2">
              {homeContent.settingItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </SoftCard>
        </div>
      </section>

      <section className="bg-[#fff7ee] px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#d7192a]">
            Themen
          </p>
          <h2 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight text-[#14363b] sm:text-5xl">
            Themen und Schwerpunkte
          </h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {focusAreas.map((area) => (
              <article
                className="rounded-[2rem] bg-white p-7 shadow-[0_18px_48px_rgba(20,54,59,0.08)]"
                key={area.title}
              >
                <h3 className="text-2xl font-semibold text-[#14363b]">
                  {area.title}
                </h3>
                <p className="mt-4 leading-7 text-[#506a70]">
                  {area.paragraphs[0]}
                </p>
              </article>
            ))}
          </div>
          <p className="mt-10 max-w-3xl leading-8 text-[#506a70]">
            {diagnosticsContent.paragraphs[0]}
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <CTA href="/versionB/themen">Alle Themen ansehen</CTA>
            <CTA href="/versionB/kontakt" variant="secondary">
              Erstgespräch vereinbaren
            </CTA>
          </div>
        </div>
      </section>
    </main>
  );
}
