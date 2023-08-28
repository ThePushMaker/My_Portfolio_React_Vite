import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from '../../assets/img/color-sharp.png';
import meter1 from '../../assets/img/icons/react.png';
import meter2 from '../../assets/img/icons/laravel.svg';
import meter3 from '../../assets/img/icons/vue.png';
import meter4 from '../../assets/img/icons/js.png';
import meter5 from '../../assets/img/icons/php.png';
import meter6 from '../../assets/img/icons/node.svg';
import meter7 from '../../assets/img/icons/tw.png';
import meter8 from '../../assets/img/icons/bootstrap.svg';
import meter9 from '../../assets/img/icons/wp.svg';
import meter10 from '../../assets/img/icons/sql.png';
import meter11 from '../../assets/img/icons/css.png';
import meter12 from '../../assets/img/icons/html.png';
import meter13 from '../../assets/img/icons/figma.png';
import meter14 from '../../assets/img/icons/languages.jpg';
import './Skills.css';

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 7
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 7
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 4
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2
  }
};


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
        <div className='container px-6 md:px-14 lg:px-20 mx-auto'>
          <div className='m-auto'>
            <div className='skill-bx px-[30px] md:py-[50px] md:px-[40px] lg:px-[60px] shadow-2xl'>
              <h2>Skills</h2>
              <p className='text-start'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima temporibus at aliquid incidunt voluptatum facere. Iure quis atque voluptate. Nemo assumenda accusamus cupiditate voluptas nobis deleniti labore nostrum. Aperiam, numquam?</p>
            
            <Carousel
              className="owl-carousel owl-theme skill-slider"
              swipeable={true}
              draggable={true}
              showDots={true}
              responsive={responsive}
              ssr={true} // means to render carousel on server-side.
              infinite={true}
              // autoPlay={true}
              // autoPlay={this.props.deviceType !== "mobile" ? true : false}
              autoPlaySpeed={2000}
              keyBoardControl={true}
              customTransition="all .5"
              transitionDuration={500}
              containerClass="carousel-container"
              // removeArrowOnDeviceType={["tablet", "mobile"]}
              // deviceType={this.props.deviceType}
              dotListClass="custom-dot-list-style"
              itemClass="carousel-item-padding-40-px"
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