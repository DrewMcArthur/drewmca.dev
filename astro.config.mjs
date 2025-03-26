import { defineConfig } from "astro/config";

import compress from "astro-compress";

// https://astro.build/config
export default defineConfig({
  compressHTML: true,
  minifyCSS: true,
  integrations: [compress()],
  redirects: {
    "/bsky": "//bsky.app/profile/drewmca.dev",
    "/book": "//cal.com/drewmca",
  },
});