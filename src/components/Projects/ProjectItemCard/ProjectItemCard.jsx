import "./ProjectItemCard.css"
import { motion } from "framer-motion"

const ProjectItemCard = ( {title, description, imgPath} ) => {

  if(imgPath==''){
    imgPath='https://cdn3.tstatic.net/jualbeli/img/njajal/2019/8/-340082284.jpg'
  }
  
  const openProject = () => {
      console.log("click")
  }
  
  return (
    <motion.div animate={{scale: [0, 1]}} transition={{duration: 0.5}} className="mx-auto">
        <div className="proj-imgbx border-[1px] border-border_color2 flex hover:shadow-md hover:shadow-neon_color2 
          h-[270px]" 
          onClick={openProject}
        >
          <img src={imgPath} alt={title} 
            className="object-cover text-center w-screen h-full"
          />
          <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
          </div>
        </div>
    </motion.div>
      

  );
}

export default ProjectItemCard;