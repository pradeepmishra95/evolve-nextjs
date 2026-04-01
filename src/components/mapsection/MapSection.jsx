import Reveal from '@/components/reveal/Reveal';
import { TRIAL_KIOSK_URL } from '@/lib/links';

import styles from './MapSection.module.css';

export default function MapSection({
  title = 'Train near Lower Malad Metro without adding friction to your day.',
  copy = 'Visit Evolve MMA & Calisthenics in Malad West for coach-led sessions, trial bookings, and program guidance.',
}) {
  return (
    <section className={styles.mapSection}>
      <div className={styles.shell}>
        <Reveal className={styles.copy} distance={22}>
          <p className={styles.eyebrow}>Visit The Gym</p>
          <h2>{title}</h2>
          <p>{copy}</p>

          <div className={styles.actions}>
            <a
              href="https://maps.google.com/?q=EVOLVE%20MMA%20%26%20CALISTHENICS%20Malad%20West"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.secondaryLink}
            >
              Open In Google Maps
            </a>

            <a
              href={TRIAL_KIOSK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.primaryLink}
            >
              Plan Your Visit
            </a>
          </div>
        </Reveal>

        <Reveal className={styles.frame} delay={120} distance={24}>
          <iframe
            className={styles.map}
            title="Map showing Evolve MMA & Calisthenics in Malad West, Mumbai"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.4577457053815!2d72.8373853!3d19.1751993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b7005e5842fd%3A0xf83ec3da041829c5!2sEVOLVE%20MMA%20%26%20CALISTHENICS!5e0!3m2!1sen!2sin!4v1770299165791!5m2!1sen!2sin"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </Reveal>
      </div>
    </section>
  );
}
