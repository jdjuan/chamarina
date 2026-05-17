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

function SectionHeader({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children?: ReactNode;
}) {
  return (
    <div className="max-w-3xl">
      <p className="text-sm font-semibold uppercase text-[#d7192a]">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-semibold leading-tight text-[#172023] sm:text-4xl">
        {title}
      </h2>
      {children ? (
        <div className="mt-5 text-base leading-8 text-[#4b5659] sm:text-lg">
          {children}
        </div>
      ) : null}
    </div>
  );
}

function ArrowLink({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
}) {
  const className =
    variant === "primary"
      ? "bg-[#d7192a] text-white shadow-[0_18px_35px_rgba(215,25,42,0.28)] hover:bg-[#b91424]"
      : "border border-white/60 bg-white/10 text-white backdrop-blur hover:bg-white/18";

  return (
    <a
      className={`inline-flex min-h-12 items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition ${className}`}
      href={href}
    >
      {children}
      <span aria-hidden="true" className="ml-2">
        -&gt;
      </span>
    </a>
  );
}

function Pill({ children }: { children: ReactNode }) {
  return (
    <li className="rounded-full border border-[#d8ded6] bg-white px-4 py-2 text-sm font-medium text-[#334044]">
      {children}
    </li>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fbfbf8] text-[#172023]">
      <header className="sticky top-0 z-50 border-b border-[#e4e7e1] bg-[#fbfbf8]/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-3 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-10">
          <a className="flex items-center gap-3" href="#start">
            <Image
              src="/images/logo.png"
              alt="Praxis Chamarina Logo"
              width={54}
              height={54}
              priority
              className="h-12 w-12"
            />
            <div>
              <p className="text-base font-semibold text-[#172023]">
                Praxis Chamarina
              </p>
              <p className="text-sm text-[#657174]">Klinische Psychologie</p>
            </div>
          </a>
          <div className="flex items-center gap-3 pb-1 lg:pb-0">
            <nav
              aria-label="Hauptnavigation"
              className="flex flex-wrap items-center gap-1 text-sm font-medium text-[#4b5659] lg:flex-nowrap"
            >
              {navItems.map((item) => (
                <a
                  className="rounded-full px-2.5 py-2 transition hover:bg-[#edf2ee] hover:text-[#172023] sm:px-3"
                  href={item.href}
                  key={item.href}
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <a
              className="hidden min-h-11 shrink-0 items-center justify-center rounded-full bg-[#172023] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#334044] sm:inline-flex"
              href="mailto:kontakt@chamarina.at?subject=Termin%20buchen"
            >
              Termin buchen
            </a>
          </div>
        </div>
      </header>

      <section
        className="relative isolate flex min-h-[78svh] scroll-mt-28 items-center overflow-hidden bg-[#0e1b1d] text-white"
        id="start"
      >
        <Image
          src="/images/praxis2.png"
          alt="Heller Praxisraum mit Sesseln und großen Fenstern"
          fill
          loading="eager"
          preload
          sizes="100vw"
          className="object-cover object-center opacity-72"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(14,27,29,0.88)_0%,rgba(14,27,29,0.68)_42%,rgba(14,27,29,0.16)_100%)]" />
        <div className="relative mx-auto w-full max-w-7xl px-5 py-20 sm:px-8 lg:px-10">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase text-[#f0b7bd]">
              Praxis Chamarina - Wien, 1. Bezirk
            </p>
            <h1 className="mt-5 max-w-3xl text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
              Klinisch-psychologische Behandlung & Diagnostik in Wien
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/86 sm:text-xl">
              Unterstützung bei Angst, Zwang, Depression,
              Beziehungsthemen, Sexualität und anderen psychischen
              Belastungen.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ArrowLink href="mailto:kontakt@chamarina.at?subject=Termin%20buchen">
                Termin buchen
              </ArrowLink>
              <ArrowLink href="#diagnostik" variant="secondary">
                Mehr zur Diagnostik
              </ArrowLink>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[#e4e7e1] bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:px-10">
          <div>
            <SectionHeader
              eyebrow="Willkommen"
              title="Schön, dass Sie hier sind."
            >
              <p>
                Ich bin klinische Psychologin und biete psychologische
                Therapie sowie diagnostische Abklärung für Erwachsene in Wien
                an. Psychologische Unterstützung soll verständlich,
                transparent und individuell bleiben: ohne unnötige Distanz,
                aber mit fachlicher Klarheit.
              </p>
            </SectionHeader>
            <ul className="mt-8 flex flex-wrap gap-3">
              {supportTopics.map((topic) => (
                <Pill key={topic}>{topic}</Pill>
              ))}
            </ul>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-lg border border-[#e1e5df] bg-[#f7faf7] p-6">
              <p className="text-sm font-semibold uppercase text-[#5f7d72]">
                Diagnostik
              </p>
              <h3 className="mt-3 text-xl font-semibold">
                Zeitnahe Abklärung
              </h3>
              <p className="mt-3 leading-7 text-[#4b5659]">
                Klinisch-psychologische Diagnostik für Erwachsene,
                Privatpersonen und zuweisende Kolleg:innen.
              </p>
              <a
                className="mt-5 inline-flex text-sm font-semibold text-[#d7192a] hover:text-[#a8111d]"
                href="#diagnostik"
              >
                Mehr zur Diagnostik -&gt;
              </a>
            </div>
            <div className="rounded-lg border border-[#e1e5df] bg-[#f6f7fb] p-6">
              <p className="text-sm font-semibold uppercase text-[#68789b]">
                Setting
              </p>
              <h3 className="mt-3 text-xl font-semibold">
                Vor Ort oder online
              </h3>
              <p className="mt-3 leading-7 text-[#4b5659]">
                Sitzungen finden in der Praxis im 1. Bezirk oder nach
                Absprache online statt.
              </p>
              <a
                className="mt-5 inline-flex text-sm font-semibold text-[#d7192a] hover:text-[#a8111d]"
                href="#praxis"
              >
                Zur Praxis -&gt;
              </a>
            </div>
          </div>
        </div>
      </section>

      <section
        className="scroll-mt-28 bg-[#fbfbf8] px-5 py-20 sm:px-8 lg:px-10"
        id="ueber-mich"
      >
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div className="relative aspect-[4/5] overflow-hidden rounded-lg bg-[#e6edf5]">
            <Image
              src="/images/maria.png"
              alt="Maria Chamarina"
              fill
              sizes="(min-width: 1024px) 36vw, 100vw"
              className="object-cover object-center"
            />
          </div>
          <div>
            <SectionHeader
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
            </SectionHeader>

            <div className="mt-10 rounded-lg border border-[#e1e5df] bg-white p-6">
              <h3 className="text-xl font-semibold">Ausbildung</h3>
              <ul className="mt-5 grid gap-3 text-[#4b5659]">
                {educationItems.map((item) => (
                  <li className="flex gap-3 leading-7" key={item}>
                    <span
                      aria-hidden="true"
                      className="mt-3 h-2 w-2 shrink-0 rounded-full bg-[#d7192a]"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section
        className="scroll-mt-28 bg-[#172023] px-5 py-20 text-white sm:px-8 lg:px-10"
        id="schwerpunkte"
      >
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Themen & Schwerpunkte"
            title="Unterstützung bei psychischen Belastungen."
          >
            <p className="text-white/74">
              Gemeinsam schauen wir, worum es genau geht und wie wieder mehr
              Sicherheit, Stabilität oder Leichtigkeit im Alltag entstehen
              kann.
            </p>
          </SectionHeader>

          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {focusAreas.map((area) => (
              <article
                className="rounded-lg border border-white/12 bg-white/[0.06] p-6"
                key={area.title}
              >
                <h3 className="text-xl font-semibold">{area.title}</h3>
                <p className="mt-4 leading-7 text-white/76">{area.text}</p>
                {area.items ? (
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {area.items.map((item) => (
                      <li
                        className="rounded-full border border-white/14 bg-white/[0.06] px-3 py-1.5 text-sm text-white/80"
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
        className="scroll-mt-28 bg-white px-5 py-20 sm:px-8 lg:px-10"
        id="diagnostik"
      >
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <SectionHeader
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
                sind meist zeitnah möglich. Die Diagnostik erfolgt privat,
                eine direkte Abrechnung mit der Krankenkasse ist derzeit nicht
                möglich.
              </p>
            </SectionHeader>

            <div className="mt-8 rounded-lg border border-[#e1e5df] bg-[#f7faf7] p-6">
              <p className="text-sm font-semibold uppercase text-[#5f7d72]">
                Kosten
              </p>
              <p className="mt-2 text-3xl font-semibold">500 Euro</p>
              <p className="mt-3 leading-7 text-[#4b5659]">
                Klinisch-psychologische Diagnostik inklusive Befund oder
                Gutachten.
              </p>
            </div>
          </div>

          <div className="grid gap-4">
            {diagnosticSteps.map((step, index) => (
              <div
                className="rounded-lg border border-[#e1e5df] bg-[#fbfbf8] p-5"
                key={step}
              >
                <div className="flex gap-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#172023] font-semibold text-white">
                    {index + 1}
                  </span>
                  <p className="leading-7 text-[#4b5659]">{step}</p>
                </div>
              </div>
            ))}
            <p className="rounded-lg border border-[#e1e5df] bg-white p-5 leading-7 text-[#4b5659]">
              In manchen Fällen kann für eine umfassende diagnostische
              Abklärung ein weiterer Termin sinnvoll oder notwendig sein.
            </p>
          </div>
        </div>
      </section>

      <section
        className="scroll-mt-28 bg-[#f6f7fb] px-5 py-20 sm:px-8 lg:px-10"
        id="ablauf"
      >
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Ablauf & Kosten"
            title="Transparent vom ersten Kontakt an."
          >
            <p>
              Manche Themen lassen sich strukturiert und fokussiert bearbeiten,
              andere brauchen mehr Zeit und Raum. Wichtig sind ein geschützter
              Rahmen, klare Ziele und ein Vorgehen, das zu Ihnen passt.
            </p>
          </SectionHeader>

          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {processSteps.map((step, index) => (
              <article
                className="rounded-lg border border-[#dfe3ea] bg-white p-6"
                key={step.title}
              >
                <p className="text-sm font-semibold uppercase text-[#68789b]">
                  Schritt {index + 1}
                </p>
                <h3 className="mt-3 text-xl font-semibold">{step.title}</h3>
                <p className="mt-4 leading-7 text-[#4b5659]">{step.text}</p>
              </article>
            ))}
          </div>

          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            <div className="rounded-lg border border-[#dfe3ea] bg-white p-6">
              <p className="text-sm font-semibold uppercase text-[#68789b]">
                Einheit
              </p>
              <p className="mt-3 text-3xl font-semibold">50 Minuten</p>
              <p className="mt-3 leading-7 text-[#4b5659]">
                Sitzungen können vor Ort oder online stattfinden.
              </p>
            </div>
            <div className="rounded-lg border border-[#dfe3ea] bg-white p-6">
              <p className="text-sm font-semibold uppercase text-[#68789b]">
                Kosten
              </p>
              <p className="mt-3 text-3xl font-semibold">120 Euro</p>
              <p className="mt-3 leading-7 text-[#4b5659]">
                Die Bezahlung erfolgt per Überweisung nach jeder Sitzung.
              </p>
            </div>
            <div className="rounded-lg border border-[#dfe3ea] bg-white p-6">
              <p className="text-sm font-semibold uppercase text-[#68789b]">
                Krankenkasse
              </p>
              <p className="mt-3 text-xl font-semibold">
                Zuschuss grundsätzlich möglich
              </p>
              <p className="mt-3 leading-7 text-[#4b5659]">
                Weitere Informationen besprechen wir gerne im persönlichen
                Gespräch.
              </p>
            </div>
          </div>

          <p className="mt-8 rounded-lg border border-[#dfe3ea] bg-white p-6 leading-7 text-[#4b5659]">
            Vertrauen und ein geschützter Rahmen sind wichtige Grundlagen der
            gemeinsamen Arbeit. Gespräche unterliegen selbstverständlich der
            psychologischen Verschwiegenheitspflicht.
          </p>
        </div>
      </section>

      <section
        className="scroll-mt-28 bg-white px-5 py-20 sm:px-8 lg:px-10"
        id="praxis"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
            <div>
              <SectionHeader
                eyebrow="Praxis & Anfahrt"
                title="Zentral im 1. Bezirk in Wien."
              >
                <p>
                  Die Praxis befindet sich in der Fischerstiege 10 und ist mit
                  öffentlichen Verkehrsmitteln gut erreichbar.
                </p>
              </SectionHeader>

              <div className="mt-8 grid gap-4">
                <div className="rounded-lg border border-[#e1e5df] bg-[#fbfbf8] p-6">
                  <h3 className="text-xl font-semibold">Adresse</h3>
                  <p className="mt-3 leading-7 text-[#4b5659]">
                    Fischerstiege 10
                    <br />
                    1010 Wien
                  </p>
                  <a
                    className="mt-5 inline-flex text-sm font-semibold text-[#d7192a] hover:text-[#a8111d]"
                    href="https://www.google.com/maps/search/?api=1&query=Fischerstiege%2010%201010%20Wien"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Route öffnen -&gt;
                  </a>
                </div>

                <div className="rounded-lg border border-[#e1e5df] bg-[#fbfbf8] p-6">
                  <h3 className="text-xl font-semibold">Anfahrt</h3>
                  <ul className="mt-4 grid gap-3 leading-7 text-[#4b5659]">
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

            <div className="grid gap-4">
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                <Image
                  src="/images/praxis1.png"
                  alt="Praxisraum mit Sesseln, Pflanzen und Flipchart"
                  fill
                  sizes="(min-width: 1024px) 54vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[16/9] overflow-hidden rounded-lg">
                <Image
                  src="/images/praxis3.png"
                  alt="Wartebereich mit zwei Sesseln und Bildern"
                  fill
                  sizes="(min-width: 1024px) 54vw, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            <div className="rounded-lg border border-[#e1e5df] bg-[#fbfbf8] p-6">
              <h3 className="text-xl font-semibold">Zum Termin</h3>
              <p className="mt-3 leading-7 text-[#4b5659]">
                Bitte kommen Sie nicht deutlich vor dem vereinbarten Termin, da
                ich in der Regel noch in einer laufenden Einheit bin.
              </p>
            </div>
            <div className="rounded-lg border border-[#e1e5df] bg-[#fbfbf8] p-6">
              <h3 className="text-xl font-semibold">Barrierefreiheit</h3>
              <p className="mt-3 leading-7 text-[#4b5659]">
                Die Praxis ist leider nicht barrierefrei.
              </p>
            </div>
            <div className="rounded-lg border border-[#e1e5df] bg-[#fbfbf8] p-6">
              <h3 className="text-xl font-semibold">Absage</h3>
              <p className="mt-3 leading-7 text-[#4b5659]">
                Vereinbarte Termine sind verbindlich. Bitte sagen Sie
                mindestens 24 Stunden im Voraus ab.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        className="scroll-mt-28 bg-[#172023] px-5 py-20 text-white sm:px-8 lg:px-10"
        id="kontakt"
      >
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHeader
              eyebrow="Kontakt"
              title="Kostenloses Erstgespräch vereinbaren."
            >
              <p className="text-white/74">
                Wenn Sie das Gefühl haben, dass ein Gespräch hilfreich sein
                könnte, können Sie gerne Kontakt aufnehmen. Sollten Sie mich
                telefonisch nicht erreichen, melde ich mich umgehend zurück.
              </p>
            </SectionHeader>

            <div className="mt-8 grid gap-3">
              <a
                className="rounded-lg border border-white/12 bg-white/[0.06] p-5 transition hover:bg-white/[0.1]"
                href="mailto:kontakt@chamarina.at?subject=Termin%20buchen"
              >
                <p className="text-sm uppercase text-white/56">E-Mail</p>
                <p className="mt-1 text-xl font-semibold">
                  kontakt@chamarina.at
                </p>
              </a>
              <a
                className="rounded-lg border border-white/12 bg-white/[0.06] p-5 transition hover:bg-white/[0.1]"
                href="https://wa.me/4366567243426"
                rel="noopener noreferrer"
                target="_blank"
              >
                <p className="text-sm uppercase text-white/56">WhatsApp</p>
                <p className="mt-1 text-xl font-semibold">+43 665 67243426</p>
              </a>
              <a
                className="rounded-lg border border-white/12 bg-white/[0.06] p-5 transition hover:bg-white/[0.1]"
                href="tel:+4366567243426"
              >
                <p className="text-sm uppercase text-white/56">Telefon</p>
                <p className="mt-1 text-xl font-semibold">+43 665 67243426</p>
              </a>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-semibold leading-tight">
              Häufige Fragen
            </h2>
            <div className="mt-6 grid gap-3">
              {faqItems.map((item) => (
                <details
                  className="group rounded-lg border border-white/12 bg-white/[0.06] p-5"
                  key={item.question}
                >
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-4 font-semibold">
                    <span>{item.question}</span>
                    <span
                      aria-hidden="true"
                      className="text-[#f0b7bd] transition group-open:rotate-45"
                    >
                      +
                    </span>
                  </summary>
                  <p className="mt-4 leading-7 text-white/74">{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[#101719] px-5 py-8 text-white sm:px-8 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-white/62 sm:flex-row sm:items-center sm:justify-between">
          <p>Praxis Chamarina - Klinische Psychologie in Wien</p>
          <p>Fischerstiege 10, 1010 Wien</p>
        </div>
      </footer>
    </main>
  );
}
