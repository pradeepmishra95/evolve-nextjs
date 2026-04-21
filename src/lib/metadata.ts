import type { Metadata } from 'next';

import { buildAbsoluteUrl, SITE_URL } from '@/lib/site';

const OG_IMAGE =
  'https://res.cloudinary.com/dd9yqqsa4/image/upload/v1771045740/logo_p9ooao.png';

type MetadataConfig = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
};

export function buildMetadata({
  title,
  description,
  path,
  keywords = [],
}: MetadataConfig): Metadata {
  const url = buildAbsoluteUrl(path);

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: 'Evolve MMA & Calisthenics',
      locale: 'en_IN',
      type: 'website',
      images: [OG_IMAGE],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [OG_IMAGE],
    },
    metadataBase: new URL(SITE_URL),
  };
}
