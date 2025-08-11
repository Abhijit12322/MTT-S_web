import styles from '../component/slider.module.css';
import Image from 'next/image';


import img1 from '../pictures/Simg1.jpg';
import img2 from '../pictures/img2.jpg';
import img3 from '../pictures/img3.jpg' ;

import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


export default function SliderHead(){
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,          
        autoplaySpeed: 4000,
      };
    return(

          <Slider {...settings} className={styles.headcontainer}>
            <div className={styles.sliderItem}>
               <Image src={img1} alt="image1" />
            </div>
            <div className={styles.sliderItem}>
               <Image src={img2} alt="image2" />
            </div>
            <div className={styles.sliderItem}>
              <Image src={img3} alt="image3" />
            </div>
          </Slider>

    );
}