"use client";
import { useState } from "react";
import Footer from "../component/footer";
import Navbar from "../component/header1";
import Image from "next/image";
import styles from "../component/gallery.module.css";

// Import images
import img11 from '../pictures/gallery/img11.png';
import img12 from '../pictures/gallery/img12.png';
import img13 from '../pictures/gallery/img13.png';
import img14 from '../pictures/gallery/img14.png';
import img15 from '../pictures/gallery/img15.png';
import img16 from '../pictures/gallery/img16.png';
import img17 from '../pictures/gallery/img17.png';
import img18 from '../pictures/gallery/img18.png';
import img19 from '../pictures/gallery/img19.png';

import img21 from "../pictures/gallery/img21.png";
import img22 from "../pictures/gallery/img22.png";
import img23 from "../pictures/gallery/img23.png";

import img31 from '../pictures/gallery/img31.jpg';
import img32 from '../pictures/gallery/img32.jpg';
import img33 from '../pictures/gallery/img33.jpg';
import img34 from '../pictures/gallery/img34.jpg';
import img35 from '../pictures/gallery/img35.jpg';

import img41 from '../pictures/gallery/img41.png';
import img42 from '../pictures/gallery/img42.png';
import img43 from '../pictures/gallery/img43.png';
import img44 from '../pictures/gallery/img44.png';
import img45 from '../pictures/gallery/img45.png';
import img46 from '../pictures/gallery/img46.png';
import img47 from '../pictures/gallery/img47.png';

export default function Gallery() {
  const [zoomedImage, setZoomedImage] = useState<string | null>(null);

  const mtts1 = [
    img11,
    img12,
    img13,
    img14,
    img15,
    img16,
    img17,
    img18,
    img19,
  ];

  const mtts2 = [
    img21,
    img22,
    img23,
  ];  

  const mtts3 = [
    img31,
    img32,
    img33,
    img34,
    img35,
  ];

  const mtts4 = [
    img41,
    img42,
    img43,
    img44,
    img45,
    img46,
    img47,
  ];

  const handleImageClick = (imageSrc: string) => {
    setZoomedImage(imageSrc); // Set the image for zooming
  };

  const closeZoom = () => {
    setZoomedImage(null); // Close the zoom view
  };

  return (
    <>
      <Navbar />
      <div className={styles.container}>
      <h2 className={styles.heading}>From Maxwell to 5G and Beyond: The Evolution of Wireless Communication</h2>
            <div className={styles.imageGallery}>
            {mtts4.map((image, index) => (
               <Image key={index} src={image} alt={`Education Week ${index + 1}`} className={styles.image} onClick={() => handleImageClick(image.src)}/>
                 ))}
            </div>




        <h2 className={styles.heading}>Significance of Semiconductor Industry for an Aspiring Nation. </h2>
        <div className={styles.imageGallery}>
          {mtts3.map((image, index) => (
            <Image
              key={index}
              src={image}
              alt={`Education Week ${index + 1}`}
              className={styles.image}
              onClick={() => handleImageClick(image.src)}
            />
          ))}
        </div>

        <h2 className={styles.heading}>
          Branch-Line Coupler-The Smallest Beamforming Network
        </h2>
        <div className={styles.imageGallery}>
          {mtts2.map((image, index) => (
            <Image
              key={index}
              src={image}
              alt={`Education Week ${index + 1}`}
              className={styles.image}
              onClick={() => handleImageClick(image.src)}
            />
          ))}
        </div>

        <h2 className={styles.heading}>
          Grand Inauguration of IEEE Microwave Theory and Techniques Society
          (MTT-S)
        </h2>
        <div className={styles.imageGallery}>
          {mtts1.map((image, index) => (
            <Image
              key={index}
              src={image}
              alt={`Education Week ${index + 1}`}
              className={styles.image}
              onClick={() => handleImageClick(image.src)}
            />
          ))}
        </div>
      </div>

      {/* Zoom Modal */}
      {zoomedImage && (
        <div className={styles.modal} onClick={closeZoom}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeButton} onClick={closeZoom}>
              ×
            </button>
            <Image
              src={zoomedImage}
              alt="Zoomed Image"
              width={800}
              height={600}
              className={styles.zoomedImage}
            />
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}
