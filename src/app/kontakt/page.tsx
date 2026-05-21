import { PageHero, SoftCard } from "../components";
import { contact, contactContent, practiceContent } from "../content";

export default function KontaktPage() {
  return (
    <main>
      <PageHero eyebrow={contactContent.title} title={contactContent.title}>
        <p>{contactContent.phoneIntro}</p>
      </PageHero>

      <section className="px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-3">
          <a href={`mailto:${contact.email}`}>
            <SoftCard title="E-Mail">
              <p>{contactContent.mail}</p>
              <p className="mt-3 text-2xl font-semibold text-[#14363b]">
                {contact.email}
              </p>
            </SoftCard>
          </a>
          <a href={contact.whatsapp} rel="noopener noreferrer" target="_blank">
            <SoftCard title="WhatsApp">
              <p>{contactContent.whatsapp}</p>
              <p className="mt-3 text-2xl font-semibold text-[#14363b]">
                {contact.phone}
              </p>
            </SoftCard>
          </a>
          <a href={`tel:${contact.phone.replaceAll(" ", "")}`}>
            <SoftCard title="Telefon">
              <p>{contactContent.phoneIntro}</p>
              <p className="mt-3 text-2xl font-semibold text-[#14363b]">
                {contactContent.phone}
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
              {practiceContent.address}
            </h2>
          </div>
          <p className="text-lg leading-8 text-[#506a70]">
            {practiceContent.addressText} Öffentlich erreichbar über U1 / U3
            Stephansplatz, U4 Schwedenplatz sowie Straßenbahn und Bus in
            Gehweite.
          </p>
        </div>
      </section>
    </main>
  );
}
