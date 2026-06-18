import { defineLive } from "next-sanity/live";
import { sanityClient } from "./client";

export const { sanityFetch, SanityLive } = defineLive({
  client: sanityClient,
  serverToken: false,
  browserToken: false,
});
