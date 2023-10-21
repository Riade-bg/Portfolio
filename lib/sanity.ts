import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "5i1yhp9i",
  dataset: "production",
  useCdn: true,
  apiVersion: "2023-10-21"
});