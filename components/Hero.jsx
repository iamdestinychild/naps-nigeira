"use client"

import Image from "next/image";
import styles from "../styles/hero.module.css";
import heroImage from "../public/assets/images/theme.gif";
// import heroImage from "../public/assets/images/theme.gif";
import ArrowRight from "@/icons/ArrowRight";
import { useState } from "react";

function Hero() {

  const [heroForm, setHeroForm] = useState('')

  const SubmitEmail = () => {
    
  }

  return (
    <div className={styles.hero}>
      <Image
        src={heroImage}
        alt="Naps Nigeria hero image"
        className={styles.heroImage}
      />

      <div className={styles.container}></div>

      <div className={styles.heroContents}>
        <h1>National Association Of Physics Students Nigeria</h1>
        <p>Join Our News Letter</p>
        <div className={styles.heroNewsLetter}>
          <input type="text" placeholder='example@email.com' />
          <ArrowRight iconClass={styles.heroArrow} iconFunction={SubmitEmail}/>
        </div>
      </div>
    </div>
  );
}

export default Hero;
