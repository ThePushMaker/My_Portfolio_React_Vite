import { LANGUAGES } from "../../../constants/constants";

const SelectLanguage = () => { 
  return(
    <>
      <div className="py-[4px] px-2 xl:px-5">
        <select className={`navbar-link text-[17px] xl:text-xl active bg-transparent w-24`} defaultValue={'en'} >
        {
          LANGUAGES.map(({ code, label }) => (
            <option className="bg-purple  "
            key={code}
            value={code}
            >{label}</option>
            ))
          }
        </select>
          </div>
  
    </>
  );
}

export default SelectLanguage;