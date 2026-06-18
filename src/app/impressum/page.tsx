import type { Metadata } from "next";
import { PageHero } from "../components";
import { createPageMetadata } from "../seo";
import { getLegalPage, getSiteSettings } from "../../sanity/content";
import { imageAlt, imageUrl } from "../../sanity/image";

export async function generateMetadata(): Promise<Metadata> {
  const [legalContent, settings] = await Promise.all([
    getLegalPage(),
    getSiteSettings(),
  ]);

  return createPageMetadata({
    title: legalContent.seo?.title || "Impressum",
    description:
      legalContent.seo?.description ||
      "Impressum und rechtliche Angaben zur Praxis Chamarina, klinische Psychologie in Wien.",
    path: "/impressum",
    image: imageUrl(legalContent.seo?.image, "/images/praxis4.jpg"),
    imageAlt:
      legalContent.seo?.imageAlt ||
      imageAlt(legalContent.seo?.image, "Praxisraum der Praxis Chamarina in Wien"),
    metadataSiteName: settings.siteName,
  });
}

export default async function ImpressumPage() {
  const [settings, legalContent] = await Promise.all([
    getSiteSettings(),
    getLegalPage(),
  ]);
  const { contact } = settings;
  const { impressum, privacy } = legalContent;

  return (
    <main>
      <PageHero eyebrow={impressum.eyebrow} title={impressum.title}>
        <p>{impressum.subtitle}</p>
      </PageHero>

      <section className="px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-4xl rounded-lg border border-[#B9CFDD] border-l-[10px] border-l-[#FF929A] bg-[#F4F8FB] p-8 shadow-[0_18px_48px_rgba(13,39,68,0.08)] sm:p-10">
          <div className="grid gap-10 break-words">
            <section>
              <h2 className="text-2xl font-semibold text-[#0D2744]">
                {impressum.ownerTitle}
              </h2>
              <div className="mt-4 leading-8 text-[#53728A]">
                {impressum.owner.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#0D2744]">
                {impressum.contactTitle}
              </h2>
              <p className="mt-4 leading-8 text-[#53728A]">
                {settings.ui.emailLabel}:{" "}
                <a
                  aria-label={`E-Mail an ${contact.email} schreiben`}
                  className="text-[#53728A]"
                  href={`mailto:${contact.email}`}
                >
                  {contact.email}
                </a>
                <br />
                {settings.ui.phoneLabel}:{" "}
                <a
                  aria-label={`Praxis Chamarina telefonisch unter ${contact.phone} kontaktieren`}
                  className="text-[#53728A]"
                  href={`tel:${contact.phone.replaceAll(" ", "")}`}
                >
                  {contact.phone}
                </a>
                <br />
                {settings.ui.websiteLabel}: {settings.siteUrl}
              </p>
            </section>

            {impressum.sections.map((section) => (
              <section key={section.title}>
                <h2 className="text-2xl font-semibold text-[#0D2744]">
                  {section.title}
                </h2>
                <div className="mt-4 grid gap-2 leading-8 text-[#53728A]">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#B9CFDD]/35 px-5 py-24 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-4xl">
          <h2 className="break-words text-3xl font-semibold text-[#0D2744] sm:text-4xl">
            {privacy.title}
          </h2>
          <div className="mt-8 grid gap-5">
            {privacy.sections.map((section) => (
              <section
                className="rounded-lg border border-[#B9CFDD] bg-white p-7 shadow-[0_18px_48px_rgba(13,39,68,0.07)] break-words"
                key={section.title}
              >
                <h3 className="text-2xl font-semibold text-[#0D2744]">
                  {section.title}
                </h3>
                <div className="mt-4 grid gap-3 leading-8 text-[#53728A]">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                  {section.items ? (
                    <ul className="grid gap-2 pl-5">
                      {section.items.map((item) => (
                        <li className="list-disc" key={item}>
                          {item}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                  {section.closing ? <p>{section.closing}</p> : null}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
