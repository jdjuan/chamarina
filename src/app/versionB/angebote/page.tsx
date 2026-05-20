import { CTA, PageHero, SoftCard } from "../components";
import { focusAreas } from "../content";

export default function AngebotePage() {
  return (
    <main>
      <PageHero
        eyebrow="Meine Angebote"
        title="Klinisch-psychologische Behandlung, Beratung und Diagnostik."
      >
        <p>
          Ich begleite Erwachsene bei psychischen Belastungen und biete
          diagnostische Abklärung für Privatpersonen sowie für zuweisende
          Kolleg:innen an.
        </p>
      </PageHero>

      <section className="px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-3">
          <SoftCard title="Behandlung">
            Psychologische Unterstützung bei Angst, Zwang, Depression,
            Selbstwert- und Beziehungsthemen, Sexualität und sexuellen
            Funktionsstörungen.
          </SoftCard>
          <SoftCard title="Diagnostik">
            Klinisch-psychologische Diagnostik mit ausführlichem Gespräch,
            Testverfahren, Rückmeldung und Befund oder Gutachten.
          </SoftCard>
          <SoftCard title="Setting">
            Sitzungen können vor Ort in der Praxis im 1. Bezirk oder nach
            Absprache online stattfinden.
          </SoftCard>
        </div>
      </section>

      <section className="bg-[#fff7ee] px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#d7192a]">
            Themen
          </p>
          <h2 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight text-[#14363b] sm:text-5xl">
            Häufige Anliegen in der psychologischen Behandlung.
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
                <p className="mt-4 leading-7 text-[#506a70]">{area.text}</p>
              </article>
            ))}
          </div>
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
