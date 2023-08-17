// components/ContactUs.tsx
import React from 'react';
import styles from '../styles/ContactUs.module.css';
import Image from 'next/image';

const ContactUs: React.FC = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.contactContent}>
          <div className={styles.contactImage}>
            <Image src="/contact-image.jpg" alt="Contact Us" layout="fill" objectFit="cover" quality={100} />
            <div className={styles.blurOverlay}></div>
          </div>
          <div className={styles.contactInfo}>
            <h1 className={styles.title}>Contact Us</h1>
            <p className={styles.description}>
              For inquiries, please contact us at <strong>info@yourhotel.com</strong> or call{' '}
              <strong>+1 (123) 456-7890</strong>.
            </p>
            <div className={styles.iconContainer}>
              <div className={styles.icon}>
                <Image src="/email.png" alt="Email Icon" width={40} height={40} />
              </div>
              <div className={styles.icon}>
                <Image src="/phone-call.png" alt="Phone Icon" width={40} height={40} />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ContactUs;
