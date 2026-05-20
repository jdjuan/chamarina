import { PageHero, SoftCard } from "../components";
import { contact } from "../content";

export default function KontaktPage() {
  return (
    <main>
      <PageHero eyebrow="Kontakt" title="Kostenloses Erstgespräch vereinbaren.">
        <p>
          Wenn Sie das Gefühl haben, dass ein Gespräch hilfreich sein könnte,
          können Sie gerne Kontakt aufnehmen. Sollten Sie mich telefonisch nicht
          erreichen, melde ich mich umgehend zurück.
        </p>
      </PageHero>

      <section className="px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-3">
          <a href={`mailto:${contact.email}`}>
            <SoftCard title="E-Mail">
              <p className="text-2xl font-semibold text-[#14363b]">
                {contact.email}
              </p>
            </SoftCard>
          </a>
          <a href={contact.whatsapp} rel="noopener noreferrer" target="_blank">
            <SoftCard title="WhatsApp">
              <p className="text-2xl font-semibold text-[#14363b]">
                {contact.phone}
              </p>
            </SoftCard>
          </a>
          <a href={`tel:${contact.phone.replaceAll(" ", "")}`}>
            <SoftCard title="Telefon">
              <p className="text-2xl font-semibold text-[#14363b]">
                {contact.phone}
              </p>
            </SoftCard>
          </a>
        </div>
      </section>

      <section className="bg-[#fff7ee] px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#d7192a]">
              Praxis
            </p>
            <h2 className="mt-4 text-4xl font-semibold text-[#14363b]">
              {contact.address}
            </h2>
          </div>
          <p className="text-lg leading-8 text-[#506a70]">
            Die Praxis liegt zentral im 1. Bezirk und ist gut erreichbar über
            U1 / U3 Stephansplatz, U4 Schwedenplatz sowie Straßenbahn und Bus
            in Gehweite.
          </p>
        </div>
      </section>
    </main>
  );
}
