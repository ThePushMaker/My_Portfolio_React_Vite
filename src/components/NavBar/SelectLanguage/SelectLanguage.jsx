import { useTranslation } from "react-i18next";
import { LANGUAGES } from "../../../constants/constants";
import {useMyLanguageContext} from '../../../contexts/LanguageContext'
import { useEffect, useState } from "react";

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
  
    </>
  );
}

export default SelectLanguage;