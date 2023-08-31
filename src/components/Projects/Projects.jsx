import { useEffect, useState } from "react";
import colorSharp2 from "../../assets/img/color-sharp2.png";
import "./Projects.css"
import projectsJSON from "../../data/projects.json";
import '../ProjectCard/ProjectCard';
import ProjectCard from "../ProjectCard/ProjectCard";

// proximamente 'Research and Experimentation'

const Projects = () => {
  // const [data, setData] = useState(projectsJSON);
  const {categories} = projectsJSON;
  // console.log(categories)
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
  }

  

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
    window.addEventListener('resize', handleResize);

    // Eliminar el event listener cuando el componente se desmonte
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [activeTab]);
  
 
 

  return (
    <>
      <section className="px-4 md:px-14 lg:px-20 project py-[80px] px-0 " id="projects">
        <div className="container m-auto">
          <div className="w-full">
            <h2>Projects</h2>
            <p className="
            mt-[14px] mx-auto mb-[35px] text-center w-[90%]
            lg:w-[70%]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
              doloremque adipisci unde voluptatum numquam aspernatur architecto
              dolores commodi cum, ullam vitae! Possimus voluptatibus quasi
              dolorem quia molestias nostrum harum illum!
            </p>

            <div>
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
                  {categories.map((tab, index) =>{
                    return (
                      <button
                        key={index}
                        id={`tab-${index + 1}`}
                        className="w-[100%] tab nav-item nav-link" 
                        
                        onClick={() => handleTabClick(index + 1)} // Call the click handler
                      >
                        <span className="text-[14px] font-thin    
                          md:text-[18px] 
                          lg:font-[500]"
                        >{tab.category}</span>
                      </button>
                    )
                  })}
                </div>
              </div>

              <div className="relative rounded-3xl tabs_panel mt-[5px]  tab-pane active show
                lg:mt-[15px]  
              ">
                <div
                  role="tabpanel"
                  id="panel-1"
                  className="tab-panel pt-6 transition duration-1000"
                >
                  <h3 className="pb-[15px] lg:pb-[20px]">First tab panel</h3>
                  <p className="text-center m-auto pb-[25px] lg:pb-[35px] lg:w-[70%]">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Quas dolores voluptate temporibus, atque ab eos, delectus at
                    ad hic voluptatem veritatis iure, nulla voluptates quod
                    nobis doloremque eaque! Perferendis, soluta.
                  </p>
                  <div className="grid grid-cols-1 gap-6
                  md:grid-cols-2
                  ">
                  {categories[0].projects.map((category, index) =>{
                    return (  
                      <ProjectCard 
                        key={index}
                        {... category}
                      />
                    )
                  })}
                  </div>
                </div>
                <div
                  role="tabpanel"
                  id="panel-2"
                  className="tab-panel absolute top-0 invisible opacity-0 p-6 transition duration-1000"
                >
                  <h3 className="pb-[15px] lg:pb-[20px]">Second tab panel</h3>
                  
                </div>
                <div
                  role="tabpanel"
                  id="panel-3"
                  className="tab-panel absolute top-0 invisible opacity-0 p-6 transition duration-1000"
                >
                  <h3 className="pb-[15px] lg:pb-[20px]">Third tab panel</h3>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          className="background-image-right"
          src={colorSharp2}
          alt="background_right"
        />
      </section>
    </>
  );
};

export default Projects;
