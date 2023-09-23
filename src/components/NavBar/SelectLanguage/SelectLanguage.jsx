import { useTranslation } from "react-i18next";
import { LANGUAGES } from "../../../constants/constants";
import {useMyLanguageContext} from '../../../contexts/LanguageContext'

const SelectLanguage = () => { 
  const [ t, i18n ] = useTranslation("global"); 

  
  const languageCode = navigator.language;
  // Utilizamos el método split para dividir la cadena en función del guión '-'
  const parts = languageCode.split('-');
  // La parte que queremos está en la primera posición del array resultante
  const navLng = parts[0]; // Esto contendrá 'es'
  
  console.log(i18n.language)
  
  const { language, updateLanguage } = useMyLanguageContext();
  console.log("aaa")
  console.log(language)
  // aqui puedes usar data y updateData para acceder y actualizas los datos del contexto

  return(
    <>
      {/* Browser Language {navLng} */}
      <div className="py-[4px] px-2 xl:px-5">
        <select 
          className={`navbar-link text-[17px] xl:text-xl active bg-transparent w-24`} 
          defaultValue={navLng} 
        >
        {
          LANGUAGES.map(({ code, label }) => (
            <option className="bg-purple"
              key={code}
              value={code}
              onClick={() => i18n.changeLanguage(code)} 
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