// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // TODO: đổi thành domain thật khi bạn deploy (bắt buộc để sitemap.xml và canonical URL đúng)
  site: 'https://example.com',
  trailingSlash: 'always',
  integrations: [sitemap()],
});
