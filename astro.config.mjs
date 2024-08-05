import { defineConfig } from "astro/config";

import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: "https://www.blind3y3design.com/",
  integrations: [mdx(), sitemap(), icon()],
  markdown: {
    shikiConfig: {
      theme: "one-dark-pro",
    },
  },
});
