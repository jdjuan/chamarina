import type { Metadata } from "next";
import { PageHero, SoftCard } from "../components";
import { contact, contactContent, practiceContent } from "../content";
import { createPageMetadata } from "../seo";
import { OffisyBookingWidget } from "./offisy-booking-widget";

export const metadata: Metadata = createPageMetadata({
  title: "Kontakt",
  description:
    "Kontakt zur Praxis Chamarina in Wien: Termin anfragen per E-Mail, Telefon oder WhatsApp.",
  path: "/kontakt",
});

export default function KontaktPage() {
  return (
    <main>
      <PageHero eyebrow="Erreichbarkeit" title={contactContent.title}>
        <p>{contactContent.phoneIntro}</p>
      </PageHero>

      <section className="px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-3">
          <a
            aria-label={`E-Mail an ${contact.email} schreiben`}
            href={`mailto:${contact.email}`}
          >
            <SoftCard title="E-Mail">
              <p>Schreiben Sie mir gerne per E-Mail.</p>
              <p className="mt-3 text-2xl font-semibold text-[#0D2744]">
                {contact.email}
              </p>
            </SoftCard>
          </a>
          <a
            aria-label={`WhatsApp an Praxis Chamarina unter ${contact.phone} öffnen`}
            href={contact.whatsapp}
            rel="noopener noreferrer"
            target="_blank"
          >
            <SoftCard title="WhatsApp">
              <p>Kurze Terminfragen können Sie auch per WhatsApp stellen.</p>
              <p className="mt-3 text-2xl font-semibold text-[#0D2744]">
                {contact.phone}
              </p>
            </SoftCard>
          </a>
          <a
            aria-label={`Praxis Chamarina telefonisch unter ${contact.phone} kontaktieren`}
            href={`tel:${contact.phone.replaceAll(" ", "")}`}
          >
            <SoftCard title="Telefon">
              <p>
                Sollten Sie mich nicht erreichen, melde ich mich umgehend
                zurück.
              </p>
              <p className="mt-3 text-2xl font-semibold text-[#0D2744]">
                {contactContent.phone}
              </p>
            </SoftCard>
          </a>
        </div>
      </section>

      <section
        className="bg-[#B9CFDD]/35 px-5 py-20 sm:px-8 lg:px-10"
        id="online-buchung"
      >
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#53728A]">
              Online-Buchung
            </p>
            <h2 className="mt-4 text-4xl font-semibold text-[#0D2744]">
              Termin buchen
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#53728A]">
              Wählen Sie hier direkt einen freien Termin für ein kostenloses
              Erstgespräch aus.
            </p>
          </div>
          <OffisyBookingWidget />
        </div>
      </section>

      <section className="bg-[#0D2744] px-5 py-20 text-white sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#FF929A]">
              Praxis
            </p>
            <h2 className="mt-4 text-4xl font-semibold text-white">
              {practiceContent.address}
            </h2>
          </div>
          <p className="text-lg leading-8 text-[#B9CFDD]">
            {practiceContent.addressText} Öffentlich erreichbar über U1 / U3
            Stephansplatz, U4 Schwedenplatz sowie Straßenbahn und Bus in
            Gehweite.
          </p>
        </div>
      </section>
    </main>
  );
}
