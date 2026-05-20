import { CTA, PageHero, SoftCard } from "../components";
import { processSteps } from "../content";

export default function AblaufKostenPage() {
  return (
    <main>
      <PageHero
        eyebrow="Ablauf & Kosten"
        title="Transparent vom ersten Kontakt an."
      >
        <p>
          Manche Themen lassen sich eher strukturiert und fokussiert
          bearbeiten, andere brauchen mehr Zeit und Raum.
        </p>
      </PageHero>

      <section className="px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-5 lg:grid-cols-3">
            {processSteps.map((step, index) => (
              <SoftCard title={step.title} key={step.title}>
                <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-[#d7192a]">
                  Schritt {index + 1}
                </p>
                {step.text}
              </SoftCard>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#e9f8f5] px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-3">
          <SoftCard title="Einheit">
            <p className="text-4xl font-semibold text-[#14363b]">50 Minuten</p>
            <p className="mt-4">
              Sitzungen können sowohl vor Ort in der Praxis als auch online
              stattfinden. Doppeleinheiten sind prinzipiell möglich, aber nicht
              immer empfehlenswert.
            </p>
          </SoftCard>
          <SoftCard title="Kosten">
            <p className="text-4xl font-semibold text-[#14363b]">120 Euro</p>
            <p className="mt-4">
              Die Bezahlung erfolgt per Überweisung nach jeder Sitzung. Die
              Rechnung erhalten Sie im Anschluss per E-Mail.
            </p>
          </SoftCard>
          <SoftCard title="Krankenkasse">
            Ein Kostenzuschuss durch die Krankenkasse ist grundsätzlich
            möglich. Genauere Informationen besprechen wir gerne persönlich.
          </SoftCard>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-2">
          <SoftCard title="Verschwiegenheit">
            Vertrauen und ein geschützter Rahmen sind wichtige Grundlagen der
            gemeinsamen Arbeit. Gespräche unterliegen selbstverständlich der
            psychologischen Verschwiegenheitspflicht.
          </SoftCard>
          <SoftCard title="Terminabsage">
            Vereinbarte Termine sind verbindlich. Wenn Sie einen Termin nicht
            wahrnehmen können, bitte ich um eine Absage mindestens 24 Stunden
            im Voraus. Kurzfristig abgesagte oder nicht wahrgenommene Termine
            werden in Rechnung gestellt.
          </SoftCard>
        </div>
        <div className="mx-auto mt-10 max-w-7xl">
          <CTA href="/versionB/kontakt">Erstgespräch vereinbaren</CTA>
        </div>
      </section>
    </main>
  );
}
