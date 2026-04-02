import MapSection from '@/components/mapsection/MapSection';
import Reveal from '@/components/reveal/Reveal';
import {
  CONTACT_PHONE_DISPLAY,
  CONTACT_PHONE_LINK,
  TRIAL_KIOSK_URL,
} from '@/lib/links';

import styles from './ContactPage.module.css';

export const metadata = {
  title: 'Contact Evolve MMA & Calisthenics in Malad West',
  description:
    'Contact Evolve MMA & Calisthenics in Malad West, Mumbai for trial bookings, program guidance, timings, directions, and training center visit information.',
  alternates: {
    canonical: '/contactus',
  },
  keywords: [
    'contact MMA training center Malad West',
    'training center near Lower Malad Metro',
    'book trial Malad West training center',
    'Evolve MMA contact number',
    'fitness training center contact Mumbai',
  ],
  openGraph: {
    title: 'Contact Us | Evolve MMA & Calisthenics',
    description:
      'Reach Evolve for trial bookings, schedule questions, and directions to the Malad West training center.',
    url: '/contactus',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How can I book a trial at Evolve MMA & Calisthenics?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'You can book a trial through the online booking form or by calling the team directly. The team also helps you choose the right batch based on your goal and schedule.',
      },
    },
    {
      '@type': 'Question',
      name: 'Where is Evolve MMA & Calisthenics located?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'The training center is located in Malad West, Mumbai, near Lower Malad Metro Station on New Link Road.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are the contact details for Evolve MMA & Calisthenics?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          `You can contact the team by phone at ${CONTACT_PHONE_DISPLAY} or by email at evolvemmaandcalisthenics@gmail.com.`,
      },
    },
    {
      '@type': 'Question',
      name: 'Can I ask for help choosing the right program before visiting?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'Yes. If you are unsure about your level, preferred timing, or which program suits your goal, the team can guide you before your first visit.',
      },
    },
  ],
};

const contactCards = [
  {
    title: 'Call the team',
    value: CONTACT_PHONE_DISPLAY,
    helper: 'Best for trial availability, program fit, and same-day questions.',
  },
  {
    title: 'Email',
    value: 'evolvemmaandcalisthenics@gmail.com',
    helper: 'Useful for partnerships, media, or anything that needs detail.',
  },
  {
    title: 'Working hours',
    value: 'Monday - Saturday | 6:00 AM - 10:00 PM',
    helper: 'Use this as the operating window for batches and visits.',
  },
  {
    title: 'Location',
    value: 'Near Lower Malad Metro, Malad West, Mumbai',
    helper: 'A convenient landmark if you are coming by metro or New Link Road.',
  },
];

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <section className={styles.contactSection}>
        <div className={styles.shell}>
          <Reveal className={styles.hero} distance={24}>
            <p className={styles.eyebrow}>Contact & Visit</p>
            <h1>Reach the team for timings, trial slots, or a quick program check.</h1>
            <p className={styles.lead}>
              This page is for practical questions: which batch fits your
              schedule, where the center is, and how to plan your first visit.
            </p>

            <div className={styles.actions}>
              <a
                href={TRIAL_KIOSK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.primaryLink}
              >
                Book A Trial
              </a>

              <a href={CONTACT_PHONE_LINK} className={styles.secondaryLink}>
                Call The Team
              </a>
            </div>

            <p className={styles.helper}>
              If you already know what you want, book directly. If not, call
              and get clarity in a few minutes.
            </p>
          </Reveal>

          <div className={styles.cardGrid}>
            {contactCards.map((card, index) => (
              <Reveal
                key={card.title}
                className={styles.card}
                delay={index * 70}
                distance={20}
              >
                <h2>{card.title}</h2>
                <p className={styles.value}>{card.value}</p>
                <p>{card.helper}</p>
              </Reveal>
            ))}
          </div>
        </div>

        <MapSection
          title="See the space before you choose a batch."
          copy="One visit usually answers the location, setup, and class-format questions much faster than messages do."
        />
      </section>
    </>
  );
}
