import type { Metadata } from "next";
import {
  fallbackHomePage,
  fallbackPracticePage,
  fallbackSiteSettings,
  fallbackTopicsPage,
} from "../sanity/fallbacks";
import { imageUrl } from "../sanity/image";
import type { HomePageContent, PracticePageContent, SiteSettings, TopicsPageContent } from "../sanity/types";

export const siteName = fallbackSiteSettings.siteName;
export const baseUrl = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.psychologie-chamarina.at"
).replace(/\/$/, "");

export const defaultDescription = fallbackSiteSettings.defaultDescription;

export function absoluteUrl(path = "/") {
  return new URL(path, baseUrl).toString();
}

export function createPageMetadata({
  title,
  description,
  path,
  image = "/images/praxis4.jpg",
  imageAlt = "Praxisraum der Praxis Chamarina in Wien",
  metadataSiteName = siteName,
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
  imageAlt?: string;
  metadataSiteName?: string;
}): Metadata {
  const fullTitle = `${title} | ${metadataSiteName}`;

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
      siteName: metadataSiteName,
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

export function createWebsiteJsonLd(settings: SiteSettings) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${baseUrl}/#website`,
    name: settings.siteName,
    url: baseUrl,
    inLanguage: "de-AT",
    publisher: {
      "@id": `${baseUrl}/#practice`,
    },
  };
}

export function createPracticeJsonLd({
  settings,
  home,
  practice,
  topics,
}: {
  settings: SiteSettings;
  home: HomePageContent;
  practice: PracticePageContent;
  topics: TopicsPageContent;
}) {
  const structuredData = settings.structuredData;
  const topicNames = topics.focusAreas.flatMap((area) => [
    area.navTitle || area.title,
    ...area.topics.map((topic) => topic.title),
  ]);

  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "MedicalBusiness"],
    "@id": `${baseUrl}/#practice`,
    name: settings.siteName,
    description: settings.defaultDescription,
    url: baseUrl,
    logo: absoluteUrl(imageUrl(settings.logo, "/images/logo.png")),
    image: [
      absoluteUrl(imageUrl(home.heroImage, "/images/maria.png")),
      absoluteUrl(imageUrl(practice.images[0], "/images/praxis4.jpg")),
    ],
    email: settings.contact.email,
    telephone: settings.contact.phone,
    priceRange: structuredData.priceRange,
    address: {
      "@type": "PostalAddress",
      streetAddress: practice.address,
      addressLocality: structuredData.addressLocality,
      addressRegion: structuredData.addressRegion,
      postalCode: structuredData.postalCode,
      addressCountry: structuredData.addressCountry,
    },
    areaServed: {
      "@type": "City",
      name: structuredData.areaServed,
    },
    medicalSpecialty: structuredData.medicalSpecialty,
    knowsAbout: topicNames,
    availableService: [
      {
        "@type": structuredData.treatmentServiceType,
        name: home.title,
        description: home.subtitle,
      },
      {
        "@type": structuredData.diagnosticsServiceType,
        name: structuredData.diagnosticsServiceName,
        description: structuredData.diagnosticsServiceDescription,
      },
    ],
    hasMap: practice.routeUrl,
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

export const practiceJsonLd = createPracticeJsonLd({
  settings: fallbackSiteSettings,
  home: fallbackHomePage,
  practice: fallbackPracticePage,
  topics: fallbackTopicsPage,
});
