// import Carousel from 'react-multi-carousel';
import { useTranslation } from 'react-i18next';

import CustomHeader from '@/components/UI/CustomHeader/CustomHeader';
// import 'react-multi-carousel/lib/styles.css';
import '@/components/Skills/Skills.css';
import imgSkillsJson from '@/data/skills/skills.json';

import colorSharp from '@/assets/img/color-sharp.png';

// const responsive = {
//   superLargeDesktop: {
//     // the naming can be any, depends on you.
//     breakpoint: { max: 4000, min: 3000 },
//     items: 7,
//     partialVisibilityGutter: 40
//   },
//   desktop: {
//     breakpoint: { max: 3000, min: 1024 },
//     items: 7,
//     partialVisibilityGutter: 40
//   },
//   tablet: {
//     breakpoint: { max: 1024, min: 464 },
//     items: 4,
//     partialVisibilityGutter: 30
//   },
//   mobile: {
//     breakpoint: { max: 464, min: 0 },
//     items: 3,
//     partialVisibilityGutter: 30
//   }
// };

const Skills = () => {
  const [ t ] = useTranslation("global");
  
  const skills_description = 
    <span>
      {t(`skills.description1`)}
      <strong className="text-highlighted_text_color">{t(`skills.description2`)}</strong>
      {t(`skills.description3`)}
      <strong className="text-highlighted_text_color">{t(`skills.description4`)}</strong>
      {t(`skills.description5`)}
      <strong className="text-highlighted_text_color">{t(`skills.description6`)}</strong>
      {'.'}
    </span>
  ;
  
  return(
    <>
      <section className='degradado3 pb-20' id='skills'>
          <div className='skill'>
            <div className=' mx-auto px-3 md:px-14 lg:px-14 '>
              <div className='containerShadow1 skill-bx shadow-2xl pt-12 pb-16 px-[28px] md:py-[50px] md:px-[40px] lg:px-24'>
                <CustomHeader
                  align='center'
                  emoji='📚'
                  text={t(`skills.skills`)}
                />
                  <p className='text-center w-[90%] md:w-5/6 mx-auto mt-[14px] mb-6 md:mb-8 lg:mb-[70px]'
                > 
                    {skills_description}
                  </p>
                
                {/* carrusel en desuso por impracticidad al tener que hacer click continuamente para ver todos los items*/}
                {/* <Carousel
                  additionalTransfrom={0}
                  arrows
                  autoPlay={true}
                  autoPlaySpeed={3000}
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
                    {imgCarousel.map((item, index) => (
                      <div className='item' key={index}>
                        <img src={item.img} alt={item.label} />
                        <h5>{item.label}</h5>
                      </div>
                    ))}
                </Carousel>      */}
                
                <div className='skills_grid skill-slider lg:mb-0'>
                
                  {imgSkillsJson.map((item, index) => (
                    <div className='item mx-10' key={index}>
                      <img src={item.img} alt={item.label} />
                      <h5>
                        {item.label.startsWith("t(")
                          ? t(item.label.slice(3, -2)) //extrae la clave dentro de t('...')
                          : item.label
                        }
                      </h5>
                    </div>
                  ))}
                </div>
              
              </div>
            </div>
          </div>
          <img className='background-image-left opacity-50' src={colorSharp} alt="ImageBackground" />
      </section>

    </>
  );
}

export default Skills;