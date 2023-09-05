import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";
import colorSharp2 from "../../assets/img/color-sharp2.png";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";

const PageLayout = () => {

  return(
    <>
      <NavBar />
        <div className="app-container" id="top">
        
          <section className='pt-44 pb-12' id='skills'>
            <div className='skill'>
              <div className='container mx-auto px-6 md:px-14 lg:px-10 '>
                <div className=' skill-bx shadow-2xl pt-12 pb-16 px-[28px] md:py-[50px] md:px-[40px] lg:px-24'>
                    <Outlet />
                  </div>  
                </div>  
              </div>  
              <img
                className="background-image-right"
                src={colorSharp2}
                alt="background_right"
              />
            </section>
          
        </div>  
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default PageLayout;