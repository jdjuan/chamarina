import { CTA, PageHero } from "../components";
import { diagnosticSteps } from "../content";

export default function DiagnostikPage() {
  return (
    <main>
      <PageHero
        eyebrow="Diagnostik"
        title="Klarheit durch klinisch-psychologische Abklärung."
      >
        <p>
          Diagnostik kann helfen, Beschwerden besser einzuordnen,
          Zusammenhänge zu verstehen und mehr Klarheit darüber zu bekommen,
          womit man zu tun hat.
        </p>
      </PageHero>

      <section className="px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="rounded-[2.25rem] bg-[#fff7ee] p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#d7192a]">
              Privat
            </p>
            <h2 className="mt-4 text-4xl font-semibold text-[#14363b]">
              Für Privatpersonen und Zuweiser:innen
            </h2>
            <p className="mt-5 leading-8 text-[#506a70]">
              Ich biete klinisch-psychologische Diagnostik für Privatpersonen
              sowie für zuweisende Kolleg:innen an. Termine sind meist zeitnah
              möglich. Eine direkte Abrechnung mit der Krankenkasse ist derzeit
              leider nicht möglich.
            </p>
            <div className="mt-8 rounded-3xl bg-white p-6">
              <p className="text-sm uppercase tracking-[0.18em] text-[#6f8b92]">
                Kosten
              </p>
              <p className="mt-2 text-4xl font-semibold text-[#14363b]">
                500 Euro
              </p>
              <p className="mt-3 leading-7 text-[#506a70]">
                Klinisch-psychologische Diagnostik inklusive Befund oder
                Gutachten.
              </p>
            </div>
          </div>

          <div className="grid gap-4">
            {diagnosticSteps.map((step, index) => (
              <div
                className="grid gap-4 rounded-[1.75rem] border border-[#d9eee9] bg-white p-6 sm:grid-cols-[64px_1fr]"
                key={step}
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#e9f8f5] font-semibold text-[#d7192a]">
                  {index + 1}
                </span>
                <p className="leading-7 text-[#506a70]">{step}</p>
              </div>
            ))}
            <p className="rounded-[1.75rem] bg-[#e9f8f5] p-6 leading-7 text-[#506a70]">
              In manchen Fällen kann für eine umfassende diagnostische
              Abklärung ein weiterer Termin sinnvoll oder notwendig sein.
            </p>
          </div>
        </div>
      </section>

      <section className="px-5 pb-20 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl rounded-[2.25rem] bg-[#14363b] p-8 text-white sm:p-10">
          <h2 className="text-3xl font-semibold">Diagnostik anfragen</h2>
          <p className="mt-4 max-w-2xl leading-8 text-white/76">
            Sie können auch unabhängig von einer weiteren Behandlung zur
            Diagnostik kommen.
          </p>
          <div className="mt-7">
            <CTA href="/versionB/kontakt">Kontakt aufnehmen</CTA>
          </div>
        </div>
      </section>
    </main>
  );
}
