import Image from 'next/image';

import './globals.css';

import Footer from '@/components/footer/Footer';
import Header from '@/components/header/Header';
import PwaRegistrar from '@/components/pwa/PwaRegistrar';
import {
  CONTACT_EMAIL,
  CONTACT_PHONE_DISPLAY,
  FULL_ADDRESS,
  GOOGLE_MAPS_URL,
  WHATSAPP_TRIAL_URL,
} from '@/lib/links';
import { SITE_URL, SITE_URL_OBJECT } from '@/lib/site';

export const metadata = {
  applicationName: 'Evolve MMA & Calisthenics',
  metadataBase: SITE_URL_OBJECT,
  title: {
    default:
      'Evolve MMA & Calisthenics | MMA & Calisthenics Training in Malad West, Mumbai',
    template: '%s | Evolve MMA & Calisthenics',
  },
  manifest: '/manifest.webmanifest',
  description: 'Train MMA and calisthenics with coach-led batches in Malad West, Mumbai. Jumba & Yoga coming soon.',
  keywords: [
    'MMA training center Mumbai',
    'calisthenics Mumbai',
    'jumba upcoming Mumbai',
    'yoga upcoming Mumbai',
    'fitness training center Malad West',
    'trial training center Mumbai',
  ],
  openGraph: {
    title: 'Evolve MMA & Calisthenics',
    description: 'Coach-led MMA and calisthenics training in Malad West, Mumbai. Jumba & Yoga coming soon.',
    url: SITE_URL,
    siteName: 'Evolve MMA & Calisthenics',
    locale: 'en_IN',
    type: 'website',
    images: [
      'https://res.cloudinary.com/dd9yqqsa4/image/upload/v1771045740/logo_p9ooao.png',
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Evolve MMA & Calisthenics',
    description: 'Coach-led MMA and calisthenics training in Malad West, Mumbai. Jumba & Yoga coming soon.',
    images: [
      'https://res.cloudinary.com/dd9yqqsa4/image/upload/v1771045740/logo_p9ooao.png',
    ],
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
    title: 'Evolve MMA',
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
  name: 'Evolve MMA & Calisthenics',
  description:
    'Performance-driven training space offering coach-led MMA and calisthenics programs in Malad West, Mumbai. Jumba & Yoga coming soon.',
  url: SITE_URL,
  telephone: CONTACT_PHONE_DISPLAY,
  email: CONTACT_EMAIL,
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'New Link Rd, Near Lower Malad Metro Station, Sunder Nagar, Malad West',
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
  image:
    'https://res.cloudinary.com/dd9yqqsa4/image/upload/v1771045740/logo_p9ooao.png',
  sameAs: [
    'https://www.instagram.com/evolve_mmacalisthenics',
    'https://www.facebook.com/profile.php?id=61587043175017',
    'https://youtube.com/@evlovemmacalisthenics',
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
