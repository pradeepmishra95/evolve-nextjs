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
import { TRIAL_KIOSK_URL } from '@/lib/links';

const links = [
  { label: 'Home', href: '/' },
  { label: 'Programs', href: '/programs' },
  { label: 'Timings', href: '/timings' },
  { label: 'Coaches', href: '/coaches' },
  { label: 'About', href: '/aboutus' },
  { label: 'Contact', href: '/contactus' },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.shell}>
        <div className={styles.ctaPanel}>
          <div>
            <p className={styles.eyebrow}>Ready To Start?</p>
            <h2>Come in for a trial and feel the training environment yourself.</h2>
          </div>

          <a
            href={TRIAL_KIOSK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.trialLink}
          >
            Book A Free Trial
          </a>
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
                  Forge strength. Unlock movement. Own your health.
                </p>
              </div>
            </div>

            <p className={styles.description}>
              A performance-focused training space for MMA, calisthenics,
              mobility, conditioning, and sustainable physical progress.
            </p>

            <div className={styles.socials}>
              <a href="https://wa.me/918850957882" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                <FaWhatsapp />
              </a>
              <a href="tel:+918850957882" aria-label="Call Evolve MMA & Calisthenics">
                <FaPhoneAlt />
              </a>
              <a href="mailto:evolvemmaandcalisthenics@gmail.com" aria-label="Email Evolve MMA & Calisthenics">
                <FaEnvelope />
              </a>
              <a
                href="https://www.instagram.com/evolve_mmacalisthenics"
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
              New Link Rd, Near Lower Malad Metro Station,
              <br />
              Sunder Nagar, Malad West,
              <br />
              Mumbai - 400064
            </p>
          </div>

          <div>
            <h4>Quick Links</h4>
            <ul className={styles.linkList}>
              {links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4>Contact</h4>
            <p>+91 8850957882</p>
            <p>+91 9552596315</p>
            <p>evolvemmaandcalisthenics@gmail.com</p>
            <p>Monday - Saturday, 6:00 AM - 10:00 PM</p>
          </div>
        </div>

        <div className={styles.bottom}>
          <span>© {new Date().getFullYear()} Evolve MMA & Calisthenics.</span>
          <span>Coach-led training for real strength, skill, and movement.</span>
        </div>
      </div>
    </footer>
  );
}
