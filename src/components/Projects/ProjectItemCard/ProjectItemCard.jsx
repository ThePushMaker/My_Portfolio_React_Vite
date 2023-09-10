import "./ProjectItemCard.css"
import { motion } from "framer-motion"

const ProjectItemCard = ( {title, description, imgPath} ) => {

  if(imgPath==''){
    imgPath='https://wordpress.calderonworks.pro/wordpress/wp-content/uploads/2023/09/404.png'
  }
  
  const openProject = () => {
      console.log("click")
  }
  
  return (
    <motion.div animate={{scale: [0, 1]}} transition={{duration: 0.5}} className="mx-auto">
      <a>
        <div className="proj-imgbx flex shadow-md shadow-neon_color1 hover:shadow-large1 hover:shadow-neon_color2 
          max-h-[280px]
          md:max-h-[210px]
          lg:max-h-[260px]" 
          onClick={openProject}
        >
          <img src={imgPath} alt={title} 
            className="text-center min-h-[280px] md:min-h-[250px] lg:min-h-[300px]"
          />
          <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
          </div>
        </div>
      </a>
    </motion.div>
      

  );
}

export default ProjectItemCard;