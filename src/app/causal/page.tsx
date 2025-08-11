// components/Carousel.js
import { useState } from 'react';
import Image from 'next/image';
import styles from '../component/causal.module.css'; // Ensure this path is correct

// Import images properly
import img1 from '../pictures/Mandalsir.jpeg';
import img2 from '../pictures/Maxwell to 5G.png';
import img3 from '../pictures/Maxwell to 5G.png';

const images = [img1, img2, img3]; // Add more as needed

const Carousel = () => {
  const [items, setItems] = useState(images);

  const handleNext = () => {
    setItems((prev) => [...prev.slice(1), prev[0]]);
  };

  const handlePrev = () => {
    setItems((prev) => [prev[prev.length - 1], ...prev.slice(0, -1)]);
  };

  return (
    <div className={styles.container}>
      <div className={styles.slide}>
        {items.map((src, index) => (
          <div
            key={index}
            className={`${styles.item} ${index === 1 ? styles.activeItem : ''}`}
          >
            <Image
              src={src}
              alt={`Slide ${index + 1}`}
              layout="fill"
              objectFit="cover"
              className={styles.image}
            />
            {index === 1 && ( // Display content only on the active item
              <div className={styles.content}>
                <h2 className={styles.name}>LUNDEV</h2>
                <p className={styles.des}>
                  Tinh ru anh di chay pho, chua kip chay pho thi anh chay mat tieu
                </p>
                <button className={styles.button}>See more</button>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className={styles.buttons}>
        <button onClick={handlePrev} className={styles.navButton}>&lt;</button>
        <button onClick={handleNext} className={styles.navButton}>&gt;</button>
      </div>
    </div>
  );
};

export default Carousel;
