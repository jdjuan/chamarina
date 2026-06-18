export type CmsImage = {
  alt?: string;
  url?: string;
  width?: number;
  height?: number;
  asset?: {
    _ref?: string;
    url?: string;
    metadata?: {
      dimensions?: {
        width?: number;
        height?: number;
      };
    };
  };
};

export type SeoContent = {
  title?: string;
  description?: string;
  image?: CmsImage;
  imageAlt?: string;
};

export type ContactInfo = {
  email: string;
  phone: string;
  whatsapp: string;
  addressLine: string;
  address: string;
};

export type NavItem = {
  href: string;
  label: string;
};

export type InterfaceLabels = {
  skipLinkLabel: string;
  navigationLabel: string;
  mobileNavigationLabel: string;
  mobileMenuOpenLabel: string;
  mobileMenuCloseLabel: string;
  headerCtaLabel: string;
  headerCtaHref: string;
  footerContactTitle: string;
  footerLinksTitle: string;
  footerLinks: NavItem[];
  learnMoreLabel: string;
  emailLabel: string;
  phoneLabel: string;
  whatsappLabel: string;
  websiteLabel: string;
  stepLabel: string;
};

export type StructuredDataSettings = {
  priceRange: string;
  addressLocality: string;
  addressRegion: string;
  postalCode: string;
  addressCountry: string;
  areaServed: string;
  medicalSpecialty: string;
  treatmentServiceType: string;
  diagnosticsServiceType: string;
  diagnosticsServiceName: string;
  diagnosticsServiceDescription: string;
};

export type SiteSettings = {
  siteName: string;
  siteUrl: string;
  ownerName: string;
  profession: string;
  defaultDescription: string;
  keywords: string[];
  contact: ContactInfo;
  navItems: NavItem[];
  ui: InterfaceLabels;
  structuredData: StructuredDataSettings;
  logo?: CmsImage;
};

export type HomePageContent = {
  title: string;
  subtitle: string;
  button: string;
  welcomeTitle: string;
  intro: string;
  supportIntro: string;
  supportTopics: string[];
  principle: string;
  diagnosticsTitle: string;
  diagnosticsText: string;
  settingTitle: string;
  settingItems: string[];
  closing: string;
  heroEyebrow: string;
  heroRole: string;
  topicsLinkLabel: string;
  introEyebrow: string;
  topicsEyebrow: string;
  contactEyebrow: string;
  contactTitle: string;
  onlineBookingLabel: string;
  quickLinks: {
    title: string;
    text: string;
    href: string;
    color: string;
  }[];
  heroImage?: CmsImage;
  practiceImage?: CmsImage;
  seo?: SeoContent;
};

export type AboutPageContent = {
  title: string;
  workTitle: string;
  workParagraphs: string[];
  ctaLabel: string;
  ctaHref: string;
  educationTitle: string;
  educationEyebrow: string;
  educationItems: string[];
  portraitImage?: CmsImage;
  seo?: SeoContent;
};

export type TopicCategory =
  | "angst"
  | "zwang"
  | "depression"
  | "selbstwert"
  | "beziehung"
  | "sexualitaet";

export type TopicEntry = {
  slug: string;
  title: string;
  category: TopicCategory;
  summary: string;
  detail: string[];
  examplesLabel?: string;
  examples?: string[];
};

export type TopicFocusArea = {
  title: string;
  navTitle?: string;
  category: TopicCategory;
  categoryEyebrow?: string;
  treatmentFocus?: string[];
  paragraphs: string[];
  closing?: string;
  topics: TopicEntry[];
};

export type TopicsPageContent = {
  heroEyebrow: string;
  heroTitle: string;
  heroText: string;
  ctaTitle: string;
  ctaLabel: string;
  focusAreas: TopicFocusArea[];
  seo?: SeoContent;
};

export type TitledParagraphs = {
  title: string;
  paragraphs: string[];
};

export type ProcessStep = TitledParagraphs & {
  items: string[];
  closing?: string;
};

export type DiagnosticsPageContent = {
  title: string;
  heroEyebrow: string;
  paragraphs: string[];
  includesTitle: string;
  includes: string[];
  includesHeading: string;
  flowTitle: string;
  steps: TitledParagraphs[];
  note: string;
  confidentialityTitle: string;
  confidentiality: string;
  costTitle: string;
  costAmount: string;
  cost: string;
  ctaTitle: string;
  ctaText: string;
  ctaLabel: string;
  seo?: SeoContent;
};

export type ProcessPageContent = {
  title: string;
  heroEyebrow: string;
  processTitle: string;
  steps: ProcessStep[];
  confidentialityTitle: string;
  confidentiality: string;
  costTitle: string;
  costs: string[];
  settingTitle: string;
  costsParagraphs: string[];
  insuranceTitle: string;
  insuranceParagraphs: string[];
  ctaTitle: string;
  ctaLabel: string;
  seo?: SeoContent;
};

export type PracticePageContent = {
  title: string;
  heroEyebrow: string;
  addressTitle: string;
  address: string;
  addressText: string;
  directionsTitle: string;
  publicTitle: string;
  publicItems: string[];
  carTitle: string;
  carText: string;
  routeLabel: string;
  routeUrl: string;
  routeAriaLabel: string;
  appointmentTitle: string;
  appointmentParagraphs: string[];
  ctaLabel: string;
  ctaHref: string;
  images: CmsImage[];
  seo?: SeoContent;
};

export type BookingWidgetSettings = {
  apiKey: string;
  scriptUrl: string;
  loadingText: string;
  errorTextBeforeEmail: string;
  errorTextAfterEmail: string;
};

export type ContactPageContent = {
  title: string;
  heroEyebrow: string;
  mail: string;
  whatsapp: string;
  phoneIntro: string;
  phone: string;
  emailCardText: string;
  whatsappCardText: string;
  phoneCardText: string;
  bookingEyebrow: string;
  bookingTitle: string;
  bookingText: string;
  bookingWidget: BookingWidgetSettings;
  addressEyebrow: string;
  addressSummary: string;
  seo?: SeoContent;
};

export type FaqPageContent = {
  eyebrow: string;
  intro: string;
  items: {
    question: string;
    answer: string;
  }[];
  seo?: SeoContent;
};

export type LegalSection = {
  title: string;
  paragraphs: string[];
  items?: string[];
  closing?: string;
};

export type LegalPageContent = {
  impressum: {
    title: string;
    eyebrow: string;
    subtitle: string;
    ownerTitle: string;
    owner: string[];
    contactTitle: string;
    sections: LegalSection[];
  };
  privacy: {
    title: string;
    sections: LegalSection[];
  };
  seo?: SeoContent;
};
