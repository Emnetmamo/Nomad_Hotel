// components/AboutUs.tsx
import React from 'react';
import styles from '../styles/AboutUs.module.css';
import Image from 'next/image';

const AboutUs: React.FC = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.aboutContent}>
          <div className={styles.aboutImage}>
            <Image src="/hotel-team.jpg" alt="Hotel Team" width={800} height={500} />
          </div>
          <div className={styles.aboutText}>
            <h1 className={styles.title}>About Us</h1>
            <p>
              Welcome to Nomads Hotel, where luxury meets comfort. Our dedicated team is committed to providing you with an
              unforgettable experience during your stay. We take pride in offering top-notch services and ensuring every detail
              exceeds your expectations.
            </p>
            <p>
              Explore our beautifully designed rooms, indulge in exquisite dining, and enjoy the warmth of our hospitality. At
              Nomads Hotel, we strive to create a home away from home for our guests, making your stay truly special.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AboutUs;
