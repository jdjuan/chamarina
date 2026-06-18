import { defineCliConfig } from "sanity/cli";
import { sanityDataset, sanityProjectId, sanityStudioHost } from "./src/sanity/config";

export default defineCliConfig({
  api: {
    projectId: sanityProjectId,
    dataset: sanityDataset,
  },
  deployment: {
    appId: "qigw3kmobyc1tjdja20z1ica",
  },
  studioHost: sanityStudioHost,
});
