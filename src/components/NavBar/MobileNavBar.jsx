import { useEffect, useRef, useState } from "react";
import SocialIcons from "../SocialIcons/SocialIcons";
import { Link } from "react-router-dom";
import SelectLanguage from "./SelectLanguage/SelectLanguage";
import { useTranslation } from "react-i18next";

const MobileNavBar = ({ NavbarRoutesHome, NavbarRoutes }) => {
  const [ t ] = useTranslation("global");  
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

  const toggleMenu = () => {
    setOpenMobileNavbar(!openMobileNavbar);
  };



  return(
    <>
      <div ref={navbarRef}>
      {/*  hamburger button below */}
       
        {/*hamburger menu  */}
      
          <div
            id="navbar"
            className={`${openMobileNavbar ? '#navbar active' : '#navbar'} 
            px-11 py-6 fixed top-0 right-[-75vw] md:right-[-50vw] w-[70vw] md:w-[45vw] 
            ease-in-out duration-300 backdrop-blur-md bg-[black] shadow-2xl 
            shadow-border_color1 text-white bg-opacity-[90%] h-screen lg:invisible lg:hidden`} 
          >
            <ul className="space-y-8 py-8 flex flex-col">
              {location.pathname === '/' && (
                <>
                  {NavbarRoutesHome.map((item, index) => (
                    <li key={index} className="relative">
                      <a href={item.URL} className="text-[1.45rem] font-bold hover:text-link_color_hover ease-in-out duration-300"> {t(`navbar.${item.name}`)}</a>
                    </li>
                  ))}
                </>
              )}
              {location.pathname !== '/' && (
                <>
                  {NavbarRoutes.map((item, index) => (
                    <li key={index} className="relative">
                      <Link to={item.URL} className="text-[1.45rem] font-bold hover:text-link_color_hover ease-in-out duration-300"> {t(`navbar.${item.name}`)}</Link>
                    </li>
                  ))}
                </>
              )}
            </ul>
            <div className="flex justify-center absolute bottom-0 left-0 w-[100%] text-center py-[50px] ">
              <SocialIcons /> 
            </div>
        </div>
        
        <div className="flex justify-end cursor-pointer" onClick={toggleMenu}>
          <button
            className={`z-50 visible inline lg:invisible lg:hidden svg_link1`}
            type="button"
          >
            {openMobileNavbar ? (
              <svg className="w-7" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier">
                  <path className="fill-white" d="M195.2 195.2a64 64 0 0 1 90.496 0L512 421.504 738.304 195.2a64 64 0 0 1 90.496 90.496L602.496 512 828.8 738.304a64 64 0 0 1-90.496 90.496L512 602.496 285.696 828.8a64 64 0 0 1-90.496-90.496L421.504 512 195.2 285.696a64 64 0 0 1 0-90.496z"></path></g>
                </svg>
            ) : (
              <svg className="w-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 6H20M4 12H14M4 18H9" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
            )
            }
          </button>
        </div>
       
        {/* here ends hamburger menu */}
      </div>
    </>
    
    
  );
}

export default MobileNavBar;