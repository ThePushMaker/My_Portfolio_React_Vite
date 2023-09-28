import { useTranslation } from "react-i18next";
import { LANGUAGES } from "../../../constants/constants";
import {useMyLanguageContext} from '../../../contexts/LanguageContext'
import { useEffect, useState } from "react";
import './SelectLanguage.css'
import flagUS from '../../../assets/img/flags/flag-us.svg'
import flagMX from '../../../assets/img/flags/flag-mx.svg'

const SelectLanguage = () => { 
  const [ t, i18n ] = useTranslation("global"); 
  const { language, updateLanguage } = useMyLanguageContext();
  
  const [navLang, setNavLng] = useState('en');
  
  const changeLang = newLng => {
    i18n.changeLanguage(newLng);
    setNavLng(newLng); 
    updateLanguage(newLng)
  }
  
  const handleLanguageChange = (e) => {
    const selectLanguage = e.target.value;
    changeLang(selectLanguage)
  }
  
  useEffect(() => {
    // get navigator default langugage & convert to a compatible code
    const languageCode = navigator.language;
    const parts = languageCode.split('-');
    const navLang = parts[0];
    
    changeLang(navLang)
  }, []);  

  return(
    <>
      <div className="py-[4px] px-2 xl:px-5">
        <select 
          className={`navbar-link text-[17px] xl:text-xl active bg-transparent w-24`} 
          value={navLang} 
          onChange={handleLanguageChange}
        >
        {
          LANGUAGES.map(({ code, label }) => (
            <option className="bg-purple"
              key={code}
              value={code}
            >
              {t(`navbar.${label}`)}
            </option>
            ))
          }
        </select>
      </div>
      
      
      <form id="app-cover">
  <div id="select-box">
    <input type="checkbox" id="options-view-button"/>
    <div id="select-button" className="brd">
      <div id="selected-value">
        <span>Select a Language</span>
      </div>
      <div id="chevrons">
        {flagUS}
        {flagMX}
      </div>
    </div>
    <div id="options">
      <div className="option">
        <input className="s-c top" type="radio" name="platform" value="codepen"/>
        <input className="s-c bottom" type="radio" name="platform" value="codepen"/>
        <i className="fab fa-codepen"></i>
        <span className="label">English</span>
        <span className="opt-val">English</span>
      </div>
      <div className="option">
        <input className="s-c top" type="radio" name="platform" value="dribbble"/>
        <input className="s-c bottom" type="radio" name="platform" value="dribbble"/>
        <i className="fab fa-dribbble"></i>
        <span className="label">Spanish</span>
        <span className="opt-val">Spanish</span>
      </div>
      <div id="option-bg"></div>
    </div>
  </div>
</form>
  
    </>
  );
}

export default SelectLanguage;