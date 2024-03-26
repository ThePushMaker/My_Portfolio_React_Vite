import { useTranslation } from 'react-i18next';
import TabPanelItem from '../TabPanelItem/TabPanelItem';
import { useEffect, useRef, useState } from 'react';


const Tabs = ({ categories }) => {
  const [ t ] = useTranslation("global");
  const [activeTab, setActiveTab] = useState(1);
  const indicatorRef = useRef(null); 
  
  const handleTabClick = (index) => {
    setActiveTab(index);
  };
  
  const updateIndicator = (index) => {
    // Get the indicator element and the clicked tab
    const indicator = indicatorRef.current;
    const clickedTab = document.getElementById(`tab-${index}`);
        
    if(indicator && clickedTab) {
      // Calculate the indicator width and left position
      const tabRect = clickedTab.getBoundingClientRect();
      const parentRect = clickedTab.parentElement.getBoundingClientRect();
      
      indicator.style.width = `${tabRect.width}px`;
      indicator.style.height = `${tabRect.height}px`;
      indicator.style.left = `${tabRect.left - parentRect.left}px`;      
      indicator.style.top = `${tabRect.top - parentRect.top}px`;      
    }
  
  // p
    // Remove 'texto_blanco' class from all tabs
    const tabs = document.querySelectorAll(".tab");
    tabs.forEach((tab) => {
      tab.classList.remove("texto_blanco");
    });

    // Add 'texto_blanco' class to the clicked tab
    if (clickedTab) {
      clickedTab.classList.add("texto_blanco");
    }
  };
  
  useEffect(() => {
    // Función que se ejecutará cuando cambie el tamaño de la pantalla
    const handleResize = () => {
      updateIndicator(activeTab);
    };
    // Agregar un event listener al evento 'resize' del objeto window
    window.addEventListener("resize", handleResize);

    // Eliminar el event listener cuando el componente se desmonte
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  
  useEffect(()=> {
    updateIndicator(activeTab);
  });
  
  
  
  return(
    <div>
      {/* Botones de pestaña */}
      <div className="relative flex space-x-4
        shadow-2xl shadow-900/20 nav nav-pills h-[180px] my-0 mx-auto rounded-[50px] bg-container_color4 overflow-hidden
        md:h-[75px] lg:w-[72%]"
      >
        <div className="flex h-[100%] w-[100%] flex-wrap md:flex-nowrap">
          <div ref={indicatorRef} className="indicator h-[100%] rounded-full shadow-md"></div>
          {categories.map((tab, index) => {
            return (
              <button
                key={index}
                id={`tab-${index + 1}`}
                className="w-[100%] tab nav-item nav-link hover:underline hover:decoration-link_color_hover text-dark_link_color hover:text-dark_link_color_hover transition-all duration-300"
                onClick={() => handleTabClick(index+1)}
              >
                <span
                  className="text-[20.5px] font-thin 
                  md:text-[18px] lg:text-[20px]
                  lg:font-[500]"
                >
                  {tab.category}
                </span>
              </button>
            );
          })}
        
        </div>  
        
      </div>

      {/* Contenido de las pestañas */}
      <div className='mt-8'>
        {categories.map((category, index) => {
          // console.log(project)
          return (
            <TabPanelItem
              key={index} 
              index={index}
              activeTab={activeTab}
              {...category}
            />
            )
          })} 
      </div>
      

    </div>
  );
}

export default Tabs;