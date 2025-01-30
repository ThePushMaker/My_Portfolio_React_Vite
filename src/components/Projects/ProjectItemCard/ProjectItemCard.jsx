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
    <motion.div
      animate={{scale: [0, 1]}} 
      transition={{duration: 0.5}}
      className="projectItemCard rounded-3xl p-6"
    >
      <Link to={link} className="flex w-full">
        {/* image carousel */}
        <div className='w-4/12 group'>
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
              {/* display project images */}
              {images.map((image, index) => (
                <div
                  key={index}
                  className="rounded-xl overflow-hidden border-[0.12rem] border-solid border-slate-300 group-hover:border-slate-500"
                >
                  <ProjectImage
                    imgPath = { image.path }
                    title = { title }
                  />
                </div>
              ))}
            </Carousel>
          )}
        </div>
          
        
        {/* text and icons */}
        <div className="text-left ml-[1.5rem] mx-[1rem] mx-6">
          {/* <h4 className="text-lg text-white font-bold mb-2">{'- '}{title}{' -'}</h4> */}
          <h4 className="text-lg text-white font-bold mb-2">{'- '}{title}</h4>
          
          {/* description */}
          <p className="text-mdsm h-[7.1rem] overflow-hidden text-ellipsis text-slate-300">
            {short_description}
          </p>
          
          <div>
            
            {/* display technology icons */}
            <div className="flex flex-wrap overflow-hidden justify-center h-auto">
              {technologies_used && technologies_used.map((technology, index) => {
                const tech = imgSkillsJson.find(item => item.label === technology);
                return (
                  <img key={index} src={tech ? tech.img : ''} alt={technology} className="flex-col w-7 h-7 rounded-sm mx-3 my-3" />
                )
              })}
            </div>
          </div>
          
          {/* disciplines */}
          <div className="pb-2">
                <ul className="flex mx-auto text-left list-disc list-inside">
                  {disciplines_covered && disciplines_covered.map((discipline, index) => (
                    <li key={index} className="text-mdsm py-0.5 mx-2">
                      <span className="text">
                        {discipline}
                      </span>
                    </li>
                  ))}
                </ul>
          </div>
          
          
         
          
        </div>
        
      </Link>
    </motion.div>

  );
}

export default ProjectItemCard;