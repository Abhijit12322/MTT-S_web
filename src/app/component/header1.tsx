'use client'
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from '../component/header1.module.css'; // Importing CSS module

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleToggle = () => setIsOpen(!isOpen);


  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
    

        <button
          onClick={handleToggle}
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isOpen}
          className={`${styles.hamburgerButton} ${isOpen ? styles.open : ''}`}
        >
          <span className={styles.hamburgerLine}></span>
          <span className={styles.hamburgerLine}></span>
          <span className={styles.hamburgerLine}></span>
        </button>

       
        <nav className={`${styles.nav} ${isOpen ? styles.navOpen : ''}`}>
          <ul className={styles.navLinks}>
            {[
              { href: '/', label: 'HOME' },
              { href: '/event', label: 'EVENTS' },
              { href: '/teammember', label: 'TEAM' },
              { href: '/gallery', label: 'GALLERY' },
              { href: '/about', label: 'ABOUT' },
            ].map((link) => (
              <li key={link.href}>
                <Link href={link.href} className={styles.navLink}>
                  {link.label}
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
