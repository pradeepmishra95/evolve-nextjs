'use client';

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import styles from './Header.module.css';

export default function Header() {

  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const menus = [
    { name: "HOME", path: "/" },
    { name: "PROGRAMS", path: "/programs" },
    { name: "TIMINGS", path: "/timings" },
    { name: "COACHES", path: "/coaches" },
    { name: "BLOG", path: "/blog" },
    { name: "ABOUT US", path: "/aboutus" },
    { name: "CONTACT US", path: "/contactus" },
  ];

  const handleWhatsAppClick = () => {
    window.open(
      'https://wa.me/918850957882?text=Hi!%20I%20want%20to%20book%20a%20trial',
      '_blank'
    );
  };

  const toggleMenu = () => setMenuOpen(prev => !prev);
  const closeMenu = () => setMenuOpen(false);

  const isActive = (path) => {
    if (path === "/") return pathname === "/";
    return pathname === path || pathname.startsWith(path + "/");
  };

  return (
    <header className={styles.header}>

      {/* LEFT */}
      <div className={styles.left}>
        <Link href="/" onClick={closeMenu}>
          <img
            src="https://res.cloudinary.com/dd9yqqsa4/image/upload/v1771045740/logo_p9ooao.png"
            alt="Logo"
            className={styles.logo}
          />
        </Link>
      </div>

      {/* CENTER */}
      <nav className={styles.center}>
        <ul className={`${styles.menu} ${menuOpen ? styles.active : ''}`}>
          {menus.map((item) => (
            <li
              key={item.path}
              className={isActive(item.path) ? styles.activeLink : ""}
            >
              <Link href={item.path} onClick={closeMenu}>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* RIGHT */}
      <div className={styles.right}>
        <button
          className={styles.joinBtn}
          onClick={handleWhatsAppClick}
        >
          Book A Free Trial
        </button>

        <div className={styles.hamburger} onClick={toggleMenu}>
          <span />
          <span />
          <span />
        </div>
      </div>

    </header>
  );
}
