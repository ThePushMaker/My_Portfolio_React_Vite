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
        <section>
          <Outlet />
        </section>
        <ScrollToTop />
      </div>  
      <Footer />
    </>
  );
}

export default ArticleLayout;