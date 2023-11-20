import React from "react";
import "./workcard.css";
import { NavLink } from "react-router-dom";

export default function WorkCard({title, desc, view, source, img}) {
  return (
    <div className="project-card">
      <img src={img} alt="project-1" />
      <h2 className="project-title">{title}</h2>
      <div className="project-desc">
        <p>{desc}</p>
        <div className="card-buttons">
          <NavLink to={view} className="btn">
            View
          </NavLink>
          <NavLink to={source} className="btn">
            Source
          </NavLink>
        </div>
      </div>
    </div>
  );
}
