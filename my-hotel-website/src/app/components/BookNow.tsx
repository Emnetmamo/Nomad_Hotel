"use client";
// components/BookNow.tsx
import React, { useState } from 'react';
import styles from '../styles/BookNow.module.css';
import Image from 'next/image';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BookNow: React.FC = () => {
  const [formData, setFormData] = useState({
    checkIn: '',
    checkOut: '',
    guests: 1,
    name: '',
    email: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3001/api/bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success('Booking successful!', { position: 'top-center', autoClose: 3000 });
       
      } else {
        console.error('Booking failed');
      }
    } catch (error) {
      console.error('Error submitting booking:', error);
    }
  };

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.bookingContent}>
          <div className={styles.bookingImage}>
            <Image src="/booking-image.jpg" alt="Book Now" layout="fill" objectFit="cover" quality={100} />
            <div className={styles.overlay}></div>
          </div>
          <div className={styles.bookingForm}>
            <h1 className={styles.title}>Book Now</h1>
            <form className={styles.form} onSubmit={handleSubmit}>
              <label htmlFor="checkIn">Check-In Date</label>
              <input
                type="date"
                id="checkIn"
                name="checkIn"
                value={formData.checkIn}
                onChange={handleInputChange}
                required
              />

              <label htmlFor="checkOut">Check-Out Date</label>
              <input
                type="date"
                id="checkOut"
                name="checkOut"
                value={formData.checkOut}
                onChange={handleInputChange}
                required
              />

              <label htmlFor="guests">Number of Guests</label>
              <input
                type="number"
                id="guests"
                name="guests"
                min="1"
                value={formData.guests}
                onChange={handleInputChange}
                required
              />

              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />

              <label htmlFor="email">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />

              <button type="submit" className={styles.submitButton}>
                Submit
              </button>
            </form>
          </div>
        </div>
      </main>
      <ToastContainer />
    </div>
  );
};

export default BookNow;
