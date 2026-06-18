import type { Metadata } from "next";
import { CTA, PageHero, SoftCard } from "../components";
import { createPageMetadata } from "../seo";
import {
  getPracticePage,
  getProcessPage,
  getSiteSettings,
} from "../../sanity/content";
import { imageAlt, imageUrl } from "../../sanity/image";

const processStepTones = ["rose", "blue", "mist"] as const;

export async function generateMetadata(): Promise<Metadata> {
  const [processContent, settings] = await Promise.all([
    getProcessPage(),
    getSiteSettings(),
  ]);

  return createPageMetadata({
    title: processContent.seo?.title || "Ablauf & Kosten",
    description:
      processContent.seo?.description ||
      "Informationen zu kostenlosem Erstgespräch, Ablauf der psychologischen Behandlung, Kosten, Verschwiegenheit und Krankenkasse.",
    path: "/ablauf-kosten",
    image: imageUrl(processContent.seo?.image, "/images/praxis4.jpg"),
    imageAlt:
      processContent.seo?.imageAlt ||
      imageAlt(processContent.seo?.image, "Praxisraum der Praxis Chamarina in Wien"),
    metadataSiteName: settings.siteName,
  });
}

export default async function AblaufKostenPage() {
  const [processContent, practiceContent, settings] = await Promise.all([
    getProcessPage(),
    getPracticePage(),
    getSiteSettings(),
  ]);

  return (
    <main>
      <PageHero
        eyebrow={processContent.heroEyebrow}
        title={processContent.title}
      >
        <p>{processContent.steps[0].paragraphs[0]}</p>
      </PageHero>

      <section className="px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#53728A]">
            {processContent.processTitle}
          </p>
          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {processContent.steps.map((step, index) => (
              <SoftCard
                title={step.title}
                tone={processStepTones[index % processStepTones.length]}
                key={step.title}
              >
                <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-[#53728A]">
                  {settings.ui.stepLabel} {index + 1}
                </p>
                <div className="grid gap-3">
                  {step.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                  <ul className="grid gap-2">
                    {step.items.map((item) => (
                      <li className="flex gap-3" key={item}>
                        <span aria-hidden="true" className="text-[#53728A]">
                          •
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  {step.closing ? <p>{step.closing}</p> : null}
                </div>
              </SoftCard>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#B9CFDD]/35 px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-3">
          <SoftCard title={processContent.costTitle} tone="deep">
            <ul className="grid gap-2">
              {processContent.costs.map((item) => (
                <li className="text-2xl font-semibold text-[#0D2744]" key={item}>
                  {item}
                </li>
              ))}
            </ul>
          </SoftCard>
          <SoftCard title={processContent.settingTitle} tone="blue">
            <div className="grid gap-3">
              {processContent.costsParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </SoftCard>
          <SoftCard title={processContent.insuranceTitle} tone="mist">
            <div className="grid gap-3">
              {processContent.insuranceParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </SoftCard>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-2">
          <SoftCard title={processContent.confidentialityTitle} tone="rose">
            {processContent.confidentiality}
          </SoftCard>
          <SoftCard title={practiceContent.appointmentTitle} tone="blue">
            <div className="grid gap-3">
              {practiceContent.appointmentParagraphs.slice(2).map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </SoftCard>
        </div>
        <div className="mx-auto mt-10 max-w-7xl rounded-lg bg-[#0D2744] p-8 text-white sm:p-10">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <h2 className="max-w-2xl text-3xl font-semibold">
              {processContent.ctaTitle}
            </h2>
            <CTA href="/kontakt#online-buchung">{processContent.ctaLabel}</CTA>
          </div>
        </div>
      </section>
    </main>
  );
}
