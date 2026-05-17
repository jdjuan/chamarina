import Image from "next/image";
import type { ReactNode } from "react";

const navItems = [
  { href: "#ueber-mich", label: "Über mich" },
  { href: "#schwerpunkte", label: "Schwerpunkte" },
  { href: "#diagnostik", label: "Diagnostik" },
  { href: "#ablauf", label: "Ablauf & Kosten" },
  { href: "#praxis", label: "Praxis" },
  { href: "#kontakt", label: "Kontakt" },
];

const supportTopics = [
  "Angst und Panikattacken",
  "Zwangsgedanken und Zwangshandlungen",
  "Depression und Erschöpfung",
  "Selbstwert- und Beziehungsthemen",
  "Sexualität und sexuelle Funktionsstörungen",
];

const focusAreas = [
  {
    title: "Angst",
    text: "Angst ist eine normale Grundemotion. Wenn sie sehr stark wird, deutliche Körpersymptome auslöst oder dazu führt, dass Situationen immer mehr vermieden werden, kann psychologische Behandlung unterstützen.",
    items: [
      "Sozialphobie und soziale Angst",
      "Panikattacken und Panikstörung",
      "Agoraphobie",
      "Emetophobie",
      "spezifische Phobien",
      "generalisierte Angst",
      "Krankheitsangst",
      "Grübeln und Sorgen",
    ],
  },
  {
    title: "Zwang",
    text: "Wiederkehrende Gedanken oder Handlungen können viel Energie kosten. Gemeinsam geht es darum, Muster besser zu verstehen und schrittweise zu verändern.",
    items: ["Zwangsgedanken", "Zwangshandlungen"],
  },
  {
    title: "Depression",
    text: "Depression ist mehr als Traurigkeit. Häufig zeigen sich Antriebslosigkeit, Erschöpfung, innere Leere, Rückzug, Schlafprobleme oder das Gefühl, festzustecken.",
  },
  {
    title: "Selbstwert",
    text: "Ein unsicherer Selbstwert kann Beziehungen, Arbeit und den eigenen Blick auf sich selbst beeinflussen. Ziel ist ein stabilerer und wohlwollenderer Umgang mit sich selbst.",
  },
  {
    title: "Bindung, Beziehung und Partnerschaft",
    text: "Beziehungen prägen uns. Oft zeigen sich wiederkehrende Muster, Konflikte oder Schwierigkeiten in Nähe, Abgrenzung oder Kommunikation.",
  },
  {
    title: "Sexualität",
    text: "Sexualität kann mit Fragen, Unsicherheiten oder Belastungen verbunden sein. Ich arbeite offen und wertfrei, auch im Umgang mit nicht-monogamen Beziehungsformen sowie poly- und kinkbezogenen Themen.",
  },
];

const educationItems = [
  "Studium der Psychologie an der Universität Wien mit Schwerpunkt Klinische und Gesundheitspsychologie",
  "Studium der Ostasienwissenschaften und Germanistik an der Ruprecht-Karls-Universität Heidelberg",
  "Ausbildung Klinische Psychologie an der Wiener Akademie für Klinische Psychologie",
  "Ausbildung Sexualtherapie bei der Österreichischen Gesellschaft für Sexualwissenschaften",
  "Seit 2022 angestellt bei Phobius Phobiezentrum Wien",
  "Mitarbeit bei der Österreichischen Autistenhilfe",
  "Forschungsmitarbeit an der Universität Wien im Stress-Lab",
];

const diagnosticSteps = [
  "Kostenloses Erstgespräch, auch online oder telefonisch möglich, ca. 20-30 Minuten",
  "Screening der Fragestellung",
  "Termin in der Praxis mit ausführlichem Gespräch und klinisch-psychologischen Testverfahren, ca. 2,5 Stunden",
  "Rückmeldung, Einordnung und Besprechung der Ergebnisse",
  "Aushändigung von Befund oder Gutachten und bei Bedarf Therapieempfehlung oder Weitervermittlung",
];

const processSteps = [
  {
    title: "Kostenloses Erstgespräch",
    text: "In ca. 30 Minuten klären wir unverbindlich, wobei Sie Unterstützung suchen, welche Fragen offen sind und ob eine Zusammenarbeit passend ist.",
  },
  {
    title: "Ausführliches Erstgespräch",
    text: "In der ersten regulären Einheit nehmen wir uns Zeit, Ihre Situation genauer zu verstehen: was Sie aktuell belastet, wie sich das im Alltag zeigt und welche Faktoren eine Rolle spielen.",
  },
  {
    title: "Individuelle Planung",
    text: "Auf dieser Grundlage entwickeln wir gemeinsam die nächsten Schritte mit Transparenz, klarer Zielsetzung und einer Arbeitsweise, die zu Ihnen passt.",
  },
];

const practiceNotes = [
  {
    title: "Zum Termin",
    text: "Bitte kommen Sie nicht deutlich vor dem vereinbarten Termin, da ich in der Regel noch in einer laufenden Einheit bin.",
  },
  {
    title: "Barrierefreiheit",
    text: "Die Praxis ist leider nicht barrierefrei.",
  },
  {
    title: "Absage",
    text: "Vereinbarte Termine sind verbindlich. Bitte sagen Sie mindestens 24 Stunden im Voraus ab. Kurzfristig abgesagte oder nicht wahrgenommene Termine werden in Rechnung gestellt.",
  },
];

const faqItems = [
  {
    question: "Muss ich schon genau wissen, worüber ich sprechen möchte?",
    answer:
      "Nein. Viele Menschen kommen zuerst mit dem Gefühl, dass etwas belastet oder nicht mehr gut funktioniert, ohne es genau benennen zu können.",
  },
  {
    question: "Wie läuft das Erstgespräch ab?",
    answer:
      "Im kostenlosen Erstgespräch lernen wir uns kurz kennen und schauen gemeinsam, ob eine Zusammenarbeit passend ist. Es ist kostenlos und unverbindlich, online ist auch möglich.",
  },
  {
    question: "Wie schnell bekomme ich einen Termin?",
    answer: "Je nach Kapazität sind Termine oft zeitnah möglich.",
  },
  {
    question: "Sind Online-Termine möglich?",
    answer: "Ja. Termine können online oder vor Ort stattfinden.",
  },
  {
    question: "Wie viel kostet eine Sitzung?",
    answer:
      "Eine Einheit mit 50 Minuten kostet 120 Euro. Diagnostische Abklärungen inklusive Gutachten kosten 500 Euro.",
  },
  {
    question: "Gibt es einen Kostenzuschuss durch die Krankenkasse?",
    answer:
      "Ein Kostenzuschuss ist grundsätzlich möglich, Diagnostik ist privat zu bezahlen. Genauere Informationen besprechen wir gerne persönlich.",
  },
  {
    question: "Kann ich auch nur zur Diagnostik kommen?",
    answer:
      "Ja. Diagnostik kann unabhängig von einer weiteren Behandlung in Anspruch genommen werden.",
  },
  {
    question: "Unterliegen Gespräche der Verschwiegenheit?",
    answer:
      "Ja. Gespräche unterliegen selbstverständlich der psychologischen Verschwiegenheitspflicht.",
  },
  {
    question: "Muss Therapie immer lange dauern?",
    answer:
      "Nein. Manche Themen lassen sich relativ fokussiert bearbeiten, andere brauchen mehr Zeit.",
  },
  {
    question: "Was passiert, wenn ich einen Termin absagen muss?",
    answer:
      "Falls Sie einen Termin nicht wahrnehmen können, bitte ich um Absage mindestens 24 Stunden im Voraus. Kurzfristig abgesagte oder nicht wahrgenommene Termine werden verrechnet.",
  },
];

function SectionIntro({
  eyebrow,
  title,
  children,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  children?: ReactNode;
  align?: "left" | "center";
}) {
  return (
    <div
      className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#d7192a]">
        {eyebrow}
      </p>
      <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight text-[#18272b] sm:text-5xl">
        {title}
      </h2>
      <div className="mt-5 h-px w-36 bg-[#8290b0]" />
      {children ? (
        <div className="mt-6 text-base leading-8 text-[#4a595d] sm:text-lg">
          {children}
        </div>
      ) : null}
    </div>
  );
}

function TextLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      className="group inline-flex items-center gap-3 text-sm font-semibold text-[#18272b]"
      href={href}
    >
      <span className="border-b border-[#d7192a] pb-1 transition group-hover:text-[#d7192a]">
        {children}
      </span>
      <span
        aria-hidden="true"
        className="text-[#d7192a] transition group-hover:translate-x-1"
      >
        -&gt;
      </span>
    </a>
  );
}

function ButtonLink({
  href,
  children,
  variant = "outline",
}: {
  href: string;
  children: ReactNode;
  variant?: "outline" | "solid";
}) {
  const classes =
    variant === "solid"
      ? "border-[#d7192a] bg-[#d7192a] text-white shadow-[0_14px_30px_rgba(215,25,42,0.22)] hover:bg-[#b91424]"
      : "border-[#18272b] bg-transparent text-[#18272b] hover:border-[#d7192a] hover:text-[#d7192a]";

  return (
    <a
      className={`inline-flex min-h-12 items-center justify-center rounded-full border px-7 py-3 text-sm font-semibold transition ${classes}`}
      href={href}
    >
      {children}
    </a>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f8fbfa] text-[#18272b]">
      <header className="sticky top-0 z-50 border-b border-[#d7e0e2] bg-[#eef6f7]/92 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 sm:px-8 lg:px-10">
          <a className="flex items-center gap-4" href="#start">
            <Image
              src="/images/logo.png"
              alt="Praxis Chamarina Logo"
              width={64}
              height={64}
              priority
              className="h-14 w-14"
            />
            <div className="leading-none">
              <p className="font-serif text-xl font-semibold italic text-[#18272b]">
                Praxis Chamarina
              </p>
              <p className="mt-1 text-[0.68rem] uppercase tracking-[0.38em] text-[#63708f]">
                Psychologie
              </p>
            </div>
          </a>

          <div className="hidden flex-col gap-3 lg:flex lg:flex-row lg:items-center">
            <nav
              aria-label="Hauptnavigation"
              className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm font-semibold text-[#18272b] lg:gap-x-8"
            >
              {navItems.map((item) => (
                <a
                  className="border-b border-transparent pb-1 transition hover:border-[#d7192a] hover:text-[#d7192a]"
                  href={item.href}
                  key={item.href}
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <a
              className="hidden min-h-11 items-center justify-center rounded-full border border-[#18272b] px-5 py-2 text-sm font-semibold transition hover:border-[#d7192a] hover:text-[#d7192a] lg:inline-flex"
              href="mailto:kontakt@chamarina.at?subject=Termin%20buchen"
            >
              Termin buchen
            </a>
          </div>

          <details className="group relative lg:hidden">
            <summary
              aria-label="Navigation öffnen"
              className="flex h-12 w-12 cursor-pointer list-none items-center justify-center border border-[#18272b] text-2xl leading-none text-[#18272b]"
            >
              <span aria-hidden="true" className="group-open:hidden">
                ≡
              </span>
              <span aria-hidden="true" className="hidden group-open:block">
                ×
              </span>
            </summary>
            <div className="absolute right-0 top-14 w-[min(82vw,310px)] border border-[#c9d2d4] bg-[#f8fbfa] p-5 shadow-[0_20px_45px_rgba(24,39,43,0.14)]">
              <nav
                aria-label="Mobile Navigation"
                className="grid gap-3 text-base font-semibold text-[#18272b]"
              >
                {navItems.map((item) => (
                  <a
                    className="border-b border-[#d7e0e2] pb-3 transition hover:text-[#d7192a]"
                    href={item.href}
                    key={item.href}
                  >
                    {item.label}
                  </a>
                ))}
                <a
                  className="mt-2 inline-flex min-h-11 items-center justify-center rounded-full bg-[#d7192a] px-5 py-2 text-sm font-semibold text-white"
                  href="mailto:kontakt@chamarina.at?subject=Termin%20buchen"
                >
                  Termin buchen
                </a>
              </nav>
            </div>
          </details>
        </div>
      </header>

      <section
        className="relative isolate min-h-[calc(100svh-88px)] scroll-mt-28 overflow-hidden bg-[#e8f2f3]"
        id="start"
      >
        <Image
          src="/images/praxis2.png"
          alt="Heller Praxisraum mit Sesseln und großen Fenstern"
          fill
          loading="eager"
          preload
          unoptimized
          sizes="100vw"
          className="object-cover object-center opacity-35"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(232,242,243,0.96)_0%,rgba(232,242,243,0.82)_46%,rgba(232,242,243,0.38)_100%)]" />
        <div className="relative mx-auto grid min-h-[calc(100svh-88px)] max-w-7xl items-center gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[0.92fr_1.08fr] lg:px-10">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#d7192a]">
              Klinische Psychologie in Wien
            </p>
            <h1 className="mt-8 text-[#0d1517]">
              <span className="block font-serif text-6xl font-semibold italic leading-none sm:text-7xl lg:text-8xl">
                Begleitung
              </span>
              <span className="mt-5 block h-px w-64 bg-[#18272b]" />
              <span className="mt-6 block max-w-xl text-4xl font-light leading-tight sm:text-5xl">
                für Verstehen, Stabilität und Veränderung
              </span>
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-[#263a3f]">
              Klinisch-psychologische Behandlung und Diagnostik für Erwachsene:
              Unterstützung bei Angst, Zwang, Depression, Beziehungsthemen,
              Sexualität und anderen psychischen Belastungen.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <ButtonLink
                href="mailto:kontakt@chamarina.at?subject=Termin%20buchen"
                variant="solid"
              >
                Erstgespräch vereinbaren
              </ButtonLink>
              <ButtonLink href="#diagnostik">Mehr zur Diagnostik</ButtonLink>
            </div>
          </div>

          <div className="relative hidden min-h-[620px] lg:block">
            <div className="absolute bottom-0 right-8 h-[560px] w-[430px] overflow-hidden border-b border-[#18272b] bg-[#dcebed]">
              <Image
                src="/images/maria.png"
                alt="Maria Chamarina"
                fill
                priority
                unoptimized
                sizes="430px"
                className="object-cover object-top"
              />
            </div>
            <div className="absolute right-0 top-24 h-32 w-32 border border-[#8290b0]" />
            <div className="absolute bottom-16 left-4 max-w-56 border-l-2 border-[#d7192a] bg-[#f8fbfa]/80 p-5 backdrop-blur">
              <p className="text-sm font-semibold text-[#18272b]">
                Vor Ort im 1. Bezirk oder online nach Absprache.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.95fr_1.05fr]">
          <SectionIntro eyebrow="Willkommen" title="Schön, dass Sie hier sind.">
            <p>
              Ich bin klinische Psychologin und biete psychologische Therapie
              sowie diagnostische Abklärung für Erwachsene in Wien an. Mir ist
              wichtig, dass psychologische Unterstützung verständlich,
              transparent und individuell bleibt: ohne unnötige Distanz, aber
              mit fachlicher Klarheit.
            </p>
          </SectionIntro>

          <div className="grid gap-8">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#63708f]">
                Unterstützung bei
              </p>
              <div className="mt-5 grid gap-0 border-y border-[#c9d2d4]">
                {supportTopics.map((topic) => (
                  <div
                    className="flex items-center justify-between gap-4 border-b border-[#dfe6e7] py-4 last:border-b-0"
                    key={topic}
                  >
                    <span className="text-lg text-[#18272b]">{topic}</span>
                    <span aria-hidden="true" className="text-[#d7192a]">
                      +
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div className="border-l-2 border-[#d7192a] pl-5">
                <h3 className="font-serif text-2xl font-semibold">
                  Diagnostik
                </h3>
                <p className="mt-3 leading-7 text-[#4a595d]">
                  Zeitnahe klinisch-psychologische Diagnostik für Erwachsene,
                  Privatpersonen und zuweisende Kolleg:innen.
                </p>
                <div className="mt-5">
                  <TextLink href="#diagnostik">Mehr zur Diagnostik</TextLink>
                </div>
              </div>
              <div className="border-l-2 border-[#8290b0] pl-5">
                <h3 className="font-serif text-2xl font-semibold">Setting</h3>
                <p className="mt-3 leading-7 text-[#4a595d]">
                  Sitzungen finden in der Praxis im 1. Bezirk oder nach
                  Absprache online statt.
                </p>
                <div className="mt-5">
                  <TextLink href="#praxis">Zur Praxis</TextLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="scroll-mt-28 bg-[#f2f7f8] px-5 py-24 sm:px-8 lg:px-10"
        id="ueber-mich"
      >
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div className="relative aspect-[4/5] overflow-hidden bg-[#dfeaec]">
            <Image
              src="/images/maria.png"
              alt="Maria Chamarina"
              fill
              sizes="(min-width: 1024px) 34vw, 100vw"
              className="object-cover object-top"
            />
          </div>

          <div>
            <SectionIntro
              eyebrow="Über mich"
              title="Offen, direkt und fachlich klar."
            >
              <p>
                Als klinische Psychologin arbeite ich evidenzbasiert. Ich
                orientiere mich an Methoden, die wissenschaftlich bewährt sind
                und vielen Menschen in ähnlichen Situationen helfen.
                Gleichzeitig schauen wir gemeinsam, was für Sie persönlich
                passt.
              </p>
              <p className="mt-4">
                Humor darf dabei genauso Platz haben wie ernstere Themen - und
                wenn es passt, auch ein klar ausgesprochenes Wort. Was mich
                besonders interessiert, sind individuelle Lösungen. Auch wenn
                sich Probleme ähneln, ist der Weg zum Ziel oft unterschiedlich.
              </p>
              <p className="mt-4">
                Manchmal hilft es, Dinge gemeinsam aufzuschreiben. Sie werden
                dadurch greifbarer und oft leichter veränderbar. Wenn etwas
                nicht funktioniert, suchen wir gemeinsam nach einem anderen
                Ansatz.
              </p>
            </SectionIntro>

            <div className="mt-12">
              <h3 className="font-serif text-3xl font-semibold">Ausbildung</h3>
              <div className="mt-6 border-y border-[#c9d2d4]">
                {educationItems.map((item, index) => (
                  <div
                    className="grid gap-4 border-b border-[#d9e1e3] py-4 last:border-b-0 sm:grid-cols-[90px_1fr]"
                    key={item}
                  >
                    <span className="font-mono text-sm text-[#8290b0]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <p className="leading-7 text-[#4a595d]">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="scroll-mt-28 bg-white px-5 py-24 sm:px-8 lg:px-10"
        id="schwerpunkte"
      >
        <div className="mx-auto max-w-7xl">
          <SectionIntro
            eyebrow="Themen & Schwerpunkte"
            title="Psychische Belastungen verstehen und verändern."
          >
            <p>
              Gemeinsam schauen wir, worum es genau geht und wie wieder mehr
              Sicherheit, Stabilität oder Leichtigkeit im Alltag entstehen
              kann.
            </p>
          </SectionIntro>

          <div className="mt-14 grid gap-x-12 gap-y-10 md:grid-cols-2 xl:grid-cols-3">
            {focusAreas.map((area, index) => (
              <article className="border-t border-[#c9d2d4] pt-6" key={area.title}>
                <p className="font-mono text-sm text-[#8290b0]">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-4 font-serif text-3xl font-semibold">
                  {area.title}
                </h3>
                <p className="mt-4 leading-7 text-[#4a595d]">{area.text}</p>
                {area.items ? (
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {area.items.map((item) => (
                      <li
                        className="border border-[#d8ded6] px-3 py-1.5 text-sm text-[#4a595d]"
                        key={item}
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="scroll-mt-28 bg-[#eaf2f3] px-5 py-24 sm:px-8 lg:px-10"
        id="diagnostik"
      >
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionIntro
              eyebrow="Diagnostik"
              title="Klarheit durch klinisch-psychologische Abklärung."
            >
              <p>
                Diagnostik kann helfen, Beschwerden besser einzuordnen,
                Zusammenhänge zu verstehen und mehr Klarheit darüber zu
                bekommen, womit man zu tun hat.
              </p>
              <p className="mt-4">
                Ich biete klinisch-psychologische Diagnostik für
                Privatpersonen sowie für zuweisende Kolleg:innen an. Termine
                sind meist zeitnah möglich. Die Diagnostik erfolgt privat, eine
                direkte Abrechnung mit der Krankenkasse ist derzeit nicht
                möglich.
              </p>
            </SectionIntro>

            <div className="mt-10 border-y border-[#b9c8cb] py-7">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#63708f]">
                Kosten Diagnostik
              </p>
              <p className="mt-2 font-serif text-5xl font-semibold">
                500 Euro
              </p>
              <p className="mt-3 leading-7 text-[#4a595d]">
                Klinisch-psychologische Diagnostik inklusive Befund oder
                Gutachten.
              </p>
            </div>
          </div>

          <div className="grid gap-0 border-y border-[#b9c8cb]">
            {diagnosticSteps.map((step, index) => (
              <div
                className="grid gap-4 border-b border-[#cbd7da] py-5 last:border-b-0 sm:grid-cols-[80px_1fr]"
                key={step}
              >
                <span className="font-serif text-4xl font-semibold text-[#8290b0]">
                  {index + 1}
                </span>
                <p className="leading-7 text-[#3f5054]">{step}</p>
              </div>
            ))}
            <p className="py-5 leading-7 text-[#3f5054]">
              In manchen Fällen kann für eine umfassende diagnostische
              Abklärung ein weiterer Termin sinnvoll oder notwendig sein.
            </p>
          </div>
        </div>
      </section>

      <section
        className="scroll-mt-28 bg-white px-5 py-24 sm:px-8 lg:px-10"
        id="ablauf"
      >
        <div className="mx-auto max-w-7xl">
          <SectionIntro
            eyebrow="Ablauf & Kosten"
            title="Transparent vom ersten Kontakt an."
          >
            <p>
              Manche Themen lassen sich strukturiert und fokussiert bearbeiten,
              andere brauchen mehr Zeit und Raum. Wichtig sind ein geschützter
              Rahmen, klare Ziele und ein Vorgehen, das zu Ihnen passt.
            </p>
          </SectionIntro>

          <div className="mt-14 grid gap-0 border-y border-[#c9d2d4]">
            {processSteps.map((step, index) => (
              <article
                className="grid gap-5 border-b border-[#dce4e6] py-8 last:border-b-0 lg:grid-cols-[260px_1fr]"
                key={step.title}
              >
                <div>
                  <p className="font-mono text-sm text-[#8290b0]">
                    Schritt {index + 1}
                  </p>
                  <h3 className="mt-3 font-serif text-3xl font-semibold">
                    {step.title}
                  </h3>
                </div>
                <p className="max-w-3xl leading-8 text-[#4a595d]">
                  {step.text}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            <div className="border-t border-[#8290b0] pt-5">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#63708f]">
                Einheit
              </p>
              <p className="mt-3 font-serif text-4xl font-semibold">
                50 Minuten
              </p>
              <p className="mt-4 leading-7 text-[#4a595d]">
                Sitzungen können vor Ort oder online stattfinden. Ob ein
                Online-Setting sinnvoll ist, klärt sich meist nach dem
                Erstgespräch.
              </p>
            </div>
            <div className="border-t border-[#8290b0] pt-5">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#63708f]">
                Kosten
              </p>
              <p className="mt-3 font-serif text-4xl font-semibold">
                120 Euro
              </p>
              <p className="mt-4 leading-7 text-[#4a595d]">
                Die Bezahlung erfolgt per Überweisung nach jeder Sitzung. Die
                Rechnung erhalten Sie im Anschluss per E-Mail.
              </p>
            </div>
            <div className="border-t border-[#8290b0] pt-5">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#63708f]">
                Krankenkasse
              </p>
              <p className="mt-3 font-serif text-3xl font-semibold">
                Zuschuss möglich
              </p>
              <p className="mt-4 leading-7 text-[#4a595d]">
                Ein Kostenzuschuss durch die Krankenkasse ist grundsätzlich
                möglich. Weitere Informationen besprechen wir gerne persönlich.
              </p>
            </div>
          </div>

          <p className="mt-12 border-l-2 border-[#d7192a] pl-6 leading-8 text-[#4a595d]">
            Vertrauen und ein geschützter Rahmen sind wichtige Grundlagen der
            gemeinsamen Arbeit. Gespräche unterliegen selbstverständlich der
            psychologischen Verschwiegenheitspflicht. Doppeleinheiten sind
            prinzipiell möglich, aber nicht immer empfehlenswert.
          </p>
        </div>
      </section>

      <section
        className="scroll-mt-28 bg-[#f2f7f8] px-5 py-24 sm:px-8 lg:px-10"
        id="praxis"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.86fr_1.14fr] lg:items-start">
            <div>
              <SectionIntro
                eyebrow="Praxis & Anfahrt"
                title="Ein ruhiger Ort im 1. Bezirk."
              >
                <p>
                  Die Praxis befindet sich in der Fischerstiege 10 in 1010
                  Wien und ist mit öffentlichen Verkehrsmitteln gut erreichbar.
                </p>
              </SectionIntro>

              <div className="mt-10 grid gap-8">
                <div className="border-t border-[#b9c8cb] pt-5">
                  <h3 className="font-serif text-3xl font-semibold">
                    Adresse
                  </h3>
                  <p className="mt-3 leading-7 text-[#4a595d]">
                    Fischerstiege 10
                    <br />
                    1010 Wien
                  </p>
                  <div className="mt-5">
                    <TextLink href="https://www.google.com/maps/search/?api=1&query=Fischerstiege%2010%201010%20Wien">
                      Route öffnen
                    </TextLink>
                  </div>
                </div>

                <div className="border-t border-[#b9c8cb] pt-5">
                  <h3 className="font-serif text-3xl font-semibold">
                    Anfahrt
                  </h3>
                  <ul className="mt-4 grid gap-2 leading-7 text-[#4a595d]">
                    <li>U1 / U3 Stephansplatz</li>
                    <li>U4 Schwedenplatz</li>
                    <li>Straßenbahn und Bus in Gehweite</li>
                    <li>
                      Mit dem Auto: Kurzparkzone, Parkplätze je nach Tageszeit
                      begrenzt.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="grid gap-5">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/images/praxis1.png"
                  alt="Praxisraum mit Sesseln, Pflanzen und Flipchart"
                  fill
                  sizes="(min-width: 1024px) 54vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="grid gap-5 sm:grid-cols-[0.88fr_1.12fr]">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src="/images/praxis3.png"
                    alt="Wartebereich mit zwei Sesseln und Bildern"
                    fill
                    sizes="(min-width: 1024px) 22vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src="/images/praxis2-gallery.png"
                    alt="Sitzbereich der Praxis mit hellen Fenstern"
                    fill
                    sizes="(min-width: 1024px) 28vw, 100vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-14 grid gap-8 lg:grid-cols-3">
            {practiceNotes.map((note) => (
              <div className="border-t border-[#b9c8cb] pt-5" key={note.title}>
                <h3 className="font-serif text-2xl font-semibold">
                  {note.title}
                </h3>
                <p className="mt-3 leading-7 text-[#4a595d]">{note.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="scroll-mt-28 bg-[#18272b] px-5 py-24 text-white sm:px-8 lg:px-10"
        id="kontakt"
      >
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.82fr_1.18fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#f0b7bd]">
              Kontakt
            </p>
            <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight sm:text-5xl">
              Ich freue mich auf Ihre Nachricht.
            </h2>
            <div className="mt-5 h-px w-36 bg-[#8290b0]" />
            <p className="mt-6 leading-8 text-white/76">
              Wenn Sie das Gefühl haben, dass ein Gespräch hilfreich sein
              könnte, können Sie gerne ein kostenloses Erstgespräch vereinbaren.
              Sollten Sie mich telefonisch nicht erreichen, melde ich mich
              umgehend zurück.
            </p>

            <div className="mt-9 flex flex-col gap-4">
              <a
                className="border-y border-white/18 py-5 transition hover:text-[#f0b7bd]"
                href="mailto:kontakt@chamarina.at?subject=Termin%20buchen"
              >
                <span className="block text-sm uppercase tracking-[0.22em] text-white/48">
                  E-Mail
                </span>
                <span className="mt-1 block text-2xl font-semibold">
                  kontakt@chamarina.at
                </span>
              </a>
              <a
                className="border-b border-white/18 py-5 transition hover:text-[#f0b7bd]"
                href="https://wa.me/4366567243426"
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className="block text-sm uppercase tracking-[0.22em] text-white/48">
                  WhatsApp
                </span>
                <span className="mt-1 block text-2xl font-semibold">
                  +43 665 67243426
                </span>
              </a>
              <a
                className="border-b border-white/18 py-5 transition hover:text-[#f0b7bd]"
                href="tel:+4366567243426"
              >
                <span className="block text-sm uppercase tracking-[0.22em] text-white/48">
                  Telefon
                </span>
                <span className="mt-1 block text-2xl font-semibold">
                  +43 665 67243426
                </span>
              </a>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#f0b7bd]">
              FAQ
            </p>
            <h2 className="mt-4 font-serif text-4xl font-semibold">
              Häufige Fragen
            </h2>
            <div className="mt-8 border-y border-white/18">
              {faqItems.map((item) => (
                <details
                  className="group border-b border-white/14 py-5 last:border-b-0"
                  key={item.question}
                >
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-5 font-semibold">
                    <span>{item.question}</span>
                    <span
                      aria-hidden="true"
                      className="text-[#f0b7bd] transition group-open:rotate-45"
                    >
                      +
                    </span>
                  </summary>
                  <p className="mt-4 leading-7 text-white/70">{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[#101719] px-5 py-9 text-white sm:px-8 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 text-sm text-white/62 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <Image
              src="/images/logo.png"
              alt=""
              width={36}
              height={36}
              className="h-9 w-9"
            />
            <p>Praxis Chamarina - Klinische Psychologie in Wien</p>
          </div>
          <p>Fischerstiege 10, 1010 Wien</p>
        </div>
      </footer>
    </main>
  );
}
