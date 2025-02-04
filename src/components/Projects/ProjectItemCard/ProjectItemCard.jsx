import Carousel from 'react-multi-carousel';
import { motion } from "framer-motion"
import 'react-multi-carousel/lib/styles.css';
import { Link } from 'react-router-dom'

import ProjectImage from "@/components/Projects/ProjectImage/ProjectImage";
import imgSkillsJson from '@/data/skills/skills.json';

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
  
  return (
    <motion.div
      animate={{scale: [0, 1]}}
      transition={{duration: 0.5}}
    >
    
      <Link to={link} className="projectItemCard rounded-3xl p-6 flex w-full flex-wrap md:flex-nowrap justify-center group">
        {/* image carousel */}
        <div className='w-full md:w-3/12 lg:w-4/12 group'>
          {images && images.length > 0 && (
            <Carousel
              additionalTransfrom={0}
              arrows={false}
              autoPlay={true}
              autoPlaySpeed={5500}
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
                <ProjectImage
                  imgPath = { image.path }
                  title = { title }
                  key={index}
                  classes="rounded-xl overflow-hidden border-[0.15rem] border-solid border-slate-600 group-hover:border-slate-500"
                />
              ))}
            </Carousel>
          )}
        </div>
          
        
        {/* text and icons */}
        <div className="text-left ml-0 md:ml-6">
          {/* <h4 className="text-lg text-white font-bold mb-2">{'- '}{title}{' -'}</h4> */}
          <h4 className="text-lg text-white font-bold mb-2 group-hover:text-link_color">{title}</h4>
          
          {/* description */}
          <p className="text-mdsm h-[7rem] overflow-hidden text-ellipsis text-slate-300 mb-1.5">{short_description}</p>
          
          <div>
            
            {/* display technologies used */}
            <div className="flex flex-wrap h-auto gap-y-2 gap-x-3 mb-1.5">
              {technologies_used && technologies_used.map((technologyName, index) => {
                // search for technology in imgSkillsJson.json
                const tech = imgSkillsJson.find(item => item.label === technologyName) || {};
                return (
                  // display technology icon and name
                  <div
                    className='flex md:flex-row items-center text-blue-300 rounded-xl px-2.5 py-1 border-[0.01rem] border-solid
                    border-blue-900 bg-blue-950'
                    key={index}
                  >
                    <img
                      className='rounded-sm w-5 h-[1.2rem] mx-auto mr-1.5'
                      src={tech ? tech.img : ''}
                      alt={technologyName}
                    />
                    <h5 className='text-xs lg:text-sm mt-1.5 md:mt-0'>
                      {/* extrae la clave dentro de t('...') y la traduce */}
                      {tech.label && tech.label.startsWith("t(")
                        ? t(tech.label.slice(3, -2)) //extrae la clave dentro de t('...')
                        : tech.label
                      }
                    </h5>
                  </div>
                );
              })}
            </div>
          </div>
          
        </div>
        
      </Link>
    </motion.div>

  );
}

export default ProjectItemCard;