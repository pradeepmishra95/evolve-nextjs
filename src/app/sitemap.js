import { SITE_URL } from '@/lib/site';

const INDEXABLE_ROUTES = [
  '/',
  '/aboutus',
  '/blog',
  '/coaches',
  '/contactus',
  '/programs',
  '/timings',
];

export default function sitemap() {
  const lastModified = new Date();

  return INDEXABLE_ROUTES.map((route) => ({
    url: new URL(route, SITE_URL).toString(),
    lastModified,
    changeFrequency: route === '/' ? 'weekly' : 'monthly',
    priority: route === '/' ? 1 : 0.7,
  }));
}
