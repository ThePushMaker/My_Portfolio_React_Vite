import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { NavbarRoutesHome, NavbarRoutes } from '@/routes.js';
import MobileNavBar from "@/components/NavBar/MobileNavBar";
import SelectLanguage from "@/components/NavBar/SelectLanguage/SelectLanguage";
import "@/components/NavBar/NavBar.css";

import logo from "@/assets/img/logo.png";

const NavBar = () => {
  const [activateLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  // const [ t, i18n ] = useTranslation("global");  
  const [t] = useTranslation("global");

  //  detectar si se ha hecho scroll en la pagina
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

  const navLinkStyles = 'navbar-link text-sm xlNavbar:text-smmd py-0 px-[14px] xlNavbar:px-[25px]';

  return (
    <>
      {/* NAVBAR */}
      <header>
        <nav className={`${scrolled ? 'scrolled' : ''} navbar`}>
          <div className="mx-auto max-w-[90vw] flex justify-between">

            {/* left side */}
            <div className="flex items-center w-full justify-between lg:w-fit lg:justify-start">
              {location.pathname === '/' ? (
                <>
                  {/* imagen logo */}
                  <a href="/#top" className="navbar-brand">
                    <img src={logo} alt="Logo" className="w-12 mr-8"/>
                  </a>
                  
                  {/* homepage navbar links */}
                  <div className="invisible hidden lg:inline lg:visible">

                    <ul className="flex">
                      {NavbarRoutesHome.map((item, index) => (
                        <li key={index}>
                          {/* a href */}
                          <a href={item.URL} className={`${activateLink === item.name ? "active" : ""
                            }  ${navLinkStyles} hover:text-link_color_hover`}
                            onClick={() => onUpdateActiveLink(item.name)}
                          >
                            <span>
                              {t(`navbar.${item.name}`)}
                            </span>
                          </a>
                        </li>
                      ))}
                    </ul>

                  </div>
                </>
              ) : (
                <>
                  {/* imagen logo */}
                  <Link to="/" className="navbar-brand">
                    <img src={logo} alt="Logo" className="w-12 mr-8"/>
                  </Link>

                  {/* navbar links */}
                  <div className="invisible hidden lg:inline lg:visible">
                    {NavbarRoutes.map((item, index) => (
                      <Link to={item.URL} key={index} className={`${activateLink === item.name ? "active" : ""
                        }  ${navLinkStyles}`}
                        onClick={() => onUpdateActiveLink(item.name)}
                      >
                        {t(`navbar.${item.name}`)}
                      </Link>
                    ))}
                  </div>
                </>
              )}
            </div>


            {/* right side */}
            <div className="items-center inline-flex">
              <div className="inline-flex">

                {/* dropdown language */}
                <div className="lg:mr-0 z-0">
                  <SelectLanguage />
                </div>

                {/* navbar for mobile devices */}
                <MobileNavBar
                  NavbarRoutesHome={NavbarRoutesHome}
                  NavbarRoutes={NavbarRoutes}
                />
              </div>

              {/* contact button */}
              <div className="invisible hidden lg:visible lg:flex ">
                {location.pathname === '/' ? (
                  <a href="#contact">
                    <button className="contact_button px-4 py-4 xlNavbar:px-6 ml-3">
                      {'< '}
                      <span className="text-styled-font-family1 text-xxsm xlNavbar:text-xlNavbar">
                        {t(`navbar.CONTACT ME`)}
                      </span>
                      {' />'}
                    </button>
                  </a>
                ) : (
                  <Link to="/">
                    <button className="contact_button px-4 py-4 xlNavbar:px-6 ml-3">
                      {'< '}
                      <label className="text-styled-font-family1 text-xxsm xlNavbar:text-xlNavbar">
                        {t(`navbar.CONTACT ME`)}
                      </label>
                      {' />'}
                    </button>
                  </Link>
                )}
              </div>

            </div>

          </div>
        </nav>
      </header>

      {/* scroll to top svg button */}
      <div className="floating-button svg_link2" id="back-to-top-button">
        <a href='#top'>
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path className="stroke-link_color" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#FFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> <g opacity="1"> <path d="M12 15.5V9.5" stroke="#FFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M9 11.5L12 8.5L15 11.5" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> </g> </g></svg>
        </a>
      </div>

    </>
  );
};

export default NavBar;