'use client';

import Link from 'next/link';
import Image from 'next/image';
import styles from './Footer.module.css';

import {
  FaWhatsapp,
  FaInstagram,
  FaFacebook,
  FaPhoneAlt,
  FaEnvelope,
  FaYoutube,
} from 'react-icons/fa';

export default function Footer() {

  const handleWhatsAppClick = () => {
    window.open(
      'https://wa.me/918850957882?text=Hi! I want to book a trial',
      '_blank'
    );
  };

  return (
    <footer className={styles.footer}>

      {/* TOP */}
      <div className={styles.top}>

        <div className={styles.brand}>
          <Image
            src="https://res.cloudinary.com/dd9yqqsa4/image/upload/v1771045740/logo_p9ooao.png"
            alt="Evolve MMA & Calisthenics"
            width={120}
            height={120}
            priority
          />

          <p className={styles.tagline}>
            Train strong. Move better. Live healthier.
          </p>
        </div>

        <div className={styles.socials}>
          <a href="https://wa.me/918850957882" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
          <a href="tel:+918850957882"><FaPhoneAlt /></a>
          <a href="mailto:evolvemmaandcalisthenics@gmail.com"><FaEnvelope /></a>
          <a href="https://www.instagram.com/evolve_mmacalisthenics" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
          <a href="https://youtube.com/@evlovemmacalisthenics" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
        </div>

      </div>

      <div className={styles.divider} />

      {/* GRID */}
      <div className={styles.content}>
{/* 
        <div>
          <h4>About</h4>
          <p>
            Evolve MMA & Calisthenics is a performance-driven training facility
            focused on building real strength, discipline, and long-term fitness.
          </p>

          <button
            className={styles.joinBtn}
            onClick={handleWhatsAppClick}
          >
            Book a Trial
          </button>
        </div> */}

        <div>
          <h4>Address</h4>
          <p>
            New Link Rd, Near Lower Malad Metro Station,<br/>
            Sunder Nagar, Malad West,<br/>
            Mumbai – 400064
          </p>
        </div>

        <div>
          <h4>Quick Links</h4>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/pages/programs">Programs</Link></li>
            <li><Link href="/pages/timings">Timings</Link></li>
            <li><Link href="/pages/coaches">Coaches</Link></li>
            <li><Link href="/pages/blog">Blog</Link></li>
            <li><Link href="/pages/aboutus">About</Link></li>
            <li><Link href="/pages/contactus">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4>Contact</h4>
          <p>+91 8850957882</p>
          <p>+91 9552596315</p>
          <p>evolvemmaandcalisthenics@gmail.com</p>
          <p><strong>Hours:</strong> 6:00 AM – 10:00 PM</p>
        </div>

      </div>

      {/* BOTTOM */}
      <div className={styles.bottom}>
        © {new Date().getFullYear()} Evolve MMA & Calisthenics. All rights reserved.
      </div>

    </footer>
  );
}
