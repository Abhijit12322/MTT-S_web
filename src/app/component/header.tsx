import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../pictures/mttsdblogo.png';
import styles from '../component/header.module.css';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Toggle the menu
  const handleToggle = () => setIsOpen((prev) => !prev);

  // Handle scroll effect for changing background color
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        {/* Logo */}
        <div className={styles.logoContainer}>
          <Link href="/" legacyBehavior>
            <a aria-label="MTTS Home">
              <Image
                src={logo}
                alt="MTTS Logo"
                width={150}
                height={50}
                priority
                className={styles.logo}
              />
            </a>
          </Link>
        </div>

        {/* Hamburger Button */}
        <button
          onClick={handleToggle}
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          className={`${styles.hamburgerButton} ${isOpen ? styles.open : ''}`}
        >
          <span className={styles.hamburgerLine}></span>
          <span className={styles.hamburgerLine}></span>
          <span className={styles.hamburgerLine}></span>
        </button>

        {/* Navigation Links */}
        <nav className={`${styles.nav} ${isOpen ? styles.navOpen : ''}`}>
          <ul className={styles.navLinks}>
            {[
              { href: '/', label: 'Home' },
              { href: '/event', label: 'Events' },
              { href: '/teammember', label: 'Team' },
              { href: '/gallery', label: 'Gallery' },
              { href: '/about', label: 'About' },
            ].map((link) => (
              <li key={link.href}>
                <Link href={link.href} legacyBehavior>
                  <a className={styles.navLink}>{link.label}</a>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
