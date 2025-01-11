import { motion } from "framer-motion"

import ProjectImage from "@/components/Projects/ProjectImage/ProjectImage"
import imgSkillsJson from '@/data/skills/skills.json';
import "@/components/Projects/ProjectItemCard/ProjectItemCard.css"

const ProjectItemCard = ( {title, technologies_used, disciplines_covered, short_description, imgPath} ) => {
  
  return (
    <motion.div animate={{scale: [0, 1]}} transition={{duration: 0.5}} className="projectItemCard border-[1px] border-border_color2 ">
        <div className="rounded-[2rem] overflow-hidden h-[17rem]">
          <ProjectImage 
            imgPath = { imgPath }
            title = { title }
          />
        </div>
        
        {/* text */}
        <div className="text-left my-[1.5rem] mx-[1rem]">
          <h4 className="text-center text-[1.3rem] text-link_color font-bold">{'- '}{title}{' -'}</h4>
          
          <hr className="border-[1px] border-border_color1 my-3" />
          
          <div>
            <h5 className="px-10 text-[1.11rem] text-center pb-3 text-highlighted_text_color font-bold">Tecnologías:</h5>
            
            {/* display technology icons */}
            <div className="flex flex-wrap overflow-hidden justify-center h-auto">
              {technologies_used && technologies_used.map((technology, index) => {
                const tech = imgSkillsJson.find(item => item.label === technology);
                return (
                  <img key={index} src={tech ? tech.img : ''} alt={technology} className="flex-col w-12 h-12 rounded-lg mx-3 my-3" />
                )
              })}
            </div>
          </div>
          
          <div className="pb-2">
            <h5 className="px-10 text-[1.11rem] text-center pb-3 text-highlighted_text_color font-bold">Disciplinas:</h5>
              <div className="flex">
                <ul className="mx-auto text-left list-disc list-inside">
                  {disciplines_covered && disciplines_covered.map((discipline, index) => (
                    <li key={index} className="text-[1.12rem] py-0.5">
                      <span className="text">
                        {discipline}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
          </div>
          
          <hr className="border-[1px] border-border_color1 my-3" />
          
          <div>
            <h5 className="px-10 text-[1.11rem] text-center pb-3 text-highlighted_text_color font-bold">Descripción:</h5>
            <p className="text-[1.06rem] h-[6.1rem] overflow-hidden text-ellipsis">
              {short_description}
            </p>
          </div>
          
        </div>
        
    </motion.div>
      

  );
}

export default ProjectItemCard;