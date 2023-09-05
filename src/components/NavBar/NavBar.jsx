import { useState, useEffect } from "react";
import logo from "../../assets/img/logo.svg";
import navIcon1 from "../../assets/img/nav-icon1.svg";
import navIcon2 from "../../assets/img/nav-icon2.svg";
import navIcon3 from "../../assets/img/nav-icon3.svg";
import "./NavBar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [activateLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

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

  return (
    <>
    <div>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="mx-auto flex justify-between container px-6 md:px-14 lg:px-20">
          
            <div className="flex items-center w-full justify-between lg:w-auto lg:justify-start">
            
              <Link to="/" className="navbar-brand">
                <img src={logo} alt="Logo" className="object-contain w-[120px] md:w-[130px] lg:w-[140px] lg:mr-8"/>
              </Link>
              {/* menú hamburguesa ocultable */}
              <button
                className="navbar-toggler-icon visible flex lg:invisible lg:hidden"
                type="button"
              >
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
              <div className="social-icon">
                <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/martin-calderon-dev">
                  <img src={navIcon1} alt="navIcon1" />
                </a>
                <a target="_blank" rel="noreferrer" href="https://github.com/DSW-47">
                  <img src={navIcon2} alt="navIcon2" />
                </a>
                <a target="_blank" rel="noreferrer" href="https://www.youtube.com/channel/UCNy0OJqXOCyhThyXTcLLCJA?sub_confirmation=1">
                  <img src={navIcon3} alt="navIcon3" />
                </a>
              </div>
              <a href="#contact">
                <button className="">
                  <span>{'< '}CONTACT ME{'  />'}</span>
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
