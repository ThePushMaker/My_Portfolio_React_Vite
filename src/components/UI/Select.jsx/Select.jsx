import './Select.css'
import { useEffect, useState, useRef } from 'react';
import arrowDownIcon from '../../../assets/img/icons/angle-down.svg'
import searchIcon from '../../../assets/img/icons/search.svg'
import flagUS from '../../../assets/img/flags/flag-us.svg'
import flagMX from '../../../assets/img/flags/flag-mx.svg'

const Select = () => {
  const [isActive, setIsActive] = useState(false);
  const [selectBtn, setSelectBtn] = useState("Spanish");
  const [searchData, setSearchData] = useState({
    searchInp: '',
    filteredCountries: [],
    hasSearched: false,
  });
  const [selectedItem, setSelectedItem] = useState(null);

  const wrapperRef = useRef(null); // Ref para el div contenedor del select
  const inputRef = useRef(null); // Ref para el elemento input del campo de búsqueda

  const toggleSelect = () => {
    setIsActive(!isActive);
  }

  const closeSelect = () => {
    setIsActive(false);
    setSearchData(prevData => ({
      ...prevData,
      searchInp: '', // Establecer el campo de búsqueda en una cadena vacía al cerrar el select
      filteredCountries: countries,
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

  const countries = ["English", "Spanish"];

  const updateName = (selectedLi) => {
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
      filteredCountries: countries.filter(data => data.toLowerCase().includes(inputValue.toLowerCase())),
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
              searchData.filteredCountries.length > 0 ? (
                searchData.filteredCountries.map((item, index) => (
                  <li
                    key={index}
                    onClick={() => updateName(item)}
                    className={selectedItem === item ? 'selected' : ''}
                  >
                    {item}
                  </li>
                ))
              ) : (
                <p>Oops! Language not found</p>
              )
            ) : (
              countries.map((item, index) => (
                <li
                  key={index}
                  onClick={() => updateName(item)}
                  className={selectedItem === item ? 'selected' : ''}
                >
                  {item}
                </li>
              ))
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Select;
