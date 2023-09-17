import { LANGUAGES } from "../../../constants/constants";

const SelectLanguage = () => { 
  return(
    <>
      
        <select className={`navbar-link text-[17px] xl:text-xl active bg-transparent border-[1px] border-white py-[6px] px-2 xl:px-6`} defaultValue={'en'} >
        {
          LANGUAGES.map(({ code, label }) => (
            <option className="bg-purple  "
            key={code}
            value={code}
            >{label}</option>
            ))
          }
        </select>
  
    </>
  );
}

export default SelectLanguage;