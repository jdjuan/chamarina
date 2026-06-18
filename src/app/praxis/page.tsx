import Image from "next/image";
import type { Metadata } from "next";
import { CTA, PageHero, SoftCard } from "../components";
import { createPageMetadata } from "../seo";
import { getPracticePage, getSiteSettings } from "../../sanity/content";
import { imageAlt, imageUrl } from "../../sanity/image";

export async function generateMetadata(): Promise<Metadata> {
  const [practiceContent, settings] = await Promise.all([
    getPracticePage(),
    getSiteSettings(),
  ]);

  return createPageMetadata({
    title: practiceContent.seo?.title || "Praxis & Anfahrt",
    description:
      practiceContent.seo?.description ||
      "Adresse, Anfahrt und Termin-Hinweise zur Praxis Chamarina in der Fischerstiege 10/14 im 1. Bezirk in Wien.",
    path: "/praxis",
    image: imageUrl(
      practiceContent.seo?.image || practiceContent.images[0],
      "/images/praxis4.jpg",
    ),
    imageAlt:
      practiceContent.seo?.imageAlt ||
      imageAlt(
        practiceContent.seo?.image || practiceContent.images[0],
        "Praxisraum der Praxis Chamarina",
      ),
    metadataSiteName: settings.siteName,
  });
}

export default async function PraxisPage() {
  const practiceContent = await getPracticePage();
  const primaryImage = practiceContent.images[0];
  const galleryImages = practiceContent.images.slice(1);

  return (
    <main>
      <PageHero eyebrow={practiceContent.heroEyebrow} title={practiceContent.title}>
        <p>{practiceContent.addressText}</p>
      </PageHero>

      <section className="px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="grid gap-5">
            <SoftCard title={practiceContent.addressTitle} tone="rose">
              <p className="text-2xl font-semibold text-[#0D2744]">
                {practiceContent.address}
              </p>
              <p className="mt-3">{practiceContent.addressText}</p>
              <a
                aria-label={practiceContent.routeAriaLabel}
                className="mt-5 inline-flex font-semibold text-[#53728A]"
                href={practiceContent.routeUrl}
                rel="noopener noreferrer"
                target="_blank"
              >
                {practiceContent.routeLabel}
              </a>
            </SoftCard>
            <SoftCard title={practiceContent.directionsTitle} tone="blue">
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
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-[0_22px_55px_rgba(13,39,68,0.14)]">
              <Image
                src={imageUrl(primaryImage, "/images/praxis4.jpg")}
                alt={imageAlt(primaryImage, "Praxisraum der Praxis Chamarina")}
                fill
                sizes="(min-width: 1024px) 56vw, 100vw"
                className="object-cover"
              />
            </div>
            {galleryImages.length > 0 ? (
              <div
                className={
                  galleryImages.length === 1
                    ? "grid gap-5"
                    : "grid gap-5 sm:grid-cols-2"
                }
              >
                {galleryImages.map((galleryImage, index) => (
                  <div
                    className="relative aspect-[4/3] overflow-hidden rounded-lg"
                    key={galleryImage.url || galleryImage.asset?._ref || index}
                  >
                    <Image
                      src={imageUrl(galleryImage, "/images/praxis5.jpg")}
                      alt={imageAlt(galleryImage, "Praxisraum der Praxis Chamarina")}
                      fill
                      sizes={
                        galleryImages.length === 1
                          ? "(min-width: 1024px) 56vw, 100vw"
                          : "(min-width: 1024px) 28vw, 100vw"
                      }
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            ) : null}
          </div>
        </div>
      </section>

      <section className="bg-[#B9CFDD]/35 px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <SoftCard title={practiceContent.appointmentTitle} tone="mist">
            <div className="grid gap-3">
              {practiceContent.appointmentParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </SoftCard>
        </div>
        <div className="mx-auto mt-10 max-w-7xl">
          <CTA href={practiceContent.ctaHref}>{practiceContent.ctaLabel}</CTA>
        </div>
      </section>
    </main>
  );
}
