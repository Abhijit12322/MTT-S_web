import React from 'react';
import Link from 'next/link';


import styles from '../component/footer.module.css'; 

const Footer: React.FC = () => {
  return (
    <div className={styles.footer}>

      <div className={styles.footerlinks}>
        <Link href="/" className={styles.footerlinksname} legacyBehavior>HOME</Link>
        <span>|</span>
        <Link href="https://www.ieee.org/sitemap.html" className={styles.footerlinksname} target='_blank'>SITEMAP</Link>
        <span>|</span>
        <Link href="https://www.ieee.org/accessibility-statement.html" className={styles.footerlinksname} target='_blank'>ACCESSIBILITY</Link>
        <span>|</span>
        <Link href="https://www.ieee.org/about/corporate/governance/p9-26.html" className={styles.footerlinksname} target='_blank'>NONDISCRIMINATION POLICY</Link>
        <span>|</span>
        <Link href="https://secure.ethicspoint.com/domain/media/en/gui/20410/index.html" className={styles.footerlinksname} target='_blank'>IEEE ETHICS REPORTING</Link>
        <span>|</span>
        <Link href="https://www.ieee.org/about/help/site-terms-conditions.html" className={styles.footerlinksname} target='_blank'>TERMS AND CONDITIONS</Link>
        <span>|</span>
        <Link href="https://www.ieee.org/security-privacy.html" className={styles.footerlinksname} target='_blank'>IEEE PRIVACY POLICY</Link>
      </div>
      <div className={styles.footerbottom}>
        <p>
          © Copyright 2024 IEEE MTT-S DU Student Branch – All rights reserved. Use of this website signifies your agreement to the IEEE Terms and Conditions.
          A not-for-profit organization, IEEE is the world’s largest technical professional organization dedicated to advancing technology for the benefit of humanity.
        </p>
      </div>
     
    </div>
  );
};

export default Footer;
