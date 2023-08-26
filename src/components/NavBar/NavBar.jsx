import { useState, useEffect } from "react";
import logo from "../../assets/img/logo.svg";
import navIcon1 from "../../assets/img/nav-icon1.svg";
import navIcon2 from "../../assets/img/nav-icon2.svg";
import navIcon3 from "../../assets/img/nav-icon3.svg";
import "./NavBar.css";
// animaciones p

const NavBar = () => {
  const [activateLink, setActiveLink] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      window.scrollY > 50 ? setScrolled(true) : setScrolled(false);
    };

    window.addEventListener("croll", onScroll);

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
      <nav className={`${scrolled ? scrolled : ""} navbar`}>
        <div className=" container mx-auto flex flex-wrap  justify-between items-center max-w-screen-xl">
          
            <div className="flex items-center">
              <a href="#home" className="navbar-brand pl-5">
                <img src={logo} alt="Logo" className="object-scale-down w-24 mr-6"/>
              </a>
              {/* menú hamburguesa ocultable */}
              <button
                className="visible lg:invisible"
                aria-controls="basic-navbar-nav"
                type="button"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="invisible lg:visible navbar-nav flex ">
                <a
                  href="#home"
                  className={`${
                    activateLink === "home" ? "active" : ""
                  } navbar-link nav-link navLinkTtext`}
                  onClick={() => onUpdateActiveLink("home")}
                >
                  Home
                </a>
                <a
                  href="#skills"
                  className={`${
                    activateLink === "home" ? "active" : ""
                  } navbar-link nav-link navLinkTtext`}
                  onClick={() => onUpdateActiveLink("skills")}
                >
                  Skills
                </a>
                <a
                  href="#projects"
                  className={`${
                    activateLink === "home" ? "active" : ""
                  } navbar-link nav-link navLinkTtext`}
                  onClick={() => onUpdateActiveLink("projects")}
                >
                  Projects
                </a>
              </div>
            </div>

            <span className="invisible lg:visible flex items-center navbar-text">
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
              <button className="vdd" onClick={connect}>
                <span>Let's Connect</span>
              </button>
            </span>
          
        </div>
      </nav>
    </>
  );
};

export default NavBar;
