import Footer from '../component/footer';
import styles from '../component/about.module.css';
import Navbar from '../component/header1';


export default function About(){
    return(
        <>
        <Navbar/>
        <div className={styles.container}>
        <p className={styles.para}>An IEEE student chapter provides opportunities to meet and learn from fellow IEEE Student and Graduate Student Members and engage with professional IEEE members locally. We at Dibrugarh University, DUIET have begun IEEE MTT-S in 2024, with the same motto of enhancing and engaging our activities with professionals from various fields to improve our abilities under the broad umbrella of the Institute of Electrical and Electronics Engineers (IEEE). The IEEE MTT-S Student Chapter members are focusing on creating an interactive platform for young professionals such as academicians, scientists, technologists, and engineers to discuss, explore, and collaborate in the fields of Microwave and Technology using hands-on activities.</p>
        <p className={styles.para}>IEEE Microwave Theory and Technology (MTT-S) membership offers several benefits for students interested in microwave and radio-frequency technologies. Some of the perks of becoming a member include exposure to industry trends, research opportunities, and career paths through interactions with experienced professionals and participation in chapter events.The hands-on activities organized by the chapter are designed to give students practical experience with microwave and RF systems. These activities range from designing and testing microwave circuits to exploring the applications of RF in telecommunications, radar systems, and satellite communications. The chapter also encourages participation in global IEEE MTT-S competitions, where students can showcase their projects, gain international recognition, and connect with peers from around the world.</p>
        </div>
        <Footer/>
        </>
    );
}