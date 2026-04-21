import Link from 'next/link';

import Reveal from '@/components/reveal/Reveal';
import { UPCOMING_EVENTS } from '@/data/events';
import { BOOK_TRIAL_PATH, INSTAGRAM_PROFILE_URL, WHATSAPP_COMMUNITY_URL } from '@/lib/links';

import styles from './CommunitySection.module.css';

export default function CommunitySection() {
  return (
    <section className={styles.section}>
      <div className={styles.shell}>
        <Reveal className={styles.header} distance={22}>
          <div>
            <p className="section-eyebrow">Community & Events</p>
            <h2 className="section-heading">Training gets stickier when you feel part of something.</h2>
          </div>
          <p className="section-lead">
            Workshops, open days, sparring meets, and regular updates help the space
            feel active even when you are still deciding where to start.
          </p>
        </Reveal>

        <div className={styles.grid}>
          <Reveal className={styles.eventsCard} distance={18}>
            <p className={styles.cardEyebrow}>Upcoming Events</p>
            <div className={styles.eventsList}>
              {UPCOMING_EVENTS.map((event) => (
                <article key={`${event.title}-${event.date}`} className={styles.eventItem}>
                  <strong>{event.title}</strong>
                  <span>{event.date}</span>
                  <p>{event.detail}</p>
                </article>
              ))}
            </div>
          </Reveal>

          <Reveal className={styles.ctaCard} delay={70} distance={18}>
            <p className={styles.cardEyebrow}>Stay Close To The Community</p>
            <h3>Get announcements, session highlights, and new event updates in one place.</h3>
            <div className={styles.actions}>
              <a
                href={WHATSAPP_COMMUNITY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="button-primary"
              >
                Join Our WhatsApp Community
              </a>
              <a
                href={INSTAGRAM_PROFILE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="button-secondary"
              >
                Follow on Instagram
              </a>
              <Link href={BOOK_TRIAL_PATH} className={styles.inlineLink} target="_blank" rel="noopener noreferrer">
                Book a visit instead
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
