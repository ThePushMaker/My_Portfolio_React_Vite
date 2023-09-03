import { useEffect, useState } from "react";
import TabPanelItem from "../TabPanelItem/TabPanelItem.jsx"

const Tabs = ( {categories} ) => {
  const [activeTab, setActiveTab] = useState(1); // Add state to track active tab

  const updateIndicator = (index) => {
    // Update indicator position
    const indicator = document.querySelector(".indicator");
    const tab = document.getElementById(`tab-${index}`);
    indicator.style.width = tab.getBoundingClientRect().width + "px";
    indicator.style.left =
      tab.getBoundingClientRect().left -
      tab.parentElement.getBoundingClientRect().left +
      "px";
      
      
    const tabs = document.querySelectorAll(".tab");
    tabs.forEach((tab) => {
      tab.classList.remove("texto_blanco");  
      // tab.classList.add("opacity-90");
    });
    const clickedTab = document.getElementById(`tab-${index}`);
      clickedTab.classList.add("texto_blanco");
      // clickedTab.classList.remove("opacity-90");
    };
    
  const handleTabClick = (index) => {
    setActiveTab(index);
    // Remove transition classes from all panels and indicator
    const panels = document.querySelectorAll(".tab-panel");
    panels.forEach((panel) => {
      panel.classList.remove("visible", "opacity-100");
      panel.classList.add("invisible", "opacity-0");
    });
    
    // Apply transition classes to the clicked panel
    const clickedPanel = document.getElementById(`panel-${index}`);
    clickedPanel.classList.remove("invisible", "opacity-0");
    clickedPanel.classList.add("visible", "opacity-100");
    
    
    // const section = document.getElementById(`projects`);
    // section.classList.add("height", "5000px");
    
  };

  useEffect(() => {
    updateIndicator(activeTab);

    // Función que se ejecutará cuando cambie el tamaño de la pantalla
    const handleResize = () => {
      // Update indicator position
      updateIndicator(activeTab);

      // Coloca aquí el código que deseas ejecutar cuando cambie el tamaño
    };
    // Agregar un event listener al evento 'resize' del objeto window
    window.addEventListener("resize", handleResize);

    // Eliminar el event listener cuando el componente se desmonte
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [activeTab]);

  return (
    <>
      <div
        id="projects-tabs"
        role="tablist"
        aria-label="tabs"
        className="relative overflow-hidden shadow-2xl shadow-900/20 nav nav-pills h-[90px] 
        md:h-[75px] 
        lg:w-[72%]"
      >
        <div className="flex h-[100%]">
          <div className="indicator h-[100%] rounded-full shadow-md"></div>
          {categories.map((tab, index) => {
            return (
              <button
                key={index}
                id={`tab-${index + 1}`}
                className="w-[100%] tab nav-item nav-link"
                onClick={() => handleTabClick(index + 1)} // Call the click handler
              >
                <span
                  className="text-[12px] font-thin text-link_color hover:text-link_color_hover transition duration-300   
                  md:text-[18px] 
                  lg:font-[500]"
                >
                  {tab.category}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <div
        className="tabs_panel relative rounded-3xl mt-[5px] active show
        lg:mt-[15px]"
      >
        {categories.map((category, index) => {
          // console.log(project)
          return (
              <TabPanelItem
                key={index} 
                index={index}
                {...category}
              />
            )
        })} 

      </div>
    </>
  );
};

export default Tabs;
