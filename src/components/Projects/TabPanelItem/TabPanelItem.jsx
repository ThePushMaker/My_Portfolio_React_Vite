import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { routes } from '../../../routes';
import ProjectsListGrid from "../ProjectsListGrid/ProjectsListGrid";
import { useTranslation } from "react-i18next";

const variants = {
  open: { opacity: 1 },
  closed: { opacity: 0 },
}

const TabPanel = (props) => {
  const [ t ] = useTranslation("global");
  let navigate = useNavigate();

  const mostrarRegistros = props.projects.slice(0, 6);

  const toggleMostrarMas = (e) => {
    e.preventDefault();
    // console.log(props.category);    
    
    const newURL = routes[props.category];

    
    navigate(newURL); // Perform navigation immediately

  };
  

  return (
  <>
    { (
      <motion.div animate={props.activeTab === props.index+1 ? "open" : "closed"}
        variants={variants} transition={{ duration: 0.8 }} 
        id={`panel-${props.index+1}`}
        className={`${props.activeTab === props.index+1 ? '' : 'hidden'} `}
      >
        <h3 className="pb-[15px] lg:pb-[20px] text-highlighted_text_color">{props.category}</h3>
        <p className="text-center m-auto pb-[25px] w-[85%] md:w-[90%] lg:pb-[35px] lg:w-[70%]">
          {props.description}
        </p>
        
        <ProjectsListGrid 
          projects={mostrarRegistros} 
          category={props.category} 
        />
        
        <div className="">
          {props.projects.length > 6 && (

            // { props.category }
            <button  
              className="button_transparent_rounded shadow-sm shadow-border_color1 hover:shadow-md hover:shadow-neon_color2
              flex m-auto justify-center mt-6 w-fit border-[1.5px] border-solid border-border_color1 bg-[black] bg-opacity-40" 
              onClick={toggleMostrarMas}
            >
              <span>
                {t('TabPanelItem.display_more')}
                {/* {mostrarMas ? "Display Less" : "Display More"} */}
              </span>
              
            </button>
      
          )}
        </div>
      </motion.div>
    )}
    
  </>
  );
};

export default TabPanel;
