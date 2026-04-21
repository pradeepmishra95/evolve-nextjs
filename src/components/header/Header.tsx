'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

import styles from './Header.module.css';
import { BOOK_TRIAL_PATH, GOOGLE_MAPS_URL } from '@/lib/links';

const menus = [
  { name: 'Home', path: '/' },
  { name: 'Programs', path: '/programs' },
  { name: 'Coaches', path: '/coaches' },
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
  const handleLogoClick = (event) => {
    closeMenu();

    if (pathname === '/') {
      event.preventDefault();
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    }
  };

  const isActive = (path) => {
    if (path === '/') {
      return pathname === '/';
    }

    if (path === '/aboutus') {
      return pathname === '/aboutus' || pathname.startsWith('/aboutus/');
    }

    return pathname === path || pathname.startsWith(`${path}/`);
  };

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <Link href="/" onClick={handleLogoClick} className={styles.logoLink}>
            <Image
              src="https://res.cloudinary.com/dd9yqqsa4/image/upload/v1771045740/logo_p9ooao.png"
              alt="Evolve MMA & Calisthenics"
              width={64}
              height={64}
              className={styles.logo}
              priority
            />
          </Link>

          <div className={styles.brandCopy}>
            <Link href="/" onClick={closeMenu} className={styles.brandNameLink}>
              <span className={styles.brandName}>Evolve MMA & Calisthenics</span>
            </Link>

            <a
              href={GOOGLE_MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.brandSub}
              aria-label="Open Evolve MMA & Calisthenics in Google Maps"
              title="Open in Google Maps"
            >
              <LocationIcon />
              Malad West, Mumbai
            </a>
          </div>
        </div>

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

          <Link
            href={BOOK_TRIAL_PATH}
            className={styles.cta}
            onClick={closeMenu}
            target="_blank"
            rel="noopener noreferrer"
          >
            Book A Trial
          </Link>
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
