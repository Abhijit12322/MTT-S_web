import Footer from '../component/footer';
import styles from '../component/mttsdu.module.css';
import Navbar from '../component/header1';

import {lora,libre_baskerville} from '@/app/utlis/font';

import Image from 'next/image';
import mandal from '../pictures/Mandalsir.jpeg';
import gogoi from '../pictures/gogoi.jpg';
import pallab from '../pictures/pallab.jpg';
import anup from '../pictures/anup.jpg';
import maully from '../pictures/maully.jpg';
import anjita from '../pictures/anjita.jpg';
import kalpita from '../pictures/kalpita.jpg';
import abhinav from '../pictures/abhinav.jpg';
import abhijit from '../pictures/abhijit.jpg';
import hirak from '../pictures/hirak.png';
import nitisha from '../pictures/nitisha.jpg';
import paroj from '../pictures/paroj.jpg';
import risha from '../pictures/risha.jpg';
import amit from '../pictures/amit.jpg';
import arindam from '../pictures/arindam.jpg';
import prajukta from '../pictures/prajukta.jpg';
import migang from '../pictures/migang.jpg';
import deepjyoti from'../pictures/deepjyoti.jpg';
import kapil from '../pictures/kapil.jpg';
import souvik from '../pictures/souvik.jpg';
import anand from '../pictures/anand.jpg';
import bhaswat from '../pictures/bhaswat.jpg';
import tridip from '../pictures/tridip.jpg';


export default function Mttsdu(){
    return(
        <>

      <Navbar/>

      <div className={styles.cont}>


        <h1 className={styles.head}><span className={libre_baskerville.className}>Faculty Members and Advisors </span></h1>
        <div className={styles.membercontainer}>
          <div className={styles.imagecontainer}>
            <Image src={mandal} alt={'img'} className={styles.image}/>
            <h1 className={styles.heading}><strong>Dr. Haraprasad Mondal</strong></h1>
            <p className={styles.para}><span className={lora.className} >Chapter Advisor</span></p>
          </div>
          <div className={styles.imagecontainer}>
            <Image src={gogoi} alt={'img'} className={styles.image}/>
            <h1 className={styles.heading}><strong>Parishmita Gogoi</strong></h1>
            <p className={styles.para}><span className={lora.className} >Branch Counselor</span></p>
          </div>
          <div className={styles.aimagecontainer}>
            <Image src={pallab} alt={'img'} className={styles.image}/>
            <h1 className={styles.aheading}><strong>Pallab kr. Gogoi</strong></h1>
            <p className={styles.apara}><span className={lora.className} >Space Systems Engineering || TU Delft || RF || UNSDG 4|| IEEE</span></p>
          </div>
          <div className={styles.aimagecontainer}>
            <Image src={anup} alt={'img'} className={styles.image}/>
            <h1 className={styles.aheading}><strong>Anup Sharma</strong></h1>
            <p className={styles.apara}><span className={lora.className} >Distributed System @ Nutanix | GSoC @ Linux Perf Tool | LFX Mentee | LiFT Scholar</span></p>
          </div>
        </div>





        <h1 className={styles.head}><span className={libre_baskerville.className}> EX-COM Members </span></h1>
        <div className={styles.mmembercontainer}>
          <div className={styles.mimagecontainer}>
            <Image src={maully} alt={'img'} className={styles.mimage}/>
            <h1 className={styles.mheading}><strong>Maully Maloo</strong></h1>
            <p className={styles.mpara}><span className={lora.className} >Chairperson</span></p>
          </div>
          <div className={styles.mimagecontainer}>
            <Image src={anjita} alt={'img'} className={styles.mimage}/>
            <h1 className={styles.mheading}><strong>Anjita Gogoi</strong></h1>
            <p className={styles.mpara}><span className={lora.className} >Vice-Chairperson</span></p>
          </div>
          <div className={styles.mimagecontainer}>
            <Image src={kalpita} alt={'img'} className={styles.mimage}/>
            <h1 className={styles.mheading}><strong>Kalpita Dey</strong></h1>
            <p className={styles.mpara}><span className={lora.className} >Secretary</span></p>
          </div>
        </div>
        <div className={styles.m1membercontainer}>
          <div className={styles.mimagecontainer}>
            <Image src={abhinav} alt={'img'} className={styles.mimage}/>
            <h1 className={styles.mheading}><strong>Abhinav Kashyap</strong></h1>
            <p className={styles.mpara}><span className={lora.className} >Treasurer</span></p>
          </div>
          <div className={styles.mimagecontainer}>
            <Image src={abhijit} alt={'img'} className={styles.mimage}/>
            <h1 className={styles.mheading}><strong>Abhijit Chakraborty</strong></h1>
            <p className={styles.mpara}><span className={lora.className}>Webmaster</span></p>
          </div>
        </div>





        <h1 className={styles.head}><span className={libre_baskerville.className}> Members </span></h1>
        <div className={styles.nmembercontainer}>
          <div className={styles.nimagecontainer}>
            <Image src={hirak} alt={'img'} className={styles.nimage}/>
            <h1 className={styles.nheading}><strong>Hirak Jyoti Adhikari</strong></h1>
          </div>
          <div className={styles.nimagecontainer}>
            <Image src={nitisha} alt={'img'} className={styles.nimage}/>
            <h1 className={styles.nheading}><strong>Nitisha Goswami</strong></h1>
          </div>
          <div className={styles.nimagecontainer}>
            <Image src={paroj} alt={'img'} className={styles.nimage}/>
            <h1 className={styles.nheading}><strong>Paroj Pratim Saharia</strong></h1>
          </div>
          <div className={styles.nimagecontainer}>
            <Image src={risha} alt={'img'} className={styles.nimage}/>
            <h1 className={styles.nheading}><strong>Risha Dauka</strong></h1>
          </div>
          <div className={styles.nimagecontainer}>
            <Image src={amit} alt={'img'} className={styles.nimage}/>
            <h1 className={styles.nheading}><strong>Amit kalita</strong></h1>
          </div>
        </div>
        
        <div className={styles.nmembercontainer}>
          <div className={styles.nimagecontainer}>
            <Image src={prajukta} alt={'img'} className={styles.nimage}/>
            <h1 className={styles.nheading}><strong>Prajukta Deb</strong></h1>
           </div>
          <div className={styles.nimagecontainer}>
            <Image src={migang} alt={'img'} className={styles.nimage}/>
            <h1 className={styles.nheading}><strong>Migang Pegu</strong></h1>
          </div>
          <div className={styles.nimagecontainer}>
            <Image src={deepjyoti} alt={'img'} className={styles.nimage}/>
            <h1 className={styles.nheading}><strong>Deepjyoti Modak</strong></h1>
          </div>
          <div className={styles.nimagecontainer}>
            <Image src={kapil} alt={'img'} className={styles.nimage}/>
            <h1 className={styles.nheading}><strong>Kapil Azaan</strong></h1>
          </div>
          <div className={styles.nimagecontainer}>
            <Image src={souvik} alt={'img'} className={styles.nimage}/>
            <h1 className={styles.nheading}><strong>Souvik Ghosh</strong></h1>
          </div>
        </div>

        <div className={styles.nmembercontainer}>
          <div className={styles.nimagecontainer}>
            <Image src={bhaswat} alt={'img'} className={styles.nimage}/>
            <h1 className={styles.nheading}><strong>Bhaswat Kalita</strong></h1>
           </div>
          <div className={styles.nimagecontainer}>
            <Image src={tridip} alt={'img'} className={styles.nimage}/>
            <h1 className={styles.nheading}><strong>Tridip Sharma </strong></h1>
          </div>
          <div className={styles.nimagecontainer}>
            <Image src={arindam} alt={'img'} className={styles.nimage}/>
            <h1 className={styles.nheading}><strong>Arindam Bhattacharjya</strong></h1>
          </div>
          <div className={styles.nimagecontainer}>
            <Image src={anand} alt={'img'} className={styles.nimage}/>
            <h1 className={styles.nheading}><strong>Ananda Sharma</strong></h1>
          </div>
        </div>


      </div>


      
        
        <Footer/>
        </>
    );
}