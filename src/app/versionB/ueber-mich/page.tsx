import Image from "next/image";
import { CTA, PageHero } from "../components";
import { educationItems } from "../content";

export default function UeberMichPage() {
  return (
    <main>
      <PageHero eyebrow="Über mich" title="Offen, direkt und fachlich klar.">
        <p>
          Ich arbeite evidenzbasiert und achte zugleich darauf, dass die
          Zusammenarbeit zu Ihnen und Ihrer Situation passt.
        </p>
      </PageHero>

      <section className="px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] bg-[#e9f8f5]">
            <Image
              src="/images/maria.png"
              alt="Maria Chamarina"
              fill
              priority
              unoptimized
              sizes="(min-width: 1024px) 36vw, 100vw"
              className="object-cover object-top"
            />
          </div>

          <div className="text-lg leading-9 text-[#506a70]">
            <p>
              Als klinische Psychologin arbeite ich evidenzbasiert - das heißt,
              ich orientiere mich an Methoden, die sich wissenschaftlich
              bewährt haben und vielen Menschen in ähnlichen Situationen
              helfen. Gleichzeitig ist mir wichtig, dass wir gemeinsam schauen,
              was für Sie persönlich passt.
            </p>
            <p className="mt-5">
              Ich bin eher ein offener und direkter Mensch. Humor darf dabei
              genauso Platz haben wie ernstere Themen - und wenn es passt, auch
              mal ein klar ausgesprochenes Wort.
            </p>
            <p className="mt-5">
              Was mich besonders interessiert, sind individuelle Lösungen. Auch
              wenn sich Probleme ähneln, ist der Weg zum Ziel oft
              unterschiedlich. Manchmal hilft es, Dinge gemeinsam
              aufzuschreiben, sie werden dadurch greifbarer und oft auch
              leichter veränderbar.
            </p>
            <p className="mt-5">
              Und wenn etwas nicht funktioniert, suchen wir gemeinsam nach
              einem anderen Ansatz. Schritt für Schritt herausfinden, was hilft
              - und was nicht.
            </p>
            <div className="mt-8">
              <CTA href="/versionB/kontakt">Kontakt aufnehmen</CTA>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#e9f8f5] px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#d7192a]">
            Ausbildung
          </p>
          <h2 className="mt-4 text-4xl font-semibold text-[#14363b]">
            Stationen und Erfahrung
          </h2>
          <div className="mt-10 grid gap-4">
            {educationItems.map((item, index) => (
              <div
                className="grid gap-4 rounded-[1.75rem] bg-white p-6 sm:grid-cols-[70px_1fr]"
                key={item}
              >
                <span className="font-semibold text-[#d7192a]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="leading-7 text-[#506a70]">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
