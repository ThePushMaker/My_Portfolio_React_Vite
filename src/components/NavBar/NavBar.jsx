import { useState, useEffect } from "react";
import logo from "../../assets/img/logo.svg";
import navIcon1 from "../../assets/img/nav-icon1.svg";
import navIcon2 from "../../assets/img/nav-icon2.svg";
import navIcon3 from "../../assets/img/nav-icon3.svg";
import "./NavBar.css";
// animaciones p

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

  // pendiente
  const connect = () => {
    console.log("connect");
  };

  return (
    <>
    <div>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="mx-auto flex justify-between container px-6 md:px-14 lg:px-20">
          
            <div className="flex items-center w-full justify-between lg:w-auto lg:justify-start">
              <a href="#home" className="navbar-brand">
                <img src={logo} alt="Logo" className="object-contain w-[120px] md:w-[130px] lg:w-[140px] lg:mr-8"/>
              </a>
              {/* menú hamburguesa ocultable */}
              <button
                className="navbar-toggler-icon visible flex lg:invisible lg:hidden"
                type="button"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="invisible hidden lg:flex lg:visible">
                <a
                  href="#home"
                  className={`${
                    activateLink === "home" ? "active" : ""
                  } navbar-link`}
                  onClick={() => onUpdateActiveLink("home")}
                >
                  Home
                </a>
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
              </div>
            </div>

            <div className="invisible hidden items-center navbar-text lg:visible lg:flex">
              <div className="social-icon">
                <a target="_blank" href="https://www.linkedin.com/in/martin-calderon-dev">
                  <img src={navIcon1} alt="navIcon1" />
                </a>
                <a target="_blank" href="https://github.com/DSW-47">
                  <img src={navIcon2} alt="navIcon2" />
                </a>
                <a target="_blank" href="https://www.youtube.com/channel/UCNy0OJqXOCyhThyXTcLLCJA?sub_confirmation=1">
                  <img src={navIcon3} alt="navIcon3" />
                </a>
              </div>
              <button className="" onClick={connect}>
                <span>{'< '}CONTACT ME{'  />'}</span>
              </button>
            </div>
          
        </div>
      </nav>
      </div>
      <div class="floating-button" id="back-to-top-button">
        <a href='#home' class="">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <g opacity="1"> <path d="M12 15.5V9.5" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M9 11.5L12 8.5L15 11.5" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g> </g></svg>
        </a>
      </div>
    </>
  );
};

export default NavBar;
