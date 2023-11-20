import React, { useState } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

export default function Navbar() {
  // smaller screens
  const [toggled, setToggled] = useState(false);
  const toggleMenu = () => {
    setToggled(!toggled);
  };
  
  // to change navbar bg on scroll
  const [scroll, setScroll] = useState(false);
  const changeColorOnScroll = () => {
    if (window.scrollY >= 100) {
      setScroll(true);
    } else {
      setScroll(false)
    }
  }

  window.addEventListener('scroll', changeColorOnScroll)

  return (
    <div className={scroll ? 'nav-Header nav-Header-bg' : 'nav-Header'}>
      <Link to="/">
        <h1>Portfolio.</h1>
      </Link>
      <ul className={toggled ? 'nav-menu active': 'nav-menu'}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/project">Project</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <div className="nav-burger" onClick={toggleMenu}>
        {toggled ? (
          <IoClose size={20} style={{ color: "white" }} />
        ) : (
          <GiHamburgerMenu size={20} style={{ color: "white" }} />
        )}
      </div>
    </div>
  );
}
