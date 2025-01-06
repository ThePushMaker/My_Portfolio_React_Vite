import { motion } from "framer-motion"
import ProjectImage from "@/components/Projects/ProjectImage/ProjectImage"

import "@/components/Projects/ProjectItemCard/ProjectItemCard.css"

const ProjectItemCard = ( {title, main_technologies, disciplines_covered, description, imgPath} ) => {
  const TechnologiesArray = main_technologies ?Object.values(main_technologies) : [];
  
  return (
    <motion.div animate={{scale: [0, 1]}} transition={{duration: 0.5}} className="projectItemCard border-[1px] border-border_color2 ">
        <div className="proj-imgbx h-[17rem]">
          <ProjectImage 
            imgPath = { imgPath }
            title = { title }
          />
        </div>
        
        <div className="textContainer">
          <h4>{title}</h4>
          <h5>Tecnologías</h5>
          <h5>
            {TechnologiesArray.map((technology, index) => (
              <span key={index}>{technology}</span>
            ))}
          </h5>
          
          <span>
            {disciplines_covered}
          </span>
          <p>
            {description}
          </p>
        </div>
        
    </motion.div>
      

  );
}

export default ProjectItemCard;