import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { ui } from '../../i18n/ui';

export async function GET(context) {
  const posts = await getCollection('blog', ({ data }) => data.lang === 'en' && !data.draft);
  return rss({
    title: ui.en.siteName,
    description: ui.en.home_intro,
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.date,
      link: `/en/blog/${post.id.split('/').pop()}/`,
    })),
    customData: `<language>en</language>`,
  });
}
