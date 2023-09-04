import ProjectItem from "../ProjectItem/ProjectItem.jsx"
import { motion } from "framer-motion";

const variants = {
  open: { opacity: 1 },
  closed: { opacity: 0 },
}

const TabPanel = (props) => {

  // const [mostrarMas, setMostrarMas] = useState(false);
  const mostrarRegistros = props.projects.slice(0, 6);

  const toggleMostrarMas = () => {
    // setMostrarMas(!mostrarMas);
    console.log("click en mostrar más");    
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
        <p className="text-center m-auto pb-[25px] lg:pb-[35px] lg:w-[70%]">
          {props.description}
        </p>
        <div
          className="grid grid-cols-1 gap-6
          md:grid-cols-2 lg:grid-cols-3"
        >
        
          {mostrarRegistros.map((project, index) => {
            return (
                <ProjectItem 
                  key={index} 
                  {...project} 
                />
              )
          })}
        </div>
        
        <div className="">
          {props.projects.length > 6 && (
            <button  className="button_transparent_rounded flex m-auto justify-center" onClick={toggleMostrarMas}>
              <span>
                Display More
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
