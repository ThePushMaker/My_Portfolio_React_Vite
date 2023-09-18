import { useState, useEffect } from "react";
import logo from "../../assets/img/logo.svg";
import "./NavBar.css";
import { Link } from "react-router-dom";
import SocialIcons from "../SocialIcons/SocialIcons"
import MobileNavBar from "./MobileNavBar";
import SelectLanguage from "./SelectLanguage/SelectLanguage";

const NavBar = () => {
  const [activateLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);



//  detectar su se ha hecho scroll en la pagina
  useEffect(() => {
    const onScroll = () => {
      window.scrollY > 50 ? setScrolled(true) : setScrolled(false);
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // used to set a special className when an element is clicked
  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  const navLinkStyles = 'navbar-link text-[17px] xl:text-xl py-0 px-[17px] xl:px-[25px]';
  
  const navbarPaddings = 'px-10 xl:px-16 py-6';
  
  return (
    <>
    <div>
      <nav className={`${scrolled ? 'scrolled backdrop-blur-sm py-[10px]' : ''} navbar  ${navbarPaddings}`}>
        <div className="mx-auto max-w-[1500px] flex justify-between ">
          
            <div className="flex items-center w-full justify-between lg:w-fit lg:justify-start">
            
              <Link to="/" className="navbar-brand">
                <img src={logo} alt="Logo" className="object-contain w-[120px] md:w-[130px] lg:w-[140px] lg:mr-8"/>
              </Link>
              <div className="invisible hidden lg:inline lg:visible">
                <Link to="/" className={`${
                    activateLink === "home" ? "active" : ""
                  }  ${navLinkStyles}`}
                  onClick={() => onUpdateActiveLink("home")}
                >
                  Home
                </Link>
                {/* menu lg */}
                {location.pathname === '/' && (
                  <>
                    <a
                      href="#skills"
                      className={`${
                        activateLink === "skills" ? "active" : ""
                      } ${navLinkStyles}`}
                      onClick={() => onUpdateActiveLink("skills")}
                    >
                      Skills
                    </a>
                    <a
                      href="#projects"
                      className={`${
                        activateLink === "projects" ? "active" : ""
                      }  ${navLinkStyles}`}
                      onClick={() => onUpdateActiveLink("projects")}
                    >
                      Projects
                    </a>
                  </>
                )}
              </div>
              
              <MobileNavBar 
                navbarPaddings = {navbarPaddings}
              />
              
            </div>

            <div className="invisible hidden lg:visible lg:flex items-center navbar-text">
              <div className="mr-3">
                <SelectLanguage />
              </div>
              <SocialIcons />
              <a href="#contact">
                <button className="px-2 py-4 xl:px-8 ml-3">
                  {'< '}
                    <label className="text-styled-font-family1 text-[17px] xl:text-xl">
                      CONTACT ME
                    </label>
                  {' />'}
                </button>
              </a>
            </div>
          
        </div>
      </nav>
      </div>
      <div className="floating-button svg_link2" id="back-to-top-button">
        <a href='#top'>
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path className="stroke-link_color" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#FFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> <g opacity="1"> <path d="M12 15.5V9.5" stroke="#FFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M9 11.5L12 8.5L15 11.5" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> </g> </g></svg>
        </a>
      </div>
      
    </>
  );
};

export default NavBar;
