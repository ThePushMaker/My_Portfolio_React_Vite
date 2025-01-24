import React from 'react'

import { routes } from '@/routes.js'
import ProjectItemCard from '@/components/Projects/ProjectItemCard/ProjectItemCard'

const ProjectsListGrid = ({ projects, category }) => {
  
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 text-[white]"> {/* grid */}
    {/* listado de proyectos */}
      {projects.map((project, index) => {
        const link = `${routes[category]}/${index+1}`
        return (
            // tarjeta de proyecto
            <ProjectItemCard
              key={index}
              {...project}
              link={link}
            />
          )
      })}
    </div>
  )
}

export default ProjectsListGrid;
