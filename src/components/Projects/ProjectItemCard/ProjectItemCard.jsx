import { motion } from "framer-motion"

import ProjectImage from "@/components/Projects/ProjectImage/ProjectImage"
import imgSkillsJson from '@/data/skills/skills.json';
import "@/components/Projects/ProjectItemCard/ProjectItemCard.css"

const ProjectItemCard = ( {title, main_technologies, disciplines_covered, description, imgPath} ) => {
  const mainTechnologies = main_technologies;
  
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
          
          {/* {main_technologies.map((technology, index) => {
        // Busca el objeto correspondiente en el JSON
        const tech = technologyData.find(item => item.label === technology);
        
        return (
          <div key={index}>
            <img src={tech ? tech.img : ''} alt={technology} style={{ width: '30px', height: '30px' }} />
            {technology}
          </div>
        );
      })} */}
          

          {mainTechnologies && main_technologies.map((technology, index) => {
            <div key={index}>
              {technology}
            </div>
          })}
          
          {/* {imgSkillsJson.map((item, index) => (
            <div className='item w-14 h-14 mx-10' key={index}>
              <img src={item.img} alt={item.label} />
              <h5>
                  {item.label}
              </h5>
            </div>
          ))} */}
          
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