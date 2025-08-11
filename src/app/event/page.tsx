import React from 'react';
import styles from '../component/event.module.css';
import Footer from '../component/footer';
import Link from 'next/link';
import Navbar from '../component/header1';


export default function EventList(){
  const events = [
    {
        date:"16 September 2024",
        location: "Trough Google Meet, India",
        title: "From Maxwell to 5G and Beyond: The Evolution of Wireless Communication",
        href: "https://events.vtools.ieee.org/m/434492",
    },
    {
        date:"30 August 2024",
        location: "Mini Conference Hall, DUIET",
        title: "Significance of Semiconductor Industry for an Aspiring Nation",
        href: "https://events.vtools.ieee.org/m/432142",
    },
    {
      date:"22 June 2024",
      location: "Vidya: The Living School, Dhemaji",
      title: "Outreach Activity for MTT-S SIGHT Proposal",
      href: "https://events.vtools.ieee.org/m/445624",
    },
    {
        date:"23 April 2024",
        location: "Trough Google Meet, India",
        title: "Branch-Line Coupler-The Smallest Beamforming Network",
        href: "https://events.vtools.ieee.org/m/418146",
    },
    {
      date: "01 March 2024",
      location: "Through Google Meet, India",
      title: "Grand Inauguration OF Microwave Theory and Techniques Society (MTT-S) at Dibrugarh University",
      href: "https://events.vtools.ieee.org/m/411295",
    },
  ];

  return (
    <>
    <Navbar/>
    <div className={styles.container}>
      <div className={styles.eventList}>
        {events.map((event, index) => (
        <Link key={index} href={event.href} passHref>  
          <div key={index} className={styles.eventCard}>
            <div className={styles.eventDate}>
              <span>{event.date}</span>
            </div>
            <div className={styles.eventLocation}>
              <span>{event.location}</span>
            </div>
            <div className={styles.eventTitle}>
              <h3>{event.title}</h3>
            </div>
          </div>
          </Link>
        ))}
      </div>
    </div>
    <Footer/>
    </>
  );
}

