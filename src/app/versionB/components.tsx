import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { contact, navItems } from "./content";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#dcece8] bg-white/94 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-5 py-4 sm:px-8 lg:px-10">
        <Link className="flex items-center gap-3" href="/versionB">
          <Image
            src="/images/logo.png"
            alt="Praxis Chamarina Logo"
            width={44}
            height={44}
            priority
            className="h-10 w-10"
          />
          <div>
            <p className="text-lg font-semibold leading-none text-[#18272b]">
              Praxis Chamarina
            </p>
            <p className="mt-1 text-sm text-[#53656a]">Psychologie</p>
          </div>
        </Link>

        <nav
          aria-label="Version B Navigation"
          className="hidden items-center gap-4 text-[0.82rem] font-medium text-[#273b40] lg:flex xl:gap-6 xl:text-sm"
        >
          {navItems.map((item) => (
            <Link
              className="transition hover:text-[#d7192a]"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </Link>
          ))}
          <Link
            className="rounded-full bg-[#d7192a] px-5 py-2.5 font-semibold text-white shadow-[0_12px_26px_rgba(215,25,42,0.18)] transition hover:bg-[#b91424]"
            href="/versionB/kontakt"
          >
            Kontakt
          </Link>
        </nav>

        <details className="group relative lg:hidden">
          <summary
            aria-label="Navigation öffnen"
            className="flex h-11 w-11 cursor-pointer list-none items-center justify-center rounded-full border border-[#8da7b0] text-xl text-[#18272b]"
          >
            <span aria-hidden="true" className="group-open:hidden">
              ≡
            </span>
            <span aria-hidden="true" className="hidden group-open:block">
              ×
            </span>
          </summary>
          <div className="absolute right-0 top-14 w-[min(84vw,320px)] rounded-3xl border border-[#dcece8] bg-white p-5 shadow-[0_22px_55px_rgba(24,39,43,0.16)]">
            <nav
              aria-label="Mobile Version B Navigation"
              className="grid gap-3 text-base font-medium text-[#273b40]"
            >
              {navItems.map((item) => (
                <Link
                  className="border-b border-[#e5f0ed] pb-3 transition hover:text-[#d7192a]"
                  href={item.href}
                  key={item.href}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                className="mt-2 rounded-full bg-[#d7192a] px-5 py-3 text-center text-sm font-semibold text-white"
                href="/versionB/kontakt"
              >
                Kontakt aufnehmen
              </Link>
            </nav>
          </div>
        </details>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="bg-[#14363b] px-5 py-12 text-white sm:px-8 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div>
          <Link className="flex items-center gap-3" href="/versionB">
            <Image
              src="/images/logo.png"
              alt=""
              width={44}
              height={44}
              className="h-10 w-10"
            />
            <div>
              <p className="text-lg font-semibold">Praxis Chamarina</p>
              <p className="text-sm text-white/68">Klinische Psychologie</p>
            </div>
          </Link>
          <p className="mt-6 max-w-md leading-7 text-white/72">
            Klinisch-psychologische Behandlung und Diagnostik für Erwachsene in
            Wien.
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#bde9df]">
            Kontakt
          </p>
          <div className="mt-4 grid gap-2 text-white/78">
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
            <a href={`tel:${contact.phone.replaceAll(" ", "")}`}>
              {contact.phone}
            </a>
            <a href={contact.whatsapp} rel="noopener noreferrer" target="_blank">
              WhatsApp
            </a>
          </div>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#bde9df]">
            Links
          </p>
          <div className="mt-4 grid gap-2 text-white/78">
            <Link href="/versionB/faqs">FAQs</Link>
            <Link href="/versionB/impressum">Impressum</Link>
            <Link href="/versionB/kontakt">Kontakt</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export function PageHero({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children?: ReactNode;
}) {
  return (
    <section className="bg-[#f3fbf8] px-5 py-20 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-5xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#d7192a]">
          {eyebrow}
        </p>
        <h1 className="mt-5 text-4xl font-semibold leading-tight text-[#14363b] sm:text-6xl">
          {title}
        </h1>
        {children ? (
          <div className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#476066]">
            {children}
          </div>
        ) : null}
      </div>
    </section>
  );
}

export function SectionTitle({
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
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#d7192a]">
        {eyebrow}
      </p>
      <h2 className="mt-4 text-3xl font-semibold leading-tight text-[#14363b] sm:text-5xl">
        {title}
      </h2>
      {children ? (
        <div className="mt-6 text-lg leading-8 text-[#476066]">{children}</div>
      ) : null}
    </div>
  );
}

export function CTA({
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
      ? "bg-[#d7192a] text-white shadow-[0_14px_30px_rgba(215,25,42,0.2)] hover:bg-[#b91424]"
      : "border border-[#7ba8b2] bg-white text-[#14363b] hover:border-[#d7192a] hover:text-[#d7192a]";

  return (
    <Link
      className={`inline-flex min-h-12 items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition ${className}`}
      href={href}
    >
      {children}
    </Link>
  );
}

export function SoftCard({
  title,
  children,
  href,
}: {
  title: string;
  children: ReactNode;
  href?: string;
}) {
  const content = (
    <article className="h-full rounded-[2rem] border border-[#d9eee9] bg-white p-7 shadow-[0_18px_48px_rgba(20,54,59,0.08)] transition hover:-translate-y-1 hover:shadow-[0_24px_58px_rgba(20,54,59,0.12)]">
      <h3 className="text-2xl font-semibold text-[#14363b]">{title}</h3>
      <div className="mt-4 leading-7 text-[#506a70]">{children}</div>
      {href ? (
        <p className="mt-6 text-sm font-semibold text-[#d7192a]">
          Mehr erfahren -&gt;
        </p>
      ) : null}
    </article>
  );

  return href ? <Link href={href}>{content}</Link> : content;
}
