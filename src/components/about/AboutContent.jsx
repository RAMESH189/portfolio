import React from "react";
import "./aboutcontent.css";
import { Link } from "react-router-dom";
import topImage from "../../assets/react1.jpg";
import bottomImage from "../../assets/react2.webp";

export default function AboutContent() {
  return (
    <div className="about">
      <div className="about-left">
        <h1 className="about-leftHeading">About</h1>
        <p>
          Hi, I'm Ramesh P R, a dedicated Software Developer with 1 year of hands on experience in front-end developement and a bit of back end developement.
        </p>
        <Link to="/contact">
          <button className="btn">Contact</button>
        </Link>
      </div>
      <div className="about-right">
        <div className="about-image-container">
          <div className="about-image-stack top">
            <img src={topImage} className="img" alt="topimage" />
          </div>
          <div className="about-image-stack bottom">
            <img src={bottomImage} className="img" alt="bottomimage" />
          </div>
        </div>
      </div>
    </div>
  );
}
