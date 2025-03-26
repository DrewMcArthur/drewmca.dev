import { defineConfig } from "astro/config";

import compress from "astro-compress";

import purgecss from "astro-purgecss";

// https://astro.build/config
export default defineConfig({
  compressHTML: true,
  minifyCSS: true,
  integrations: [
    compress(),
    purgecss({
      fontFace: true,
      keyframes: true,
      variables: true,
      content: ["./src/**/*.{astro,js,jsx,ts,tsx,vue,svelte}"],
    }),
  ],
  redirects: {
    "/bsky": "//bsky.app/profile/drewmca.dev",
    "/book": "//cal.com/drewmca",
  },
});
