// components/Home.tsx
import React from 'react';
import styles from '../styles/Home.module.css';
import Image from 'next/image';

const Home: React.FC = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.heroContainer}>
          <Image src="/hotel-image.jpg" alt="Hotel Interior" width={1700} height={600} />
          <div className={styles.heroText}>
            <h1 className={styles.heroTitle}>Welcome to Nomads Hotel</h1>
            <p className={styles.heroDescription}>Experience luxury and comfort like never before.</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
