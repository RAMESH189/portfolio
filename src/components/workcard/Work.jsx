import React from 'react'
import "./workcard.css"
import WorkCard from './WorkCard'
import WorkCardData from './WorkCardData'

export default function Work() {
  return (
      <div className="workcard-container">
        <h1 className="project-heading">Projects</h1>
        <div className="project-container">
        {
          WorkCardData.map((project, index) => (
            <WorkCard
              img={project.imgsrc}
              desc={project.description}
              title={project.title}
              view={project.viewUrl}
              source={project.sourceUrl}
            />
          ))
          }
        </div>
      </div>
  )
}
