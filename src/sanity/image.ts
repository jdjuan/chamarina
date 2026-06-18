import { createImageUrlBuilder } from "@sanity/image-url";
import { sanityClient } from "./client";
import type { CmsImage } from "./types";

const builder = createImageUrlBuilder(sanityClient);

export function urlForImage(image?: CmsImage) {
  if (!image?.asset?._ref && !image?.asset?.url && !image?.url) {
    return null;
  }

  return builder.image(image);
}

export function imageUrl(image: CmsImage | undefined, fallback: string) {
  if (image?.url) {
    return image.url;
  }

  const built = urlForImage(image)?.auto("format").fit("max").url();
  return built || fallback;
}

export function imageAlt(image: CmsImage | undefined, fallback: string) {
  return image?.alt || fallback;
}
