
import { useEffect, useState, useRef } from 'react';
import arrowDownIcon from '../../../assets/img/icons/angle-down.svg'
import searchIcon from '../../../assets/img/icons/search.svg'
import flagUS from '../../../assets/img/flags/flag-us.svg'
import flagMX from '../../../assets/img/flags/flag-mx.svg'
import { LANGUAGES } from "../../../constants/constants";
import { useMyLanguageContext } from '../../../contexts/LanguageContext';
import { useTranslation } from 'react-i18next';
import './SelectLanguage.css'

const SelectLanguage = () => {
  const [ t, i18n ] = useTranslation("global"); 
  const { language, updateLanguage } = useMyLanguageContext();
  
  const [navLang, setNavLng] = useState('en');
  
  const [isActive, setIsActive] = useState(false);
  const [selectBtn, setSelectBtn] = useState("Spanish");
  const [searchData, setSearchData] = useState({
    searchInp: '',
    filteredData: [],
    hasSearched: false,
  });
  const [selectedItem, setSelectedItem] = useState(null);
  
  
  const wrapperRef = useRef(null); // Ref para el div contenedor del select
  const inputRef = useRef(null); // Ref para el elemento input del campo de búsqueda

  const dataArray = [...LANGUAGES];


  
  const changeLang = newLng => {
    i18n.changeLanguage(newLng);
    setNavLng(newLng); 
    updateLanguage(newLng)
  }
  
  useEffect(() => {
    // get navigator default langugage & convert to a compatible code
    const languageCode = navigator.language;
    const parts = languageCode.split('-');
    const navLang = parts[0];
    
    changeLang(navLang)
  }, []); 


// whem the select is open or closed
  const toggleSelect = () => {
    setIsActive(!isActive);
  }
  
  const closeSelect = () => {
    setIsActive(false);
    setSearchData(prevData => ({
      ...prevData,
      searchInp: '', // Establecer el campo de búsqueda en una cadena vacía al cerrar el select
      filteredData: dataArray,
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

  useEffect(() => {
    if (isActive) {
      // Cuando se activa el select, establece el enfoque en el campo de búsqueda
      inputRef.current.focus();
    }
  }, [isActive]);

  useEffect(() => {
    if (isActive && selectedItem) {
      setSelectBtn(selectedItem);
    }
  }, [isActive, selectedItem]);

// when an item is selected
  const handleItemSelection = (selectedLi, selectedLanguageCode) => {
    changeLang(selectedLanguageCode)
    setSelectBtn(selectedLi)
    setSelectedItem(selectedLi);
    closeSelect();
  }

  const handleSearchInputChange = (event) => {
    const inputValue = event.target.value;
    setSearchData(prevData => ({
      ...prevData,
      searchInp: inputValue,
      hasSearched: true,
      filteredData: dataArray.filter(data => data.label.toLowerCase().includes(inputValue.toLowerCase())),
    }));
  }

  return (
    <div className=''>
      <div className={`wrapper ${isActive ? 'active' : ''}`} ref={wrapperRef}>
        <div className="select-btn" onClick={toggleSelect}>
          <span>{selectBtn}</span>
          <img src={arrowDownIcon} alt="arrowDownIcon" />          
        </div>
        <div className="content">
          <div className="search">
            <img src={searchIcon} alt="searchIcon" />       
            <input
              type="text"
              placeholder='Search'
              value={searchData.searchInp}
              onChange={handleSearchInputChange}
              ref={inputRef} // Asigna la referencia al elemento input
            />
          </div>
          <ul className="options">
            {searchData.hasSearched ? (
              searchData.filteredData.length > 0 ? (
                searchData.filteredData.map((item, index) => (
                  <li
                    key={index}
                    onClick={() => handleItemSelection(item.label, item.code)}
                    className={selectedItem === item.label ? 'selected' : ''}
                  >
                    {item.label}
                  </li>
                ))
              ) : (
                <p>Oops! Language not found</p>
              )
            ) : (
              dataArray.map((item, index) => (
                <li
                  key={index}
                  onClick={() => handleItemSelection(item.label, item.code)}
                  className={selectedItem === item.label ? 'selected' : ''}
                >
                  {t(`navbar.${item.label}`)}
                </li>
              ))
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SelectLanguage;
