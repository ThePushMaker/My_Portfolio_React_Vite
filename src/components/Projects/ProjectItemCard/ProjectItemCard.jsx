import "./ProjectItemCard.css"
import { motion } from "framer-motion"
import ProjectImage from "../ProjectImage/ProjectImage"

const ProjectItemCard = ( {title, main_technologies, description, imgPath} ) => {
  console.log(main_technologies)
  console.log(Array.isArray(main_technologies)); // Debería imprimir `true`
  
  const TechnologiesArray = main_technologies ?Object.values(main_technologies) : ["null"];
  
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
          <span>{description}</span>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias laudantium voluptate, in cumque assumenda perferendis aspernatur officia maxime tempore expedita, commodi vero nisi? Nam vero exercitationem fugit dicta voluptate inventore.
          </p>
        </div>
    </motion.div>
      

  );
}

export default ProjectItemCard;