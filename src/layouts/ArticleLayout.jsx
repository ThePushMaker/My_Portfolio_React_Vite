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
        
          <section className='pt-24 pb-12 degradado1 min-h-screen' id='skills'>
            <div className=''>
              <div className='container mx-auto px-6 md:px-14 lg:px-10 '>
                
                    <Outlet />
             
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