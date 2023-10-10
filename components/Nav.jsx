"use client";

import Image from "next/image";
import { useState } from "react";

function Nav() {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  return (
    <nav className="nav">
      <div className="logo-cover">
        <Image
          src="/assets/images/naps-logo.png"
          className="nav-image"
          fill
          alt=""
        />
      </div>

      <ul className="nav-list">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About Us</a>
        </li>
        <li>
          <a href="#">Events</a>
        </li>
        <li>
          <a href="#">Contact Us</a>
        </li>
      </ul>

      <div onClick={toggleMenu} className="open-menu-cover">
        <Image
          src="/assets/icons/menu.svg"
          alt=""
          className="open-menu"
          fill
        />
      </div>

      {open && (
        <div className="nav-list-mobile">
          <div className="x-menu-cover">
            <Image
              src="/assets/icons/x.svg"
              onClick={toggleMenu}
              alt=""
              className="x-menu"
              fill
            />
          </div>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Events</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Nav;
