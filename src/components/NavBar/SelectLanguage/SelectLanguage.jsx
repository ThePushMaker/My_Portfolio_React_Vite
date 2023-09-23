import { useTranslation } from "react-i18next";
import { LANGUAGES } from "../../../constants/constants";
import {useMyLanguageContext} from '../../../contexts/LanguageContext'
import { useEffect, useState } from "react";

const SelectLanguage = () => { 
  const [ t, i18n ] = useTranslation("global"); 
  const { language, updateLanguage } = useMyLanguageContext();
  const [navLng, setNavLng] = useState('en');
  
  const handleLanguageChange = (e) => {
    const selectLanguage = e.target.value;
    i18n.changeLanguage(selectLanguage);
    setNavLng(selectLanguage); 
    // updateLanguage(selectLanguage);
  }

  
  useEffect(() => {
    const languageCode = navigator.language;
    const parts = languageCode.split('-');
    const navLng = parts[0];

    setNavLng(navLng);
    i18n.changeLanguage(navLng);
    
  }, []);  

  return(
    <>
      <div className="py-[4px] px-2 xl:px-5">
        <select 
          className={`navbar-link text-[17px] xl:text-xl active bg-transparent w-24`} 
          value={navLng} 
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
        
        <div>
          <p>{language}</p>
          <button onClick={() => updateLanguage('en')}>en</button>
        </div>
      </div>
  
    </>
  );
}

export default SelectLanguage;