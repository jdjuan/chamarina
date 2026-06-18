import { cache } from "react";
import {
  aboutPageQuery,
  contactPageQuery,
  diagnosticsPageQuery,
  faqPageQuery,
  homePageQuery,
  legalPageQuery,
  practicePageQuery,
  processPageQuery,
  siteSettingsQuery,
  topicsPageQuery,
} from "./queries";
import { sanityFetch } from "./live";
import {
  fallbackAboutPage,
  fallbackContactPage,
  fallbackDiagnosticsPage,
  fallbackFaqPage,
  fallbackHomePage,
  fallbackLegalPage,
  fallbackPracticePage,
  fallbackProcessPage,
  fallbackSiteSettings,
  fallbackTopicsPage,
} from "./fallbacks";
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

function isObject(value: unknown): value is Record<string, unknown> {
  return Boolean(value) && typeof value === "object" && !Array.isArray(value);
}

function mergeWithFallback<T>(fallback: T, incoming: unknown): T {
  if (incoming === null || incoming === undefined) {
    return fallback;
  }

  if (Array.isArray(fallback)) {
    return (Array.isArray(incoming) ? incoming : fallback) as T;
  }

  if (isObject(fallback) && isObject(incoming)) {
    const merged: Record<string, unknown> = { ...fallback };

    for (const [key, value] of Object.entries(incoming)) {
      merged[key] = mergeWithFallback(merged[key], value);
    }

    return merged as T;
  }

  return incoming as T;
}

async function fetchSingleton<T>(
  query: string,
  fallback: T,
  tag: string,
): Promise<T> {
  try {
    const { data } = await sanityFetch({
      query,
      perspective: "published",
      stega: false,
      tags: [tag],
      requestTag: tag,
    });

    return mergeWithFallback(fallback, data);
  } catch (error) {
    if (process.env.NODE_ENV !== "production") {
      console.warn(`Falling back to static content for ${tag}`, error);
    }

    return fallback;
  }
}

export const getSiteSettings = cache(() =>
  fetchSingleton<SiteSettings>(
    siteSettingsQuery,
    fallbackSiteSettings,
    "site-settings",
  ),
);

export const getHomePage = cache(() =>
  fetchSingleton<HomePageContent>(homePageQuery, fallbackHomePage, "home-page"),
);

export const getAboutPage = cache(() =>
  fetchSingleton<AboutPageContent>(
    aboutPageQuery,
    fallbackAboutPage,
    "about-page",
  ),
);

export const getTopicsPage = cache(() =>
  fetchSingleton<TopicsPageContent>(
    topicsPageQuery,
    fallbackTopicsPage,
    "topics-page",
  ),
);

export const getDiagnosticsPage = cache(() =>
  fetchSingleton<DiagnosticsPageContent>(
    diagnosticsPageQuery,
    fallbackDiagnosticsPage,
    "diagnostics-page",
  ),
);

export const getProcessPage = cache(() =>
  fetchSingleton<ProcessPageContent>(
    processPageQuery,
    fallbackProcessPage,
    "process-page",
  ),
);

export const getPracticePage = cache(() =>
  fetchSingleton<PracticePageContent>(
    practicePageQuery,
    fallbackPracticePage,
    "practice-page",
  ),
);

export const getContactPage = cache(() =>
  fetchSingleton<ContactPageContent>(
    contactPageQuery,
    fallbackContactPage,
    "contact-page",
  ),
);

export const getFaqPage = cache(() =>
  fetchSingleton<FaqPageContent>(faqPageQuery, fallbackFaqPage, "faq-page"),
);

export const getLegalPage = cache(() =>
  fetchSingleton<LegalPageContent>(legalPageQuery, fallbackLegalPage, "legal-page"),
);
