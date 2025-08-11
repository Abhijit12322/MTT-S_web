'use client';

import Footer from '../app/component/footer' ;
import styles from '../app/component/main.module.css';
import Head  from 'next/head';
import SliderHead from '../app/utlis/slider';
import Navbar from '../app/component/header';
import Impact from '../app/utlis/impact';


import Image from 'next/image';
import mttsdu from '../app/pictures/mttsdb.png';
import mtts from '../app/pictures/mtts.png';
import mtts1 from '../app/pictures/mtts1.png';
import mttslogo from '../app/pictures/mttsdblogo.jpg';
import mttsaugration from '../app/pictures/mttsinaugration.png';
import branch_line_coupler from '../app/pictures/Branch_line_coupler.png';
import significance from '../app/pictures/significance.png';
import maxwell from '../app/pictures/Maxwell to 5G.png';






import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons';


import { libre_baskerville, oswald} from '../app/utlis/font';
import { roboto} from '../app/utlis/font';
import { useState, ChangeEvent, FormEvent } from 'react';



import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";






export default function Home() {





  const cardData = [
    {
      title: "Significance of Semiconductor Industry for an Aspiring Nation",
      description: " On the 16th of September 2024, an exciting virtual session on From Maxwell to 5G: The Evolution of Wireless Communication was conducted by IEEE MTT-S SBC Dibrugarh University from 6:30 PM to 8:00 PM (IST). ",
      date: "September 16, 2024",
      buttonText: "Read more",
      href: "https://events.vtools.ieee.org/m/434492",
      imageSrc: maxwell, 
    },
    {
      title: "Significance of Semiconductor Industry for an Aspiring Nation",
      description: " The IEEE MTT-S Dibrugarh University Student Branch Chapter hosted an engaging offline event featuring Mr. Bhaskar Hazarika, a former Product Engineer at Micron Technology, who delivered a session on Significance of Semiconductor Industry for an Aspiring Nation from 10:45 AM to 12:00 PM (IST).",
      date: "August 30, 2024",
      buttonText: "Read more",
      href: "https://events.vtools.ieee.org/m/432142",
      imageSrc: significance, 
    },
    {
      title: "Branch-Line Coupler-The Smallest Beamforming Network",
      description:
        "The IEEE MTT Student Branch Chapter Dibrugarh University conducted an enlightening virtual session on Branch Line Couplers  from 6:00 PM to 7:30 PM (IST). The session attracted a wide audience, including all members of the Chapter and students from the university. ",
      date: "April 23, 2024",
      buttonText: "Read more",
      href: "https://events.vtools.ieee.org/m/418146",
      imageSrc: branch_line_coupler, 
    },
    {
      title: "Grand Inauguration OF IEEE Microwave Theory and Techniques Society (MTT-S)",
      description:
        "Exciting Announcement! We are thrilled to share the exciting news of the establishment of the MTT chapter at IEEE Dibrugarh University Student Branch! Join us as we embark on a journey into the captivating realm of microwave engineering.",
      date: "March 1, 2024",
      href: "https://events.vtools.ieee.org/m/411295",
      buttonText: "Read more",
      imageSrc: mttsaugration, 
    },
  ];









  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,          
    autoplaySpeed: 4000,
  };

const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    subject: '',
});

const [errors, setErrors] = useState<{ [key: string]: string }>({});

const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues(prev => ({ ...prev, [name]: value }));
};

const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

      if (!formValues.name) newErrors.name = 'Name is required.';
     
      if (!formValues.email) {
        newErrors.email = 'Email is required.';
      } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
        newErrors.email = 'Email is invalid.';
      }

      if (!formValues.phone) {
        newErrors.phone = 'Phone number is required.';
      } else if (formValues.phone.length < 10 || formValues.phone.length > 15) {
        newErrors.phone = 'Phone number must be between 10 and 15 digits.';
      }

      if(!formValues.subject) newErrors.subject =' Subject is required.';

      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
   };

    const handleSubmit = (e: FormEvent) => {
      e.preventDefault();
      if (validateForm()) {
        const { name, email, phone, address, subject } = formValues;
        const message = `Hi, myself ${name}.\n\nEmail: ${email}.\nPhone: ${phone}\nAddress: ${address}.\n\nI would like to donate ${subject} for the children through your NGO.`;
        const whatsappLink = `https://wa.me/8617735947?text=${encodeURIComponent(message)}`;
        window.open(whatsappLink, '_blank');
      }
    };


  return (
    <>
  <Head>
    <title>MTT-S Dibrugarh University Student Chapter</title>
    <meta name="description" content="Welcome to MTT-S" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <link rel="icon" href= '../pictures/mttsdblogo.png' />
  </Head>

    
  <main>
  <Navbar/>


  <SliderHead/> 

   

    <div className={styles.mtts}>
     <div className={styles.divisionmtts}>
      <h1 className={styles.head2}><span className={oswald.className}> About MTT-S </span></h1>
      <p className={styles.paramtts}>The IEEE Microwave Theory and Techniques Society (MTT-S) is a leading organization dedicated to the advancement of microwave and radio-frequency technologies. With a focus on fostering innovation, research, and collaboration, MTT-S serves as a hub for professionals and academics engaged in the field. Through conferences, publications, and technical committees, MTT-S provides a platform for the exchange of ideas, cutting-edge research, and the development of standards that shape the future of microwave theory. Members of MTT-S contribute to the progress of wireless communication, radar systems, medical imaging, and other critical applications. As a key player in the IEEE community, MTT-S continues to drive advancements that have a profound impact on the technological landscape.</p>
     </div>
     <div className={styles.divisionmtts1}>
      <Image src={mtts} className={styles.imagingmtts} alt="image"/>
     </div>
    </div>

    <div className={styles.mtts1}>
     <div className={styles.divisionmtts11}>
      <Image src={mtts1} className={styles.imagingmtts11} alt="image"/>
     </div>
     <div className={styles.divisionmtts11}>
      <p className={styles.paramtts1}>The fields of interest of MTT-S span science and engineering, and include theory, concepts, and techniques as well as the processing, interpretation, and dissemination of this information. The IEEE Microwave Theory and Techniques Society (MTT-S) covers a broad spectrum of fields within the realm of microwave and radio-frequency technologies. Some key areas of interest for MTT-S include:</p>
      <ul className={styles.board1}>
         <li>- Microwave Theory and Techniques</li> 
         <li>- Antennas and Propagation</li>   
         <li>- RF/Microwave Integrated Circuits</li>
         <li>- Microwave Systems</li>
         <li>- Microwave Measurements</li>
         <li>- Wireless Technologies</li>
         <li>- Microwave Photonics</li>
         <li>- Biomedical Applications</li>
         <li>- Radar & Sensing Systems</li>
         <li>- Terahertz Technologies</li>
      </ul>
      <button className={styles.knowmorebutton}><Link href="https://mtt.org/" target={"_blank"}>Know more</Link></button>
     </div>
    </div>







    <div className={styles.socialvideo}>
       <iframe width="1150" height="500" className={styles.social} src="https://www.youtube.com/embed/foyafX9VMV8?si=xMj1gnZW_VORoYE_" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
    </div>







    <div className={styles.mttsdu}>
     <div className={styles.divisionmttsdu}>
       <h1 className={styles.head2}><span className={oswald.className}> About IEEE DU SB MTT-S Chapter </span></h1>
       <p className={styles.paramttsdu}>An IEEE student chapter provides opportunities to meet and learn from fellow IEEE Student and Graduate Student Members and engage with professional IEEE members locally. We at Dibrugarh University, DUIET have begun IEEE MTT-S in 2024, with the same motto of enhancing and engaging our activities with professionals from various fields to improve our abilities under the broad umbrella of the Institute of Electrical and Electronics Engineers (IEEE).
         The IEEE MTT-S Student Chapter members are focusing on creating an interactive platform for young professionals such as academicians, scientists, technologists, and engineers to discuss, explore, and collaborate in the fields of Microwave and Technology using hands-on activities.
       </p>
       <button className={styles.knowmorebuttondu}><Link href={"/about"}>Know more</Link></button>
     </div>
     <div className={styles.divisionmttsdu1}>
      <Image src={mttsdu} className={styles.imaging} alt="image"/>
     </div>
    </div>







    <Slider {...settings} className={styles.acontainer}>
      <div className={styles.mcard}>
        <h2>Mission</h2>
        <p>
          Our MTT-S Society is committed to providing a platform that inspires and supports the global community of professionals, researchers, and enthusiasts in the pursuit of excellence in microwave technology, creating a platform for our students to showcase their unique interests. Together, we strive to push the boundaries of knowledge and contribute to the evolution of this dynamic field.
        </p>
      </div>
      <div className={styles.vcard}>
        <h2>Vision</h2>
        <p>
          We aspire to foster a dynamic community shaping the future of the field through innovation, education, and collaboration, inspiring the era of new minds embracing transformative advancements in Microwave Theory and Techniques.
        </p>
      </div>
    </Slider>









    <h1 className={styles.head}><span className={libre_baskerville.className}> Upcoming Event</span></h1>
    <div className={styles.newpara}> Updating soon...</div>












    <h1 className={styles.head}><span className={libre_baskerville.className}>Our Past Event </span></h1>
    <div className={styles.cardContainer}>
      {cardData.map((card, index) => (
        <div key={index} className={styles.card}>
           <Image src={card.imageSrc} alt={card.title} className={styles.image} />
          <h3 className={styles.title}>{card.title}</h3>
          <p className={styles.description}>{card.description}</p>
          <p className={styles.date}>{card.date}</p>
          <button className={styles.button}><Link key={index} href={card.href} passHref>  {card.buttonText}</Link></button>
        </div>
      ))}
    </div>

    <button className={styles.knowmorebuttonbox}><Link href={"/event"}>See all </Link></button>






    <Impact/>







    <div className={styles.box}>
      <h1 className={styles.head}><span className={libre_baskerville.className}>Join Us</span></h1>
      <p className={styles.paragraphbold}><strong>Join IEEE MTT-S Student Branch Chapter at Dibrugarh University!!</strong></p>
      <p className={styles.paragraph1}>Are you a student, researcher, educator, or industry professional with a passion for microwave technology? We invite you to become a member of the Dibrugarh University Chapter of the IEEE MTT-S.</p>
      <p className={styles.paragraph2}>• As a member, you will gain access to: A vibrant community of like-minded individuals who share your interest in microwave theory and techniques. Valuable resources such as technical workshops, guest lectures, and industry insights. Opportunities for professional growth and development through networking events, conferences, and project collaborations.</p>
      <p className={styles.paragraph2}>• By joining our chapter, you will: Contribute to the advancement of microwave technology through collaboration and innovation. Expand your knowledge and expertise by engaging with leading researchers and industry professionals. Gain valuable networking connections that can benefit your career development. We encourage you to join our chapter and become a part of this dynamic community!</p>
    </div>






    <div>
      <h1 className={styles.head}><span className={libre_baskerville.className}>Contact Us</span></h1>
      <p className={styles.contactparagraph}><span className={roboto.className}>To learn more about the IEEE MTT-S SB Chapter of Dibrugarh University and explore membership opportunities, please visit our website:<strong> <Link href="https://www.ieee.org/">https://www.ieee.org </Link> </strong> or contact us on mttsbcdibrugarhuniv@gmail.com.</span></p>
      <p className={styles.contactparagraph1}><span className={roboto.className}>Embrace the fascinating world of microwave theory and techniques! Join our chapter and collaborate with a passionate community to shape the future of this innovative field.</span></p>
    </div>
    <div className={styles.contactcontainer}>
            <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.formGroup}>
                    <label htmlFor="name">Name *</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formValues.name}
                        onChange={handleChange}
                        className={styles.input}
                    />
                    {errors.name && <p className={styles.error}>{errors.name}</p>}
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="email">Email *</label>
                    <input
                        type="type"
                        id="email"
                        name="email"
                        value={formValues.email}
                        onChange={handleChange}
                        className={styles.input}
                    />
                    {errors.email && <p className={styles.error}>{errors.email}</p>}
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="phone">Phone Number *</label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formValues.phone}
                        onChange={handleChange}
                        className={styles.input}
                    />
                    {errors.phone && <p className={styles.error}>{errors.phone}</p>}
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="address">Subject *</label>
                    <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formValues.subject}
                        onChange={handleChange}
                        className={styles.input}
                    />
                    {errors.subject && <p className={styles.error}>{errors.subject}</p>}
                </div>
                <div className={styles.formActions}>
                    <button type="submit" className={styles.donateButton}>Submit</button>
                </div>
            </form>
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1770.2808354037702!2d94.8910771!3d27.4517681!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3740bd4d93b30095%3A0xad8be1eab043a16f!2sDibrugarh%20University%20Institute%20Of%20Engineering%20And%20Technology!5e0!3m2!1sen!2sin!4v1724386883289!5m2!1sen!2sin" 
                    width="500" 
                    height="400"
                    style={{ border: 0}}
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade">
            </iframe>
      </div>
      







      <div className={styles.socialContainer}>
          <div className={styles.socialIcons}>
            <Link href="https://www.facebook.com/profile.php?id=61561967343178" legacyBehavior>
              <a target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebook} size="2x" />
              </a>
            </Link>

            <Link href="https://x.com/DuMttieee" legacyBehavior>
              <a target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faXTwitter} size="2x" />
              </a>
            </Link>

            <Link href="https://www.instagram.com/ieee_mtts.dibrugarh.university/" legacyBehavior>
            <a target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
            </Link>

            <Link href="https://www.linkedin.com/company/ieee-mtt-student-chapter-dibrugarh-university/" legacyBehavior>
              <a target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} size="2x"  />
              </a>
            </Link>
        </div>
      </div>
      

      <div className={styles.thank}>
        <p><strong>Thanking you for visiting us !!!</strong></p>
      </div>
  </main>    
  
  <Footer/>
  </>
  );
}
