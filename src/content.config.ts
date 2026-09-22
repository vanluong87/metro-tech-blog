import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    lang: z.enum(['vi', 'en']),
    // slug dùng chung giữa 2 ngôn ngữ để liên kết bản dịch (vi/bai-viet.md <-> en/bai-viet.md nên trùng tên file)
    date: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    country: z.string(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
    // đường dẫn tới sơ đồ SVG minh hoạ trong public/images/blog/, vd "/images/blog/tbm-nhat-ban.svg"
    heroImage: z.string().optional(),
    heroImageAlt: z.string().optional(),
  }),
});

export const collections = { blog };
