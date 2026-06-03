import Image from "next/image";
import type { Metadata } from "next";
import { CTA, PageHero, SoftCard } from "../components";
import { practiceContent } from "../content";
import { createPageMetadata } from "../seo";

export const metadata: Metadata = createPageMetadata({
  title: "Praxis & Anfahrt",
  description:
    "Adresse, Anfahrt und Termin-Hinweise zur Praxis Chamarina in der Fischerstiege 10/14 im 1. Bezirk in Wien.",
  path: "/praxis",
  image: "/images/praxis2.png",
});

export default function PraxisPage() {
  return (
    <main>
      <PageHero eyebrow="Praxis im 1. Bezirk" title={practiceContent.title}>
        <p>{practiceContent.addressText}</p>
      </PageHero>

      <section className="px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="grid gap-5">
            <SoftCard title={practiceContent.addressTitle}>
              <p className="text-2xl font-semibold text-[#0D2744]">
                {practiceContent.address}
              </p>
              <p className="mt-3">{practiceContent.addressText}</p>
              <a
                aria-label="Route zur Praxis Chamarina in Google Maps öffnen"
                className="mt-5 inline-flex font-semibold text-[#53728A]"
                href="https://www.google.com/maps/search/?api=1&query=Fischerstiege%2010%2F14%201010%20Wien"
                rel="noopener noreferrer"
                target="_blank"
              >
                Route öffnen -&gt;
              </a>
            </SoftCard>
            <SoftCard title={practiceContent.directionsTitle}>
              <p className="font-semibold text-[#0D2744]">
                {practiceContent.publicTitle}
              </p>
              <ul className="mt-3 grid gap-2">
                {practiceContent.publicItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className="mt-5 font-semibold text-[#0D2744]">
                {practiceContent.carTitle}
              </p>
              <p className="mt-3">{practiceContent.carText}</p>
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

      <section className="bg-[#FFFFFF] px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <SoftCard title={practiceContent.appointmentTitle}>
            <div className="grid gap-3">
              {practiceContent.appointmentParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </SoftCard>
        </div>
        <div className="mx-auto mt-10 max-w-7xl">
          <CTA href="/kontakt#online-buchung">Termin anfragen</CTA>
        </div>
      </section>
    </main>
  );
}
