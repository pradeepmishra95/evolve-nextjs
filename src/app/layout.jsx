import Image from 'next/image';

import './globals.css';

import Footer from '@/components/footer/Footer';
import Header from '@/components/header/Header';
import PwaRegistrar from '@/components/pwa/PwaRegistrar';
import { CONTACT_PHONE_DISPLAY, WHATSAPP_TRIAL_URL } from '@/lib/links';
import { SITE_URL, SITE_URL_OBJECT } from '@/lib/site';

export const metadata = {
  applicationName: 'Evolve MMA & Calisthenics',
  metadataBase: SITE_URL_OBJECT,
  title: {
    default: 'Evolve MMA & Calisthenics | MMA and Functional Training in Mumbai',
    template: '%s | Evolve MMA & Calisthenics',
  },
  manifest: '/manifest.webmanifest',
  description:
    'Train MMA, calisthenics, and parkour with coach-led batches in Malad West, Mumbai.',
  keywords: [
    'MMA training center Mumbai',
    'calisthenics Mumbai',
    'parkour Mumbai',
    'fitness training center Malad West',
    'trial training center Mumbai',
  ],
  openGraph: {
    title: 'Evolve MMA & Calisthenics',
    description:
      'Coach-led MMA, calisthenics, and parkour training in Malad West, Mumbai.',
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
    description:
      'Coach-led MMA, calisthenics, and parkour training in Malad West, Mumbai.',
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
  themeColor: '#090d14',
  colorScheme: 'dark',
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'SportsActivityLocation',
  name: 'Evolve MMA & Calisthenics',
  description:
    'Performance-driven training space offering coach-led MMA, calisthenics, and parkour programs in Malad West, Mumbai.',
  telephone: CONTACT_PHONE_DISPLAY,
  email: 'evolvemmaandcalisthenics@gmail.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'New Link Road, Near Lower Malad Metro Station, Sunder Nagar, Malad West',
    addressLocality: 'Mumbai',
    postalCode: '400064',
    addressCountry: 'IN',
  },
  openingHours: 'Mo-Sa 06:00-22:00',
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
