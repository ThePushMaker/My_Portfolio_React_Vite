import { useTranslation } from "react-i18next";
import { LANGUAGES } from "../../../constants/constants";

const SelectLanguage = () => { 
  const [ t, i18n ] = useTranslation("global"); 
  
  const languageCode = navigator.language;
  // Utilizamos el método split para dividir la cadena en función del guión '-'
  const parts = languageCode.split('-');
  // La parte que queremos está en la primera posición del array resultante
  const lng = parts[0]; // Esto contendrá 'es'
             
  return(
    <>
      {/* Browser Language {lng} */}
      <div className="py-[4px] px-2 xl:px-5">
        <select 
          className={`navbar-link text-[17px] xl:text-xl active bg-transparent w-24`} 
          defaultValue={lng} 
        >
        {
          LANGUAGES.map(({ code, label }) => (
            <option className="bg-purple  "
              key={code}
              value={code}
              onClick={() => i18n.changeLanguage(code)}
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