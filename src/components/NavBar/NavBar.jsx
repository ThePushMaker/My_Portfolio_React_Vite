import { useState, useEffect } from "react";
import logo from "../../assets/img/logo.svg";
import "./NavBar.css";
import { Link } from "react-router-dom";
import SocialIcons from "../SocialIcons/SocialIcons"

const NavBar = () => {
  const [activateLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);

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
  
  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };
  
  return (
    <>
    <div>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="mx-auto flex justify-between container px-6 md:px-14 lg:px-20">
          
            <div className="flex items-center w-full justify-between lg:w-auto lg:justify-start">
            
              <Link to="/" className="navbar-brand">
                <img src={logo} alt="Logo" className="object-contain w-[120px] md:w-[130px] lg:w-[140px] lg:mr-8"/>
              </Link>
              {/* menú hamburguesa es el de abajo */}
              <button
                className="navbar-toggler-icon visible flex lg:invisible lg:hidden"
                type="button" onClick={toggleMenu}
                >
                 {menuVisible && (
                    // Aquí colocas tu menú flotante que se mostrará cuando menuVisible sea true
                    <div className="menu-float">
                      aaa
                    </div>
                  )}
                {/*el  menú hamburguesa es el de arriba */}
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="invisible hidden lg:flex lg:visible">
                <Link to="/" className={`${
                    activateLink === "home" ? "active" : ""
                  } navbar-link`}
                  onClick={() => onUpdateActiveLink("home")}
                >
                  Home
                </Link>
                {location.pathname==='/' && (
                  <>
                    <a
                      href="#skills"
                      className={`${
                        activateLink === "skills" ? "active" : ""
                      } navbar-link`}
                      onClick={() => onUpdateActiveLink("skills")}
                    >
                      Skills
                    </a>
                    <a
                      href="#projects"
                      className={`${
                        activateLink === "projects" ? "active" : ""
                      } navbar-link`}
                      onClick={() => onUpdateActiveLink("projects")}
                    >
                      Projects
                    </a>
                  </>
                )}
              </div>
            </div>

            <div className="invisible hidden items-center navbar-text lg:visible lg:flex">
              <SocialIcons />
              <a href="#contact">
                <button className="">
                  <span><label className='font-mono'>{'<'}</label>CONTACT ME<label className='font-mono'>{'/>'}</label></span>
                </button>
              </a>
            </div>
          
        </div>
      </nav>
      </div>
      <div className="floating-button" id="back-to-top-button">
        <a href='#top'>
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> <g opacity="1"> <path d="M12 15.5V9.5" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M9 11.5L12 8.5L15 11.5" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> </g> </g></svg>
        </a>
      </div>
      
    </>
  );
};

export default NavBar;
