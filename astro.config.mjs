// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://metro-tech-blog.vercel.app',
  trailingSlash: 'always',
  integrations: [sitemap()],
});
