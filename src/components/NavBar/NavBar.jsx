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
                <a href="#">
                  <img src={navIcon1} alt="navIcon1" />
                </a>
                <a href="#">
                  <img src={navIcon2} alt="navIcon2" />
                </a>
                <a href="#">
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
    </>
  );
};

export default NavBar;
