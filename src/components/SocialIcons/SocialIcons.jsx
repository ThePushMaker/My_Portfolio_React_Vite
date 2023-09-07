import navIcon1 from "../../assets/img/nav-icon1.svg";
import navIcon2 from "../../assets/img/nav-icon2.svg";
import navIcon3 from "../../assets/img/nav-icon3.svg";
import navIcon4 from "../../assets/img/icons/wakatime.svg";

const SocialIcons = () => {
  return(
    <>
      <div className="social-icon">
        <a data-tooltip-id="myTooltip" data-tooltip-content="LinkedIn"
          target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/martin-calderon-dev">
          <img src={navIcon1} alt="navIcon1" />
        </a>
        <a data-tooltip-id="myTooltip" data-tooltip-content="GitHub" 
          target="_blank" rel="noreferrer" href="https://github.com/DSW-47">
          <img src={navIcon2} alt="navIcon2" />
        </a>
        
        <a data-tooltip-id="myTooltip" data-tooltip-content="YouTube Channel"
          target="_blank" rel="noreferrer" href="https://www.youtube.com/channel/UCNy0OJqXOCyhThyXTcLLCJA?sub_confirmation=1">
          <img src={navIcon3} alt="navIcon3" />
        </a>
        <a data-tooltip-id="myTooltip" data-tooltip-content="WakaTime Stats" data-tip="myTooltip"   
          target="_blank" rel="noreferrer" href="https://wakatime.com/@dsw47">
          <img src={navIcon4} alt="navIcon4" />
        </a>
      </div>
    </>
  );
}

export default SocialIcons;