import { CTA, PageHero, SoftCard } from "../components";
import { practiceContent, processContent } from "../content";

export default function AblaufKostenPage() {
  return (
    <main>
      <PageHero
        eyebrow={processContent.title}
        title={processContent.title}
      >
        <p>{processContent.steps[0].paragraphs[0]}</p>
      </PageHero>

      <section className="px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#d7192a]">
            {processContent.processTitle}
          </p>
          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {processContent.steps.map((step, index) => (
              <SoftCard title={step.title} key={step.title}>
                <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-[#d7192a]">
                  Schritt {index + 1}
                </p>
                <div className="grid gap-3">
                  {step.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                  <ul className="grid gap-2">
                    {step.items.map((item) => (
                      <li className="flex gap-3" key={item}>
                        <span aria-hidden="true" className="text-[#d7192a]">
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

      <section className="bg-[#e9f8f5] px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-3">
          <SoftCard title={processContent.costTitle}>
            <ul className="grid gap-2">
              {processContent.costs.map((item) => (
                <li className="text-2xl font-semibold text-[#14363b]" key={item}>
                  {item}
                </li>
              ))}
            </ul>
          </SoftCard>
          <SoftCard title="Setting">
            <div className="grid gap-3">
              {processContent.costsParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </SoftCard>
          <SoftCard title={processContent.insuranceTitle}>
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
          <SoftCard title={processContent.confidentialityTitle}>
            {processContent.confidentiality}
          </SoftCard>
          <SoftCard title={practiceContent.appointmentTitle}>
            <div className="grid gap-3">
              {practiceContent.appointmentParagraphs.slice(2).map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </SoftCard>
        </div>
        <div className="mx-auto mt-10 max-w-7xl">
          <CTA href="/versionB/kontakt">Erstgespräch vereinbaren</CTA>
        </div>
      </section>
    </main>
  );
}
