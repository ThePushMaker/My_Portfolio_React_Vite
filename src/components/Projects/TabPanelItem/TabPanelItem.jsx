import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import ProjectItemCard from "../ProjectItemCard/ProjectItemCard.jsx";

const variants = {
  open: { opacity: 1 },
  closed: { opacity: 0 },
}

const TabPanel = (props) => {
  let navigate = useNavigate();

  const mostrarRegistros = props.projects.slice(0, 6);

  const toggleMostrarMas = (e) => {
    e.preventDefault();
    // console.log(props.category);    
    
    const newURL = props.category === 'Web Platforms & Applications' ? '/projects/web-apps' : '' 
    || props.category === 'User Experience (UX)' ? '/projects/ux' : ''
    || props.category === 'Community Contributions' ? '/projects/community' : '';
    
    
    navigate(newURL); // Perform navigation immediately

  };
  

  return (
  <>
    { (
      <motion.div animate={props.activeTab === props.index+1 ? "open" : "closed"}
        variants={variants} transition={{ duration: 0.8 }} 
        id={`panel-${props.index+1}`}
        className={`${props.activeTab === props.index+1 ? '' : 'opacity-0 hidden'} `}
      >
        <h3 className="pb-[15px] lg:pb-[20px] text-highlighted_text_color">{props.category}</h3>
        <p className="text-center m-auto pb-[25px] w-[85%] md:w-[90%] lg:pb-[35px] lg:w-[70%]">
          {props.description}
        </p>
        <div
          className="grid grid-cols-1 gap-6
          md:grid-cols-2 lg:grid-cols-3"
        >
          {mostrarRegistros.map((project, index) => {
            return (
                <ProjectItemCard 
                  key={index} 
                  {...project} 
                />
              )
          })}
        </div>
        
        <div className="">
          {props.projects.length > 6 && (

            // { props.category }
            <button  
              className="shadow-large1 shadow-border_color1 hover:shadow-large1 hover:shadow-[red] button_transparent_rounded flex m-auto justify-center mt-6 w-[25%]
              border-[1.5px] border-solid border-border_color1 bg-[black]" 
              onClick={toggleMostrarMas}
            >
              <span>
                DISPLAY MORE
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
