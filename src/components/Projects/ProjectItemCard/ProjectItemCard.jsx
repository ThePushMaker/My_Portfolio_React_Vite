import Carousel from 'react-multi-carousel';
import { motion } from "framer-motion"
import 'react-multi-carousel/lib/styles.css';
import { Link } from 'react-router-dom'

import ProjectImage from "@/components/Projects/ProjectImage/ProjectImage";
import imgSkillsJson from '@/data/skills/skills.json';
import "@/components/Projects/ProjectItemCard/ProjectItemCard.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
    partialVisibilityGutter: 40
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    partialVisibilityGutter: 40
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    partialVisibilityGutter: 30
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    partialVisibilityGutter: 30
  }
};

const ProjectItemCard = ( {title, technologies_used, disciplines_covered, short_description, images, link} ) => {
  console.log(images);
  
  
  return (
    <motion.div animate={{scale: [0, 1]}} transition={{duration: 0.5}} className="projectItemCard border-[1px] border-border_color2 ">
      <Link to={link}>
        {images && images.length > 0 && (
          <Carousel
            additionalTransfrom={0}
            arrows={false}
            autoPlay={true}
            autoPlaySpeed={6000}
            centerMode={false}
            className="owl-carousel owl-theme skill-slider pb-10 mb-4 lg:mb-0"
            dotListClass=""
            draggable={true}
            focusOnSelect={false}
            itemClass=""
            infinite={true}
            keyBoardControl={true}
            minimumTouchDrag={80}
            pauseOnHover
            renderArrowsWhenDisabled={false}
            renderButtonGroupOutside={false}
            renderDotsOutside={false}
            responsive={responsive}
            rewind={false}
            rtl={false}
            shouldResetAutoplay
            showDots={true}
            sliderClass=''
            slidesToSlide={1}
            swipeable={true}
            ssr={true} // means to render carousel on server-side.
            // customTransition="all"
            // transitionDuration={10}
            containerClass=""
          >
            {images.map((image, index) => (
              <div key={index} className="rounded-[2rem] overflow-hidden h-[17rem]">
                <ProjectImage
                  imgPath = { image.path }
                  title = { title }
                />
              </div>
            ))}
          </Carousel>
        )}
          
        
        {/* text */}
        <div className="text-left my-[1.5rem] mx-[1rem]">
          <h4 className="text-center text-[1.3rem] text-link_color font-bold">{'- '}{title}{' -'}</h4>
          
          <hr className="border-[1px] border-border_color2 my-3" />
          
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
          
          <hr className="border-[1px] border-border_color2 my-3" />
          
          <div>
            <h5 className="px-10 text-[1.11rem] text-center pb-3 text-highlighted_text_color font-bold">Descripción:</h5>
            <p className="text-[0.97rem] h-[7.1rem] overflow-hidden text-ellipsis">
              {short_description}
            </p>
          </div>
          
        </div>
        
      </Link>
    </motion.div>

  );
}

export default ProjectItemCard;