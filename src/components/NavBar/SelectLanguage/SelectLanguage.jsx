
import { useEffect, useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';

import { LANGUAGES } from "@/constants/constants";
import './SelectLanguage.css'

import arrowDownIcon from '@/assets/img/icons/angle-down.svg'
import searchIcon from '@/assets/img/icons/search.svg'

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
    en: '/assets/img/flags/flag-us.svg',
    es: '/assets/img/flags/flag-mx.svg',
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

// close select when click outside
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
    <div className={`wrapper ${isActive ? 'active' : ''}`} ref={wrapperRef}>
      
      {/* select button with selected language */}
      <div className="select-btn" onClick={toggleSelect}>
        <span className='text-xl xlNavbar:text-md'>{selectedElement}</span>
        <img src={arrowDownIcon} alt="arrowDownIcon" />
      </div>

      {/* container with list of languages */}
      <div className={`${isActive ? 'active opacity-100' : 'opacity-0'} content transition-all duration-500 ease-in-out`}>
        
        {/* search bar */}
        <div className="search">
          <img src={searchIcon} alt="searchIcon" />
          <input
            type="text"
            id='searchLanguage'
            placeholder='Search'
            value={searchData.searchInp}
            onChange={handleSearchInputChange}
            ref={inputRef} // Asigna la referencia al elemento input
            className='h-9 w-full text-md'
          />
        </div>
        
        {/* list of languages */}
        <ul className="language-list">
            {searchData.arrayData.length > 0 ? (
              searchData.arrayData.map((item, index) => (
                <li
                  key={index}
                  onClick={() => handleItemSelection(item.label, item.code)}
                  className={`text-smmd ${selectedItem === item.label ? 'selected' : ''}`}
                >
                  <img className='w-7 pr-2' src={flagImages[item.code]} alt={item.code}/>
                  {item.label}
                </li>
              ))
            ) : (
              <p className='text-base text-blue-950 text-center'>{t(`navbar.language_not_found`)}</p>
            )}
        </ul>
      </div>
    </div>
  );
}

export default SelectLanguage;
