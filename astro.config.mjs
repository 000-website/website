import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

export default defineConfig({
  output: "static",
  // Add your production URL before deployment:
  // site: "https://000.website",
  integrations: [
    starlight({
      title: "000.website docs",
      components: {
        SiteTitle: "./src/components/DocsSiteTitle.astro",
      },
    }),
  ],
});
