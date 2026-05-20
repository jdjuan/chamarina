import Image from "next/image";
import Link from "next/link";
import { CTA, SectionTitle, SoftCard } from "./components";
import { contact, supportTopics } from "./content";

export default function VersionBHome() {
  return (
    <main>
      <section className="relative min-h-[calc(100svh-73px)] overflow-hidden bg-[#e9f8f5]">
        <Image
          src="/images/praxis1.png"
          alt="Heller Praxisraum der Praxis Chamarina"
          fill
          priority
          unoptimized
          sizes="100vw"
          className="object-cover object-center opacity-55"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.2),rgba(255,255,255,0.58)),linear-gradient(90deg,rgba(233,248,245,0.92)_0%,rgba(233,248,245,0.72)_44%,rgba(233,248,245,0.28)_100%)]" />
        <div className="relative mx-auto grid min-h-[calc(100svh-73px)] max-w-7xl items-center gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:px-10">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#d7192a]">
              Praxis Chamarina Psychologie
            </p>
            <h1 className="mt-6 text-5xl font-semibold leading-tight text-[#12343a] sm:text-7xl">
              Klinisch-psychologische Behandlung, Diagnostik & Beratung in
              Wien.
            </h1>
            <p className="mt-7 max-w-2xl text-xl leading-9 text-[#314f56]">
              Unterstützung bei Angst, Zwang, Depression, Beziehungsthemen,
              Sexualität und anderen psychischen Belastungen.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <CTA href="/versionB/angebote">Meine Angebote</CTA>
              <CTA href="/versionB/kontakt" variant="secondary">
                Erstgespräch vereinbaren
              </CTA>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="relative ml-auto aspect-[4/5] w-[430px] overflow-hidden rounded-[2.5rem] bg-[#fdf6ef] shadow-[0_28px_70px_rgba(20,54,59,0.16)]">
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
          </div>
        </div>
      </section>

      <section className="px-5 py-24 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <SectionTitle
            eyebrow="Kurz vorgestellt"
            title="Mein Name ist Maria Chamarina."
          >
            <p>
              Ich bin klinische Psychologin und biete psychologische Behandlung
              sowie diagnostische Abklärung für Erwachsene in meiner Praxis in
              Wien an.
            </p>
            <p className="mt-4">
              Psychologische Unterstützung soll verständlich, transparent und
              individuell bleiben: ohne unnötige Distanz, aber mit fachlicher
              Klarheit.
            </p>
          </SectionTitle>

          <div className="grid gap-5 sm:grid-cols-2">
            <SoftCard title="Behandlung" href="/versionB/angebote">
              Für Themen wie Angst, Zwang, Depression, Beziehung, Selbstwert
              und Sexualität.
            </SoftCard>
            <SoftCard title="Diagnostik" href="/versionB/diagnostik">
              Zeitnahe klinisch-psychologische Abklärung inklusive Befund oder
              Gutachten.
            </SoftCard>
          </div>
        </div>
      </section>

      <section className="bg-[#fff7ee] px-5 py-24 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <SectionTitle
              eyebrow="Themen"
              title="Psychische Gesundheit zeigt sich in vielen Lebensbereichen."
            >
              <p>
                In meiner psychologischen Praxis geht es um die Wechselwirkung
                zwischen Belastung, Körper, Beziehung und Alltag.
              </p>
            </SectionTitle>
            <div className="mt-8 flex flex-wrap gap-3">
              {supportTopics.map((topic) => (
                <Link
                  className="rounded-full border border-[#f1c3ba] bg-white px-4 py-2 text-sm font-medium text-[#314f56] transition hover:border-[#d7192a] hover:text-[#d7192a]"
                  href="/versionB/themen"
                  key={topic}
                >
                  {topic}
                </Link>
              ))}
            </div>
          </div>

          <div className="relative aspect-[4/3] overflow-hidden rounded-[2.5rem]">
            <Image
              src="/images/praxis2.png"
              alt="Sitzbereich der Praxis mit hellen Fenstern"
              fill
              sizes="(min-width: 1024px) 44vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="px-5 py-24 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="Überblick"
            title="Mehr Information auf kurzen Detailseiten."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            <SoftCard title="Ablauf & Kosten" href="/versionB/ablauf-kosten">
              Erstgespräch, reguläre Einheit, Kostenzuschuss und
              Verschwiegenheit.
            </SoftCard>
            <SoftCard title="Praxis" href="/versionB/praxis">
              Adresse, Anfahrt, Hinweise zum Termin und Einblicke in die Räume.
            </SoftCard>
            <SoftCard title="FAQs" href="/versionB/faqs">
              Antworten auf häufige Fragen zu Erstgespräch, Kosten und
              Diagnostik.
            </SoftCard>
            <SoftCard title="Kontakt" href="/versionB/kontakt">
              E-Mail, Telefon, WhatsApp und Informationen zur Erreichbarkeit.
            </SoftCard>
          </div>
        </div>
      </section>

      <section className="bg-[#e9f8f5] px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#d7192a]">
              Kontakt
            </p>
            <h2 className="mt-4 text-4xl font-semibold text-[#14363b]">
              Erstgespräch vereinbaren
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            <a
              className="rounded-3xl bg-white p-6 shadow-[0_16px_42px_rgba(20,54,59,0.08)] transition hover:-translate-y-1"
              href={`mailto:${contact.email}`}
            >
              <span className="text-sm uppercase tracking-[0.18em] text-[#6f8b92]">
                E-Mail
              </span>
              <span className="mt-2 block font-semibold">{contact.email}</span>
            </a>
            <a
              className="rounded-3xl bg-white p-6 shadow-[0_16px_42px_rgba(20,54,59,0.08)] transition hover:-translate-y-1"
              href={`tel:${contact.phone.replaceAll(" ", "")}`}
            >
              <span className="text-sm uppercase tracking-[0.18em] text-[#6f8b92]">
                Telefon
              </span>
              <span className="mt-2 block font-semibold">{contact.phone}</span>
            </a>
            <Link
              className="rounded-3xl bg-[#d7192a] p-6 font-semibold text-white shadow-[0_16px_42px_rgba(215,25,42,0.2)] transition hover:-translate-y-1"
              href="/versionB/kontakt"
            >
              Zum Kontakt
              <span className="mt-2 block text-sm text-white/72">
                Alle Optionen ansehen
              </span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
