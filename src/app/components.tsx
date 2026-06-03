"use client";

import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { useState } from "react";
import { contact, navItems } from "./content";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#B9CFDD] bg-white/94 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-5 py-4 sm:px-8 lg:px-10">
        <Link className="flex items-center gap-3" href="/">
          <Image
            src="/images/logo.png"
            alt=""
            width={64}
            height={64}
            priority
            className="h-14 w-14"
          />
          <div>
            <p className="text-base font-semibold leading-none text-[#0D2744]">
              Maria Chamarina, BA MSc
            </p>
            <p className="mt-1 text-xs text-[#53728A] sm:text-sm">
              Klinische Psychologin
            </p>
          </div>
        </Link>

        <nav
          aria-label="Hauptnavigation"
          className="hidden items-center gap-3 text-[0.78rem] font-medium text-[#0D2744] lg:flex xl:gap-4 xl:text-[0.82rem]"
        >
          {navItems.map((item) => (
            <Link
              className="transition hover:text-[#53728A]"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </Link>
          ))}
          <Link
            className="rounded-full bg-[#FF929A] px-4 py-2.5 font-semibold text-[#0D2744] shadow-[0_12px_26px_rgba(255,146,154,0.28)] transition hover:bg-[#ff7f8a]"
            href="/kontakt#online-buchung"
          >
            Termin buchen
          </Link>
        </nav>

        <div className="relative lg:hidden">
          <button
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? "Navigation schließen" : "Navigation öffnen"}
            className="flex h-11 w-11 cursor-pointer list-none items-center justify-center rounded-full border border-[#7691AD] text-xl text-[#0D2744]"
            type="button"
            onClick={() => setMobileOpen((open) => !open)}
          >
            <span aria-hidden="true" className={mobileOpen ? "hidden" : ""}>
              ≡
            </span>
            <span aria-hidden="true" className={mobileOpen ? "" : "hidden"}>
              ×
            </span>
          </button>
          {mobileOpen ? (
            <div className="absolute right-0 top-14 w-[min(84vw,320px)] rounded-3xl border border-[#B9CFDD] bg-white p-5 shadow-[0_22px_55px_rgba(13,39,68,0.16)]">
              <nav
                aria-label="Mobile Hauptnavigation"
                className="grid gap-3 text-base font-medium text-[#0D2744]"
              >
                {navItems.map((item) => (
                  <Link
                    className="border-b border-[#B9CFDD] pb-3 transition hover:text-[#53728A]"
                    href={item.href}
                    key={item.href}
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                <Link
                  className="mt-2 rounded-full bg-[#FF929A] px-5 py-3 text-center text-sm font-semibold text-[#0D2744]"
                  href="/kontakt#online-buchung"
                  onClick={() => setMobileOpen(false)}
                >
                  Termin buchen
                </Link>
              </nav>
            </div>
          ) : null}
        </div>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="bg-[#0D2744] px-5 py-12 text-white sm:px-8 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div>
          <Link className="flex items-center gap-3" href="/">
            <Image
              src="/images/logo.png"
              alt=""
              width={56}
              height={56}
              className="h-12 w-12"
            />
            <div>
              <p className="text-lg font-semibold">Maria Chamarina, BA MSc</p>
              <p className="text-sm text-white/68">Klinische Psychologin</p>
            </div>
          </Link>
          <p className="mt-6 max-w-md leading-7 text-white/72">
            Klinisch-psychologische Behandlung und Diagnostik für Erwachsene in
            Wien.
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#B9CFDD]">
            Kontakt
          </p>
          <div className="mt-4 grid gap-2 text-white/78">
            <a
              aria-label={`E-Mail an ${contact.email} schreiben`}
              href={`mailto:${contact.email}`}
            >
              {contact.email}
            </a>
            <a
              aria-label={`Praxis Chamarina telefonisch unter ${contact.phone} kontaktieren`}
              href={`tel:${contact.phone.replaceAll(" ", "")}`}
            >
              {contact.phone}
            </a>
            <a
              aria-label={`WhatsApp an Praxis Chamarina unter ${contact.phone} öffnen`}
              href={contact.whatsapp}
              rel="noopener noreferrer"
              target="_blank"
            >
              WhatsApp
            </a>
          </div>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#B9CFDD]">
            Links
          </p>
          <div className="mt-4 grid gap-2 text-white/78">
            <Link href="/faqs">FAQs</Link>
            <Link href="/impressum">Impressum</Link>
            <Link href="/kontakt">Kontakt</Link>
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
    <section className="bg-[#F4F8FB] px-5 py-20 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-5xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#53728A]">
          {eyebrow}
        </p>
        <h1 className="mt-5 text-4xl font-semibold leading-tight text-[#0D2744] sm:text-6xl">
          {title}
        </h1>
        {children ? (
          <div className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#53728A]">
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
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#53728A]">
        {eyebrow}
      </p>
      <h2 className="mt-4 text-3xl font-semibold leading-tight text-[#0D2744] sm:text-5xl">
        {title}
      </h2>
      {children ? (
        <div className="mt-6 text-lg leading-8 text-[#53728A]">{children}</div>
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
      ? "bg-[#FF929A] text-[#0D2744] shadow-[0_14px_30px_rgba(255,146,154,0.28)] hover:bg-[#ff7f8a]"
      : "border border-[#7691AD] bg-white text-[#0D2744] hover:border-[#FF929A] hover:text-[#0D2744]";

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
    <article className="h-full rounded-[2rem] border border-[#B9CFDD] bg-white p-7 shadow-[0_18px_48px_rgba(13,39,68,0.08)] transition hover:-translate-y-1 hover:shadow-[0_24px_58px_rgba(13,39,68,0.12)]">
      <h3 className="text-2xl font-semibold text-[#0D2744]">{title}</h3>
      <div className="mt-4 leading-7 text-[#53728A]">{children}</div>
      {href ? (
        <p className="mt-6 text-sm font-semibold text-[#53728A]">
          Mehr erfahren -&gt;
        </p>
      ) : null}
    </article>
  );

  return href ? <Link href={href}>{content}</Link> : content;
}
