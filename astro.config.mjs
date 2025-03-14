import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  integrations: [],
  redirects: {
    "/bsky": "//bsky.app/profile/drewmca.dev",
    "/book": "//cal.com/drewmca",
  },
});
