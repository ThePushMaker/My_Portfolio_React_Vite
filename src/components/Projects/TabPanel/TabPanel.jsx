import ProjectCard from "../ProjectCard/ProjectCard.jsx"

const TabPanel = ({category, projects, description}) => {
  return (
    <div
      role="tabpanel"
      id="panel-1"
      className="tab-panel pt-6 transition duration-1000"
    >
      <h3 className="pb-[15px] lg:pb-[20px]">{category}</h3>
      <p className="text-center m-auto pb-[25px] lg:pb-[35px] lg:w-[70%]">
        {description}
      </p>
      <div
        className="grid grid-cols-1 gap-6
      md:grid-cols-2
      "
      >
      {console.log(projects)}
      {/* {console.log(categories[0].projects)} */}
        {projects.map((project, index) => {
          console.log(project)
          return (
              <ProjectCard 
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
