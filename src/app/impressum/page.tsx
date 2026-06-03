import type { Metadata } from "next";
import { PageHero } from "../components";
import { contact, impressumContent, privacyContent } from "../content";
import { createPageMetadata } from "../seo";

export const metadata: Metadata = createPageMetadata({
  title: "Impressum",
  description:
    "Impressum und rechtliche Angaben zur Praxis Chamarina, klinische Psychologie in Wien.",
  path: "/impressum",
});

export default function ImpressumPage() {
  return (
    <main>
      <PageHero eyebrow="Rechtliches" title={impressumContent.title}>
        <p>{impressumContent.subtitle}</p>
      </PageHero>

      <section className="px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-4xl rounded-[2.5rem] bg-[#F4F8FB] p-8 sm:p-10">
          <div className="grid gap-10">
            <section>
              <h2 className="text-2xl font-semibold text-[#0D2744]">
                Medieninhaberin und Verantwortliche
              </h2>
              <div className="mt-4 leading-8 text-[#53728A]">
                {impressumContent.owner.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#0D2744]">
                Kontakt
              </h2>
              <p className="mt-4 leading-8 text-[#53728A]">
                E-Mail:{" "}
                <a
                  aria-label={`E-Mail an ${contact.email} schreiben`}
                  className="text-[#53728A]"
                  href={`mailto:${contact.email}`}
                >
                  {contact.email}
                </a>
                <br />
                Telefon:{" "}
                <a
                  aria-label={`Praxis Chamarina telefonisch unter ${contact.phone} kontaktieren`}
                  className="text-[#53728A]"
                  href={`tel:${contact.phone.replaceAll(" ", "")}`}
                >
                  {contact.phone}
                </a>
                <br />
                Website: psychologie-chamarina.at
              </p>
            </section>

            {impressumContent.sections.map((section) => (
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

      <section className="bg-white px-5 pb-24 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-4xl font-semibold text-[#0D2744]">
            {privacyContent.title}
          </h2>
          <div className="mt-8 grid gap-5">
            {privacyContent.sections.map((section) => (
              <section
                className="rounded-[2rem] border border-[#B9CFDD] bg-white p-7 shadow-[0_18px_48px_rgba(13,39,68,0.07)]"
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
