import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";
const PageLayout = (props) => {

  return(
    <>
      <NavBar />
        <div className="app-container">
        
          <section className="mt-0 pt-[170px] pb-[100px] container px-4 md:px-14 lg:px-20 mx-auto w-full">
          
                <div className='skill-bx px-[28px] py-6 md:py-[50px] md:px-[40px] lg:px-[60px] shadow-2xl min-h-screen'>
                  <Outlet />
                </div>  
           
          </section>
          
        </div>  
      <Footer />
    </>
  );
}

export default PageLayout;