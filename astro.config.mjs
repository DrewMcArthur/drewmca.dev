import { defineConfig } from "astro/config";

import compress from "astro-compress";

import purgecss from "astro-purgecss";

// https://astro.build/config
export default defineConfig({
  compressHTML: true,
  minifyCSS: true,
  integrations: [compress(), purgecss()],
  redirects: {
    "/bsky": "//bsky.app/profile/drewmca.dev",
    "/book": "//cal.com/drewmca",
  },
});