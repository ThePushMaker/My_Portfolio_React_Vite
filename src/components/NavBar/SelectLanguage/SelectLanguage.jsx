import { useTranslation } from "react-i18next";
import { LANGUAGES } from "../../../constants/constants";
import {useMyLanguageContext} from '../../../contexts/LanguageContext'
import { useEffect, useState } from "react";

const SelectLanguage = () => { 
  const [ t, i18n ] = useTranslation("global"); 
  const { language, updateLanguage } = useMyLanguageContext();
  const [defNavLng, setDefNavLng] = useState('en');
  
  const changeLang = newLng => {
    updateLanguage(newLng)
    i18n.changeLanguage(newLng);
  }
  
  const handleLanguageChange = (e) => {
    const selectLanguage = e.target.value;
    changeLang(selectLanguage)
    // updateLanguage(selectLanguage);
  }
  
  useEffect(() => {
    // get navigator default langugage & convert to a compatible code
    const languageCode = navigator.language;
    const parts = languageCode.split('-');
    const defNavLng = parts[0];
    
    setDefNavLng(defNavLng); 
    changeLang(defNavLng)
  }, []);  

  return(
    <>
      <div className="py-[4px] px-2 xl:px-5">
        <select 
          className={`navbar-link text-[17px] xl:text-xl active bg-transparent w-24`} 
          value={defNavLng} 
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