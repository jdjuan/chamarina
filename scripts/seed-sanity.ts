import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { getCliClient } from "sanity/cli";
import { sanityApiVersion } from "../src/sanity/config";
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
} from "../src/sanity/fallbacks";

type JsonObject = Record<string, unknown>;

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");
const client = getCliClient({ apiVersion: sanityApiVersion });
const uploadedImages = new Map<string, string>();

const documents = [
  ["siteSettings", "siteSettings", fallbackSiteSettings],
  ["homePage", "homePage", fallbackHomePage],
  ["aboutPage", "aboutPage", fallbackAboutPage],
  ["topicsPage", "topicsPage", fallbackTopicsPage],
  ["diagnosticsPage", "diagnosticsPage", fallbackDiagnosticsPage],
  ["processPage", "processPage", fallbackProcessPage],
  ["practicePage", "practicePage", fallbackPracticePage],
  ["contactPage", "contactPage", fallbackContactPage],
  ["faqPage", "faqPage", fallbackFaqPage],
  ["legalPage", "legalPage", fallbackLegalPage],
] as const;

function isObject(value: unknown): value is JsonObject {
  return Boolean(value) && typeof value === "object" && !Array.isArray(value);
}

function localImagePath(url: string) {
  if (!url.startsWith("/images/")) {
    return null;
  }

  return path.join(rootDir, "public", url);
}

async function uploadImage(url: string) {
  const cached = uploadedImages.get(url);

  if (cached) {
    return cached;
  }

  const filePath = localImagePath(url);

  if (!filePath || !fs.existsSync(filePath)) {
    throw new Error(`Image asset not found: ${url}`);
  }

  const asset = await client.assets.upload("image", fs.createReadStream(filePath), {
    filename: path.basename(filePath),
  });

  uploadedImages.set(url, asset._id);
  return asset._id;
}

async function prepareForSanity(value: unknown): Promise<unknown> {
  if (Array.isArray(value)) {
    const preparedItems = await Promise.all(
      value.map((item) => prepareForSanity(item)),
    );

    return preparedItems.map((item, index) => {
      if (!isObject(item) || typeof item._key === "string") {
        return item;
      }

      return {
        ...item,
        _key: `item-${index}`,
      };
    });
  }

  if (!isObject(value)) {
    return value;
  }

  if (typeof value.url === "string" && typeof value.alt === "string") {
    const imagePath = localImagePath(value.url);

    if (imagePath) {
      const assetId = await uploadImage(value.url);

      return {
        _type: "image",
        alt: value.alt,
        asset: {
          _type: "reference",
          _ref: assetId,
        },
      };
    }
  }

  const prepared: JsonObject = {};

  for (const [key, nestedValue] of Object.entries(value)) {
    prepared[key] = await prepareForSanity(nestedValue);
  }

  return prepared;
}

async function main() {
  for (const [id, type, fallback] of documents) {
    const doc = (await prepareForSanity(fallback)) as JsonObject;

    await client.createOrReplace({
      ...doc,
      _id: id,
      _type: type,
    });

    console.log(`Seeded ${type}`);
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
