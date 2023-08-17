// pages/index.tsx
import React, { useState } from 'react';
import Head from 'next/head';
import styles from './styles/Home.module.css';
import Home from './components/Home';
import OurRooms from './components/OurRooms';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import BookNow from './components/BookNow';


const Index: React.FC = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Nomad Hotel</title>
        <meta name="description" content="Your hotel description goes here." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Home Page */}
      <Home />

       {/* About Us Page */}
       <AboutUs />

      {/* Our Rooms Page */}
      <OurRooms />

      {/* Book Now Page */}
      <BookNow />
      
     

      {/* Contact Us Page */}
      <ContactUs />

     
    </div>
  );
};

export default Index;
