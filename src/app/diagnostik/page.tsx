import type { Metadata } from "next";
import { CTA, PageHero } from "../components";
import { diagnosticsContent } from "../content";
import { createPageMetadata } from "../seo";

export const metadata: Metadata = createPageMetadata({
  title: "Klinisch-psychologische Diagnostik",
  description:
    "Klinisch-psychologische Diagnostik für Erwachsene in Wien mit Gespräch, Testverfahren, Rückmeldung und Befund oder Gutachten.",
  path: "/diagnostik",
});

export default function DiagnostikPage() {
  return (
    <main>
      <PageHero
        eyebrow="Klarheit gewinnen"
        title={diagnosticsContent.title}
      >
        <p>{diagnosticsContent.paragraphs[0]}</p>
      </PageHero>

      <section className="px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="rounded-[2.25rem] bg-[#FFFFFF] p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#53728A]">
              {diagnosticsContent.includesTitle}
            </p>
            <h2 className="mt-4 text-4xl font-semibold text-[#0D2744]">
              Klinisch-psychologische Diagnostik
            </h2>
            <div className="mt-5 grid gap-4 leading-8 text-[#53728A]">
              {diagnosticsContent.paragraphs.slice(1).map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <ul className="mt-6 grid gap-2 leading-7 text-[#53728A]">
              {diagnosticsContent.includes.map((item) => (
                <li className="flex gap-3" key={item}>
                  <span aria-hidden="true" className="text-[#53728A]">
                    •
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 rounded-3xl bg-white p-6">
              <p className="text-sm uppercase tracking-[0.18em] text-[#7691AD]">
                {diagnosticsContent.costTitle}
              </p>
              <p className="mt-2 text-4xl font-semibold text-[#0D2744]">
                500 €
              </p>
              <p className="mt-3 leading-7 text-[#53728A]">
                {diagnosticsContent.cost}
              </p>
            </div>
          </div>

          <div className="grid gap-4">
            {diagnosticsContent.steps.map((step, index) => (
              <div
                className="grid gap-4 rounded-[1.75rem] border border-[#B9CFDD] bg-white p-6 sm:grid-cols-[64px_1fr]"
                key={step.title}
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#F4F8FB] font-semibold text-[#53728A]">
                  {index + 1}
                </span>
                <div className="leading-7 text-[#53728A]">
                  <p>{step.title}</p>
                  {step.items ? (
                    <ul className="mt-3 grid gap-2">
                      {step.items.map((item) => (
                        <li className="flex gap-3" key={item}>
                          <span aria-hidden="true" className="text-[#53728A]">
                            •
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              </div>
            ))}
            <p className="rounded-[1.75rem] bg-[#F4F8FB] p-6 leading-7 text-[#53728A]">
              {diagnosticsContent.note}
            </p>
          </div>
        </div>
      </section>

      <section className="px-5 pb-20 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl rounded-[2.25rem] bg-[#0D2744] p-8 text-white sm:p-10">
          <h2 className="text-3xl font-semibold">Diagnostik anfragen</h2>
          <p className="mt-4 max-w-2xl leading-8 text-white/76">
            Ich biete klinisch-psychologische Diagnostik für Privatpersonen
            sowie für zuweisende Kolleg:innen an.
          </p>
          <div className="mt-7">
            <CTA href="/kontakt">Kontakt aufnehmen</CTA>
          </div>
        </div>
      </section>
    </main>
  );
}
