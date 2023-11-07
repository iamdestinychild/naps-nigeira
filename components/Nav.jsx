"use client"

import styles from "../styles/nav.module.css";
import Image from "next/image";
// import Link from 'next/link'
import logo from "../public/assets/images/naps-logo.png";
import Bars from "../icons/Bars";
import Cancel from "../icons/Cancel";
import { useState } from "react";

function Nav() {

  const [showMenu, setShowMenu] = useState(false)

  const toggleMenu = ()=> {
    setShowMenu((prevShowMenu) => !prevShowMenu)
  }

  return (
    <>
      <div className={styles.webNav}>
        <Image src={logo} alt="Naps Nigeria" className={styles.webNavLogo} />

        <div className={styles.webNavLinkContainer}>
          <a href="#">Home</a>
          <a href="#">Events</a>
          <a href="#">Gallery</a>
          <a href="#">Lectures</a>
          <a href="#">About Us</a>
        </div>

        <a href="#" className={styles.webNavContact}>
          Contact Us
        </a>

        <Bars iconclass={styles.navBars} iconFucntion={toggleMenu} />
      </div>

      {
      showMenu && (
      <div className={styles.mobileNav}>
        <div className={styles.logoCancel}>
          <Image
            src={logo}
            alt="National association of physics students Nigeria"
            className={styles.mobileNavLogo}
          />
          <Cancel iconclass={styles.navClose} iconFunction={toggleMenu} />
        </div>

        <div className={styles.mobileNavContainer}>
          <div className={styles.mobileNavLinkContainer}>
            <a href="#">Home</a>
            <a href="#">Events</a>
            <a href="#">About Us</a>
          </div>

          <a href="#" className={styles.mobileNavContact}>
            Contact Us
          </a>
        </div>
          </div>
        )}
    </>
  );
}

export default Nav;
