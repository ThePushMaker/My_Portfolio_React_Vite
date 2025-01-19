import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import NavBar from "../components/NavBar/NavBar";
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