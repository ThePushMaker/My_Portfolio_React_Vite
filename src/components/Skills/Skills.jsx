import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from '../../assets/img/color-sharp.png';
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
import './Skills.css';

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 7,
    partialVisibilityGutter: 40
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 7,
    partialVisibilityGutter: 40
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 4,
    partialVisibilityGutter: 30
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 3,
    partialVisibilityGutter: 30
  }
};

const skills_description = 
  <span className='text-lg'>
    Over the course of more than 8 years of studying programming since my high school days,
    I have learned to work with a diverse range of technologies. Nevertheless, I have particularly
    focused on honing my skills and <span className="text-highlighted_text_color"><strong>specializing in React, Laravel, and Vue.Js</strong></span>, regarding them as
    my primary areas of expertise.
  </span>
;

const Skills = () => {
  
  const images = [
    {
      id: 1,
      src: meter1,
      alt: "First Slide"
    },
    {
      id: 2,
      src: meter2,
      alt: "Second Slide"
    },
    {
      id: 3,
      src: meter3,
      alt: "Third Slide"
    }
  ]

  return(
    <>
      <section className='skill' id='skills'>
        <div className='container px-4 md:px-14 lg:px-20 mx-auto'>
          <div className='m-auto'>
            <div className='skill-bx px-[28px] py-6 md:py-[50px] md:px-[40px] lg:px-[60px] shadow-2xl'>
              <h2>Skills</h2>
              <p className='text-start text-sm md:text-[18px] mt-[14px] mb-6 md:mb-8 lg:mb-[70px]'> 
                {skills_description} 
              </p>
            
            <Carousel
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
              <div className='item'>
                <img src={meter1} alt="React" />
                <h5>React</h5>
              </div>
              <div className='item'>
                <img src={meter2} alt="Laravel" />
                <h5>Laravel</h5>
              </div>
              <div className='item'>
                <img src={meter3} alt="Vue.Js" />
                <h5>Vue.Js</h5>
              </div>
              <div className='item'>
                <img src={meter4} alt="Javascript" />
                <h5>Javascript</h5>
              </div>
              <div className='item'>
                <img src={meter5} alt="PHP" />
                <h5>PHP</h5>
              </div>
              <div className='item'>
              <img src={meter6} alt="Node.Js" />
                <h5>Node.Js</h5>
              </div>
              <div className='item'>
                <img src={meter7} alt="Tailwind" />
                <h5>Tailwind</h5>
              </div>
              <div className='item'>
                <img src={meter8} alt="Bootstrap" />
                <h5>Bootstrap</h5>
              </div>
              <div className='item'>
                <img src={meter9} alt="Wordpress" />
                <h5>Wordpress</h5>
              </div>
              <div className='item'>
                <img src={meter10} alt="MySQL" />
                <h5>MySQL</h5>
              </div>
              <div className='item'>
                <img src={meter11} alt="CSS3" />
                <h5>CSS3</h5>
              </div>
              <div className='item'>
                <img src={meter12} alt="HTML5" />
                <h5>HTML5</h5>
              </div>
              <div className='item'>
                <img src={meter13} alt="Wireframes & Mockups" />
                <h5>Wireframes & Mockups</h5>
              </div>
              <div className='item'>
                <img src={meter14} alt="English & Spanish" />
                <h5>English & Spanish</h5>
              </div>
            </Carousel>
            {/* <Carousel controls="true">
              {images.map(imageSlide => (
                  <div key={imageSlide.id}>
                    <a href="/">
                      <img src={imageSlide.src} className="img-fluid w-100" alt={imageSlide.alt} />
                    </a>
                  </div>
              ))}
            </Carousel> */}
            
            
            </div>
          </div>
        </div>
        <img className='background-image-left opacity-50' src={colorSharp} alt="ImageBackground" />
      </section>

    
    
    
      
    </>
  );
}

export default Skills;