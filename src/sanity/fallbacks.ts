import {
  aboutContent,
  contact,
  contactContent,
  diagnosticsContent,
  educationItems,
  faqIntro,
  faqItems,
  focusAreas,
  homeContent,
  impressumContent,
  navItems,
  practiceContent,
  privacyContent,
  processContent,
  siteUrl,
  topicCategoryDetails,
  topicDetails,
} from "../app/content";
import type {
  AboutPageContent,
  ContactPageContent,
  DiagnosticsPageContent,
  FaqPageContent,
  HomePageContent,
  LegalPageContent,
  PracticePageContent,
  ProcessPageContent,
  SiteSettings,
  TopicsPageContent,
} from "./types";

export const fallbackSiteSettings: SiteSettings = {
  siteName: "Praxis Chamarina",
  siteUrl,
  ownerName: "Maria Chamarina, BA MSc",
  profession: "Klinische Psychologin",
  defaultDescription:
    "Klinisch-psychologische Behandlung und Diagnostik für Erwachsene in Wien. Unterstützung bei Angst, Zwang, Depression, Beziehungsthemen und Sexualität.",
  keywords: [
    "Klinische Psychologie Wien",
    "Psychologische Behandlung Wien",
    "Klinisch-psychologische Diagnostik Wien",
    "Angststörung Behandlung Wien",
    "Zwangsstörung Behandlung Wien",
    "Depression Psychologin Wien",
    "Sexualtherapie Wien",
  ],
  contact,
  navItems,
  ui: {
    skipLinkLabel: "Zum Inhalt springen",
    navigationLabel: "Hauptnavigation",
    mobileNavigationLabel: "Mobile Hauptnavigation",
    mobileMenuOpenLabel: "Navigation öffnen",
    mobileMenuCloseLabel: "Navigation schließen",
    headerCtaLabel: "kostenloses Erstgespräch",
    headerCtaHref: "/kontakt#online-buchung",
    footerContactTitle: "Kontakt",
    footerLinksTitle: "Links",
    footerLinks: [
      { href: "/faqs", label: "FAQs" },
      { href: "/impressum", label: "Impressum" },
      { href: "/kontakt", label: "Kontakt" },
    ],
    learnMoreLabel: "Mehr erfahren ->",
    emailLabel: "E-Mail",
    phoneLabel: "Telefon",
    whatsappLabel: "WhatsApp",
    websiteLabel: "Website",
    stepLabel: "Schritt",
  },
  structuredData: {
    priceRange: "€€",
    addressLocality: "Wien",
    addressRegion: "Wien",
    postalCode: "1010",
    addressCountry: "AT",
    areaServed: "Wien",
    medicalSpecialty: "Clinical Psychology",
    treatmentServiceType: "MedicalTherapy",
    diagnosticsServiceType: "MedicalProcedure",
    diagnosticsServiceName: "Klinisch-psychologische Diagnostik",
    diagnosticsServiceDescription:
      "Zeitnahe diagnostische Abklärung und klinisch-psychologische Diagnostik für Erwachsene.",
  },
  logo: {
    alt: "Praxis Chamarina Logo",
    url: "/images/logo.png",
  },
};

export const fallbackHomePage: HomePageContent = {
  ...homeContent,
  heroEyebrow: "Maria Chamarina, BA MSc",
  heroRole: "Klinische Psychologin",
  topicsLinkLabel: "Themen ansehen",
  introEyebrow: "Kurz vorgestellt",
  topicsEyebrow: "Themen und Schwerpunkte",
  contactEyebrow: "Kontakt",
  contactTitle: "Erstgespräch vereinbaren",
  onlineBookingLabel: "Online-Buchung",
  quickLinks: [
    {
      title: homeContent.diagnosticsTitle,
      text: homeContent.diagnosticsText,
      href: "/diagnostik",
      color: "bg-[#53728A]",
    },
    {
      title: homeContent.settingTitle,
      text: homeContent.settingItems.join(" · "),
      href: "/praxis",
      color: "bg-[#7691AD]",
    },
    {
      title: "Ablauf & Kosten",
      text: "Kostenloses Erstgespräch und klare Rahmenbedingungen für Behandlung und Diagnostik.",
      href: "/ablauf-kosten",
      color: "bg-[#0D2744]",
    },
  ],
  heroImage: {
    alt: "Maria Chamarina",
    url: "/images/maria.png",
  },
  practiceImage: {
    alt: "Praxisraum der Praxis Chamarina",
    url: "/images/praxis4.jpg",
  },
  seo: {
    title: "Klinisch-psychologische Behandlung & Diagnostik in Wien",
    description: fallbackSiteSettings.defaultDescription,
    image: {
      alt: "Maria Chamarina, klinische Psychologin in Wien",
      url: "/images/maria.png",
    },
    imageAlt: "Maria Chamarina, klinische Psychologin in Wien",
  },
};

export const fallbackAboutPage: AboutPageContent = {
  ...aboutContent,
  ctaLabel: "Kontakt aufnehmen",
  ctaHref: "/kontakt",
  educationEyebrow: "Erfahrung",
  educationItems,
  portraitImage: {
    alt: "Maria Chamarina",
    url: "/images/maria.png",
  },
  seo: {
    title: "Über mich",
    description:
      "Über Maria Chamarina, klinische Psychologin in Wien, ihre Arbeitsweise, ihren beruflichen Hintergrund und ihre Erfahrung.",
    image: {
      alt: "Maria Chamarina, klinische Psychologin in Wien",
      url: "/images/maria.png",
    },
    imageAlt: "Maria Chamarina, klinische Psychologin in Wien",
  },
};

export const fallbackTopicsPage: TopicsPageContent = {
  heroEyebrow: "Psychologische Behandlung",
  heroTitle: "Themen und Schwerpunkte",
  heroText: "Angst, Zwang, Depression, Selbstwert, Beziehung und Sexualität.",
  ctaTitle: "Sie sind unsicher, ob Ihr Anliegen passt?",
  ctaLabel: "Kontakt aufnehmen",
  focusAreas: focusAreas.map((area) => {
    const categoryDetails = topicCategoryDetails[area.category];

    return {
      ...area,
      categoryEyebrow: categoryDetails.eyebrow,
      treatmentFocus: categoryDetails.treatmentFocus,
      topics: topicDetails.filter((topic) => topic.category === area.category),
    };
  }),
  seo: {
    title: "Themen & Schwerpunkte",
    description:
      "Psychologische Behandlung bei Angst, Zwang, Depression, Selbstwert, Beziehungsthemen und Sexualität in Wien.",
  },
};

export const fallbackDiagnosticsPage: DiagnosticsPageContent = {
  ...diagnosticsContent,
  heroEyebrow: "Klarheit gewinnen",
  includesHeading: "Klinisch-psychologische Diagnostik",
  costAmount: "500 €",
  ctaTitle: "Diagnostik anfragen",
  ctaText:
    "Ich biete klinisch-psychologische Diagnostik für Privatpersonen sowie für zuweisende Kolleg:innen an.",
  ctaLabel: "Kontakt aufnehmen",
  seo: {
    title: "Klinisch-psychologische Diagnostik",
    description:
      "Klinisch-psychologische Diagnostik für Erwachsene in Wien mit Gespräch, Testverfahren, Rückmeldung und Befund oder Gutachten.",
  },
};

export const fallbackProcessPage: ProcessPageContent = {
  ...processContent,
  heroEyebrow: "Erstgespräch, Kosten & Rahmen",
  settingTitle: "Setting",
  ctaTitle: "Kostenloses Erstgespräch vereinbaren",
  ctaLabel: "Termin buchen",
  seo: {
    title: "Ablauf & Kosten",
    description:
      "Informationen zu kostenlosem Erstgespräch, Ablauf der psychologischen Behandlung, Kosten, Verschwiegenheit und Krankenkasse.",
  },
};

export const fallbackPracticePage: PracticePageContent = {
  ...practiceContent,
  heroEyebrow: "Praxis im 1. Bezirk",
  routeLabel: "Route öffnen ->",
  routeUrl:
    "https://www.google.com/maps/search/?api=1&query=Fischerstiege%2010%2F14%201010%20Wien",
  routeAriaLabel: "Route zur Praxis Chamarina in Google Maps öffnen",
  ctaLabel: "Termin anfragen",
  ctaHref: "/kontakt#online-buchung",
  images: [
    {
      alt: "Praxisraum der Praxis Chamarina",
      url: "/images/praxis4.jpg",
    },
    {
      alt: "Praxisraum der Praxis Chamarina",
      url: "/images/praxis5.jpg",
    },
  ],
  seo: {
    title: "Praxis & Anfahrt",
    description:
      "Adresse, Anfahrt und Termin-Hinweise zur Praxis Chamarina in der Fischerstiege 10/14 im 1. Bezirk in Wien.",
    image: {
      alt: "Praxisraum der Praxis Chamarina",
      url: "/images/praxis4.jpg",
    },
  },
};

export const fallbackContactPage: ContactPageContent = {
  ...contactContent,
  phone: "Telefon",
  heroEyebrow: "Erreichbarkeit",
  emailCardText: "Schreiben Sie mir gerne per E-Mail.",
  whatsappCardText: "Kurze Terminfragen können Sie auch per WhatsApp stellen.",
  phoneCardText: "Sollten Sie mich nicht erreichen, melde ich mich umgehend zurück.",
  bookingEyebrow: "Online-Buchung",
  bookingTitle: "Termin buchen",
  bookingText:
    "Wählen Sie hier direkt einen freien Termin für ein kostenloses Erstgespräch aus.",
  bookingWidget: {
    apiKey: "60f36d12-789b-4af5-8f68-ddb1cb390d11",
    scriptUrl: "https://buchen.offisy.at/api/booking/v1/app.js",
    loadingText: "Terminbuchung wird geladen ...",
    errorTextBeforeEmail:
      "Die Terminbuchung konnte nicht geladen werden. Bitte kontaktieren Sie mich direkt unter",
    errorTextAfterEmail: ".",
  },
  addressEyebrow: "Praxis",
  addressSummary:
    "Öffentlich erreichbar über U1 / U3 Stephansplatz, U4 Schwedenplatz sowie Straßenbahn und Bus in Gehweite.",
  seo: {
    title: "Kontakt",
    description:
      "Kontakt zur Praxis Chamarina in Wien: Termin anfragen per E-Mail, Telefon oder WhatsApp.",
  },
};

export const fallbackFaqPage: FaqPageContent = {
  eyebrow: "FAQ",
  intro: faqIntro,
  items: faqItems,
  seo: {
    title: "Häufige Fragen",
    description:
      "Antworten auf häufige Fragen zu Erstgespräch, Online-Terminen, Kosten, Diagnostik, Verschwiegenheit und Terminabsage.",
  },
};

export const fallbackLegalPage: LegalPageContent = {
  impressum: {
    title: impressumContent.title,
    eyebrow: "Rechtliches",
    subtitle: impressumContent.subtitle,
    ownerTitle: "Medieninhaberin und Verantwortliche",
    owner: impressumContent.owner,
    contactTitle: "Kontakt",
    sections: impressumContent.sections,
  },
  privacy: {
    title: privacyContent.title,
    sections: privacyContent.sections,
  },
  seo: {
    title: "Impressum",
    description:
      "Impressum und rechtliche Angaben zur Praxis Chamarina, klinische Psychologie in Wien.",
  },
};
