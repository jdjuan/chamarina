import type { Metadata } from "next";
import { contact, focusAreas, homeContent, practiceContent } from "./content";

export const siteName = "Praxis Chamarina";
export const baseUrl = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://psychologie-chamarina.at"
).replace(/\/$/, "");

export const defaultDescription =
  "Klinisch-psychologische Behandlung und Diagnostik für Erwachsene in Wien. Unterstützung bei Angst, Zwang, Depression, Beziehungsthemen und Sexualität.";

export function absoluteUrl(path = "/") {
  return new URL(path, baseUrl).toString();
}

export function createPageMetadata({
  title,
  description,
  path,
  image = "/images/praxis2.png",
  imageAlt = "Helle Praxisräume der Praxis Chamarina in Wien",
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
  imageAlt?: string;
}): Metadata {
  const fullTitle = `${title} | ${siteName}`;

  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title: fullTitle,
      description,
      url: path,
      siteName,
      locale: "de_AT",
      type: "website",
      images: [
        {
          url: image,
          width: image.includes("maria") ? 1242 : 1600,
          height: image.includes("maria") ? 1600 : 1200,
          alt: imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
  };
}

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${baseUrl}/#website`,
  name: siteName,
  url: baseUrl,
  inLanguage: "de-AT",
  publisher: {
    "@id": `${baseUrl}/#practice`,
  },
};

export const practiceJsonLd = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "MedicalBusiness"],
  "@id": `${baseUrl}/#practice`,
  name: siteName,
  description: defaultDescription,
  url: baseUrl,
  logo: absoluteUrl("/images/logo.png"),
  image: [absoluteUrl("/images/maria.png"), absoluteUrl("/images/praxis2.png")],
  email: contact.email,
  telephone: contact.phone,
  priceRange: "€€",
  address: {
    "@type": "PostalAddress",
    streetAddress: practiceContent.address,
    addressLocality: "Wien",
    addressRegion: "Wien",
    postalCode: "1010",
    addressCountry: "AT",
  },
  areaServed: {
    "@type": "City",
    name: "Wien",
  },
  medicalSpecialty: "Clinical Psychology",
  knowsAbout: focusAreas.map((area) => area.navTitle || area.title),
  availableService: [
    {
      "@type": "MedicalTherapy",
      name: homeContent.title,
      description: homeContent.subtitle,
    },
    {
      "@type": "MedicalProcedure",
      name: "Klinisch-psychologische Diagnostik",
      description:
        "Zeitnahe diagnostische Abklärung und klinisch-psychologische Diagnostik für Erwachsene.",
    },
  ],
  hasMap:
    "https://www.google.com/maps/search/?api=1&query=Fischerstiege%2010%2F14%201010%20Wien",
};
