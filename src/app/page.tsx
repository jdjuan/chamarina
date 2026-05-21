import Image from "next/image";
import Link from "next/link";
import { CTA, SectionTitle, SoftCard } from "./components";
import { contact, homeContent, supportTopics } from "./content";

const topicPills = [
  {
    card: "border-[#f3bbb2] bg-[#fff8f5] hover:border-[#d7192a] hover:bg-white",
    dot: "bg-[#d7192a] shadow-[0_0_0_6px_rgba(215,25,42,0.1)]",
  },
  {
    card: "border-[#bfe7dc] bg-[#f6fffb] hover:border-[#4eaa96] hover:bg-white",
    dot: "bg-[#4eaa96] shadow-[0_0_0_6px_rgba(78,170,150,0.12)]",
  },
  {
    card: "border-[#ffd1ad] bg-[#fffaf1] hover:border-[#eaa455] hover:bg-white",
    dot: "bg-[#eaa455] shadow-[0_0_0_6px_rgba(234,164,85,0.14)]",
  },
  {
    card: "border-[#bddaf6] bg-[#f4f9ff] hover:border-[#669ed3] hover:bg-white",
    dot: "bg-[#669ed3] shadow-[0_0_0_6px_rgba(102,158,211,0.13)]",
  },
  {
    card: "border-[#efc0da] bg-[#fff6fb] hover:border-[#c76598] hover:bg-white",
    dot: "bg-[#c76598] shadow-[0_0_0_6px_rgba(199,101,152,0.12)]",
  },
];

export default function Home() {
  return (
    <main>
      <section className="relative overflow-hidden bg-[#fff7ee]">
        <Image
          src="/images/praxis1.png"
          alt="Heller Praxisraum der Praxis Chamarina"
          fill
          priority
          unoptimized
          sizes="100vw"
          className="object-cover object-center opacity-38"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,247,238,0.95)_0%,rgba(236,251,246,0.9)_48%,rgba(238,246,255,0.58)_100%)]" />
        <div className="relative mx-auto grid min-h-[calc(100svh-73px)] max-w-7xl items-center gap-10 px-5 py-14 sm:px-8 sm:py-16 lg:grid-cols-[0.92fr_1.08fr] lg:px-10 lg:py-20">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#d7192a]">
              Praxis Chamarina Psychologie
            </p>
            <h1 className="mt-6 text-3xl font-semibold leading-[1.08] text-[#12343a] sm:text-5xl lg:text-6xl">
              {homeContent.title}
            </h1>
            <p className="mt-6 max-w-xl text-xl leading-9 text-[#314f56]">
              {homeContent.subtitle}
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <CTA href="/kontakt">{homeContent.button}</CTA>
              <CTA href="/diagnostik" variant="secondary">
                Mehr zur Diagnostik
              </CTA>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[310px] sm:max-w-[360px] lg:ml-auto lg:mr-0 lg:max-w-[440px]">
            <div className="absolute -left-5 top-8 h-28 w-28 rounded-[2rem] bg-[#bde9df] sm:-left-8 sm:h-36 sm:w-36" />
            <div className="absolute -right-4 bottom-12 h-24 w-24 rounded-[1.75rem] bg-[#ffd1c9] sm:-right-8 sm:h-32 sm:w-32" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] bg-[#eef6ff] shadow-[0_28px_70px_rgba(20,54,59,0.16)]">
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
            <div className="relative -mt-8 ml-auto max-w-[230px] rounded-3xl bg-white p-5 shadow-[0_18px_44px_rgba(20,54,59,0.13)]">
              <p className="text-sm font-semibold leading-6 text-[#14363b]">
                Wien, 1. Bezirk · online oder vor Ort
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-24 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <SectionTitle
            eyebrow="Kurz vorgestellt"
            title={homeContent.welcomeTitle}
          >
            <p>{homeContent.intro}</p>
            <p className="mt-4">{homeContent.supportIntro}</p>
            <ul className="mt-4 grid gap-2">
              {homeContent.supportTopics.map((topic) => (
                <li className="flex gap-3" key={topic}>
                  <span aria-hidden="true" className="text-[#d7192a]">
                    •
                  </span>
                  <span>{topic}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4">{homeContent.principle}</p>
          </SectionTitle>

          <div className="grid gap-5 sm:grid-cols-2">
            <Link
              className="rounded-[2rem] bg-[#ecfbf6] p-7 shadow-[0_18px_48px_rgba(20,54,59,0.08)] transition hover:-translate-y-1"
              href="/diagnostik"
            >
              <h3 className="text-2xl font-semibold text-[#14363b]">
                {homeContent.diagnosticsTitle}
              </h3>
              <p className="mt-4 leading-7 text-[#506a70]">
                {homeContent.diagnosticsText}
              </p>
              <p className="mt-6 text-sm font-semibold text-[#d7192a]">
                Mehr zur Diagnostik -&gt;
              </p>
            </Link>
            <Link
              className="rounded-[2rem] bg-[#eef6ff] p-7 shadow-[0_18px_48px_rgba(20,54,59,0.08)] transition hover:-translate-y-1"
              href="/praxis"
            >
              <h3 className="text-2xl font-semibold text-[#14363b]">
                {homeContent.settingTitle}
              </h3>
              <ul className="mt-4 grid gap-2 leading-7 text-[#506a70]">
                {homeContent.settingItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className="mt-6 text-sm font-semibold text-[#d7192a]">
                Zur Praxis -&gt;
              </p>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#ecfbf6] px-5 py-24 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <SectionTitle
              eyebrow="Themen und Schwerpunkte"
              title={homeContent.supportIntro}
            >
              <p>{homeContent.closing}</p>
            </SectionTitle>
            <div className="mt-8 grid max-w-4xl gap-4 sm:grid-cols-2">
              {supportTopics.map((topic, index) => (
                <Link
                  className={`group flex min-h-16 items-center gap-4 rounded-2xl border px-5 py-4 text-base font-semibold leading-snug text-[#29464d] shadow-[0_16px_34px_rgba(20,54,59,0.08)] transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_22px_46px_rgba(20,54,59,0.13)] ${topicPills[index % topicPills.length].card}`}
                  href="/themen"
                  key={topic}
                >
                  <span
                    aria-hidden="true"
                    className={`h-2.5 w-2.5 shrink-0 rounded-full ${topicPills[index % topicPills.length].dot}`}
                  />
                  <span>{topic}</span>
                  <span
                    aria-hidden="true"
                    className="ml-auto shrink-0 text-[#d7192a] opacity-45 transition group-hover:translate-x-1 group-hover:opacity-100"
                  >
                    →
                  </span>
                </Link>
              ))}
            </div>
          </div>

          <div className="relative aspect-[4/3] overflow-hidden rounded-[2.5rem] shadow-[0_24px_64px_rgba(20,54,59,0.12)]">
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

      <section className="bg-[#fffaf4] px-5 py-24 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="Überblick"
            title="Mehr Informationen auf kurzen Detailseiten."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            <SoftCard title="Ablauf & Kosten" href="/ablauf-kosten">
              Erstgespräch, reguläre Einheit, Kostenzuschuss und
              Verschwiegenheit.
            </SoftCard>
            <SoftCard title="Praxis" href="/praxis">
              Adresse, Anfahrt, Hinweise zum Termin und Einblicke in die Räume.
            </SoftCard>
            <SoftCard title="FAQs" href="/faqs">
              Antworten auf häufige Fragen zu Erstgespräch, Kosten und
              Diagnostik.
            </SoftCard>
            <SoftCard title="Kontakt" href="/kontakt">
              E-Mail, Telefon, WhatsApp und Informationen zur Erreichbarkeit.
            </SoftCard>
          </div>
        </div>
      </section>

      <section className="bg-[#eef6ff] px-5 py-20 sm:px-8 lg:px-10">
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
              href="/kontakt"
            >
              {homeContent.button}
              <span className="mt-2 block text-sm text-white/72">
                Kostenloses Erstgespräch vereinbaren
              </span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
