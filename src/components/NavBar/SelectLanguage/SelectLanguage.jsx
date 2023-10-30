
import { useEffect, useState, useRef } from 'react';
import arrowDownIcon from '../../../assets/img/icons/angle-down.svg'
import searchIcon from '../../../assets/img/icons/search.svg'
import flagUS from '../../../assets/img/flags/flag-us.svg'
import flagMX from '../../../assets/img/flags/flag-mx.svg'
import { LANGUAGES } from "../../../constants/constants";
import { useTranslation } from 'react-i18next';
import './SelectLanguage.css'

const SelectLanguage = () => {
  const [ t, i18n ] = useTranslation("global"); //'t' it's used in changelanguage functionality


  const [isActive, setIsActive] = useState(false);
  const [selectedElement, setSelectedElement] = useState("Language");
  const [selectedItem, setSelectedItem] = useState(null);
  const [searchData, setSearchData] = useState({
    searchInp: '',
    arrayData: [...LANGUAGES],
  });
  
  // Objeto que mapea códigos de idioma a rutas de imágenes de banderas
  const flagImages = {
    en: flagUS,
    es: flagMX,
  };
  
  const wrapperRef = useRef(null); // Ref para el div contenedor del select
  const inputRef = useRef(null); // Ref para el elemento input del campo de búsqueda
 
 
 
  // get navigator default langugage & convert it to a compatible code to set it as the app language
  useEffect(() => {
    const storedLanguage = localStorage.getItem('language');
    
    // if doesn't exist
    if(!storedLanguage) {
      const languageCode = navigator.language;
      const parts = languageCode.split('-');
      
      changeLang(parts[0])
    }else { 
      if(storedLanguage==='en') setSelectedElement('English')
      else if(storedLanguage==='es') setSelectedElement('Spanish')
      else setSelectedElement('English') //falbackLng en
      // console.log("ya habia storedlanguage",storedLanguage)
    }
  }, []); 
 
 
  const changeLang = newLng => {
    i18n.changeLanguage(newLng);
    setSelectedElement(newLng)
    localStorage.setItem('language', newLng);
  }
  

// when select is open or closed
  const toggleSelect = () => {
    setIsActive(!isActive);
  }
  
  const closeSelect = () => {
    setIsActive(false);
    setSearchData(prevData => ({
      ...prevData,
      searchInp: '', // Establecer el campo de búsqueda en una cadena vacía al cerrar el select
      arrayData: [...LANGUAGES],
    }));
  }

  const handleClickOutside = (event) => {
    if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
      closeSelect();
    }
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // autofocus
  useEffect(() => {
    if (isActive) {
      // Cuando se activa el select, establece el enfoque en el campo de búsqueda
      inputRef.current.focus();
    }
  }, [isActive]);

  // sets the selected style to the selected item
  useEffect(() => {
    if (isActive && selectedItem) {
      setSelectedElement(selectedItem);
    }
  }, [isActive, selectedItem]);

// when an item is selected
  const handleItemSelection = (selectedLngLabel, selectedLngCode) => {
    changeLang(selectedLngCode)
    setSelectedElement(selectedLngLabel)
    setSelectedItem(selectedLngLabel);
    closeSelect();
  }

  // search functionality
  const handleSearchInputChange = (event) => {
    const inputValue = event.target.value;
    let eventsFiltered = [...LANGUAGES];

    eventsFiltered = eventsFiltered.filter(item => item.label.toLocaleLowerCase().includes(inputValue.toLocaleLowerCase()));
  
    setSearchData(prevData => ({
      ...prevData,
      searchInp: inputValue,
      arrayData: [...eventsFiltered],
    }));
  }

  return (
    <div className=''>
      <div className={`wrapper ${isActive ? 'active' : ''}`} ref={wrapperRef}>
        <div className="select-btn" onClick={toggleSelect}>
          <span>{selectedElement}</span>
          <img src={arrowDownIcon} alt="arrowDownIcon" />          
        </div>
        <div className="content">
          <div className="search">
            <img src={searchIcon} alt="searchIcon" />       
            <input
              type="text"
              id='searchLanguage'
              placeholder='Search'
              value={searchData.searchInp}
              onChange={handleSearchInputChange}
              ref={inputRef} // Asigna la referencia al elemento input
            />
          </div>
          <ul className="options">
            {searchData.arrayData ? (
              searchData.arrayData.length > 0 ? (
                searchData.arrayData.map((item, index) => (
                  <li
                    key={index}
                    onClick={() => handleItemSelection(item.label, item.code)}
                    className={selectedItem === item.label ? 'selected' : ''}
                  >
                    <img className='w-7 pr-2' src={flagImages[item.code]} alt={item.code}/>
                    {item.label}
                  </li>
                ))
              ) : (
                <p>Oops! Language not found</p>
              )
            ) : ''}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SelectLanguage;
