import React from 'react'
import ProjectItemCard from '../ProjectItemCard/ProjectItemCard'
import { Link } from 'react-router-dom'

const ProjectsListGrid = ({ projects, category }) => {
  return (
    <div
      className="grid grid-cols-1 gap-6
      md:grid-cols-2 lg:grid-cols-3 text-[white]"
    >
      {projects.map((project, index) => {
        return (
            <React.Fragment key={index}>

              <Link to={`/projects/${category}/${index+1}`}>
                <ProjectItemCard 
                  {...project}
                />
              </Link>
    
            </React.Fragment>
          )
      })}
    </div>
  )
}

export default ProjectsListGrid;
