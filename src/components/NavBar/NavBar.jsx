import { useState, useEffect, useRef } from "react";
import logo from "../../assets/img/logo.svg";
import "./NavBar.css";
import { Link } from "react-router-dom";
import SocialIcons from "../SocialIcons/SocialIcons"

const NavBar = () => {
  const [activateLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [openMobileNavbar, setOpenMobileNavbar] = useState(false);
  const navbarRef = useRef(null);
  
  // Manejador de clics fuera de la navbar
  useEffect(() => {
    function handleClickOutside(event) {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        // Si se hizo clic fuera de la navbar, ciérrala
        setOpenMobileNavbar(false);
      }
    }

    // Agregar un event listener al documento
    document.addEventListener("click", handleClickOutside);

    // Limpieza: elimina el event listener cuando el componente se desmonta
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

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
  
  const toggleMenu = () => {
    setOpenMobileNavbar(!openMobileNavbar);
  };
  
  const URLList = [
    {URL: '/#top', name: 'Home'},
    {URL: '/#skills', name: 'Skills'},
    {URL: '/#projects', name: 'Projects'},
    {URL: '/#contact', name: 'Contact'},
    {URL: '/about-me', name: 'About Me'},
  ]
  
  const navLinkStyles = 'navbar-link lg:text-[17px] lgxl:text-xl';
  
  const navbarPaddings = 'px-6 md:px-12 lg:px-16 py-6';
  
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
              
              {/* hamburguer button and menu */}
                <div ref={navbarRef}>
                {/*  hamburger button below */}
                  <button
                    className="visible inline lg:invisible lg:hidden svg_link2"
                    type="button" onClick={toggleMenu}
                  >
                    <svg className="w-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 6H20M4 12H14M4 18H9" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                  </button>
                  {/*hamburger menu  */}
                  { openMobileNavbar && (
                    <div
                      className={`${openMobileNavbar ? "navbar-animation" : "navbar-animation-close"} 
                       ${navbarPaddings} 
                      mobileNavbar absolute top-0 backdrop-blur-md right-0 w-[64vw] md:w-[45vw] 
                      bg-[black] shadow-2xl shadow-border_color1 text-white bg-opacity-[90%] h-screen 
                      lg:invisible lg:hidden`} 
                    >
                      <div className="flex justify-end">
                        <button onClick={toggleMenu} className="svg_link1">
                        <span className="">
                          <svg className="w-7" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier">
                            <path className="fill-white" d="M195.2 195.2a64 64 0 0 1 90.496 0L512 421.504 738.304 195.2a64 64 0 0 1 90.496 90.496L602.496 512 828.8 738.304a64 64 0 0 1-90.496 90.496L512 602.496 285.696 828.8a64 64 0 0 1-90.496-90.496L421.504 512 195.2 285.696a64 64 0 0 1 0-90.496z"></path></g>
                          </svg>
                        </span>
                        </button>
                      </div>
                      <ul className="space-y-8 py-8 flex flex-col">
                        {URLList.map((item, index) => (
                          <li key={index}>
                            <a href={item.URL} className="hover:text-link_color_hover"> {item.name}</a>
                          </li>
                        ))}
                        {/* here ends hamburger menu */}
                      </ul>
                      <div className="flex justify-center">
                          <SocialIcons /> 
                      </div>
                    </div>
                  )}
                </div>
                
              
            </div>

            <div className="invisible hidden lg:visible lg:flex items-center navbar-text ">
              <SocialIcons />
              <a href="#contact">
                <button className="lg:px-5 py-4 lgxl:px-8">
                  {'< '}
                    <label className="text-styled-font-family1">
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
