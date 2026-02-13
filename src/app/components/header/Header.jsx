'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './Header.module.css';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogoClick = () => {
    router.push('/');
    window.scrollTo(0, 0);
  };

  const handleWhatsAppClick = () => {
    window.open(
      'https://wa.me/918850957882?text=Hi!%20I%20want%20to%20book%20a%20trial',
      '_blank'
    );
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <img
          src="/images/logo.png"
          alt="Logo"
          className={styles.logo}
          onClick={handleLogoClick}
        />
      </div>

     <div className={styles.center}>
  <ul
    className={`${styles.menu} ${menuOpen ? styles.active : ''}`}
  >
    <li onClick={closeMenu}><Link href="/">HOME</Link></li>
    <li onClick={closeMenu}><Link href="/pages/programs">PROGRAMS</Link></li>
    <li onClick={closeMenu}><Link href="/pages/timings">TIMINGS</Link></li>
    <li onClick={closeMenu}><Link href="/pages/coaches">COACHES</Link></li>
    <li onClick={closeMenu}><Link href="/pages/blog">BLOG</Link></li>
    <li onClick={closeMenu}><Link href="/pages/aboutus">ABOUT US</Link></li>
    <li onClick={closeMenu}><Link href="/pages/contactus">CONTACT US</Link></li>
  </ul>
</div>


      <div className={styles.right}>
        <button className={styles.joinBtn} onClick={handleWhatsAppClick}>
          Book A Free Trial
        </button>

        {/* Hamburger */}
        <div className={styles.hamburger} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
}
