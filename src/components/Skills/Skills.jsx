// import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from '../../assets/img/color-sharp.png';
import './Skills.css';
import { useTranslation } from 'react-i18next';
import meter1 from '../../assets/img/skill_icons/react.png';
import meter2 from '../../assets/img/skill_icons/laravel.svg';
import meter3 from '../../assets/img/skill_icons/vue.png';
import meter4 from '../../assets/img/skill_icons/js.png';
import meter5 from '../../assets/img/skill_icons/php.png';
import meter6 from '../../assets/img/skill_icons/node.svg';
import meter7 from '../../assets/img/skill_icons/tw.png';
import meter8 from '../../assets/img/skill_icons/bootstrap.svg';
import meter9 from '../../assets/img/skill_icons/wp.svg';
import meter10 from '../../assets/img/skill_icons/sql.png';
import meter11 from '../../assets/img/skill_icons/css.png';
import meter12 from '../../assets/img/skill_icons/html.png';
import meter13 from '../../assets/img/skill_icons/figma.png';
import meter14 from '../../assets/img/skill_icons/languages.jpg';
import meter15 from '../../assets/img/skill_icons/electron.png';
import meter16 from '../../assets/img/skill_icons/git.png';
import meter17 from '../../assets/img/skill_icons/postman.png';
import meter18 from '../../assets/img/skill_icons/scrum.png';
import meter19 from '../../assets/img/skill_icons/photoshop.png';
import img_adobexd from '../../assets/img/skill_icons/adobexd.png';


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
  
  const imgCarousel = [
    {
      "img": meter1,
      "label": "React"
    },
    {
      "img": meter2,
      "label": "Laravel"
    },
    {
      "img": meter3,
      "label": "Vue.Js"
    },
    {
      "img": meter4,
      "label": "Javascript"
    },
    {
      "img": meter5,
      "label": "PHP"
    },
    {
      "img": meter6,
      "label": "Node.Js"
    },
    {
      "img": meter11,
      "label": "CSS3"
    },
    {
      "img": meter8,
      "label": "Bootstrap"
    },
    {
      "img": meter7,
      "label": "Tailwind CSS"
    },
    {
      "img": meter9,
      "label": "Wordpress"
    },
    {
      "img": meter10,
      "label": "MySQL"
    },
    {
      "img": meter12,
      "label": "HTML5"
    },
    {
      "img": meter13,
      "label": "Figma"
    },
    {
      "img": img_adobexd,
      "label": "Adobe XD"
    },
    {
      "img": meter14,
      "label": t('skills.english_spanish')
    },
    {
      "img": meter15,
      "label": "Electron"
    },
    {
      "img": meter16,
      "label": "Git"
    },
    {
      "img": meter17,
      "label": "Postman"
    },
    {
      "img": meter18,
      "label": "SCRUM"
    },
    {
      "img": meter19,
      "label": "Photoshop"
    }
  ]
  
  return(
    <>
      <section className='degradado3 pb-20' id='skills'>
        <div>
          <div className='skill'>
            <div className=' mx-auto px-3 md:px-14 lg:px-14 '>
              <div className='containerShadow1 skill-bx shadow-2xl pt-12 pb-16 px-[28px] md:py-[50px] md:px-[40px] lg:px-24'>
              <h2>
                <span className='emoji_size'>📚 </span>
                  {t(`skills.skills`)}
                <span className='emoji_size'> 📚</span>
              </h2>
                <p className='text-center w-[90%] md:w-5/6 mx-auto mt-[14px] mb-6 md:mb-8 lg:mb-[70px]'
              > 
                  {skills_description} 
                </p>
              
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
              {imgCarousel.map((item, index) => (
                <div className='item mx-10' key={index}>
                  <img src={item.img} alt={item.label} />
                  <h5>{item.label}</h5>
                </div>
              ))}         
              </div>
              
              </div>
            </div>
          </div>
          <img className='background-image-left opacity-50' src={colorSharp} alt="ImageBackground" />
        </div>
      </section>

    </>
  );
}

export default Skills;