import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { ui } from '../../i18n/ui';

export async function GET(context) {
  const posts = await getCollection('blog', ({ data }) => data.lang === 'vi' && !data.draft);
  return rss({
    title: ui.vi.siteName,
    description: ui.vi.home_intro,
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.date,
      link: `/vi/blog/${post.id.split('/').pop()}/`,
    })),
    customData: `<language>vi</language>`,
  });
}
