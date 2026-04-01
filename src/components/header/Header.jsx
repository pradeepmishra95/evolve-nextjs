'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

import styles from './Header.module.css';
import { TRIAL_KIOSK_URL } from '@/lib/links';

const menus = [
  { name: 'Home', path: '/' },
  { name: 'Programs', path: '/programs' },
  { name: 'Timings', path: '/timings' },
  { name: 'About Us', path: '/aboutus' },
  { name: 'Contact', path: '/contactus' },
];

// ✅ Added Location Icon (only addition)
const LocationIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="16"
    height="16"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5z" />
  </svg>
);

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setMenuOpen(prev => !prev);
  const closeMenu = () => setMenuOpen(false);

  const isActive = (path) => {
    if (path === '/') {
      return pathname === '/';
    }

    if (path === '/aboutus') {
      return pathname === '/aboutus' || pathname.startsWith('/aboutus/') || pathname === '/coaches';
    }

    return pathname === path || pathname.startsWith(`${path}/`);
  };

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link href="/" onClick={closeMenu} className={styles.brand}>
          <Image
            src="https://res.cloudinary.com/dd9yqqsa4/image/upload/v1771045740/logo_p9ooao.png"
            alt="Evolve MMA & Calisthenics"
            width={64}
            height={64}
            className={styles.logo}
            priority
          />

          <div className={styles.brandCopy}>
            <span className={styles.brandName}>Evolve MMA & Calisthenics</span>

            {/* ✅ Only this line updated */}
            <span className={styles.brandSub}>
              <LocationIcon />
              Malad West, Mumbai
            </span>
          </div>
        </Link>

        <nav
          id="primary-navigation"
          className={`${styles.nav} ${menuOpen ? styles.navOpen : ''}`}
          aria-label="Primary"
        >
          <ul className={styles.menu}>
            {menus.map((item) => (
              <li key={item.path}>
                <Link
                  href={item.path}
                  onClick={closeMenu}
                  className={`${styles.link} ${
                    isActive(item.path) ? styles.activeLink : ''
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          <a
            href={TRIAL_KIOSK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.cta}
            onClick={closeMenu}
          >
            Book A Free Trial
          </a>
        </nav>

        <button
          type="button"
          className={styles.menuButton}
          onClick={toggleMenu}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        >
          <span />
          <span />
          <span />
        </button>

        {menuOpen ? (
          <button
            type="button"
            className={styles.backdrop}
            aria-label="Close navigation menu"
            onClick={closeMenu}
          />
        ) : null}
      </div>
    </header>
  );
}