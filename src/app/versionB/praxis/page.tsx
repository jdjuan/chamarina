import Image from "next/image";
import { CTA, PageHero, SoftCard } from "../components";
import { contact, practiceNotes } from "../content";

export default function PraxisPage() {
  return (
    <main>
      <PageHero eyebrow="Praxis & Anfahrt" title="Ein heller Ort im 1. Bezirk.">
        <p>
          Die Praxis befindet sich zentral in Wien und ist mit öffentlichen
          Verkehrsmitteln gut erreichbar.
        </p>
      </PageHero>

      <section className="px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="grid gap-5">
            <SoftCard title="Adresse">
              <p>{contact.address}</p>
              <a
                className="mt-5 inline-flex font-semibold text-[#d7192a]"
                href="https://www.google.com/maps/search/?api=1&query=Fischerstiege%2010%201010%20Wien"
                rel="noopener noreferrer"
                target="_blank"
              >
                Route öffnen -&gt;
              </a>
            </SoftCard>
            <SoftCard title="Anfahrt">
              <ul className="grid gap-2">
                <li>U1 / U3 Stephansplatz</li>
                <li>U4 Schwedenplatz</li>
                <li>Straßenbahn und Bus in Gehweite</li>
                <li>
                  Mit dem Auto: Kurzparkzone, Parkplätze je nach Tageszeit
                  begrenzt.
                </li>
              </ul>
            </SoftCard>
          </div>

          <div className="grid gap-5">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[2.5rem]">
              <Image
                src="/images/praxis2.png"
                alt="Sitzbereich der Praxis mit hellen Fenstern"
                fill
                sizes="(min-width: 1024px) 56vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem]">
                <Image
                  src="/images/praxis1.png"
                  alt="Praxisraum mit Sesseln, Pflanzen und Flipchart"
                  fill
                  sizes="(min-width: 1024px) 28vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem]">
                <Image
                  src="/images/praxis3.png"
                  alt="Wartebereich mit zwei Sesseln und Bildern"
                  fill
                  sizes="(min-width: 1024px) 28vw, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#fff7ee] px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-3">
          {practiceNotes.map((note) => (
            <SoftCard title={note.title} key={note.title}>
              {note.text}
            </SoftCard>
          ))}
        </div>
        <div className="mx-auto mt-10 max-w-7xl">
          <CTA href="/versionB/kontakt">Termin anfragen</CTA>
        </div>
      </section>
    </main>
  );
}
