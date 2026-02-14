'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import styles from './Header.module.css';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const menus = [
    { name: "HOME", path: "/" },
    { name: "PROGRAMS", path: "/pages/programs" },
    { name: "TIMINGS", path: "/pages/timings" },
    { name: "COACHES", path: "/pages/coaches" },
    { name: "BLOG", path: "/pages/blog" },
    { name: "ABOUT US", path: "/pages/aboutus" },
    { name: "CONTACT US", path: "/pages/contactus" },
  ];

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

  const isActive = (path) => {
    if (path === "/") return pathname === "/";
    return pathname.startsWith(path);
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
        <ul className={`${styles.menu} ${menuOpen ? styles.active : ''}`}>
          {menus.map((item) => (
            <li
              key={item.path}
              className={isActive(item.path) ? styles.activeLink : ""}
              onClick={closeMenu}
            >
              <Link href={item.path}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.right}>
        <button className={styles.joinBtn} onClick={handleWhatsAppClick}>
          Book A Free Trial
        </button>

        <div className={styles.hamburger} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
}
