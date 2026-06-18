import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { createPageMetadata, defaultDescription } from "./seo";
import { getHomePage, getSiteSettings } from "../sanity/content";
import { imageAlt, imageUrl } from "../sanity/image";

export async function generateMetadata(): Promise<Metadata> {
  const [homeContent, settings] = await Promise.all([
    getHomePage(),
    getSiteSettings(),
  ]);
  const homeMetadata = createPageMetadata({
    title:
      homeContent.seo?.title ||
      "Klinisch-psychologische Behandlung & Diagnostik in Wien",
    description: homeContent.seo?.description || defaultDescription,
    path: "/",
    image: imageUrl(homeContent.seo?.image || homeContent.heroImage, "/images/maria.png"),
    imageAlt:
      homeContent.seo?.imageAlt ||
      imageAlt(
        homeContent.seo?.image || homeContent.heroImage,
        "Maria Chamarina, klinische Psychologin in Wien",
      ),
    metadataSiteName: settings.siteName,
  });

  return {
    ...homeMetadata,
    title: {
      absolute: `${homeContent.title} | ${settings.siteName}`,
    },
  };
}

export default async function Home() {
  const [homeContent, settings] = await Promise.all([
    getHomePage(),
    getSiteSettings(),
  ]);
  const { contact } = settings;
  const heroImage = imageUrl(homeContent.heroImage, "/images/maria.png");
  const heroImageAlt = imageAlt(homeContent.heroImage, "Maria Chamarina");
  const practiceImage = imageUrl(homeContent.practiceImage, "/images/praxis4.jpg");
  const practiceImageAlt = imageAlt(
    homeContent.practiceImage,
    "Praxisraum der Praxis Chamarina",
  );

  return (
    <main className="bg-white text-[#0D2744]">
      <section className="relative overflow-hidden bg-[#0D2744] text-white">
        <div className="absolute inset-x-0 top-0 h-3 bg-[#FF929A]" />
        <div className="absolute bottom-0 left-0 h-40 w-full bg-[#B9CFDD]" />
        <div className="relative mx-auto grid min-h-[calc(100svh-89px)] max-w-7xl gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:px-10 lg:py-20">
          <div className="flex flex-col justify-center">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#B9CFDD]">
              {homeContent.heroEyebrow}
              <span className="mt-2 block text-[#FF929A]">
                {homeContent.heroRole}
              </span>
            </p>
            <h1 className="mt-7 max-w-3xl text-4xl font-semibold leading-[1.05] sm:text-6xl">
              {homeContent.title}
            </h1>
            <p className="mt-7 max-w-2xl text-xl leading-9 text-[#E8F1F6]">
              {homeContent.subtitle}
            </p>
            <div className="mt-7 flex items-center gap-4 rounded-lg border border-[#B9CFDD]/40 bg-white/8 p-3 lg:hidden">
              <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-lg bg-[#B9CFDD]">
                <Image
                  src={heroImage}
                  alt={heroImageAlt}
                  fill
                  sizes="96px"
                  className="object-cover object-top"
                />
              </div>
              <p className="text-sm font-semibold leading-6 text-[#E8F1F6]">
                {homeContent.settingItems.join(" · ")}
              </p>
            </div>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                className="inline-flex min-h-12 items-center justify-center rounded-lg bg-[#FF929A] px-6 py-3 text-sm font-semibold text-[#0D2744] shadow-[0_18px_40px_rgba(255,146,154,0.3)] transition hover:bg-[#ff7f8a]"
                href="/kontakt#online-buchung"
              >
                {homeContent.button}
              </Link>
              <Link
                className="inline-flex min-h-12 items-center justify-center rounded-lg border border-[#B9CFDD] px-6 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-[#0D2744]"
                href="/themen"
              >
                {homeContent.topicsLinkLabel}
              </Link>
            </div>
          </div>

          <div className="relative flex items-end">
            <div className="absolute -right-8 top-10 h-36 w-36 rounded-lg bg-[#FF929A]" />
            <div className="absolute bottom-20 left-0 h-32 w-32 rounded-lg bg-[#53728A]" />
            <div className="relative grid w-full gap-5 rounded-lg bg-white p-4 shadow-[0_28px_70px_rgba(0,0,0,0.24)] sm:p-5">
              <div className="relative aspect-[4/5] overflow-hidden rounded-lg bg-[#B9CFDD]">
                <Image
                  src={heroImage}
                  alt={heroImageAlt}
                  fill
                  priority
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  className="object-cover object-top"
                />
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {homeContent.settingItems.map((item) => (
                  <p
                    className="rounded-lg bg-[#B9CFDD] px-4 py-3 text-sm font-semibold text-[#0D2744]"
                    key={item}
                  >
                    {item}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-24 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#53728A]">
              {homeContent.introEyebrow}
            </p>
            <h2 className="mt-4 max-w-2xl text-4xl font-semibold leading-tight text-[#0D2744] sm:text-5xl">
              {homeContent.welcomeTitle}
            </h2>
          </div>
          <div className="rounded-lg border-l-[10px] border-[#FF929A] bg-[#F4F8FB] p-7 text-lg leading-9 text-[#0D2744] sm:p-9">
            <p>{homeContent.intro}</p>
            <p className="mt-5">{homeContent.supportIntro}</p>
            <ul className="mt-5 grid gap-2">
              {homeContent.supportTopics.map((topic) => (
                <li className="flex gap-3" key={topic}>
                  <span aria-hidden="true" className="text-[#FF929A]">
                    •
                  </span>
                  <span>{topic}</span>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-[#53728A]">{homeContent.principle}</p>
          </div>
        </div>
      </section>

      <section className="bg-[#F4F8FB] px-5 py-24 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-5 lg:grid-cols-3">
            {homeContent.quickLinks.map((item) => (
              <Link
                className={`${item.color} group flex min-h-64 flex-col justify-between rounded-lg p-7 text-white shadow-[0_20px_50px_rgba(13,39,68,0.16)] transition hover:-translate-y-1`}
                href={item.href}
                key={item.title}
              >
                <div>
                  <h2 className="text-3xl font-semibold">{item.title}</h2>
                  <p className="mt-5 leading-8 text-white/82">{item.text}</p>
                </div>
                <p className="mt-8 text-sm font-semibold text-[#FF929A] transition group-hover:translate-x-1">
                  Mehr erfahren -&gt;
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-24 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-[#B9CFDD] shadow-[0_22px_55px_rgba(13,39,68,0.14)]">
            <Image
              src={practiceImage}
              alt={practiceImageAlt}
              fill
              sizes="(min-width: 1024px) 44vw, 100vw"
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#53728A]">
              {homeContent.topicsEyebrow}
            </p>
            <h2 className="mt-4 text-4xl font-semibold leading-tight text-[#0D2744] sm:text-5xl">
              {homeContent.supportIntro}
            </h2>
            <div className="mt-8 grid gap-3">
              {homeContent.supportTopics.map((topic, index) => (
                <Link
                  className="group grid grid-cols-[14px_1fr_auto] items-center gap-4 rounded-lg border border-[#B9CFDD] bg-white px-5 py-4 text-base font-semibold text-[#0D2744] shadow-[0_12px_28px_rgba(13,39,68,0.07)] transition hover:border-[#FF929A] hover:bg-[#B9CFDD]/40"
                  href="/themen"
                  key={topic}
                >
                  <span
                    aria-hidden="true"
                    className={
                      index % 2 === 0
                        ? "h-3.5 w-3.5 rounded-full bg-[#FF929A]"
                        : "h-3.5 w-3.5 rounded-full bg-[#53728A]"
                    }
                  />
                  <span>{topic}</span>
                  <span
                    aria-hidden="true"
                    className="text-[#53728A] transition group-hover:translate-x-1"
                  >
                    -&gt;
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#0D2744] px-5 py-20 text-white sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#FF929A]">
              {homeContent.contactEyebrow}
            </p>
            <h2 className="mt-4 text-4xl font-semibold">
              {homeContent.contactTitle}
            </h2>
            <p className="mt-5 max-w-xl leading-8 text-[#B9CFDD]">
              {homeContent.closing}
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            <a
              aria-label={`E-Mail an ${contact.email} schreiben`}
              className="rounded-lg bg-[#53728A] p-6 transition hover:bg-[#7691AD]"
              href={`mailto:${contact.email}`}
            >
              <span className="text-sm uppercase tracking-[0.18em] text-[#B9CFDD]">
                {settings.ui.emailLabel}
              </span>
              <span className="mt-3 block font-semibold">{contact.email}</span>
            </a>
            <a
              aria-label={`Praxis Chamarina telefonisch unter ${contact.phone} kontaktieren`}
              className="rounded-lg bg-[#7691AD] p-6 text-[#0D2744] transition hover:bg-[#B9CFDD]"
              href={`tel:${contact.phone.replaceAll(" ", "")}`}
            >
              <span className="text-sm uppercase tracking-[0.18em]">
                {settings.ui.phoneLabel}
              </span>
              <span className="mt-3 block font-semibold">{contact.phone}</span>
            </a>
            <Link
              className="rounded-lg bg-[#FF929A] p-6 font-semibold text-[#0D2744] shadow-[0_18px_40px_rgba(255,146,154,0.26)] transition hover:bg-[#ff7f8a]"
              href="/kontakt#online-buchung"
            >
              {homeContent.button}
              <span className="mt-3 block text-sm text-[#0D2744]/72">
                {homeContent.onlineBookingLabel}
              </span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
