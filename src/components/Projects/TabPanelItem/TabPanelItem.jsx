import ProjectItem from "../ProjectItem/ProjectItem.jsx"

const TabPanel = (props) => {

  return (
    <div
      role="tabpanel"
      id={`panel-${props.index+1}`}
      className={`${props.index !== 0 ? 'absolute top-0 invisible opacity-0' : ''} tab-panel pt-6 transition duration-1000`}
    >
      <h3 className="pb-[15px] lg:pb-[20px] text-highlighted_text_color">{props.category}</h3>
      <p className="text-center m-auto pb-[25px] lg:pb-[35px] lg:w-[70%]">
        {props.description}
      </p>
      <div
        className="grid grid-cols-1 gap-6
        md:grid-cols-3"
      >
      {/* {console.log(props)} */}

        {props.projects.map((project, index) => {
          return (
              <ProjectItem 
                key={index} 
                {...project} 
              />
            )
        })} 
      </div>
    </div>
  );
};

export default TabPanel;
