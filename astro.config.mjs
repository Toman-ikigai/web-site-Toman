// @ts-check
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
  output: "server",
  redirects: {
    "/": "/es",
  },
  // i18n:{
  //   defaultLocale: "es",
  //   locales: ["es", "en"],
  //   routing:{
  //     prefixDefaultLocale: true,
  //   }
  // },
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    react(),
  ],
  adapter: vercel(),
});
