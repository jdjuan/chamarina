import { defineArrayMember, defineField, defineType } from "sanity";

const stringList = (name: string, title: string) =>
  defineField({
    name,
    title,
    type: "array",
    of: [defineArrayMember({ type: "string" })],
  });

const linkList = (name: string, title: string) =>
  defineField({
    name,
    title,
    type: "array",
    of: [
      defineArrayMember({
        type: "object",
        fields: [
          defineField({ name: "href", title: "URL", type: "string" }),
          defineField({ name: "label", title: "Label", type: "string" }),
        ],
        preview: {
          select: {
            title: "label",
            subtitle: "href",
          },
        },
      }),
    ],
  });

const seoField = defineField({
  name: "seo",
  title: "SEO",
  type: "object",
  fields: [
    defineField({ name: "title", title: "SEO title", type: "string" }),
    defineField({
      name: "description",
      title: "SEO description",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "image",
      title: "Open Graph image",
      type: "image",
      options: { hotspot: true },
      fields: [
        defineField({
          name: "alt",
          title: "Alt text",
          type: "string",
        }),
      ],
    }),
    defineField({ name: "imageAlt", title: "Image alt fallback", type: "string" }),
  ],
});

const imageField = (name: string, title: string) =>
  defineField({
    name,
    title,
    type: "image",
    options: { hotspot: true },
    fields: [
      defineField({
        name: "alt",
        title: "Alt text",
        type: "string",
      }),
    ],
  });

const titledParagraphs = defineType({
  name: "titledParagraphs",
  title: "Titled paragraphs",
  type: "object",
  fields: [
    defineField({ name: "title", title: "Title", type: "string" }),
    stringList("paragraphs", "Paragraphs"),
  ],
});

const processStep = defineType({
  name: "processStep",
  title: "Process step",
  type: "object",
  fields: [
    defineField({ name: "title", title: "Title", type: "string" }),
    stringList("paragraphs", "Paragraphs"),
    stringList("items", "Bullet items"),
    defineField({ name: "closing", title: "Closing text", type: "text", rows: 3 }),
  ],
});

const legalSection = defineType({
  name: "legalSection",
  title: "Legal section",
  type: "object",
  fields: [
    defineField({ name: "title", title: "Title", type: "string" }),
    stringList("paragraphs", "Paragraphs"),
    stringList("items", "Bullet items"),
    defineField({ name: "closing", title: "Closing text", type: "text", rows: 3 }),
  ],
  preview: {
    select: {
      title: "title",
      paragraphs: "paragraphs",
    },
    prepare({ title, paragraphs }) {
      const paragraphCount = Array.isArray(paragraphs) ? paragraphs.length : 0;

      return {
        title: title || "Abschnitt",
        subtitle:
          paragraphCount === 1
            ? "1 Absatz"
            : `${paragraphCount} Absätze`,
      };
    },
  },
});

const topic = defineType({
  name: "topic",
  title: "Topic",
  type: "object",
  fields: [
    defineField({ name: "slug", title: "Slug", type: "string" }),
    defineField({ name: "title", title: "Title", type: "string" }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Angst", value: "angst" },
          { title: "Zwang", value: "zwang" },
          { title: "Depression", value: "depression" },
          { title: "Selbstwert", value: "selbstwert" },
          { title: "Beziehung", value: "beziehung" },
          { title: "Sexualität", value: "sexualitaet" },
        ],
      },
    }),
    defineField({ name: "summary", title: "Tooltip summary", type: "text", rows: 3 }),
    stringList("detail", "Detail paragraphs"),
    defineField({
      name: "examplesLabel",
      title: "Examples label",
      type: "string",
    }),
    stringList("examples", "Examples"),
  ],
});

const topicFocusArea = defineType({
  name: "topicFocusArea",
  title: "Focus area",
  type: "object",
  fields: [
    defineField({ name: "title", title: "Title", type: "string" }),
    defineField({ name: "navTitle", title: "Short SEO/schema title", type: "string" }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Angst", value: "angst" },
          { title: "Zwang", value: "zwang" },
          { title: "Depression", value: "depression" },
          { title: "Selbstwert", value: "selbstwert" },
          { title: "Beziehung", value: "beziehung" },
          { title: "Sexualität", value: "sexualitaet" },
        ],
      },
    }),
    defineField({
      name: "categoryEyebrow",
      title: "Category eyebrow",
      type: "string",
    }),
    stringList("treatmentFocus", "Treatment focus"),
    stringList("paragraphs", "Paragraphs"),
    defineField({ name: "closing", title: "Closing text", type: "text", rows: 3 }),
    defineField({
      name: "topics",
      title: "Tooltip topics",
      type: "array",
      of: [defineArrayMember({ type: "topic" })],
    }),
  ],
});

const siteSettings = defineType({
  name: "siteSettings",
  title: "Site settings",
  type: "document",
  fields: [
    defineField({ name: "siteName", title: "Site name", type: "string" }),
    defineField({ name: "siteUrl", title: "Site URL", type: "string" }),
    defineField({ name: "ownerName", title: "Owner name", type: "string" }),
    defineField({ name: "profession", title: "Profession", type: "string" }),
    defineField({
      name: "defaultDescription",
      title: "Default description",
      type: "text",
      rows: 3,
    }),
    stringList("keywords", "SEO keywords"),
    defineField({
      name: "contact",
      title: "Contact",
      type: "object",
      fields: [
        defineField({ name: "email", title: "Email", type: "string" }),
        defineField({ name: "phone", title: "Phone", type: "string" }),
        defineField({ name: "whatsapp", title: "WhatsApp URL", type: "url" }),
        defineField({ name: "addressLine", title: "Address line", type: "string" }),
        defineField({ name: "address", title: "Full address", type: "string" }),
      ],
    }),
    defineField({
      name: "navItems",
      title: "Navigation items",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({ name: "href", title: "URL", type: "string" }),
            defineField({ name: "label", title: "Label", type: "string" }),
          ],
          preview: {
            select: {
              title: "label",
              subtitle: "href",
            },
          },
        }),
      ],
    }),
    defineField({
      name: "ui",
      title: "Global UI labels",
      type: "object",
      options: {
        collapsible: true,
        collapsed: false,
      },
      fields: [
        defineField({ name: "skipLinkLabel", title: "Skip link label", type: "string" }),
        defineField({ name: "navigationLabel", title: "Desktop navigation aria label", type: "string" }),
        defineField({ name: "mobileNavigationLabel", title: "Mobile navigation aria label", type: "string" }),
        defineField({ name: "mobileMenuOpenLabel", title: "Mobile menu open label", type: "string" }),
        defineField({ name: "mobileMenuCloseLabel", title: "Mobile menu close label", type: "string" }),
        defineField({ name: "headerCtaLabel", title: "Header CTA label", type: "string" }),
        defineField({ name: "headerCtaHref", title: "Header CTA URL", type: "string" }),
        defineField({ name: "footerContactTitle", title: "Footer contact heading", type: "string" }),
        defineField({ name: "footerLinksTitle", title: "Footer links heading", type: "string" }),
        linkList("footerLinks", "Footer links"),
        defineField({ name: "learnMoreLabel", title: "Learn more label", type: "string" }),
        defineField({ name: "emailLabel", title: "Email label", type: "string" }),
        defineField({ name: "phoneLabel", title: "Phone label", type: "string" }),
        defineField({ name: "whatsappLabel", title: "WhatsApp label", type: "string" }),
        defineField({ name: "websiteLabel", title: "Website label", type: "string" }),
        defineField({ name: "stepLabel", title: "Step label", type: "string" }),
      ],
    }),
    defineField({
      name: "structuredData",
      title: "Structured data",
      type: "object",
      description: "Technical SEO values used for schema.org data.",
      options: {
        collapsible: true,
        collapsed: true,
      },
      fields: [
        defineField({ name: "priceRange", title: "Price range", type: "string" }),
        defineField({ name: "addressLocality", title: "Address locality", type: "string" }),
        defineField({ name: "addressRegion", title: "Address region", type: "string" }),
        defineField({ name: "postalCode", title: "Postal code", type: "string" }),
        defineField({ name: "addressCountry", title: "Address country", type: "string" }),
        defineField({ name: "areaServed", title: "Area served", type: "string" }),
        defineField({ name: "medicalSpecialty", title: "Medical specialty", type: "string" }),
        defineField({ name: "treatmentServiceType", title: "Treatment service schema type", type: "string" }),
        defineField({ name: "diagnosticsServiceType", title: "Diagnostics service schema type", type: "string" }),
        defineField({ name: "diagnosticsServiceName", title: "Diagnostics service name", type: "string" }),
        defineField({
          name: "diagnosticsServiceDescription",
          title: "Diagnostics service description",
          type: "text",
          rows: 3,
        }),
      ],
    }),
    imageField("logo", "Logo"),
  ],
});

const homePage = defineType({
  name: "homePage",
  title: "Homepage",
  type: "document",
  fields: [
    defineField({ name: "heroEyebrow", title: "Hero eyebrow", type: "string" }),
    defineField({ name: "heroRole", title: "Hero role", type: "string" }),
    defineField({ name: "title", title: "Hero title", type: "string" }),
    defineField({ name: "subtitle", title: "Hero subtitle", type: "text", rows: 3 }),
    defineField({ name: "button", title: "Primary button", type: "string" }),
    defineField({ name: "topicsLinkLabel", title: "Topics link label", type: "string" }),
    imageField("heroImage", "Hero image"),
    defineField({ name: "introEyebrow", title: "Intro eyebrow", type: "string" }),
    defineField({ name: "welcomeTitle", title: "Welcome title", type: "string" }),
    defineField({ name: "intro", title: "Intro text", type: "text", rows: 3 }),
    defineField({ name: "supportIntro", title: "Support intro", type: "string" }),
    stringList("supportTopics", "Support topics"),
    defineField({ name: "principle", title: "Principle text", type: "text", rows: 3 }),
    defineField({ name: "diagnosticsTitle", title: "Diagnostics title", type: "string" }),
    defineField({ name: "diagnosticsText", title: "Diagnostics text", type: "text", rows: 3 }),
    defineField({ name: "settingTitle", title: "Setting title", type: "string" }),
    stringList("settingItems", "Setting items"),
    defineField({
      name: "quickLinks",
      title: "Quick links",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({ name: "title", title: "Title", type: "string" }),
            defineField({ name: "text", title: "Text", type: "text", rows: 3 }),
            defineField({ name: "href", title: "URL", type: "string" }),
            defineField({ name: "color", title: "Color class", type: "string" }),
          ],
        }),
      ],
    }),
    defineField({ name: "topicsEyebrow", title: "Topics eyebrow", type: "string" }),
    imageField("practiceImage", "Practice image"),
    defineField({ name: "contactEyebrow", title: "Contact eyebrow", type: "string" }),
    defineField({ name: "contactTitle", title: "Contact title", type: "string" }),
    defineField({ name: "closing", title: "Closing text", type: "text", rows: 3 }),
    defineField({ name: "onlineBookingLabel", title: "Online booking label", type: "string" }),
    seoField,
  ],
});

const aboutPage = defineType({
  name: "aboutPage",
  title: "Über mich",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Hero eyebrow", type: "string" }),
    defineField({ name: "workTitle", title: "Hero title", type: "string" }),
    imageField("portraitImage", "Portrait image"),
    stringList("workParagraphs", "Work paragraphs"),
    defineField({ name: "ctaLabel", title: "CTA label", type: "string" }),
    defineField({ name: "ctaHref", title: "CTA URL", type: "string" }),
    defineField({ name: "educationEyebrow", title: "Education eyebrow", type: "string" }),
    defineField({ name: "educationTitle", title: "Education title", type: "string" }),
    stringList("educationItems", "Education items"),
    seoField,
  ],
});

const topicsPage = defineType({
  name: "topicsPage",
  title: "Themen & Schwerpunkte",
  type: "document",
  fields: [
    defineField({ name: "heroEyebrow", title: "Hero eyebrow", type: "string" }),
    defineField({ name: "heroTitle", title: "Hero title", type: "string" }),
    defineField({ name: "heroText", title: "Hero text", type: "text", rows: 2 }),
    defineField({
      name: "focusAreas",
      title: "Focus areas",
      type: "array",
      of: [defineArrayMember({ type: "topicFocusArea" })],
    }),
    defineField({ name: "ctaTitle", title: "CTA title", type: "string" }),
    defineField({ name: "ctaLabel", title: "CTA label", type: "string" }),
    seoField,
  ],
});

const diagnosticsPage = defineType({
  name: "diagnosticsPage",
  title: "Diagnostik",
  type: "document",
  fields: [
    defineField({ name: "heroEyebrow", title: "Hero eyebrow", type: "string" }),
    defineField({ name: "title", title: "Hero title", type: "string" }),
    stringList("paragraphs", "Paragraphs"),
    defineField({ name: "includesTitle", title: "Includes eyebrow", type: "string" }),
    defineField({ name: "includesHeading", title: "Includes heading", type: "string" }),
    stringList("includes", "Includes"),
    defineField({ name: "flowTitle", title: "Flow title", type: "string" }),
    defineField({
      name: "steps",
      title: "Steps",
      type: "array",
      of: [defineArrayMember({ type: "titledParagraphs" })],
    }),
    defineField({ name: "note", title: "Note", type: "text", rows: 3 }),
    defineField({ name: "confidentialityTitle", title: "Confidentiality title", type: "string" }),
    defineField({ name: "confidentiality", title: "Confidentiality text", type: "text", rows: 3 }),
    defineField({ name: "costTitle", title: "Cost title", type: "string" }),
    defineField({ name: "costAmount", title: "Cost amount", type: "string" }),
    defineField({ name: "cost", title: "Cost text", type: "text", rows: 3 }),
    defineField({ name: "ctaTitle", title: "CTA title", type: "string" }),
    defineField({ name: "ctaText", title: "CTA text", type: "text", rows: 3 }),
    defineField({ name: "ctaLabel", title: "CTA label", type: "string" }),
    seoField,
  ],
});

const processPage = defineType({
  name: "processPage",
  title: "Ablauf & Kosten",
  type: "document",
  fields: [
    defineField({ name: "heroEyebrow", title: "Hero eyebrow", type: "string" }),
    defineField({ name: "title", title: "Hero title", type: "string" }),
    defineField({ name: "processTitle", title: "Process title", type: "string" }),
    defineField({
      name: "steps",
      title: "Steps",
      type: "array",
      of: [defineArrayMember({ type: "processStep" })],
    }),
    defineField({ name: "costTitle", title: "Cost title", type: "string" }),
    stringList("costs", "Cost lines"),
    defineField({ name: "settingTitle", title: "Setting title", type: "string" }),
    stringList("costsParagraphs", "Setting paragraphs"),
    defineField({ name: "insuranceTitle", title: "Insurance title", type: "string" }),
    stringList("insuranceParagraphs", "Insurance paragraphs"),
    defineField({ name: "confidentialityTitle", title: "Confidentiality title", type: "string" }),
    defineField({ name: "confidentiality", title: "Confidentiality text", type: "text", rows: 3 }),
    defineField({ name: "ctaTitle", title: "CTA title", type: "string" }),
    defineField({ name: "ctaLabel", title: "CTA label", type: "string" }),
    seoField,
  ],
});

const practicePage = defineType({
  name: "practicePage",
  title: "Praxis & Anfahrt",
  type: "document",
  fields: [
    defineField({ name: "heroEyebrow", title: "Hero eyebrow", type: "string" }),
    defineField({ name: "title", title: "Hero title", type: "string" }),
    defineField({ name: "addressTitle", title: "Address title", type: "string" }),
    defineField({ name: "address", title: "Address", type: "string" }),
    defineField({ name: "addressText", title: "Address text", type: "text", rows: 3 }),
    defineField({ name: "directionsTitle", title: "Directions title", type: "string" }),
    defineField({ name: "publicTitle", title: "Public transport title", type: "string" }),
    stringList("publicItems", "Public transport items"),
    defineField({ name: "carTitle", title: "Car title", type: "string" }),
    defineField({ name: "carText", title: "Car text", type: "text", rows: 3 }),
    defineField({ name: "routeLabel", title: "Route link label", type: "string" }),
    defineField({ name: "routeUrl", title: "Route URL", type: "url" }),
    defineField({ name: "routeAriaLabel", title: "Route accessibility label", type: "string" }),
    defineField({ name: "appointmentTitle", title: "Appointment title", type: "string" }),
    stringList("appointmentParagraphs", "Appointment paragraphs"),
    defineField({ name: "ctaLabel", title: "CTA label", type: "string" }),
    defineField({ name: "ctaHref", title: "CTA URL", type: "string" }),
    defineField({
      name: "images",
      title: "Practice images",
      type: "array",
      of: [defineArrayMember(imageField("image", "Image"))],
    }),
    seoField,
  ],
});

const contactPage = defineType({
  name: "contactPage",
  title: "Kontakt",
  type: "document",
  fields: [
    defineField({ name: "heroEyebrow", title: "Hero eyebrow", type: "string" }),
    defineField({ name: "title", title: "Hero title", type: "string" }),
    defineField({ name: "phoneIntro", title: "Hero text", type: "text", rows: 3 }),
    defineField({ name: "mail", title: "Email card title", type: "string" }),
    defineField({ name: "whatsapp", title: "WhatsApp card title", type: "string" }),
    defineField({ name: "phone", title: "Phone card title", type: "string" }),
    defineField({ name: "emailCardText", title: "Email card text", type: "text", rows: 2 }),
    defineField({ name: "whatsappCardText", title: "WhatsApp card text", type: "text", rows: 2 }),
    defineField({ name: "phoneCardText", title: "Phone card text", type: "text", rows: 2 }),
    defineField({ name: "bookingEyebrow", title: "Booking eyebrow", type: "string" }),
    defineField({ name: "bookingTitle", title: "Booking title", type: "string" }),
    defineField({ name: "bookingText", title: "Booking text", type: "text", rows: 3 }),
    defineField({
      name: "bookingWidget",
      title: "Booking widget",
      type: "object",
      options: {
        collapsible: true,
        collapsed: true,
      },
      fields: [
        defineField({ name: "apiKey", title: "Offisy API key", type: "string" }),
        defineField({ name: "scriptUrl", title: "Offisy script URL", type: "url" }),
        defineField({ name: "loadingText", title: "Loading text", type: "string" }),
        defineField({
          name: "errorTextBeforeEmail",
          title: "Error text before email",
          type: "text",
          rows: 2,
        }),
        defineField({
          name: "errorTextAfterEmail",
          title: "Error text after email",
          type: "string",
        }),
      ],
    }),
    defineField({ name: "addressEyebrow", title: "Address eyebrow", type: "string" }),
    defineField({ name: "addressSummary", title: "Address summary", type: "text", rows: 3 }),
    seoField,
  ],
});

const faqPage = defineType({
  name: "faqPage",
  title: "FAQs",
  type: "document",
  fields: [
    defineField({ name: "eyebrow", title: "Hero eyebrow", type: "string" }),
    defineField({ name: "intro", title: "Hero title", type: "string" }),
    defineField({
      name: "items",
      title: "Questions",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({ name: "question", title: "Question", type: "string" }),
            defineField({ name: "answer", title: "Answer", type: "text", rows: 3 }),
          ],
        }),
      ],
    }),
    seoField,
  ],
});

const legalPage = defineType({
  name: "legalPage",
  title: "Impressum & Datenschutz",
  type: "document",
  fields: [
    defineField({
      name: "impressum",
      title: "Impressum",
      type: "object",
      options: {
        collapsible: true,
        collapsed: false,
      },
      fields: [
        defineField({ name: "title", title: "Überschrift", type: "string" }),
        defineField({ name: "eyebrow", title: "Kleine Überschrift", type: "string" }),
        defineField({ name: "subtitle", title: "Untertitel", type: "string" }),
        defineField({ name: "ownerTitle", title: "Titel der Inhaberinnen-Angaben", type: "string" }),
        stringList("owner", "Inhaberinnen-Angaben"),
        defineField({ name: "contactTitle", title: "Titel des Kontaktabschnitts", type: "string" }),
        defineField({
          name: "sections",
          title: "Abschnitte",
          type: "array",
          of: [defineArrayMember({ type: "legalSection" })],
        }),
      ],
      preview: {
        select: {
          title: "title",
          subtitle: "subtitle",
        },
        prepare({ title, subtitle }) {
          return {
            title: title || "Impressum",
            subtitle,
          };
        },
      },
    }),
    defineField({
      name: "privacy",
      title: "Datenschutzerklärung",
      type: "object",
      options: {
        collapsible: true,
        collapsed: false,
      },
      fields: [
        defineField({ name: "title", title: "Überschrift", type: "string" }),
        defineField({
          name: "sections",
          title: "Abschnitte",
          type: "array",
          of: [defineArrayMember({ type: "legalSection" })],
        }),
      ],
      preview: {
        select: {
          title: "title",
          sections: "sections",
        },
        prepare({ title, sections }) {
          const sectionCount = Array.isArray(sections) ? sections.length : 0;

          return {
            title: title || "Datenschutzerklärung",
            subtitle:
              sectionCount === 1
                ? "1 Abschnitt"
                : `${sectionCount} Abschnitte`,
          };
        },
      },
    }),
    seoField,
  ],
  preview: {
    prepare() {
      return {
        title: "Impressum & Datenschutz",
        subtitle: "Rechtliche Angaben und Datenschutzerklärung",
      };
    },
  },
});

export const singletonSchemaTypes = [
  siteSettings,
  homePage,
  aboutPage,
  topicsPage,
  diagnosticsPage,
  processPage,
  practicePage,
  contactPage,
  faqPage,
  legalPage,
];

export const schemaTypes = [
  titledParagraphs,
  processStep,
  legalSection,
  topic,
  topicFocusArea,
  ...singletonSchemaTypes,
];
