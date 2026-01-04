import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import emoji from "remark-emoji";

import { rehypeTwemoji } from "./src/lib/emoji";

export default defineConfig({
  site: import.meta.env.SITE || "https://blog.buskhoja.xyz",
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [sitemap(), mdx()],
  markdown: {
    shikiConfig: {
      themes: {
        light: "catppuccin-latte",
        dark: "catppuccin-mocha",
      },
    },
    rehypePlugins: [
      [rehypeTwemoji, {
      // source: "https://cdn.jsdelivr.net/gh/RealityRipple/emoji@15.1.1/whatsapp",
      // "https://raw.githubusercontent.com/Ruhannn/Animated-Emojis/main/emoji-with-code",
        // source: "https://cdn.jsdelivr.net/gh/jdecked/twemoji@latest/assets/svg/",
        source: "https://raw.githubusercontent.com/Ruhannn/Animated-Emojis/main/emoji-with-code",
        format: "webp",
      }],
    ],
    remarkPlugins: [emoji],
  },
});
