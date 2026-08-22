import Image from 'next/image';

import './globals.css';

import Footer from '@/components/footer/Footer';
import Header from '@/components/header/Header';
import RoamingTiger from '@/components/mascot/RoamingTiger';
import PwaRegistrar from '@/components/pwa/PwaRegistrar';
import { LOGO_IMAGE_PATH } from '@/lib/brand';
import {
  CONTACT_EMAIL,
  CONTACT_EMAIL_IS_ADDRESS,
  CONTACT_PHONE_DISPLAY,
  FACEBOOK_PROFILE_URL,
  FULL_ADDRESS,
  GOOGLE_MAPS_URL,
  INSTAGRAM_PROFILE_URL,
  STREET_ADDRESS,
  WHATSAPP_TRIAL_URL,
  YOUTUBE_PROFILE_URL,
} from '@/lib/links';
import { buildAbsoluteUrl, SITE_URL, SITE_URL_OBJECT } from '@/lib/site';

export const metadata = {
  applicationName: 'Evolve Sports And Fitness Club',
  metadataBase: SITE_URL_OBJECT,
  title: {
    default:
      'Evolve Sports And Fitness Club | MMA & Calisthenics Training in Malad West, Mumbai',
    template: '%s | Evolve Sports And Fitness Club',
  },
  manifest: '/manifest.webmanifest',
  description:
    'Train MMA and calisthenics with coach-led batches in Malad West, Mumbai.',
  keywords: [
    'MMA training center Mumbai',
    'calisthenics Mumbai',
    'fitness training center Malad West',
    'trial training center Mumbai',
  ],
  openGraph: {
    title: 'Evolve Sports And Fitness Club',
    description:
      'Coach-led MMA and calisthenics training in Malad West, Mumbai.',
    url: SITE_URL,
    siteName: 'Evolve Sports And Fitness Club',
    locale: 'en_IN',
    type: 'website',
    images: [buildAbsoluteUrl(LOGO_IMAGE_PATH)],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Evolve Sports And Fitness Club',
    description:
      'Coach-led MMA and calisthenics training in Malad West, Mumbai.',
    images: [buildAbsoluteUrl(LOGO_IMAGE_PATH)],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      maxImagePreview: 'large',
      maxSnippet: -1,
      maxVideoPreview: -1,
    },
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'Evolve Sports And Fitness Club',
  },
  formatDetection: {
    telephone: false,
  },
  icons: {
    apple: [
      {
        url: '/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
    icon: [
      {
        url: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        url: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  },
};

export const viewport = {
  themeColor: '#1a1a1a',
  colorScheme: 'dark',
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'SportsActivityLocation',
  name: 'Evolve Sports And Fitness Club',
  description:
    'Performance-driven training space offering coach-led MMA and calisthenics programs in Malad West, Mumbai.',
  url: SITE_URL,
  telephone: CONTACT_PHONE_DISPLAY,
  ...(CONTACT_EMAIL_IS_ADDRESS ? { email: CONTACT_EMAIL } : {}),
  address: {
    '@type': 'PostalAddress',
    streetAddress: STREET_ADDRESS,
    addressLocality: 'Mumbai',
    addressRegion: 'Maharashtra',
    postalCode: '400064',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 19.1751993,
    longitude: 72.8373853,
  },
  openingHours: 'Mo-Sa 06:00-22:00',
  hasMap: GOOGLE_MAPS_URL,
  areaServed: FULL_ADDRESS,
  image: buildAbsoluteUrl(LOGO_IMAGE_PATH),
  sameAs: [
    INSTAGRAM_PROFILE_URL,
    FACEBOOK_PROFILE_URL,
    YOUTUBE_PROFILE_URL,
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <PwaRegistrar />

        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />

        <Header />

        {children}

        <RoamingTiger />

        <a
          href={WHATSAPP_TRIAL_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-float"
          aria-label="Contact Us on WhatsApp"
        >
          <span className="tooltip">Contact Us on WhatsApp</span>
          <Image
            src="/icons/whatsapp.png"
            alt=""
            width={40}
            height={40}
            aria-hidden="true"
          />
        </a>

        <Footer />
      </body>
    </html>
  );
}
