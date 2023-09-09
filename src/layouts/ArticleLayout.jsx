import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import NavBar from "../components/NavBar/NavBar";
import colorSharp2 from "../assets/img/color-sharp2.png";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";

const ArticleLayout = () => {

  return(
    <>
      <NavBar />
        <div className="app-container" id="top">
        
          <section className='pt-44 pb-12 degradado1' id='skills'>
            <div className='skill'>
              <div className='container mx-auto px-6 md:px-14 lg:px-10 '>
                <div className=' skill-bx bg-container_color3 shadow-2xl pt-12 pb-16 px-[28px] md:py-[50px] md:px-[40px] lg:px-24'>
                    <Outlet />
                  </div>  
                </div>  
              </div>  
              <img
                className="absolute bottom-0 w-35% right-0 -z-10 opacity-70"
                src={colorSharp2}
                alt="background_right"
              />
            </section>
            <ScrollToTop />
        </div>  
      <Footer />
    </>
  );
}

export default ArticleLayout;