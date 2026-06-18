import type { Metadata } from "next";
import { PageHero, SoftCard } from "../components";
import { createPageMetadata } from "../seo";
import { OffisyBookingWidget } from "./offisy-booking-widget";
import {
  getContactPage,
  getPracticePage,
  getSiteSettings,
} from "../../sanity/content";
import { imageAlt, imageUrl } from "../../sanity/image";

export async function generateMetadata(): Promise<Metadata> {
  const [contactContent, settings] = await Promise.all([
    getContactPage(),
    getSiteSettings(),
  ]);

  return createPageMetadata({
    title: contactContent.seo?.title || "Kontakt",
    description:
      contactContent.seo?.description ||
      "Kontakt zur Praxis Chamarina in Wien: Termin anfragen per E-Mail, Telefon oder WhatsApp.",
    path: "/kontakt",
    image: imageUrl(contactContent.seo?.image, "/images/praxis4.jpg"),
    imageAlt:
      contactContent.seo?.imageAlt ||
      imageAlt(contactContent.seo?.image, "Praxisraum der Praxis Chamarina in Wien"),
    metadataSiteName: settings.siteName,
  });
}

export default async function KontaktPage() {
  const [settings, contactContent, practiceContent] = await Promise.all([
    getSiteSettings(),
    getContactPage(),
    getPracticePage(),
  ]);
  const { contact } = settings;

  return (
    <main>
      <PageHero eyebrow={contactContent.heroEyebrow} title={contactContent.title}>
        <p>{contactContent.phoneIntro}</p>
      </PageHero>

      <section className="px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-3">
          <a
            aria-label={`E-Mail an ${contact.email} schreiben`}
            href={`mailto:${contact.email}`}
          >
            <SoftCard title={contactContent.mail} tone="rose">
              <p>{contactContent.emailCardText}</p>
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
            <SoftCard title={contactContent.whatsapp} tone="mist">
              <p>{contactContent.whatsappCardText}</p>
              <p className="mt-3 text-2xl font-semibold text-[#0D2744]">
                {contact.phone}
              </p>
            </SoftCard>
          </a>
          <a
            aria-label={`Praxis Chamarina telefonisch unter ${contact.phone} kontaktieren`}
            href={`tel:${contact.phone.replaceAll(" ", "")}`}
          >
            <SoftCard title={contactContent.phone} tone="blue">
              <p>{contactContent.phoneCardText}</p>
              <p className="mt-3 text-2xl font-semibold text-[#0D2744]">
                {contact.phone}
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
              {contactContent.bookingEyebrow}
            </p>
            <h2 className="mt-4 text-4xl font-semibold text-[#0D2744]">
              {contactContent.bookingTitle}
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#53728A]">
              {contactContent.bookingText}
            </p>
          </div>
          <OffisyBookingWidget
            contactEmail={contact.email}
            widget={contactContent.bookingWidget}
          />
        </div>
      </section>

      <section className="bg-[#0D2744] px-5 py-20 text-white sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#FF929A]">
              {contactContent.addressEyebrow}
            </p>
            <h2 className="mt-4 text-4xl font-semibold text-white">
              {practiceContent.address}
            </h2>
          </div>
          <p className="text-lg leading-8 text-[#B9CFDD]">
            {practiceContent.addressText} {contactContent.addressSummary}
          </p>
        </div>
      </section>
    </main>
  );
}
