import { useState } from "react";
import Pagination from "../Pagination/Pagination.jsx";
import ProjectItem from "../ProjectItem/ProjectItem.jsx"

const TabPanel = (props) => {
  const [mostrarMas, setMostrarMas] = useState(false);
  
  const mostrarRegistros = mostrarMas ? props.projects : props.projects.slice(0, 6);

  const toggleMostrarMas = () => {
    // setMostrarMas(!mostrarMas);
    console.log("click en mostrar más");
    
  };

  return (
    <div
      role="tabpanel"
      id={`panel-${props.index+1}`}
      className={`${props.index !== 0 ? 'absolute top-0 invisible opacity-0' : ''} tab-panel pt-6 transition duration-1000 max-h-screen`}
    >
      <h3 className="pb-[15px] lg:pb-[20px] text-highlighted_text_color">{props.category}</h3>
      <p className="text-center m-auto pb-[25px] lg:pb-[35px] lg:w-[70%]">
        {props.description}
      </p>
      <div
        className="grid grid-cols-1 gap-6
        md:grid-cols-2 lg:grid-cols-3 grid-rows-3"
      >
      
      {console.log(props.projects)}

        {mostrarRegistros.map((project, index) => {
          return (
              <ProjectItem 
                key={index} 
                {...project} 
              />
            )
        })}
        
      </div>
      
      <div className="relative top-[-260px]">
        {props.projects.length > 6 && (
          <button  className="button_transparent_rounded flex m-auto justify-center" onClick={toggleMostrarMas}>
            <span>
              {mostrarMas ? "Mostrar menos" : "Mostrar más"}
            </span>
          </button>
        )}
      </div>
      
        {/* <Pagination /> */}
        
    </div>
  );
};

export default TabPanel;
