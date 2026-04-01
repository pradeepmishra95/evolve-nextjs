import MapSection from '@/components/mapsection/MapSection';
import Reveal from '@/components/reveal/Reveal';
import { TRIAL_KIOSK_URL } from '@/lib/links';

import styles from './ContactPage.module.css';

export const metadata = {
  title: 'Contact Evolve MMA & Calisthenics in Malad West',
  description:
    'Contact Evolve MMA & Calisthenics in Malad West, Mumbai for trial bookings, program guidance, timings, directions, and gym visit information.',
  keywords: [
    'contact MMA gym Malad West',
    'gym near Lower Malad Metro',
    'book free trial Malad West gym',
    'Evolve MMA contact number',
    'fitness gym contact Mumbai',
  ],
  openGraph: {
    title: 'Contact Us | Evolve MMA & Calisthenics',
    description:
      'Reach Evolve for free trial bookings, schedule questions, and directions to the Malad West gym.',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How can I book a free trial at Evolve MMA & Calisthenics?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'You can book a free trial through the online booking form or by calling the gym directly. The team also helps you choose the right batch based on your goal and schedule.',
      },
    },
    {
      '@type': 'Question',
      name: 'Where is Evolve MMA & Calisthenics located?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'The gym is located in Malad West, Mumbai, near Lower Malad Metro Station on New Link Road.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are the gym contact details?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'You can contact the gym by phone at +91 8850957882 or by email at evolvemmaandcalisthenics@gmail.com.',
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
    title: 'Call the gym',
    value: '+91 8850957882',
    helper: 'Quickest route for trial slots and immediate questions.',
  },
  {
    title: 'Email',
    value: 'evolvemmaandcalisthenics@gmail.com',
    helper: 'Best for business inquiries or detailed questions.',
  },
  {
    title: 'Working hours',
    value: 'Monday - Saturday | 6:00 AM - 10:00 PM',
    helper: 'Morning and evening batches run through the week.',
  },
  {
    title: 'Location',
    value: 'Near Lower Malad Metro, Malad West, Mumbai',
    helper: 'Easy to reach before work, after work, or on weekends.',
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
            <h1>Talk to the team, plan a trial, and walk in with clarity.</h1>
            <p className={styles.lead}>
              If you are deciding between programs, unsure about your level, or just
              want to visit the gym first, reach out and we will help you choose the
              right starting point.
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

              <a href="tel:+918850957882" className={styles.secondaryLink}>
                Call The Gym
              </a>
            </div>

            <p className={styles.helper}>
              If you are unsure about your level, schedule, or which program to
              begin with, just ask. The team can help you narrow down the right
              first class before you visit.
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
          title="Visit once before you decide."
          copy="See the space, understand the batch structure, and get help choosing the right training path based on your goal."
        />
      </section>
    </>
  );
}
