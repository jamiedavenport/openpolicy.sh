// @ts-check
import { defineConfig, fontProviders } from "astro/config";

import vercel from "@astrojs/vercel";
import icon from "astro-icon";
import sitemap from "@astrojs/sitemap";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://openpolicy.sh",
  adapter: vercel(),
  integrations: [icon(), sitemap()],

  experimental: {
    fonts: [
      {
        provider: fontProviders.fontsource(),
        name: "Geist Mono",
        cssVariable: "--font-geist-mono",
      },
    ],
  },

  vite: {
    plugins: [tailwindcss()],
  },
});
