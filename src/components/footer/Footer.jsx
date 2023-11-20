import React from "react";
import "./footer.css";
import { FaGithub , FaInstagram , FaLinkedin } from "react-icons/fa";
import { IoHomeSharp, IoCall, IoMail } from "react-icons/io5";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <IoHomeSharp size={20} style={{color: 'white', marginRight:'1.5rem'}} />
            <p>Plavrthala house Cheruthuruthy</p>
          </div>
          <div className="contact">
            <h4><IoCall size={20} style={{color: 'white', marginRight:'1.5rem'}}/>+91-7025107494</h4>
          </div>
          <div className="mail">
            <h4><IoMail size={20} style={{color: 'white', marginRight:'1.5rem'}}/>rameshrajendran5555@gmail.com</h4>
          </div>
        </div>
        <div className="right">
          <h4>About Me</h4>
          <p>My name is Ramesh P R, I'm a Front-end Developer. I have a passion for crafting clean, efficient code that drives results. As a strong team player, I excel in collaborative environments. I'm eager to contribute my expertise to drive innovation and deliver top-notch solutions."
</p>
          <div className="social">
            <NavLink to='https://github.com/RAMESH189'><FaGithub  size={30} style={{color: 'white', marginRight:'1rem'}} /></NavLink>
            <NavLink to='https://www.instagram.com/_ramesh_rajendran_/'><FaInstagram size={30} style={{ color: 'white', marginRight: '1rem' }} /></NavLink>
            <NavLink to='https://www.linkedin.com/in/ramesh-pr/'><FaLinkedin size={30} style={{color: 'white', marginRight:'1rem'}}/></NavLink>           
          </div>
        </div>
      </div>
    </div>
  );
}
