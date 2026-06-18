import { defineConfig } from "sanity";
import { structureTool, type StructureResolver } from "sanity/structure";
import { sanityDataset, sanityProjectId, sanityStudioUrl } from "./src/sanity/config";
import { schemaTypes } from "./src/sanity/schemaTypes";

const singletonItems = [
  ["siteSettings", "Site settings"],
  ["homePage", "Homepage"],
  ["aboutPage", "Über mich"],
  ["topicsPage", "Themen & Schwerpunkte"],
  ["diagnosticsPage", "Diagnostik"],
  ["processPage", "Ablauf & Kosten"],
  ["practicePage", "Praxis & Anfahrt"],
  ["contactPage", "Kontakt"],
  ["faqPage", "FAQs"],
  ["legalPage", "Impressum & Datenschutz"],
] as const;

const singletonTypes = new Set<string>(
  singletonItems.map(([schemaType]) => schemaType),
);

const structure: StructureResolver = (S) =>
  S.list()
    .title("Praxis Chamarina")
    .items(
      singletonItems.map(([schemaType, title]) =>
        S.listItem()
          .title(title)
          .schemaType(schemaType)
          .child(S.document().schemaType(schemaType).documentId(schemaType)),
      ),
    );

export default defineConfig({
  name: "chamarina",
  title: "Praxis Chamarina",
  projectId: sanityProjectId,
  dataset: sanityDataset,
  basePath: "/",
  plugins: [structureTool({ structure })],
  schema: {
    types: schemaTypes,
  },
  document: {
    actions: (previous, context) =>
      singletonTypes.has(context.schemaType)
        ? previous.filter(({ action }) => action !== "duplicate")
        : previous,
  },
  studio: {
    components: {},
  },
  scheduledPublishing: {
    enabled: false,
  },
  unstable_noAuthBoundary: false,
  projectHostname: sanityStudioUrl.replace(/^https?:\/\//, ""),
});
