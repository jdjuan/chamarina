import { defineQuery } from "next-sanity";

const imageFields = `
  alt,
  "url": asset->url,
  "width": asset->metadata.dimensions.width,
  "height": asset->metadata.dimensions.height,
  asset
`;

const seoFields = `
  title,
  description,
  image { ${imageFields} },
  imageAlt
`;

export const siteSettingsQuery = defineQuery(`
  *[_type == "siteSettings"][0] {
    siteName,
    siteUrl,
    ownerName,
    profession,
    defaultDescription,
    keywords,
    contact,
    navItems,
    ui,
    structuredData,
    logo { ${imageFields} }
  }
`);

export const homePageQuery = defineQuery(`
  *[_type == "homePage"][0] {
    title,
    subtitle,
    button,
    welcomeTitle,
    intro,
    supportIntro,
    supportTopics,
    principle,
    diagnosticsTitle,
    diagnosticsText,
    settingTitle,
    settingItems,
    closing,
    heroEyebrow,
    heroRole,
    topicsLinkLabel,
    introEyebrow,
    topicsEyebrow,
    contactEyebrow,
    contactTitle,
    onlineBookingLabel,
    quickLinks,
    heroImage { ${imageFields} },
    practiceImage { ${imageFields} },
    seo { ${seoFields} }
  }
`);

export const aboutPageQuery = defineQuery(`
  *[_type == "aboutPage"][0] {
    title,
    workTitle,
    workParagraphs,
    ctaLabel,
    ctaHref,
    educationTitle,
    educationEyebrow,
    educationItems,
    portraitImage { ${imageFields} },
    seo { ${seoFields} }
  }
`);

export const topicsPageQuery = defineQuery(`
  *[_type == "topicsPage"][0] {
    heroEyebrow,
    heroTitle,
    heroText,
    ctaTitle,
    ctaLabel,
    focusAreas[] {
      title,
      navTitle,
      category,
      categoryEyebrow,
      treatmentFocus,
      paragraphs,
      closing,
      topics[] {
        slug,
        title,
        category,
        summary,
        detail,
        examplesLabel,
        examples
      }
    },
    seo { ${seoFields} }
  }
`);

export const diagnosticsPageQuery = defineQuery(`
  *[_type == "diagnosticsPage"][0] {
    title,
    heroEyebrow,
    paragraphs,
    includesTitle,
    includes,
    includesHeading,
    flowTitle,
    steps,
    note,
    confidentialityTitle,
    confidentiality,
    costTitle,
    costAmount,
    cost,
    ctaTitle,
    ctaText,
    ctaLabel,
    seo { ${seoFields} }
  }
`);

export const processPageQuery = defineQuery(`
  *[_type == "processPage"][0] {
    title,
    heroEyebrow,
    processTitle,
    steps,
    confidentialityTitle,
    confidentiality,
    costTitle,
    costs,
    settingTitle,
    costsParagraphs,
    insuranceTitle,
    insuranceParagraphs,
    ctaTitle,
    ctaLabel,
    seo { ${seoFields} }
  }
`);

export const practicePageQuery = defineQuery(`
  *[_type == "practicePage"][0] {
    title,
    heroEyebrow,
    addressTitle,
    address,
    addressText,
    directionsTitle,
    publicTitle,
    publicItems,
    carTitle,
    carText,
    routeLabel,
    routeUrl,
    routeAriaLabel,
    appointmentTitle,
    appointmentParagraphs,
    ctaLabel,
    ctaHref,
    images[] { ${imageFields} },
    seo { ${seoFields} }
  }
`);

export const contactPageQuery = defineQuery(`
  *[_type == "contactPage"][0] {
    title,
    heroEyebrow,
    mail,
    whatsapp,
    phoneIntro,
    phone,
    emailCardText,
    whatsappCardText,
    phoneCardText,
    bookingEyebrow,
    bookingTitle,
    bookingText,
    bookingWidget,
    addressEyebrow,
    addressSummary,
    seo { ${seoFields} }
  }
`);

export const faqPageQuery = defineQuery(`
  *[_type == "faqPage"][0] {
    eyebrow,
    intro,
    items,
    seo { ${seoFields} }
  }
`);

export const legalPageQuery = defineQuery(`
  *[_type == "legalPage"][0] {
    impressum,
    privacy,
    seo { ${seoFields} }
  }
`);
