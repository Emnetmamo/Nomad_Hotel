// components/OurRooms.tsx
import React from 'react';
import styles from '../styles/OurRooms.module.css';
import Image from 'next/image';

const roomData = [
  { id: 1, name: 'Deluxe Room', description: 'Spacious room with a stunning view.', image: '/room1.jpg' },
  { id: 2, name: 'Suite', description: 'Luxurious suite with premium amenities.', image: '/room2.jpg' },
  { id: 3, name: 'Family Suite', description: 'Perfect for families, spacious and comfortable.', image: '/room3.jpg' },
  { id: 4, name: 'Executive Suite', description: 'Elegant suite with a separate living area.', image: '/room4.jpg' },
  { id: 5, name: 'Presidential Suite', description: 'The epitome of luxury and sophistication.', image: '/room5.jpg' },
  { id: 6, name: 'Penthouse', description: 'A luxurious penthouse with panoramic views.', image: '/room6.jpg' },
];

const OurRooms: React.FC = () => {
  return (
    <div className={styles.roomCards}>
    <h1 className={styles.roomTitle}>Our Rooms</h1>
      {roomData.map((room) => (
        <div key={room.id} className={styles.roomCard}>
          <div className={styles.cardImage}>
            <Image src={room.image} alt={room.name} width={300} height={200} />
          </div>
          <div className={styles.cardContent}>
            <h2>{room.name}</h2>
            <p>{room.description}</p>
            <button className={styles.exploreButton}>Explore</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OurRooms;
