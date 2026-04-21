import Link from 'next/link';
import Image from 'next/image';
import {
  FaWhatsapp,
  FaInstagram,
  FaFacebook,
  FaPhoneAlt,
  FaEnvelope,
  FaYoutube,
} from 'react-icons/fa';

import styles from './Footer.module.css';
import NewsletterSignup from '@/components/NewsletterSignup';
import {
  ADDRESS_LINE_1,
  ADDRESS_LINE_2,
  BOOK_TRIAL_PATH,
  CONTACT_EMAIL,
  CONTACT_PHONE_DISPLAY,
  CONTACT_PHONE_LINK,
  INSTAGRAM_PROFILE_URL,
  OPENING_HOURS_LABEL,
  WHATSAPP_TRIAL_URL,
} from '@/lib/links';

const navigationLinks = [
  { label: 'Home', href: '/' },
  { label: 'Programs', href: '/programs' },
  { label: 'Timings', href: '/timings' },
  { label: 'Coaches', href: '/coaches' },
  { label: 'About', href: '/aboutus' },
  { label: 'Contact', href: '/contactus' },
  { label: 'Book A Trial', href: BOOK_TRIAL_PATH },
];

const discoverLinks = [
  { label: 'MMA Classes Malad', href: '/mma-classes-malad-west' },
  { label: 'Calisthenics Gym Mumbai', href: '/calisthenics-gym-mumbai' },
  // Parkour page removed; upcoming programs will be listed on /programs
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.shell}>
        <div className={styles.ctaPanel}>
          <div>
            <p className={styles.eyebrow}>Ready To Start?</p>
            <h2>Want to see whether the space feels right in person?</h2>
          </div>

          <Link href={BOOK_TRIAL_PATH} className={styles.trialLink} target="_blank" rel="noopener noreferrer">
            Book A Trial
          </Link>
        </div>

        <div className={styles.grid}>
          <div className={styles.brandBlock}>
            <div className={styles.brand}>
              <Image
                src="https://res.cloudinary.com/dd9yqqsa4/image/upload/v1771045740/logo_p9ooao.png"
                alt="Evolve MMA & Calisthenics"
                width={96}
                height={96}
                priority
              />

              <div>
                <h3>Evolve MMA & Calisthenics</h3>
                <p className={styles.tagline}>
                  Skill. Strength. Movement.
                </p>
              </div>
            </div>

            <p className={styles.description}>
              A Malad West training center for MMA and calisthenics with coach-led progress, disciplined structure, and a strong movement culture. Jumba & Yoga coming soon.
            </p>

            <div className={styles.socials}>
              <a href={WHATSAPP_TRIAL_URL} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                <FaWhatsapp />
              </a>
              <a href={CONTACT_PHONE_LINK} aria-label="Call Evolve MMA & Calisthenics">
                <FaPhoneAlt />
              </a>
              <a href="mailto:evolvemmaandcalisthenics@gmail.com" aria-label="Email Evolve MMA & Calisthenics">
                <FaEnvelope />
              </a>
              <a
                href={INSTAGRAM_PROFILE_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61587043175017"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <FaFacebook />
              </a>
              <a
                href="https://youtube.com/@evlovemmacalisthenics"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
              >
                <FaYoutube />
              </a>
            </div>
          </div>

          <div>
            <h4>Visit Us</h4>
            <p>
              {ADDRESS_LINE_1},
              <br />
              {ADDRESS_LINE_2}
            </p>
          </div>

          <div>
            <h4>Quick Links</h4>
            <ul className={styles.linkList}>
              {navigationLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4>Discover</h4>
            <ul className={styles.linkList}>
              {discoverLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4>Contact & Updates</h4>
            <p>{CONTACT_PHONE_DISPLAY}</p>
            <p>{CONTACT_EMAIL}</p>
            <p>{OPENING_HOURS_LABEL}</p>
            <NewsletterSignup />
          </div>
        </div>

        <div className={styles.bottom}>
          <span>© {new Date().getFullYear()} Evolve MMA & Calisthenics.</span>
          <span>MMA and calisthenics training in Malad West. Jumba & Yoga coming soon.</span>
        </div>
      </div>
    </footer>
  );
}
