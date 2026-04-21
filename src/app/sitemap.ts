import type { MetadataRoute } from 'next';

import { buildAbsoluteUrl } from '@/lib/site';

const INDEXABLE_ROUTES = [
  '/',
  '/aboutus',
  '/blog',
  '/book-trial',
  '/calisthenics-gym-mumbai',
  '/coaches',
  '/contactus',
  '/mma-classes-malad-west',
  '/programs',
  '/programs/mma',
  '/programs/calisthenics',
  '/timings',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return INDEXABLE_ROUTES.map((route) => ({
    url: buildAbsoluteUrl(route),
    lastModified,
    changeFrequency: route === '/' ? 'weekly' : 'monthly',
    priority: route === '/' ? 1 : route.startsWith('/programs/') ? 0.82 : 0.72,
  }));
}
