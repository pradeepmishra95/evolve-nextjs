import Image from 'next/image';

import './globals.css';

import Footer from '@/components/footer/Footer';
import Header from '@/components/header/Header';
import { WHATSAPP_TRIAL_URL } from '@/lib/links';

export const metadata = {
  title: {
    default: 'Evolve MMA & Calisthenics | MMA and Functional Training in Mumbai',
    template: '%s | Evolve MMA & Calisthenics',
  },
  description:
    'Train MMA, calisthenics, and parkour with coach-led batches in Malad West, Mumbai.',
  keywords: [
    'MMA gym Mumbai',
    'calisthenics Mumbai',
    'parkour Mumbai',
    'fitness gym Malad West',
    'free trial gym Mumbai',
  ],
  openGraph: {
    title: 'Evolve MMA & Calisthenics',
    description:
      'Coach-led MMA, calisthenics, and parkour training in Malad West, Mumbai.',
    images: [
      'https://res.cloudinary.com/dd9yqqsa4/image/upload/v1771045740/logo_p9ooao.png',
    ],
  },
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'SportsActivityLocation',
  name: 'Evolve MMA & Calisthenics',
  description:
    'Performance-driven training space offering coach-led MMA, calisthenics, and parkour programs in Malad West, Mumbai.',
  telephone: '+91 88509 57882',
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
